import React, { useRef } from 'react'
import { HandleAnimateFn, HandleStartFn, PtsCanvas } from 'react-pts-canvas'
import { solidBackground, BackgroundParticles } from '@tools'
import { drawPedals } from './drawFunctions'
import { THEME } from './constants'

export const GoldenRatioFlower = () => {
  const backgroundParticles = useRef<BackgroundParticles>()

  const handleStart: HandleStartFn = (bound) => {
    if (!bound) return
    backgroundParticles.current = new BackgroundParticles(
      bound,
      THEME.WARM_SOFT,
      undefined,
      10,
      30
    )
  }

  const handleAnimate: HandleAnimateFn = (space, form, time) => {
    if (!space || !form || !time) return
    solidBackground(space, form, THEME.DARK)
    if (backgroundParticles.current)
      backgroundParticles.current.draw(space, form, time)
    drawPedals(space, form)
  }

  return (
    <PtsCanvas
      onStart={handleStart}
      onAnimate={handleAnimate}
      style={THEME.STYLE}
      canvasStyle={THEME.CANVAS_STYLE}
    />
  )
}
