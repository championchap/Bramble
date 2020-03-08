function start() {
  window.addEventListener('gamepadconnected', e => {
    console.log('connect')
  })

  window.addEventListener('gamepaddisconnected', e => {
    console.log('disconnect')
  })
}

function update() {}

export default {
  start,
  update
}
