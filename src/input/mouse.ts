interface ButtonState {
  pressed: boolean
  justPressed: boolean
  released: boolean
  justReleased: boolean
}

interface WheelState extends ButtonState {
  moved: boolean
  direction: string
}

export interface MouseState {
  x: number
  y: number

  left: ButtonState
  wheel: WheelState
  right: ButtonState
}

function create(canvas) {
  const defaultState = () => {
    return {
      x: 0,
      y: 0,

      left: defaultButtonState(),
      wheel: defaultWheelState(),
      right: defaultButtonState()
    }
  }

  const defaultButtonState = (): ButtonState => {
    return {
      pressed: false,
      justPressed: false,
      released: false,
      justReleased: false
    }
  }

  const defaultWheelState = (): WheelState => {
    const buttonState = defaultButtonState()
    return {
      ...buttonState,
      moved: false,
      direction: 'up'
    }
  }

  let prevMouse = defaultState()
  let mouse = defaultState()

  const clone = state => {
    return Object.assign({}, state)
  }

  const relative = (event, element) => {
    const bounds = canvas.getBoundingClientRect()

    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    }
  }

  const move = event => {
    const newPos = relative(event, canvas)

    mouse.x = newPos.x
    mouse.y = newPos.y
  }

  const down = event => {
    switch (event.which) {
      case 1:
        mouse.left.pressed = true
        break

      case 2:
        mouse.wheel.pressed = true
        break

      case 3:
        mouse.right.pressed = true
        break
    }
  }

  const up = event => {
    switch (event.which) {
      case 1:
        mouse.left.pressed = false
        break

      case 2:
        mouse.wheel.pressed = false
        break

      case 3:
        mouse.right.pressed = false
        break
    }
  }

  const wheel = event => {
    mouse.wheel.moved = event.delta === 0 ? false : true

    if (mouse.wheel.moved !== false) {
      mouse.wheel.direction = event.deltaY < 0 ? 'up' : 'down'
    }
  }

  const update = () => {
    mouse.wheel.moved = false
    prevMouse = clone(mouse)
  }

  const start = () => {
    // mouse events
    canvas.addEventListener('mousemove', move)
    canvas.addEventListener('mousedown', down)
    canvas.addEventListener('mouseup', up)
    canvas.addEventListener('wheel', wheel)

    // default mouse position, center of screen
    mouse.x = canvas.width / 2
    mouse.y = canvas.height / 2
  }

  return {
    getState: () => mouse,
    start,
    update
  }
}

export default { create }