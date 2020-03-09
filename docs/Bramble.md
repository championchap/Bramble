# Bramble

## Getting Started

At it's most basic, a new Bramble Game looks like this.

```js
const { game } = require('@erikwatson/bramble')

const container = document.querySelector('#bramble-container')

game.attachTo(container)
game.start()
```

Various settings can be changed before starting the game.

- setSize - x, y
- setUpdate - (delta) => {}
- setRender - () => {}
- setBackgroundColor
- attachTo
- disableContextMenu
- setSmoothing
- start
