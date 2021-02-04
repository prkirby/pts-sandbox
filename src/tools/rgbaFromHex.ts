import { Color } from 'pts'

/**
 * Converts a hex with provided alpha into RGBA value
 * @param  hex   Hex color string
 * @param  alpha Alpha value
 * @return       RGBA representation of provided values
 */
export function rgbaFromHex(hex: string, alpha: number): string {
  const color = Color.fromHex(hex)
  color.alpha = alpha
  return color.rgba
}
