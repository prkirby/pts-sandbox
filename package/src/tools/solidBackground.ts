import type { CanvasSpace, CanvasForm, GroupLike } from 'pts'
import { fullWidthRect } from 'tools'

export function solidBackground(
  space: CanvasSpace,
  form: CanvasForm,
  color: string
) {
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
