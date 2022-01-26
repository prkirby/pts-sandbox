import { fullWidthRect } from '../fullWidthRect'
import { CanvasSpace, Rectangle, Bound } from 'pts'
import 'window-resizeto/polyfill'

describe('fullWidthRect', () => {
  const width = 100
  const height = 50
  let space: CanvasSpace

  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetHeight'
  )
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth'
  )

  beforeAll((done) => {
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: height,
    })
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    })

    const el = document.createElement('div')
    el.setAttribute('style', `width: ${width}px; height: ${height}px;`)
    document.body.appendChild(el)
    console.log(el.clientWidth)
    console.log(el.clientHeight)
    space = new CanvasSpace(el, (boundingBox: any, spaceElement: any) => {
      console.log(boundingBox)
      done()
    })
  })

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight!
    )
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetWidth',
      originalOffsetWidth!
    )
  })

  it('Should return a Rectangle the same size as space provided', () => {
    console.log(space.ready)
    const rect = fullWidthRect(space)
    expect(Rectangle.size(rect).x).toEqual(width)
    expect(Rectangle.size(rect).y).toEqual(height)
  })
})
