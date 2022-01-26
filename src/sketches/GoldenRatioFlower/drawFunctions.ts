import { CanvasForm, CanvasSpace, Circle } from 'pts'
import { THEME } from './constants'
import { phi } from 'mathjs'

export function drawPedals(
  space: CanvasSpace,
  form: CanvasForm,
  ratio = phi,
  radius = 20,
  layers = 20,
  centerRadius = 60
) {
  const centerCircle = Circle.fromCenter(space.center, centerRadius)
  form.fill(THEME.COOL).circle(centerCircle)
}
