import { Create, Num, Bound, Rectangle, Shaping } from 'pts'
import type { GroupLike, CanvasSpace, CanvasForm } from 'pts'
import type { PointDescription } from 'types'
import { fullWidthRect, rgbaFromHex } from './'

export class BackgroundParticles {
  private space: CanvasSpace
  private form: CanvasForm
  private points: GroupLike
  private pointDescriptions: PointDescription[] = []
  public color: string
  public composite: string

  constructor(
    space: CanvasSpace,
    form: CanvasForm,
    color: string,
    composite?: string
  ) {
    this.space = space
    this.form = form
    this.color = color
    this.composite = composite || 'source-over'
  }

  public run(): void {
    this.space.add({
      start: (bound) => {
        this.points = Create.distributeRandom(bound, Num.randomRange(80, 200))

        this.points.forEach(() => {
          this.pointDescriptions.push({
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

        this.points.forEach((point, index) => {
          const desc = this.pointDescriptions[index]
          point.toAngle(desc.angle, desc.magnitude, true)
          // If point is outside of bound, move it to random point within bound
          if (!Rectangle.withinBound(bound, point)) {
            point.to(Create.distributeRandom(bound, 1)[0])
          }

          this.form
            .composite(this.composite)
            .fillOnly(
              rgbaFromHex(
                this.color,
                Num.mapToRange(cycle, 0, 1, desc.minAlpha, desc.maxAlpha)
              )
            )
            .point(point, 1, 'circle')
        })
      },
    })
  }
}
