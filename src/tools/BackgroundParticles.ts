import { Create, Num, Bound, Rectangle, Shaping } from 'pts'
import type { GroupLike, CanvasSpace, CanvasForm } from 'pts'
import type { PointDescription } from '../types'
import { fullWidthRect, rgbaFromHex } from './'

export class BackgroundParticles {
  private points: GroupLike
  private pointDescriptions: PointDescription[] = []
  public color: string
  public composite: string

  constructor(
    bound: Bound,
    color: string,
    composite?: string
  ) {
    this.color = color
    this.composite = composite || 'source-over'
    this.points = Create.distributeRandom(bound, Num.randomRange(80, 200))
    this.points.forEach(() => {
      this.pointDescriptions.push({
        angle: Num.randomRange(0, 2 * Math.PI),
        magnitude: Num.randomRange(0.1, 0.8),
        minAlpha: Num.randomRange(0, 0.4),
        maxAlpha: Num.randomRange(0.4, 0.8),
      })
    })
  }

  public draw(space: CanvasSpace, form: CanvasForm, time: number): void {
    const cycle = Num.cycle((time % 5000) / 5000, Shaping.sineInOut)
    const bound = Bound.fromGroup(fullWidthRect(space))

    this.points.forEach((point, index) => {
      const desc = this.pointDescriptions[index]
      point.toAngle(desc.angle, desc.magnitude, true)
      // If point is outside of bound, move it to random point within bound
      if (!Rectangle.withinBound(bound, point)) {
        point.to(Create.distributeRandom(bound, 1)[0])
      }

      form
        .composite(this.composite)
        .fillOnly(
          rgbaFromHex(
            this.color,
            Num.mapToRange(cycle, 0, 1, desc.minAlpha, desc.maxAlpha)
          )
        )
        .point(point, 1, 'circle')
    })
  }
}
