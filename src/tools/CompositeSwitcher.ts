import type { CanvasSpace, CanvasForm, PtLike } from 'pts'

export class CompositeSwitcher {
  private space: CanvasSpace
  private form: CanvasForm
  private fontColor: string
  private position: PtLike
  private modes = [
    'source-over',
    'source-in',
    'source-out',
    'source-atop',
    'destination-over',
    'destination-in',
    'destination-out',
    'destination-atop',
    'lighter',
    'copy',
    'xor',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
  ].reverse()
  private curMode = 0

  constructor(space: CanvasSpace, color?: string, position?: PtLike) {
    this.space = space
    this.form = space.getForm()
    this.fontColor = color || '#fff'
    this.position = position || [20, 20]

    document.addEventListener('keydown', (e) => {
      this.updateMode(e)
    })

    this.drawModeTitle()
  }

  private updateMode(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.curMode =
          this.curMode + 1 >= this.modes.length ? 0 : this.curMode + 1
        break
      case 'ArrowDown':
        this.curMode =
          this.curMode - 1 < 0 ? this.modes.length - 1 : this.curMode - 1
        break
    }
  }

  public getCurMode(): string {
    return this.modes[this.curMode]
  }

  public drawModeTitle(): void {
    this.space.add(() => {
      this.form
        .font(18)
        .fillOnly(this.fontColor)
        .text(this.position, this.modes[this.curMode])
    })
  }
}
