import {
  CanvasSpace,
  CanvasForm,
  Circle,
  Tempo,
  Group,
  Create,
  Rectangle,
  Bound,
  Num,
  Shaping,
} from 'pts'
import Sketch from '../sketch'
import Bubble from './Bubble'
import { COLORS } from './constants'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm

  constructor() {
    super('Falling Ocean')
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
    const tempo = Tempo.fromBeat(100)
    const bubbleGroups: Bubble[][] = []

    // Add a bubble group to the array
    const addBubbleGroup = () => {
      const boundingBox = Rectangle.fromCenter(this.space.pointer, 300)
      const points = Create.distributeRandom(
        Bound.fromGroup(boundingBox),
        Num.randomRange(1, 6)
      )

      const bubbleGroup: Bubble[] = []

      points.forEach((point) => {
        bubbleGroup.push(new Bubble(point, Num.randomRange(5, 20)))
      })
      bubbleGroups.push(bubbleGroup)
    }

    // Trim off outdated bubble groups
    const purgeBubbleGroups = () => {
      while (bubbleGroups.length > 50) {
        bubbleGroups.shift()
      }
    }

    const every1 = tempo.every(1)
    const every20 = tempo.every(20)

    every1.start(() => {
      addBubbleGroup()
      purgeBubbleGroups()
    }, 0)

    every20.progress((_count, t) => {
      bubbleGroups.forEach((bubbleGroup) => {
        bubbleGroup.forEach((bubble) => {
          bubble.update(t)
          bubble.render(this.form)
        })
      })
    }, 0)

    this.space.add(tempo)
  }

  /**
   * [init description]
   */
  init(): void {
    this.addBackground()
    this.drawBubbles()
  }
}

export default FallingOcean
