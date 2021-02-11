import type { CanvasSpace, CanvasForm, GroupLike } from 'pts'
import { fullWidthRect } from './'

export function solidBackground(
  space: CanvasSpace,
  form: CanvasForm,
  color: string
): void {
  let background: GroupLike
  space.add({
    start: () => {
      background = fullWidthRect(space)
    },
    animate: () => {
      form.fill(color).stroke(color).rect(background)
    },
  })
}
