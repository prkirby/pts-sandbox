import { CanvasSpace, CanvasForm, Tempo, Num, Circle, Sound } from 'pts'
import Sketch from '../sketch'
import BubbleGroup from './BubbleGroup'
import { COLORS } from './constants'
import { backgroundParticles, solidBackground } from 'tools'
import SONG from './daniel_birch_restless_states_constrained_desire_2.mp3'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm
  private tempo: Tempo
  private micInput: Sound
  private song: Sound
  private gainNode: GainNode

  constructor() {
    super('Falling Ocean')
    this.tempo = Tempo.fromBeat(50)
  }

  /**
   * Add the ocean background
   */
  private addBackground(): void {
    solidBackground(this.space, this.form, COLORS.black)
    const gradient = this.form.gradient([
      [0.5, '#000'],
      [0.92, COLORS.darkblue],
      [0.98, COLORS.bluegrotto],
      [1, COLORS.cyan],
    ])

    this.space.add((_time, _ftime, space) => {
      const c1 = Circle.fromCenter(
        space.center,
        Math.max(space.width, space.height)
      )
      const oppositePointer = space.pointer
        .clone()
        .rotate2D(Math.PI, space.center)
      const c2 = Circle.fromCenter(oppositePointer, 2)
      this.form.fill(gradient(c1, c2)).circle(c1)
    })
  }

  /**
   * Add the bubbles
   */
  private drawBubbles(): void {
    const bubbleGroups: BubbleGroup[] = []

    this.tempo.every(1).progress(() => {
      if (this.micInput && this.micInput.playable) {
        let freqDomain = this.micInput.freqDomain()
        // Cut out low and high banks
        freqDomain = freqDomain.slice(1, 8)
        const freqAverage =
          freqDomain.reduce((a, b) => a + b) / freqDomain.length
        const audioScale = Num.mapToRange(freqAverage, 0, 180, 0, 1)

        // Create bubbles more frequently, the louder the input
        if (Math.random() < audioScale)
          bubbleGroups.push(
            new BubbleGroup(this.space.pointer, this.space, audioScale)
          )
      }
    }, 0)

    this.space.add((time) => {
      // Reverse bubble group to have it act like a stack
      // Run through bubble groups backwards, chopping down to maximum number of
      // elements, and removing those that are already finished. Otherwise,
      // Update and render
      const revBubbleGroup = [...bubbleGroups].reverse()
      for (let i = revBubbleGroup.length - 1; i > 0; --i) {
        if (revBubbleGroup[i].isFinished() || revBubbleGroup.length > 32) {
          revBubbleGroup.splice(i, 1)
        } else {
          revBubbleGroup[i].update(time)
          revBubbleGroup[i].render(this.form)
        }
      }
    })
  }

  /**
   * [connectMicrophone description]
   * @return [description]
   */
  private connectMicrophone(): void {
    Sound.input({ audio: true }).then((micInput) => {
      this.micInput = micInput
      this.micInput.analyze(32, -50, -30)
      // Ensure the ctx isn't suspended
      if (this.micInput.ctx.state === 'suspended') {
        this.micInput.ctx.resume()
      }
    })
  }

  private loadAudio(): void {
    Sound.load(SONG).then((song) => {
      const ctx = song.ctx
      const gainNode = ctx.createGain()

      song.connect(gainNode)
      song.setOutputNode(gainNode)
      gainNode.gain.value = 0.2

      song.start()
      const _global = (window /* browser */ || global) /* node */ as any
      _global.song = song
      // song._outputNode.connect(song.ctx.destination)
      console.log('%c ' + song.ctx.state, 'color: green')
      this.song = song
      this.gainNode = gainNode
    })
  }

  protected onPause(): void {
    if (this.song.playing) {
      this.song.stop()
    } else {
      this.song.start()
    }
  }

  /**
   * Init Falling Ocean
   */
  protected init(): void {
    this.connectMicrophone()
    this.loadAudio()
    this.addBackground()
    backgroundParticles(this.space, this.form, COLORS.tiffanyblue)
    this.drawBubbles()
    this.space.add(this.tempo)
  }
}

export default FallingOcean
