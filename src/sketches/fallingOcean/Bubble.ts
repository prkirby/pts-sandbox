import { Num, Shaping, Circle, Group } from 'pts'
import type { Pt, CanvasForm, CanvasSpace } from 'pts'
import Sketch from '../sketch'
import { COLORS, BUBBLE_MAX, BUBBLE_MIN } from './constants'
import { PointDescription } from './Types'

class Bubble {
  private center: Pt
  private size: number
  private alphaCycle = 0.0
  private desc: PointDescription

  /**
   * Creates a new Bubble
   * @param pt   Center point for bubble
   * @param size The radius of the bubble
   */
  constructor(pt: Pt, size: number) {
    this.center = pt
    this.size = size

    this.desc = {
      magnitude: BUBBLE_MIN / size,
      maxAlpha: 1 / (BUBBLE_MAX - size),
    }
  }

  public update(scale: number, space: CanvasSpace): void {
    this.alphaCycle = Shaping.elasticOut(scale)
    const sizeOffset = Num.mapToRange(Math.abs(1 - scale), 0, 1, 0.99, 1)
    this.size *= sizeOffset

    // Move center towards 'light' source
    const pointerOpposite = space.pointer
      .clone()
      .rotate2D(Math.PI, space.center)
    const lineTowardsLight = new Group(this.center, pointerOpposite)
    const newCenter = lineTowardsLight.interpolate(
      Num.mapToRange(this.desc.magnitude, 0, 1, 0.0001, 0.015)
    )

    this.center.to(newCenter)
  }

  public render(form: CanvasForm): void {
    const fillAlpha = Num.mapToRange(
      this.alphaCycle,
      0,
      1,
      0,
      this.desc.maxAlpha + 0.1
    )
    const strokeAlpha = Num.mapToRange(
      this.alphaCycle,
      0,
      1,
      0,
      this.desc.maxAlpha
    )
    const circle = Circle.fromCenter(this.center, this.size)
    form
      .fill(Sketch.rgbaFromHex(COLORS.tiffanyblue, fillAlpha))
      .stroke(Sketch.rgbaFromHex(COLORS.tiffanyblue, strokeAlpha))
      .composite('lighten')
      .circle(circle)
  }
}

export default Bubble
