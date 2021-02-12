import type { PtLike } from 'pts'

export const distanceBetweenPts = (a: PtLike, b: PtLike): number =>
  Math.abs(Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2)))
