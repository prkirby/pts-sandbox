import React from 'react'
import { HandleAnimateFn, PtsCanvas } from 'react-pts-canvas'
import { solidBackground } from '@tools'
import { THEME } from './constants'

export const GoldenRatioFlower = () => {
  const handleAnimate: HandleAnimateFn = (space, form) => {
    if (!space || !form) return
    solidBackground(space, form, THEME.DARK)
  }

  return <PtsCanvas onAnimate={handleAnimate} />
}
