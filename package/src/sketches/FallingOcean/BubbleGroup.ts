import { Rectangle, Create, Num, Bound } from 'pts'
import type { Pt, CanvasForm, CanvasSpace } from 'pts'
import Bubble from './Bubble'
import { BUBBLE_MIN, BUBBLE_MAX } from './constants'
import { ColorPack } from 'types'

class BubbleGroup {
  private bubbles: Bubble[] = []
  private pointer: Pt
  private startTime: number | null = null
  private finalTime: number | null = null
  private renderTime: number
  private scale = 0
  private space: CanvasSpace
  private color: ColorPack
  private compMode: string

  constructor(
    pointer: Pt,
    space: CanvasSpace,
    audioScale: number,
    compMode: string,
    color?: ColorPack,
    renderTime?: number
  ) {
    this.pointer = pointer
    this.renderTime = renderTime || 3000
    this.space = space
    this.compMode = compMode || 'source-over'
    this.color = color || { fill: '#fff', stroke: '#fff' }

    const boundingBoxSize = Num.mapToRange(audioScale, 0, 1, 80, 800)
    const boundingBox = Rectangle.fromCenter(this.pointer, boundingBoxSize)
    const minBubbles = Num.mapToRange(audioScale, 0, 1, 0, 1)
    const maxBubbles = Num.mapToRange(audioScale, 0, 1, 1, 4)
    const points = Create.distributeRandom(
      Bound.fromGroup(boundingBox),
      Num.randomRange(minBubbles, maxBubbles)
    )

    const minSize = Num.mapToRange(
      audioScale,
      0,
      1,
      BUBBLE_MIN,
      BUBBLE_MIN + 20
    )
    const maxSize = Num.mapToRange(audioScale, 0, 1, minSize, BUBBLE_MAX)

    points.forEach((point) => {
      this.bubbles.push(
        new Bubble(point, Num.randomRange(minSize, maxSize), this.color)
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
    if (this.startTime === null || this.finalTime === null) {
      this.startTime = time
      this.finalTime = this.startTime + this.renderTime
    }

    this.scale = Num.mapToRange(time, this.startTime, this.finalTime, 0, 1)
    this.bubbles.forEach((bubble) => bubble.update(this.scale, this.space))
  }

  /**
   * Render the bubble group
   */
  public render(form: CanvasForm): void {
    if (this.isFinished()) return

    this.bubbles.forEach((bubble) => {
      bubble.render(form, this.compMode)
    })
  }
}

export default BubbleGroup
