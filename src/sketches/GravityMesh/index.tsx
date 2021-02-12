import React from 'react'
import { Create, Circle, Rectangle, Num } from 'pts'
import type { CanvasSpace, CanvasForm, PtLike } from 'pts'
import { PtsCanvas } from '../PtsCanvas'
import { distanceBetweenPts } from '../../tools'

export interface GravityMeshProps {
  color?: string
  shape?: 'circle' | 'square'
  size?: number
  spacing?: number
  gravity?: number
  push?: boolean
  gravityRadius?: number
}

export const GravityMesh: React.FC<GravityMeshProps> = ({
  color = '#000',
  shape = 'circle',
  size = 4,
  spacing = 12,
  gravity = 3,
  push = false,
  gravityRadius = 50,
}) => {
  const handleAnimate = (space: CanvasSpace, form: CanvasForm) => {
    const pts = Create.gridPts(
      space.innerBound,
      Math.floor(space.width / spacing),
      Math.floor(space.height / spacing)
    )

    console.log(pts)

    form.fillOnly(color)

    const determineSize = (pt: PtLike): number => {
      const distance = distanceBetweenPts(pt, space.pointer)
      let modifier = push ? gravity : 1
      if (distance < gravityRadius) {
        modifier = Num.mapToRange(
          push ? distance : gravityRadius - distance,
          0,
          gravityRadius,
          1,
          gravity
        )
      }
      return size * modifier
    }

    switch (shape) {
      case 'circle':
        pts.forEach((pt) =>
          form.circle(Circle.fromCenter(pt, determineSize(pt) / 2))
        )
        break
      case 'square':
        pts.forEach((pt) =>
          form.rect(Rectangle.fromCenter(pt, determineSize(pt)))
        )
        break
    }
  }

  return (
    <PtsCanvas
      name="gravity-mesh"
      handleAnimate={handleAnimate}
      style={{ height: '100%', width: '100%' }}
      canvasStyle={{ width: '100%', height: '100%' }}
      resize={true}
    />
  )
}
