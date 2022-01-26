import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { GoldenRatioFlower } from './sketches'
import './style.css'

const el = document.createElement('div')
el.classList.add('canvas-space')
document.body.append(el)

const Wrapper = () => {
  return <GoldenRatioFlower />
}

ReactDom.render(<Wrapper />, el)
