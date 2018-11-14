 import canvas from './canvas'
import gfx from './graphics'
import input from './input'

let backgroundColor = '#000000'

let update = null
let render = null

function setBackgroundColor (color) {
  backgroundColor = color
}

function setUpdate (callback) {
  update = callback
}

function setRender (callback) {
  render = callback
}

function step () {
  if (update) {
    update(1 / 60) // TODO: fake it at 60fps for now
  }

  if (render) {
    gfx.clear(backgroundColor)
    render()
  }

  input.update()
  window.requestAnimationFrame(step)
}

function start () {
  input.start()
  window.requestAnimationFrame(step)
}

export default {
  setSize: canvas.setSize,
  setUpdate,
  setRender,
  setBackgroundColor,
  attachTo: canvas.attachTo,
  disableContextMenu: canvas.disableContextMenu,
  setSmoothing: canvas.setSmoothing,
  start
}
