import { Rectangle, Create, Num, Bound } from 'pts'
import type { Pt, CanvasForm } from 'pts'
import Bubble from './Bubble'
import { BUBBLE_MIN, BUBBLE_MAX } from './constants'

class BubbleGroup {
  private bubbles: Bubble[] = []
  private pointer: Pt
  private startTime: number | null = null
  private finalTime: number | null = null
  private renderTime: number
  private scale = 0

  constructor(pointer: Pt, renderTime = 4000) {
    this.pointer = pointer
    this.renderTime = renderTime

    const boundingBox = Rectangle.fromCenter(this.pointer, 300)
    const points = Create.distributeRandom(
      Bound.fromGroup(boundingBox),
      Num.randomRange(0, 3)
    )

    points.forEach((point) => {
      this.bubbles.push(
        new Bubble(point, Num.randomRange(BUBBLE_MIN, BUBBLE_MAX))
      )
    })
  }

  public getBubbles(): Bubble[] {
    return this.bubbles
  }

  public isFinished(): boolean {
    return this.scale >= 1
  }

  /**
   * Update the bubble group
   * @param time currentTime
   */
  public update(time: number): void {
    // if (time > 3000) debugger
    if (this.startTime === null || this.finalTime === null) {
      this.startTime = time
      this.finalTime = this.startTime + this.renderTime
    }

    this.scale = Num.mapToRange(time, this.startTime, this.finalTime, 0, 1)
    this.bubbles.forEach((bubble) => bubble.update(this.scale))
  }

  /**
   * Render the bubble group
   */
  public render(form: CanvasForm): void {
    if (this.isFinished()) return

    this.bubbles.forEach((bubble) => {
      bubble.render(form)
    })
  }
}

export default BubbleGroup
