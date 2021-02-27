import { Create, Num, Bound, Rectangle, Shaping } from 'pts'
import type { GroupLike, Pt, CanvasSpace, CanvasForm } from 'pts'
import type { PointDescription } from '../types'
import { fullWidthRect, rgbaFromHex } from './'

export class BackgroundParticles {
  private _points: GroupLike
  private _pointDescriptions: PointDescription[] = []
  public color: string
  public composite: string

  get points(): GroupLike {
    return this._points
  }

  constructor(
    bound: Bound,
    color: string,
    composite?: string,
    minPoints = 80,
    maxPoints = 200
  ) {
    this.color = color
    this.composite = composite || 'source-over'
    this._points = Create.distributeRandom(
      bound,
      Num.randomRange(minPoints, maxPoints)
    )
    this._points.forEach(() => {
      this._pointDescriptions.push({
        angle: Num.randomRange(0, 2 * Math.PI),
        magnitude: Num.randomRange(0.1, 0.8),
        minAlpha: Num.randomRange(0, 0.4),
        maxAlpha: Num.randomRange(0.4, 0.8),
      })
    })
  }

  /**
   * Draws an individual point or 'particle' on the canvas
   * @param point
   * @param index
   * @param cycle
   * @param bound
   * @param form
   */
  private drawPoint = function (
    point: Pt,
    index: number,
    cycle: number,
    form: CanvasForm
  ): void {
    const desc = this._pointDescriptions[index]

    form
      .composite(this.composite)
      .fillOnly(
        rgbaFromHex(
          this.color,
          Num.mapToRange(cycle, 0, 1, desc.minAlpha, desc.maxAlpha)
        )
      )
      .point(point, 1, 'circle')
  }

  /**
   * Update a single point, which moves it according to its angle in magnitutde within a given bound
   * @param point
   * @param index
   * @param bound
   */
  private updatePoint(point: Pt, index: number, bound: Bound) {
    const desc = this._pointDescriptions[index]
    point.toAngle(desc.angle, desc.magnitude, true)
    // If point is outside of bound, move it to random point within bound
    if (!Rectangle.withinBound(bound, point)) {
      point.to(Create.distributeRandom(bound, 1)[0])
    }
    this._points[index] = point
  }

  /**
   * Update all points based on their point description, keeping them within bound
   * @param bound
   */
  public updatePoints(bound: Bound): void {
    this._points.forEach((point, index) => {
      this.updatePoint(point, index, bound)
    }, this)
  }

  /**
   * Draw all background particles at their current locations
   * @param space
   * @param form
   * @param time
   */
  public draw(space: CanvasSpace, form: CanvasForm, time: number): void {
    const cycle = Num.cycle((time % 5000) / 5000, Shaping.sineInOut)
    const bound = Bound.fromGroup(fullWidthRect(space))

    this.points.forEach((point, index) => {
      this.updatePoint(point, index, bound)
      this.drawPoint(point, index, cycle, form)
    })
  }
}
