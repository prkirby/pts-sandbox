import { Num, Shaping } from 'pts'
import type { Pt, CanvasForm } from 'pts'
import Sketch from '../sketch'
import { COLORS } from './constants'

class Bubble {
  private center: Pt
  private size: number
  private alphaScale: number
  private startT: number | null
  private endT: number | null

  /**
   * Creates a new Bubble
   * @param pt   Center point for bubble
   * @param size The radius of the bubble
   */
  constructor(pt: Pt, size: number) {
    this.center = pt
    this.size = size
    this.alphaScale = 0
    this.startT = null
    this.endT = null
  }

  /**
   * Updates the bubble properties based on interpolation number
   * @param t [A number from 0-1, as in the t value passed by Tempo.every.progress]
   */
  public update(t: number): void {
    if (this.startT === null) {
      this.startT = t
      this.endT = t + 1
    }

    const currentT = 1 - Math.abs(t - this.startT)
    this.alphaScale = Num.cycle(currentT, Shaping.cubicOut)
  }

  public render(form: CanvasForm): void {
    const fillAlpha = Num.mapToRange(this.alphaScale, 0, 1, 0, 0.2)
    const strokeAlpha = Num.mapToRange(this.alphaScale, 0, 1, 0, 0.6)

    form
      .fill(Sketch.rgbaFromHex(COLORS.cyan, fillAlpha))
      .stroke(Sketch.rgbaFromHex(COLORS.cyan, strokeAlpha))
      .point(this.center, this.size, 'circle')
  }
}

export default Bubble
