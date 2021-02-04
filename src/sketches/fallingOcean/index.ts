import {
  CanvasSpace,
  CanvasForm,
  Tempo,
  Num,
  Create,
  Bound,
  Circle,
  Shaping,
  Rectangle,
  Sound,
} from 'pts'
import type { GroupLike } from 'pts'
import Sketch from '../sketch'
import BubbleGroup from './BubbleGroup'
import { COLORS } from './constants'
import { fullWidthRect, rgbaFromHex } from 'tools'
import { PointDescription } from 'tools/types'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm
  private tempo: Tempo
  private micInput: Sound

  constructor() {
    super('Falling Ocean')
    this.tempo = Tempo.fromBeat(50)
  }

  /**
   * Add the ocean background
   */
  private addBackground(): void {
    const gradient = this.form.gradient([
      [0.5, '#000'],
      [0.92, COLORS.darkblue],
      [0.98, COLORS.bluegrotto],
      [1, COLORS.cyan],
    ])

    this.space.add((_time, _ftime, space) => {
      const background = fullWidthRect(space)
      this.form.fill(COLORS.darkblue).stroke(COLORS.darkblue).rect(background)
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
   * Adds background particles
   */
  private addBackgroundParticles(): void {
    let points: GroupLike

    const pointDescriptions: PointDescription[] = []

    this.space.add({
      start: (bound) => {
        points = Create.distributeRandom(bound, Num.randomRange(80, 200))

        points.forEach(() => {
          pointDescriptions.push({
            angle: Num.randomRange(0, 2 * Math.PI),
            magnitude: Num.randomRange(0.1, 0.8),
            minAlpha: Num.randomRange(0, 0.4),
            maxAlpha: Num.randomRange(0.4, 0.8),
          })
        })
      },
      animate: (time, _ftime, space) => {
        const cycle = Num.cycle((time % 5000) / 5000, Shaping.sineInOut)
        const bound = Bound.fromGroup(fullWidthRect(space))

        points.forEach((point, index) => {
          const desc = pointDescriptions[index]
          point.toAngle(desc.angle, desc.magnitude, true)
          // If point is outside of bound, move it to random point within bound
          if (!Rectangle.withinBound(bound, point)) {
            point.to(Create.distributeRandom(bound, 1)[0])
          }

          this.form
            .fillOnly(
              rgbaFromHex(
                COLORS.tiffanyblue,
                Num.mapToRange(cycle, 0, 1, desc.minAlpha, desc.maxAlpha)
              )
            )
            .point(point, 1, 'circle')
        })
      },
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

  /**
   * Init Falling Ocean
   */
  async init(): Promise<boolean> {
    this.addBackground()
    this.addBackgroundParticles()
    this.drawBubbles()
    this.space.add(this.tempo)
    return this.connectMicrophone()
  }
}

export default FallingOcean
