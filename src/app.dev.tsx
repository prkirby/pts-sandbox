import React from 'react'
import ReactDom from 'react-dom'
import { GravityMesh } from './sketches'
import './style.css'

const el = document.createElement('div')
el.classList.add('canvas-space')
document.body.append(el)

const Wrapper = () => (
  <div
    style={{
      width: 200,
      height: 80,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      paddingTop: 400,
    }}
  >
    <GravityMesh />
  </div>
)

ReactDom.render(<Wrapper />, el)
