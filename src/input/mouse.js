import { canvas } from '../canvas'
import vec2 from '../vec2'

let prevMouse = defaultState()
let mouse = defaultState()

function diff() {
  let result = {}

  if (prevMouse.x !== mouse.x) {
    result['x'] = mouse.x
  }

  if (prevMouse.y !== mouse.y) {
    result['y'] = mouse.y
  }

  if (prevMouse.pressed !== mouse.pressed) {
    result['pressed'] = mouse.pressed
  }

  if (prevMouse.justPressed !== mouse.justPressed) {
    result['justPressed'] = mouse.justPressed
  }

  if (prevMouse.released !== mouse.released) {
    result['released'] = mouse.released
  }

  if (prevMouse.justReleased !== mouse.justReleased) {
    result['justReleased'] = mouse.justReleased
  }

  return result
}

function defaultButtonState() {
  return {
    pressed: false,
    justPressed: false,
    released: false,
    justReleased: false
  }
}

function defaultWheelState() {
  const buttonState = defaultButtonState()
  return {
    ...buttonState,
    moved: false
  }
}

function defaultState() {
  return {
    x: 0,
    y: 0,

    left: defaultButtonState(),
    wheel: defaultWheelState(),
    right: defaultButtonState()
  }
}

function clone(state) {
  return Object.assign({}, state)
}

function relative(event, element) {
  const bounds = canvas.getBoundingClientRect()

  return {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top
  }
}

function move(event) {
  const newPos = relative(event, canvas)

  mouse.x = newPos.x
  mouse.y = newPos.y

  moved = true
}

function down(event) {
  switch (event.which) {
    case 1:
      mouse.left.pressed = true
      break

    case 2:
      mouse.middle.pressed = true
      break

    case 3:
      mouse.right.pressed = true
      break
  }
}

function up(event) {
  switch (event.which) {
    case 1:
      mouse.left.pressed = false
      break

    case 2:
      mouse.middle.pressed = false
      break

    case 3:
      mouse.right.pressed = false
      break
  }
}

function wheel(event) {
  mouse.wheel.moved = event.delta === 0 ? false : true

  if (mouse.wheel.moved !== false) {
    mouse.wheel.direction = event.deltaY < 0 ? 'up' : 'down'
  }
}

function update() {
  mouse.wheel.moved = false

  if (mouse.x === prevMouse.x && mouse.y === prevMouse.y) {
    mouse.moved = false
  }

  const cloneOfMouse = clone(mouse)

  // update the previous mouse state in place
  prevMouse.x = cloneOfMouse.x
  prevMouse.y = cloneOfMouse.y

  prevMouse.left.pressed = cloneOfMouse.left.pressed
  prevMouse.left.justPressed = cloneOfMouse.left.justPressed
  prevMouse.left.released = cloneOfMouse.left.released
  prevMouse.left.justReleased = cloneOfMouse.left.justReleased

  prevMouse.wheel.pressed = cloneOfMouse.wheel.pressed
  prevMouse.wheel.justPressed = cloneOfMouse.wheel.justPressed
  prevMouse.wheel.released = cloneOfMouse.wheel.released
  prevMouse.wheel.justReleased = cloneOfMouse.wheel.justReleased

  prevMouse.right.pressed = cloneOfMouse.right.pressed
  prevMouse.right.justPressed = cloneOfMouse.right.justPressed
  prevMouse.right.released = cloneOfMouse.right.released
  prevMouse.right.justReleased = cloneOfMouse.right.justReleased
}

function start() {
  // mouse events
  canvas.addEventListener('mousemove', move)
  canvas.addEventListener('mousedown', down)
  canvas.addEventListener('mouseup', up)
  canvas.addEventListener('wheel', wheel)

  // default mouse position, center of screen
  mouse.x = canvas.width / 2
  mouse.y = canvas.height / 2
}

const appContainer = document.getElementById('app-container')

export default {
  start,
  update,
  prevState: prevMouse,
  state: mouse,
  get cursor() {
    return appContainer.style.cursor
  },
  set cursor(type = 'auto') {
    appContainer.style.cursor = type
  }
}
