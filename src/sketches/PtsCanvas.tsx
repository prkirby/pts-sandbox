import React, { useEffect, useRef } from 'react'
import { CanvasSpace, CanvasForm, Group, Tempo, Bound } from 'pts'

export interface PtsCanvasProps {
  name?: string
  background?: string
  resize?: boolean
  retina?: boolean
  play?: boolean
  touch?: boolean
  style?: object // eslint-disable-line @typescript-eslint/ban-types
  canvasStyle?: object // eslint-disable-line @typescript-eslint/ban-types
  handleStart?: (bound?: Bound, space?: CanvasSpace, form?: CanvasForm) => void
  handleAnimate: (
    space?: CanvasSpace,
    form?: CanvasForm,
    time?: number,
    ftime?: number
  ) => void
  handleResize?: (
    space?: CanvasSpace,
    form?: CanvasForm,
    size?: Group,
    evt?: Event
  ) => void
  handleAction?: (
    space?: CanvasSpace,
    form?: CanvasForm,
    type?: string,
    px?: number,
    py?: number,
    evt?: Event
  ) => void
  tempo?: Tempo
}

export const PtsCanvas: React.FC<PtsCanvasProps> = (props) => {
  const canvRef = useRef(null)
  const spaceRef = useRef(null)
  const formRef = useRef(null)

  /**
   * When canvRef or animate functions update, recreate the space
   */
  useEffect(() => {
    // Create CanvasSpace with the canvRef and assign to spaceRef
    // Add animation, tempo, and play when ready (call back on CanvasSpace constructor)
    spaceRef.current = new CanvasSpace(canvRef.current).setup({
      bgcolor: props.background,
      resize: props.resize,
      retina: props.retina,
    })
    // Assign formRef
    formRef.current = spaceRef.current.getForm()

    // By having individual handler props, we can expose what we need to the
    // underlying functions, like our Form instance
    spaceRef.current.add({
      start: (bound: Bound) => {
        props.handleStart &&
          props.handleStart(bound, spaceRef.current, formRef.current)
      },
      animate: (time: number, ftime: number) => {
        props.handleAnimate &&
          props.handleAnimate(spaceRef.current, formRef.current, time, ftime)
      },
      resize: (bound: Bound, event: Event) => {
        props.handleResize &&
          props.handleResize(spaceRef.current, formRef.current, bound, event)
      },
      action: (type: string, px: number, py: number, evt: Event) => {
        props.handleAction &&
          props.handleAction(
            spaceRef.current,
            formRef.current,
            type,
            px,
            py,
            evt
          )
      },
    })

    // Add tempo if provided
    if (props.tempo) {
      spaceRef.current.add(props.tempo)
    }

    // Return the cleanup function
    return () => {
      spaceRef.current.dispose()
    }
  }, [canvRef])

  /**
   * When Touch updates
   */
  useEffect(() => {
    spaceRef.current &&
      spaceRef.current.bindMouse(props.touch).bindTouch(props.touch)
  }, [props.touch])

  /**
   * When anything updates
   */
  useEffect(() => {
    maybePlay()
  })

  // Play or stop based on play prop
  const maybePlay = () => {
    if (props.play) {
      spaceRef.current && spaceRef.current.play()
    } else {
      spaceRef.current && spaceRef.current.playOnce(0)
    }
  }

  return (
    <div className={props.name || ''} style={props.style}>
      <canvas
        className={props.name ? props.name + '-canvas' : ''}
        ref={canvRef}
        style={props.canvasStyle}
      ></canvas>
    </div>
  )
}

PtsCanvas.defaultProps = {
  name: 'pts-react', // maps to className of the container div
  background: 'transparent',
  resize: true,
  retina: true,
  play: true,
  touch: true,
  style: {},
  canvasStyle: {},
}
