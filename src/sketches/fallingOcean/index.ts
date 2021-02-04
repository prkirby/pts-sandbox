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
      let audioScale = 0.2 // Default audio scale if no input
      if (this.micInput) {
        let freqDomain = this.micInput.freqDomain()
        // Cut out low and high banks
        freqDomain = freqDomain.slice(1, 8)
        const freqAverage =
          freqDomain.reduce((a, b) => a + b) / freqDomain.length
        audioScale = Num.mapToRange(freqAverage, 0, 180, 0, 1)
      }

      if (Math.random() < audioScale)
        bubbleGroups.push(
          new BubbleGroup(this.space.pointer, this.space, audioScale)
        )
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
  private async connectMicrophone(): Promise<boolean> {
    Sound.input().then((micInput) => {
      micInput.analyze(32, -70, -20)
      this.micInput = micInput
      return true
    })
    return false
  }

  private async loadAudio(): Promise<boolean> {
    console.log(SONG)
    const song = await Sound.load(SONG)
    this.song = song
    song.start()
    return true
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
  async init(): Promise<boolean> {
    this.addBackground()
    backgroundParticles(this.space, this.form, COLORS.tiffanyblue)
    this.drawBubbles()
    this.space.add(this.tempo)
    await this.connectMicrophone()
    await this.loadAudio()
    return true
  }
}

export default FallingOcean
