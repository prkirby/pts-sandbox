import type { CanvasSpace, CanvasForm } from 'pts'
import { fullWidthRect } from './'

// Draws a solid background given a space, form, and color
export function solidBackground(
  space: CanvasSpace,
  form: CanvasForm,
  color: string
): void {
  form.fill(color).stroke(color).rect(fullWidthRect(space))
}
