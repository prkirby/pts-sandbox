abstract class Sketch {
  public name: string

  constructor(name: string) {
    this.name = name
    console.log(`${this.name} has been created.`)
  }

  abstract init(): void
  abstract start(): void

  public static createElement(): HTMLElement {
    const el = document.createElement('div')
    el.classList.add('canvasSpace')
    document.body.appendChild(el)
    return el
  }

  public run(): void {
    this.init()
    this.start()
  }
}

export default Sketch
