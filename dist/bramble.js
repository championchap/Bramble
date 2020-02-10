(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Bramble"] = factory();
	else
		root["Bramble"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bramble.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/*! exports provided: loadText, loadAllText, loadJson, loadAllJson, loadImage, loadAllImages, loadSound, loadAllSounds, loadMusic, loadAllMusic, loadTerrain, loadAllTerrain, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadText", function() { return loadText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllText", function() { return loadAllText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJson", function() { return loadJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllJson", function() { return loadAllJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllImages", function() { return loadAllImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSound", function() { return loadSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllSounds", function() { return loadAllSounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMusic", function() { return loadMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllMusic", function() { return loadAllMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTerrain", function() { return loadTerrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllTerrain", function() { return loadAllTerrain; });
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./src/terrain.js");


function load(path) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.responseType = type;
    request.addEventListener('load', function (event) {
      switch (type) {
        case 'text':
          resolve(event.target.responseText);
          break;

        case 'json':
          resolve(event.target.response);
          break;

        default:
          console.error("invalid type provided to load: ".concat(type, " is unknown"));
      }
    });
    request.addEventListener('error', function (event) {
      reject(event);
    });
    request.open('GET', path, true);
    request.send();
  });
}

function loadText(path) {
  return load(path, 'text');
}
function loadAllText() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return load(x, 'text');
  }));
}
function loadJson(path) {
  return load(path, 'json');
}
function loadAllJson() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return load(x, 'json');
  }));
}
function loadImage(path) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.addEventListener('load', function (e) {
      resolve(img);
    });
    img.addEventListener('error', function (err) {
      reject(err);
    });
    img.src = path;
  });
}
function loadAllImages() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return loadImage(x);
  }));
}
function loadSound(path) {
  return new Promise(function (resolve, reject) {
    var audio = new Audio();
    audio.addEventListener('canplaythrough', function (e) {
      resolve(audio);
    });
    audio.addEventListener('error', function (err) {
      reject(err);
    });
    audio.src = path;
  });
}
function loadAllSounds() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return loadSound(x);
  }));
} // TODO: I am not sure yet if/how these are meaningfully different to loadSound

function loadMusic(path) {
  return new Promise(function (resolve, reject) {});
}
function loadAllMusic() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return loadMusic(x);
  }));
} // Downloads a Terrain file,
// reads it,
// downloads the related image file,
// returns a new Terrain object

function loadTerrain(path) {
  var description = null;
  return loadJson(path).then(function (json) {
    description = json;
    return loadImage(description.path);
  }).then(function (image) {
    return _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].create(description.name, description.type, image, description.tiles);
  })["catch"](function (err) {
    console.error(err);
  });
}
function loadAllTerrain() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Promise.all(paths.map(function (x) {
    return loadTerrain(x);
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ({
  loadText: loadText,
  loadJson: loadJson,
  loadImage: loadImage,
  loadAllText: loadAllText,
  loadAllImages: loadAllImages,
  loadSound: loadSound,
  loadAllSounds: loadAllSounds,
  loadTerrain: loadTerrain,
  loadAllTerrain: loadAllTerrain
});

/***/ }),

/***/ "./src/bramble.js":
/*!************************!*\
  !*** ./src/bramble.js ***!
  \************************/
/*! exports provided: assets, game, grid, graphics, keyboard, mouse, prevMouse, music, sfx, sprite, textbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return _assets__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "game", function() { return _game__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphics", function() { return _graphics__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboard", function() { return _input__WEBPACK_IMPORTED_MODULE_4__["keyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _input__WEBPACK_IMPORTED_MODULE_4__["mouse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prevMouse", function() { return _input__WEBPACK_IMPORTED_MODULE_4__["prevMouse"]; });

/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "music", function() { return _music__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sfx */ "./src/sfx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sfx", function() { return _sfx__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _textbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textbox */ "./src/textbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textbox", function() { return _textbox__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: canvas, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

function setSize(width, height) {
  canvas.width = width;
  canvas.height = height;
}

function attachTo(element) {
  element.appendChild(canvas);
  _graphics__WEBPACK_IMPORTED_MODULE_0__["default"].setContext(ctx);
} // NOTE: Must be called AFTER anything that would change our context.
//       setSize for example.


function setSmoothing() {
  var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  ctx.imageSmoothingEnabled = to;
}

function disableContextMenu() {
  canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  element: canvas,
  setSize: setSize,
  attachTo: attachTo,
  setSmoothing: setSmoothing,
  disableContextMenu: disableContextMenu
});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/input.js");



var backgroundColor = '#000000';
var update = null;
var render = null; // These are used for calculating the Delta Time for the Frame

var prevTime = 0;
var frameTime = 0;

function setBackgroundColor(color) {
  backgroundColor = color;
}

function setUpdate(callback) {
  update = callback;
}

function setRender(callback) {
  render = callback;
}

function step() {
  if (update) {
    update(1 / 60); // TODO: fake it at 60fps for now
  }

  if (render) {
    _graphics__WEBPACK_IMPORTED_MODULE_1__["default"].clear(backgroundColor);
    render();
  }

  _input__WEBPACK_IMPORTED_MODULE_2__["default"].update();
  window.requestAnimationFrame(step);
}

function start() {
  _input__WEBPACK_IMPORTED_MODULE_2__["default"].start();
  window.requestAnimationFrame(step);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  setSize: _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].setSize,
  setUpdate: setUpdate,
  setRender: setRender,
  setBackgroundColor: setBackgroundColor,
  attachTo: _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].attachTo,
  disableContextMenu: _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].disableContextMenu,
  setSmoothing: _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].setSmoothing,
  start: start
});

/***/ }),

/***/ "./src/graphics.js":
/*!*************************!*\
  !*** ./src/graphics.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./src/number.js");

var ctx = null;

function setContext(context) {
  ctx = context;
}

function getContext() {
  return ctx;
}

function clear(color) {
  rect(0, 0, ctx.canvas.width, ctx.canvas.height, {
    fill: {
      color: color
    }
  });
}

var defaultRect = {
  fill: {
    color: '#ffffff',
    opacity: 1
  },
  line: {
    width: 2,
    color: '#000000',
    opacity: 1
  }
};

function square(x, y, size) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultRect;
  rect(x, y, size, size, options);
}

function rect(x, y, w, h) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultRect;

  if (typeof options.fill !== 'undefined') {
    ctx.fillStyle = options.fill.color;
    ctx.fillRect(x, y, w, h);
  }

  if (typeof options.line !== 'undefined') {
    ctx.strokeStyle = options.line.color;
    ctx.lineWidth = options.line.width;
    ctx.strokeRect(x, y, w, h);
  }
}

var defaultLine = {
  width: 2,
  color: '#000000'
};

function line(from, to) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLine;
  ctx.strokeStyle = options.color;
  ctx.lineWidth = options.width;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
}

var defaultCircle = {
  fill: {
    color: '#000000',
    opacity: 1
  },
  line: {
    color: '#ffffff',
    opacity: 1,
    width: 2
  }
};

function circle(x, y, radius) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultCircle;

  // not happy with this really, make another function i think
  if (typeof options.fill !== 'undefined') {
    ctx.fillStyle = options.fill.color;
  }

  ctx.beginPath();
  ctx.strokeStyle = options.line.color;
  ctx.lineWidth = options.line.width;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.closePath();

  if (typeof options.fill !== 'undefined') {
    ctx.fill();
  }

  ctx.stroke();
}

function image(x, y, w, h, image) {
  ctx.drawImage(image, x, y, w, h);
}

function subImage(x, y, w, h, sx, sy, sw, sh, image) {
  ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
}

function sprite(sprite) {
  var halfWidth = sprite.width / 2;
  var halfHeight = sprite.height / 2;
  ctx.save();
  ctx.translate(sprite.x + halfWidth, sprite.y + halfHeight);
  ctx.rotate(_number__WEBPACK_IMPORTED_MODULE_0__["default"].toRadians(sprite.rotation));

  if (sprite.frames.length > 1) {
    subImage(-halfWidth, -halfHeight, sprite.width, sprite.height, sprite.frames[sprite.frame].x, sprite.frames[sprite.frame].y, sprite.frames[sprite.frame].width, sprite.frames[sprite.frame].height, sprite.texture);
  } else {
    image(-halfWidth, -halfHeight, sprite.width, sprite.height, sprite.texture);
  }

  ctx.restore();
}

function text() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#000000';
  var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '16pt sans-serif';
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(text, x, y);
} // TODO: Figure out word wrapping for these boxes.
//
//       I think we will probably have to split the text up into lines of
//       appropriate width, then render each one of them individually.
//
//       This could probably be cached in the object itself as long as we update
//       every time there's a change to the font, text, width or height.


function textbox(textbox) {
  ctx.fillStyle = '#ffffff';
  ctx.font = '16pt sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var measurements = ctx.measureText(textbox.text);

  if (measurements.width > textbox.width) {
    textbox.text = textbox.text.substr(0, 10) + '\n' + textbox.text.substr(10);
  }

  ctx.fillText(textbox.text, textbox.x, textbox.y);
}

function tile(positionX, positionY, tilesheet, gridX, gridY, tileSheetX, tileSheetY, scale, tileWidth, tileHeight) {
  subImage(positionX + scale * (gridX * tileWidth), positionY + scale * (gridY * tileHeight), scale * tileWidth, scale * tileHeight, tileWidth * tileSheetX, tileHeight * tileSheetY, tileWidth, tileHeight, tilesheet);
} // tilegrid: a 2d array of numbers representing terrain types
// spritesheets: An object, each key is the value that represents a tile from this sheet


function tiles(positionX, positionY, tileGrid, spriteSheets, scale, tileWidth, tileHeight) {
  var dirValues = {
    NW: 1,
    N: 2,
    NE: 4,
    E: 8,
    SE: 16,
    S: 32,
    SW: 64,
    W: 128
  };

  var _loop = function _loop(y) {
    var _loop2 = function _loop2(x) {
      if (tileGrid[y][x] === 0) {
        return "continue";
      } // REAL VALUES


      var tl = y > 0 ? tileGrid[y - 1][x - 1] : 0;
      var tm = y > 0 ? tileGrid[y - 1][x] : 0;
      var tr = y > 0 ? tileGrid[y - 1][x + 1] : 0;
      var ml = tileGrid[y][x - 1];
      var m = tileGrid[y][x];
      var mr = tileGrid[y][x + 1];
      var bl = y < tileGrid.length - 1 ? tileGrid[y + 1][x - 1] : 0;
      var bm = y < tileGrid.length - 1 ? tileGrid[y + 1][x] : 0;
      var br = y < tileGrid.length - 1 ? tileGrid[y + 1][x + 1] : 0; // BINARY VALUES

      var n = m === tm ? 1 : 0;
      var e = m === mr ? 1 : 0;
      var s = m === bm ? 1 : 0;
      var w = m === ml ? 1 : 0;
      var nw = m === tm && m === ml ? m === tl ? 1 : 0 : 0;
      var ne = m === tm && m === mr ? m === tr ? 1 : 0 : 0;
      var sw = m === bm && m === ml ? m === bl ? 1 : 0 : 0;
      var se = m === bm && m === mr ? m === br ? 1 : 0 : 0;
      var sum = dirValues.NW * nw + dirValues.N * n + dirValues.NE * ne + dirValues.E * e + dirValues.SE * se + dirValues.S * s + dirValues.SW * sw + dirValues.W * w; // Figure out which sheet we're supposed to be drawing from

      var sheet = spriteSheets.filter(function (sheet) {
        return sheet.type === tileGrid[y][x];
      })[0];
      var selections = sheet.tiles.filter(function (x) {
        return x.type === sum;
      }); // Note: Just picking a random one of the variants every time we render for now

      var selection = selections[Math.floor(Math.random() * selections.length)];

      if (selection) {
        tile(positionX, positionY, sheet.image, x, y, selection.position.x, selection.position.y, scale, selection.size.width, selection.size.height);
      } else {
        console.log("Tile not defined ".concat(sum));
      }
    };

    for (var x = 0; x < tileGrid[y].length; x++) {
      var _ret = _loop2(x);

      if (_ret === "continue") continue;
    }
  };

  for (var y = 0; y < tileGrid.length; y++) {
    _loop(y);
  }
}

var defaultDropShadow = {
  shadowColor: '#000000',
  shadowBlur: 6,
  shadowOffsetX: 4,
  shadowOffsetY: 4
};

function shadow(drawingOperations) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDropShadow;
  ctx.save();
  ctx.shadowColor = options.shadowColor;
  ctx.shadowBlur = options.shadowBlur;
  ctx.shadowOffsetX = options.shadowOffsetX;
  ctx.shadowOffsetY = options.shadowOffsetY;
  drawingOperations();
  ctx.restore();
}

function dodge(drawingOperations) {
  ctx.save();
  ctx.globalCompositeOperation = 'color-dodge';
  drawingOperations();
  ctx.restore();
}

function overlay(drawingOperations) {
  ctx.save();
  ctx.globalCompositeOperation = 'overlay';
  drawingOperations();
  ctx.restore();
}

function transparency(drawingOperations) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
  ctx.save();
  ctx.globalAlpha = alpha;
  drawingOperations();
  ctx.restore();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  circle: circle,
  clear: clear,
  image: image,
  line: line,
  rect: rect,
  getContext: getContext,
  setContext: setContext,
  sprite: sprite,
  square: square,
  subImage: subImage,
  text: text,
  textbox: textbox,
  tiles: tiles,
  shadow: shadow,
  dodge: dodge,
  overlay: overlay,
  transparency: transparency
});

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function make2DArray() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = [];

  for (var y = 0; y < height; y++) {
    var row = [];

    for (var x = 0; x < width; x++) {
      row.push(defaultValue);
    }

    result.push(row);
  }

  return result;
}

var defaultGrid = {
  pos: {
    x: 0,
    y: 0
  },
  visible: true,
  divisions: 4,
  tileWidth: 8,
  tileHeight: 8,
  scale: 1
};

function create(width, height) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGrid;
  options = _objectSpread({}, defaultGrid, {}, options);
  var tiles = make2DArray(width, height, 0);
  var pos = {
    x: options.pos.x,
    y: options.pos.y
  };
  var visible = options.visible;
  var divisions = options.divisions;
  var tileWidth = options.tileWidth;
  var tileHeight = options.tileHeight;
  var tileSize = options.tileWidth;
  var scale = options.scale;
  return {
    divisions: divisions,
    pos: pos,
    tileHeight: tileHeight,
    tiles: tiles,
    tileWidth: tileWidth,
    visible: visible,
    width: width,
    height: height,
    tileSize: tileSize,
    scale: scale
  };
}

module.exports = {
  create: create
};

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: keyboard, mouse, prevMouse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboard", function() { return keyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevMouse", function() { return prevMouse; });
/* harmony import */ var _input_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/keyboard */ "./src/input/keyboard.js");
/* harmony import */ var _input_mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/mouse */ "./src/input/mouse.js");



function start() {
  _input_keyboard__WEBPACK_IMPORTED_MODULE_0__["default"].start();
  _input_mouse__WEBPACK_IMPORTED_MODULE_1__["default"].start();
}

function update() {
  _input_keyboard__WEBPACK_IMPORTED_MODULE_0__["default"].update();
  _input_mouse__WEBPACK_IMPORTED_MODULE_1__["default"].update();
}

var keyboard = _input_keyboard__WEBPACK_IMPORTED_MODULE_0__["default"].state; // TODO: export prevKeyboard state 

var mouse = _input_mouse__WEBPACK_IMPORTED_MODULE_1__["default"].state;
var prevMouse = _input_mouse__WEBPACK_IMPORTED_MODULE_1__["default"].prevState;
/* harmony default export */ __webpack_exports__["default"] = ({
  start: start,
  update: update
});

/***/ }),

/***/ "./src/input/keyboard.js":
/*!*******************************!*\
  !*** ./src/input/keyboard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/canvas.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/input/keys.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var keys = defaultState();

function defaultState() {
  var defaultState = {
    pressed: false,
    justPressed: false,
    released: false,
    justReleased: false
  };
  return _keys__WEBPACK_IMPORTED_MODULE_1__["default"].reduce(function (acc, key) {
    var label = key.label;
    delete key['label'];
    acc[label] = _objectSpread({}, key, {}, defaultState);
    return acc;
  }, {});
}

function preventDefaultArrows(event) {
  var keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

  if (keys.includes(event.key)) {
    event.preventDefault();
  }
}

function getKey(event, keys) {
  var result = null;
  var objectKeys = Object.keys(keys);

  for (var i = 0; i < objectKeys.length; i++) {
    if (keys[objectKeys[i]].code === event.keyCode) {
      result = keys[objectKeys[i]];
    }
  }

  return result;
}

function down(event) {
  preventDefaultArrows(event);
  var key = getKey(event, keys);
  key.pressed = true;
}

function up(event) {
  var key = getKey(event, keys);
  key.pressed = false;
}

function update() {}

function start() {
  // keyboard events
  document.addEventListener('keydown', down);
  document.addEventListener('keyup', up);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  start: start,
  update: update,
  state: keys
});

/***/ }),

/***/ "./src/input/keys.js":
/*!***************************!*\
  !*** ./src/input/keys.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  code: 8,
  label: 'backspace'
}, {
  code: 9,
  label: 'tab'
}, {
  code: 13,
  label: 'enter'
}, {
  code: 16,
  label: 'shift'
}, {
  code: 17,
  label: 'ctrl'
}, {
  code: 18,
  label: 'alt'
}, {
  code: 20,
  label: 'caps'
}, {
  code: 27,
  label: 'escape'
}, {
  code: 32,
  label: 'space'
}, {
  code: 33,
  label: 'pageUp'
}, {
  code: 34,
  label: 'pageDown'
}, {
  code: 35,
  label: 'end'
}, {
  code: 36,
  label: 'home'
}, {
  code: 37,
  label: 'left'
}, {
  code: 38,
  label: 'up'
}, {
  code: 39,
  label: 'right'
}, {
  code: 40,
  label: 'down'
}, {
  code: 45,
  label: 'insert'
}, {
  code: 46,
  label: 'delete'
}, {
  code: 48,
  label: 'zero'
}, {
  code: 49,
  label: 'one'
}, {
  code: 50,
  label: 'two'
}, {
  code: 51,
  label: 'three'
}, {
  code: 52,
  label: 'four'
}, {
  code: 53,
  label: 'five'
}, {
  code: 54,
  label: 'six'
}, {
  code: 55,
  label: 'seven'
}, {
  code: 56,
  label: 'eight'
}, {
  code: 57,
  label: 'nine'
}, {
  code: 65,
  label: 'A'
}, {
  code: 66,
  label: 'B'
}, {
  code: 67,
  label: 'C'
}, {
  code: 68,
  label: 'D'
}, {
  code: 69,
  label: 'E'
}, {
  code: 70,
  label: 'F'
}, {
  code: 71,
  label: 'G'
}, {
  code: 72,
  label: 'H'
}, {
  code: 73,
  label: 'I'
}, {
  code: 74,
  label: 'J'
}, {
  code: 75,
  label: 'K'
}, {
  code: 76,
  label: 'L'
}, {
  code: 77,
  label: 'M'
}, {
  code: 78,
  label: 'N'
}, {
  code: 79,
  label: 'O'
}, {
  code: 80,
  label: 'P'
}, {
  code: 81,
  label: 'Q'
}, {
  code: 82,
  label: 'R'
}, {
  code: 83,
  label: 'S'
}, {
  code: 84,
  label: 'T'
}, {
  code: 85,
  label: 'U'
}, {
  code: 86,
  label: 'V'
}, {
  code: 87,
  label: 'W'
}, {
  code: 88,
  label: 'X'
}, {
  code: 89,
  label: 'Y'
}, {
  code: 90,
  label: 'Z'
}, {
  code: 91,
  label: 'superLeft'
}, {
  code: 92,
  label: 'superRight'
}, {
  code: 93,
  label: 'select'
}, {
  code: 96,
  label: 'num0'
}, {
  code: 97,
  label: 'num1'
}, {
  code: 98,
  label: 'num2'
}, {
  code: 99,
  label: 'num3'
}, {
  code: 100,
  label: 'num4'
}, {
  code: 101,
  label: 'num5'
}, {
  code: 102,
  label: 'num6'
}, {
  code: 103,
  label: 'num7'
}, {
  code: 104,
  label: 'num8'
}, {
  code: 105,
  label: 'num9'
}, {
  code: 106,
  label: 'multiply'
}, {
  code: 107,
  label: 'add'
}, {
  code: 109,
  label: 'subtract'
}, {
  code: 110,
  label: 'point'
}, {
  code: 111,
  label: 'divide'
}, {
  code: 112,
  label: 'F1'
}, {
  code: 113,
  label: 'F2'
}, {
  code: 114,
  label: 'F3'
}, {
  code: 115,
  label: 'F4'
}, {
  code: 116,
  label: 'F5'
}, {
  code: 117,
  label: 'F6'
}, {
  code: 118,
  label: 'F7'
}, {
  code: 119,
  label: 'F8'
}, {
  code: 120,
  label: 'F9'
}, {
  code: 121,
  label: 'F10'
}, {
  code: 122,
  label: 'F11'
}, {
  code: 123,
  label: 'F12'
}, {
  code: 144,
  label: 'numLock'
}, {
  code: 145,
  label: 'scrollLock'
}, {
  code: 186,
  label: 'semiColon'
}, {
  code: 187,
  label: 'equals'
}, {
  code: 188,
  label: 'comma'
}, {
  code: 189,
  label: 'dash'
}, {
  code: 190,
  label: 'dot'
}, {
  code: 191,
  label: 'forewardSlash'
}, {
  code: 192,
  label: 'graveAccent'
}, {
  code: 219,
  label: 'openBracket'
}, {
  code: 220,
  label: 'backSlash'
}, {
  code: 221,
  label: 'closeBracket'
}, {
  code: 222,
  label: 'singleQuote'
}]);

/***/ }),

/***/ "./src/input/mouse.js":
/*!****************************!*\
  !*** ./src/input/mouse.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/canvas.js");
/* harmony import */ var _vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vec2 */ "./src/vec2.js");
/* harmony import */ var _vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vec2__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var prevMouse = defaultState();
var mouse = defaultState();

function diff() {
  var result = {};

  if (prevMouse.x !== mouse.x) {
    result['x'] = mouse.x;
  }

  if (prevMouse.y !== mouse.y) {
    result['y'] = mouse.y;
  }

  if (prevMouse.pressed !== mouse.pressed) {
    result['pressed'] = mouse.pressed;
  }

  if (prevMouse.justPressed !== mouse.justPressed) {
    result['justPressed'] = mouse.justPressed;
  }

  if (prevMouse.released !== mouse.released) {
    result['released'] = mouse.released;
  }

  if (prevMouse.justReleased !== mouse.justReleased) {
    result['justReleased'] = mouse.justReleased;
  }

  return result;
}

function defaultButtonState() {
  return {
    pressed: false,
    justPressed: false,
    released: false,
    justReleased: false
  };
}

function defaultWheelState() {
  var buttonState = defaultButtonState();
  return _objectSpread({}, buttonState, {
    moved: false
  });
}

function defaultState() {
  return {
    x: 0,
    y: 0,
    left: defaultButtonState(),
    wheel: defaultWheelState(),
    right: defaultButtonState()
  };
}

function clone(state) {
  return Object.assign({}, state);
}

function relative(event, element) {
  var bounds = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].getBoundingClientRect();
  return {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top
  };
}

function move(event) {
  var newPos = relative(event, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"]);
  mouse.x = newPos.x;
  mouse.y = newPos.y;
  moved = true;
}

function down(event) {
  switch (event.which) {
    case 1:
      mouse.left.pressed = true;
      break;

    case 2:
      mouse.middle.pressed = true;
      break;

    case 3:
      mouse.right.pressed = true;
      break;
  }
}

function up(event) {
  switch (event.which) {
    case 1:
      mouse.left.pressed = false;
      break;

    case 2:
      mouse.middle.pressed = false;
      break;

    case 3:
      mouse.right.pressed = false;
      break;
  }
}

function wheel(event) {
  mouse.wheel.moved = event.delta === 0 ? false : true;

  if (mouse.wheel.moved !== false) {
    mouse.wheel.direction = event.deltaY < 0 ? 'up' : 'down';
  }
}

function update() {
  mouse.wheel.moved = false;

  if (mouse.x === prevMouse.x && mouse.y === prevMouse.y) {
    mouse.moved = false;
  }

  prevMouse = clone(mouse);
}

function start() {
  // mouse events
  _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('mousemove', move);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('mousedown', down);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('mouseup', up);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener('wheel', wheel); // default mouse position, center of screen

  mouse.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2;
  mouse.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  start: start,
  update: update,
  prevState: prevMouse,
  state: mouse
});

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
// music should handle the playback of longer, looping sounds

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/number.js":
/*!***********************!*\
  !*** ./src/number.js ***!
  \***********************/
/*! exports provided: toRadians, toDegrees, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadians", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegrees", function() { return toDegrees; });
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  toRadians: toRadians,
  toDegrees: toDegrees
});

/***/ }),

/***/ "./src/sfx.js":
/*!********************!*\
  !*** ./src/sfx.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
// should just handle sound effects, one off sounds

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This should be a lower level module that handles general sound stuff
// sfx and music should both get to make use of this
function play(sound) {}

function pause(sound) {}

function stop(sound) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  play: play,
  pause: pause,
  stop: stop
});

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

function create() {
  var _x, _x2, _y, _y2, _rotation, _rotation2, _ref, _mutatorMap;

  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var texture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#ffffff';
  var frames = [];
  return _ref = {
    x: x,
    y: y,
    width: width,
    height: height,
    rotation: rotation,
    texture: texture,
    color: color,
    frame: 0,
    setFrames: function setFrames(newFrames) {
      frames = newFrames;
    },
    addFrame: function addFrame(frame) {
      frames.push(frame);
    },

    get frames() {
      return frames;
    }

  }, _x = "x", _mutatorMap = {}, _mutatorMap[_x] = _mutatorMap[_x] || {}, _mutatorMap[_x].get = function () {
    return x;
  }, _x2 = "x", _mutatorMap[_x2] = _mutatorMap[_x2] || {}, _mutatorMap[_x2].set = function (newX) {
    x = newX;
  }, _y = "y", _mutatorMap[_y] = _mutatorMap[_y] || {}, _mutatorMap[_y].get = function () {
    return y;
  }, _y2 = "y", _mutatorMap[_y2] = _mutatorMap[_y2] || {}, _mutatorMap[_y2].set = function (newY) {
    y = newY;
  }, _rotation = "rotation", _mutatorMap[_rotation] = _mutatorMap[_rotation] || {}, _mutatorMap[_rotation].get = function () {
    return rotation;
  }, _rotation2 = "rotation", _mutatorMap[_rotation2] = _mutatorMap[_rotation2] || {}, _mutatorMap[_rotation2].set = function (degrees) {
    rotation = degrees >= 360 ? 360 - degrees : degrees;
  }, _defineEnumerableProperties(_ref, _mutatorMap), _ref;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: create
});

/***/ }),

/***/ "./src/terrain.js":
/*!************************!*\
  !*** ./src/terrain.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function create(name, type, image, tiles) {
  return {
    name: name,
    type: type,
    image: image,
    tiles: tiles
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: create
});

/***/ }),

/***/ "./src/textbox.js":
/*!************************!*\
  !*** ./src/textbox.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function create() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  var text = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    text: text
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: create
});

/***/ }),

/***/ "./src/vec2.js":
/*!*********************!*\
  !*** ./src/vec2.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function create(_x, _y) {
  var x = _x;
  var y = _y;

  var add = function add(v) {
    x += v.x;
    y += v.y;
  };

  var addScalar = function addScalar(s) {
    x += s;
    y += s;
  };

  var divide = function divide(v) {
    x /= v.x;
    y /= v.y;
  };

  var divideScalar = function divideScalar(s) {
    x /= s;
    y /= s;
  };

  var dot = function dot(v) {
    return x * v.x + y * v.y;
  };

  var getLength = function getLength() {
    return Math.sqrt(x * x + y * y);
  };

  var getOpposite = function getOpposite(v) {
    return create(-v.x, -v.y);
  };

  var getPerp = function getPerp() {
    return create(-y, x);
  };

  var isEqualTo = function isEqualTo(v) {
    return x == v.x && y == v.y;
  };

  var multiply = function multiply(v) {
    x *= v.x;
    y *= v.y;
  };

  var multiplyScalar = function multiplyScalar(s) {
    x *= s;
    y *= s;
  };

  var normalise = function normalise() {
    var l = getLength();
    x = x / l;
    y = y / l;
  };

  var setLength = function setLength(l) {
    normalise();
    multiplyScalar(l);
  };

  var subtract = function subtract(v) {
    x -= v.x;
    y -= v.y;
  };

  var subtractScalar = function subtractScalar(s) {
    x -= s;
    y -= s;
  };

  return {
    add: add,
    addScalar: addScalar,
    clone: clone,
    divide: divide,
    divideScalar: divideScalar,
    dot: dot,
    getLength: getLength,
    getOpposite: getOpposite,
    getPerp: getPerp,
    isEqualTo: isEqualTo,
    multiply: multiply,
    multiplyScalar: multiplyScalar,
    normalise: normalise,
    setLength: setLength,
    subtract: subtract,
    subtractScalar: subtractScalar,

    set x(_x) {
      x = _x;
    },

    get x() {
      return x;
    },

    set y(_y) {
      y = _y;
    },

    get y() {
      return y;
    }

  };
}

var fromDegrees = function fromDegrees(degrees) {
  var rad = degrees * (Math.PI / 180);
  return create(Math.cos(rad), Math.sin(rad));
};

var clone = function clone(v) {
  return create(v.x, v.y);
};

module.exports = {
  clone: clone,
  create: create,
  fromDegrees: fromDegrees
};

/***/ })

/******/ });
});
//# sourceMappingURL=bramble.js.map