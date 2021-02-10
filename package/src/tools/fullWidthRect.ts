import { Rectangle } from 'pts'
import type { Space, GroupLike } from 'pts'

/**
 * Creates a rectangle encompassing space
 * @param  space The space for the rectangle to cover
 * @return       The resulting rectangle
 */
export function fullWidthRect(space: Space): GroupLike {
  return Rectangle.from([0, 0], space.width, space.height)
}
