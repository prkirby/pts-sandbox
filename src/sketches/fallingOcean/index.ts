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
} from 'pts'
import Sketch from '../sketch'

class FallingOcean extends Sketch {
  protected space: CanvasSpace
  protected form: CanvasForm
  private colors = {
    darkblue: '#041F60',
    bluegrotto: '#0476D0',
    cyan: '#2CEEF0',
    tiffanyblue: '#B4F5F0',
  }

  constructor() {
    super('Falling Ocean')
  }

  private addBackground(): void {
    this.space.add((_time, _ftime, space) => {
      const background = Sketch.fullWidthRect(space)
      this.form
        .fill(this.colors.darkblue)
        .stroke(this.colors.darkblue)
        .rect(background)
    })
  }

  private drawBubbles(): void {
    const tempo = Tempo.fromBeat(20)
    const bubbleGroups: Group[][] = []

    const addBubbleGroup = () => {
      const boundingBox = Rectangle.fromCenter(this.space.pointer, 300)
      const points = Create.distributeRandom(
        Bound.fromGroup(boundingBox),
        Num.randomRange(1, 6)
      )
      const bubbleGroup: Group[] = []
      points.forEach((point) => {
        bubbleGroup.push(Circle.fromCenter(point, Num.randomRange(5, 20)))
      })
      bubbleGroups.push(bubbleGroup)
    }

    const purgeBubbleGroups = () => {
      while (bubbleGroups.length > 50) {
        bubbleGroups.shift()
      }
    }

    const every1 = tempo.every(1)

    every1.start(() => {
      addBubbleGroup()
      purgeBubbleGroups()
    }, 0)

    every1.progress(() => {
      bubbleGroups.forEach((bubbleGroup) => {
        this.form
          .fill(Sketch.rgbaFromHex(this.colors.cyan, 0.2))
          .stroke(Sketch.rgbaFromHex(this.colors.cyan, 0.5))
          .circles(bubbleGroup)
      })
    }, 0)

    this.space.add(tempo)
  }

  init(): void {
    this.addBackground()
    this.drawBubbles()
  }
}

export default FallingOcean
