import { CanvasSpace } from 'pts'
import type { Form } from 'pts'

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
  abstract init(): Promise<boolean>

  public async run(): Promise<boolean> {
    await this.init()
    this.space.bindMouse().bindTouch()
    if (this.playOnce) {
      this.space.playOnce(this.playOnce)
    } else {
      this.space.play()
    }

    // Listen for keyboard actions
    document.addEventListener('keydown', (e) => {
      const { code } = e
      switch (code) {
        case 'Space': // Space Bar
          this.space.pause(true) // Boolean true makes this act as a toggle
          break
      }
    })

    return true
  }
}

export default Sketch
