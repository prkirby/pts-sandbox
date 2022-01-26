import React from 'react'
import { HandleAnimateFn, PtsCanvas } from 'react-pts-canvas'

export const GoldenRatioFlower = () => {
  const handleAnimate: HandleAnimateFn = () => {
    console.log('animating')
  }

  return <PtsCanvas onAnimate={handleAnimate} />
}
