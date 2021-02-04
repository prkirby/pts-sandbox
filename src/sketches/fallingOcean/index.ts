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
  Pt,
  Geom,
} from 'pts'
import type { GroupLike } from 'pts'
import Sketch from '../sketch'
import BubbleGroup from './BubbleGroup'
import { COLORS } from './constants'
import { PointDescription } from './Types'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm
  private tempo: Tempo

  constructor() {
    super('Falling Ocean')
    this.tempo = Tempo.fromBeat(100)
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
      const background = Sketch.fullWidthRect(space)
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
      animate: (time, ftime, space) => {
        const cycle = Num.cycle((time % 5000) / 5000, Shaping.sineInOut)
        const bound = Bound.fromGroup(Sketch.fullWidthRect(space))

        points.forEach((point, index) => {
          const desc = pointDescriptions[index]
          point.toAngle(desc.angle, desc.magnitude, true)
          // If point is outside of bound, move it to random point within bound
          if (!Rectangle.withinBound(bound, point)) {
            point.to(Create.distributeRandom(bound, 1)[0])
          }

          this.form
            .fillOnly(
              Sketch.rgbaFromHex(
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
    const BubbleGroups: Set<BubbleGroup> = new Set()

    this.tempo.every(3).start(() => {
      BubbleGroups.add(new BubbleGroup(this.space.pointer))
    }, 0)

    this.space.add((time, _ftime, space) => {
      BubbleGroups.forEach((bubbleGroup) => {
        if (bubbleGroup.isFinished()) {
          BubbleGroups.delete(bubbleGroup)
        }

        bubbleGroup.update(time, space)
        bubbleGroup.render(this.form)
      })
    })
  }

  /**
   * Init Falling Ocean
   */
  init(): void {
    this.addBackground()
    this.addBackgroundParticles()
    this.drawBubbles()
    this.space.add(this.tempo)
  }
}

export default FallingOcean
