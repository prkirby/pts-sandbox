import { CanvasSpace, Form } from 'pts'
import Sketch from '../sketch'

class FallingOcean extends Sketch {
  private backgroundSpace: CanvasSpace
  private backgroundForm: Form

  constructor() {
    super('Falling Ocean')
  }

  init(): void {
    this.backgroundSpace = new CanvasSpace(Sketch.createElement()).setup({
      bgcolor: '#041F60',
      resize: true,
      retina: true,
    })
    this.backgroundForm = this.backgroundSpace.getForm()
  }

  start(): void {
    this.backgroundSpace.play()
  }
}

export default FallingOcean
