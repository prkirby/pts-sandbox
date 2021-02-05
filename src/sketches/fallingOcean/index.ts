import { CanvasSpace, CanvasForm, Tempo, Num, Circle, Sound, Font } from 'pts'
import Sketch from '../sketch'
import BubbleGroup from './BubbleGroup'
import { COLORS, INTRO_TEXT } from './constants'
import { BackgroundParticles, solidBackground, rgbaFromHex } from 'tools'
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

    const SINKING_TIME = 75 * 1000
    this.space.add((time, _ftime, space) => {
      let scale = time / SINKING_TIME

      if (scale > 0.8) scale = 0.8 // end animation if past SINKING_TIME

      const gradient = this.form.gradient([
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
            new BubbleGroup(
              this.space.pointer,
              this.space,
              audioScale,
              'exclusion',
              { fill: COLORS.bluegrotto, stroke: COLORS.cyan }
            )
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
   * [drawText description]
   */
  private drawText(): void {
    const font = new Font(80, 'Montserrat, Helvetica, sans-serif')
    const textTempo = this.tempo.every(100)
    let text = INTRO_TEXT[0]

    textTempo.start((count) => {
      text = INTRO_TEXT[count]
      console.log(text)
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
        this.space.height - 60,
        this.space.height - 120
      )
      const position = [60, y]
      const alpha = Num.cycle(t)
      const color = rgbaFromHex('#fff', alpha)
      this.form.fill(color).stroke(color).font(font).text(position, text)
      if (count >= INTRO_TEXT.length) return true
    }, 0)
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

  /**
   * [loadAudio description]
   */
  private loadAudio(): void {
    Sound.load(SONG).then((song) => {
      const ctx = song.ctx
      const gainNode = ctx.createGain()

      song.connect(gainNode)
      song.setOutputNode(gainNode)
      gainNode.gain.value = 0.1

      song.start()

      this.song = song
      this.gainNode = gainNode
    })
  }

  /**
   * [onPause description]
   */
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
    // this.loadAudio()
    this.addBackground()
    new BackgroundParticles(
      this.space,
      this.form,
      COLORS.tiffanyblue,
      'color-dodge'
    ).run()
    this.drawBubbles()
    this.space.add(this.tempo)
    this.drawText()
  }
}

export default FallingOcean
