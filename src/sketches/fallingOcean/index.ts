import { CanvasSpace, CanvasForm, Tempo } from 'pts'
import Sketch from '../sketch'
import BubbleGroup from './BubbleGroup'
import { COLORS } from './constants'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm
  private tempo: Tempo

  constructor() {
    super('Falling Ocean')
    this.tempo = Tempo.fromBeat(100)
  }

  /**
   * [addBackground description]
   */
  private addBackground(): void {
    this.space.add((_time, _ftime, space) => {
      const background = Sketch.fullWidthRect(space)
      this.form.fill(COLORS.darkblue).stroke(COLORS.darkblue).rect(background)
    })
  }

  /**
   * [drawBubbles description]
   */
  private drawBubbles(): void {
    const BubbleGroups: Set<BubbleGroup> = new Set()

    this.tempo.every(1).start(() => {
      BubbleGroups.add(new BubbleGroup(this.space.pointer))
    }, 0)

    this.space.add((time) => {
      BubbleGroups.forEach((bubbleGroup) => {
        if (bubbleGroup.isFinished()) {
          BubbleGroups.delete(bubbleGroup)
        }

        bubbleGroup.update(time)
        bubbleGroup.render(this.form)
      })
    })
  }

  /**
   * [init description]
   */
  init(): void {
    this.addBackground()
    this.drawBubbles()
    this.space.add(this.tempo)
  }
}

export default FallingOcean
