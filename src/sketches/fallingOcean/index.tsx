import React, { useState, useEffect, useRef } from 'react'
import { PtsCanvas } from '../sketch'
import {
  CanvasSpace,
  Tempo,
  Num,
  Circle,
  Sound,
  Font,
  CanvasForm,
  Bound,
} from 'pts'
import BubbleGroup from './BubbleGroup'
import { COLORS, INTRO_TEXT } from './constants'
import { BackgroundParticles, solidBackground, rgbaFromHex } from '../../tools'
import SONG from '../../assets/daniel_birch_restless_states_constrained_desire_2.mp3'

export const FallingOcean: React.FC = () => {
  const backgroundParticlesRef = useRef(null)
  const micRef = useRef(null)
  const tempoRef = useRef(Tempo.fromBeat(50))
  const songRef = useRef(null)
  const bubbleGroupsRef = useRef([])
  const [playing, setPlaying] = useState(true)

  // Set up pause event listener
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Space':
          setPlaying(!playing)
          handlePause()
          break
      }
    })
  }, [])

  /**
   * Draws the ocean background
   */
  const drawBackground = (
    space: CanvasSpace,
    form: CanvasForm,
    time: number
  ) => {
    solidBackground(space, form, COLORS.black)

    const SINKING_TIME = 120 * 1000
    let scale = time / SINKING_TIME

    if (scale > 0.8) scale = 0.8 // end animation if past SINKING_TIME

    const gradient = form.gradient([
      [Num.mapToRange(scale, 0, 1, 0.3, 0.92), COLORS.black],
      [Num.mapToRange(scale, 0, 1, 0.8, 0.99), COLORS.darkblue],
      [Num.mapToRange(scale, 0, 1, 0.92, 1), COLORS.bluegrotto],
      [1, COLORS.cyan],
    ])

    const c1 = Circle.fromCenter(
      space.center,
      Math.max(space.width, space.height)
    )
    const oppositePointer = space.pointer
      .clone()
      .rotate2D(Math.PI, space.center)
    const c2 = Circle.fromCenter(oppositePointer, 2)
    form.fill(gradient(c1, c2)).circle(c1)
  }

  /**
   * Draws the bubbles
   */
  const drawBubbles = (space: CanvasSpace, form: CanvasForm, time: number) => {
    if (micRef.current && micRef.current.playable) {
      let freqDomain = micRef.current.freqDomain()
      // Cut out low and high banks
      freqDomain = freqDomain.slice(1, 8)
      const freqAverage =
        freqDomain.reduce((a: number, b: number) => a + b) / freqDomain.length
      const audioScale = Num.mapToRange(freqAverage, 0, 180, 0, 1)

      // Create bubbles more frequently, the louder the input
      if (Math.random() < audioScale) {
        bubbleGroupsRef.current.push(
          new BubbleGroup(space.pointer, space, audioScale, 'exclusion', {
            fill: COLORS.bluegrotto,
            stroke: COLORS.cyan,
          })
        )
      }
    }

    // Reverse bubble group to have it act like a stack
    // Run through bubble groups backwards, chopping down to maximum number of
    // elements, and removing those that are already finished. Otherwise,
    // Update and render
    const revBubbleGroup = [...bubbleGroupsRef.current].reverse()
    for (let i = revBubbleGroup.length - 1; i > 0; --i) {
      if (revBubbleGroup[i].isFinished() || revBubbleGroup.length > 32) {
        revBubbleGroup.splice(i, 1)
      } else {
        revBubbleGroup[i].update(time)
        revBubbleGroup[i].render(form)
      }
    }
  }

  /**
   * Draws
   */
  const setupDrawText = (space: CanvasSpace, form: CanvasForm) => {
    const font = new Font(80, 'Montserrat, Helvetica, sans-serif')
    const textTempo = tempoRef.current.every(100)
    let text = INTRO_TEXT[0]

    textTempo.start((count) => {
      text = INTRO_TEXT[count]
      if (count > 1) {
        font.size = 28
      }
      if (count >= INTRO_TEXT.length) return true
    }, 0)

    textTempo.progress((count, t) => {
      const y = Num.mapToRange(
        1 - t,
        0,
        1,
        space.height - 60,
        space.height - 120
      )
      const position = [60, y]
      const alpha = Num.cycle(t)
      const color = rgbaFromHex('#fff', alpha)

      form.fill(color).stroke(color).font(font).text(position, text)
      if (count >= INTRO_TEXT.length) return true
    }, 0)
  }

  /**
   * [connectMicrophone description]
   * @return [description]
   */
  const connectMicrophone = () => {
    Sound.input({ audio: true }).then((micInput) => {
      micInput.analyze(32, -50, -30)
      // Ensure the ctx isn't suspended
      if (micInput.ctx.state === 'suspended') {
        micInput.ctx.resume()
      }

      micRef.current = micInput
    })
  }

  /**
   * Load the music
   */
  const loadAudio = () => {
    Sound.load(SONG).then((song) => {
      // NOTE: come back to this when new pts version is published
      // const ctx = song.ctx
      // const gainNode = ctx.createGain()

      // song.connect(gainNode)
      // song.setOutputNode(gainNode)
      // gainNode.gain.value = 0.1

      song.start()

      songRef.current = song
      // this.gainNode = gainNode
    })
  }

  /**
   * Handle a pause action
   */
  const handlePause = () => {
    if (songRef.current && songRef.current.playing) {
      songRef.current.stop()
    } else {
      songRef.current.start()
    }
  }

  const handleStart = (bound: Bound, space: CanvasSpace, form: CanvasForm) => {
    connectMicrophone()
    // loadAudio()
    backgroundParticlesRef.current = new BackgroundParticles(
      bound,
      COLORS.tiffanyblue,
      'color-dodge'
    )
    setupDrawText(space, form)
  }

  const handleAnimate = (
    space: CanvasSpace,
    form: CanvasForm,
    time: number
  ) => {
    drawBackground(space, form, time)
    backgroundParticlesRef.current.draw(space, form, time)
    drawBubbles(space, form, time)
  }

  return (
    <PtsCanvas
      name="falling-ocean"
      play={playing}
      handleStart={handleStart}
      handleAnimate={handleAnimate}
      style={{ height: '100%', width: '100%' }}
      tempo={tempoRef.current}
      canvasStyle={{ width: '100%', height: '100%' }}
    />
  )
}
