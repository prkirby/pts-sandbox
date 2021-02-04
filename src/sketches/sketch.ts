import { CanvasSpace, Rectangle, Color } from 'pts'
import type { Group, Form, Space } from 'pts'

abstract class Sketch {
  private id: string
  protected space: CanvasSpace
  protected form: Form
  protected playOnce: number

  private static createElement(): HTMLElement {
    const el = document.createElement('div')
    el.classList.add('canvasSpace')
    document.body.appendChild(el)
    return el
  }

  public static fullWidthRect(space: Space): Group {
    return Rectangle.from([0, 0], space.width, space.height)
  }

  public static rgbaFromHex(hex: string, alpha: number): string {
    const color = Color.fromHex(hex)
    color.alpha = alpha
    return color.rgba
  }

  constructor(id: string, playOnce = 0) {
    this.id = id
    this.space = new CanvasSpace(Sketch.createElement()).setup({
      bgcolor: '#fff',
      resize: true,
      retina: true,
    })
    this.form = this.space.getForm()
    this.playOnce = playOnce
    console.log(`${this.id} has been created.`)
  }

  /**
   * Setup everything that needs to be done before space.play()
   */
  abstract init(): void

  public run(): void {
    this.init()
    this.space.bindMouse().bindTouch()
    if (this.playOnce) {
      this.space.playOnce(this.playOnce)
    } else {
      this.space.play()
    }
  }
}

export default Sketch
