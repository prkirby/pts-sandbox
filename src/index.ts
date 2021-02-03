import './style.css'
import {
  CanvasSpace,
  Create,
  Pt,
  Line,
  Rectangle,
  Num,
  Geom,
  Curve,
  Util,
} from 'pts'
import type { Group } from 'pts'

const element = document.createElement('div')
element.id = 'main'
document.body.appendChild(element)

const space = new CanvasSpace(element).setup({
  bgcolor: '#fefefe',
  resize: true,
  retina: true,
})
const form = space.getForm()
let perf = Util.performance()

space.add({
  start: (_bound, space) => {},
  animate: (time) => {
    let c = space.center
    let corners = Rectangle.corners(Rectangle.fromCenter(c, space.height))

    let cycle = (t: number, i: number) =>
      Num.cycle(((t + i * 500) % 3000) / 3000)
    let pts = corners.map((p, i) => Geom.interpolate(p, c, cycle(time, i)))

    pts.push(space.pointer)
    pts = pts.concat(pts.slice(0, 3))

    let curve = Curve.bspline(pts, 20, 0.8)
    form.fill('#f03').stroke('#3a3a3a', 3).polygon(curve)
  },
})

space.bindMouse().bindTouch().play()
