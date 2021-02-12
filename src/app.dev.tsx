import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { GravityMesh } from './sketches'
import './style.css'

const el = document.createElement('div')
el.classList.add('canvas-space')
document.body.append(el)

const Wrapper = () => {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{
        width: 200,
        height: 80,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingTop: 400,
      }}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <GravityMesh
        color={hover ? 'green' : 'red'}
        size={hover ? 4 : 6}
        push={hover}
      />
    </div>
  )
}

ReactDom.render(<Wrapper />, el)
