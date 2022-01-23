import React, { useEffect, useRef } from 'react'
import { Create, Circle, Rectangle, Num, PtLike } from 'pts'
import { HandleAnimateFn, PtsCanvas } from 'react-pts-canvas'
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
  // Store these as refs, so the handleAnimate function can access them on prop update
  const colorRef = useRef(color)
  const shapeRef = useRef(shape)
  const sizeRef = useRef(size)
  const spacingRef = useRef(spacing)
  const gravityRef = useRef(gravity)
  const pushRef = useRef(push)
  const gravityRadiusRef = useRef(gravityRadius)

  useEffect(() => {
    colorRef.current = color
    shapeRef.current = shape
    sizeRef.current = size
    spacingRef.current = spacing
    gravityRef.current = gravity
    pushRef.current = push
    gravityRadiusRef.current = gravityRadius
  })

  const handleAnimate: HandleAnimateFn = (space, form) => {
    if (!space || !form) return
    const pts = Create.gridPts(
      space.innerBound,
      Math.floor(space.width / spacingRef.current),
      Math.floor(space.height / spacingRef.current)
    )

    form.fillOnly(colorRef.current)

    const determineSize = (pt: PtLike): number => {
      const distance = distanceBetweenPts(pt, space.pointer)
      let modifier = pushRef.current ? gravityRef.current : 1
      if (distance < gravityRadiusRef.current) {
        modifier = Num.mapToRange(
          pushRef.current ? distance : gravityRadiusRef.current - distance,
          0,
          gravityRadiusRef.current,
          1,
          gravityRef.current
        )
      }
      return sizeRef.current * modifier
    }

    switch (shapeRef.current) {
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
      background="transparent"
      onAnimate={handleAnimate}
      style={{ height: '100%', width: '100%' }}
      canvasStyle={{ width: '100%', height: '100%' }}
      resize={true}
    />
  )
}
