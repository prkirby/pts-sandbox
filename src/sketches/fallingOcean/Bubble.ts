import { Num, Shaping, Circle, Group } from 'pts'
import type { Pt, CanvasForm, CanvasSpace } from 'pts'
import { BUBBLE_MAX, BUBBLE_MIN } from './constants'
import { rgbaFromHex } from '../../tools'
import { PointDescription, ColorPack } from '../../types'

class Bubble {
  private center: Pt
  private size: number
  private alphaCycle = 0.0
  private desc: PointDescription
  private color: ColorPack

  /**
   * Creates a new Bubble
   * @param pt   Center point for bubble
   * @param size The radius of the bubble
   */
  constructor(pt: Pt, size: number, color: ColorPack) {
    this.center = pt
    this.size = size
    this.color = color

    this.desc = {
      magnitude: BUBBLE_MIN / size,
      maxAlpha: 1 / (BUBBLE_MAX - size),
    }
  }

  /**
   * [update description]
   * @param scale t value between 0 - 1
   * @param space The space in which the bubble exists
   */
  public update(scale: number, space: CanvasSpace): void {
    // Fade over time
    this.alphaCycle = Num.cycle(scale, Shaping.elasticOut)

    // Shrink over time
    const sizeOffset = Num.mapToRange(Math.abs(1 - scale), 0, 1, 0.99, 1)
    this.size *= sizeOffset

    // Move center towards 'light' source over time
    const pointerOpposite = space.pointer
      .clone()
      .rotate2D(Math.PI, space.center)
    const lineTowardsLight = new Group(this.center, pointerOpposite)
    const newCenter = lineTowardsLight.interpolate(
      Num.mapToRange(this.desc.magnitude!, 0, 1, 0.0001, 0.015)
    )
    this.center.to(newCenter)
  }

  /**
   * Renders the bubble
   * @param form The form that will be doing the rendering
   */
  public render(form: CanvasForm, mode: string): void {
    const fillAlpha = Num.mapToRange(
      this.alphaCycle,
      0,
      1,
      0,
      this.desc.maxAlpha! + 0.1
    )
    const strokeAlpha = Num.mapToRange(
      this.alphaCycle,
      0,
      1,
      0,
      this.desc.maxAlpha!
    )
    const circle = Circle.fromCenter(this.center, this.size)
    form
      .fill(rgbaFromHex(this.color.fill, fillAlpha))
      .stroke(rgbaFromHex(this.color.stroke, strokeAlpha), 5)
      .composite(mode)
      .circle(circle)
  }
}

export default Bubble
