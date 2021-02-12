import React from 'react'
import ReactDom from 'react-dom'
import { FallingOcean } from './sketches'
import './style.css'

const el = document.createElement('div')
el.classList.add('canvas-space')
document.body.append(el)

ReactDom.render(<FallingOcean />, el)
