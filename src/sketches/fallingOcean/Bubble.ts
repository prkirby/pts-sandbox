import { Num, Shaping } from 'pts'
import type { Pt, CanvasForm } from 'pts'
import Sketch from '../sketch'
import { COLORS, BUBBLE_MIN, BUBBLE_MAX } from './constants'

class Bubble {
  private origin: Pt
  private center: Pt
  private size: number
  private alphaCycle = 0.0
  private movement = 0.0

  /**
   * Creates a new Bubble
   * @param pt   Center point for bubble
   * @param size The radius of the bubble
   */
  constructor(pt: Pt, size: number) {
    this.origin = pt.clone()
    this.center = pt
    this.size = size * 1.0
    this.movement = 3000 / size
  }

  public update(scale: number): void {
    this.alphaCycle = Num.cycle(scale, Shaping.exponentialOut)
    // this.size = this.size * Num.mapToRange(Math.abs(1 - scale), 0, 1, 0.8, 1)
    // if (scale > 0.5) debugger
    // debugger
    const originYOffset = this.origin.y + this.movement
    const offset = Num.mapToRange(scale, 0, 1, this.origin.y, originYOffset)
    this.center.y = offset
    // this.center.y =
    //   this.origin.y +
  }

  public render(form: CanvasForm): void {
    const fillAlpha = Num.mapToRange(this.alphaCycle, 0, 1, 0, 0.2)
    const strokeAlpha = Num.mapToRange(this.alphaCycle, 0, 1, 0, 0.6)
    form
      .fill(Sketch.rgbaFromHex(COLORS.cyan, fillAlpha))
      .stroke(Sketch.rgbaFromHex(COLORS.cyan, strokeAlpha))
      .point(this.center, this.size, 'circle')
  }
}

export default Bubble
