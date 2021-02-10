/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n}\n\n.canvasSpace {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  cursor: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,QAAQ;EACR,OAAO;EACP,YAAY;AACd","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n}\n\n.canvasSpace {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  cursor: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Canvas.js":
/*!************************************************!*\
  !*** ./node_modules/pts/dist/es2015/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasSpace": () => (/* binding */ CanvasSpace),
/* harmony export */   "CanvasForm": () => (/* binding */ CanvasForm)
/* harmony export */ });
/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Space */ "./node_modules/pts/dist/es2015/Space.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./node_modules/pts/dist/es2015/Form.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography */ "./node_modules/pts/dist/es2015/Typography.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */






class CanvasSpace extends _Space__WEBPACK_IMPORTED_MODULE_0__.MultiTouchSpace {
    constructor(elem, callback) {
        super();
        this._pixelScale = 1;
        this._autoResize = true;
        this._bgcolor = "#e1e9f0";
        this._offscreen = false;
        this._initialResize = false;
        var _selector = null;
        var _existed = false;
        this.id = "pt";
        if (elem instanceof Element) {
            _selector = elem;
            this.id = "pts_existing_space";
        }
        else {
            let id = elem;
            id = (elem[0] === "#" || elem[0] === ".") ? elem : "#" + elem;
            _selector = document.querySelector(id);
            _existed = true;
            this.id = id.substr(1);
        }
        if (!_selector) {
            this._container = this._createElement("div", this.id + "_container");
            this._canvas = this._createElement("canvas", this.id);
            this._container.appendChild(this._canvas);
            document.body.appendChild(this._container);
            _existed = false;
        }
        else if (_selector.nodeName.toLowerCase() != "canvas") {
            this._container = _selector;
            this._canvas = this._createElement("canvas", this.id + "_canvas");
            this._container.appendChild(this._canvas);
            this._initialResize = true;
        }
        else {
            this._canvas = _selector;
            this._container = _selector.parentElement;
            this._autoResize = false;
        }
        setTimeout(this._ready.bind(this, callback), 100);
        this._ctx = this._canvas.getContext('2d');
    }
    _createElement(elem = "div", id) {
        let d = document.createElement(elem);
        d.setAttribute("id", id);
        return d;
    }
    _ready(callback) {
        if (!this._container)
            throw new Error(`Cannot initiate #${this.id} element`);
        this._isReady = true;
        this._resizeHandler(null);
        this.clear(this._bgcolor);
        this._canvas.dispatchEvent(new Event("ready"));
        for (let k in this.players) {
            if (this.players.hasOwnProperty(k)) {
                if (this.players[k].start)
                    this.players[k].start(this.bound.clone(), this);
            }
        }
        this._pointer = this.center;
        this._initialResize = false;
        if (callback)
            callback(this.bound, this._canvas);
    }
    setup(opt) {
        if (opt.bgcolor)
            this._bgcolor = opt.bgcolor;
        this.autoResize = (opt.resize != undefined) ? opt.resize : false;
        if (opt.retina !== false) {
            let r1 = window.devicePixelRatio || 1;
            let r2 = this._ctx.webkitBackingStorePixelRatio || this._ctx.mozBackingStorePixelRatio || this._ctx.msBackingStorePixelRatio || this._ctx.oBackingStorePixelRatio || this._ctx.backingStorePixelRatio || 1;
            this._pixelScale = Math.max(1, r1 / r2);
        }
        if (opt.offscreen) {
            this._offscreen = true;
            this._offCanvas = this._createElement("canvas", this.id + "_offscreen");
            this._offCtx = this._offCanvas.getContext('2d');
        }
        else {
            this._offscreen = false;
        }
        return this;
    }
    set autoResize(auto) {
        this._autoResize = auto;
        if (auto) {
            window.addEventListener('resize', this._resizeHandler.bind(this));
        }
        else {
            window.removeEventListener('resize', this._resizeHandler.bind(this));
        }
    }
    get autoResize() { return this._autoResize; }
    resize(b, evt) {
        this.bound = b;
        this._canvas.width = this.bound.size.x * this._pixelScale;
        this._canvas.height = this.bound.size.y * this._pixelScale;
        this._canvas.style.width = Math.floor(this.bound.size.x) + "px";
        this._canvas.style.height = Math.floor(this.bound.size.y) + "px";
        if (this._offscreen) {
            this._offCanvas.width = this.bound.size.x * this._pixelScale;
            this._offCanvas.height = this.bound.size.y * this._pixelScale;
        }
        if (this._pixelScale != 1) {
            this._ctx.scale(this._pixelScale, this._pixelScale);
            if (this._offscreen) {
                this._offCtx.scale(this._pixelScale, this._pixelScale);
            }
        }
        for (let k in this.players) {
            if (this.players.hasOwnProperty(k)) {
                let p = this.players[k];
                if (p.resize)
                    p.resize(this.bound, evt);
            }
        }
        this.render(this._ctx);
        if (evt && !this.isPlaying)
            this.playOnce(0);
        return this;
    }
    _resizeHandler(evt) {
        let b = (this._autoResize || this._initialResize) ? this._container.getBoundingClientRect() : this._canvas.getBoundingClientRect();
        if (b) {
            let box = _Pt__WEBPACK_IMPORTED_MODULE_2__.Bound.fromBoundingRect(b);
            box.center = box.center.add(window.pageXOffset, window.pageYOffset);
            this.resize(box, evt);
        }
    }
    set background(bg) { this._bgcolor = bg; }
    get background() { return this._bgcolor; }
    get pixelScale() {
        return this._pixelScale;
    }
    get hasOffscreen() {
        return this._offscreen;
    }
    get offscreenCtx() { return this._offCtx; }
    get offscreenCanvas() { return this._offCanvas; }
    getForm() { return new CanvasForm(this); }
    get element() {
        return this._canvas;
    }
    get parent() {
        return this._container;
    }
    get ready() {
        return this._isReady;
    }
    get ctx() { return this._ctx; }
    clear(bg) {
        if (bg)
            this._bgcolor = bg;
        let lastColor = this._ctx.fillStyle;
        if (this._bgcolor && this._bgcolor != "transparent") {
            this._ctx.fillStyle = this._bgcolor;
            this._ctx.fillRect(-1, -1, this._canvas.width + 1, this._canvas.height + 1);
        }
        else {
            this._ctx.clearRect(-1, -1, this._canvas.width + 1, this._canvas.height + 1);
        }
        this._ctx.fillStyle = lastColor;
        return this;
    }
    clearOffscreen(bg) {
        if (this._offscreen) {
            if (bg) {
                this._offCtx.fillStyle = bg;
                this._offCtx.fillRect(-1, -1, this._canvas.width + 1, this._canvas.height + 1);
            }
            else {
                this._offCtx.clearRect(-1, -1, this._offCanvas.width + 1, this._offCanvas.height + 1);
            }
        }
        return this;
    }
    playItems(time) {
        if (this._isReady) {
            this._ctx.save();
            if (this._offscreen)
                this._offCtx.save();
            super.playItems(time);
            this._ctx.restore();
            if (this._offscreen)
                this._offCtx.restore();
            this.render(this._ctx);
        }
    }
    dispose() {
        window.removeEventListener('resize', this._resizeHandler.bind(this));
        this.stop();
        this.removeAll();
        return this;
    }
}
class CanvasForm extends _Form__WEBPACK_IMPORTED_MODULE_1__.VisualForm {
    constructor(space) {
        super();
        this._style = {
            fillStyle: "#f03", strokeStyle: "#fff",
            lineWidth: 1, lineJoin: "bevel", lineCap: "butt",
            globalAlpha: 1
        };
        this._space = space;
        this._space.add({ start: () => {
                this._ctx = this._space.ctx;
                this._ctx.fillStyle = this._style.fillStyle;
                this._ctx.strokeStyle = this._style.strokeStyle;
                this._ctx.lineJoin = "bevel";
                this._ctx.font = this._font.value;
                this._ready = true;
            } });
    }
    get space() { return this._space; }
    get ctx() { return this._space.ctx; }
    useOffscreen(off = true, clear = false) {
        if (clear)
            this._space.clearOffscreen((typeof clear == "string") ? clear : null);
        this._ctx = (this._space.hasOffscreen && off) ? this._space.offscreenCtx : this._space.ctx;
        return this;
    }
    renderOffscreen(offset = [0, 0]) {
        if (this._space.hasOffscreen) {
            this._space.ctx.drawImage(this._space.offscreenCanvas, offset[0], offset[1], this._space.width, this._space.height);
        }
    }
    alpha(a) {
        this._ctx.globalAlpha = a;
        this._style.globalAlpha = a;
        return this;
    }
    fill(c) {
        if (typeof c == "boolean") {
            this.filled = c;
        }
        else {
            this.filled = true;
            this._style.fillStyle = c;
            this._ctx.fillStyle = c;
        }
        return this;
    }
    stroke(c, width, linejoin, linecap) {
        if (typeof c == "boolean") {
            this.stroked = c;
        }
        else {
            this.stroked = true;
            this._style.strokeStyle = c;
            this._ctx.strokeStyle = c;
            if (width) {
                this._ctx.lineWidth = width;
                this._style.lineWidth = width;
            }
            if (linejoin) {
                this._ctx.lineJoin = linejoin;
                this._style.lineJoin = linejoin;
            }
            if (linecap) {
                this._ctx.lineCap = linecap;
                this._style.lineCap = linecap;
            }
        }
        return this;
    }
    gradient(stops) {
        let vals = [];
        if (stops.length < 2)
            stops.push([0.99, "#000"], [1, "#000"]);
        for (let i = 0, len = stops.length; i < len; i++) {
            let t = typeof stops[i] === 'string' ? i * (1 / (stops.length - 1)) : stops[i][0];
            let v = typeof stops[i] === 'string' ? stops[i] : stops[i][1];
            vals.push([t, v]);
        }
        return (area1, area2) => {
            area1 = area1.map(a => a.abs());
            if (area2)
                area2.map(a => a.abs());
            let grad = area2
                ? this.ctx.createRadialGradient(area1[0][0], area1[0][1], area1[1][0], area2[0][0], area2[0][1], area2[1][0])
                : this.ctx.createLinearGradient(area1[0][0], area1[0][1], area1[1][0], area1[1][1]);
            for (let i = 0, len = vals.length; i < len; i++) {
                grad.addColorStop(vals[i][0], vals[i][1]);
            }
            return grad;
        };
    }
    composite(mode = 'source-over') {
        this.ctx.globalCompositeOperation = mode;
        return this;
    }
    clip() {
        this.ctx.clip();
        return this;
    }
    dash(segments = true, offset = 0) {
        if (!segments) {
            this._ctx.setLineDash([]);
            this._ctx.lineDashOffset = 0;
        }
        else {
            if (segments === true) {
                segments = [5, 5];
            }
            this._ctx.setLineDash([segments[0], segments[1]]);
            this._ctx.lineDashOffset = offset;
        }
        return this;
    }
    font(sizeOrFont, weight, style, lineHeight, family) {
        if (typeof sizeOrFont == "number") {
            this._font.size = sizeOrFont;
            if (family)
                this._font.face = family;
            if (weight)
                this._font.weight = weight;
            if (style)
                this._font.style = style;
            if (lineHeight)
                this._font.lineHeight = lineHeight;
        }
        else {
            this._font = sizeOrFont;
        }
        this._ctx.font = this._font.value;
        if (this._estimateTextWidth)
            this.fontWidthEstimate(true);
        return this;
    }
    fontWidthEstimate(estimate = true) {
        this._estimateTextWidth = (estimate) ? _Typography__WEBPACK_IMPORTED_MODULE_4__.Typography.textWidthEstimator(((c) => this._ctx.measureText(c).width)) : undefined;
        return this;
    }
    getTextWidth(c) {
        return (!this._estimateTextWidth) ? this._ctx.measureText(c + " .").width : this._estimateTextWidth(c);
    }
    _textTruncate(str, width, tail = "") {
        return _Typography__WEBPACK_IMPORTED_MODULE_4__.Typography.truncate(this.getTextWidth.bind(this), str, width, tail);
    }
    _textAlign(box, vertical, offset, center) {
        let _box = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(box);
        if (!_Util__WEBPACK_IMPORTED_MODULE_3__.Util.arrayCheck(_box))
            return;
        if (!center)
            center = _Op__WEBPACK_IMPORTED_MODULE_5__.Rectangle.center(_box);
        var px = _box[0][0];
        if (this._ctx.textAlign == "end" || this._ctx.textAlign == "right") {
            px = _box[1][0];
        }
        else if (this._ctx.textAlign == "center" || this._ctx.textAlign == "middle") {
            px = center[0];
        }
        var py = center[1];
        if (vertical == "top" || vertical == "start") {
            py = _box[0][1];
        }
        else if (vertical == "end" || vertical == "bottom") {
            py = _box[1][1];
        }
        return (offset) ? new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(px + offset[0], py + offset[1]) : new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(px, py);
    }
    reset() {
        for (let k in this._style) {
            if (this._style.hasOwnProperty(k)) {
                this._ctx[k] = this._style[k];
            }
        }
        this._font = new _Form__WEBPACK_IMPORTED_MODULE_1__.Font();
        this._ctx.font = this._font.value;
        return this;
    }
    _paint() {
        if (this._filled)
            this._ctx.fill();
        if (this._stroked)
            this._ctx.stroke();
    }
    point(p, radius = 5, shape = "square") {
        if (!p)
            return;
        if (!CanvasForm[shape])
            throw new Error(`${shape} is not a static function of CanvasForm`);
        CanvasForm[shape](this._ctx, p, radius);
        this._paint();
        return this;
    }
    static circle(ctx, pt, radius = 10) {
        if (!pt)
            return;
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], radius, 0, _Util__WEBPACK_IMPORTED_MODULE_3__.Const.two_pi, false);
        ctx.closePath();
    }
    circle(pts) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(pts);
        CanvasForm.circle(this._ctx, p[0], p[1][0]);
        this._paint();
        return this;
    }
    static ellipse(ctx, pt, radius, rotation = 0, startAngle = 0, endAngle = _Util__WEBPACK_IMPORTED_MODULE_3__.Const.two_pi, cc = false) {
        if (!pt || !radius)
            return;
        ctx.beginPath();
        ctx.ellipse(pt[0], pt[1], radius[0], radius[1], rotation, startAngle, endAngle, cc);
    }
    ellipse(pt, radius, rotation = 0, startAngle = 0, endAngle = _Util__WEBPACK_IMPORTED_MODULE_3__.Const.two_pi, cc = false) {
        CanvasForm.ellipse(this._ctx, pt, radius, rotation, startAngle, endAngle, cc);
        this._paint();
        return this;
    }
    static arc(ctx, pt, radius, startAngle, endAngle, cc) {
        if (!pt)
            return;
        ctx.beginPath();
        ctx.arc(pt[0], pt[1], radius, startAngle, endAngle, cc);
    }
    arc(pt, radius, startAngle, endAngle, cc) {
        CanvasForm.arc(this._ctx, pt, radius, startAngle, endAngle, cc);
        this._paint();
        return this;
    }
    static square(ctx, pt, halfsize) {
        if (!pt)
            return;
        let x1 = pt[0] - halfsize;
        let y1 = pt[1] - halfsize;
        let x2 = pt[0] + halfsize;
        let y2 = pt[1] + halfsize;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2, y1);
        ctx.closePath();
    }
    square(pt, halfsize) {
        CanvasForm.square(this._ctx, pt, halfsize);
        this._paint();
        return this;
    }
    static line(ctx, pts) {
        if (!_Util__WEBPACK_IMPORTED_MODULE_3__.Util.arrayCheck(pts))
            return;
        let i = 0;
        ctx.beginPath();
        for (let it of pts) {
            if (it) {
                if (i++ > 0) {
                    ctx.lineTo(it[0], it[1]);
                }
                else {
                    ctx.moveTo(it[0], it[1]);
                }
            }
        }
    }
    line(pts) {
        CanvasForm.line(this._ctx, pts);
        this._paint();
        return this;
    }
    static polygon(ctx, pts) {
        if (!_Util__WEBPACK_IMPORTED_MODULE_3__.Util.arrayCheck(pts))
            return;
        CanvasForm.line(ctx, pts);
        ctx.closePath();
    }
    polygon(pts) {
        CanvasForm.polygon(this._ctx, pts);
        this._paint();
        return this;
    }
    static rect(ctx, pts) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(pts);
        if (!_Util__WEBPACK_IMPORTED_MODULE_3__.Util.arrayCheck(p))
            return;
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);
        ctx.lineTo(p[0][0], p[1][1]);
        ctx.lineTo(p[1][0], p[1][1]);
        ctx.lineTo(p[1][0], p[0][1]);
        ctx.closePath();
    }
    rect(pts) {
        CanvasForm.rect(this._ctx, pts);
        this._paint();
        return this;
    }
    static image(ctx, img, target = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(), orig) {
        let t = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(target);
        if (typeof t[0] === "number") {
            ctx.drawImage(img, t[0], t[1]);
        }
        else {
            if (orig) {
                let o = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(orig);
                ctx.drawImage(img, o[0][0], o[0][1], o[1][0] - o[0][0], o[1][1] - o[0][1], t[0][0], t[0][1], t[1][0] - t[0][0], t[1][1] - t[0][1]);
            }
            else {
                ctx.drawImage(img, t[0][0], t[0][1], t[1][0] - t[0][0], t[1][1] - t[0][1]);
            }
        }
    }
    image(img, target = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(), orig) {
        CanvasForm.image(this._ctx, img, target, orig);
        return this;
    }
    static text(ctx, pt, txt, maxWidth) {
        if (!pt)
            return;
        ctx.fillText(txt, pt[0], pt[1], maxWidth);
    }
    text(pt, txt, maxWidth) {
        CanvasForm.text(this._ctx, pt, txt, maxWidth);
        return this;
    }
    textBox(box, txt, verticalAlign = "middle", tail = "", overrideBaseline = true) {
        if (overrideBaseline)
            this._ctx.textBaseline = verticalAlign;
        let size = _Op__WEBPACK_IMPORTED_MODULE_5__.Rectangle.size(box);
        let t = this._textTruncate(txt, size[0], tail);
        this.text(this._textAlign(box, verticalAlign), t[0]);
        return this;
    }
    paragraphBox(box, txt, lineHeight = 1.2, verticalAlign = "top", crop = true) {
        let b = _Util__WEBPACK_IMPORTED_MODULE_3__.Util.iterToArray(box);
        let size = _Op__WEBPACK_IMPORTED_MODULE_5__.Rectangle.size(b);
        this._ctx.textBaseline = "top";
        let lstep = this._font.size * lineHeight;
        let nextLine = (sub, buffer = [], cc = 0) => {
            if (!sub)
                return buffer;
            if (crop && cc * lstep > size[1] - lstep * 2)
                return buffer;
            if (cc > 10000)
                throw new Error("max recursion reached (10000)");
            let t = this._textTruncate(sub, size[0], "");
            let newln = t[0].indexOf("\n");
            if (newln >= 0) {
                buffer.push(t[0].substr(0, newln));
                return nextLine(sub.substr(newln + 1), buffer, cc + 1);
            }
            let dt = t[0].lastIndexOf(" ") + 1;
            if (dt <= 0 || t[1] === sub.length)
                dt = undefined;
            let line = t[0].substr(0, dt);
            buffer.push(line);
            return (t[1] <= 0 || t[1] === sub.length) ? buffer : nextLine(sub.substr((dt || t[1])), buffer, cc + 1);
        };
        let lines = nextLine(txt);
        let lsize = lines.length * lstep;
        let lbox = b;
        if (verticalAlign == "middle" || verticalAlign == "center") {
            let lpad = (size[1] - lsize) / 2;
            if (crop)
                lpad = Math.max(0, lpad);
            lbox = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(b[0].$add(0, lpad), b[1].$subtract(0, lpad));
        }
        else if (verticalAlign == "bottom") {
            lbox = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(b[0].$add(0, size[1] - lsize), b[1]);
        }
        else {
            lbox = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(b[0], b[0].$add(size[0], lsize));
        }
        let center = _Op__WEBPACK_IMPORTED_MODULE_5__.Rectangle.center(lbox);
        for (let i = 0, len = lines.length; i < len; i++) {
            this.text(this._textAlign(lbox, "top", [0, i * lstep], center), lines[i]);
        }
        return this;
    }
    alignText(alignment = "left", baseline = "alphabetic") {
        if (baseline == "center")
            baseline = "middle";
        if (baseline == "baseline")
            baseline = "alphabetic";
        this._ctx.textAlign = alignment;
        this._ctx.textBaseline = baseline;
        return this;
    }
    log(txt) {
        let w = this._ctx.measureText(txt).width + 20;
        this.stroke(false).fill("rgba(0,0,0,.4)").rect([[0, 0], [w, 20]]);
        this.fill("#fff").text([10, 14], txt);
        return this;
    }
}
//# sourceMappingURL=Canvas.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Color.js":
/*!***********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Color.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */



class Color extends _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt {
    constructor(...args) {
        super(...args);
        this._mode = "rgb";
        this._isNorm = false;
    }
    static from(...args) {
        let p = [1, 1, 1, 1];
        let c = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.getArgs(args);
        for (let i = 0, len = p.length; i < len; i++) {
            if (i < c.length)
                p[i] = c[i];
        }
        return new Color(p);
    }
    static fromHex(hex) {
        if (hex[0] == "#")
            hex = hex.substr(1);
        if (hex.length <= 3) {
            let fn = (i) => hex[i] || "F";
            hex = `${fn(0)}${fn(0)}${fn(1)}${fn(1)}${fn(2)}${fn(2)}`;
        }
        let alpha = 1;
        if (hex.length === 8) {
            alpha = hex.substr(6) && 0xFF / 255;
            hex = hex.substring(0, 6);
        }
        let hexVal = parseInt(hex, 16);
        return new Color(hexVal >> 16, hexVal >> 8 & 0xFF, hexVal & 0xFF, alpha);
    }
    static rgb(...args) { return Color.from(...args).toMode("rgb"); }
    static hsl(...args) { return Color.from(...args).toMode("hsl"); }
    static hsb(...args) { return Color.from(...args).toMode("hsb"); }
    static lab(...args) { return Color.from(...args).toMode("lab"); }
    static lch(...args) { return Color.from(...args).toMode("lch"); }
    static luv(...args) { return Color.from(...args).toMode("luv"); }
    static xyz(...args) { return Color.from(...args).toMode("xyz"); }
    static maxValues(mode) { return Color.ranges[mode].zipSlice(1).$take([0, 1, 2]); }
    get hex() { return this.toString("hex"); }
    get rgb() { return this.toString("rgb"); }
    get rgba() { return this.toString("rgba"); }
    clone() {
        let c = new Color(this);
        c.toMode(this._mode);
        return c;
    }
    toMode(mode, convert = false) {
        if (convert) {
            let fname = this._mode.toUpperCase() + "to" + mode.toUpperCase();
            if (Color[fname]) {
                this.to(Color[fname](this, this._isNorm, this._isNorm));
            }
            else {
                throw new Error("Cannot convert color with " + fname);
            }
        }
        this._mode = mode;
        return this;
    }
    get mode() { return this._mode; }
    get r() { return this[0]; }
    set r(n) { this[0] = n; }
    get g() { return this[1]; }
    set g(n) { this[1] = n; }
    get b() { return this[2]; }
    set b(n) { this[2] = n; }
    get h() { return (this._mode == "lch") ? this[2] : this[0]; }
    set h(n) {
        let i = (this._mode == "lch") ? 2 : 0;
        this[i] = n;
    }
    get s() { return this[1]; }
    set s(n) { this[1] = n; }
    get l() { return (this._mode == "hsl") ? this[2] : this[0]; }
    set l(n) {
        let i = (this._mode == "hsl") ? 2 : 0;
        this[i] = n;
    }
    get a() { return this[1]; }
    set a(n) { this[1] = n; }
    get c() { return this[1]; }
    set c(n) { this[1] = n; }
    get u() { return this[1]; }
    set u(n) { this[1] = n; }
    get v() { return this[2]; }
    set v(n) { this[2] = n; }
    set alpha(n) { if (this.length > 3)
        this[3] = n; }
    get alpha() { return (this.length > 3) ? this[3] : 1; }
    get normalized() { return this._isNorm; }
    set normalized(b) { this._isNorm = b; }
    normalize(toNorm = true) {
        if (this._isNorm == toNorm)
            return this;
        let ranges = Color.ranges[this._mode];
        for (let i = 0; i < 3; i++) {
            this[i] = (!toNorm)
                ? _Num__WEBPACK_IMPORTED_MODULE_2__.Num.mapToRange(this[i], 0, 1, ranges[i][0], ranges[i][1])
                : _Num__WEBPACK_IMPORTED_MODULE_2__.Num.mapToRange(this[i], ranges[i][0], ranges[i][1], 0, 1);
        }
        this._isNorm = toNorm;
        return this;
    }
    $normalize(toNorm = true) { return this.clone().normalize(toNorm); }
    toString(format = "mode") {
        if (format == "hex") {
            let _hex = (n) => {
                let s = Math.floor(n).toString(16);
                return (s.length < 2) ? '0' + s : s;
            };
            return `#${_hex(this[0])}${_hex(this[1])}${_hex(this[2])}`;
        }
        else if (format == "rgba") {
            return `rgba(${Math.floor(this[0])},${Math.floor(this[1])},${Math.floor(this[2])},${this.alpha}`;
        }
        else if (format == "rgb") {
            return `rgb(${Math.floor(this[0])},${Math.floor(this[1])},${Math.floor(this[2])}`;
        }
        else {
            return `${this._mode}(${this[0]},${this[1]},${this[2]},${this.alpha})`;
        }
    }
    static RGBtoHSL(rgb, normalizedInput = false, normalizedOutput = false) {
        let [r, g, b] = (!normalizedInput) ? rgb.$normalize() : rgb;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h = (max + min) / 2;
        let s = h;
        let l = h;
        if (max == min) {
            h = 0;
            s = 0;
        }
        else {
            let d = max - min;
            s = (l > 0.5) ? d / (2 - max - min) : d / (max + min);
            h = 0;
            if (max === r) {
                h = (g - b) / d + ((g < b) ? 6 : 0);
            }
            else if (max === g) {
                h = (b - r) / d + 2;
            }
            else if (max === b) {
                h = (r - g) / d + 4;
            }
        }
        return Color.hsl(((normalizedOutput) ? h / 60 : h * 60), s, l, rgb.alpha);
    }
    static HSLtoRGB(hsl, normalizedInput = false, normalizedOutput = false) {
        let [h, s, l] = hsl;
        if (!normalizedInput)
            h = h / 360;
        if (s == 0)
            return Color.rgb(l * 255, l * 255, l * 255, hsl.alpha);
        let q = (l <= 0.5) ? l * (1 + s) : l + s - (l * s);
        let p = 2 * l - q;
        let convert = (t) => {
            t = (t < 0) ? t + 1 : (t > 1) ? t - 1 : t;
            if (t * 6 < 1) {
                return p + (q - p) * t * 6;
            }
            else if (t * 2 < 1) {
                return q;
            }
            else if (t * 3 < 2) {
                return p + (q - p) * ((2 / 3) - t) * 6;
            }
            else {
                return p;
            }
        };
        let sc = (normalizedOutput) ? 1 : 255;
        return Color.rgb(sc * convert((h + 1 / 3)), sc * convert(h), sc * convert((h - 1 / 3)), hsl.alpha);
    }
    static RGBtoHSB(rgb, normalizedInput = false, normalizedOutput = false) {
        let [r, g, b] = (!normalizedInput) ? rgb.$normalize() : rgb;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let d = max - min;
        let h = 0;
        let s = (max === 0) ? 0 : d / max;
        let v = max;
        if (max != min) {
            if (max === r) {
                h = (g - b) / d + ((g < b) ? 6 : 0);
            }
            else if (max === g) {
                h = (b - r) / d + 2;
            }
            else if (max === b) {
                h = (r - g) / d + 4;
            }
        }
        return Color.hsb(((normalizedOutput) ? h / 60 : h * 60), s, v, rgb.alpha);
    }
    static HSBtoRGB(hsb, normalizedInput = false, normalizedOutput = false) {
        let [h, s, v] = hsb;
        if (!normalizedInput)
            h = h / 360;
        let i = Math.floor(h * 6);
        let f = h * 6 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);
        let pick = [
            [v, t, p], [q, v, p], [p, v, t],
            [p, q, v], [t, p, v], [v, p, q]
        ];
        let c = pick[i % 6];
        let sc = (normalizedOutput) ? 1 : 255;
        return Color.rgb(sc * c[0], sc * c[1], sc * c[2], hsb.alpha);
    }
    static RGBtoLAB(rgb, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? rgb.$normalize(false) : rgb;
        return Color.XYZtoLAB(Color.RGBtoXYZ(c), false, normalizedOutput);
    }
    static LABtoRGB(lab, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? lab.$normalize(false) : lab;
        return Color.XYZtoRGB(Color.LABtoXYZ(c), false, normalizedOutput);
    }
    static RGBtoLCH(rgb, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? rgb.$normalize(false) : rgb;
        return Color.LABtoLCH(Color.RGBtoLAB(c), false, normalizedOutput);
    }
    static LCHtoRGB(lch, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? lch.$normalize(false) : lch;
        return Color.LABtoRGB(Color.LCHtoLAB(c), false, normalizedOutput);
    }
    static RGBtoLUV(rgb, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? rgb.$normalize(false) : rgb;
        return Color.XYZtoLUV(Color.RGBtoXYZ(c), false, normalizedOutput);
    }
    static LUVtoRGB(luv, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? luv.$normalize(false) : luv;
        return Color.XYZtoRGB(Color.LUVtoXYZ(c), false, normalizedOutput);
    }
    static RGBtoXYZ(rgb, normalizedInput = false, normalizedOutput = false) {
        let c = (!normalizedInput) ? rgb.$normalize() : rgb.clone();
        for (let i = 0; i < 3; i++) {
            c[i] = (c[i] > 0.04045) ? Math.pow((c[i] + 0.055) / 1.055, 2.4) : c[i] / 12.92;
            if (!normalizedOutput)
                c[i] = c[i] * 100;
        }
        let cc = Color.xyz(c[0] * 0.4124564 + c[1] * 0.3575761 + c[2] * 0.1804375, c[0] * 0.2126729 + c[1] * 0.7151522 + c[2] * 0.0721750, c[0] * 0.0193339 + c[1] * 0.1191920 + c[2] * 0.9503041, rgb.alpha);
        return (normalizedOutput) ? cc.normalize() : cc;
    }
    static XYZtoRGB(xyz, normalizedInput = false, normalizedOutput = false) {
        let [x, y, z] = (!normalizedInput) ? xyz.$normalize() : xyz;
        let rgb = [
            x * 3.2404542 + y * -1.5371385 + z * -0.4985314,
            x * -0.9692660 + y * 1.8760108 + z * 0.0415560,
            x * 0.0556434 + y * -0.2040259 + z * 1.0572252
        ];
        for (let i = 0; i < 3; i++) {
            rgb[i] = (rgb[i] < 0) ? 0 : (rgb[i] > 0.0031308) ? (1.055 * Math.pow(rgb[i], 1 / 2.4) - 0.055) : (12.92 * rgb[i]);
            rgb[i] = Math.max(0, Math.min(1, rgb[i]));
            if (!normalizedOutput)
                rgb[i] = Math.round(rgb[i] * 255);
        }
        let cc = Color.rgb(rgb[0], rgb[1], rgb[2], xyz.alpha);
        return (normalizedOutput) ? cc.normalize() : cc;
    }
    static XYZtoLAB(xyz, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? xyz.$normalize(false) : xyz.clone();
        c.divide(Color.D65);
        let fn = (n) => (n > 0.008856) ? Math.pow(n, 1 / 3) : (7.787 * n) + 16 / 116;
        let cy = fn(c[1]);
        let cc = Color.lab((116 * cy) - 16, 500 * (fn(c[0]) - cy), 200 * (cy - fn(c[2])), xyz.alpha);
        return (normalizedOutput) ? cc.normalize() : cc;
    }
    static LABtoXYZ(lab, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? lab.$normalize(false) : lab;
        let y = (c[0] + 16) / 116;
        let x = (c[1] / 500) + y;
        let z = y - c[2] / 200;
        let fn = (n) => {
            let nnn = n * n * n;
            return (nnn > 0.008856) ? nnn : (n - 16 / 116) / 7.787;
        };
        let d = Color.D65;
        let cc = Color.xyz(Math.max(0, d[0] * fn(x)), Math.max(0, d[1] * fn(y)), Math.max(0, d[2] * fn(z)), lab.alpha);
        return (normalizedOutput) ? cc.normalize() : cc;
    }
    static XYZtoLUV(xyz, normalizedInput = false, normalizedOutput = false) {
        let [x, y, z] = (normalizedInput) ? xyz.$normalize(false) : xyz;
        let u = (4 * x) / (x + (15 * y) + (3 * z));
        let v = (9 * y) / (x + (15 * y) + (3 * z));
        y = y / 100;
        y = (y > 0.008856) ? Math.pow(y, 1 / 3) : (7.787 * y + 16 / 116);
        let refU = (4 * Color.D65[0]) / (Color.D65[0] + (15 * Color.D65[1]) + (3 * Color.D65[2]));
        let refV = (9 * Color.D65[1]) / (Color.D65[0] + (15 * Color.D65[1]) + (3 * Color.D65[2]));
        let L = (116 * y) - 16;
        return Color.luv(L, 13 * L * (u - refU), 13 * L * (v - refV), xyz.alpha);
    }
    static LUVtoXYZ(luv, normalizedInput = false, normalizedOutput = false) {
        let [l, u, v] = (normalizedInput) ? luv.$normalize(false) : luv;
        let y = (l + 16) / 116;
        let cubeY = y * y * y;
        y = (cubeY > 0.008856) ? cubeY : (y - 16 / 116) / 7.787;
        let refU = (4 * Color.D65[0]) / (Color.D65[0] + (15 * Color.D65[1]) + (3 * Color.D65[2]));
        let refV = (9 * Color.D65[1]) / (Color.D65[0] + (15 * Color.D65[1]) + (3 * Color.D65[2]));
        u = u / (13 * l) + refU;
        v = v / (13 * l) + refV;
        y = y * 100;
        let x = -1 * (9 * y * u) / ((u - 4) * v - u * v);
        let z = (9 * y - (15 * v * y) - (v * x)) / (3 * v);
        return Color.xyz(x, y, z, luv.alpha);
    }
    static LABtoLCH(lab, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? lab.$normalize(false) : lab;
        let h = _Num__WEBPACK_IMPORTED_MODULE_2__.Geom.toDegree(_Num__WEBPACK_IMPORTED_MODULE_2__.Geom.boundRadian(Math.atan2(c[2], c[1])));
        return Color.lch(c[0], Math.sqrt(c[1] * c[1] + c[2] * c[2]), h, lab.alpha);
    }
    static LCHtoLAB(lch, normalizedInput = false, normalizedOutput = false) {
        let c = (normalizedInput) ? lch.$normalize(false) : lch;
        let rad = _Num__WEBPACK_IMPORTED_MODULE_2__.Geom.toRadian(c[2]);
        return Color.lab(c[0], Math.cos(rad) * c[1], Math.sin(rad) * c[1], lch.alpha);
    }
}
Color.D65 = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(95.047, 100, 108.883, 1);
Color.ranges = {
    rgb: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 255), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 255), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 255)),
    hsl: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 360), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 1), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 1)),
    hsb: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 360), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 1), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 1)),
    lab: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-128, 127), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-128, 127)),
    lch: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 360)),
    luv: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-134, 220), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-140, 122)),
    xyz: new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 100))
};
//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Create.js":
/*!************************************************!*\
  !*** ./node_modules/pts/dist/es2015/Create.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Create": () => (/* binding */ Create),
/* harmony export */   "Noise": () => (/* binding */ Noise),
/* harmony export */   "Delaunay": () => (/* binding */ Delaunay)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/* harmony import */ var _LinearAlgebra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearAlgebra */ "./node_modules/pts/dist/es2015/LinearAlgebra.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */





class Create {
    static distributeRandom(bound, count, dimensions = 2) {
        let pts = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        for (let i = 0; i < count; i++) {
            let p = [bound.x + Math.random() * bound.width];
            if (dimensions > 1)
                p.push(bound.y + Math.random() * bound.height);
            if (dimensions > 2)
                p.push(bound.z + Math.random() * bound.depth);
            pts.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(p));
        }
        return pts;
    }
    static distributeLinear(line, count) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.iterToArray(line);
        let ln = _Op__WEBPACK_IMPORTED_MODULE_1__.Line.subpoints(_line, count - 2);
        ln.unshift(_line[0]);
        ln.push(_line[_line.length - 1]);
        return ln;
    }
    static gridPts(bound, columns, rows, orientation = [0.5, 0.5]) {
        if (columns === 0 || rows === 0)
            throw new Error("grid columns and rows cannot be 0");
        let unit = bound.size.$subtract(1).$divide(columns, rows);
        let offset = unit.$multiply(orientation);
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                g.push(bound.topLeft.$add(unit.$multiply(c, r)).add(offset));
            }
        }
        return g;
    }
    static gridCells(bound, columns, rows) {
        if (columns === 0 || rows === 0)
            throw new Error("grid columns and rows cannot be 0");
        let unit = bound.size.$subtract(1).divide(columns, rows);
        let g = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                g.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(bound.topLeft.$add(unit.$multiply(c, r)), bound.topLeft.$add(unit.$multiply(c, r).add(unit))));
            }
        }
        return g;
    }
    static radialPts(center, radius, count, angleOffset = -_Util__WEBPACK_IMPORTED_MODULE_2__.Const.half_pi) {
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        let a = _Util__WEBPACK_IMPORTED_MODULE_2__.Const.two_pi / count;
        for (let i = 0; i < count; i++) {
            g.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(center).toAngle(a * i + angleOffset, radius, true));
        }
        return g;
    }
    static noisePts(pts, dx = 0.01, dy = 0.01, rows = 0, columns = 0) {
        let seed = Math.random();
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        let i = 0;
        for (let p of pts) {
            let np = new Noise(p);
            let r = (rows && rows > 0) ? Math.floor(i / rows) : i;
            let c = (columns && columns > 0) ? i % columns : i;
            np.initNoise(dx * c, dy * r);
            np.seed(seed);
            g.push(np);
            i++;
        }
        return g;
    }
    static delaunay(pts) {
        return Delaunay.from(pts);
    }
}
const __noise_grad3 = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
];
const __noise_permTable = [151, 160, 137, 91, 90, 15,
    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
    190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
    77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
    102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
    135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
    5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
    129, 22, 39, 253, 9, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
    251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
    49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
    138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
];
class Noise extends _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt {
    constructor(...args) {
        super(...args);
        this.perm = [];
        this._n = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0.01, 0.01);
        this.perm = __noise_permTable.concat(__noise_permTable);
    }
    initNoise(...args) {
        this._n = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(...args);
        return this;
    }
    step(x = 0, y = 0) {
        this._n.add(x, y);
        return this;
    }
    seed(s) {
        if (s > 0 && s < 1)
            s *= 65536;
        s = Math.floor(s);
        if (s < 256)
            s |= s << 8;
        for (let i = 0; i < 255; i++) {
            let v = (i & 1) ? __noise_permTable[i] ^ (s & 255) : __noise_permTable[i] ^ ((s >> 8) & 255);
            this.perm[i] = this.perm[i + 256] = v;
        }
        return this;
    }
    noise2D() {
        let i = Math.max(0, Math.floor(this._n[0])) % 255;
        let j = Math.max(0, Math.floor(this._n[1])) % 255;
        let x = (this._n[0] % 255) - i;
        let y = (this._n[1] % 255) - j;
        let n00 = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_4__.Vec.dot(__noise_grad3[(i + this.perm[j]) % 12], [x, y, 0]);
        let n01 = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_4__.Vec.dot(__noise_grad3[(i + this.perm[j + 1]) % 12], [x, y - 1, 0]);
        let n10 = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_4__.Vec.dot(__noise_grad3[(i + 1 + this.perm[j]) % 12], [x - 1, y, 0]);
        let n11 = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_4__.Vec.dot(__noise_grad3[(i + 1 + this.perm[j + 1]) % 12], [x - 1, y - 1, 0]);
        let _fade = (f) => f * f * f * (f * (f * 6 - 15) + 10);
        let tx = _fade(x);
        return _Num__WEBPACK_IMPORTED_MODULE_3__.Num.lerp(_Num__WEBPACK_IMPORTED_MODULE_3__.Num.lerp(n00, n10, tx), _Num__WEBPACK_IMPORTED_MODULE_3__.Num.lerp(n01, n11, tx), _fade(y));
    }
}
class Delaunay extends _Pt__WEBPACK_IMPORTED_MODULE_0__.Group {
    constructor() {
        super(...arguments);
        this._mesh = [];
    }
    delaunay(triangleOnly = true) {
        if (this.length < 3)
            return [];
        this._mesh = [];
        let n = this.length;
        let indices = [];
        for (let i = 0; i < n; i++)
            indices[i] = i;
        indices.sort((i, j) => this[j][0] - this[i][0]);
        let pts = this.slice();
        let st = this._superTriangle();
        pts = pts.concat(st);
        let opened = [this._circum(n, n + 1, n + 2, st)];
        let closed = [];
        let tris = [];
        for (let i = 0, len = indices.length; i < len; i++) {
            let c = indices[i];
            let edges = [];
            let j = opened.length;
            if (!this._mesh[c])
                this._mesh[c] = {};
            while (j--) {
                let circum = opened[j];
                let radius = circum.circle[1][0];
                let d = pts[c].$subtract(circum.circle[0]);
                if (d[0] > 0 && d[0] * d[0] > radius * radius) {
                    closed.push(circum);
                    tris.push(circum.triangle);
                    opened.splice(j, 1);
                    continue;
                }
                if (d[0] * d[0] + d[1] * d[1] - radius * radius > _Util__WEBPACK_IMPORTED_MODULE_2__.Const.epsilon) {
                    continue;
                }
                edges.push(circum.i, circum.j, circum.j, circum.k, circum.k, circum.i);
                opened.splice(j, 1);
            }
            Delaunay._dedupe(edges);
            j = edges.length;
            while (j > 1) {
                opened.push(this._circum(edges[--j], edges[--j], c, false, pts));
            }
        }
        for (let i = 0, len = opened.length; i < len; i++) {
            let o = opened[i];
            if (o.i < n && o.j < n && o.k < n) {
                closed.push(o);
                tris.push(o.triangle);
                this._cache(o);
            }
        }
        return (triangleOnly) ? tris : closed;
    }
    voronoi() {
        let vs = [];
        let n = this._mesh;
        for (let i = 0, len = n.length; i < len; i++) {
            vs.push(this.neighborPts(i, true));
        }
        return vs;
    }
    mesh() {
        return this._mesh;
    }
    neighborPts(i, sort = false) {
        let cs = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        let n = this._mesh;
        for (let k in n[i]) {
            if (n[i].hasOwnProperty(k))
                cs.push(n[i][k].circle[0]);
        }
        return (sort) ? _Num__WEBPACK_IMPORTED_MODULE_3__.Geom.sortEdges(cs) : cs;
    }
    neighbors(i) {
        let cs = [];
        let n = this._mesh;
        for (let k in n[i]) {
            if (n[i].hasOwnProperty(k))
                cs.push(n[i][k]);
        }
        return cs;
    }
    _cache(o) {
        this._mesh[o.i][`${Math.min(o.j, o.k)}-${Math.max(o.j, o.k)}`] = o;
        this._mesh[o.j][`${Math.min(o.i, o.k)}-${Math.max(o.i, o.k)}`] = o;
        this._mesh[o.k][`${Math.min(o.i, o.j)}-${Math.max(o.i, o.j)}`] = o;
    }
    _superTriangle() {
        let minPt = this[0];
        let maxPt = this[0];
        for (let i = 1, len = this.length; i < len; i++) {
            minPt = minPt.$min(this[i]);
            maxPt = maxPt.$max(this[i]);
        }
        let d = maxPt.$subtract(minPt);
        let mid = minPt.$add(maxPt).divide(2);
        let dmax = Math.max(d[0], d[1]);
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(mid.$subtract(20 * dmax, dmax), mid.$add(0, 20 * dmax), mid.$add(20 * dmax, -dmax));
    }
    _triangle(i, j, k, pts = this) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(pts[i], pts[j], pts[k]);
    }
    _circum(i, j, k, tri, pts = this) {
        let t = tri || this._triangle(i, j, k, pts);
        return {
            i: i,
            j: j,
            k: k,
            triangle: t,
            circle: _Op__WEBPACK_IMPORTED_MODULE_1__.Triangle.circumcircle(t)
        };
    }
    static _dedupe(edges) {
        let j = edges.length;
        while (j > 1) {
            let b = edges[--j];
            let a = edges[--j];
            let i = j;
            while (i > 1) {
                let n = edges[--i];
                let m = edges[--i];
                if ((a == m && b == n) || (a == n && b == m)) {
                    edges.splice(j, 2);
                    edges.splice(i, 2);
                    break;
                }
            }
        }
        return edges;
    }
}
//# sourceMappingURL=Create.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Dom.js":
/*!*********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Dom.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMSpace": () => (/* binding */ DOMSpace),
/* harmony export */   "HTMLSpace": () => (/* binding */ HTMLSpace),
/* harmony export */   "HTMLForm": () => (/* binding */ HTMLForm)
/* harmony export */ });
/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Space */ "./node_modules/pts/dist/es2015/Space.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./node_modules/pts/dist/es2015/Form.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */




class DOMSpace extends _Space__WEBPACK_IMPORTED_MODULE_0__.MultiTouchSpace {
    constructor(elem, callback) {
        super();
        this.id = "domspace";
        this._autoResize = true;
        this._bgcolor = "#e1e9f0";
        this._css = {};
        var _selector = null;
        var _existed = false;
        this.id = "pts";
        if (elem instanceof Element) {
            _selector = elem;
            this.id = "pts_existing_space";
        }
        else {
            _selector = document.querySelector(elem);
            _existed = true;
            this.id = elem.substr(1);
        }
        if (!_selector) {
            this._container = DOMSpace.createElement("div", "pts_container");
            this._canvas = DOMSpace.createElement("div", "pts_element");
            this._container.appendChild(this._canvas);
            document.body.appendChild(this._container);
            _existed = false;
        }
        else {
            this._canvas = _selector;
            this._container = _selector.parentElement;
        }
        setTimeout(this._ready.bind(this, callback), 50);
    }
    static createElement(elem = "div", id, appendTo) {
        let d = document.createElement(elem);
        if (id)
            d.setAttribute("id", id);
        if (appendTo && appendTo.appendChild)
            appendTo.appendChild(d);
        return d;
    }
    _ready(callback) {
        if (!this._container)
            throw new Error(`Cannot initiate #${this.id} element`);
        this._isReady = true;
        this._resizeHandler(null);
        this.clear(this._bgcolor);
        this._canvas.dispatchEvent(new Event("ready"));
        for (let k in this.players) {
            if (this.players.hasOwnProperty(k)) {
                if (this.players[k].start)
                    this.players[k].start(this.bound.clone(), this);
            }
        }
        this._pointer = this.center;
        this.refresh(false);
        if (callback)
            callback(this.bound, this._canvas);
    }
    setup(opt) {
        if (opt.bgcolor) {
            this._bgcolor = opt.bgcolor;
        }
        this.autoResize = (opt.resize != undefined) ? opt.resize : false;
        return this;
    }
    getForm() {
        return null;
    }
    set autoResize(auto) {
        this._autoResize = auto;
        if (auto) {
            window.addEventListener('resize', this._resizeHandler.bind(this));
        }
        else {
            delete this._css['width'];
            delete this._css['height'];
            window.removeEventListener('resize', this._resizeHandler.bind(this));
        }
    }
    get autoResize() { return this._autoResize; }
    resize(b, evt) {
        this.bound = b;
        this.styles({ width: `${b.width}px`, height: `${b.height}px` }, true);
        for (let k in this.players) {
            if (this.players.hasOwnProperty(k)) {
                let p = this.players[k];
                if (p.resize)
                    p.resize(this.bound, evt);
            }
        }
        return this;
    }
    _resizeHandler(evt) {
        let b = _Pt__WEBPACK_IMPORTED_MODULE_3__.Bound.fromBoundingRect(this._container.getBoundingClientRect());
        if (this._autoResize) {
            this.styles({ width: "100%", height: "100%" }, true);
        }
        else {
            this.styles({ width: `${b.width}px`, height: `${b.height}px` }, true);
        }
        this.resize(b, evt);
    }
    get element() {
        return this._canvas;
    }
    get parent() {
        return this._container;
    }
    get ready() { return this._isReady; }
    clear(bg) {
        if (bg)
            this.background = bg;
        this._canvas.innerHTML = "";
        return this;
    }
    set background(bg) {
        this._bgcolor = bg;
        this._container.style.backgroundColor = this._bgcolor;
    }
    get background() { return this._bgcolor; }
    style(key, val, update = false) {
        this._css[key] = val;
        if (update)
            this._canvas.style[key] = val;
        return this;
    }
    styles(styles, update = false) {
        for (let k in styles) {
            if (styles.hasOwnProperty(k))
                this.style(k, styles[k], update);
        }
        return this;
    }
    static setAttr(elem, data) {
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                elem.setAttribute(k, data[k]);
            }
        }
        return elem;
    }
    static getInlineStyles(data) {
        let str = "";
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                if (data[k])
                    str += `${k}: ${data[k]}; `;
            }
        }
        return str;
    }
    dispose() {
        window.removeEventListener('resize', this._resizeHandler.bind(this));
        this.stop();
        this.removeAll();
        return this;
    }
}
class HTMLSpace extends DOMSpace {
    getForm() {
        return new HTMLForm(this);
    }
    static htmlElement(parent, name, id, autoClass = true) {
        if (!parent || !parent.appendChild)
            throw new Error("parent is not a valid DOM element");
        let elem = document.querySelector(`#${id}`);
        if (!elem) {
            elem = document.createElement(name);
            elem.setAttribute("id", id);
            if (autoClass)
                elem.setAttribute("class", id.substring(0, id.indexOf("-")));
            parent.appendChild(elem);
        }
        return elem;
    }
    remove(player) {
        let temp = this._container.querySelectorAll("." + HTMLForm.scopeID(player));
        temp.forEach((el) => {
            el.parentNode.removeChild(el);
        });
        return super.remove(player);
    }
    removeAll() {
        this._container.innerHTML = "";
        return super.removeAll();
    }
}
class HTMLForm extends _Form__WEBPACK_IMPORTED_MODULE_1__.VisualForm {
    constructor(space) {
        super();
        this._style = {
            "filled": true,
            "stroked": true,
            "background": "#f03",
            "border-color": "#fff",
            "color": "#000",
            "border-width": "1px",
            "border-radius": "0",
            "border-style": "solid",
            "opacity": 1,
            "position": "absolute",
            "top": 0,
            "left": 0,
            "width": 0,
            "height": 0
        };
        this._ctx = {
            group: null,
            groupID: "pts",
            groupCount: 0,
            currentID: "pts0",
            currentClass: "",
            style: {},
        };
        this._ready = false;
        this._space = space;
        this._space.add({ start: () => {
                this._ctx.group = this._space.element;
                this._ctx.groupID = "pts_dom_" + (HTMLForm.groupID++);
                this._ctx.style = Object.assign({}, this._style);
                this._ready = true;
            } });
    }
    get space() { return this._space; }
    styleTo(k, v, unit = '') {
        if (this._ctx.style[k] === undefined)
            throw new Error(`${k} style property doesn't exist`);
        this._ctx.style[k] = `${v}${unit}`;
    }
    alpha(a) {
        this.styleTo("opacity", a);
        return this;
    }
    fill(c) {
        if (typeof c == "boolean") {
            this.styleTo("filled", c);
            if (!c)
                this.styleTo("background", "transparent");
        }
        else {
            this.styleTo("filled", true);
            this.styleTo("background", c);
        }
        return this;
    }
    stroke(c, width, linejoin, linecap) {
        if (typeof c == "boolean") {
            this.styleTo("stroked", c);
            if (!c)
                this.styleTo("border-width", 0);
        }
        else {
            this.styleTo("stroked", true);
            this.styleTo("border-color", c);
            this.styleTo("border-width", (width || 1) + "px");
        }
        return this;
    }
    fillText(c) {
        this.styleTo("color", c);
        return this;
    }
    cls(c) {
        if (typeof c == "boolean") {
            this._ctx.currentClass = "";
        }
        else {
            this._ctx.currentClass = c;
        }
        return this;
    }
    font(sizeOrFont, weight, style, lineHeight, family) {
        if (typeof sizeOrFont == "number") {
            this._font.size = sizeOrFont;
            if (family)
                this._font.face = family;
            if (weight)
                this._font.weight = weight;
            if (style)
                this._font.style = style;
            if (lineHeight)
                this._font.lineHeight = lineHeight;
        }
        else {
            this._font = sizeOrFont;
        }
        this._ctx.style['font'] = this._font.value;
        return this;
    }
    reset() {
        this._ctx.style = Object.assign({}, this._style);
        this._font = new _Form__WEBPACK_IMPORTED_MODULE_1__.Font(10, "sans-serif");
        this._ctx.style['font'] = this._font.value;
        return this;
    }
    updateScope(group_id, group) {
        this._ctx.group = group;
        this._ctx.groupID = group_id;
        this._ctx.groupCount = 0;
        this.nextID();
        return this._ctx;
    }
    scope(item) {
        if (!item || item.animateID == null)
            throw new Error("item not defined or not yet added to Space");
        return this.updateScope(HTMLForm.scopeID(item), this.space.element);
    }
    nextID() {
        this._ctx.groupCount++;
        this._ctx.currentID = `${this._ctx.groupID}-${this._ctx.groupCount}`;
        return this._ctx.currentID;
    }
    static getID(ctx) {
        return ctx.currentID || `p-${HTMLForm.domID++}`;
    }
    static scopeID(item) {
        return `item-${item.animateID}`;
    }
    static style(elem, styles) {
        let st = [];
        if (!styles["filled"])
            st.push("background: none");
        if (!styles["stroked"])
            st.push("border: none");
        for (let k in styles) {
            if (styles.hasOwnProperty(k) && k != "filled" && k != "stroked") {
                let v = styles[k];
                if (v) {
                    if (!styles["filled"] && k.indexOf('background') === 0) {
                        continue;
                    }
                    else if (!styles["stroked"] && k.indexOf('border-width') === 0) {
                        continue;
                    }
                    else {
                        st.push(`${k}: ${v}`);
                    }
                }
            }
        }
        return HTMLSpace.setAttr(elem, { style: st.join(";") });
    }
    static rectStyle(ctx, pt, size) {
        ctx.style["left"] = pt[0] + "px";
        ctx.style["top"] = pt[1] + "px";
        ctx.style["width"] = size[0] + "px";
        ctx.style["height"] = size[1] + "px";
        return ctx;
    }
    static textStyle(ctx, pt) {
        ctx.style["left"] = pt[0] + "px";
        ctx.style["top"] = pt[1] + "px";
        return ctx;
    }
    static point(ctx, pt, radius = 5, shape = "square") {
        if (shape === "circle") {
            return HTMLForm.circle(ctx, pt, radius);
        }
        else {
            return HTMLForm.square(ctx, pt, radius);
        }
    }
    point(pt, radius = 5, shape = "square") {
        this.nextID();
        if (shape == "circle")
            this.styleTo("border-radius", "100%");
        HTMLForm.point(this._ctx, pt, radius, shape);
        return this;
    }
    static circle(ctx, pt, radius = 10) {
        let elem = HTMLSpace.htmlElement(ctx.group, "div", HTMLForm.getID(ctx));
        HTMLSpace.setAttr(elem, { class: `pts-form pts-circle ${ctx.currentClass}` });
        HTMLForm.rectStyle(ctx, new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(pt).$subtract(radius), new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(radius * 2, radius * 2));
        HTMLForm.style(elem, ctx.style);
        return elem;
    }
    circle(pts) {
        this.nextID();
        this.styleTo("border-radius", "100%");
        HTMLForm.circle(this._ctx, pts[0], pts[1][0]);
        return this;
    }
    static square(ctx, pt, halfsize) {
        let elem = HTMLSpace.htmlElement(ctx.group, "div", HTMLForm.getID(ctx));
        HTMLSpace.setAttr(elem, { class: `pts-form pts-square ${ctx.currentClass}` });
        HTMLForm.rectStyle(ctx, new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(pt).$subtract(halfsize), new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(halfsize * 2, halfsize * 2));
        HTMLForm.style(elem, ctx.style);
        return elem;
    }
    square(pt, halfsize) {
        this.nextID();
        HTMLForm.square(this._ctx, pt, halfsize);
        return this;
    }
    static rect(ctx, pts) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.iterToArray(pts);
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__.Util.arrayCheck(p))
            return;
        let elem = HTMLSpace.htmlElement(ctx.group, "div", HTMLForm.getID(ctx));
        HTMLSpace.setAttr(elem, { class: `pts-form pts-rect ${ctx.currentClass}` });
        HTMLForm.rectStyle(ctx, p[0], p[1]);
        HTMLForm.style(elem, ctx.style);
        return elem;
    }
    rect(pts) {
        this.nextID();
        this.styleTo("border-radius", "0");
        HTMLForm.rect(this._ctx, pts);
        return this;
    }
    static text(ctx, pt, txt) {
        let elem = HTMLSpace.htmlElement(ctx.group, "div", HTMLForm.getID(ctx));
        HTMLSpace.setAttr(elem, { class: `pts-form pts-text ${ctx.currentClass}` });
        elem.textContent = txt;
        HTMLForm.textStyle(ctx, pt);
        HTMLForm.style(elem, ctx.style);
        return elem;
    }
    text(pt, txt) {
        this.nextID();
        HTMLForm.text(this._ctx, pt, txt);
        return this;
    }
    log(txt) {
        this.fill("#000").stroke("#fff", 0.5).text([10, 14], txt);
        return this;
    }
    arc(pt, radius, startAngle, endAngle, cc) {
        _Util__WEBPACK_IMPORTED_MODULE_2__.Util.warn("arc is not implemented in HTMLForm");
        return this;
    }
    line(pts) {
        _Util__WEBPACK_IMPORTED_MODULE_2__.Util.warn("line is not implemented in HTMLForm");
        return this;
    }
    polygon(pts) {
        _Util__WEBPACK_IMPORTED_MODULE_2__.Util.warn("polygon is not implemented in HTMLForm");
        return this;
    }
}
HTMLForm.groupID = 0;
HTMLForm.domID = 0;
//# sourceMappingURL=Dom.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Form.js":
/*!**********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Form.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "VisualForm": () => (/* binding */ VisualForm),
/* harmony export */   "Font": () => (/* binding */ Font)
/* harmony export */ });
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */
class Form {
    constructor() {
        this._ready = false;
    }
    get ready() { return this._ready; }
}
class VisualForm extends Form {
    constructor() {
        super(...arguments);
        this._filled = true;
        this._stroked = true;
        this._font = new Font(14, "sans-serif");
    }
    get filled() { return this._filled; }
    set filled(b) { this._filled = b; }
    get stroked() { return this._stroked; }
    set stroked(b) { this._stroked = b; }
    get currentFont() { return this._font; }
    _multiple(groups, shape, ...rest) {
        if (!groups)
            return this;
        for (let i = 0, len = groups.length; i < len; i++) {
            this[shape](groups[i], ...rest);
        }
        return this;
    }
    alpha(a) {
        return this;
    }
    fill(c) {
        return this;
    }
    fillOnly(c) {
        this.stroke(false);
        return this.fill(c);
    }
    stroke(c, width, linejoin, linecap) {
        return this;
    }
    strokeOnly(c, width, linejoin, linecap) {
        this.fill(false);
        return this.stroke(c, width, linejoin, linecap);
    }
    points(pts, radius, shape) {
        if (!pts)
            return;
        for (let i = 0, len = pts.length; i < len; i++) {
            this.point(pts[i], radius, shape);
        }
        return this;
    }
    circles(groups) {
        return this._multiple(groups, "circle");
    }
    squares(groups) {
        return this._multiple(groups, "square");
    }
    lines(groups) {
        return this._multiple(groups, "line");
    }
    polygons(groups) {
        return this._multiple(groups, "polygon");
    }
    rects(groups) {
        return this._multiple(groups, "rect");
    }
}
class Font {
    constructor(size = 12, face = "sans-serif", weight = "", style = "", lineHeight = 1.5) {
        this.size = size;
        this.face = face;
        this.style = style;
        this.weight = weight;
        this.lineHeight = lineHeight;
    }
    get value() { return `${this.style} ${this.weight} ${this.size}px/${this.lineHeight} ${this.face}`; }
    toString() { return this.value; }
}
//# sourceMappingURL=Form.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/LinearAlgebra.js":
/*!*******************************************************!*\
  !*** ./node_modules/pts/dist/es2015/LinearAlgebra.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec": () => (/* binding */ Vec),
/* harmony export */   "Mat": () => (/* binding */ Mat)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */


class Vec {
    static add(a, b) {
        if (typeof b == "number") {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] += b;
        }
        else {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] += b[i] || 0;
        }
        return a;
    }
    static subtract(a, b) {
        if (typeof b == "number") {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] -= b;
        }
        else {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] -= b[i] || 0;
        }
        return a;
    }
    static multiply(a, b) {
        if (typeof b == "number") {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] *= b;
        }
        else {
            if (a.length != b.length) {
                throw new Error(`Cannot do element-wise multiply since the array lengths don't match: ${a.toString()} multiply-with ${b.toString()}`);
            }
            for (let i = 0, len = a.length; i < len; i++)
                a[i] *= b[i];
        }
        return a;
    }
    static divide(a, b) {
        if (typeof b == "number") {
            if (b === 0)
                throw new Error("Cannot divide by zero");
            for (let i = 0, len = a.length; i < len; i++)
                a[i] /= b;
        }
        else {
            if (a.length != b.length) {
                throw new Error(`Cannot do element-wise divide since the array lengths don't match. ${a.toString()} divide-by ${b.toString()}`);
            }
            for (let i = 0, len = a.length; i < len; i++)
                a[i] /= b[i];
        }
        return a;
    }
    static dot(a, b) {
        if (a.length != b.length)
            throw new Error("Array lengths don't match");
        let d = 0;
        for (let i = 0, len = a.length; i < len; i++) {
            d += a[i] * b[i];
        }
        return d;
    }
    static cross2D(a, b) {
        return a[0] * b[1] - a[1] * b[0];
    }
    static cross(a, b) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt((a[1] * b[2] - a[2] * b[1]), (a[2] * b[0] - a[0] * b[2]), (a[0] * b[1] - a[1] * b[0]));
    }
    static magnitude(a) {
        return Math.sqrt(Vec.dot(a, a));
    }
    static unit(a, magnitude = undefined) {
        let m = (magnitude === undefined) ? Vec.magnitude(a) : magnitude;
        if (m === 0)
            return _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt.make(a.length);
        return Vec.divide(a, m);
    }
    static abs(a) {
        return Vec.map(a, Math.abs);
    }
    static floor(a) {
        return Vec.map(a, Math.floor);
    }
    static ceil(a) {
        return Vec.map(a, Math.ceil);
    }
    static round(a) {
        return Vec.map(a, Math.round);
    }
    static max(a) {
        let m = Number.MIN_VALUE;
        let index = 0;
        for (let i = 0, len = a.length; i < len; i++) {
            m = Math.max(m, a[i]);
            if (m === a[i])
                index = i;
        }
        return { value: m, index: index };
    }
    static min(a) {
        let m = Number.MAX_VALUE;
        let index = 0;
        for (let i = 0, len = a.length; i < len; i++) {
            m = Math.min(m, a[i]);
            if (m === a[i])
                index = i;
        }
        return { value: m, index: index };
    }
    static sum(a) {
        let s = 0;
        for (let i = 0, len = a.length; i < len; i++)
            s += a[i];
        return s;
    }
    static map(a, fn) {
        for (let i = 0, len = a.length; i < len; i++) {
            a[i] = fn(a[i], i, a);
        }
        return a;
    }
}
class Mat {
    static add(a, b) {
        if (typeof b != "number") {
            if (a[0].length != b[0].length)
                throw new Error("Cannot add matrix if rows' and columns' size don't match.");
            if (a.length != b.length)
                throw new Error("Cannot add matrix if rows' and columns' size don't match.");
        }
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        let isNum = typeof b == "number";
        for (let i = 0, len = a.length; i < len; i++) {
            g.push(a[i].$add((isNum) ? b : b[i]));
        }
        return g;
    }
    static multiply(a, b, transposed = false, elementwise = false) {
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        if (typeof b != "number") {
            if (elementwise) {
                if (a.length != b.length)
                    throw new Error("Cannot multiply matrix element-wise because the matrices' sizes don't match.");
                for (let ai = 0, alen = a.length; ai < alen; ai++) {
                    g.push(a[ai].$multiply(b[ai]));
                }
            }
            else {
                if (!transposed && a[0].length != b.length)
                    throw new Error("Cannot multiply matrix if rows in matrix-a don't match columns in matrix-b.");
                if (transposed && a[0].length != b[0].length)
                    throw new Error("Cannot multiply matrix if transposed and the columns in both matrices don't match.");
                if (!transposed)
                    b = Mat.transpose(b);
                for (let ai = 0, alen = a.length; ai < alen; ai++) {
                    let p = _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt.make(b.length, 0);
                    for (let bi = 0, blen = b.length; bi < blen; bi++) {
                        p[bi] = Vec.dot(a[ai], b[bi]);
                    }
                    g.push(p);
                }
            }
        }
        else {
            for (let ai = 0, alen = a.length; ai < alen; ai++) {
                g.push(a[ai].$multiply(b));
            }
        }
        return g;
    }
    static zipSlice(g, index, defaultValue = false) {
        let z = [];
        for (let i = 0, len = g.length; i < len; i++) {
            if (g[i].length - 1 < index && defaultValue === false)
                throw `Index ${index} is out of bounds`;
            z.push(g[i][index] || defaultValue);
        }
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(z);
    }
    static zip(g, defaultValue = false, useLongest = false) {
        let ps = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        let len = (useLongest) ? g.reduce((a, b) => Math.max(a, b.length), 0) : g[0].length;
        for (let i = 0; i < len; i++) {
            ps.push(Mat.zipSlice(g, i, defaultValue));
        }
        return ps;
    }
    static transpose(g, defaultValue = false, useLongest = false) {
        return Mat.zip(g, defaultValue, useLongest);
    }
    static transform2D(pt, m) {
        let x = pt[0] * m[0][0] + pt[1] * m[1][0] + m[2][0];
        let y = pt[0] * m[0][1] + pt[1] * m[1][1] + m[2][1];
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(x, y);
    }
    static scale2DMatrix(x, y) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(x, 0, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, y, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 0, 1));
    }
    static rotate2DMatrix(cosA, sinA) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(cosA, sinA, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-sinA, cosA, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 0, 1));
    }
    static shear2DMatrix(tanX, tanY) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(1, tanX, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(tanY, 1, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 0, 1));
    }
    static translate2DMatrix(x, y) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(1, 0, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, 1, 0), new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(x, y, 1));
    }
    static scaleAt2DMatrix(sx, sy, at) {
        let m = Mat.scale2DMatrix(sx, sy);
        m[2][0] = -at[0] * sx + at[0];
        m[2][1] = -at[1] * sy + at[1];
        return m;
    }
    static rotateAt2DMatrix(cosA, sinA, at) {
        let m = Mat.rotate2DMatrix(cosA, sinA);
        m[2][0] = at[0] * (1 - cosA) + at[1] * sinA;
        m[2][1] = at[1] * (1 - cosA) - at[0] * sinA;
        return m;
    }
    static shearAt2DMatrix(tanX, tanY, at) {
        let m = Mat.shear2DMatrix(tanX, tanY);
        m[2][0] = -at[1] * tanY;
        m[2][1] = -at[0] * tanX;
        return m;
    }
    static reflectAt2DMatrix(p1, p2) {
        let intercept = _Op__WEBPACK_IMPORTED_MODULE_1__.Line.intercept(p1, p2);
        if (intercept == undefined) {
            return [
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([-1, 0, 0]),
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([0, 1, 0]),
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([p1[0] + p2[0], 0, 1])
            ];
        }
        else {
            let yi = intercept.yi;
            let ang2 = Math.atan(intercept.slope) * 2;
            let cosA = Math.cos(ang2);
            let sinA = Math.sin(ang2);
            return [
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([cosA, sinA, 0]),
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([sinA, -cosA, 0]),
                new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt([-yi * sinA, yi + yi * cosA, 1])
            ];
        }
    }
}
//# sourceMappingURL=LinearAlgebra.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Num.js":
/*!*********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Num.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Num": () => (/* binding */ Num),
/* harmony export */   "Geom": () => (/* binding */ Geom),
/* harmony export */   "Shaping": () => (/* binding */ Shaping),
/* harmony export */   "Range": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearAlgebra */ "./node_modules/pts/dist/es2015/LinearAlgebra.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */




class Num {
    static equals(a, b, threshold = 0.00001) {
        return Math.abs(a - b) < threshold;
    }
    static lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }
    static clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }
    static boundValue(val, min, max) {
        let len = Math.abs(max - min);
        let a = val % len;
        if (a > max)
            a -= len;
        else if (a < min)
            a += len;
        return a;
    }
    static within(p, a, b) {
        return p >= Math.min(a, b) && p <= Math.max(a, b);
    }
    static randomRange(a, b = 0) {
        let r = (a > b) ? (a - b) : (b - a);
        return a + Math.random() * r;
    }
    static normalizeValue(n, a, b) {
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        return (n - min) / (max - min);
    }
    static sum(pts) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let c = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(_pts[0]);
        for (let i = 1, len = _pts.length; i < len; i++) {
            _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Vec.add(c, _pts[i]);
        }
        return c;
    }
    static average(pts) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        return Num.sum(_pts).divide(_pts.length);
    }
    static cycle(t, method = Shaping.sineInOut) {
        return method(t > 0.5 ? 2 - t * 2 : t * 2);
    }
    static mapToRange(n, currA, currB, targetA, targetB) {
        if (currA == currB)
            throw new Error("[currMin, currMax] must define a range that is not zero");
        let min = Math.min(targetA, targetB);
        let max = Math.max(targetA, targetB);
        return Num.normalizeValue(n, currA, currB) * (max - min) + min;
    }
}
class Geom {
    static boundAngle(angle) {
        return Num.boundValue(angle, 0, 360);
    }
    static boundRadian(radian) {
        return Num.boundValue(radian, 0, _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi);
    }
    static toRadian(angle) {
        return angle * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.deg_to_rad;
    }
    static toDegree(radian) {
        return radian * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.rad_to_deg;
    }
    static boundingBox(pts) {
        let minPt, maxPt;
        for (let p of pts) {
            if (minPt == undefined) {
                minPt = p.clone();
                maxPt = p.clone();
            }
            else {
                minPt = minPt.$min(p);
                maxPt = maxPt.$max(p);
            }
        }
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(minPt, maxPt);
    }
    static centroid(pts) {
        return Num.average(pts);
    }
    static anchor(pts, ptOrIndex = 0, direction = "to") {
        let method = (direction == "to") ? "subtract" : "add";
        let i = 0;
        for (let p of pts) {
            if (typeof ptOrIndex == "number") {
                if (ptOrIndex !== i)
                    p[method](pts[ptOrIndex]);
            }
            else {
                p[method](ptOrIndex);
            }
            i++;
        }
    }
    static interpolate(a, b, t = 0.5) {
        let len = Math.min(a.length, b.length);
        let d = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(len);
        for (let i = 0; i < len; i++) {
            d[i] = a[i] * (1 - t) + b[i] * t;
        }
        return d;
    }
    static perpendicular(pt, axis = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.xy) {
        let y = axis[1];
        let x = axis[0];
        let p = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(pt);
        let pa = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p);
        pa[x] = -p[y];
        pa[y] = p[x];
        let pb = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p);
        pb[x] = p[y];
        pb[y] = -p[x];
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(pa, pb);
    }
    static isPerpendicular(p1, p2) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p1).dot(p2) === 0;
    }
    static withinBound(pt, boundPt1, boundPt2) {
        for (let i = 0, len = Math.min(pt.length, boundPt1.length, boundPt2.length); i < len; i++) {
            if (!Num.within(pt[i], boundPt1[i], boundPt2[i]))
                return false;
        }
        return true;
    }
    static sortEdges(pts) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let bounds = Geom.boundingBox(_pts);
        let center = bounds[1].add(bounds[0]).divide(2);
        let fn = (a, b) => {
            if (a.length < 2 || b.length < 2)
                throw new Error("Pt dimension cannot be less than 2");
            let da = a.$subtract(center);
            let db = b.$subtract(center);
            if (da[0] >= 0 && db[0] < 0)
                return 1;
            if (da[0] < 0 && db[0] >= 0)
                return -1;
            if (da[0] == 0 && db[0] == 0) {
                if (da[1] >= 0 || db[1] >= 0)
                    return (da[1] > db[1]) ? 1 : -1;
                return (db[1] > da[1]) ? 1 : -1;
            }
            let det = da.$cross2D(db);
            if (det < 0)
                return 1;
            if (det > 0)
                return -1;
            return (da[0] * da[0] + da[1] * da[1] > db[0] * db[0] + db[1] * db[1]) ? 1 : -1;
        };
        return _pts.sort(fn);
    }
    static scale(ps, scale, anchor) {
        let pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray((ps[0] !== undefined && typeof ps[0] == 'number') ? [ps] : ps);
        let scs = (typeof scale == "number") ? _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(pts[0].length, scale) : scale;
        if (!anchor)
            anchor = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(pts[0].length, 0);
        for (let i = 0, len = pts.length; i < len; i++) {
            let p = pts[i];
            for (let k = 0, lenP = p.length; k < lenP; k++) {
                p[k] = (anchor && anchor[k]) ? anchor[k] + (p[k] - anchor[k]) * scs[k] : p[k] * scs[k];
            }
        }
        return Geom;
    }
    static rotate2D(ps, angle, anchor, axis) {
        let pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray((ps[0] !== undefined && typeof ps[0] == 'number') ? [ps] : ps);
        let fn = (anchor) ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.rotateAt2DMatrix : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.rotate2DMatrix;
        if (!anchor)
            anchor = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(pts[0].length, 0);
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        for (let i = 0, len = pts.length; i < len; i++) {
            let p = (axis) ? pts[i].$take(axis) : pts[i];
            p.to(_LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.transform2D(p, fn(cos, sin, anchor)));
            if (axis) {
                for (let k = 0; k < axis.length; k++) {
                    pts[i][axis[k]] = p[k];
                }
            }
        }
        return Geom;
    }
    static shear2D(ps, scale, anchor, axis) {
        let pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray((ps[0] !== undefined && typeof ps[0] == 'number') ? [ps] : ps);
        let s = (typeof scale == "number") ? [scale, scale] : scale;
        if (!anchor)
            anchor = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(pts[0].length, 0);
        let fn = (anchor) ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.shearAt2DMatrix : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.shear2DMatrix;
        let tanx = Math.tan(s[0]);
        let tany = Math.tan(s[1]);
        for (let i = 0, len = pts.length; i < len; i++) {
            let p = (axis) ? pts[i].$take(axis) : pts[i];
            p.to(_LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.transform2D(p, fn(tanx, tany, anchor)));
            if (axis) {
                for (let k = 0; k < axis.length; k++) {
                    pts[i][axis[k]] = p[k];
                }
            }
        }
        return Geom;
    }
    static reflect2D(ps, line, axis) {
        let pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray((ps[0] !== undefined && typeof ps[0] == 'number') ? [ps] : ps);
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let mat = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.reflectAt2DMatrix(_line[0], _line[1]);
        for (let i = 0, len = pts.length; i < len; i++) {
            let p = (axis) ? pts[i].$take(axis) : pts[i];
            p.to(_LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.transform2D(p, mat));
            if (axis) {
                for (let k = 0; k < axis.length; k++) {
                    pts[i][axis[k]] = p[k];
                }
            }
        }
        return Geom;
    }
    static cosTable() {
        let cos = new Float64Array(360);
        for (let i = 0; i < 360; i++)
            cos[i] = Math.cos(i * Math.PI / 180);
        let find = (rad) => cos[Math.floor(Geom.boundAngle(Geom.toDegree(rad)))];
        return { table: cos, cos: find };
    }
    static sinTable() {
        let sin = new Float64Array(360);
        for (let i = 0; i < 360; i++)
            sin[i] = Math.sin(i * Math.PI / 180);
        let find = (rad) => sin[Math.floor(Geom.boundAngle(Geom.toDegree(rad)))];
        return { table: sin, sin: find };
    }
}
class Shaping {
    static linear(t, c = 1) {
        return c * t;
    }
    static quadraticIn(t, c = 1) {
        return c * t * t;
    }
    static quadraticOut(t, c = 1) {
        return -c * t * (t - 2);
    }
    static quadraticInOut(t, c = 1) {
        let dt = t * 2;
        return (t < 0.5) ? c / 2 * t * t * 4 : -c / 2 * ((dt - 1) * (dt - 3) - 1);
    }
    static cubicIn(t, c = 1) {
        return c * t * t * t;
    }
    static cubicOut(t, c = 1) {
        let dt = t - 1;
        return c * (dt * dt * dt + 1);
    }
    static cubicInOut(t, c = 1) {
        let dt = t * 2;
        return (t < 0.5) ? c / 2 * dt * dt * dt : c / 2 * ((dt - 2) * (dt - 2) * (dt - 2) + 2);
    }
    static exponentialIn(t, c = 1, p = 0.25) {
        return c * Math.pow(t, 1 / p);
    }
    static exponentialOut(t, c = 1, p = 0.25) {
        return c * Math.pow(t, p);
    }
    static sineIn(t, c = 1) {
        return -c * Math.cos(t * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.half_pi) + c;
    }
    static sineOut(t, c = 1) {
        return c * Math.sin(t * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.half_pi);
    }
    static sineInOut(t, c = 1) {
        return -c / 2 * (Math.cos(Math.PI * t) - 1);
    }
    static cosineApprox(t, c = 1) {
        let t2 = t * t;
        let t4 = t2 * t2;
        let t6 = t4 * t2;
        return c * (4 * t6 / 9 - 17 * t4 / 9 + 22 * t2 / 9);
    }
    static circularIn(t, c = 1) {
        return -c * (Math.sqrt(1 - t * t) - 1);
    }
    static circularOut(t, c = 1) {
        let dt = t - 1;
        return c * Math.sqrt(1 - dt * dt);
    }
    static circularInOut(t, c = 1) {
        let dt = t * 2;
        return (t < 0.5) ? -c / 2 * (Math.sqrt(1 - dt * dt) - 1) : c / 2 * (Math.sqrt(1 - (dt - 2) * (dt - 2)) + 1);
    }
    static elasticIn(t, c = 1, p = 0.7) {
        let dt = t - 1;
        let s = (p / _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi) * 1.5707963267948966;
        return c * (-Math.pow(2, 10 * dt) * Math.sin((dt - s) * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi / p));
    }
    static elasticOut(t, c = 1, p = 0.7) {
        let s = (p / _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi) * 1.5707963267948966;
        return c * (Math.pow(2, -10 * t) * Math.sin((t - s) * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi / p)) + c;
    }
    static elasticInOut(t, c = 1, p = 0.6) {
        let dt = t * 2;
        let s = (p / _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi) * 1.5707963267948966;
        if (t < 0.5) {
            dt -= 1;
            return c * (-0.5 * (Math.pow(2, 10 * dt) * Math.sin((dt - s) * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi / p)));
        }
        else {
            dt -= 1;
            return c * (0.5 * (Math.pow(2, -10 * dt) * Math.sin((dt - s) * _Util__WEBPACK_IMPORTED_MODULE_0__.Const.two_pi / p))) + c;
        }
    }
    static bounceIn(t, c = 1) {
        return c - Shaping.bounceOut((1 - t), c);
    }
    static bounceOut(t, c = 1) {
        if (t < (1 / 2.75)) {
            return c * (7.5625 * t * t);
        }
        else if (t < (2 / 2.75)) {
            t -= 1.5 / 2.75;
            return c * (7.5625 * t * t + 0.75);
        }
        else if (t < (2.5 / 2.75)) {
            t -= 2.25 / 2.75;
            return c * (7.5625 * t * t + 0.9375);
        }
        else {
            t -= 2.625 / 2.75;
            return c * (7.5625 * t * t + 0.984375);
        }
    }
    static bounceInOut(t, c = 1) {
        return (t < 0.5) ? Shaping.bounceIn(t * 2, c) / 2 : Shaping.bounceOut(t * 2 - 1, c) / 2 + c / 2;
    }
    static sigmoid(t, c = 1, p = 10) {
        let d = p * (t - 0.5);
        return c / (1 + Math.exp(-d));
    }
    static logSigmoid(t, c = 1, p = 0.7) {
        p = Math.max(_Util__WEBPACK_IMPORTED_MODULE_0__.Const.epsilon, Math.min(1 - _Util__WEBPACK_IMPORTED_MODULE_0__.Const.epsilon, p));
        p = 1 / (1 - p);
        let A = 1 / (1 + Math.exp(((t - 0.5) * p * -2)));
        let B = 1 / (1 + Math.exp(p));
        let C = 1 / (1 + Math.exp(-p));
        return c * (A - B) / (C - B);
    }
    static seat(t, c = 1, p = 0.5) {
        if ((t < 0.5)) {
            return c * (Math.pow(2 * t, 1 - p)) / 2;
        }
        else {
            return c * (1 - (Math.pow(2 * (1 - t), 1 - p)) / 2);
        }
    }
    static quadraticBezier(t, c = 1, p = [0.05, 0.95]) {
        let a = (typeof p != "number") ? p[0] : p;
        let b = (typeof p != "number") ? p[1] : 0.5;
        let om2a = 1 - 2 * a;
        if (om2a === 0) {
            om2a = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.epsilon;
        }
        let d = (Math.sqrt(a * a + om2a * t) - a) / om2a;
        return c * ((1 - 2 * b) * (d * d) + (2 * b) * d);
    }
    static cubicBezier(t, c = 1, p1 = [0.1, 0.7], p2 = [0.9, 0.2]) {
        let curve = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p1), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p2), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1, 1));
        return c * _Op__WEBPACK_IMPORTED_MODULE_1__.Curve.bezierStep(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(t * t * t, t * t, t, 1), _Op__WEBPACK_IMPORTED_MODULE_1__.Curve.controlPoints(curve)).y;
    }
    static quadraticTarget(t, c = 1, p1 = [0.2, 0.35]) {
        let a = Math.min(1 - _Util__WEBPACK_IMPORTED_MODULE_0__.Const.epsilon, Math.max(_Util__WEBPACK_IMPORTED_MODULE_0__.Const.epsilon, p1[0]));
        let b = Math.min(1, Math.max(0, p1[1]));
        let A = (1 - b) / (1 - a) - (b / a);
        let B = (A * (a * a) - b) / a;
        let y = A * (t * t) - B * t;
        return c * Math.min(1, Math.max(0, y));
    }
    static cliff(t, c = 1, p = 0.5) {
        return (t > p) ? c : 0;
    }
    static step(fn, steps, t, c, ...args) {
        let s = 1 / steps;
        let tt = Math.floor(t / s) * s;
        return fn(tt, c, ...args);
    }
}
class Range {
    constructor(g) {
        this._dims = 0;
        this._source = _Pt__WEBPACK_IMPORTED_MODULE_2__.Group.fromPtArray(g);
        this.calc();
    }
    get max() { return this._max.clone(); }
    get min() { return this._min.clone(); }
    get magnitude() { return this._mag.clone(); }
    calc() {
        if (!this._source)
            return;
        let dims = this._source[0].length;
        this._dims = dims;
        let max = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(dims);
        let min = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(dims);
        let mag = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(dims);
        for (let i = 0; i < dims; i++) {
            max[i] = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.min;
            min[i] = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.max;
            mag[i] = 0;
            let s = this._source.zipSlice(i);
            for (let k = 0, len = s.length; k < len; k++) {
                max[i] = Math.max(max[i], s[k]);
                min[i] = Math.min(min[i], s[k]);
                mag[i] = max[i] - min[i];
            }
        }
        this._max = max;
        this._min = min;
        this._mag = mag;
        return this;
    }
    mapTo(min, max, exclude) {
        let target = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0, len = this._source.length; i < len; i++) {
            let g = this._source[i];
            let n = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(this._dims);
            for (let k = 0; k < this._dims; k++) {
                n[k] = (exclude && exclude[k]) ? g[k] : Num.mapToRange(g[k], this._min[k], this._max[k], min, max);
            }
            target.push(n);
        }
        return target;
    }
    append(pts, update = true) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts[0].length !== this._dims)
            throw new Error(`Dimensions don't match. ${this._dims} dimensions in Range and ${_pts[0].length} provided in parameter. `);
        this._source = this._source.concat(_pts);
        if (update)
            this.calc();
        return this;
    }
    ticks(count) {
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0; i <= count; i++) {
            let p = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(this._dims);
            for (let k = 0, len = this._max.length; k < len; k++) {
                p[k] = Num.lerp(this._min[k], this._max[k], i / count);
            }
            g.push(p);
        }
        return g;
    }
}
//# sourceMappingURL=Num.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Op.js":
/*!********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Op.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Triangle": () => (/* binding */ Triangle),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Curve": () => (/* binding */ Curve)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearAlgebra */ "./node_modules/pts/dist/es2015/LinearAlgebra.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */




let _errorLength = (obj, param = "expected") => _Util__WEBPACK_IMPORTED_MODULE_0__.Util.warn("Group's length is less than " + param, obj);
let _errorOutofBound = (obj, param = "") => _Util__WEBPACK_IMPORTED_MODULE_0__.Util.warn(`Index ${param} is out of bound in Group`, obj);
class Line {
    static fromAngle(anchor, angle, magnitude) {
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(anchor), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(anchor));
        g[1].toAngle(angle, magnitude, true);
        return g;
    }
    static slope(p1, p2) {
        return (p2[0] - p1[0] === 0) ? undefined : (p2[1] - p1[1]) / (p2[0] - p1[0]);
    }
    static intercept(p1, p2) {
        if (p2[0] - p1[0] === 0) {
            return undefined;
        }
        else {
            let m = (p2[1] - p1[1]) / (p2[0] - p1[0]);
            let c = p1[1] - m * p1[0];
            return { slope: m, yi: c, xi: (m === 0) ? undefined : -c / m };
        }
    }
    static sideOfPt2D(line, pt) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        return (_line[1][0] - _line[0][0]) * (pt[1] - _line[0][1]) - (pt[0] - _line[0][0]) * (_line[1][1] - _line[0][1]);
    }
    static collinear(p1, p2, p3, threshold = 0.01) {
        let a = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0, 0, 0).to(p1).$subtract(p2);
        let b = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0, 0, 0).to(p1).$subtract(p3);
        return a.$cross(b).divide(1000).equals(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0, 0, 0), threshold);
    }
    static magnitude(line) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        return (_line.length >= 2) ? _line[1].$subtract(_line[0]).magnitude() : 0;
    }
    static magnitudeSq(line) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        return (_line.length >= 2) ? _line[1].$subtract(_line[0]).magnitudeSq() : 0;
    }
    static perpendicularFromPt(line, pt, asProjection = false) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        if (_line[0].equals(_line[1]))
            return undefined;
        let a = _line[0].$subtract(_line[1]);
        let b = _line[1].$subtract(pt);
        let proj = b.$subtract(a.$project(b));
        return (asProjection) ? proj : proj.$add(pt);
    }
    static distanceFromPt(line, pt) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let projectionVector = Line.perpendicularFromPt(_line, pt, true);
        if (projectionVector) {
            return projectionVector.magnitude();
        }
        else {
            return _line[0].$subtract(pt).magnitude();
        }
    }
    static intersectRay2D(la, lb) {
        let _la = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(la);
        let _lb = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(lb);
        let a = Line.intercept(_la[0], _la[1]);
        let b = Line.intercept(_lb[0], _lb[1]);
        let pa = _la[0];
        let pb = _lb[0];
        if (a == undefined) {
            if (b == undefined)
                return undefined;
            let y1 = -b.slope * (pb[0] - pa[0]) + pb[1];
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(pa[0], y1);
        }
        else {
            if (b == undefined) {
                let y1 = -a.slope * (pa[0] - pb[0]) + pa[1];
                return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(pb[0], y1);
            }
            else if (b.slope != a.slope) {
                let px = (a.slope * pa[0] - b.slope * pb[0] + pb[1] - pa[1]) / (a.slope - b.slope);
                let py = a.slope * (px - pa[0]) + pa[1];
                return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(px, py);
            }
            else {
                if (a.yi == b.yi) {
                    return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(pa[0], pa[1]);
                }
                else {
                    return undefined;
                }
            }
        }
    }
    static intersectLine2D(la, lb) {
        let _la = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(la);
        let _lb = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(lb);
        let pt = Line.intersectRay2D(_la, _lb);
        return (pt && _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.withinBound(pt, _la[0], _la[1]) && _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.withinBound(pt, _lb[0], _lb[1])) ? pt : undefined;
    }
    static intersectLineWithRay2D(line, ray) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let _ray = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(ray);
        let pt = Line.intersectRay2D(_line, _ray);
        return (pt && _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.withinBound(pt, _line[0], _line[1])) ? pt : undefined;
    }
    static intersectPolygon2D(lineOrRay, poly, sourceIsRay = false) {
        let _lineOrRay = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(lineOrRay);
        let _poly = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        let fn = sourceIsRay ? Line.intersectLineWithRay2D : Line.intersectLine2D;
        let pts = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0, len = _poly.length; i < len; i++) {
            let next = (i === len - 1) ? 0 : i + 1;
            let d = fn([_poly[i], _poly[next]], _lineOrRay);
            if (d)
                pts.push(d);
        }
        return (pts.length > 0) ? pts : undefined;
    }
    static intersectLines2D(lines1, lines2, isRay = false) {
        let group = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let fn = isRay ? Line.intersectLineWithRay2D : Line.intersectLine2D;
        for (let l1 of lines1) {
            for (let l2 of lines2) {
                let _ip = fn(l1, l2);
                if (_ip)
                    group.push(_ip);
            }
        }
        return group;
    }
    static intersectGridWithRay2D(ray, gridPt) {
        let _ray = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(ray);
        let t = Line.intercept(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(_ray[0]).subtract(gridPt), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(_ray[1]).subtract(gridPt));
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        if (t && t.xi)
            g.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(gridPt[0] + t.xi, gridPt[1]));
        if (t && t.yi)
            g.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(gridPt[0], gridPt[1] + t.yi));
        return g;
    }
    static intersectGridWithLine2D(line, gridPt) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let g = Line.intersectGridWithRay2D(_line, gridPt);
        let gg = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0, len = g.length; i < len; i++) {
            if (_Num__WEBPACK_IMPORTED_MODULE_1__.Geom.withinBound(g[i], _line[0], _line[1]))
                gg.push(g[i]);
        }
        return gg;
    }
    static intersectRect2D(line, rect) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let box = _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(_Pt__WEBPACK_IMPORTED_MODULE_2__.Group.fromPtArray(_line));
        if (!Rectangle.hasIntersectRect2D(box, _rect))
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        return Line.intersectLines2D([_line], Rectangle.sides(_rect));
    }
    static subpoints(line, num) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let pts = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 1; i <= num; i++) {
            pts.push(_Num__WEBPACK_IMPORTED_MODULE_1__.Geom.interpolate(_line[0], _line[1], i / (num + 1)));
        }
        return pts;
    }
    static crop(line, size, index = 0, cropAsCircle = true) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let tdx = (index === 0) ? 1 : 0;
        let ls = _line[tdx].$subtract(_line[index]);
        if (ls[0] === 0 || size[0] === 0)
            return _line[index];
        if (cropAsCircle) {
            let d = ls.unit().multiply(size[1]);
            return _line[index].$add(d);
        }
        else {
            let rect = Rectangle.fromCenter(_line[index], size);
            let sides = Rectangle.sides(rect);
            let sideIdx = 0;
            if (Math.abs(ls[1] / ls[0]) > Math.abs(size[1] / size[0])) {
                sideIdx = (ls[1] < 0) ? 0 : 2;
            }
            else {
                sideIdx = (ls[0] < 0) ? 3 : 1;
            }
            return Line.intersectRay2D(sides[sideIdx], _line);
        }
    }
    static marker(line, size, graphic = ("arrow" || 0), atTail = true) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let h = atTail ? 0 : 1;
        let t = atTail ? 1 : 0;
        let unit = _line[h].$subtract(_line[t]);
        if (unit.magnitudeSq() === 0)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        unit.unit();
        let ps = _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.perpendicular(unit).multiply(size[0]).add(_line[t]);
        if (graphic == "arrow") {
            ps.add(unit.$multiply(size[1]));
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_line[t], ps[0], ps[1]);
        }
        else {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(ps[0], ps[1]);
        }
    }
    static toRect(line) {
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_line[0].$min(_line[1]), _line[0].$max(_line[1]));
    }
}
class Rectangle {
    static from(topLeft, widthOrSize, height) {
        return Rectangle.fromTopLeft(topLeft, widthOrSize, height);
    }
    static fromTopLeft(topLeft, widthOrSize, height) {
        let size = (typeof widthOrSize == "number") ? [widthOrSize, (height || widthOrSize)] : widthOrSize;
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(topLeft), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(topLeft).add(size));
    }
    static fromCenter(center, widthOrSize, height) {
        let half = (typeof widthOrSize == "number") ? [widthOrSize / 2, (height || widthOrSize) / 2] : new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(widthOrSize).divide(2);
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(center).subtract(half), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(center).add(half));
    }
    static toCircle(pts, within = true) {
        return Circle.fromRect(pts, within);
    }
    static toSquare(pts, enclose = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let s = Rectangle.size(_pts);
        let m = (enclose) ? s.maxValue().value : s.minValue().value;
        return Rectangle.fromCenter(Rectangle.center(_pts), m, m);
    }
    static size(pts) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        return p[0].$max(p[1]).subtract(p[0].$min(p[1]));
    }
    static center(pts) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let min = p[0].$min(p[1]);
        let max = p[0].$max(p[1]);
        return min.add(max.$subtract(min).divide(2));
    }
    static corners(rect) {
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let p0 = _rect[0].$min(_rect[1]);
        let p2 = _rect[0].$max(_rect[1]);
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p0, new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p2.x, p0.y), p2, new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p0.x, p2.y));
    }
    static sides(rect) {
        let [p0, p1, p2, p3] = Rectangle.corners(rect);
        return [
            new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p0, p1), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p1, p2),
            new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p2, p3), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p3, p0)
        ];
    }
    static boundingBox(rects) {
        let _rects = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rects);
        let merged = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.flatten(_rects, false);
        let min = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(2, Number.MAX_VALUE);
        let max = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(2, Number.MIN_VALUE);
        for (let i = 0, len = merged.length; i < len; i++) {
            let k = 0;
            for (let m of merged[i]) {
                min[k] = Math.min(min[k], m[k]);
                max[k] = Math.max(max[k], m[k]);
                if (++k >= 2)
                    break;
            }
        }
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(min, max);
    }
    static polygon(rect) {
        return Rectangle.corners(rect);
    }
    static quadrants(rect, center) {
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let corners = Rectangle.corners(_rect);
        let _center = (center != undefined) ? new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(center) : Rectangle.center(_rect);
        return corners.map((c) => new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(c, _center).boundingBox());
    }
    static halves(rect, ratio = 0.5, asRows = false) {
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let min = _rect[0].$min(_rect[1]);
        let max = _rect[0].$max(_rect[1]);
        let mid = (asRows) ? _Num__WEBPACK_IMPORTED_MODULE_1__.Num.lerp(min[1], max[1], ratio) : _Num__WEBPACK_IMPORTED_MODULE_1__.Num.lerp(min[0], max[0], ratio);
        return (asRows)
            ? [new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(min, new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(max[0], mid)), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(min[0], mid), max)]
            : [new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(min, new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(mid, max[1])), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(mid, min[1]), max)];
    }
    static withinBound(rect, pt) {
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.withinBound(pt, _rect[0], _rect[1]);
    }
    static hasIntersectRect2D(rect1, rect2, resetBoundingBox = false) {
        let _rect1 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect1);
        let _rect2 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect2);
        if (resetBoundingBox) {
            _rect1 = _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(_rect1);
            _rect2 = _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(_rect2);
        }
        if (_rect1[0][0] > _rect2[1][0] || _rect2[0][0] > _rect1[1][0])
            return false;
        if (_rect1[0][1] > _rect2[1][1] || _rect2[0][1] > _rect1[1][1])
            return false;
        return true;
    }
    static intersectRect2D(rect1, rect2) {
        let _rect1 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect1);
        let _rect2 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect2);
        if (!Rectangle.hasIntersectRect2D(_rect1, _rect2))
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        return Line.intersectLines2D(Rectangle.sides(_rect1), Rectangle.sides(_rect2));
    }
}
class Circle {
    static fromRect(pts, enclose = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let r = 0;
        let min = r = Rectangle.size(_pts).minValue().value / 2;
        if (enclose) {
            let max = Rectangle.size(_pts).maxValue().value / 2;
            r = Math.sqrt(min * min + max * max);
        }
        else {
            r = min;
        }
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(Rectangle.center(_pts), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(r, r));
    }
    static fromTriangle(pts, enclose = false) {
        if (enclose) {
            return Triangle.circumcircle(pts);
        }
        else {
            return Triangle.incircle(pts);
        }
    }
    static fromCenter(pt, radius) {
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(pt), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(radius, radius));
    }
    static withinBound(pts, pt, threshold = 0) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        let d = _pts[0].$subtract(pt);
        return d.dot(d) + threshold < _pts[1].x * _pts[1].x;
    }
    static intersectRay2D(circle, ray) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        let _ray = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(ray);
        let d = _ray[0].$subtract(_ray[1]);
        let f = _pts[0].$subtract(_ray[0]);
        let a = d.dot(d);
        let b = f.dot(d);
        let c = f.dot(f) - _pts[1].x * _pts[1].x;
        let p = b / a;
        let q = c / a;
        let disc = p * p - q;
        if (disc < 0) {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        }
        else {
            let discSqrt = Math.sqrt(disc);
            let t1 = -p + discSqrt;
            let p1 = _ray[0].$subtract(d.$multiply(t1));
            if (disc === 0)
                return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p1);
            let t2 = -p - discSqrt;
            let p2 = _ray[0].$subtract(d.$multiply(t2));
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p1, p2);
        }
    }
    static intersectLine2D(circle, line) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        let _line = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(line);
        let ps = Circle.intersectRay2D(_pts, _line);
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        if (ps.length > 0) {
            for (let i = 0, len = ps.length; i < len; i++) {
                if (Rectangle.withinBound(_line, ps[i]))
                    g.push(ps[i]);
            }
        }
        return g;
    }
    static intersectCircle2D(circle1, circle2) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle1);
        let _circle = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle2);
        let dv = _circle[0].$subtract(_pts[0]);
        let dr2 = dv.magnitudeSq();
        let dr = Math.sqrt(dr2);
        let ar = _pts[1].x;
        let br = _circle[1].x;
        let ar2 = ar * ar;
        let br2 = br * br;
        if (dr > ar + br) {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        }
        else if (dr < Math.abs(ar - br)) {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[0].clone());
        }
        else {
            let a = (ar2 - br2 + dr2) / (2 * dr);
            let h = Math.sqrt(ar2 - a * a);
            let p = dv.$multiply(a / dr).add(_pts[0]);
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p.x + h * dv.y / dr, p.y - h * dv.x / dr), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(p.x - h * dv.y / dr, p.y + h * dv.x / dr));
        }
    }
    static intersectRect2D(circle, rect) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let sides = Rectangle.sides(_rect);
        let g = [];
        for (let i = 0, len = sides.length; i < len; i++) {
            let ps = Circle.intersectLine2D(_pts, sides[i]);
            if (ps.length > 0)
                g.push(ps);
        }
        return _Util__WEBPACK_IMPORTED_MODULE_0__.Util.flatten(g);
    }
    static toRect(circle, within = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        let r = _pts[1][0];
        if (within) {
            let half = Math.sqrt(r * r) / 2;
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[0].$subtract(half), _pts[0].$add(half));
        }
        else {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[0].$subtract(r), _pts[0].$add(r));
        }
    }
    static toTriangle(circle, within = true) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        if (within) {
            let ang = -Math.PI / 2;
            let inc = Math.PI * 2 / 3;
            let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
            for (let i = 0; i < 3; i++) {
                g.push(_pts[0].clone().toAngle(ang, _pts[1][0], true));
                ang += inc;
            }
            return g;
        }
        else {
            return Triangle.fromCenter(_pts[0], _pts[1][0]);
        }
    }
}
class Triangle {
    static fromRect(rect) {
        let _rect = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(rect);
        let top = _rect[0].$add(_rect[1]).divide(2);
        top.y = _rect[0][1];
        let left = _rect[1].clone();
        left.x = _rect[0][0];
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(top, _rect[1].clone(), left);
    }
    static fromCircle(circle) {
        return Circle.toTriangle(circle, true);
    }
    static fromCenter(pt, size) {
        return Triangle.fromCircle(Circle.fromCenter(pt, size));
    }
    static medial(tri) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        if (_pts.length < 3)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 3);
        return Polygon.midpoints(_pts, true);
    }
    static oppositeSide(tri, index) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        if (_pts.length < 3)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 3);
        if (index === 0) {
            return _Pt__WEBPACK_IMPORTED_MODULE_2__.Group.fromPtArray([_pts[1], _pts[2]]);
        }
        else if (index === 1) {
            return _Pt__WEBPACK_IMPORTED_MODULE_2__.Group.fromPtArray([_pts[0], _pts[2]]);
        }
        else {
            return _Pt__WEBPACK_IMPORTED_MODULE_2__.Group.fromPtArray([_pts[0], _pts[1]]);
        }
    }
    static altitude(tri, index) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        let opp = Triangle.oppositeSide(_pts, index);
        if (opp.length > 1) {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[index], Line.perpendicularFromPt(opp, _pts[index]));
        }
        else {
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        }
    }
    static orthocenter(tri) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        if (_pts.length < 3)
            return _errorLength(undefined, 3);
        let a = Triangle.altitude(_pts, 0);
        let b = Triangle.altitude(_pts, 1);
        return Line.intersectRay2D(a, b);
    }
    static incenter(tri) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        if (_pts.length < 3)
            return _errorLength(undefined, 3);
        let a = Polygon.bisector(_pts, 0).add(_pts[0]);
        let b = Polygon.bisector(_pts, 1).add(_pts[1]);
        return Line.intersectRay2D(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[0], a), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[1], b));
    }
    static incircle(tri, center) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        let c = (center) ? center : Triangle.incenter(_pts);
        let area = Polygon.area(_pts);
        let perim = Polygon.perimeter(_pts, true);
        let r = 2 * area / perim.total;
        return Circle.fromCenter(c, r);
    }
    static circumcenter(tri) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        let md = Triangle.medial(_pts);
        let a = [md[0], _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.perpendicular(_pts[0].$subtract(md[0])).p1.$add(md[0])];
        let b = [md[1], _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.perpendicular(_pts[1].$subtract(md[1])).p1.$add(md[1])];
        return Line.intersectRay2D(a, b);
    }
    static circumcircle(tri, center) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(tri);
        let c = (center) ? center : Triangle.circumcenter(_pts);
        let r = _pts[0].$subtract(c).magnitude();
        return Circle.fromCenter(c, r);
    }
}
class Polygon {
    static centroid(pts) {
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.centroid(pts);
    }
    static rectangle(center, widthOrSize, height) {
        return Rectangle.corners(Rectangle.fromCenter(center, widthOrSize, height));
    }
    static fromCenter(center, radius, sides) {
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0; i < sides; i++) {
            let ang = Math.PI * 2 * i / sides;
            g.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(Math.cos(ang) * radius, Math.sin(ang) * radius).add(center));
        }
        return g;
    }
    static lineAt(pts, index) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (index < 0 || index >= _pts.length)
            throw new Error("index out of the Polygon's range");
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[index], (index === _pts.length - 1) ? _pts[0] : _pts[index + 1]);
    }
    static lines(poly, closePath = true) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        if (_pts.length < 2)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 2);
        let sp = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.split(_pts, 2, 1);
        if (closePath)
            sp.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[_pts.length - 1], _pts[0]));
        return sp.map((g) => g);
    }
    static midpoints(poly, closePath = false, t = 0.5) {
        let sides = Polygon.lines(poly, closePath);
        let mids = sides.map((s) => _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.interpolate(s[0], s[1], t));
        return mids;
    }
    static adjacentSides(poly, index, closePath = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        if (_pts.length < 2)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 2);
        if (index < 0 || index >= _pts.length)
            return _errorOutofBound(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), index);
        let gs = [];
        let left = index - 1;
        if (closePath && left < 0)
            left = _pts.length - 1;
        if (left >= 0)
            gs.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[index], _pts[left]));
        let right = index + 1;
        if (closePath && right > _pts.length - 1)
            right = 0;
        if (right <= _pts.length - 1)
            gs.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[index], _pts[right]));
        return gs;
    }
    static bisector(poly, index) {
        let sides = Polygon.adjacentSides(poly, index, true);
        if (sides.length >= 2) {
            let a = sides[0][1].$subtract(sides[0][0]).unit();
            let b = sides[1][1].$subtract(sides[1][0]).unit();
            return a.add(b).divide(2);
        }
        else {
            return undefined;
        }
    }
    static perimeter(poly, closePath = false) {
        let lines = Polygon.lines(poly, closePath);
        let mag = 0;
        let p = _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt.make(lines.length, 0);
        for (let i = 0, len = lines.length; i < len; i++) {
            let m = Line.magnitude(lines[i]);
            mag += m;
            p[i] = m;
        }
        return {
            total: mag,
            segments: p
        };
    }
    static area(pts) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 3)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 3);
        let det = (a, b) => a[0] * b[1] - a[1] * b[0];
        let area = 0;
        for (let i = 0, len = _pts.length; i < len; i++) {
            if (i < _pts.length - 1) {
                area += det(_pts[i], _pts[i + 1]);
            }
            else {
                area += det(_pts[i], _pts[0]);
            }
        }
        return Math.abs(area / 2);
    }
    static convexHull(pts, sorted = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 3)
            return _errorLength(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(), 3);
        if (!sorted) {
            _pts = _pts.slice();
            _pts.sort((a, b) => a[0] - b[0]);
        }
        let left = (a, b, c) => {
            return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]) > 0;
        };
        let dq = [];
        let bot = _pts.length - 2;
        let top = bot + 3;
        dq[bot] = _pts[2];
        dq[top] = _pts[2];
        if (left(_pts[0], _pts[1], _pts[2])) {
            dq[bot + 1] = _pts[0];
            dq[bot + 2] = _pts[1];
        }
        else {
            dq[bot + 1] = _pts[1];
            dq[bot + 2] = _pts[0];
        }
        for (let i = 3, len = _pts.length; i < len; i++) {
            let pt = _pts[i];
            if (left(dq[bot], dq[bot + 1], pt) && left(dq[top - 1], dq[top], pt)) {
                continue;
            }
            while (!left(dq[bot], dq[bot + 1], pt)) {
                bot += 1;
            }
            bot -= 1;
            dq[bot] = pt;
            while (!left(dq[top - 1], dq[top], pt)) {
                top -= 1;
            }
            top += 1;
            dq[top] = pt;
        }
        let hull = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let h = 0; h < (top - bot); h++) {
            hull.push(dq[bot + h]);
        }
        return hull;
    }
    static network(poly, originIndex = 0) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        let g = [];
        for (let i = 0, len = _pts.length; i < len; i++) {
            if (i != originIndex)
                g.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(_pts[originIndex], _pts[i]));
        }
        return g;
    }
    static nearestPt(poly, pt) {
        let _near = Number.MAX_VALUE;
        let _item = -1;
        let i = 0;
        for (let p of poly) {
            let d = p.$subtract(pt).magnitudeSq();
            if (d < _near) {
                _near = d;
                _item = i;
            }
            i++;
        }
        return _item;
    }
    static projectAxis(poly, unitAxis) {
        let _poly = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        let dot = unitAxis.dot(_poly[0]);
        let d = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(dot, dot);
        for (let n = 1, len = _poly.length; n < len; n++) {
            dot = unitAxis.dot(_poly[n]);
            d = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(Math.min(dot, d[0]), Math.max(dot, d[1]));
        }
        return d;
    }
    static _axisOverlap(poly1, poly2, unitAxis) {
        let pa = Polygon.projectAxis(poly1, unitAxis);
        let pb = Polygon.projectAxis(poly2, unitAxis);
        return (pa[0] < pb[0]) ? pb[0] - pa[1] : pa[0] - pb[1];
    }
    static hasIntersectPoint(poly, pt) {
        let _poly = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        let c = false;
        for (let i = 0, len = _poly.length; i < len; i++) {
            let ln = Polygon.lineAt(_poly, i);
            if (((ln[0][1] > pt[1]) != (ln[1][1] > pt[1])) &&
                (pt[0] < (ln[1][0] - ln[0][0]) * (pt[1] - ln[0][1]) / (ln[1][1] - ln[0][1]) + ln[0][0])) {
                c = !c;
            }
        }
        return c;
    }
    static hasIntersectCircle(poly, circle) {
        let _poly = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly);
        let _circle = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(circle);
        let info = {
            which: -1,
            dist: 0,
            normal: null,
            edge: null,
            vertex: null,
        };
        let c = _circle[0];
        let r = _circle[1][0];
        let minDist = Number.MAX_SAFE_INTEGER;
        for (let i = 0, len = _poly.length; i < len; i++) {
            let edge = Polygon.lineAt(_poly, i);
            let axis = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(edge[0].y - edge[1].y, edge[1].x - edge[0].x).unit();
            let poly2 = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(c.$add(axis.$multiply(r)), c.$subtract(axis.$multiply(r)));
            let dist = Polygon._axisOverlap(_poly, poly2, axis);
            if (dist > 0) {
                return null;
            }
            else if (Math.abs(dist) < minDist) {
                let check = Rectangle.withinBound(edge, Line.perpendicularFromPt(edge, c)) || Circle.intersectLine2D(circle, edge).length > 0;
                if (check) {
                    info.edge = edge;
                    info.normal = axis;
                    minDist = Math.abs(dist);
                    info.which = i;
                }
            }
        }
        if (!info.edge)
            return null;
        let dir = c.$subtract(Polygon.centroid(_poly)).dot(info.normal);
        if (dir < 0)
            info.normal.multiply(-1);
        info.dist = minDist;
        info.vertex = c;
        return info;
    }
    static hasIntersectPolygon(poly1, poly2) {
        let _poly1 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly1);
        let _poly2 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly2);
        let info = {
            which: -1,
            dist: 0,
            normal: new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(),
            edge: new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(),
            vertex: new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt()
        };
        let minDist = Number.MAX_SAFE_INTEGER;
        for (let i = 0, plen = (_poly1.length + _poly2.length); i < plen; i++) {
            let edge = (i < _poly1.length) ? Polygon.lineAt(_poly1, i) : Polygon.lineAt(_poly2, i - _poly1.length);
            let axis = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(edge[0].y - edge[1].y, edge[1].x - edge[0].x).unit();
            let dist = Polygon._axisOverlap(_poly1, _poly2, axis);
            if (dist > 0) {
                return null;
            }
            else if (Math.abs(dist) < minDist) {
                info.edge = edge;
                info.normal = axis;
                minDist = Math.abs(dist);
                info.which = (i < _poly1.length) ? 0 : 1;
            }
        }
        info.dist = minDist;
        let b1 = (info.which === 0) ? _poly2 : _poly1;
        let b2 = (info.which === 0) ? _poly1 : _poly2;
        let c1 = Polygon.centroid(b1);
        let c2 = Polygon.centroid(b2);
        let dir = c1.$subtract(c2).dot(info.normal);
        if (dir < 0)
            info.normal.multiply(-1);
        let smallest = Number.MAX_SAFE_INTEGER;
        for (let i = 0, len = b1.length; i < len; i++) {
            let d = info.normal.dot(b1[i].$subtract(c2));
            if (d < smallest) {
                smallest = d;
                info.vertex = b1[i];
            }
        }
        return info;
    }
    static intersectPolygon2D(poly1, poly2) {
        let _poly1 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly1);
        let _poly2 = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(poly2);
        let lp = Polygon.lines(_poly1);
        let g = [];
        for (let i = 0, len = lp.length; i < len; i++) {
            let ins = Line.intersectPolygon2D(lp[i], _poly2, false);
            if (ins)
                g.push(ins);
        }
        return _Util__WEBPACK_IMPORTED_MODULE_0__.Util.flatten(g, true);
    }
    static toRects(polys) {
        let boxes = [];
        for (let g of polys) {
            boxes.push(_Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(g));
        }
        let merged = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.flatten(boxes, false);
        boxes.unshift(_Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(merged));
        return boxes;
    }
}
class Curve {
    static getSteps(steps) {
        let ts = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let i = 0; i <= steps; i++) {
            let t = i / steps;
            ts.push(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(t * t * t, t * t, t, 1));
        }
        return ts;
    }
    static controlPoints(pts, index = 0, copyStart = false) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (index > _pts.length - 1)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let _index = (i) => (i < _pts.length - 1) ? i : _pts.length - 1;
        let p0 = _pts[index];
        index = (copyStart) ? index : index + 1;
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(p0, _pts[_index(index++)], _pts[_index(index++)], _pts[_index(index++)]);
    }
    static _calcPt(ctrls, params) {
        let x = ctrls.reduce((a, c, i) => a + c.x * params[i], 0);
        let y = ctrls.reduce((a, c, i) => a + c.y * params[i], 0);
        if (ctrls[0].length > 2) {
            let z = ctrls.reduce((a, c, i) => a + c.z * params[i], 0);
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(x, y, z);
        }
        return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(x, y);
    }
    static catmullRom(pts, steps = 10) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 2)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ps = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ts = Curve.getSteps(steps);
        let c = Curve.controlPoints(_pts, 0, true);
        for (let i = 0; i <= steps; i++) {
            ps.push(Curve.catmullRomStep(ts[i], c));
        }
        let k = 0;
        while (k < _pts.length - 2) {
            let cp = Curve.controlPoints(_pts, k);
            if (cp.length > 0) {
                for (let i = 0; i <= steps; i++) {
                    ps.push(Curve.catmullRomStep(ts[i], cp));
                }
                k++;
            }
        }
        return ps;
    }
    static catmullRomStep(step, ctrls) {
        let m = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-0.5, 1, -0.5, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1.5, -2.5, 0, 1), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-1.5, 2, 0.5, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0.5, -0.5, 0, 0));
        return Curve._calcPt(ctrls, _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.multiply([step], m, true)[0]);
    }
    static cardinal(pts, steps = 10, tension = 0.5) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 2)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ps = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ts = Curve.getSteps(steps);
        let c = Curve.controlPoints(_pts, 0, true);
        for (let i = 0; i <= steps; i++) {
            ps.push(Curve.cardinalStep(ts[i], c, tension));
        }
        let k = 0;
        while (k < _pts.length - 2) {
            let cp = Curve.controlPoints(_pts, k);
            if (cp.length > 0) {
                for (let i = 0; i <= steps; i++) {
                    ps.push(Curve.cardinalStep(ts[i], cp, tension));
                }
                k++;
            }
        }
        return ps;
    }
    static cardinalStep(step, ctrls, tension = 0.5) {
        let m = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-1, 2, -1, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-1, 1, 0, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1, -2, 1, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1, -1, 0, 0));
        let h = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.multiply([step], m, true)[0].multiply(tension);
        let h2 = (2 * step[0] - 3 * step[1] + 1);
        let h3 = -2 * step[0] + 3 * step[1];
        let pt = Curve._calcPt(ctrls, h);
        pt.x += h2 * ctrls[1].x + h3 * ctrls[2].x;
        pt.y += h2 * ctrls[1].y + h3 * ctrls[2].y;
        if (pt.length > 2)
            pt.z += h2 * ctrls[1].z + h3 * ctrls[2].z;
        return pt;
    }
    static bezier(pts, steps = 10) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 4)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ps = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ts = Curve.getSteps(steps);
        let k = 0;
        while (k < _pts.length - 3) {
            let c = Curve.controlPoints(_pts, k);
            if (c.length > 0) {
                for (let i = 0; i <= steps; i++) {
                    ps.push(Curve.bezierStep(ts[i], c));
                }
                k += 3;
            }
        }
        return ps;
    }
    static bezierStep(step, ctrls) {
        let m = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-1, 3, -3, 1), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(3, -6, 3, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-3, 3, 0, 0), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1, 0, 0, 0));
        return Curve._calcPt(ctrls, _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.multiply([step], m, true)[0]);
    }
    static bspline(pts, steps = 10, tension = 1) {
        let _pts = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(pts);
        if (_pts.length < 2)
            return new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ps = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group();
        let ts = Curve.getSteps(steps);
        let k = 0;
        while (k < _pts.length - 3) {
            let c = Curve.controlPoints(_pts, k);
            if (c.length > 0) {
                if (tension !== 1) {
                    for (let i = 0; i <= steps; i++) {
                        ps.push(Curve.bsplineTensionStep(ts[i], c, tension));
                    }
                }
                else {
                    for (let i = 0; i <= steps; i++) {
                        ps.push(Curve.bsplineStep(ts[i], c));
                    }
                }
                k++;
            }
        }
        return ps;
    }
    static bsplineStep(step, ctrls) {
        let m = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-0.16666666666666666, 0.5, -0.5, 0.16666666666666666), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0.5, -1, 0, 0.6666666666666666), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-0.5, 0.5, 0.5, 0.16666666666666666), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0.16666666666666666, 0, 0, 0));
        return Curve._calcPt(ctrls, _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.multiply([step], m, true)[0]);
    }
    static bsplineTensionStep(step, ctrls, tension = 1) {
        let m = new _Pt__WEBPACK_IMPORTED_MODULE_2__.Group(new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-0.16666666666666666, 0.5, -0.5, 0.16666666666666666), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(-1.5, 2, 0, -0.3333333333333333), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(1.5, -2.5, 0.5, 0.16666666666666666), new _Pt__WEBPACK_IMPORTED_MODULE_2__.Pt(0.16666666666666666, 0, 0, 0));
        let h = _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat.multiply([step], m, true)[0].multiply(tension);
        let h2 = (2 * step[0] - 3 * step[1] + 1);
        let h3 = -2 * step[0] + 3 * step[1];
        let pt = Curve._calcPt(ctrls, h);
        pt.x += h2 * ctrls[1].x + h3 * ctrls[2].x;
        pt.y += h2 * ctrls[1].y + h3 * ctrls[2].y;
        if (pt.length > 2)
            pt.z += h2 * ctrls[1].z + h3 * ctrls[2].z;
        return pt;
    }
}
//# sourceMappingURL=Op.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Physics.js":
/*!*************************************************!*\
  !*** ./node_modules/pts/dist/es2015/Physics.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World),
/* harmony export */   "Particle": () => (/* binding */ Particle),
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */



class World {
    constructor(bound, friction = 1, gravity = 0) {
        this._lastTime = null;
        this._gravity = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        this._friction = 1;
        this._damping = 0.75;
        this._particles = [];
        this._bodies = [];
        this._pnames = [];
        this._bnames = [];
        this._bound = _Pt__WEBPACK_IMPORTED_MODULE_0__.Bound.fromGroup(bound);
        this._friction = friction;
        this._gravity = (typeof gravity === "number") ? new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(0, gravity) : new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(gravity);
        return this;
    }
    get bound() { return this._bound; }
    set bound(bound) { this._bound = bound; }
    get gravity() { return this._gravity; }
    set gravity(g) { this._gravity = g; }
    get friction() { return this._friction; }
    set friction(f) { this._friction = f; }
    get damping() { return this._damping; }
    set damping(f) { this._damping = f; }
    get bodyCount() { return this._bodies.length; }
    get particleCount() { return this._particles.length; }
    body(id) {
        let idx = id;
        if (typeof id === "string" && id.length > 0) {
            idx = this._bnames.indexOf(id);
        }
        if (!(idx >= 0))
            return undefined;
        return this._bodies[idx];
    }
    particle(id) {
        let idx = id;
        if (typeof id === "string" && id.length > 0) {
            idx = this._pnames.indexOf(id);
        }
        if (!(idx >= 0))
            return undefined;
        return this._particles[idx];
    }
    bodyIndex(name) {
        return this._bnames.indexOf(name);
    }
    particleIndex(name) {
        return this._pnames.indexOf(name);
    }
    update(ms) {
        let dt = ms / 1000;
        this._updateParticles(dt);
        this._updateBodies(dt);
    }
    drawParticles(fn) {
        this._drawParticles = fn;
    }
    drawBodies(fn) {
        this._drawBodies = fn;
    }
    add(p, name = '') {
        if (p instanceof Body) {
            this._bodies.push(p);
            this._bnames.push(name);
        }
        else {
            this._particles.push(p);
            this._pnames.push(name);
        }
        return this;
    }
    _index(fn, id) {
        let index = 0;
        if (typeof id === "string") {
            index = fn(id);
            if (index < 0)
                throw new Error(`Cannot find index of ${id}. You can use particleIndex() or bodyIndex() function to check existence by name.`);
        }
        else {
            index = id;
        }
        return index;
    }
    removeBody(from, count = 1) {
        const index = this._index(this.bodyIndex.bind(this), from);
        const param = (index < 0) ? [index * -1 - 1, count] : [index, count];
        this._bodies.splice(param[0], param[1]);
        this._bnames.splice(param[0], param[1]);
        return this;
    }
    removeParticle(from, count = 1) {
        const index = this._index(this.particleIndex.bind(this), from);
        const param = (index < 0) ? [index * -1 - 1, count] : [index, count];
        this._particles.splice(param[0], param[1]);
        this._pnames.splice(param[0], param[1]);
        return this;
    }
    static edgeConstraint(p1, p2, dist, stiff = 1, precise = false) {
        const m1 = 1 / (p1.mass || 1);
        const m2 = 1 / (p2.mass || 1);
        const mm = m1 + m2;
        let delta = p2.$subtract(p1);
        let distSq = dist * dist;
        let d = (precise) ? (dist / delta.magnitude() - 1) : (distSq / (delta.dot(delta) + distSq) - 0.5);
        let f = delta.$multiply(d * stiff);
        p1.subtract(f.$multiply(m1 / mm));
        p2.add(f.$multiply(m2 / mm));
        return p1;
    }
    static boundConstraint(p, rect, damping = 0.75) {
        let bound = _Num__WEBPACK_IMPORTED_MODULE_2__.Geom.boundingBox(rect);
        let np = p.$min(bound[1].subtract(p.radius)).$max(bound[0].add(p.radius));
        if (np[0] === bound[0][0] || np[0] === bound[1][0]) {
            let c = p.changed.$multiply(damping);
            p.previous = np.$subtract(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(-c[0], c[1]));
        }
        else if (np[1] === bound[0][1] || np[1] === bound[1][1]) {
            let c = p.changed.$multiply(damping);
            p.previous = np.$subtract(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(c[0], -c[1]));
        }
        p.to(np);
    }
    integrate(p, dt, prevDt) {
        p.addForce(this._gravity);
        p.verlet(dt, this._friction, prevDt);
        return p;
    }
    _updateParticles(dt) {
        for (let i = 0, len = this._particles.length; i < len; i++) {
            let p = this._particles[i];
            this.integrate(p, dt, this._lastTime);
            World.boundConstraint(p, this._bound, this._damping);
            for (let k = i + 1; k < len; k++) {
                if (i !== k) {
                    let p2 = this._particles[k];
                    p.collide(p2, this._damping);
                }
            }
            if (this._drawParticles)
                this._drawParticles(p, i);
        }
        this._lastTime = dt;
    }
    _updateBodies(dt) {
        for (let i = 0, len = this._bodies.length; i < len; i++) {
            let bds = this._bodies[i];
            if (bds) {
                for (let k = 0, klen = bds.length; k < klen; k++) {
                    let bk = bds[k];
                    World.boundConstraint(bk, this._bound, this._damping);
                    this.integrate(bk, dt, this._lastTime);
                }
                for (let k = i + 1; k < len; k++) {
                    bds.processBody(this._bodies[k]);
                }
                for (let m = 0, mlen = this._particles.length; m < mlen; m++) {
                    bds.processParticle(this._particles[m]);
                }
                bds.processEdges();
                if (this._drawBodies)
                    this._drawBodies(bds, i);
            }
        }
    }
}
class Particle extends _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt {
    constructor(...args) {
        super(...args);
        this._mass = 1;
        this._radius = 0;
        this._force = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        this._prev = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        this._lock = false;
        this._prev = this.clone();
    }
    get mass() { return this._mass; }
    set mass(m) { this._mass = m; }
    get radius() { return this._radius; }
    set radius(f) { this._radius = f; }
    get previous() { return this._prev; }
    set previous(p) { this._prev = p; }
    get force() { return this._force; }
    set force(g) { this._force = g; }
    get body() { return this._body; }
    set body(b) { this._body = b; }
    get lock() { return this._lock; }
    set lock(b) {
        this._lock = b;
        this._lockPt = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(this);
    }
    get changed() { return this.$subtract(this._prev); }
    set position(p) {
        this.previous.to(this);
        if (this._lock)
            this._lockPt = p;
        this.to(p);
    }
    size(r) {
        this._mass = r;
        this._radius = r;
        return this;
    }
    addForce(...args) {
        this._force.add(...args);
        return this._force;
    }
    verlet(dt, friction, lastDt) {
        if (this._lock) {
            this.to(this._lockPt);
        }
        else {
            let lt = (lastDt) ? lastDt : dt;
            let a = this._force.multiply(dt * (dt + lt) / 2);
            let v = this.changed.multiply(friction * dt / lt).add(a);
            this._prev = this.clone();
            this.add(v);
            this._force = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        }
        return this;
    }
    hit(...args) {
        this._prev.subtract(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(...args).$divide(Math.sqrt(this._mass)));
        return this;
    }
    collide(p2, damp = 1) {
        let p1 = this;
        let dp = p1.$subtract(p2);
        let distSq = dp.magnitudeSq();
        let dr = p1.radius + p2.radius;
        if (distSq < dr * dr) {
            let c1 = p1.changed;
            let c2 = p2.changed;
            let dist = Math.sqrt(distSq);
            let d = dp.$multiply(((dist - dr) / dist) / 2);
            let np1 = p1.$subtract(d);
            let np2 = p2.$add(d);
            p1.to(np1);
            p2.to(np2);
            let f1 = damp * dp.dot(c1) / distSq;
            let f2 = damp * dp.dot(c2) / distSq;
            let dm1 = p1.mass / (p1.mass + p2.mass);
            let dm2 = p2.mass / (p1.mass + p2.mass);
            c1.add(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(f2 * dp[0] - f1 * dp[0], f2 * dp[1] - f1 * dp[1]).$multiply(dm2));
            c2.add(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(f1 * dp[0] - f2 * dp[0], f1 * dp[1] - f2 * dp[1]).$multiply(dm1));
            p1.previous = p1.$subtract(c1);
            p2.previous = p2.$subtract(c2);
        }
    }
    toString() {
        return `Particle: ${this[0]} ${this[1]} | previous ${this._prev[0]} ${this._prev[1]} | mass ${this._mass}`;
    }
}
class Body extends _Pt__WEBPACK_IMPORTED_MODULE_0__.Group {
    constructor() {
        super();
        this._cs = [];
        this._stiff = 1;
        this._locks = {};
        this._mass = 1;
    }
    static fromGroup(body, stiff = 1, autoLink = true, autoMass = true) {
        let b = new Body().init(body);
        if (autoLink)
            b.linkAll(stiff);
        if (autoMass)
            b.autoMass();
        return b;
    }
    init(body, stiff = 1) {
        let c = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        for (let li of body) {
            let p = new Particle(li);
            p.body = this;
            c.add(li);
            this.push(p);
        }
        this._stiff = stiff;
        return this;
    }
    get mass() { return this._mass; }
    set mass(m) {
        this._mass = m;
        for (let i = 0, len = this.length; i < len; i++) {
            this[i].mass = this._mass;
        }
    }
    autoMass() {
        this.mass = Math.sqrt(_Op__WEBPACK_IMPORTED_MODULE_1__.Polygon.area(this)) / 10;
        return this;
    }
    link(index1, index2, stiff) {
        if (index1 < 0 || index1 >= this.length)
            throw new Error("index1 is not in the Group's indices");
        if (index2 < 0 || index2 >= this.length)
            throw new Error("index1 is not in the Group's indices");
        let d = this[index1].$subtract(this[index2]).magnitude();
        this._cs.push([index1, index2, d, stiff || this._stiff]);
        return this;
    }
    linkAll(stiff) {
        let half = this.length / 2;
        for (let i = 0, len = this.length; i < len; i++) {
            let n = (i >= len - 1) ? 0 : i + 1;
            this.link(i, n, stiff);
            if (len > 4) {
                let nd = (Math.floor(half / 2)) + 1;
                let n2 = (i >= len - nd) ? i % len : i + nd;
                this.link(i, n2, stiff);
            }
            if (i <= half - 1) {
                this.link(i, Math.min(this.length - 1, i + Math.floor(half)));
            }
        }
    }
    linksToLines() {
        let gs = [];
        for (let i = 0, len = this._cs.length; i < len; i++) {
            let ln = this._cs[i];
            gs.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group(this[ln[0]], this[ln[1]]));
        }
        return gs;
    }
    processEdges() {
        for (let i = 0, len = this._cs.length; i < len; i++) {
            let [m, n, d, s] = this._cs[i];
            World.edgeConstraint(this[m], this[n], d, s);
        }
    }
    processBody(b) {
        let b1 = this;
        let b2 = b;
        let hit = _Op__WEBPACK_IMPORTED_MODULE_1__.Polygon.hasIntersectPolygon(b1, b2);
        if (hit) {
            let cv = hit.normal.$multiply(hit.dist);
            let t;
            let eg = hit.edge;
            if (Math.abs(eg[0][0] - eg[1][0]) > Math.abs(eg[0][1] - eg[1][1])) {
                t = (hit.vertex[0] - cv[0] - eg[0][0]) / (eg[1][0] - eg[0][0]);
            }
            else {
                t = (hit.vertex[1] - cv[1] - eg[0][1]) / (eg[1][1] - eg[0][1]);
            }
            let lambda = 1 / (t * t + (1 - t) * (1 - t));
            let m0 = hit.vertex.body.mass || 1;
            let m1 = hit.edge[0].body.mass || 1;
            let mr0 = m0 / (m0 + m1);
            let mr1 = m1 / (m0 + m1);
            eg[0].subtract(cv.$multiply(mr0 * (1 - t) * lambda / 2));
            eg[1].subtract(cv.$multiply(mr0 * t * lambda / 2));
            hit.vertex.add(cv.$multiply(mr1));
        }
    }
    processParticle(b) {
        let b1 = this;
        let b2 = b;
        let hit = _Op__WEBPACK_IMPORTED_MODULE_1__.Polygon.hasIntersectCircle(b1, _Op__WEBPACK_IMPORTED_MODULE_1__.Circle.fromCenter(b, b.radius));
        if (hit) {
            let cv = hit.normal.$multiply(hit.dist);
            let t;
            let eg = hit.edge;
            if (Math.abs(eg[0][0] - eg[1][0]) > Math.abs(eg[0][1] - eg[1][1])) {
                t = (hit.vertex[0] - cv[0] - eg[0][0]) / (eg[1][0] - eg[0][0]);
            }
            else {
                t = (hit.vertex[1] - cv[1] - eg[0][1]) / (eg[1][1] - eg[0][1]);
            }
            let lambda = 1 / (t * t + (1 - t) * (1 - t));
            let m0 = hit.vertex.mass || b2.mass || 1;
            let m1 = hit.edge[0].body.mass || 1;
            let mr0 = m0 / (m0 + m1);
            let mr1 = m1 / (m0 + m1);
            eg[0].subtract(cv.$multiply(mr0 * (1 - t) * lambda / 2));
            eg[1].subtract(cv.$multiply(mr0 * t * lambda / 2));
            let c1 = b.changed.add(cv.$multiply(mr1));
            b.previous = b.$subtract(c1);
        }
    }
}
//# sourceMappingURL=Physics.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Play.js":
/*!**********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Play.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tempo": () => (/* binding */ Tempo),
/* harmony export */   "Sound": () => (/* binding */ Sound)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Tempo {
    constructor(bpm) {
        this._listeners = {};
        this._listenerInc = 0;
        this.bpm = bpm;
    }
    static fromBeat(ms) {
        return new Tempo(60000 / ms);
    }
    get bpm() { return this._bpm; }
    set bpm(n) {
        this._bpm = n;
        this._ms = 60000 / this._bpm;
    }
    get ms() { return this._ms; }
    set ms(n) {
        this._bpm = Math.floor(60000 / n);
        this._ms = 60000 / this._bpm;
    }
    _createID(listener) {
        let id = '';
        if (typeof listener === 'function') {
            id = '_b' + (this._listenerInc++);
        }
        else {
            id = listener.name || '_b' + (this._listenerInc++);
        }
        return id;
    }
    every(beats) {
        let self = this;
        let p = Array.isArray(beats) ? beats[0] : beats;
        return {
            start: function (fn, offset = 0, name) {
                let id = name || self._createID(fn);
                self._listeners[id] = { name: id, beats: beats, period: p, index: 0, offset: offset, duration: -1, continuous: false, fn: fn };
                return this;
            },
            progress: function (fn, offset = 0, name) {
                let id = name || self._createID(fn);
                self._listeners[id] = { name: id, beats: beats, period: p, index: 0, offset: offset, duration: -1, continuous: true, fn: fn };
                return this;
            }
        };
    }
    track(time) {
        for (let k in this._listeners) {
            if (this._listeners.hasOwnProperty(k)) {
                let li = this._listeners[k];
                let _t = (li.offset) ? time + li.offset : time;
                let ms = li.period * this._ms;
                let isStart = false;
                if (_t > li.duration + ms) {
                    li.duration = _t - (_t % this._ms);
                    if (Array.isArray(li.beats)) {
                        li.index = (li.index + 1) % li.beats.length;
                        li.period = li.beats[li.index];
                    }
                    isStart = true;
                }
                let count = Math.max(0, Math.ceil(Math.floor(li.duration / this._ms) / li.period));
                let params = (li.continuous) ? [count, _Num__WEBPACK_IMPORTED_MODULE_1__.Num.clamp((_t - li.duration) / ms, 0, 1), _t, isStart] : [count];
                if (li.continuous || isStart) {
                    let done = li.fn.apply(li, params);
                    if (done)
                        delete this._listeners[li.name];
                }
            }
        }
    }
    stop(name) {
        if (this._listeners[name])
            delete this._listeners[name];
    }
    animate(time, ftime) {
        this.track(time);
    }
    resize(bound, evt) {
        return;
    }
    action(type, px, py, evt) {
        return;
    }
}
class Sound {
    constructor(type) {
        this._playing = false;
        this._type = type;
        let _ctx = window.AudioContext || window.webkitAudioContext || false;
        if (!_ctx)
            throw (new Error("Your browser doesn't support Web Audio. (No AudioContext)"));
        this._ctx = (_ctx) ? new _ctx() : undefined;
    }
    static from(node, ctx, type = "gen", stream) {
        let s = new Sound(type);
        s._node = node;
        s._ctx = ctx;
        if (stream)
            s._stream = stream;
        return s;
    }
    static load(source, crossOrigin = "anonymous") {
        return new Promise((resolve, reject) => {
            let s = new Sound("file");
            s._source = (typeof source === 'string') ? new Audio(source) : source;
            s._source.autoplay = false;
            s._source.crossOrigin = crossOrigin;
            s._source.addEventListener("ended", function () { s._playing = false; });
            s._source.addEventListener('error', function () { reject("Error loading sound"); });
            s._source.addEventListener('canplaythrough', function () {
                s._node = s._ctx.createMediaElementSource(s._source);
                resolve(s);
            });
        });
    }
    static loadAsBuffer(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'arraybuffer';
            let s = new Sound("file");
            request.onload = function () {
                s._ctx.decodeAudioData(request.response, function (buffer) {
                    s.createBuffer(buffer);
                    resolve(s);
                }, (err) => reject("Error decoding audio"));
            };
            request.send();
        });
    }
    createBuffer(buf) {
        this._node = this._ctx.createBufferSource();
        if (buf !== undefined)
            this._buffer = buf;
        this._node.buffer = this._buffer;
        this._node.onended = () => { this._playing = false; };
        return this;
    }
    static generate(type, val) {
        let s = new Sound("gen");
        return s._gen(type, val);
    }
    _gen(type, val) {
        this._node = this._ctx.createOscillator();
        let osc = this._node;
        osc.type = type;
        if (type === 'custom') {
            osc.setPeriodicWave(val);
        }
        else {
            osc.frequency.value = val;
        }
        return this;
    }
    static input(constraint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let s = new Sound("input");
                if (!s)
                    return undefined;
                const c = constraint ? constraint : { audio: true, video: false };
                s._stream = yield navigator.mediaDevices.getUserMedia(c);
                s._node = s._ctx.createMediaStreamSource(s._stream);
                return s;
            }
            catch (e) {
                console.error("Cannot get audio from input device.");
                return Promise.resolve(null);
            }
        });
    }
    get ctx() { return this._ctx; }
    get node() { return this._node; }
    get outputNode() { return this._outputNode; }
    get stream() { return this._stream; }
    get source() { return this._source; }
    get buffer() { return this._buffer; }
    set buffer(b) { this._buffer = b; }
    get type() { return this._type; }
    get playing() { return this._playing; }
    get progress() {
        let dur = 0;
        let curr = 0;
        if (!!this._buffer) {
            dur = this._buffer.duration;
            curr = (this._timestamp) ? this._ctx.currentTime - this._timestamp : 0;
        }
        else {
            dur = this._source.duration;
            curr = this._source.currentTime;
        }
        return curr / dur;
    }
    get playable() {
        return (this._type === "input") ? this._node !== undefined : (!!this._buffer || this._source.readyState === 4);
    }
    get binSize() {
        return this.analyzer.size;
    }
    get sampleRate() {
        return this._ctx.sampleRate;
    }
    get frequency() {
        return (this._type === "gen") ? this._node.frequency.value : 0;
    }
    set frequency(f) {
        if (this._type === "gen")
            this._node.frequency.value = f;
    }
    connect(node) {
        this._node.connect(node);
        return this;
    }
    setOutputNode(outputNode) {
        this._outputNode = outputNode;
        return this;
    }
    removeOutputNode() {
        this._outputNode = null;
        return this;
    }
    analyze(size = 256, minDb = -100, maxDb = -30, smooth = 0.8) {
        let a = this._ctx.createAnalyser();
        a.fftSize = size * 2;
        a.minDecibels = minDb;
        a.maxDecibels = maxDb;
        a.smoothingTimeConstant = smooth;
        this.analyzer = {
            node: a,
            size: a.frequencyBinCount,
            data: new Uint8Array(a.frequencyBinCount)
        };
        this._node.connect(this.analyzer.node);
        return this;
    }
    _domain(time) {
        if (this.analyzer) {
            if (time) {
                this.analyzer.node.getByteTimeDomainData(this.analyzer.data);
            }
            else {
                this.analyzer.node.getByteFrequencyData(this.analyzer.data);
            }
            return this.analyzer.data;
        }
        return new Uint8Array(0);
    }
    _domainTo(time, size, position = [0, 0], trim = [0, 0]) {
        let data = (time) ? this.timeDomain() : this.freqDomain();
        let g = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group();
        for (let i = trim[0], len = data.length - trim[1]; i < len; i++) {
            g.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(position[0] + size[0] * i / len, position[1] + size[1] * data[i] / 255));
        }
        return g;
    }
    timeDomain() {
        return this._domain(true);
    }
    timeDomainTo(size, position = [0, 0], trim = [0, 0]) {
        return this._domainTo(true, size, position, trim);
    }
    freqDomain() {
        return this._domain(false);
    }
    freqDomainTo(size, position = [0, 0], trim = [0, 0]) {
        return this._domainTo(false, size, position, trim);
    }
    reset() {
        this.stop();
        this._node.disconnect();
        return this;
    }
    start(timeAt = 0) {
        if (this._ctx.state === 'suspended')
            this._ctx.resume();
        if (this._type === "file") {
            if (!!this._buffer) {
                this._node.start(timeAt);
                this._timestamp = this._ctx.currentTime + timeAt;
            }
            else {
                this._source.play();
                if (timeAt > 0)
                    this._source.currentTime = timeAt;
            }
        }
        else if (this._type === "gen") {
            this._gen(this._node.type, this._node.frequency.value);
            this._node.start();
            if (this.analyzer)
                this._node.connect(this.analyzer.node);
        }
        (this._outputNode || this._node).connect(this._ctx.destination);
        this._playing = true;
        return this;
    }
    stop() {
        if (this._playing)
            (this._outputNode || this._node).disconnect(this._ctx.destination);
        if (this._type === "file") {
            if (!!this._buffer) {
                if (this.progress < 1)
                    this._node.stop();
            }
            else {
                this._source.pause();
            }
        }
        else if (this._type === "gen") {
            this._node.stop();
        }
        else if (this._type === "input") {
            this._stream.getAudioTracks().forEach(track => track.stop());
        }
        this._playing = false;
        return this;
    }
    toggle() {
        if (this._playing) {
            this.stop();
        }
        else {
            this.start();
        }
        return this;
    }
}
//# sourceMappingURL=Play.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Pt.js":
/*!********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Pt.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pt": () => (/* binding */ Pt),
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "Bound": () => (/* binding */ Bound)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/* harmony import */ var _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearAlgebra */ "./node_modules/pts/dist/es2015/LinearAlgebra.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */



class Pt extends Float32Array {
    constructor(...args) {
        if (args.length === 1 && typeof args[0] == "number") {
            super(args[0]);
        }
        else {
            super((args.length > 0) ? _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args) : [0, 0]);
        }
    }
    static make(dimensions, defaultValue = 0, randomize = false) {
        let p = new Float32Array(dimensions);
        if (defaultValue)
            p.fill(defaultValue);
        if (randomize) {
            for (let i = 0, len = p.length; i < len; i++) {
                p[i] = p[i] * Math.random();
            }
        }
        return new Pt(p);
    }
    get id() { return this._id; }
    set id(s) { this._id = s; }
    get x() { return this[0]; }
    set x(n) { this[0] = n; }
    get y() { return this[1]; }
    set y(n) { this[1] = n; }
    get z() { return this[2]; }
    set z(n) { this[2] = n; }
    get w() { return this[3]; }
    set w(n) { this[3] = n; }
    clone() {
        return new Pt(this);
    }
    equals(p, threshold = 0.000001) {
        for (let i = 0, len = this.length; i < len; i++) {
            if (Math.abs(this[i] - p[i]) > threshold)
                return false;
        }
        return true;
    }
    to(...args) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args);
        for (let i = 0, len = Math.min(this.length, p.length); i < len; i++) {
            this[i] = p[i];
        }
        return this;
    }
    $to(...args) {
        return this.clone().to(...args);
    }
    toAngle(radian, magnitude, anchorFromPt = false) {
        let m = (magnitude != undefined) ? magnitude : this.magnitude();
        let change = [Math.cos(radian) * m, Math.sin(radian) * m];
        return (anchorFromPt) ? this.add(change) : this.to(change);
    }
    op(fn) {
        let self = this;
        return (...params) => {
            return fn(self, ...params);
        };
    }
    ops(fns) {
        let _ops = [];
        for (let i = 0, len = fns.length; i < len; i++) {
            _ops.push(this.op(fns[i]));
        }
        return _ops;
    }
    $take(axis) {
        let p = [];
        for (let i = 0, len = axis.length; i < len; i++) {
            p.push(this[axis[i]] || 0);
        }
        return new Pt(p);
    }
    $concat(...args) {
        return new Pt(this.toArray().concat(_Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args)));
    }
    add(...args) {
        (args.length === 1 && typeof args[0] == "number") ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.add(this, args[0]) : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.add(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args));
        return this;
    }
    $add(...args) { return this.clone().add(...args); }
    subtract(...args) {
        (args.length === 1 && typeof args[0] == "number") ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.subtract(this, args[0]) : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.subtract(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args));
        return this;
    }
    $subtract(...args) { return this.clone().subtract(...args); }
    multiply(...args) {
        (args.length === 1 && typeof args[0] == "number") ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.multiply(this, args[0]) : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.multiply(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args));
        return this;
    }
    $multiply(...args) { return this.clone().multiply(...args); }
    divide(...args) {
        (args.length === 1 && typeof args[0] == "number") ? _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.divide(this, args[0]) : _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.divide(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args));
        return this;
    }
    $divide(...args) { return this.clone().divide(...args); }
    magnitudeSq() { return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.dot(this, this); }
    magnitude() { return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.magnitude(this); }
    unit(magnitude = undefined) {
        _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.unit(this, magnitude);
        return this;
    }
    $unit(magnitude = undefined) { return this.clone().unit(magnitude); }
    dot(...args) { return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.dot(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args)); }
    $cross2D(...args) { return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.cross2D(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args)); }
    $cross(...args) { return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.cross(this, _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args)); }
    $project(...args) {
        return this.$multiply(this.dot(...args) / this.magnitudeSq());
    }
    projectScalar(...args) {
        return this.dot(...args) / this.magnitude();
    }
    abs() {
        _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.abs(this);
        return this;
    }
    $abs() {
        return this.clone().abs();
    }
    floor() {
        _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.floor(this);
        return this;
    }
    $floor() {
        return this.clone().floor();
    }
    ceil() {
        _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.ceil(this);
        return this;
    }
    $ceil() {
        return this.clone().ceil();
    }
    round() {
        _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.round(this);
        return this;
    }
    $round() {
        return this.clone().round();
    }
    minValue() {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.min(this);
    }
    maxValue() {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Vec.max(this);
    }
    $min(...args) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args);
        let m = this.clone();
        for (let i = 0, len = Math.min(this.length, p.length); i < len; i++) {
            m[i] = Math.min(this[i], p[i]);
        }
        return m;
    }
    $max(...args) {
        let p = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args);
        let m = this.clone();
        for (let i = 0, len = Math.min(this.length, p.length); i < len; i++) {
            m[i] = Math.max(this[i], p[i]);
        }
        return m;
    }
    angle(axis = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.xy) {
        return Math.atan2(this[axis[1]], this[axis[0]]);
    }
    angleBetween(p, axis = _Util__WEBPACK_IMPORTED_MODULE_0__.Const.xy) {
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundRadian(this.angle(axis)) - _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundRadian(p.angle(axis));
    }
    scale(scale, anchor) {
        _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.scale(this, scale, anchor || Pt.make(this.length, 0));
        return this;
    }
    rotate2D(angle, anchor, axis) {
        _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.rotate2D(this, angle, anchor || Pt.make(this.length, 0), axis);
        return this;
    }
    shear2D(scale, anchor, axis) {
        _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.shear2D(this, scale, anchor || Pt.make(this.length, 0), axis);
        return this;
    }
    reflect2D(line, axis) {
        _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.reflect2D(this, line, axis);
        return this;
    }
    toString() {
        return `Pt(${this.join(", ")})`;
    }
    toArray() {
        return [].slice.call(this);
    }
    toGroup() {
        return new Group(Pt.make(this.length), this.clone());
    }
    toBound() {
        return new Bound(Pt.make(this.length), this.clone());
    }
}
class Group extends Array {
    constructor(...args) {
        super(...args);
    }
    get id() { return this._id; }
    set id(s) { this._id = s; }
    get p1() { return this[0]; }
    get p2() { return this[1]; }
    get p3() { return this[2]; }
    get p4() { return this[3]; }
    get q1() { return this[this.length - 1]; }
    get q2() { return this[this.length - 2]; }
    get q3() { return this[this.length - 3]; }
    get q4() { return this[this.length - 4]; }
    clone() {
        let group = new Group();
        for (let i = 0, len = this.length; i < len; i++) {
            group.push(this[i].clone());
        }
        return group;
    }
    static fromArray(list) {
        let g = new Group();
        for (let li of list) {
            let p = (li instanceof Pt) ? li : new Pt(li);
            g.push(p);
        }
        return g;
    }
    static fromPtArray(list) {
        return Group.from(list);
    }
    split(chunkSize, stride, loopBack = false) {
        let sp = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.split(this, chunkSize, stride, loopBack);
        return sp;
    }
    insert(pts, index = 0) {
        Group.prototype.splice.apply(this, [index, 0, ...pts]);
        return this;
    }
    remove(index = 0, count = 1) {
        let param = (index < 0) ? [index * -1 - 1, count] : [index, count];
        return Group.prototype.splice.apply(this, param);
    }
    segments(pts_per_segment = 2, stride = 1, loopBack = false) {
        return this.split(pts_per_segment, stride, loopBack);
    }
    lines() { return this.segments(2, 1); }
    centroid() {
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.centroid(this);
    }
    boundingBox() {
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundingBox(this);
    }
    anchorTo(ptOrIndex = 0) { _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.anchor(this, ptOrIndex, "to"); }
    anchorFrom(ptOrIndex = 0) { _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.anchor(this, ptOrIndex, "from"); }
    op(fn) {
        let self = this;
        return (...params) => {
            return fn(self, ...params);
        };
    }
    ops(fns) {
        let _ops = [];
        for (let i = 0, len = fns.length; i < len; i++) {
            _ops.push(this.op(fns[i]));
        }
        return _ops;
    }
    interpolate(t) {
        t = _Num__WEBPACK_IMPORTED_MODULE_1__.Num.clamp(t, 0, 1);
        let chunk = this.length - 1;
        let tc = 1 / (this.length - 1);
        let idx = Math.floor(t / tc);
        return _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.interpolate(this[idx], this[Math.min(this.length - 1, idx + 1)], (t - idx * tc) * chunk);
    }
    moveBy(...args) {
        return this.add(...args);
    }
    moveTo(...args) {
        let d = new Pt(_Util__WEBPACK_IMPORTED_MODULE_0__.Util.getArgs(args)).subtract(this[0]);
        this.moveBy(d);
        return this;
    }
    scale(scale, anchor) {
        for (let i = 0, len = this.length; i < len; i++) {
            _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.scale(this[i], scale, anchor || this[0]);
        }
        return this;
    }
    rotate2D(angle, anchor, axis) {
        for (let i = 0, len = this.length; i < len; i++) {
            _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.rotate2D(this[i], angle, anchor || this[0], axis);
        }
        return this;
    }
    shear2D(scale, anchor, axis) {
        for (let i = 0, len = this.length; i < len; i++) {
            _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.shear2D(this[i], scale, anchor || this[0], axis);
        }
        return this;
    }
    reflect2D(line, axis) {
        for (let i = 0, len = this.length; i < len; i++) {
            _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.reflect2D(this[i], line, axis);
        }
        return this;
    }
    sortByDimension(dim, desc = false) {
        return this.sort((a, b) => (desc) ? b[dim] - a[dim] : a[dim] - b[dim]);
    }
    forEachPt(ptFn, ...args) {
        if (!this[0][ptFn]) {
            _Util__WEBPACK_IMPORTED_MODULE_0__.Util.warn(`${ptFn} is not a function of Pt`);
            return this;
        }
        for (let i = 0, len = this.length; i < len; i++) {
            this[i] = this[i][ptFn](...args);
        }
        return this;
    }
    add(...args) {
        return this.forEachPt("add", ...args);
    }
    subtract(...args) {
        return this.forEachPt("subtract", ...args);
    }
    multiply(...args) {
        return this.forEachPt("multiply", ...args);
    }
    divide(...args) {
        return this.forEachPt("divide", ...args);
    }
    $matrixAdd(g) {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Mat.add(this, g);
    }
    $matrixMultiply(g, transposed = false, elementwise = false) {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Mat.multiply(this, g, transposed, elementwise);
    }
    zipSlice(index, defaultValue = false) {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Mat.zipSlice(this, index, defaultValue);
    }
    $zip(defaultValue = undefined, useLongest = false) {
        return _LinearAlgebra__WEBPACK_IMPORTED_MODULE_2__.Mat.zip(this, defaultValue, useLongest);
    }
    toString() {
        return "Group[ " + this.reduce((p, c) => p + c.toString() + " ", "") + " ]";
    }
}
class Bound extends Group {
    constructor(...args) {
        super(...args);
        this._center = new Pt();
        this._size = new Pt();
        this._topLeft = new Pt();
        this._bottomRight = new Pt();
        this._inited = false;
        this.init();
    }
    static fromBoundingRect(rect) {
        let b = new Bound(new Pt(rect.left || 0, rect.top || 0), new Pt(rect.right || 0, rect.bottom || 0));
        if (rect.width && rect.height)
            b.size = new Pt(rect.width, rect.height);
        return b;
    }
    static fromGroup(g) {
        let _g = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.iterToArray(g);
        if (_g.length < 2)
            throw new Error("Cannot create a Bound from a group that has less than 2 Pt");
        return new Bound(_g[0], _g[_g.length - 1]);
    }
    init() {
        if (this.p1) {
            this._size = this.p1.clone();
            this._inited = true;
        }
        if (this.p1 && this.p2) {
            let a = this.p1;
            let b = this.p2;
            this.topLeft = a.$min(b);
            this._bottomRight = a.$max(b);
            this._updateSize();
            this._inited = true;
        }
    }
    clone() {
        return new Bound(this._topLeft.clone(), this._bottomRight.clone());
    }
    _updateSize() {
        this._size = this._bottomRight.$subtract(this._topLeft).abs();
        this._updateCenter();
    }
    _updateCenter() {
        this._center = this._size.$multiply(0.5).add(this._topLeft);
    }
    _updatePosFromTop() {
        this._bottomRight = this._topLeft.$add(this._size);
        this._updateCenter();
    }
    _updatePosFromBottom() {
        this._topLeft = this._bottomRight.$subtract(this._size);
        this._updateCenter();
    }
    _updatePosFromCenter() {
        let half = this._size.$multiply(0.5);
        this._topLeft = this._center.$subtract(half);
        this._bottomRight = this._center.$add(half);
    }
    get size() { return new Pt(this._size); }
    set size(p) {
        this._size = new Pt(p);
        this._updatePosFromTop();
    }
    get center() { return new Pt(this._center); }
    set center(p) {
        this._center = new Pt(p);
        this._updatePosFromCenter();
    }
    get topLeft() { return new Pt(this._topLeft); }
    set topLeft(p) {
        this._topLeft = new Pt(p);
        this[0] = this._topLeft;
        this._updateSize();
    }
    get bottomRight() { return new Pt(this._bottomRight); }
    set bottomRight(p) {
        this._bottomRight = new Pt(p);
        this[1] = this._bottomRight;
        this._updateSize();
    }
    get width() { return (this._size.length > 0) ? this._size.x : 0; }
    set width(w) {
        this._size.x = w;
        this._updatePosFromTop();
    }
    get height() { return (this._size.length > 1) ? this._size.y : 0; }
    set height(h) {
        this._size.y = h;
        this._updatePosFromTop();
    }
    get depth() { return (this._size.length > 2) ? this._size.z : 0; }
    set depth(d) {
        this._size.z = d;
        this._updatePosFromTop();
    }
    get x() { return this.topLeft.x; }
    get y() { return this.topLeft.y; }
    get z() { return this.topLeft.z; }
    get inited() { return this._inited; }
    update() {
        this._topLeft = this[0];
        this._bottomRight = this[1];
        this._updateSize();
        return this;
    }
}
//# sourceMappingURL=Pt.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Space.js":
/*!***********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Space.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Space": () => (/* binding */ Space),
/* harmony export */   "MultiTouchSpace": () => (/* binding */ MultiTouchSpace)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./node_modules/pts/dist/es2015/UI.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */


class Space {
    constructor() {
        this.id = "space";
        this.bound = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Bound();
        this._time = { prev: 0, diff: 0, end: -1 };
        this.players = {};
        this.playerCount = 0;
        this._animID = -1;
        this._pause = false;
        this._refresh = undefined;
        this._pointer = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        this._isReady = false;
        this._playing = false;
    }
    refresh(b) {
        this._refresh = b;
        return this;
    }
    add(p) {
        let player = (typeof p == "function") ? { animate: p } : p;
        let k = this.playerCount++;
        let pid = this.id + k;
        this.players[pid] = player;
        player.animateID = pid;
        if (player.resize && this.bound.inited)
            player.resize(this.bound);
        if (this._refresh === undefined)
            this._refresh = true;
        return this;
    }
    remove(player) {
        delete this.players[player.animateID];
        return this;
    }
    removeAll() {
        this.players = {};
        return this;
    }
    play(time = 0) {
        if (time === 0 && this._animID !== -1) {
            return;
        }
        this._animID = requestAnimationFrame(this.play.bind(this));
        if (this._pause)
            return this;
        this._time.diff = time - this._time.prev;
        this._time.prev = time;
        try {
            this.playItems(time);
        }
        catch (err) {
            cancelAnimationFrame(this._animID);
            this._animID = -1;
            this._playing = false;
            throw err;
        }
        return this;
    }
    replay() {
        this._time.end = -1;
        this.play();
    }
    playItems(time) {
        this._playing = true;
        if (this._refresh)
            this.clear();
        if (this._isReady) {
            for (let k in this.players) {
                if (this.players[k].animate)
                    this.players[k].animate(time, this._time.diff, this);
            }
        }
        if (this._time.end >= 0 && time > this._time.end) {
            cancelAnimationFrame(this._animID);
            this._animID = -1;
            this._playing = false;
        }
    }
    pause(toggle = false) {
        this._pause = (toggle) ? !this._pause : true;
        return this;
    }
    resume() {
        this._pause = false;
        return this;
    }
    stop(t = 0) {
        this._time.end = t;
        return this;
    }
    playOnce(duration = 5000) {
        this.play();
        this.stop(duration);
        return this;
    }
    render(context) {
        if (this._renderFunc)
            this._renderFunc(context, this);
        return this;
    }
    set customRendering(f) { this._renderFunc = f; }
    get customRendering() { return this._renderFunc; }
    get isPlaying() { return this._playing; }
    get outerBound() { return this.bound.clone(); }
    get innerBound() { return new _Pt__WEBPACK_IMPORTED_MODULE_0__.Bound(_Pt__WEBPACK_IMPORTED_MODULE_0__.Pt.make(this.size.length, 0), this.size.clone()); }
    get size() { return this.bound.size.clone(); }
    get center() { return this.size.divide(2); }
    get width() { return this.bound.width; }
    get height() { return this.bound.height; }
}
class MultiTouchSpace extends Space {
    constructor() {
        super(...arguments);
        this._pressed = false;
        this._dragged = false;
        this._hasMouse = false;
        this._hasTouch = false;
    }
    get pointer() {
        let p = this._pointer.clone();
        p.id = this._pointer.id;
        return p;
    }
    bindCanvas(evt, callback) {
        this._canvas.addEventListener(evt, callback);
    }
    unbindCanvas(evt, callback) {
        this._canvas.removeEventListener(evt, callback);
    }
    bindMouse(_bind = true) {
        if (_bind) {
            this.bindCanvas("mousedown", this._mouseDown.bind(this));
            this.bindCanvas("mouseup", this._mouseUp.bind(this));
            this.bindCanvas("mouseover", this._mouseOver.bind(this));
            this.bindCanvas("mouseout", this._mouseOut.bind(this));
            this.bindCanvas("mousemove", this._mouseMove.bind(this));
            this.bindCanvas("contextmenu", this._contextMenu.bind(this));
            this._hasMouse = true;
        }
        else {
            this.unbindCanvas("mousedown", this._mouseDown.bind(this));
            this.unbindCanvas("mouseup", this._mouseUp.bind(this));
            this.unbindCanvas("mouseover", this._mouseOver.bind(this));
            this.unbindCanvas("mouseout", this._mouseOut.bind(this));
            this.unbindCanvas("mousemove", this._mouseMove.bind(this));
            this.unbindCanvas("contextmenu", this._contextMenu.bind(this));
            this._hasMouse = false;
        }
        return this;
    }
    bindTouch(_bind = true) {
        if (_bind) {
            this.bindCanvas("touchstart", this._touchStart.bind(this));
            this.bindCanvas("touchend", this._mouseUp.bind(this));
            this.bindCanvas("touchmove", this._touchMove.bind(this));
            this.bindCanvas("touchcancel", this._mouseOut.bind(this));
            this._hasTouch = true;
        }
        else {
            this.unbindCanvas("touchstart", this._touchStart.bind(this));
            this.unbindCanvas("touchend", this._mouseUp.bind(this));
            this.unbindCanvas("touchmove", this._touchMove.bind(this));
            this.unbindCanvas("touchcancel", this._mouseOut.bind(this));
            this._hasTouch = false;
        }
        return this;
    }
    touchesToPoints(evt, which = "touches") {
        if (!evt || !evt[which])
            return [];
        let ts = [];
        for (var i = 0; i < evt[which].length; i++) {
            let t = evt[which].item(i);
            ts.push(new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(t.pageX - this.bound.topLeft.x, t.pageY - this.bound.topLeft.y));
        }
        return ts;
    }
    _mouseAction(type, evt) {
        let px = 0, py = 0;
        if (evt instanceof MouseEvent) {
            for (let k in this.players) {
                if (this.players.hasOwnProperty(k)) {
                    let v = this.players[k];
                    px = evt.pageX - this.outerBound.x;
                    py = evt.pageY - this.outerBound.y;
                    if (v.action)
                        v.action(type, px, py, evt);
                }
            }
        }
        else {
            for (let k in this.players) {
                if (this.players.hasOwnProperty(k)) {
                    let v = this.players[k];
                    let c = evt.changedTouches && evt.changedTouches.length > 0;
                    let touch = evt.changedTouches.item(0);
                    px = (c) ? touch.pageX - this.outerBound.x : 0;
                    py = (c) ? touch.pageY - this.outerBound.y : 0;
                    if (v.action)
                        v.action(type, px, py, evt);
                }
            }
        }
        if (type) {
            this._pointer.to(px, py);
            this._pointer.id = type;
        }
    }
    _mouseDown(evt) {
        this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.down, evt);
        this._pressed = true;
        return false;
    }
    _mouseUp(evt) {
        if (this._dragged) {
            this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.drop, evt);
        }
        else {
            this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.up, evt);
        }
        this._pressed = false;
        this._dragged = false;
        return false;
    }
    _mouseMove(evt) {
        this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.move, evt);
        if (this._pressed) {
            this._dragged = true;
            this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.drag, evt);
        }
        return false;
    }
    _mouseOver(evt) {
        this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.over, evt);
        return false;
    }
    _mouseOut(evt) {
        this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.out, evt);
        if (this._dragged)
            this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.drop, evt);
        this._dragged = false;
        return false;
    }
    _contextMenu(evt) {
        this._mouseAction(_UI__WEBPACK_IMPORTED_MODULE_1__.UIPointerActions.contextmenu, evt);
        return false;
    }
    _touchMove(evt) {
        this._mouseMove(evt);
        evt.preventDefault();
        return false;
    }
    _touchStart(evt) {
        this._mouseDown(evt);
        evt.preventDefault();
        return false;
    }
}
//# sourceMappingURL=Space.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Svg.js":
/*!*********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Svg.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGSpace": () => (/* binding */ SVGSpace),
/* harmony export */   "SVGForm": () => (/* binding */ SVGForm)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./node_modules/pts/dist/es2015/Form.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dom */ "./node_modules/pts/dist/es2015/Dom.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */






class SVGSpace extends _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace {
    constructor(elem, callback) {
        super(elem, callback);
        this._bgcolor = "#999";
        if (this._canvas.nodeName.toLowerCase() != "svg") {
            let s = SVGSpace.svgElement(this._canvas, "svg", `${this.id}_svg`);
            this._container = this._canvas;
            this._canvas = s;
        }
    }
    getForm() { return new SVGForm(this); }
    get element() {
        return this._canvas;
    }
    resize(b, evt) {
        super.resize(b, evt);
        SVGSpace.setAttr(this.element, {
            "viewBox": `0 0 ${this.bound.width} ${this.bound.height}`,
            "width": `${this.bound.width}`,
            "height": `${this.bound.height}`,
            "xmlns": "http://www.w3.org/2000/svg",
            "version": "1.1"
        });
        return this;
    }
    static svgElement(parent, name, id) {
        if (!parent || !parent.appendChild)
            throw new Error("parent is not a valid DOM element");
        let elem = document.querySelector(`#${id}`);
        if (!elem) {
            elem = document.createElementNS("http://www.w3.org/2000/svg", name);
            elem.setAttribute("id", id);
            parent.appendChild(elem);
        }
        return elem;
    }
    remove(player) {
        let temp = this._container.querySelectorAll("." + SVGForm.scopeID(player));
        temp.forEach((el) => {
            el.parentNode.removeChild(el);
        });
        return super.remove(player);
    }
    removeAll() {
        this._container.innerHTML = "";
        return super.removeAll();
    }
}
class SVGForm extends _Form__WEBPACK_IMPORTED_MODULE_0__.VisualForm {
    constructor(space) {
        super();
        this._style = {
            "filled": true,
            "stroked": true,
            "fill": "#f03",
            "stroke": "#fff",
            "stroke-width": 1,
            "stroke-linejoin": "bevel",
            "stroke-linecap": "sqaure",
            "opacity": 1
        };
        this._ctx = {
            group: null,
            groupID: "pts",
            groupCount: 0,
            currentID: "pts0",
            currentClass: "",
            style: {},
        };
        this._ready = false;
        this._space = space;
        this._space.add({ start: () => {
                this._ctx.group = this._space.element;
                this._ctx.groupID = "pts_svg_" + (SVGForm.groupID++);
                this._ctx.style = Object.assign({}, this._style);
                this._ready = true;
            } });
    }
    get space() { return this._space; }
    styleTo(k, v) {
        if (this._ctx.style[k] === undefined)
            throw new Error(`${k} style property doesn't exist`);
        this._ctx.style[k] = v;
    }
    alpha(a) {
        this.styleTo("opacity", a);
        return this;
    }
    fill(c) {
        if (typeof c == "boolean") {
            this.styleTo("filled", c);
        }
        else {
            this.styleTo("filled", true);
            this.styleTo("fill", c);
        }
        return this;
    }
    stroke(c, width, linejoin, linecap) {
        if (typeof c == "boolean") {
            this.styleTo("stroked", c);
        }
        else {
            this.styleTo("stroked", true);
            this.styleTo("stroke", c);
            if (width)
                this.styleTo("stroke-width", width);
            if (linejoin)
                this.styleTo("stroke-linejoin", linejoin);
            if (linecap)
                this.styleTo("stroke-linecap", linecap);
        }
        return this;
    }
    cls(c) {
        if (typeof c == "boolean") {
            this._ctx.currentClass = "";
        }
        else {
            this._ctx.currentClass = c;
        }
        return this;
    }
    font(sizeOrFont, weight, style, lineHeight, family) {
        if (typeof sizeOrFont == "number") {
            this._font.size = sizeOrFont;
            if (family)
                this._font.face = family;
            if (weight)
                this._font.weight = weight;
            if (style)
                this._font.style = style;
            if (lineHeight)
                this._font.lineHeight = lineHeight;
        }
        else {
            this._font = sizeOrFont;
        }
        this._ctx.style['font'] = this._font.value;
        return this;
    }
    reset() {
        this._ctx.style = Object.assign({}, this._style);
        this._font = new _Form__WEBPACK_IMPORTED_MODULE_0__.Font(10, "sans-serif");
        this._ctx.style['font'] = this._font.value;
        return this;
    }
    updateScope(group_id, group) {
        this._ctx.group = group;
        this._ctx.groupID = group_id;
        this._ctx.groupCount = 0;
        this.nextID();
        return this._ctx;
    }
    scope(item) {
        if (!item || item.animateID == null)
            throw new Error("item not defined or not yet added to Space");
        return this.updateScope(SVGForm.scopeID(item), this.space.element);
    }
    nextID() {
        this._ctx.groupCount++;
        this._ctx.currentID = `${this._ctx.groupID}-${this._ctx.groupCount}`;
        return this._ctx.currentID;
    }
    static getID(ctx) {
        return ctx.currentID || `p-${SVGForm.domID++}`;
    }
    static scopeID(item) {
        return `item-${item.animateID}`;
    }
    static style(elem, styles) {
        let st = [];
        if (!styles["filled"])
            st.push("fill: none");
        if (!styles["stroked"])
            st.push("stroke: none");
        for (let k in styles) {
            if (styles.hasOwnProperty(k) && k != "filled" && k != "stroked") {
                let v = styles[k];
                if (v) {
                    if (!styles["filled"] && k.indexOf('fill') === 0) {
                        continue;
                    }
                    else if (!styles["stroked"] && k.indexOf('stroke') === 0) {
                        continue;
                    }
                    else {
                        st.push(`${k}: ${v}`);
                    }
                }
            }
        }
        return _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, { style: st.join(";") });
    }
    static point(ctx, pt, radius = 5, shape = "square") {
        if (shape === "circle") {
            return SVGForm.circle(ctx, pt, radius);
        }
        else {
            return SVGForm.square(ctx, pt, radius);
        }
    }
    point(pt, radius = 5, shape = "square") {
        this.nextID();
        SVGForm.point(this._ctx, pt, radius, shape);
        return this;
    }
    static circle(ctx, pt, radius = 10) {
        let elem = SVGSpace.svgElement(ctx.group, "circle", SVGForm.getID(ctx));
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            cx: pt[0],
            cy: pt[1],
            r: radius,
            'class': `pts-svgform pts-circle ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    circle(pts) {
        this.nextID();
        let p = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.iterToArray(pts);
        SVGForm.circle(this._ctx, p[0], p[1][0]);
        return this;
    }
    static arc(ctx, pt, radius, startAngle, endAngle, cc) {
        let elem = SVGSpace.svgElement(ctx.group, "path", SVGForm.getID(ctx));
        const start = new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(pt).toAngle(startAngle, radius, true);
        const end = new _Pt__WEBPACK_IMPORTED_MODULE_3__.Pt(pt).toAngle(endAngle, radius, true);
        const diff = _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundAngle(endAngle) - _Num__WEBPACK_IMPORTED_MODULE_1__.Geom.boundAngle(startAngle);
        let largeArc = (diff > _Util__WEBPACK_IMPORTED_MODULE_2__.Const.pi) ? true : false;
        if (cc)
            largeArc = !largeArc;
        const sweep = (cc) ? "0" : "1";
        const d = `M ${start[0]} ${start[1]} A ${radius} ${radius} 0 ${largeArc ? "1" : "0"} ${sweep} ${end[0]} ${end[1]}`;
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            d: d,
            'class': `pts-svgform pts-arc ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    arc(pt, radius, startAngle, endAngle, cc) {
        this.nextID();
        SVGForm.arc(this._ctx, pt, radius, startAngle, endAngle, cc);
        return this;
    }
    static square(ctx, pt, halfsize) {
        let elem = SVGSpace.svgElement(ctx.group, "rect", SVGForm.getID(ctx));
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            x: pt[0] - halfsize,
            y: pt[1] - halfsize,
            width: halfsize * 2,
            height: halfsize * 2,
            'class': `pts-svgform pts-square ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    square(pt, halfsize) {
        this.nextID();
        SVGForm.square(this._ctx, pt, halfsize);
        return this;
    }
    static line(ctx, pts) {
        let points = SVGForm.pointsString(pts);
        if (points.count < 2)
            return;
        if (points.count > 2)
            return SVGForm._poly(ctx, points.string, false);
        let elem = SVGSpace.svgElement(ctx.group, "line", SVGForm.getID(ctx));
        let p = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.iterToArray(pts);
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            x1: p[0][0],
            y1: p[0][1],
            x2: p[1][0],
            y2: p[1][1],
            'class': `pts-svgform pts-line ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    line(pts) {
        this.nextID();
        SVGForm.line(this._ctx, pts);
        return this;
    }
    static _poly(ctx, points, closePath = true) {
        let elem = SVGSpace.svgElement(ctx.group, ((closePath) ? "polygon" : "polyline"), SVGForm.getID(ctx));
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            points: points,
            'class': `pts-svgform pts-polygon ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    static pointsString(pts) {
        let points = "";
        let count = 0;
        for (let p of pts) {
            points += `${p[0]},${p[1]} `;
            count++;
        }
        return { string: points, count: count };
    }
    static polygon(ctx, pts) {
        let points = SVGForm.pointsString(pts);
        return SVGForm._poly(ctx, points.string, true);
    }
    polygon(pts) {
        this.nextID();
        SVGForm.polygon(this._ctx, pts);
        return this;
    }
    static rect(ctx, pts) {
        if (!_Util__WEBPACK_IMPORTED_MODULE_2__.Util.arrayCheck(pts))
            return;
        let elem = SVGSpace.svgElement(ctx.group, "rect", SVGForm.getID(ctx));
        let bound = _Pt__WEBPACK_IMPORTED_MODULE_3__.Group.fromArray(pts).boundingBox();
        let size = _Op__WEBPACK_IMPORTED_MODULE_4__.Rectangle.size(bound);
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            x: bound[0][0],
            y: bound[0][1],
            width: size[0],
            height: size[1],
            'class': `pts-svgform pts-rect ${ctx.currentClass}`,
        });
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    rect(pts) {
        this.nextID();
        SVGForm.rect(this._ctx, pts);
        return this;
    }
    static text(ctx, pt, txt) {
        let elem = SVGSpace.svgElement(ctx.group, "text", SVGForm.getID(ctx));
        _Dom__WEBPACK_IMPORTED_MODULE_5__.DOMSpace.setAttr(elem, {
            "pointer-events": "none",
            x: pt[0],
            y: pt[1],
            dx: 0, dy: 0,
            'class': `pts-svgform pts-text ${ctx.currentClass}`,
        });
        elem.textContent = txt;
        SVGForm.style(elem, ctx.style);
        return elem;
    }
    text(pt, txt) {
        this.nextID();
        SVGForm.text(this._ctx, pt, txt);
        return this;
    }
    log(txt) {
        this.fill("#000").stroke("#fff", 0.5).text([10, 14], txt);
        return this;
    }
}
SVGForm.groupID = 0;
SVGForm.domID = 0;
//# sourceMappingURL=Svg.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Typography.js":
/*!****************************************************!*\
  !*** ./node_modules/pts/dist/es2015/Typography.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typography": () => (/* binding */ Typography)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */

class Typography {
    static textWidthEstimator(fn, samples = ["M", "n", "."], distribution = [0.06, 0.8, 0.14]) {
        let m = samples.map(fn);
        let avg = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(distribution).dot(m);
        return (str) => str.length * avg;
    }
    static truncate(fn, str, width, tail = "") {
        let trim = Math.floor(str.length * Math.min(1, width / fn(str)));
        if (trim < str.length) {
            trim = Math.max(0, trim - tail.length);
            return [str.substr(0, trim) + tail, trim];
        }
        else {
            return [str, str.length];
        }
    }
    static fontSizeToBox(box, ratio = 1, byHeight = true) {
        let bound = _Pt__WEBPACK_IMPORTED_MODULE_0__.Bound.fromGroup(box);
        let h = byHeight ? bound.height : bound.width;
        let f = ratio * h;
        return function (box2) {
            let bound2 = _Pt__WEBPACK_IMPORTED_MODULE_0__.Bound.fromGroup(box2);
            let nh = (byHeight ? bound2.height : bound2.width) / h;
            return f * nh;
        };
    }
    static fontSizeToThreshold(threshold, direction = 0) {
        return function (defaultSize, val) {
            let d = defaultSize * val / threshold;
            if (direction < 0)
                return Math.min(d, defaultSize);
            if (direction > 0)
                return Math.max(d, defaultSize);
            return d;
        };
    }
}
//# sourceMappingURL=Typography.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/UI.js":
/*!********************************************!*\
  !*** ./node_modules/pts/dist/es2015/UI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIShape": () => (/* binding */ UIShape),
/* harmony export */   "UIPointerActions": () => (/* binding */ UIPointerActions),
/* harmony export */   "UI": () => (/* binding */ UI),
/* harmony export */   "UIButton": () => (/* binding */ UIButton),
/* harmony export */   "UIDragger": () => (/* binding */ UIDragger)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */


const UIShape = {
    rectangle: "rectangle", circle: "circle", polygon: "polygon", polyline: "polyline", line: "line"
};
const UIPointerActions = {
    up: "up", down: "down", move: "move", drag: "drag", uidrag: "uidrag", drop: "drop", uidrop: "uidrop", over: "over", out: "out", enter: "enter", leave: "leave", contextmenu: "contextmenu", all: "all"
};
class UI {
    constructor(group, shape, states = {}, id) {
        this._holds = new Map();
        this._group = _Pt__WEBPACK_IMPORTED_MODULE_0__.Group.fromArray(group);
        this._shape = shape;
        this._id = id === undefined ? `ui_${(UI._counter++)}` : id;
        this._states = states;
        this._actions = {};
    }
    static fromRectangle(group, states, id) {
        return new this(group, UIShape.rectangle, states, id);
    }
    static fromCircle(group, states, id) {
        return new this(group, UIShape.circle, states, id);
    }
    static fromPolygon(group, states, id) {
        return new this(group, UIShape.polygon, states, id);
    }
    static fromUI(ui, states, id) {
        return new this(ui.group, ui.shape, states || ui._states, id);
    }
    get id() { return this._id; }
    set id(d) { this._id = d; }
    get group() { return this._group; }
    set group(d) { this._group = d; }
    get shape() { return this._shape; }
    set shape(d) { this._shape = d; }
    state(key, value) {
        if (!key)
            return null;
        if (value !== undefined) {
            this._states[key] = value;
            return this;
        }
        return this._states[key];
    }
    on(type, fn) {
        if (!this._actions[type])
            this._actions[type] = [];
        return UI._addHandler(this._actions[type], fn);
    }
    off(type, which) {
        if (!this._actions[type])
            return false;
        if (which === undefined) {
            delete this._actions[type];
            return true;
        }
        else {
            return UI._removeHandler(this._actions[type], which);
        }
    }
    listen(type, p, evt) {
        if (this._actions[type] !== undefined) {
            if (this._within(p) || Array.from(this._holds.values()).indexOf(type) >= 0) {
                UI._trigger(this._actions[type], this, p, type, evt);
                return true;
            }
            else if (this._actions['all']) {
                UI._trigger(this._actions['all'], this, p, type, evt);
                return true;
            }
        }
        return false;
    }
    hold(type) {
        let newKey = Math.max(0, ...Array.from(this._holds.keys())) + 1;
        this._holds.set(newKey, type);
        return newKey;
    }
    unhold(key) {
        if (key !== undefined) {
            this._holds.delete(key);
        }
        else {
            this._holds.clear();
        }
    }
    static track(uis, type, p, evt) {
        for (let i = 0, len = uis.length; i < len; i++) {
            uis[i].listen(type, p, evt);
        }
    }
    render(fn) {
        fn(this._group, this._states);
    }
    toString() {
        return `UI ${this.group.toString}`;
    }
    _within(p) {
        let fn = null;
        if (this._shape === UIShape.rectangle) {
            fn = _Op__WEBPACK_IMPORTED_MODULE_1__.Rectangle.withinBound;
        }
        else if (this._shape === UIShape.circle) {
            fn = _Op__WEBPACK_IMPORTED_MODULE_1__.Circle.withinBound;
        }
        else if (this._shape === UIShape.polygon) {
            fn = _Op__WEBPACK_IMPORTED_MODULE_1__.Polygon.hasIntersectPoint;
        }
        else {
            return false;
        }
        return fn(this._group, p);
    }
    static _trigger(fns, target, pt, type, evt) {
        if (fns) {
            for (let i = 0, len = fns.length; i < len; i++) {
                if (fns[i])
                    fns[i](target, pt, type, evt);
            }
        }
    }
    static _addHandler(fns, fn) {
        if (fn) {
            fns.push(fn);
            return fns.length - 1;
        }
        else {
            return -1;
        }
    }
    static _removeHandler(fns, index) {
        if (index >= 0 && index < fns.length) {
            let temp = fns.length;
            fns.splice(index, 1);
            return (temp > fns.length);
        }
        else {
            return false;
        }
    }
}
UI._counter = 0;
class UIButton extends UI {
    constructor(group, shape, states = {}, id) {
        super(group, shape, states, id);
        this._hoverID = -1;
        if (states.hover === undefined)
            this._states['hover'] = false;
        if (states.clicks === undefined)
            this._states['clicks'] = 0;
        const UA = UIPointerActions;
        this.on(UA.up, (target, pt, type, evt) => {
            this.state('clicks', this._states.clicks + 1);
        });
        this.on(UA.move, (target, pt, type, evt) => {
            let hover = this._within(pt);
            if (hover && !this._states.hover) {
                this.state('hover', true);
                UI._trigger(this._actions[UA.enter], this, pt, UA.enter, evt);
                var _capID = this.hold(UA.move);
                this._hoverID = this.on(UA.move, (t, p) => {
                    if (!this._within(p) && !this.state('dragging')) {
                        this.state('hover', false);
                        UI._trigger(this._actions[UA.leave], this, pt, UA.leave, evt);
                        this.off(UA.move, this._hoverID);
                        this.unhold(_capID);
                    }
                });
            }
        });
    }
    onClick(fn) {
        return this.on(UIPointerActions.up, fn);
    }
    offClick(id) {
        return this.off(UIPointerActions.up, id);
    }
    onContextMenu(fn) {
        return this.on(UIPointerActions.contextmenu, fn);
    }
    offContextMenu(id) {
        return this.off(UIPointerActions.contextmenu, id);
    }
    onHover(enter, leave) {
        var ids = [undefined, undefined];
        if (enter)
            ids[0] = this.on(UIPointerActions.enter, enter);
        if (leave)
            ids[1] = this.on(UIPointerActions.leave, leave);
        return ids;
    }
    offHover(enterID, leaveID) {
        var s = [false, false];
        if (enterID === undefined || enterID >= 0)
            s[0] = this.off(UIPointerActions.enter, enterID);
        if (leaveID === undefined || leaveID >= 0)
            s[1] = this.off(UIPointerActions.leave, leaveID);
        return s;
    }
}
class UIDragger extends UIButton {
    constructor(group, shape, states = {}, id) {
        super(group, shape, states, id);
        this._draggingID = -1;
        this._moveHoldID = -1;
        this._dropHoldID = -1;
        this._upHoldID = -1;
        if (states.dragging === undefined)
            this._states['dragging'] = false;
        if (states.moved === undefined)
            this._states['moved'] = false;
        if (states.offset === undefined)
            this._states['offset'] = new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt();
        const UA = UIPointerActions;
        this.on(UA.down, (target, pt, type, evt) => {
            if (this._moveHoldID === -1) {
                this.state('dragging', true);
                this.state('offset', new _Pt__WEBPACK_IMPORTED_MODULE_0__.Pt(pt).subtract(target.group[0]));
                this._moveHoldID = this.hold(UA.move);
            }
            if (this._dropHoldID === -1) {
                this._dropHoldID = this.hold(UA.drop);
            }
            if (this._upHoldID === -1) {
                this._upHoldID = this.hold(UA.up);
            }
            if (this._draggingID === -1) {
                this._draggingID = this.on(UA.move, (t, p) => {
                    if (this.state('dragging')) {
                        UI._trigger(this._actions[UA.uidrag], t, p, UA.uidrag, evt);
                        this.state('moved', true);
                    }
                });
            }
        });
        const endDrag = (target, pt, type, evt) => {
            this.state('dragging', false);
            this.off(UA.move, this._draggingID);
            this._draggingID = -1;
            this.unhold(this._moveHoldID);
            this._moveHoldID = -1;
            this.unhold(this._dropHoldID);
            this._dropHoldID = -1;
            this.unhold(this._upHoldID);
            this._upHoldID = -1;
            if (this.state('moved')) {
                UI._trigger(this._actions[UA.uidrop], target, pt, UA.uidrop, evt);
                this.state('moved', false);
            }
        };
        this.on(UA.drop, endDrag);
        this.on(UA.up, endDrag);
        this.on(UA.out, endDrag);
    }
    onDrag(fn) {
        return this.on(UIPointerActions.uidrag, fn);
    }
    offDrag(id) {
        return this.off(UIPointerActions.uidrag, id);
    }
    onDrop(fn) {
        return this.on(UIPointerActions.uidrop, fn);
    }
    offDrop(id) {
        return this.off(UIPointerActions.uidrop, id);
    }
}
//# sourceMappingURL=UI.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/Util.js":
/*!**********************************************!*\
  !*** ./node_modules/pts/dist/es2015/Util.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Const": () => (/* binding */ Const),
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/*! Source code licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */

const Const = {
    xy: "xy",
    yz: "yz",
    xz: "xz",
    xyz: "xyz",
    horizontal: 0,
    vertical: 1,
    identical: 0,
    right: 4,
    bottom_right: 5,
    bottom: 6,
    bottom_left: 7,
    left: 8,
    top_left: 1,
    top: 2,
    top_right: 3,
    epsilon: 0.0001,
    max: Number.MAX_VALUE,
    min: Number.MIN_VALUE,
    pi: Math.PI,
    two_pi: 6.283185307179586,
    half_pi: 1.5707963267948966,
    quarter_pi: 0.7853981633974483,
    one_degree: 0.017453292519943295,
    rad_to_deg: 57.29577951308232,
    deg_to_rad: 0.017453292519943295,
    gravity: 9.81,
    newton: 0.10197,
    gaussian: 0.3989422804014327
};
class Util {
    static warnLevel(lv) {
        if (lv) {
            Util._warnLevel = lv;
        }
        return Util._warnLevel;
    }
    static getArgs(args) {
        if (args.length < 1)
            return [];
        let pos = [];
        let isArray = Array.isArray(args[0]) || ArrayBuffer.isView(args[0]);
        if (typeof args[0] === 'number') {
            pos = Array.prototype.slice.call(args);
        }
        else if (typeof args[0] === 'object' && !isArray) {
            let a = ["x", "y", "z", "w"];
            let p = args[0];
            for (let i = 0; i < a.length; i++) {
                if ((p.length && i >= p.length) || !(a[i] in p))
                    break;
                pos.push(p[a[i]]);
            }
        }
        else if (isArray) {
            pos = [].slice.call(args[0]);
        }
        return pos;
    }
    static warn(message = "error", defaultReturn = undefined) {
        if (Util.warnLevel() == "error") {
            throw new Error(message);
        }
        else if (Util.warnLevel() == "warn") {
            console.warn(message);
        }
        return defaultReturn;
    }
    static randomInt(range, start = 0) {
        Util.warn("Util.randomInt is deprecated. Please use `Num.randomRange`");
        return Math.floor(Math.random() * range) + start;
    }
    static split(pts, size, stride, loopBack = false, matchSize = true) {
        let chunks = [];
        let part = [];
        let st = stride || size;
        let index = 0;
        if (pts.length <= 0 || st <= 0)
            return [];
        while (index < pts.length) {
            part = [];
            for (let k = 0; k < size; k++) {
                if (loopBack) {
                    part.push(pts[(index + k) % pts.length]);
                }
                else {
                    if (index + k >= pts.length)
                        break;
                    part.push(pts[index + k]);
                }
            }
            index += st;
            if (!matchSize || (matchSize && part.length === size))
                chunks.push(part);
        }
        return chunks;
    }
    static flatten(pts, flattenAsGroup = true) {
        let arr = (flattenAsGroup) ? new _Pt__WEBPACK_IMPORTED_MODULE_0__.Group() : new Array();
        return arr.concat.apply(arr, pts);
    }
    static combine(a, b, op) {
        let result = [];
        for (let i = 0, len = a.length; i < len; i++) {
            for (let k = 0, lenB = b.length; k < lenB; k++) {
                result.push(op(a[i], b[k]));
            }
        }
        return result;
    }
    static zip(arrays) {
        let z = [];
        for (let i = 0, len = arrays[0].length; i < len; i++) {
            let p = [];
            for (let k = 0; k < arrays.length; k++) {
                p.push(arrays[k][i]);
            }
            z.push(p);
        }
        return z;
    }
    static stepper(max, min = 0, stride = 1, callback) {
        let c = min;
        return function () {
            c += stride;
            if (c >= max) {
                c = min + (c - max);
            }
            if (callback)
                callback(c);
            return c;
        };
    }
    static forRange(fn, range, start = 0, step = 1) {
        let temp = [];
        for (let i = start, len = range; i < len; i += step) {
            temp[i] = fn(i);
        }
        return temp;
    }
    static load(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                callback(request.responseText, true);
            }
            else {
                callback(`Server error (${request.status}) when loading "${url}"`, false);
            }
        };
        request.onerror = function () {
            callback(`Unknown network error`, false);
        };
        request.send();
    }
    static performance(avgFrames = 10) {
        let last = Date.now();
        let avg = [];
        return function () {
            const now = Date.now();
            avg.push(now - last);
            if (avg.length >= avgFrames)
                avg.shift();
            last = now;
            return Math.floor(avg.reduce((a, b) => a + b, 0) / avg.length);
        };
    }
    static arrayCheck(pts, minRequired = 2) {
        if (Array.isArray(pts) && pts.length < minRequired) {
            Util.warn(`Requires ${minRequired} or more Pts in this Group.`);
            return false;
        }
        return true;
    }
    static iterToArray(it) {
        return (!Array.isArray(it)) ? [...it] : it;
    }
}
Util._warnLevel = "mute";
//# sourceMappingURL=Util.js.map

/***/ }),

/***/ "./node_modules/pts/dist/es2015/_module.js":
/*!*************************************************!*\
  !*** ./node_modules/pts/dist/es2015/_module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasForm": () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__.CanvasForm),
/* harmony export */   "CanvasSpace": () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__.CanvasSpace),
/* harmony export */   "Create": () => (/* reexport safe */ _Create__WEBPACK_IMPORTED_MODULE_1__.Create),
/* harmony export */   "Delaunay": () => (/* reexport safe */ _Create__WEBPACK_IMPORTED_MODULE_1__.Delaunay),
/* harmony export */   "Noise": () => (/* reexport safe */ _Create__WEBPACK_IMPORTED_MODULE_1__.Noise),
/* harmony export */   "Font": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_2__.Font),
/* harmony export */   "Form": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_2__.Form),
/* harmony export */   "VisualForm": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_2__.VisualForm),
/* harmony export */   "Mat": () => (/* reexport safe */ _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Mat),
/* harmony export */   "Vec": () => (/* reexport safe */ _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__.Vec),
/* harmony export */   "Geom": () => (/* reexport safe */ _Num__WEBPACK_IMPORTED_MODULE_4__.Geom),
/* harmony export */   "Num": () => (/* reexport safe */ _Num__WEBPACK_IMPORTED_MODULE_4__.Num),
/* harmony export */   "Range": () => (/* reexport safe */ _Num__WEBPACK_IMPORTED_MODULE_4__.Range),
/* harmony export */   "Shaping": () => (/* reexport safe */ _Num__WEBPACK_IMPORTED_MODULE_4__.Shaping),
/* harmony export */   "Circle": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Circle),
/* harmony export */   "Curve": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Curve),
/* harmony export */   "Line": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Line),
/* harmony export */   "Polygon": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Polygon),
/* harmony export */   "Rectangle": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Rectangle),
/* harmony export */   "Triangle": () => (/* reexport safe */ _Op__WEBPACK_IMPORTED_MODULE_5__.Triangle),
/* harmony export */   "Bound": () => (/* reexport safe */ _Pt__WEBPACK_IMPORTED_MODULE_6__.Bound),
/* harmony export */   "Group": () => (/* reexport safe */ _Pt__WEBPACK_IMPORTED_MODULE_6__.Group),
/* harmony export */   "Pt": () => (/* reexport safe */ _Pt__WEBPACK_IMPORTED_MODULE_6__.Pt),
/* harmony export */   "MultiTouchSpace": () => (/* reexport safe */ _Space__WEBPACK_IMPORTED_MODULE_7__.MultiTouchSpace),
/* harmony export */   "Space": () => (/* reexport safe */ _Space__WEBPACK_IMPORTED_MODULE_7__.Space),
/* harmony export */   "Color": () => (/* reexport safe */ _Color__WEBPACK_IMPORTED_MODULE_8__.Color),
/* harmony export */   "Const": () => (/* reexport safe */ _Util__WEBPACK_IMPORTED_MODULE_9__.Const),
/* harmony export */   "Util": () => (/* reexport safe */ _Util__WEBPACK_IMPORTED_MODULE_9__.Util),
/* harmony export */   "DOMSpace": () => (/* reexport safe */ _Dom__WEBPACK_IMPORTED_MODULE_10__.DOMSpace),
/* harmony export */   "HTMLForm": () => (/* reexport safe */ _Dom__WEBPACK_IMPORTED_MODULE_10__.HTMLForm),
/* harmony export */   "HTMLSpace": () => (/* reexport safe */ _Dom__WEBPACK_IMPORTED_MODULE_10__.HTMLSpace),
/* harmony export */   "SVGForm": () => (/* reexport safe */ _Svg__WEBPACK_IMPORTED_MODULE_11__.SVGForm),
/* harmony export */   "SVGSpace": () => (/* reexport safe */ _Svg__WEBPACK_IMPORTED_MODULE_11__.SVGSpace),
/* harmony export */   "Typography": () => (/* reexport safe */ _Typography__WEBPACK_IMPORTED_MODULE_12__.Typography),
/* harmony export */   "Body": () => (/* reexport safe */ _Physics__WEBPACK_IMPORTED_MODULE_13__.Body),
/* harmony export */   "Particle": () => (/* reexport safe */ _Physics__WEBPACK_IMPORTED_MODULE_13__.Particle),
/* harmony export */   "World": () => (/* reexport safe */ _Physics__WEBPACK_IMPORTED_MODULE_13__.World),
/* harmony export */   "Sound": () => (/* reexport safe */ _Play__WEBPACK_IMPORTED_MODULE_14__.Sound),
/* harmony export */   "Tempo": () => (/* reexport safe */ _Play__WEBPACK_IMPORTED_MODULE_14__.Tempo),
/* harmony export */   "UI": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_15__.UI),
/* harmony export */   "UIButton": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_15__.UIButton),
/* harmony export */   "UIDragger": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_15__.UIDragger),
/* harmony export */   "UIPointerActions": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_15__.UIPointerActions),
/* harmony export */   "UIShape": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_15__.UIShape)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./node_modules/pts/dist/es2015/Canvas.js");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create */ "./node_modules/pts/dist/es2015/Create.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./node_modules/pts/dist/es2015/Form.js");
/* harmony import */ var _LinearAlgebra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearAlgebra */ "./node_modules/pts/dist/es2015/LinearAlgebra.js");
/* harmony import */ var _Num__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Num */ "./node_modules/pts/dist/es2015/Num.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Op */ "./node_modules/pts/dist/es2015/Op.js");
/* harmony import */ var _Pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pt */ "./node_modules/pts/dist/es2015/Pt.js");
/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Space */ "./node_modules/pts/dist/es2015/Space.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Color */ "./node_modules/pts/dist/es2015/Color.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util */ "./node_modules/pts/dist/es2015/Util.js");
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dom */ "./node_modules/pts/dist/es2015/Dom.js");
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Svg */ "./node_modules/pts/dist/es2015/Svg.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Typography */ "./node_modules/pts/dist/es2015/Typography.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Physics */ "./node_modules/pts/dist/es2015/Physics.js");
/* harmony import */ var _Play__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Play */ "./node_modules/pts/dist/es2015/Play.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UI */ "./node_modules/pts/dist/es2015/UI.js");
















//# sourceMappingURL=_module.js.map

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sketches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketches */ "./src/sketches/index.ts");


new _sketches__WEBPACK_IMPORTED_MODULE_1__.FallingOcean().run();


/***/ }),

/***/ "./src/sketches/FallingOcean/Bubble.ts":
/*!*********************************************!*\
  !*** ./src/sketches/FallingOcean/Bubble.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/sketches/FallingOcean/constants.ts");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tools */ "./src/tools/index.ts");



var Bubble = /** @class */ (function () {
    /**
     * Creates a new Bubble
     * @param pt   Center point for bubble
     * @param size The radius of the bubble
     */
    function Bubble(pt, size, color) {
        this.alphaCycle = 0.0;
        this.center = pt;
        this.size = size;
        this.color = color;
        this.desc = {
            magnitude: _constants__WEBPACK_IMPORTED_MODULE_1__.BUBBLE_MIN / size,
            maxAlpha: 1 / (_constants__WEBPACK_IMPORTED_MODULE_1__.BUBBLE_MAX - size),
        };
    }
    /**
     * [update description]
     * @param scale t value between 0 - 1
     * @param space The space in which the bubble exists
     */
    Bubble.prototype.update = function (scale, space) {
        // Fade over time
        this.alphaCycle = pts__WEBPACK_IMPORTED_MODULE_0__.Num.cycle(scale, pts__WEBPACK_IMPORTED_MODULE_0__.Shaping.elasticOut);
        // Shrink over time
        var sizeOffset = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(Math.abs(1 - scale), 0, 1, 0.99, 1);
        this.size *= sizeOffset;
        // Move center towards 'light' source over time
        var pointerOpposite = space.pointer
            .clone()
            .rotate2D(Math.PI, space.center);
        var lineTowardsLight = new pts__WEBPACK_IMPORTED_MODULE_0__.Group(this.center, pointerOpposite);
        var newCenter = lineTowardsLight.interpolate(pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(this.desc.magnitude, 0, 1, 0.0001, 0.015));
        this.center.to(newCenter);
    };
    /**
     * Renders the bubble
     * @param form The form that will be doing the rendering
     */
    Bubble.prototype.render = function (form, mode) {
        var fillAlpha = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(this.alphaCycle, 0, 1, 0, this.desc.maxAlpha + 0.1);
        var strokeAlpha = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(this.alphaCycle, 0, 1, 0, this.desc.maxAlpha);
        var circle = pts__WEBPACK_IMPORTED_MODULE_0__.Circle.fromCenter(this.center, this.size);
        form
            .fill((0,tools__WEBPACK_IMPORTED_MODULE_2__.rgbaFromHex)(this.color.fill, fillAlpha))
            .stroke((0,tools__WEBPACK_IMPORTED_MODULE_2__.rgbaFromHex)(this.color.stroke, strokeAlpha), 5)
            .composite(mode)
            .circle(circle);
    };
    return Bubble;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble);


/***/ }),

/***/ "./src/sketches/FallingOcean/BubbleGroup.ts":
/*!**************************************************!*\
  !*** ./src/sketches/FallingOcean/BubbleGroup.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");
/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bubble */ "./src/sketches/FallingOcean/Bubble.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/sketches/FallingOcean/constants.ts");



var BubbleGroup = /** @class */ (function () {
    function BubbleGroup(pointer, space, audioScale, compMode, color, renderTime) {
        var _this = this;
        this.bubbles = [];
        this.startTime = null;
        this.finalTime = null;
        this.scale = 0;
        this.pointer = pointer;
        this.renderTime = renderTime || 3000;
        this.space = space;
        this.compMode = compMode || 'source-over';
        this.color = color || { fill: '#fff', stroke: '#fff' };
        var boundingBoxSize = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(audioScale, 0, 1, 80, 800);
        var boundingBox = pts__WEBPACK_IMPORTED_MODULE_0__.Rectangle.fromCenter(this.pointer, boundingBoxSize);
        var minBubbles = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(audioScale, 0, 1, 0, 1);
        var maxBubbles = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(audioScale, 0, 1, 1, 4);
        var points = pts__WEBPACK_IMPORTED_MODULE_0__.Create.distributeRandom(pts__WEBPACK_IMPORTED_MODULE_0__.Bound.fromGroup(boundingBox), pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(minBubbles, maxBubbles));
        var minSize = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(audioScale, 0, 1, _constants__WEBPACK_IMPORTED_MODULE_2__.BUBBLE_MIN, _constants__WEBPACK_IMPORTED_MODULE_2__.BUBBLE_MIN + 20);
        var maxSize = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(audioScale, 0, 1, minSize, _constants__WEBPACK_IMPORTED_MODULE_2__.BUBBLE_MAX);
        points.forEach(function (point) {
            _this.bubbles.push(new _Bubble__WEBPACK_IMPORTED_MODULE_1__.default(point, pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(minSize, maxSize), _this.color));
        });
    }
    BubbleGroup.prototype.getBubbles = function () {
        return this.bubbles;
    };
    BubbleGroup.prototype.isFinished = function () {
        return this.scale >= 1;
    };
    /**
     * Update the bubble group
     * @param time currentTime
     */
    BubbleGroup.prototype.update = function (time) {
        var _this = this;
        if (this.startTime === null || this.finalTime === null) {
            this.startTime = time;
            this.finalTime = this.startTime + this.renderTime;
        }
        this.scale = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(time, this.startTime, this.finalTime, 0, 1);
        this.bubbles.forEach(function (bubble) { return bubble.update(_this.scale, _this.space); });
    };
    /**
     * Render the bubble group
     */
    BubbleGroup.prototype.render = function (form) {
        var _this = this;
        if (this.isFinished())
            return;
        this.bubbles.forEach(function (bubble) {
            bubble.render(form, _this.compMode);
        });
    };
    return BubbleGroup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BubbleGroup);


/***/ }),

/***/ "./src/sketches/FallingOcean/constants.ts":
/*!************************************************!*\
  !*** ./src/sketches/FallingOcean/constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "BUBBLE_MIN": () => (/* binding */ BUBBLE_MIN),
/* harmony export */   "BUBBLE_MAX": () => (/* binding */ BUBBLE_MAX),
/* harmony export */   "INTRO_TEXT": () => (/* binding */ INTRO_TEXT)
/* harmony export */ });
var COLORS = {
    black: '#000000',
    darkblue: '#041F60',
    bluegrotto: '#0476D0',
    cyan: '#2CEEF0',
    tiffanyblue: '#B4F5F0',
};
var BUBBLE_MIN = 5;
var BUBBLE_MAX = 120;
//'Talk, or yell, into the void',
var INTRO_TEXT = [
    'FALLING OCEAN',
    'Talk (or yell) into the void',
    'Music: Restless States by Daniel Birch',
    'Press spacebar to pause',
    'Microphone access required to work',
];


/***/ }),

/***/ "./src/sketches/FallingOcean/index.ts":
/*!********************************************!*\
  !*** ./src/sketches/FallingOcean/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallingOcean": () => (/* binding */ FallingOcean)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");
/* harmony import */ var _sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sketch */ "./src/sketches/sketch.ts");
/* harmony import */ var _BubbleGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BubbleGroup */ "./src/sketches/FallingOcean/BubbleGroup.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/sketches/FallingOcean/constants.ts");
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tools */ "./src/tools/index.ts");
/* harmony import */ var _daniel_birch_restless_states_constrained_desire_2_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daniel_birch_restless_states_constrained_desire_2.mp3 */ "./src/sketches/FallingOcean/daniel_birch_restless_states_constrained_desire_2.mp3");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var FallingOcean = /** @class */ (function (_super) {
    __extends(FallingOcean, _super);
    function FallingOcean() {
        var _this = _super.call(this, 'Falling Ocean') || this;
        _this.tempo = pts__WEBPACK_IMPORTED_MODULE_0__.Tempo.fromBeat(50);
        return _this;
    }
    /**
     * Add the ocean background
     */
    FallingOcean.prototype.addBackground = function () {
        var _this = this;
        (0,tools__WEBPACK_IMPORTED_MODULE_4__.solidBackground)(this.space, this.form, _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.black);
        var SINKING_TIME = 120 * 1000;
        this.space.add(function (time, _ftime, space) {
            var scale = time / SINKING_TIME;
            if (scale > 0.8)
                scale = 0.8; // end animation if past SINKING_TIME
            var gradient = _this.form.gradient([
                [pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(scale, 0, 1, 0.3, 0.92), _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.black],
                [pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(scale, 0, 1, 0.8, 0.99), _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.darkblue],
                [pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(scale, 0, 1, 0.92, 1), _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.bluegrotto],
                [1, _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.cyan],
            ]);
            var c1 = pts__WEBPACK_IMPORTED_MODULE_0__.Circle.fromCenter(space.center, Math.max(space.width, space.height));
            var oppositePointer = space.pointer
                .clone()
                .rotate2D(Math.PI, space.center);
            var c2 = pts__WEBPACK_IMPORTED_MODULE_0__.Circle.fromCenter(oppositePointer, 2);
            _this.form.fill(gradient(c1, c2)).circle(c1);
        });
    };
    /**
     * Add the bubbles
     */
    FallingOcean.prototype.drawBubbles = function () {
        var _this = this;
        var bubbleGroups = [];
        this.tempo.every(1).progress(function () {
            if (_this.micInput && _this.micInput.playable) {
                var freqDomain = _this.micInput.freqDomain();
                // Cut out low and high banks
                freqDomain = freqDomain.slice(1, 8);
                var freqAverage = freqDomain.reduce(function (a, b) { return a + b; }) / freqDomain.length;
                var audioScale = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(freqAverage, 0, 180, 0, 1);
                // Create bubbles more frequently, the louder the input
                if (Math.random() < audioScale)
                    bubbleGroups.push(new _BubbleGroup__WEBPACK_IMPORTED_MODULE_2__.default(_this.space.pointer, _this.space, audioScale, 'exclusion', { fill: _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.bluegrotto, stroke: _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.cyan }));
            }
        }, 0);
        this.space.add(function (time) {
            // Reverse bubble group to have it act like a stack
            // Run through bubble groups backwards, chopping down to maximum number of
            // elements, and removing those that are already finished. Otherwise,
            // Update and render
            var revBubbleGroup = __spreadArrays(bubbleGroups).reverse();
            for (var i = revBubbleGroup.length - 1; i > 0; --i) {
                if (revBubbleGroup[i].isFinished() || revBubbleGroup.length > 32) {
                    revBubbleGroup.splice(i, 1);
                }
                else {
                    revBubbleGroup[i].update(time);
                    revBubbleGroup[i].render(_this.form);
                }
            }
        });
    };
    /**
     * [drawText description]
     */
    FallingOcean.prototype.drawText = function () {
        var _this = this;
        var font = new pts__WEBPACK_IMPORTED_MODULE_0__.Font(80, 'Montserrat, Helvetica, sans-serif');
        var textTempo = this.tempo.every(100);
        var text = _constants__WEBPACK_IMPORTED_MODULE_3__.INTRO_TEXT[0];
        textTempo.start(function (count) {
            text = _constants__WEBPACK_IMPORTED_MODULE_3__.INTRO_TEXT[count];
            console.log(text);
            if (count > 1) {
                font.size = 28;
            }
            if (count >= _constants__WEBPACK_IMPORTED_MODULE_3__.INTRO_TEXT.length)
                return true;
        }, 0);
        textTempo.progress(function (count, t) {
            var y = pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(1 - t, 0, 1, _this.space.height - 60, _this.space.height - 120);
            var position = [60, y];
            var alpha = pts__WEBPACK_IMPORTED_MODULE_0__.Num.cycle(t);
            var color = (0,tools__WEBPACK_IMPORTED_MODULE_4__.rgbaFromHex)('#fff', alpha);
            _this.form.fill(color).stroke(color).font(font).text(position, text);
            if (count >= _constants__WEBPACK_IMPORTED_MODULE_3__.INTRO_TEXT.length)
                return true;
        }, 0);
    };
    /**
     * [connectMicrophone description]
     * @return [description]
     */
    FallingOcean.prototype.connectMicrophone = function () {
        var _this = this;
        pts__WEBPACK_IMPORTED_MODULE_0__.Sound.input({ audio: true }).then(function (micInput) {
            _this.micInput = micInput;
            _this.micInput.analyze(32, -50, -30);
            // Ensure the ctx isn't suspended
            if (_this.micInput.ctx.state === 'suspended') {
                _this.micInput.ctx.resume();
            }
        });
    };
    /**
     * [loadAudio description]
     */
    FallingOcean.prototype.loadAudio = function () {
        var _this = this;
        pts__WEBPACK_IMPORTED_MODULE_0__.Sound.load(_daniel_birch_restless_states_constrained_desire_2_mp3__WEBPACK_IMPORTED_MODULE_5__).then(function (song) {
            var ctx = song.ctx;
            var gainNode = ctx.createGain();
            song.connect(gainNode);
            song.setOutputNode(gainNode);
            gainNode.gain.value = 0.1;
            song.start();
            _this.song = song;
            _this.gainNode = gainNode;
        });
    };
    /**
     * [onPause description]
     */
    FallingOcean.prototype.onPause = function () {
        if (this.song.playing) {
            this.song.stop();
        }
        else {
            this.song.start();
        }
    };
    /**
     * Init Falling Ocean
     */
    FallingOcean.prototype.init = function () {
        this.connectMicrophone();
        this.loadAudio();
        this.addBackground();
        new tools__WEBPACK_IMPORTED_MODULE_4__.BackgroundParticles(this.space, this.form, _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.tiffanyblue, 'color-dodge').run();
        this.drawBubbles();
        this.space.add(this.tempo);
        this.drawText();
    };
    return FallingOcean;
}(_sketch__WEBPACK_IMPORTED_MODULE_1__.default));



/***/ }),

/***/ "./src/sketches/index.ts":
/*!*******************************!*\
  !*** ./src/sketches/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallingOcean": () => (/* reexport safe */ _FallingOcean_index_ts__WEBPACK_IMPORTED_MODULE_0__.FallingOcean)
/* harmony export */ });
/* harmony import */ var _FallingOcean_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FallingOcean/index.ts */ "./src/sketches/FallingOcean/index.ts");



/***/ }),

/***/ "./src/sketches/sketch.ts":
/*!********************************!*\
  !*** ./src/sketches/sketch.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Sketch = /** @class */ (function () {
    function Sketch(id, playOnce) {
        if (playOnce === void 0) { playOnce = 0; }
        this.id = id;
        this.space = new pts__WEBPACK_IMPORTED_MODULE_0__.CanvasSpace(Sketch.createElement()).setup({
            bgcolor: '#fff',
            resize: true,
            retina: true,
        });
        this.form = this.space.getForm();
        this.playOnce = playOnce;
        console.log(this.id + " has been created.");
    }
    Sketch.createElement = function () {
        var el = document.createElement('div');
        el.classList.add('canvasSpace');
        document.body.appendChild(el);
        return el;
    };
    Sketch.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.init();
                this.space.bindMouse().bindTouch();
                if (this.playOnce) {
                    this.space.playOnce(this.playOnce);
                }
                else {
                    this.space.play();
                }
                // Listen for keyboard actions
                document.addEventListener('keydown', function (e) {
                    var code = e.code;
                    switch (code) {
                        case 'Space': // Space Bar
                            _this.space.pause(true); // Boolean true makes this act as a toggle
                            _this.onPause();
                            break;
                    }
                });
                return [2 /*return*/, true];
            });
        });
    };
    return Sketch;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sketch);


/***/ }),

/***/ "./src/tools/BackgroundParticles.ts":
/*!******************************************!*\
  !*** ./src/tools/BackgroundParticles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundParticles": () => (/* binding */ BackgroundParticles)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/tools/index.ts");


var BackgroundParticles = /** @class */ (function () {
    function BackgroundParticles(space, form, color, composite) {
        this.pointDescriptions = [];
        this.space = space;
        this.form = form;
        this.color = color;
        this.composite = composite || 'source-over';
    }
    BackgroundParticles.prototype.run = function () {
        var _this = this;
        this.space.add({
            start: function (bound) {
                _this.points = pts__WEBPACK_IMPORTED_MODULE_0__.Create.distributeRandom(bound, pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(80, 200));
                _this.points.forEach(function () {
                    _this.pointDescriptions.push({
                        angle: pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(0, 2 * Math.PI),
                        magnitude: pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(0.1, 0.8),
                        minAlpha: pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(0, 0.4),
                        maxAlpha: pts__WEBPACK_IMPORTED_MODULE_0__.Num.randomRange(0.4, 0.8),
                    });
                });
            },
            animate: function (time, _ftime, space) {
                var cycle = pts__WEBPACK_IMPORTED_MODULE_0__.Num.cycle((time % 5000) / 5000, pts__WEBPACK_IMPORTED_MODULE_0__.Shaping.sineInOut);
                var bound = pts__WEBPACK_IMPORTED_MODULE_0__.Bound.fromGroup((0,___WEBPACK_IMPORTED_MODULE_1__.fullWidthRect)(space));
                _this.points.forEach(function (point, index) {
                    var desc = _this.pointDescriptions[index];
                    point.toAngle(desc.angle, desc.magnitude, true);
                    // If point is outside of bound, move it to random point within bound
                    if (!pts__WEBPACK_IMPORTED_MODULE_0__.Rectangle.withinBound(bound, point)) {
                        point.to(pts__WEBPACK_IMPORTED_MODULE_0__.Create.distributeRandom(bound, 1)[0]);
                    }
                    _this.form
                        .composite(_this.composite)
                        .fillOnly((0,___WEBPACK_IMPORTED_MODULE_1__.rgbaFromHex)(_this.color, pts__WEBPACK_IMPORTED_MODULE_0__.Num.mapToRange(cycle, 0, 1, desc.minAlpha, desc.maxAlpha)))
                        .point(point, 1, 'circle');
                });
            },
        });
    };
    return BackgroundParticles;
}());



/***/ }),

/***/ "./src/tools/CompositeSwitcher.ts":
/*!****************************************!*\
  !*** ./src/tools/CompositeSwitcher.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositeSwitcher": () => (/* binding */ CompositeSwitcher)
/* harmony export */ });
var CompositeSwitcher = /** @class */ (function () {
    function CompositeSwitcher(space, color, position) {
        var _this = this;
        this.modes = [
            'source-over',
            'source-in',
            'source-out',
            'source-atop',
            'destination-over',
            'destination-in',
            'destination-out',
            'destination-atop',
            'lighter',
            'copy',
            'xor',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity',
        ].reverse();
        this.curMode = 0;
        this.space = space;
        this.form = space.getForm();
        this.fontColor = color || '#fff';
        this.position = position || [20, 20];
        document.addEventListener('keydown', function (e) {
            _this.updateMode(e);
        });
        this.drawModeTitle();
    }
    CompositeSwitcher.prototype.updateMode = function (event) {
        switch (event.code) {
            case 'ArrowUp':
                this.curMode =
                    this.curMode + 1 >= this.modes.length ? 0 : this.curMode + 1;
                break;
            case 'ArrowDown':
                this.curMode =
                    this.curMode - 1 < 0 ? this.modes.length - 1 : this.curMode - 1;
                break;
        }
    };
    CompositeSwitcher.prototype.getCurMode = function () {
        return this.modes[this.curMode];
    };
    CompositeSwitcher.prototype.drawModeTitle = function () {
        var _this = this;
        this.space.add(function () {
            _this.form
                .font(18)
                .fillOnly(_this.fontColor)
                .text(_this.position, _this.modes[_this.curMode]);
        });
    };
    return CompositeSwitcher;
}());



/***/ }),

/***/ "./src/tools/fullWidthRect.ts":
/*!************************************!*\
  !*** ./src/tools/fullWidthRect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullWidthRect": () => (/* binding */ fullWidthRect)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");

/**
 * Creates a rectangle encompassing space
 * @param  space The space for the rectangle to cover
 * @return       The resulting rectangle
 */
function fullWidthRect(space) {
    return pts__WEBPACK_IMPORTED_MODULE_0__.Rectangle.from([0, 0], space.width, space.height);
}


/***/ }),

/***/ "./src/tools/index.ts":
/*!****************************!*\
  !*** ./src/tools/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundParticles": () => (/* reexport safe */ _BackgroundParticles__WEBPACK_IMPORTED_MODULE_0__.BackgroundParticles),
/* harmony export */   "fullWidthRect": () => (/* reexport safe */ _fullWidthRect__WEBPACK_IMPORTED_MODULE_1__.fullWidthRect),
/* harmony export */   "rgbaFromHex": () => (/* reexport safe */ _rgbaFromHex__WEBPACK_IMPORTED_MODULE_2__.rgbaFromHex),
/* harmony export */   "solidBackground": () => (/* reexport safe */ _solidBackground__WEBPACK_IMPORTED_MODULE_3__.solidBackground),
/* harmony export */   "CompositeSwitcher": () => (/* reexport safe */ _CompositeSwitcher__WEBPACK_IMPORTED_MODULE_4__.CompositeSwitcher)
/* harmony export */ });
/* harmony import */ var _BackgroundParticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundParticles */ "./src/tools/BackgroundParticles.ts");
/* harmony import */ var _fullWidthRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullWidthRect */ "./src/tools/fullWidthRect.ts");
/* harmony import */ var _rgbaFromHex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rgbaFromHex */ "./src/tools/rgbaFromHex.ts");
/* harmony import */ var _solidBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solidBackground */ "./src/tools/solidBackground.ts");
/* harmony import */ var _CompositeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompositeSwitcher */ "./src/tools/CompositeSwitcher.ts");







/***/ }),

/***/ "./src/tools/rgbaFromHex.ts":
/*!**********************************!*\
  !*** ./src/tools/rgbaFromHex.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbaFromHex": () => (/* binding */ rgbaFromHex)
/* harmony export */ });
/* harmony import */ var pts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pts */ "./node_modules/pts/dist/es2015/_module.js");

/**
 * Converts a hex with provided alpha into RGBA value
 * @param  hex   Hex color string
 * @param  alpha Alpha value
 * @return       RGBA representation of provided values
 */
function rgbaFromHex(hex, alpha) {
    var color = pts__WEBPACK_IMPORTED_MODULE_0__.Color.fromHex(hex);
    color.alpha = alpha;
    return color.rgba;
}


/***/ }),

/***/ "./src/tools/solidBackground.ts":
/*!**************************************!*\
  !*** ./src/tools/solidBackground.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solidBackground": () => (/* binding */ solidBackground)
/* harmony export */ });
/* harmony import */ var tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tools */ "./src/tools/index.ts");

function solidBackground(space, form, color) {
    var background;
    space.add({
        start: function () {
            background = (0,tools__WEBPACK_IMPORTED_MODULE_0__.fullWidthRect)(space);
        },
        animate: function () {
            form.fill(color).stroke(color).rect(background);
        },
    });
}


/***/ }),

/***/ "./src/sketches/FallingOcean/daniel_birch_restless_states_constrained_desire_2.mp3":
/*!*****************************************************************************************!*\
  !*** ./src/sketches/FallingOcean/daniel_birch_restless_states_constrained_desire_2.mp3 ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "675f9177ca0d7094d0b2.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L0NhbnZhcy5qcyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL25vZGVfbW9kdWxlcy9wdHMvZGlzdC9lczIwMTUvQ29sb3IuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L0NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL25vZGVfbW9kdWxlcy9wdHMvZGlzdC9lczIwMTUvRG9tLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9Gb3JtLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9MaW5lYXJBbGdlYnJhLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9OdW0uanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L09wLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9QaHlzaWNzLmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9QbGF5LmpzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vbm9kZV9tb2R1bGVzL3B0cy9kaXN0L2VzMjAxNS9QdC5qcyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL25vZGVfbW9kdWxlcy9wdHMvZGlzdC9lczIwMTUvU3BhY2UuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L1N2Zy5qcyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL25vZGVfbW9kdWxlcy9wdHMvZGlzdC9lczIwMTUvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL25vZGVfbW9kdWxlcy9wdHMvZGlzdC9lczIwMTUvVUkuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L1V0aWwuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvcHRzL2Rpc3QvZXMyMDE1L19tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvc2tldGNoZXMvRmFsbGluZ09jZWFuL0J1YmJsZS50cyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy9za2V0Y2hlcy9GYWxsaW5nT2NlYW4vQnViYmxlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvc2tldGNoZXMvRmFsbGluZ09jZWFuL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy9za2V0Y2hlcy9GYWxsaW5nT2NlYW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvc2tldGNoZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvc2tldGNoZXMvc2tldGNoLnRzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94Ly4vc3JjL3Rvb2xzL0JhY2tncm91bmRQYXJ0aWNsZXMudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvdG9vbHMvQ29tcG9zaXRlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvLi9zcmMvdG9vbHMvZnVsbFdpZHRoUmVjdC50cyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy90b29scy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy90b29scy9yZ2JhRnJvbUhleC50cyIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC8uL3NyYy90b29scy9zb2xpZEJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vQHBya2lyYnkvcHRzLXNhbmRib3gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AcHJraXJieS9wdHMtc2FuZGJveC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0BwcmtpcmJ5L3B0cy1zYW5kYm94L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGVBQWUsY0FBYyxHQUFHLGtCQUFrQix1QkFBdUIsV0FBVyxjQUFjLGFBQWEsWUFBWSxpQkFBaUIsR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLCtCQUErQixlQUFlLGNBQWMsR0FBRyxrQkFBa0IsdUJBQXVCLFdBQVcsY0FBYyxhQUFhLFlBQVksaUJBQWlCLEdBQUcscUJBQXFCO0FBQ3pqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQ0FBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQ0FBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzVRQTtBQUM2QjtBQUN0QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6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QUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2FudmFzU3BhY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNhbnZhc1NwYWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IE11bHRpVG91Y2hTcGFjZSB9IGZyb20gJy4vU3BhY2UnO1xuaW1wb3J0IHsgVmlzdWFsRm9ybSwgRm9udCB9IGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCB7IFB0LCBHcm91cCwgQm91bmQgfSBmcm9tIFwiLi9QdFwiO1xuaW1wb3J0IHsgQ29uc3QsIFV0aWwgfSBmcm9tIFwiLi9VdGlsXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IGFzIFR5cG8gfSBmcm9tIFwiLi9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tICcuL09wJztcbmV4cG9ydCBjbGFzcyBDYW52YXNTcGFjZSBleHRlbmRzIE11bHRpVG91Y2hTcGFjZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbSwgY2FsbGJhY2spIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcGl4ZWxTY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuX2F1dG9SZXNpemUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9iZ2NvbG9yID0gXCIjZTFlOWYwXCI7XG4gICAgICAgIHRoaXMuX29mZnNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsUmVzaXplID0gZmFsc2U7XG4gICAgICAgIHZhciBfc2VsZWN0b3IgPSBudWxsO1xuICAgICAgICB2YXIgX2V4aXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IFwicHRcIjtcbiAgICAgICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICBfc2VsZWN0b3IgPSBlbGVtO1xuICAgICAgICAgICAgdGhpcy5pZCA9IFwicHRzX2V4aXN0aW5nX3NwYWNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBlbGVtO1xuICAgICAgICAgICAgaWQgPSAoZWxlbVswXSA9PT0gXCIjXCIgfHwgZWxlbVswXSA9PT0gXCIuXCIpID8gZWxlbSA6IFwiI1wiICsgZWxlbTtcbiAgICAgICAgICAgIF9zZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgX2V4aXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9zZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fY3JlYXRlRWxlbWVudChcImRpdlwiLCB0aGlzLmlkICsgXCJfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gdGhpcy5fY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9jb250YWluZXIpO1xuICAgICAgICAgICAgX2V4aXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfc2VsZWN0b3Iubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSBcImNhbnZhc1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfc2VsZWN0b3I7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSB0aGlzLl9jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHRoaXMuaWQgKyBcIl9jYW52YXNcIik7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxSZXNpemUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gX3NlbGVjdG9yO1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gX3NlbGVjdG9yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9hdXRvUmVzaXplID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLl9yZWFkeS5iaW5kKHRoaXMsIGNhbGxiYWNrKSwgMTAwKTtcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIF9jcmVhdGVFbGVtZW50KGVsZW0gPSBcImRpdlwiLCBpZCkge1xuICAgICAgICBsZXQgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgX3JlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgaW5pdGlhdGUgIyR7dGhpcy5pZH0gZWxlbWVudGApO1xuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVzaXplSGFuZGxlcihudWxsKTtcbiAgICAgICAgdGhpcy5jbGVhcih0aGlzLl9iZ2NvbG9yKTtcbiAgICAgICAgdGhpcy5fY2FudmFzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVhZHlcIikpO1xuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNba10uc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1trXS5zdGFydCh0aGlzLmJvdW5kLmNsb25lKCksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BvaW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgdGhpcy5faW5pdGlhbFJlc2l6ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzLmJvdW5kLCB0aGlzLl9jYW52YXMpO1xuICAgIH1cbiAgICBzZXR1cChvcHQpIHtcbiAgICAgICAgaWYgKG9wdC5iZ2NvbG9yKVxuICAgICAgICAgICAgdGhpcy5fYmdjb2xvciA9IG9wdC5iZ2NvbG9yO1xuICAgICAgICB0aGlzLmF1dG9SZXNpemUgPSAob3B0LnJlc2l6ZSAhPSB1bmRlZmluZWQpID8gb3B0LnJlc2l6ZSA6IGZhbHNlO1xuICAgICAgICBpZiAob3B0LnJldGluYSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCByMSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgICAgICAgICBsZXQgcjIgPSB0aGlzLl9jdHgud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLl9jdHgubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLl9jdHgubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IHRoaXMuX2N0eC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCB0aGlzLl9jdHguYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xuICAgICAgICAgICAgdGhpcy5fcGl4ZWxTY2FsZSA9IE1hdGgubWF4KDEsIHIxIC8gcjIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLl9vZmZzY3JlZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fb2ZmQ2FudmFzID0gdGhpcy5fY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB0aGlzLmlkICsgXCJfb2Zmc2NyZWVuXCIpO1xuICAgICAgICAgICAgdGhpcy5fb2ZmQ3R4ID0gdGhpcy5fb2ZmQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vZmZzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0IGF1dG9SZXNpemUoYXV0bykge1xuICAgICAgICB0aGlzLl9hdXRvUmVzaXplID0gYXV0bztcbiAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGF1dG9SZXNpemUoKSB7IHJldHVybiB0aGlzLl9hdXRvUmVzaXplOyB9XG4gICAgcmVzaXplKGIsIGV2dCkge1xuICAgICAgICB0aGlzLmJvdW5kID0gYjtcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5ib3VuZC5zaXplLnggKiB0aGlzLl9waXhlbFNjYWxlO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5ib3VuZC5zaXplLnkgKiB0aGlzLl9waXhlbFNjYWxlO1xuICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuYm91bmQuc2l6ZS54KSArIFwicHhcIjtcbiAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5ib3VuZC5zaXplLnkpICsgXCJweFwiO1xuICAgICAgICBpZiAodGhpcy5fb2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLl9vZmZDYW52YXMud2lkdGggPSB0aGlzLmJvdW5kLnNpemUueCAqIHRoaXMuX3BpeGVsU2NhbGU7XG4gICAgICAgICAgICB0aGlzLl9vZmZDYW52YXMuaGVpZ2h0ID0gdGhpcy5ib3VuZC5zaXplLnkgKiB0aGlzLl9waXhlbFNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9waXhlbFNjYWxlICE9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0eC5zY2FsZSh0aGlzLl9waXhlbFNjYWxlLCB0aGlzLl9waXhlbFNjYWxlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZDdHguc2NhbGUodGhpcy5fcGl4ZWxTY2FsZSwgdGhpcy5fcGl4ZWxTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMucGxheWVyc1trXTtcbiAgICAgICAgICAgICAgICBpZiAocC5yZXNpemUpXG4gICAgICAgICAgICAgICAgICAgIHAucmVzaXplKHRoaXMuYm91bmQsIGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5fY3R4KTtcbiAgICAgICAgaWYgKGV2dCAmJiAhdGhpcy5pc1BsYXlpbmcpXG4gICAgICAgICAgICB0aGlzLnBsYXlPbmNlKDApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX3Jlc2l6ZUhhbmRsZXIoZXZ0KSB7XG4gICAgICAgIGxldCBiID0gKHRoaXMuX2F1dG9SZXNpemUgfHwgdGhpcy5faW5pdGlhbFJlc2l6ZSkgPyB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB0aGlzLl9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICBsZXQgYm94ID0gQm91bmQuZnJvbUJvdW5kaW5nUmVjdChiKTtcbiAgICAgICAgICAgIGJveC5jZW50ZXIgPSBib3guY2VudGVyLmFkZCh3aW5kb3cucGFnZVhPZmZzZXQsIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZShib3gsIGV2dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0IGJhY2tncm91bmQoYmcpIHsgdGhpcy5fYmdjb2xvciA9IGJnOyB9XG4gICAgZ2V0IGJhY2tncm91bmQoKSB7IHJldHVybiB0aGlzLl9iZ2NvbG9yOyB9XG4gICAgZ2V0IHBpeGVsU2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9waXhlbFNjYWxlO1xuICAgIH1cbiAgICBnZXQgaGFzT2Zmc2NyZWVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2NyZWVuO1xuICAgIH1cbiAgICBnZXQgb2Zmc2NyZWVuQ3R4KCkgeyByZXR1cm4gdGhpcy5fb2ZmQ3R4OyB9XG4gICAgZ2V0IG9mZnNjcmVlbkNhbnZhcygpIHsgcmV0dXJuIHRoaXMuX29mZkNhbnZhczsgfVxuICAgIGdldEZvcm0oKSB7IHJldHVybiBuZXcgQ2FudmFzRm9ybSh0aGlzKTsgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH1cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cbiAgICBnZXQgcmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICAgIH1cbiAgICBnZXQgY3R4KCkgeyByZXR1cm4gdGhpcy5fY3R4OyB9XG4gICAgY2xlYXIoYmcpIHtcbiAgICAgICAgaWYgKGJnKVxuICAgICAgICAgICAgdGhpcy5fYmdjb2xvciA9IGJnO1xuICAgICAgICBsZXQgbGFzdENvbG9yID0gdGhpcy5fY3R4LmZpbGxTdHlsZTtcbiAgICAgICAgaWYgKHRoaXMuX2JnY29sb3IgJiYgdGhpcy5fYmdjb2xvciAhPSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLl9iZ2NvbG9yO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxSZWN0KC0xLCAtMSwgdGhpcy5fY2FudmFzLndpZHRoICsgMSwgdGhpcy5fY2FudmFzLmhlaWdodCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgtMSwgLTEsIHRoaXMuX2NhbnZhcy53aWR0aCArIDEsIHRoaXMuX2NhbnZhcy5oZWlnaHQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gbGFzdENvbG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXJPZmZzY3JlZW4oYmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX29mZnNjcmVlbikge1xuICAgICAgICAgICAgaWYgKGJnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2ZmQ3R4LmZpbGxTdHlsZSA9IGJnO1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZkN0eC5maWxsUmVjdCgtMSwgLTEsIHRoaXMuX2NhbnZhcy53aWR0aCArIDEsIHRoaXMuX2NhbnZhcy5oZWlnaHQgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZkN0eC5jbGVhclJlY3QoLTEsIC0xLCB0aGlzLl9vZmZDYW52YXMud2lkdGggKyAxLCB0aGlzLl9vZmZDYW52YXMuaGVpZ2h0ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBsYXlJdGVtcyh0aW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguc2F2ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29mZnNjcmVlbilcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZDdHguc2F2ZSgpO1xuICAgICAgICAgICAgc3VwZXIucGxheUl0ZW1zKHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzY3JlZW4pXG4gICAgICAgICAgICAgICAgdGhpcy5fb2ZmQ3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMuX2N0eCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ2FudmFzRm9ybSBleHRlbmRzIFZpc3VhbEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKHNwYWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3N0eWxlID0ge1xuICAgICAgICAgICAgZmlsbFN0eWxlOiBcIiNmMDNcIiwgc3Ryb2tlU3R5bGU6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLCBsaW5lSm9pbjogXCJiZXZlbFwiLCBsaW5lQ2FwOiBcImJ1dHRcIixcbiAgICAgICAgICAgIGdsb2JhbEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NwYWNlID0gc3BhY2U7XG4gICAgICAgIHRoaXMuX3NwYWNlLmFkZCh7IHN0YXJ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fc3BhY2UuY3R4O1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSB0aGlzLl9zdHlsZS5maWxsU3R5bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fc3R5bGUuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVKb2luID0gXCJiZXZlbFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5fZm9udC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBnZXQgc3BhY2UoKSB7IHJldHVybiB0aGlzLl9zcGFjZTsgfVxuICAgIGdldCBjdHgoKSB7IHJldHVybiB0aGlzLl9zcGFjZS5jdHg7IH1cbiAgICB1c2VPZmZzY3JlZW4ob2ZmID0gdHJ1ZSwgY2xlYXIgPSBmYWxzZSkge1xuICAgICAgICBpZiAoY2xlYXIpXG4gICAgICAgICAgICB0aGlzLl9zcGFjZS5jbGVhck9mZnNjcmVlbigodHlwZW9mIGNsZWFyID09IFwic3RyaW5nXCIpID8gY2xlYXIgOiBudWxsKTtcbiAgICAgICAgdGhpcy5fY3R4ID0gKHRoaXMuX3NwYWNlLmhhc09mZnNjcmVlbiAmJiBvZmYpID8gdGhpcy5fc3BhY2Uub2Zmc2NyZWVuQ3R4IDogdGhpcy5fc3BhY2UuY3R4O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyT2Zmc2NyZWVuKG9mZnNldCA9IFswLCAwXSkge1xuICAgICAgICBpZiAodGhpcy5fc3BhY2UuaGFzT2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGFjZS5jdHguZHJhd0ltYWdlKHRoaXMuX3NwYWNlLm9mZnNjcmVlbkNhbnZhcywgb2Zmc2V0WzBdLCBvZmZzZXRbMV0sIHRoaXMuX3NwYWNlLndpZHRoLCB0aGlzLl9zcGFjZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFscGhhKGEpIHtcbiAgICAgICAgdGhpcy5fY3R4Lmdsb2JhbEFscGhhID0gYTtcbiAgICAgICAgdGhpcy5fc3R5bGUuZ2xvYmFsQWxwaGEgPSBhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbChjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5maWxsZWQgPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc3R5bGUuZmlsbFN0eWxlID0gYztcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHJva2UoYywgd2lkdGgsIGxpbmVqb2luLCBsaW5lY2FwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5zdHJva2VkID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZS5zdHJva2VTdHlsZSA9IGM7XG4gICAgICAgICAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSBjO1xuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlLmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpbmVqb2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVKb2luID0gbGluZWpvaW47XG4gICAgICAgICAgICAgICAgdGhpcy5fc3R5bGUubGluZUpvaW4gPSBsaW5lam9pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW5lY2FwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVDYXAgPSBsaW5lY2FwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlLmxpbmVDYXAgPSBsaW5lY2FwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBncmFkaWVudChzdG9wcykge1xuICAgICAgICBsZXQgdmFscyA9IFtdO1xuICAgICAgICBpZiAoc3RvcHMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHN0b3BzLnB1c2goWzAuOTksIFwiIzAwMFwiXSwgWzEsIFwiIzAwMFwiXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdG9wcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHQgPSB0eXBlb2Ygc3RvcHNbaV0gPT09ICdzdHJpbmcnID8gaSAqICgxIC8gKHN0b3BzLmxlbmd0aCAtIDEpKSA6IHN0b3BzW2ldWzBdO1xuICAgICAgICAgICAgbGV0IHYgPSB0eXBlb2Ygc3RvcHNbaV0gPT09ICdzdHJpbmcnID8gc3RvcHNbaV0gOiBzdG9wc1tpXVsxXTtcbiAgICAgICAgICAgIHZhbHMucHVzaChbdCwgdl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXJlYTEsIGFyZWEyKSA9PiB7XG4gICAgICAgICAgICBhcmVhMSA9IGFyZWExLm1hcChhID0+IGEuYWJzKCkpO1xuICAgICAgICAgICAgaWYgKGFyZWEyKVxuICAgICAgICAgICAgICAgIGFyZWEyLm1hcChhID0+IGEuYWJzKCkpO1xuICAgICAgICAgICAgbGV0IGdyYWQgPSBhcmVhMlxuICAgICAgICAgICAgICAgID8gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoYXJlYTFbMF1bMF0sIGFyZWExWzBdWzFdLCBhcmVhMVsxXVswXSwgYXJlYTJbMF1bMF0sIGFyZWEyWzBdWzFdLCBhcmVhMlsxXVswXSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KGFyZWExWzBdWzBdLCBhcmVhMVswXVsxXSwgYXJlYTFbMV1bMF0sIGFyZWExWzFdWzFdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ3JhZC5hZGRDb2xvclN0b3AodmFsc1tpXVswXSwgdmFsc1tpXVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3JhZDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9zaXRlKG1vZGUgPSAnc291cmNlLW92ZXInKSB7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IG1vZGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGlwKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGlwKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXNoKHNlZ21lbnRzID0gdHJ1ZSwgb2Zmc2V0ID0gMCkge1xuICAgICAgICBpZiAoIXNlZ21lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguc2V0TGluZURhc2goW10pO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVEYXNoT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWdtZW50cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gWzUsIDVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY3R4LnNldExpbmVEYXNoKFtzZWdtZW50c1swXSwgc2VnbWVudHNbMV1dKTtcbiAgICAgICAgICAgIHRoaXMuX2N0eC5saW5lRGFzaE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZm9udChzaXplT3JGb250LCB3ZWlnaHQsIHN0eWxlLCBsaW5lSGVpZ2h0LCBmYW1pbHkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplT3JGb250ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbnQuc2l6ZSA9IHNpemVPckZvbnQ7XG4gICAgICAgICAgICBpZiAoZmFtaWx5KVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbnQuZmFjZSA9IGZhbWlseTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC53ZWlnaHQgPSB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgaWYgKGxpbmVIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbnQgPSBzaXplT3JGb250O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N0eC5mb250ID0gdGhpcy5fZm9udC52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2VzdGltYXRlVGV4dFdpZHRoKVxuICAgICAgICAgICAgdGhpcy5mb250V2lkdGhFc3RpbWF0ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZvbnRXaWR0aEVzdGltYXRlKGVzdGltYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9lc3RpbWF0ZVRleHRXaWR0aCA9IChlc3RpbWF0ZSkgPyBUeXBvLnRleHRXaWR0aEVzdGltYXRvcigoKGMpID0+IHRoaXMuX2N0eC5tZWFzdXJlVGV4dChjKS53aWR0aCkpIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VGV4dFdpZHRoKGMpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5fZXN0aW1hdGVUZXh0V2lkdGgpID8gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KGMgKyBcIiAuXCIpLndpZHRoIDogdGhpcy5fZXN0aW1hdGVUZXh0V2lkdGgoYyk7XG4gICAgfVxuICAgIF90ZXh0VHJ1bmNhdGUoc3RyLCB3aWR0aCwgdGFpbCA9IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIFR5cG8udHJ1bmNhdGUodGhpcy5nZXRUZXh0V2lkdGguYmluZCh0aGlzKSwgc3RyLCB3aWR0aCwgdGFpbCk7XG4gICAgfVxuICAgIF90ZXh0QWxpZ24oYm94LCB2ZXJ0aWNhbCwgb2Zmc2V0LCBjZW50ZXIpIHtcbiAgICAgICAgbGV0IF9ib3ggPSBVdGlsLml0ZXJUb0FycmF5KGJveCk7XG4gICAgICAgIGlmICghVXRpbC5hcnJheUNoZWNrKF9ib3gpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIWNlbnRlcilcbiAgICAgICAgICAgIGNlbnRlciA9IFJlY3RhbmdsZS5jZW50ZXIoX2JveCk7XG4gICAgICAgIHZhciBweCA9IF9ib3hbMF1bMF07XG4gICAgICAgIGlmICh0aGlzLl9jdHgudGV4dEFsaWduID09IFwiZW5kXCIgfHwgdGhpcy5fY3R4LnRleHRBbGlnbiA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHB4ID0gX2JveFsxXVswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jdHgudGV4dEFsaWduID09IFwiY2VudGVyXCIgfHwgdGhpcy5fY3R4LnRleHRBbGlnbiA9PSBcIm1pZGRsZVwiKSB7XG4gICAgICAgICAgICBweCA9IGNlbnRlclswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHkgPSBjZW50ZXJbMV07XG4gICAgICAgIGlmICh2ZXJ0aWNhbCA9PSBcInRvcFwiIHx8IHZlcnRpY2FsID09IFwic3RhcnRcIikge1xuICAgICAgICAgICAgcHkgPSBfYm94WzBdWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZlcnRpY2FsID09IFwiZW5kXCIgfHwgdmVydGljYWwgPT0gXCJib3R0b21cIikge1xuICAgICAgICAgICAgcHkgPSBfYm94WzFdWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAob2Zmc2V0KSA/IG5ldyBQdChweCArIG9mZnNldFswXSwgcHkgKyBvZmZzZXRbMV0pIDogbmV3IFB0KHB4LCBweSk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuX3N0eWxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3R5bGUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHhba10gPSB0aGlzLl9zdHlsZVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mb250ID0gbmV3IEZvbnQoKTtcbiAgICAgICAgdGhpcy5fY3R4LmZvbnQgPSB0aGlzLl9mb250LnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX3BhaW50KCkge1xuICAgICAgICBpZiAodGhpcy5fZmlsbGVkKVxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0cm9rZWQpXG4gICAgICAgICAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIHBvaW50KHAsIHJhZGl1cyA9IDUsIHNoYXBlID0gXCJzcXVhcmVcIikge1xuICAgICAgICBpZiAoIXApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghQ2FudmFzRm9ybVtzaGFwZV0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c2hhcGV9IGlzIG5vdCBhIHN0YXRpYyBmdW5jdGlvbiBvZiBDYW52YXNGb3JtYCk7XG4gICAgICAgIENhbnZhc0Zvcm1bc2hhcGVdKHRoaXMuX2N0eCwgcCwgcmFkaXVzKTtcbiAgICAgICAgdGhpcy5fcGFpbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBjaXJjbGUoY3R4LCBwdCwgcmFkaXVzID0gMTApIHtcbiAgICAgICAgaWYgKCFwdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHB0WzBdLCBwdFsxXSwgcmFkaXVzLCAwLCBDb25zdC50d29fcGksIGZhbHNlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBjaXJjbGUocHRzKSB7XG4gICAgICAgIGxldCBwID0gVXRpbC5pdGVyVG9BcnJheShwdHMpO1xuICAgICAgICBDYW52YXNGb3JtLmNpcmNsZSh0aGlzLl9jdHgsIHBbMF0sIHBbMV1bMF0pO1xuICAgICAgICB0aGlzLl9wYWludCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGVsbGlwc2UoY3R4LCBwdCwgcmFkaXVzLCByb3RhdGlvbiA9IDAsIHN0YXJ0QW5nbGUgPSAwLCBlbmRBbmdsZSA9IENvbnN0LnR3b19waSwgY2MgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXB0IHx8ICFyYWRpdXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2UocHRbMF0sIHB0WzFdLCByYWRpdXNbMF0sIHJhZGl1c1sxXSwgcm90YXRpb24sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjYyk7XG4gICAgfVxuICAgIGVsbGlwc2UocHQsIHJhZGl1cywgcm90YXRpb24gPSAwLCBzdGFydEFuZ2xlID0gMCwgZW5kQW5nbGUgPSBDb25zdC50d29fcGksIGNjID0gZmFsc2UpIHtcbiAgICAgICAgQ2FudmFzRm9ybS5lbGxpcHNlKHRoaXMuX2N0eCwgcHQsIHJhZGl1cywgcm90YXRpb24sIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjYyk7XG4gICAgICAgIHRoaXMuX3BhaW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgYXJjKGN0eCwgcHQsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjKSB7XG4gICAgICAgIGlmICghcHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwdFswXSwgcHRbMV0sIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjKTtcbiAgICB9XG4gICAgYXJjKHB0LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjYykge1xuICAgICAgICBDYW52YXNGb3JtLmFyYyh0aGlzLl9jdHgsIHB0LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjYyk7XG4gICAgICAgIHRoaXMuX3BhaW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgc3F1YXJlKGN0eCwgcHQsIGhhbGZzaXplKSB7XG4gICAgICAgIGlmICghcHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB4MSA9IHB0WzBdIC0gaGFsZnNpemU7XG4gICAgICAgIGxldCB5MSA9IHB0WzFdIC0gaGFsZnNpemU7XG4gICAgICAgIGxldCB4MiA9IHB0WzBdICsgaGFsZnNpemU7XG4gICAgICAgIGxldCB5MiA9IHB0WzFdICsgaGFsZnNpemU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICBjdHgubGluZVRvKHgxLCB5Mik7XG4gICAgICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIHNxdWFyZShwdCwgaGFsZnNpemUpIHtcbiAgICAgICAgQ2FudmFzRm9ybS5zcXVhcmUodGhpcy5fY3R4LCBwdCwgaGFsZnNpemUpO1xuICAgICAgICB0aGlzLl9wYWludCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGxpbmUoY3R4LCBwdHMpIHtcbiAgICAgICAgaWYgKCFVdGlsLmFycmF5Q2hlY2socHRzKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGZvciAobGV0IGl0IG9mIHB0cykge1xuICAgICAgICAgICAgaWYgKGl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkrKyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhpdFswXSwgaXRbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhpdFswXSwgaXRbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW5lKHB0cykge1xuICAgICAgICBDYW52YXNGb3JtLmxpbmUodGhpcy5fY3R4LCBwdHMpO1xuICAgICAgICB0aGlzLl9wYWludCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIHBvbHlnb24oY3R4LCBwdHMpIHtcbiAgICAgICAgaWYgKCFVdGlsLmFycmF5Q2hlY2socHRzKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgQ2FudmFzRm9ybS5saW5lKGN0eCwgcHRzKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBwb2x5Z29uKHB0cykge1xuICAgICAgICBDYW52YXNGb3JtLnBvbHlnb24odGhpcy5fY3R4LCBwdHMpO1xuICAgICAgICB0aGlzLl9wYWludCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIHJlY3QoY3R4LCBwdHMpIHtcbiAgICAgICAgbGV0IHAgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGlmICghVXRpbC5hcnJheUNoZWNrKHApKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocFswXVswXSwgcFswXVsxXSk7XG4gICAgICAgIGN0eC5saW5lVG8ocFswXVswXSwgcFsxXVsxXSk7XG4gICAgICAgIGN0eC5saW5lVG8ocFsxXVswXSwgcFsxXVsxXSk7XG4gICAgICAgIGN0eC5saW5lVG8ocFsxXVswXSwgcFswXVsxXSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgcmVjdChwdHMpIHtcbiAgICAgICAgQ2FudmFzRm9ybS5yZWN0KHRoaXMuX2N0eCwgcHRzKTtcbiAgICAgICAgdGhpcy5fcGFpbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBpbWFnZShjdHgsIGltZywgdGFyZ2V0ID0gbmV3IFB0KCksIG9yaWcpIHtcbiAgICAgICAgbGV0IHQgPSBVdGlsLml0ZXJUb0FycmF5KHRhcmdldCk7XG4gICAgICAgIGlmICh0eXBlb2YgdFswXSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHRbMF0sIHRbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9yaWcpIHtcbiAgICAgICAgICAgICAgICBsZXQgbyA9IFV0aWwuaXRlclRvQXJyYXkob3JpZyk7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIG9bMF1bMF0sIG9bMF1bMV0sIG9bMV1bMF0gLSBvWzBdWzBdLCBvWzFdWzFdIC0gb1swXVsxXSwgdFswXVswXSwgdFswXVsxXSwgdFsxXVswXSAtIHRbMF1bMF0sIHRbMV1bMV0gLSB0WzBdWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB0WzBdWzBdLCB0WzBdWzFdLCB0WzFdWzBdIC0gdFswXVswXSwgdFsxXVsxXSAtIHRbMF1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlKGltZywgdGFyZ2V0ID0gbmV3IFB0KCksIG9yaWcpIHtcbiAgICAgICAgQ2FudmFzRm9ybS5pbWFnZSh0aGlzLl9jdHgsIGltZywgdGFyZ2V0LCBvcmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyB0ZXh0KGN0eCwgcHQsIHR4dCwgbWF4V2lkdGgpIHtcbiAgICAgICAgaWYgKCFwdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHR4dCwgcHRbMF0sIHB0WzFdLCBtYXhXaWR0aCk7XG4gICAgfVxuICAgIHRleHQocHQsIHR4dCwgbWF4V2lkdGgpIHtcbiAgICAgICAgQ2FudmFzRm9ybS50ZXh0KHRoaXMuX2N0eCwgcHQsIHR4dCwgbWF4V2lkdGgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGV4dEJveChib3gsIHR4dCwgdmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCIsIHRhaWwgPSBcIlwiLCBvdmVycmlkZUJhc2VsaW5lID0gdHJ1ZSkge1xuICAgICAgICBpZiAob3ZlcnJpZGVCYXNlbGluZSlcbiAgICAgICAgICAgIHRoaXMuX2N0eC50ZXh0QmFzZWxpbmUgPSB2ZXJ0aWNhbEFsaWduO1xuICAgICAgICBsZXQgc2l6ZSA9IFJlY3RhbmdsZS5zaXplKGJveCk7XG4gICAgICAgIGxldCB0ID0gdGhpcy5fdGV4dFRydW5jYXRlKHR4dCwgc2l6ZVswXSwgdGFpbCk7XG4gICAgICAgIHRoaXMudGV4dCh0aGlzLl90ZXh0QWxpZ24oYm94LCB2ZXJ0aWNhbEFsaWduKSwgdFswXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwYXJhZ3JhcGhCb3goYm94LCB0eHQsIGxpbmVIZWlnaHQgPSAxLjIsIHZlcnRpY2FsQWxpZ24gPSBcInRvcFwiLCBjcm9wID0gdHJ1ZSkge1xuICAgICAgICBsZXQgYiA9IFV0aWwuaXRlclRvQXJyYXkoYm94KTtcbiAgICAgICAgbGV0IHNpemUgPSBSZWN0YW5nbGUuc2l6ZShiKTtcbiAgICAgICAgdGhpcy5fY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgICAgIGxldCBsc3RlcCA9IHRoaXMuX2ZvbnQuc2l6ZSAqIGxpbmVIZWlnaHQ7XG4gICAgICAgIGxldCBuZXh0TGluZSA9IChzdWIsIGJ1ZmZlciA9IFtdLCBjYyA9IDApID0+IHtcbiAgICAgICAgICAgIGlmICghc3ViKVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICBpZiAoY3JvcCAmJiBjYyAqIGxzdGVwID4gc2l6ZVsxXSAtIGxzdGVwICogMilcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgaWYgKGNjID4gMTAwMDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWF4IHJlY3Vyc2lvbiByZWFjaGVkICgxMDAwMClcIik7XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMuX3RleHRUcnVuY2F0ZShzdWIsIHNpemVbMF0sIFwiXCIpO1xuICAgICAgICAgICAgbGV0IG5ld2xuID0gdFswXS5pbmRleE9mKFwiXFxuXCIpO1xuICAgICAgICAgICAgaWYgKG5ld2xuID49IDApIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaCh0WzBdLnN1YnN0cigwLCBuZXdsbikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0TGluZShzdWIuc3Vic3RyKG5ld2xuICsgMSksIGJ1ZmZlciwgY2MgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkdCA9IHRbMF0ubGFzdEluZGV4T2YoXCIgXCIpICsgMTtcbiAgICAgICAgICAgIGlmIChkdCA8PSAwIHx8IHRbMV0gPT09IHN1Yi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgZHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBsZXQgbGluZSA9IHRbMF0uc3Vic3RyKDAsIGR0KTtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuICh0WzFdIDw9IDAgfHwgdFsxXSA9PT0gc3ViLmxlbmd0aCkgPyBidWZmZXIgOiBuZXh0TGluZShzdWIuc3Vic3RyKChkdCB8fCB0WzFdKSksIGJ1ZmZlciwgY2MgKyAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGxpbmVzID0gbmV4dExpbmUodHh0KTtcbiAgICAgICAgbGV0IGxzaXplID0gbGluZXMubGVuZ3RoICogbHN0ZXA7XG4gICAgICAgIGxldCBsYm94ID0gYjtcbiAgICAgICAgaWYgKHZlcnRpY2FsQWxpZ24gPT0gXCJtaWRkbGVcIiB8fCB2ZXJ0aWNhbEFsaWduID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIGxldCBscGFkID0gKHNpemVbMV0gLSBsc2l6ZSkgLyAyO1xuICAgICAgICAgICAgaWYgKGNyb3ApXG4gICAgICAgICAgICAgICAgbHBhZCA9IE1hdGgubWF4KDAsIGxwYWQpO1xuICAgICAgICAgICAgbGJveCA9IG5ldyBHcm91cChiWzBdLiRhZGQoMCwgbHBhZCksIGJbMV0uJHN1YnRyYWN0KDAsIGxwYWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2ZXJ0aWNhbEFsaWduID09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgICAgIGxib3ggPSBuZXcgR3JvdXAoYlswXS4kYWRkKDAsIHNpemVbMV0gLSBsc2l6ZSksIGJbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGJveCA9IG5ldyBHcm91cChiWzBdLCBiWzBdLiRhZGQoc2l6ZVswXSwgbHNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2VudGVyID0gUmVjdGFuZ2xlLmNlbnRlcihsYm94KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQodGhpcy5fdGV4dEFsaWduKGxib3gsIFwidG9wXCIsIFswLCBpICogbHN0ZXBdLCBjZW50ZXIpLCBsaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFsaWduVGV4dChhbGlnbm1lbnQgPSBcImxlZnRcIiwgYmFzZWxpbmUgPSBcImFscGhhYmV0aWNcIikge1xuICAgICAgICBpZiAoYmFzZWxpbmUgPT0gXCJjZW50ZXJcIilcbiAgICAgICAgICAgIGJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgaWYgKGJhc2VsaW5lID09IFwiYmFzZWxpbmVcIilcbiAgICAgICAgICAgIGJhc2VsaW5lID0gXCJhbHBoYWJldGljXCI7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QWxpZ24gPSBhbGlnbm1lbnQ7XG4gICAgICAgIHRoaXMuX2N0eC50ZXh0QmFzZWxpbmUgPSBiYXNlbGluZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxvZyh0eHQpIHtcbiAgICAgICAgbGV0IHcgPSB0aGlzLl9jdHgubWVhc3VyZVRleHQodHh0KS53aWR0aCArIDIwO1xuICAgICAgICB0aGlzLnN0cm9rZShmYWxzZSkuZmlsbChcInJnYmEoMCwwLDAsLjQpXCIpLnJlY3QoW1swLCAwXSwgW3csIDIwXV0pO1xuICAgICAgICB0aGlzLmZpbGwoXCIjZmZmXCIpLnRleHQoWzEwLCAxNF0sIHR4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNhbnZhcy5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IFB0LCBHcm91cCB9IGZyb20gXCIuL1B0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IHsgTnVtLCBHZW9tIH0gZnJvbSBcIi4vTnVtXCI7XG5leHBvcnQgY2xhc3MgQ29sb3IgZXh0ZW5kcyBQdCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5fbW9kZSA9IFwicmdiXCI7XG4gICAgICAgIHRoaXMuX2lzTm9ybSA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSguLi5hcmdzKSB7XG4gICAgICAgIGxldCBwID0gWzEsIDEsIDEsIDFdO1xuICAgICAgICBsZXQgYyA9IFV0aWwuZ2V0QXJncyhhcmdzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgYy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcFtpXSA9IGNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihwKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21IZXgoaGV4KSB7XG4gICAgICAgIGlmIChoZXhbMF0gPT0gXCIjXCIpXG4gICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA8PSAzKSB7XG4gICAgICAgICAgICBsZXQgZm4gPSAoaSkgPT4gaGV4W2ldIHx8IFwiRlwiO1xuICAgICAgICAgICAgaGV4ID0gYCR7Zm4oMCl9JHtmbigwKX0ke2ZuKDEpfSR7Zm4oMSl9JHtmbigyKX0ke2ZuKDIpfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFscGhhID0gMTtcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgICAgIGFscGhhID0gaGV4LnN1YnN0cig2KSAmJiAweEZGIC8gMjU1O1xuICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cmluZygwLCA2KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGV4VmFsID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoaGV4VmFsID4+IDE2LCBoZXhWYWwgPj4gOCAmIDB4RkYsIGhleFZhbCAmIDB4RkYsIGFscGhhKTtcbiAgICB9XG4gICAgc3RhdGljIHJnYiguLi5hcmdzKSB7IHJldHVybiBDb2xvci5mcm9tKC4uLmFyZ3MpLnRvTW9kZShcInJnYlwiKTsgfVxuICAgIHN0YXRpYyBoc2woLi4uYXJncykgeyByZXR1cm4gQ29sb3IuZnJvbSguLi5hcmdzKS50b01vZGUoXCJoc2xcIik7IH1cbiAgICBzdGF0aWMgaHNiKC4uLmFyZ3MpIHsgcmV0dXJuIENvbG9yLmZyb20oLi4uYXJncykudG9Nb2RlKFwiaHNiXCIpOyB9XG4gICAgc3RhdGljIGxhYiguLi5hcmdzKSB7IHJldHVybiBDb2xvci5mcm9tKC4uLmFyZ3MpLnRvTW9kZShcImxhYlwiKTsgfVxuICAgIHN0YXRpYyBsY2goLi4uYXJncykgeyByZXR1cm4gQ29sb3IuZnJvbSguLi5hcmdzKS50b01vZGUoXCJsY2hcIik7IH1cbiAgICBzdGF0aWMgbHV2KC4uLmFyZ3MpIHsgcmV0dXJuIENvbG9yLmZyb20oLi4uYXJncykudG9Nb2RlKFwibHV2XCIpOyB9XG4gICAgc3RhdGljIHh5eiguLi5hcmdzKSB7IHJldHVybiBDb2xvci5mcm9tKC4uLmFyZ3MpLnRvTW9kZShcInh5elwiKTsgfVxuICAgIHN0YXRpYyBtYXhWYWx1ZXMobW9kZSkgeyByZXR1cm4gQ29sb3IucmFuZ2VzW21vZGVdLnppcFNsaWNlKDEpLiR0YWtlKFswLCAxLCAyXSk7IH1cbiAgICBnZXQgaGV4KCkgeyByZXR1cm4gdGhpcy50b1N0cmluZyhcImhleFwiKTsgfVxuICAgIGdldCByZ2IoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKFwicmdiXCIpOyB9XG4gICAgZ2V0IHJnYmEoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKFwicmdiYVwiKTsgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBsZXQgYyA9IG5ldyBDb2xvcih0aGlzKTtcbiAgICAgICAgYy50b01vZGUodGhpcy5fbW9kZSk7XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB0b01vZGUobW9kZSwgY29udmVydCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb252ZXJ0KSB7XG4gICAgICAgICAgICBsZXQgZm5hbWUgPSB0aGlzLl9tb2RlLnRvVXBwZXJDYXNlKCkgKyBcInRvXCIgKyBtb2RlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoQ29sb3JbZm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50byhDb2xvcltmbmFtZV0odGhpcywgdGhpcy5faXNOb3JtLCB0aGlzLl9pc05vcm0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjb252ZXJ0IGNvbG9yIHdpdGggXCIgKyBmbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXQgbW9kZSgpIHsgcmV0dXJuIHRoaXMuX21vZGU7IH1cbiAgICBnZXQgcigpIHsgcmV0dXJuIHRoaXNbMF07IH1cbiAgICBzZXQgcihuKSB7IHRoaXNbMF0gPSBuOyB9XG4gICAgZ2V0IGcoKSB7IHJldHVybiB0aGlzWzFdOyB9XG4gICAgc2V0IGcobikgeyB0aGlzWzFdID0gbjsgfVxuICAgIGdldCBiKCkgeyByZXR1cm4gdGhpc1syXTsgfVxuICAgIHNldCBiKG4pIHsgdGhpc1syXSA9IG47IH1cbiAgICBnZXQgaCgpIHsgcmV0dXJuICh0aGlzLl9tb2RlID09IFwibGNoXCIpID8gdGhpc1syXSA6IHRoaXNbMF07IH1cbiAgICBzZXQgaChuKSB7XG4gICAgICAgIGxldCBpID0gKHRoaXMuX21vZGUgPT0gXCJsY2hcIikgPyAyIDogMDtcbiAgICAgICAgdGhpc1tpXSA9IG47XG4gICAgfVxuICAgIGdldCBzKCkgeyByZXR1cm4gdGhpc1sxXTsgfVxuICAgIHNldCBzKG4pIHsgdGhpc1sxXSA9IG47IH1cbiAgICBnZXQgbCgpIHsgcmV0dXJuICh0aGlzLl9tb2RlID09IFwiaHNsXCIpID8gdGhpc1syXSA6IHRoaXNbMF07IH1cbiAgICBzZXQgbChuKSB7XG4gICAgICAgIGxldCBpID0gKHRoaXMuX21vZGUgPT0gXCJoc2xcIikgPyAyIDogMDtcbiAgICAgICAgdGhpc1tpXSA9IG47XG4gICAgfVxuICAgIGdldCBhKCkgeyByZXR1cm4gdGhpc1sxXTsgfVxuICAgIHNldCBhKG4pIHsgdGhpc1sxXSA9IG47IH1cbiAgICBnZXQgYygpIHsgcmV0dXJuIHRoaXNbMV07IH1cbiAgICBzZXQgYyhuKSB7IHRoaXNbMV0gPSBuOyB9XG4gICAgZ2V0IHUoKSB7IHJldHVybiB0aGlzWzFdOyB9XG4gICAgc2V0IHUobikgeyB0aGlzWzFdID0gbjsgfVxuICAgIGdldCB2KCkgeyByZXR1cm4gdGhpc1syXTsgfVxuICAgIHNldCB2KG4pIHsgdGhpc1syXSA9IG47IH1cbiAgICBzZXQgYWxwaGEobikgeyBpZiAodGhpcy5sZW5ndGggPiAzKVxuICAgICAgICB0aGlzWzNdID0gbjsgfVxuICAgIGdldCBhbHBoYSgpIHsgcmV0dXJuICh0aGlzLmxlbmd0aCA+IDMpID8gdGhpc1szXSA6IDE7IH1cbiAgICBnZXQgbm9ybWFsaXplZCgpIHsgcmV0dXJuIHRoaXMuX2lzTm9ybTsgfVxuICAgIHNldCBub3JtYWxpemVkKGIpIHsgdGhpcy5faXNOb3JtID0gYjsgfVxuICAgIG5vcm1hbGl6ZSh0b05vcm0gPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc05vcm0gPT0gdG9Ob3JtKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGxldCByYW5nZXMgPSBDb2xvci5yYW5nZXNbdGhpcy5fbW9kZV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldID0gKCF0b05vcm0pXG4gICAgICAgICAgICAgICAgPyBOdW0ubWFwVG9SYW5nZSh0aGlzW2ldLCAwLCAxLCByYW5nZXNbaV1bMF0sIHJhbmdlc1tpXVsxXSlcbiAgICAgICAgICAgICAgICA6IE51bS5tYXBUb1JhbmdlKHRoaXNbaV0sIHJhbmdlc1tpXVswXSwgcmFuZ2VzW2ldWzFdLCAwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc05vcm0gPSB0b05vcm07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAkbm9ybWFsaXplKHRvTm9ybSA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUodG9Ob3JtKTsgfVxuICAgIHRvU3RyaW5nKGZvcm1hdCA9IFwibW9kZVwiKSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT0gXCJoZXhcIikge1xuICAgICAgICAgICAgbGV0IF9oZXggPSAobikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzID0gTWF0aC5mbG9vcihuKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzLmxlbmd0aCA8IDIpID8gJzAnICsgcyA6IHM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGAjJHtfaGV4KHRoaXNbMF0pfSR7X2hleCh0aGlzWzFdKX0ke19oZXgodGhpc1syXSl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtYXQgPT0gXCJyZ2JhXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBgcmdiYSgke01hdGguZmxvb3IodGhpc1swXSl9LCR7TWF0aC5mbG9vcih0aGlzWzFdKX0sJHtNYXRoLmZsb29yKHRoaXNbMl0pfSwke3RoaXMuYWxwaGF9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtYXQgPT0gXCJyZ2JcIikge1xuICAgICAgICAgICAgcmV0dXJuIGByZ2IoJHtNYXRoLmZsb29yKHRoaXNbMF0pfSwke01hdGguZmxvb3IodGhpc1sxXSl9LCR7TWF0aC5mbG9vcih0aGlzWzJdKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuX21vZGV9KCR7dGhpc1swXX0sJHt0aGlzWzFdfSwke3RoaXNbMl19LCR7dGhpcy5hbHBoYX0pYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgUkdCdG9IU0wocmdiLCBub3JtYWxpemVkSW5wdXQgPSBmYWxzZSwgbm9ybWFsaXplZE91dHB1dCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBbciwgZywgYl0gPSAoIW5vcm1hbGl6ZWRJbnB1dCkgPyByZ2IuJG5vcm1hbGl6ZSgpIDogcmdiO1xuICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGggPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIGxldCBzID0gaDtcbiAgICAgICAgbGV0IGwgPSBoO1xuICAgICAgICBpZiAobWF4ID09IG1pbikge1xuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgcyA9IChsID4gMC41KSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIGlmIChtYXggPT09IHIpIHtcbiAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoKGcgPCBiKSA/IDYgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1heCA9PT0gZykge1xuICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXggPT09IGIpIHtcbiAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb2xvci5oc2woKChub3JtYWxpemVkT3V0cHV0KSA/IGggLyA2MCA6IGggKiA2MCksIHMsIGwsIHJnYi5hbHBoYSk7XG4gICAgfVxuICAgIHN0YXRpYyBIU0x0b1JHQihoc2wsIG5vcm1hbGl6ZWRJbnB1dCA9IGZhbHNlLCBub3JtYWxpemVkT3V0cHV0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IFtoLCBzLCBsXSA9IGhzbDtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkSW5wdXQpXG4gICAgICAgICAgICBoID0gaCAvIDM2MDtcbiAgICAgICAgaWYgKHMgPT0gMClcbiAgICAgICAgICAgIHJldHVybiBDb2xvci5yZ2IobCAqIDI1NSwgbCAqIDI1NSwgbCAqIDI1NSwgaHNsLmFscGhhKTtcbiAgICAgICAgbGV0IHEgPSAobCA8PSAwLjUpID8gbCAqICgxICsgcykgOiBsICsgcyAtIChsICogcyk7XG4gICAgICAgIGxldCBwID0gMiAqIGwgLSBxO1xuICAgICAgICBsZXQgY29udmVydCA9ICh0KSA9PiB7XG4gICAgICAgICAgICB0ID0gKHQgPCAwKSA/IHQgKyAxIDogKHQgPiAxKSA/IHQgLSAxIDogdDtcbiAgICAgICAgICAgIGlmICh0ICogNiA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiB0ICogNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHQgKiAyIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodCAqIDMgPCAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKCgyIC8gMykgLSB0KSAqIDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNjID0gKG5vcm1hbGl6ZWRPdXRwdXQpID8gMSA6IDI1NTtcbiAgICAgICAgcmV0dXJuIENvbG9yLnJnYihzYyAqIGNvbnZlcnQoKGggKyAxIC8gMykpLCBzYyAqIGNvbnZlcnQoaCksIHNjICogY29udmVydCgoaCAtIDEgLyAzKSksIGhzbC5hbHBoYSk7XG4gICAgfVxuICAgIHN0YXRpYyBSR0J0b0hTQihyZ2IsIG5vcm1hbGl6ZWRJbnB1dCA9IGZhbHNlLCBub3JtYWxpemVkT3V0cHV0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IFtyLCBnLCBiXSA9ICghbm9ybWFsaXplZElucHV0KSA/IHJnYi4kbm9ybWFsaXplKCkgOiByZ2I7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICBsZXQgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgbGV0IGggPSAwO1xuICAgICAgICBsZXQgcyA9IChtYXggPT09IDApID8gMCA6IGQgLyBtYXg7XG4gICAgICAgIGxldCB2ID0gbWF4O1xuICAgICAgICBpZiAobWF4ICE9IG1pbikge1xuICAgICAgICAgICAgaWYgKG1heCA9PT0gcikge1xuICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArICgoZyA8IGIpID8gNiA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWF4ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1heCA9PT0gYikge1xuICAgICAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbG9yLmhzYigoKG5vcm1hbGl6ZWRPdXRwdXQpID8gaCAvIDYwIDogaCAqIDYwKSwgcywgdiwgcmdiLmFscGhhKTtcbiAgICB9XG4gICAgc3RhdGljIEhTQnRvUkdCKGhzYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgW2gsIHMsIHZdID0gaHNiO1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRJbnB1dClcbiAgICAgICAgICAgIGggPSBoIC8gMzYwO1xuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgICAgICBsZXQgZiA9IGggKiA2IC0gaTtcbiAgICAgICAgbGV0IHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgbGV0IHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgICAgIGxldCB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xuICAgICAgICBsZXQgcGljayA9IFtcbiAgICAgICAgICAgIFt2LCB0LCBwXSwgW3EsIHYsIHBdLCBbcCwgdiwgdF0sXG4gICAgICAgICAgICBbcCwgcSwgdl0sIFt0LCBwLCB2XSwgW3YsIHAsIHFdXG4gICAgICAgIF07XG4gICAgICAgIGxldCBjID0gcGlja1tpICUgNl07XG4gICAgICAgIGxldCBzYyA9IChub3JtYWxpemVkT3V0cHV0KSA/IDEgOiAyNTU7XG4gICAgICAgIHJldHVybiBDb2xvci5yZ2Ioc2MgKiBjWzBdLCBzYyAqIGNbMV0sIHNjICogY1syXSwgaHNiLmFscGhhKTtcbiAgICB9XG4gICAgc3RhdGljIFJHQnRvTEFCKHJnYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gcmdiLiRub3JtYWxpemUoZmFsc2UpIDogcmdiO1xuICAgICAgICByZXR1cm4gQ29sb3IuWFladG9MQUIoQ29sb3IuUkdCdG9YWVooYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIExBQnRvUkdCKGxhYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gbGFiLiRub3JtYWxpemUoZmFsc2UpIDogbGFiO1xuICAgICAgICByZXR1cm4gQ29sb3IuWFladG9SR0IoQ29sb3IuTEFCdG9YWVooYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIFJHQnRvTENIKHJnYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gcmdiLiRub3JtYWxpemUoZmFsc2UpIDogcmdiO1xuICAgICAgICByZXR1cm4gQ29sb3IuTEFCdG9MQ0goQ29sb3IuUkdCdG9MQUIoYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIExDSHRvUkdCKGxjaCwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gbGNoLiRub3JtYWxpemUoZmFsc2UpIDogbGNoO1xuICAgICAgICByZXR1cm4gQ29sb3IuTEFCdG9SR0IoQ29sb3IuTENIdG9MQUIoYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIFJHQnRvTFVWKHJnYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gcmdiLiRub3JtYWxpemUoZmFsc2UpIDogcmdiO1xuICAgICAgICByZXR1cm4gQ29sb3IuWFladG9MVVYoQ29sb3IuUkdCdG9YWVooYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIExVVnRvUkdCKGx1diwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gbHV2LiRub3JtYWxpemUoZmFsc2UpIDogbHV2O1xuICAgICAgICByZXR1cm4gQ29sb3IuWFladG9SR0IoQ29sb3IuTFVWdG9YWVooYyksIGZhbHNlLCBub3JtYWxpemVkT3V0cHV0KTtcbiAgICB9XG4gICAgc3RhdGljIFJHQnRvWFlaKHJnYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9ICghbm9ybWFsaXplZElucHV0KSA/IHJnYi4kbm9ybWFsaXplKCkgOiByZ2IuY2xvbmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNbaV0gPSAoY1tpXSA+IDAuMDQwNDUpID8gTWF0aC5wb3coKGNbaV0gKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGNbaV0gLyAxMi45MjtcbiAgICAgICAgICAgIGlmICghbm9ybWFsaXplZE91dHB1dClcbiAgICAgICAgICAgICAgICBjW2ldID0gY1tpXSAqIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2MgPSBDb2xvci54eXooY1swXSAqIDAuNDEyNDU2NCArIGNbMV0gKiAwLjM1NzU3NjEgKyBjWzJdICogMC4xODA0Mzc1LCBjWzBdICogMC4yMTI2NzI5ICsgY1sxXSAqIDAuNzE1MTUyMiArIGNbMl0gKiAwLjA3MjE3NTAsIGNbMF0gKiAwLjAxOTMzMzkgKyBjWzFdICogMC4xMTkxOTIwICsgY1syXSAqIDAuOTUwMzA0MSwgcmdiLmFscGhhKTtcbiAgICAgICAgcmV0dXJuIChub3JtYWxpemVkT3V0cHV0KSA/IGNjLm5vcm1hbGl6ZSgpIDogY2M7XG4gICAgfVxuICAgIHN0YXRpYyBYWVp0b1JHQih4eXosIG5vcm1hbGl6ZWRJbnB1dCA9IGZhbHNlLCBub3JtYWxpemVkT3V0cHV0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IFt4LCB5LCB6XSA9ICghbm9ybWFsaXplZElucHV0KSA/IHh5ei4kbm9ybWFsaXplKCkgOiB4eXo7XG4gICAgICAgIGxldCByZ2IgPSBbXG4gICAgICAgICAgICB4ICogMy4yNDA0NTQyICsgeSAqIC0xLjUzNzEzODUgKyB6ICogLTAuNDk4NTMxNCxcbiAgICAgICAgICAgIHggKiAtMC45NjkyNjYwICsgeSAqIDEuODc2MDEwOCArIHogKiAwLjA0MTU1NjAsXG4gICAgICAgICAgICB4ICogMC4wNTU2NDM0ICsgeSAqIC0wLjIwNDAyNTkgKyB6ICogMS4wNTcyMjUyXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICByZ2JbaV0gPSAocmdiW2ldIDwgMCkgPyAwIDogKHJnYltpXSA+IDAuMDAzMTMwOCkgPyAoMS4wNTUgKiBNYXRoLnBvdyhyZ2JbaV0sIDEgLyAyLjQpIC0gMC4wNTUpIDogKDEyLjkyICogcmdiW2ldKTtcbiAgICAgICAgICAgIHJnYltpXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJnYltpXSkpO1xuICAgICAgICAgICAgaWYgKCFub3JtYWxpemVkT3V0cHV0KVxuICAgICAgICAgICAgICAgIHJnYltpXSA9IE1hdGgucm91bmQocmdiW2ldICogMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2MgPSBDb2xvci5yZ2IocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSwgeHl6LmFscGhhKTtcbiAgICAgICAgcmV0dXJuIChub3JtYWxpemVkT3V0cHV0KSA/IGNjLm5vcm1hbGl6ZSgpIDogY2M7XG4gICAgfVxuICAgIHN0YXRpYyBYWVp0b0xBQih4eXosIG5vcm1hbGl6ZWRJbnB1dCA9IGZhbHNlLCBub3JtYWxpemVkT3V0cHV0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGMgPSAobm9ybWFsaXplZElucHV0KSA/IHh5ei4kbm9ybWFsaXplKGZhbHNlKSA6IHh5ei5jbG9uZSgpO1xuICAgICAgICBjLmRpdmlkZShDb2xvci5ENjUpO1xuICAgICAgICBsZXQgZm4gPSAobikgPT4gKG4gPiAwLjAwODg1NikgPyBNYXRoLnBvdyhuLCAxIC8gMykgOiAoNy43ODcgKiBuKSArIDE2IC8gMTE2O1xuICAgICAgICBsZXQgY3kgPSBmbihjWzFdKTtcbiAgICAgICAgbGV0IGNjID0gQ29sb3IubGFiKCgxMTYgKiBjeSkgLSAxNiwgNTAwICogKGZuKGNbMF0pIC0gY3kpLCAyMDAgKiAoY3kgLSBmbihjWzJdKSksIHh5ei5hbHBoYSk7XG4gICAgICAgIHJldHVybiAobm9ybWFsaXplZE91dHB1dCkgPyBjYy5ub3JtYWxpemUoKSA6IGNjO1xuICAgIH1cbiAgICBzdGF0aWMgTEFCdG9YWVoobGFiLCBub3JtYWxpemVkSW5wdXQgPSBmYWxzZSwgbm9ybWFsaXplZE91dHB1dCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBjID0gKG5vcm1hbGl6ZWRJbnB1dCkgPyBsYWIuJG5vcm1hbGl6ZShmYWxzZSkgOiBsYWI7XG4gICAgICAgIGxldCB5ID0gKGNbMF0gKyAxNikgLyAxMTY7XG4gICAgICAgIGxldCB4ID0gKGNbMV0gLyA1MDApICsgeTtcbiAgICAgICAgbGV0IHogPSB5IC0gY1syXSAvIDIwMDtcbiAgICAgICAgbGV0IGZuID0gKG4pID0+IHtcbiAgICAgICAgICAgIGxldCBubm4gPSBuICogbiAqIG47XG4gICAgICAgICAgICByZXR1cm4gKG5ubiA+IDAuMDA4ODU2KSA/IG5ubiA6IChuIC0gMTYgLyAxMTYpIC8gNy43ODc7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkID0gQ29sb3IuRDY1O1xuICAgICAgICBsZXQgY2MgPSBDb2xvci54eXooTWF0aC5tYXgoMCwgZFswXSAqIGZuKHgpKSwgTWF0aC5tYXgoMCwgZFsxXSAqIGZuKHkpKSwgTWF0aC5tYXgoMCwgZFsyXSAqIGZuKHopKSwgbGFiLmFscGhhKTtcbiAgICAgICAgcmV0dXJuIChub3JtYWxpemVkT3V0cHV0KSA/IGNjLm5vcm1hbGl6ZSgpIDogY2M7XG4gICAgfVxuICAgIHN0YXRpYyBYWVp0b0xVVih4eXosIG5vcm1hbGl6ZWRJbnB1dCA9IGZhbHNlLCBub3JtYWxpemVkT3V0cHV0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IFt4LCB5LCB6XSA9IChub3JtYWxpemVkSW5wdXQpID8geHl6LiRub3JtYWxpemUoZmFsc2UpIDogeHl6O1xuICAgICAgICBsZXQgdSA9ICg0ICogeCkgLyAoeCArICgxNSAqIHkpICsgKDMgKiB6KSk7XG4gICAgICAgIGxldCB2ID0gKDkgKiB5KSAvICh4ICsgKDE1ICogeSkgKyAoMyAqIHopKTtcbiAgICAgICAgeSA9IHkgLyAxMDA7XG4gICAgICAgIHkgPSAoeSA+IDAuMDA4ODU2KSA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkgKyAxNiAvIDExNik7XG4gICAgICAgIGxldCByZWZVID0gKDQgKiBDb2xvci5ENjVbMF0pIC8gKENvbG9yLkQ2NVswXSArICgxNSAqIENvbG9yLkQ2NVsxXSkgKyAoMyAqIENvbG9yLkQ2NVsyXSkpO1xuICAgICAgICBsZXQgcmVmViA9ICg5ICogQ29sb3IuRDY1WzFdKSAvIChDb2xvci5ENjVbMF0gKyAoMTUgKiBDb2xvci5ENjVbMV0pICsgKDMgKiBDb2xvci5ENjVbMl0pKTtcbiAgICAgICAgbGV0IEwgPSAoMTE2ICogeSkgLSAxNjtcbiAgICAgICAgcmV0dXJuIENvbG9yLmx1dihMLCAxMyAqIEwgKiAodSAtIHJlZlUpLCAxMyAqIEwgKiAodiAtIHJlZlYpLCB4eXouYWxwaGEpO1xuICAgIH1cbiAgICBzdGF0aWMgTFVWdG9YWVoobHV2LCBub3JtYWxpemVkSW5wdXQgPSBmYWxzZSwgbm9ybWFsaXplZE91dHB1dCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBbbCwgdSwgdl0gPSAobm9ybWFsaXplZElucHV0KSA/IGx1di4kbm9ybWFsaXplKGZhbHNlKSA6IGx1djtcbiAgICAgICAgbGV0IHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgbGV0IGN1YmVZID0geSAqIHkgKiB5O1xuICAgICAgICB5ID0gKGN1YmVZID4gMC4wMDg4NTYpID8gY3ViZVkgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuICAgICAgICBsZXQgcmVmVSA9ICg0ICogQ29sb3IuRDY1WzBdKSAvIChDb2xvci5ENjVbMF0gKyAoMTUgKiBDb2xvci5ENjVbMV0pICsgKDMgKiBDb2xvci5ENjVbMl0pKTtcbiAgICAgICAgbGV0IHJlZlYgPSAoOSAqIENvbG9yLkQ2NVsxXSkgLyAoQ29sb3IuRDY1WzBdICsgKDE1ICogQ29sb3IuRDY1WzFdKSArICgzICogQ29sb3IuRDY1WzJdKSk7XG4gICAgICAgIHUgPSB1IC8gKDEzICogbCkgKyByZWZVO1xuICAgICAgICB2ID0gdiAvICgxMyAqIGwpICsgcmVmVjtcbiAgICAgICAgeSA9IHkgKiAxMDA7XG4gICAgICAgIGxldCB4ID0gLTEgKiAoOSAqIHkgKiB1KSAvICgodSAtIDQpICogdiAtIHUgKiB2KTtcbiAgICAgICAgbGV0IHogPSAoOSAqIHkgLSAoMTUgKiB2ICogeSkgLSAodiAqIHgpKSAvICgzICogdik7XG4gICAgICAgIHJldHVybiBDb2xvci54eXooeCwgeSwgeiwgbHV2LmFscGhhKTtcbiAgICB9XG4gICAgc3RhdGljIExBQnRvTENIKGxhYiwgbm9ybWFsaXplZElucHV0ID0gZmFsc2UsIG5vcm1hbGl6ZWRPdXRwdXQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYyA9IChub3JtYWxpemVkSW5wdXQpID8gbGFiLiRub3JtYWxpemUoZmFsc2UpIDogbGFiO1xuICAgICAgICBsZXQgaCA9IEdlb20udG9EZWdyZWUoR2VvbS5ib3VuZFJhZGlhbihNYXRoLmF0YW4yKGNbMl0sIGNbMV0pKSk7XG4gICAgICAgIHJldHVybiBDb2xvci5sY2goY1swXSwgTWF0aC5zcXJ0KGNbMV0gKiBjWzFdICsgY1syXSAqIGNbMl0pLCBoLCBsYWIuYWxwaGEpO1xuICAgIH1cbiAgICBzdGF0aWMgTENIdG9MQUIobGNoLCBub3JtYWxpemVkSW5wdXQgPSBmYWxzZSwgbm9ybWFsaXplZE91dHB1dCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBjID0gKG5vcm1hbGl6ZWRJbnB1dCkgPyBsY2guJG5vcm1hbGl6ZShmYWxzZSkgOiBsY2g7XG4gICAgICAgIGxldCByYWQgPSBHZW9tLnRvUmFkaWFuKGNbMl0pO1xuICAgICAgICByZXR1cm4gQ29sb3IubGFiKGNbMF0sIE1hdGguY29zKHJhZCkgKiBjWzFdLCBNYXRoLnNpbihyYWQpICogY1sxXSwgbGNoLmFscGhhKTtcbiAgICB9XG59XG5Db2xvci5ENjUgPSBuZXcgUHQoOTUuMDQ3LCAxMDAsIDEwOC44ODMsIDEpO1xuQ29sb3IucmFuZ2VzID0ge1xuICAgIHJnYjogbmV3IEdyb3VwKG5ldyBQdCgwLCAyNTUpLCBuZXcgUHQoMCwgMjU1KSwgbmV3IFB0KDAsIDI1NSkpLFxuICAgIGhzbDogbmV3IEdyb3VwKG5ldyBQdCgwLCAzNjApLCBuZXcgUHQoMCwgMSksIG5ldyBQdCgwLCAxKSksXG4gICAgaHNiOiBuZXcgR3JvdXAobmV3IFB0KDAsIDM2MCksIG5ldyBQdCgwLCAxKSwgbmV3IFB0KDAsIDEpKSxcbiAgICBsYWI6IG5ldyBHcm91cChuZXcgUHQoMCwgMTAwKSwgbmV3IFB0KC0xMjgsIDEyNyksIG5ldyBQdCgtMTI4LCAxMjcpKSxcbiAgICBsY2g6IG5ldyBHcm91cChuZXcgUHQoMCwgMTAwKSwgbmV3IFB0KDAsIDEwMCksIG5ldyBQdCgwLCAzNjApKSxcbiAgICBsdXY6IG5ldyBHcm91cChuZXcgUHQoMCwgMTAwKSwgbmV3IFB0KC0xMzQsIDIyMCksIG5ldyBQdCgtMTQwLCAxMjIpKSxcbiAgICB4eXo6IG5ldyBHcm91cChuZXcgUHQoMCwgMTAwKSwgbmV3IFB0KDAsIDEwMCksIG5ldyBQdCgwLCAxMDApKVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbG9yLmpzLm1hcCIsIi8qISBTb3VyY2UgY29kZSBsaWNlbnNlZCB1bmRlciBBcGFjaGUgTGljZW5zZSAyLjAuIENvcHlyaWdodCDCqSAyMDE3LWN1cnJlbnQgV2lsbGlhbSBOZ2FuIGFuZCBjb250cmlidXRvcnMuIChodHRwczovL2dpdGh1Yi5jb20vd2lsbGlhbW5nYW4vcHRzKSAqL1xuaW1wb3J0IHsgUHQsIEdyb3VwIH0gZnJvbSBcIi4vUHRcIjtcbmltcG9ydCB7IExpbmUsIFRyaWFuZ2xlIH0gZnJvbSBcIi4vT3BcIjtcbmltcG9ydCB7IENvbnN0LCBVdGlsIH0gZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IHsgTnVtLCBHZW9tIH0gZnJvbSBcIi4vTnVtXCI7XG5pbXBvcnQgeyBWZWMgfSBmcm9tIFwiLi9MaW5lYXJBbGdlYnJhXCI7XG5leHBvcnQgY2xhc3MgQ3JlYXRlIHtcbiAgICBzdGF0aWMgZGlzdHJpYnV0ZVJhbmRvbShib3VuZCwgY291bnQsIGRpbWVuc2lvbnMgPSAyKSB7XG4gICAgICAgIGxldCBwdHMgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IFtib3VuZC54ICsgTWF0aC5yYW5kb20oKSAqIGJvdW5kLndpZHRoXTtcbiAgICAgICAgICAgIGlmIChkaW1lbnNpb25zID4gMSlcbiAgICAgICAgICAgICAgICBwLnB1c2goYm91bmQueSArIE1hdGgucmFuZG9tKCkgKiBib3VuZC5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGRpbWVuc2lvbnMgPiAyKVxuICAgICAgICAgICAgICAgIHAucHVzaChib3VuZC56ICsgTWF0aC5yYW5kb20oKSAqIGJvdW5kLmRlcHRoKTtcbiAgICAgICAgICAgIHB0cy5wdXNoKG5ldyBQdChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHB0cztcbiAgICB9XG4gICAgc3RhdGljIGRpc3RyaWJ1dGVMaW5lYXIobGluZSwgY291bnQpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgbGV0IGxuID0gTGluZS5zdWJwb2ludHMoX2xpbmUsIGNvdW50IC0gMik7XG4gICAgICAgIGxuLnVuc2hpZnQoX2xpbmVbMF0pO1xuICAgICAgICBsbi5wdXNoKF9saW5lW19saW5lLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgcmV0dXJuIGxuO1xuICAgIH1cbiAgICBzdGF0aWMgZ3JpZFB0cyhib3VuZCwgY29sdW1ucywgcm93cywgb3JpZW50YXRpb24gPSBbMC41LCAwLjVdKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSAwIHx8IHJvd3MgPT09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJncmlkIGNvbHVtbnMgYW5kIHJvd3MgY2Fubm90IGJlIDBcIik7XG4gICAgICAgIGxldCB1bml0ID0gYm91bmQuc2l6ZS4kc3VidHJhY3QoMSkuJGRpdmlkZShjb2x1bW5zLCByb3dzKTtcbiAgICAgICAgbGV0IG9mZnNldCA9IHVuaXQuJG11bHRpcGx5KG9yaWVudGF0aW9uKTtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sdW1uczsgYysrKSB7XG4gICAgICAgICAgICAgICAgZy5wdXNoKGJvdW5kLnRvcExlZnQuJGFkZCh1bml0LiRtdWx0aXBseShjLCByKSkuYWRkKG9mZnNldCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBzdGF0aWMgZ3JpZENlbGxzKGJvdW5kLCBjb2x1bW5zLCByb3dzKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSAwIHx8IHJvd3MgPT09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJncmlkIGNvbHVtbnMgYW5kIHJvd3MgY2Fubm90IGJlIDBcIik7XG4gICAgICAgIGxldCB1bml0ID0gYm91bmQuc2l6ZS4kc3VidHJhY3QoMSkuZGl2aWRlKGNvbHVtbnMsIHJvd3MpO1xuICAgICAgICBsZXQgZyA9IFtdO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2x1bW5zOyBjKyspIHtcbiAgICAgICAgICAgICAgICBnLnB1c2gobmV3IEdyb3VwKGJvdW5kLnRvcExlZnQuJGFkZCh1bml0LiRtdWx0aXBseShjLCByKSksIGJvdW5kLnRvcExlZnQuJGFkZCh1bml0LiRtdWx0aXBseShjLCByKS5hZGQodW5pdCkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIHN0YXRpYyByYWRpYWxQdHMoY2VudGVyLCByYWRpdXMsIGNvdW50LCBhbmdsZU9mZnNldCA9IC1Db25zdC5oYWxmX3BpKSB7XG4gICAgICAgIGxldCBnID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBhID0gQ29uc3QudHdvX3BpIC8gY291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgZy5wdXNoKG5ldyBQdChjZW50ZXIpLnRvQW5nbGUoYSAqIGkgKyBhbmdsZU9mZnNldCwgcmFkaXVzLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIHN0YXRpYyBub2lzZVB0cyhwdHMsIGR4ID0gMC4wMSwgZHkgPSAwLjAxLCByb3dzID0gMCwgY29sdW1ucyA9IDApIHtcbiAgICAgICAgbGV0IHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgZyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAobGV0IHAgb2YgcHRzKSB7XG4gICAgICAgICAgICBsZXQgbnAgPSBuZXcgTm9pc2UocCk7XG4gICAgICAgICAgICBsZXQgciA9IChyb3dzICYmIHJvd3MgPiAwKSA/IE1hdGguZmxvb3IoaSAvIHJvd3MpIDogaTtcbiAgICAgICAgICAgIGxldCBjID0gKGNvbHVtbnMgJiYgY29sdW1ucyA+IDApID8gaSAlIGNvbHVtbnMgOiBpO1xuICAgICAgICAgICAgbnAuaW5pdE5vaXNlKGR4ICogYywgZHkgKiByKTtcbiAgICAgICAgICAgIG5wLnNlZWQoc2VlZCk7XG4gICAgICAgICAgICBnLnB1c2gobnApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBzdGF0aWMgZGVsYXVuYXkocHRzKSB7XG4gICAgICAgIHJldHVybiBEZWxhdW5heS5mcm9tKHB0cyk7XG4gICAgfVxufVxuY29uc3QgX19ub2lzZV9ncmFkMyA9IFtcbiAgICBbMSwgMSwgMF0sIFstMSwgMSwgMF0sIFsxLCAtMSwgMF0sIFstMSwgLTEsIDBdLFxuICAgIFsxLCAwLCAxXSwgWy0xLCAwLCAxXSwgWzEsIDAsIC0xXSwgWy0xLCAwLCAtMV0sXG4gICAgWzAsIDEsIDFdLCBbMCwgLTEsIDFdLCBbMCwgMSwgLTFdLCBbMCwgLTEsIC0xXVxuXTtcbmNvbnN0IF9fbm9pc2VfcGVybVRhYmxlID0gWzE1MSwgMTYwLCAxMzcsIDkxLCA5MCwgMTUsXG4gICAgMTMxLCAxMywgMjAxLCA5NSwgOTYsIDUzLCAxOTQsIDIzMywgNywgMjI1LCAxNDAsIDM2LCAxMDMsIDMwLCA2OSwgMTQyLCA4LCA5OSwgMzcsIDI0MCwgMjEsIDEwLCAyMyxcbiAgICAxOTAsIDYsIDE0OCwgMjQ3LCAxMjAsIDIzNCwgNzUsIDAsIDI2LCAxOTcsIDYyLCA5NCwgMjUyLCAyMTksIDIwMywgMTE3LCAzNSwgMTEsIDMyLCA1NywgMTc3LCAzMyxcbiAgICA4OCwgMjM3LCAxNDksIDU2LCA4NywgMTc0LCAyMCwgMTI1LCAxMzYsIDE3MSwgMTY4LCA2OCwgMTc1LCA3NCwgMTY1LCA3MSwgMTM0LCAxMzksIDQ4LCAyNywgMTY2LFxuICAgIDc3LCAxNDYsIDE1OCwgMjMxLCA4MywgMTExLCAyMjksIDEyMiwgNjAsIDIxMSwgMTMzLCAyMzAsIDIyMCwgMTA1LCA5MiwgNDEsIDU1LCA0NiwgMjQ1LCA0MCwgMjQ0LFxuICAgIDEwMiwgMTQzLCA1NCwgNjUsIDI1LCA2MywgMTYxLCAxLCAyMTYsIDgwLCA3MywgMjA5LCA3NiwgMTMyLCAxODcsIDIwOCwgODksIDE4LCAxNjksIDIwMCwgMTk2LFxuICAgIDEzNSwgMTMwLCAxMTYsIDE4OCwgMTU5LCA4NiwgMTY0LCAxMDAsIDEwOSwgMTk4LCAxNzMsIDE4NiwgMywgNjQsIDUyLCAyMTcsIDIyNiwgMjUwLCAxMjQsIDEyMyxcbiAgICA1LCAyMDIsIDM4LCAxNDcsIDExOCwgMTI2LCAyNTUsIDgyLCA4NSwgMjEyLCAyMDcsIDIwNiwgNTksIDIyNywgNDcsIDE2LCA1OCwgMTcsIDE4MiwgMTg5LCAyOCwgNDIsXG4gICAgMjIzLCAxODMsIDE3MCwgMjEzLCAxMTksIDI0OCwgMTUyLCAyLCA0NCwgMTU0LCAxNjMsIDcwLCAyMjEsIDE1MywgMTAxLCAxNTUsIDE2NywgNDMsIDE3MiwgOSxcbiAgICAxMjksIDIyLCAzOSwgMjUzLCA5LCA5OCwgMTA4LCAxMTAsIDc5LCAxMTMsIDIyNCwgMjMyLCAxNzgsIDE4NSwgMTEyLCAxMDQsIDIxOCwgMjQ2LCA5NywgMjI4LFxuICAgIDI1MSwgMzQsIDI0MiwgMTkzLCAyMzgsIDIxMCwgMTQ0LCAxMiwgMTkxLCAxNzksIDE2MiwgMjQxLCA4MSwgNTEsIDE0NSwgMjM1LCAyNDksIDE0LCAyMzksIDEwNyxcbiAgICA0OSwgMTkyLCAyMTQsIDMxLCAxODEsIDE5OSwgMTA2LCAxNTcsIDE4NCwgODQsIDIwNCwgMTc2LCAxMTUsIDEyMSwgNTAsIDQ1LCAxMjcsIDQsIDE1MCwgMjU0LFxuICAgIDEzOCwgMjM2LCAyMDUsIDkzLCAyMjIsIDExNCwgNjcsIDI5LCAyNCwgNzIsIDI0MywgMTQxLCAxMjgsIDE5NSwgNzgsIDY2LCAyMTUsIDYxLCAxNTYsIDE4MFxuXTtcbmV4cG9ydCBjbGFzcyBOb2lzZSBleHRlbmRzIFB0IHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLnBlcm0gPSBbXTtcbiAgICAgICAgdGhpcy5fbiA9IG5ldyBQdCgwLjAxLCAwLjAxKTtcbiAgICAgICAgdGhpcy5wZXJtID0gX19ub2lzZV9wZXJtVGFibGUuY29uY2F0KF9fbm9pc2VfcGVybVRhYmxlKTtcbiAgICB9XG4gICAgaW5pdE5vaXNlKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fbiA9IG5ldyBQdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0ZXAoeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIHRoaXMuX24uYWRkKHgsIHkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2VlZChzKSB7XG4gICAgICAgIGlmIChzID4gMCAmJiBzIDwgMSlcbiAgICAgICAgICAgIHMgKj0gNjU1MzY7XG4gICAgICAgIHMgPSBNYXRoLmZsb29yKHMpO1xuICAgICAgICBpZiAocyA8IDI1NilcbiAgICAgICAgICAgIHMgfD0gcyA8PCA4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdiA9IChpICYgMSkgPyBfX25vaXNlX3Blcm1UYWJsZVtpXSBeIChzICYgMjU1KSA6IF9fbm9pc2VfcGVybVRhYmxlW2ldIF4gKChzID4+IDgpICYgMjU1KTtcbiAgICAgICAgICAgIHRoaXMucGVybVtpXSA9IHRoaXMucGVybVtpICsgMjU2XSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5vaXNlMkQoKSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcih0aGlzLl9uWzBdKSkgJSAyNTU7XG4gICAgICAgIGxldCBqID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcih0aGlzLl9uWzFdKSkgJSAyNTU7XG4gICAgICAgIGxldCB4ID0gKHRoaXMuX25bMF0gJSAyNTUpIC0gaTtcbiAgICAgICAgbGV0IHkgPSAodGhpcy5fblsxXSAlIDI1NSkgLSBqO1xuICAgICAgICBsZXQgbjAwID0gVmVjLmRvdChfX25vaXNlX2dyYWQzWyhpICsgdGhpcy5wZXJtW2pdKSAlIDEyXSwgW3gsIHksIDBdKTtcbiAgICAgICAgbGV0IG4wMSA9IFZlYy5kb3QoX19ub2lzZV9ncmFkM1soaSArIHRoaXMucGVybVtqICsgMV0pICUgMTJdLCBbeCwgeSAtIDEsIDBdKTtcbiAgICAgICAgbGV0IG4xMCA9IFZlYy5kb3QoX19ub2lzZV9ncmFkM1soaSArIDEgKyB0aGlzLnBlcm1bal0pICUgMTJdLCBbeCAtIDEsIHksIDBdKTtcbiAgICAgICAgbGV0IG4xMSA9IFZlYy5kb3QoX19ub2lzZV9ncmFkM1soaSArIDEgKyB0aGlzLnBlcm1baiArIDFdKSAlIDEyXSwgW3ggLSAxLCB5IC0gMSwgMF0pO1xuICAgICAgICBsZXQgX2ZhZGUgPSAoZikgPT4gZiAqIGYgKiBmICogKGYgKiAoZiAqIDYgLSAxNSkgKyAxMCk7XG4gICAgICAgIGxldCB0eCA9IF9mYWRlKHgpO1xuICAgICAgICByZXR1cm4gTnVtLmxlcnAoTnVtLmxlcnAobjAwLCBuMTAsIHR4KSwgTnVtLmxlcnAobjAxLCBuMTEsIHR4KSwgX2ZhZGUoeSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEZWxhdW5heSBleHRlbmRzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fbWVzaCA9IFtdO1xuICAgIH1cbiAgICBkZWxhdW5heSh0cmlhbmdsZU9ubHkgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHRoaXMuX21lc2ggPSBbXTtcbiAgICAgICAgbGV0IG4gPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspXG4gICAgICAgICAgICBpbmRpY2VzW2ldID0gaTtcbiAgICAgICAgaW5kaWNlcy5zb3J0KChpLCBqKSA9PiB0aGlzW2pdWzBdIC0gdGhpc1tpXVswXSk7XG4gICAgICAgIGxldCBwdHMgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBzdCA9IHRoaXMuX3N1cGVyVHJpYW5nbGUoKTtcbiAgICAgICAgcHRzID0gcHRzLmNvbmNhdChzdCk7XG4gICAgICAgIGxldCBvcGVuZWQgPSBbdGhpcy5fY2lyY3VtKG4sIG4gKyAxLCBuICsgMiwgc3QpXTtcbiAgICAgICAgbGV0IGNsb3NlZCA9IFtdO1xuICAgICAgICBsZXQgdHJpcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5kaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSBpbmRpY2VzW2ldO1xuICAgICAgICAgICAgbGV0IGVkZ2VzID0gW107XG4gICAgICAgICAgICBsZXQgaiA9IG9wZW5lZC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX21lc2hbY10pXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzaFtjXSA9IHt9O1xuICAgICAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgICAgICAgIGxldCBjaXJjdW0gPSBvcGVuZWRbal07XG4gICAgICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGNpcmN1bS5jaXJjbGVbMV1bMF07XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBwdHNbY10uJHN1YnRyYWN0KGNpcmN1bS5jaXJjbGVbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChkWzBdID4gMCAmJiBkWzBdICogZFswXSA+IHJhZGl1cyAqIHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZWQucHVzaChjaXJjdW0pO1xuICAgICAgICAgICAgICAgICAgICB0cmlzLnB1c2goY2lyY3VtLnRyaWFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkWzBdICogZFswXSArIGRbMV0gKiBkWzFdIC0gcmFkaXVzICogcmFkaXVzID4gQ29uc3QuZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWRnZXMucHVzaChjaXJjdW0uaSwgY2lyY3VtLmosIGNpcmN1bS5qLCBjaXJjdW0uaywgY2lyY3VtLmssIGNpcmN1bS5pKTtcbiAgICAgICAgICAgICAgICBvcGVuZWQuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRGVsYXVuYXkuX2RlZHVwZShlZGdlcyk7XG4gICAgICAgICAgICBqID0gZWRnZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGogPiAxKSB7XG4gICAgICAgICAgICAgICAgb3BlbmVkLnB1c2godGhpcy5fY2lyY3VtKGVkZ2VzWy0tal0sIGVkZ2VzWy0tal0sIGMsIGZhbHNlLCBwdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gb3BlbmVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbyA9IG9wZW5lZFtpXTtcbiAgICAgICAgICAgIGlmIChvLmkgPCBuICYmIG8uaiA8IG4gJiYgby5rIDwgbikge1xuICAgICAgICAgICAgICAgIGNsb3NlZC5wdXNoKG8pO1xuICAgICAgICAgICAgICAgIHRyaXMucHVzaChvLnRyaWFuZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZShvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRyaWFuZ2xlT25seSkgPyB0cmlzIDogY2xvc2VkO1xuICAgIH1cbiAgICB2b3Jvbm9pKCkge1xuICAgICAgICBsZXQgdnMgPSBbXTtcbiAgICAgICAgbGV0IG4gPSB0aGlzLl9tZXNoO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdnMucHVzaCh0aGlzLm5laWdoYm9yUHRzKGksIHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdnM7XG4gICAgfVxuICAgIG1lc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoO1xuICAgIH1cbiAgICBuZWlnaGJvclB0cyhpLCBzb3J0ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGNzID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBuID0gdGhpcy5fbWVzaDtcbiAgICAgICAgZm9yIChsZXQgayBpbiBuW2ldKSB7XG4gICAgICAgICAgICBpZiAobltpXS5oYXNPd25Qcm9wZXJ0eShrKSlcbiAgICAgICAgICAgICAgICBjcy5wdXNoKG5baV1ba10uY2lyY2xlWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNvcnQpID8gR2VvbS5zb3J0RWRnZXMoY3MpIDogY3M7XG4gICAgfVxuICAgIG5laWdoYm9ycyhpKSB7XG4gICAgICAgIGxldCBjcyA9IFtdO1xuICAgICAgICBsZXQgbiA9IHRoaXMuX21lc2g7XG4gICAgICAgIGZvciAobGV0IGsgaW4gbltpXSkge1xuICAgICAgICAgICAgaWYgKG5baV0uaGFzT3duUHJvcGVydHkoaykpXG4gICAgICAgICAgICAgICAgY3MucHVzaChuW2ldW2tdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3M7XG4gICAgfVxuICAgIF9jYWNoZShvKSB7XG4gICAgICAgIHRoaXMuX21lc2hbby5pXVtgJHtNYXRoLm1pbihvLmosIG8uayl9LSR7TWF0aC5tYXgoby5qLCBvLmspfWBdID0gbztcbiAgICAgICAgdGhpcy5fbWVzaFtvLmpdW2Ake01hdGgubWluKG8uaSwgby5rKX0tJHtNYXRoLm1heChvLmksIG8uayl9YF0gPSBvO1xuICAgICAgICB0aGlzLl9tZXNoW28ua11bYCR7TWF0aC5taW4oby5pLCBvLmopfS0ke01hdGgubWF4KG8uaSwgby5qKX1gXSA9IG87XG4gICAgfVxuICAgIF9zdXBlclRyaWFuZ2xlKCkge1xuICAgICAgICBsZXQgbWluUHQgPSB0aGlzWzBdO1xuICAgICAgICBsZXQgbWF4UHQgPSB0aGlzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMSwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbWluUHQgPSBtaW5QdC4kbWluKHRoaXNbaV0pO1xuICAgICAgICAgICAgbWF4UHQgPSBtYXhQdC4kbWF4KHRoaXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkID0gbWF4UHQuJHN1YnRyYWN0KG1pblB0KTtcbiAgICAgICAgbGV0IG1pZCA9IG1pblB0LiRhZGQobWF4UHQpLmRpdmlkZSgyKTtcbiAgICAgICAgbGV0IGRtYXggPSBNYXRoLm1heChkWzBdLCBkWzFdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChtaWQuJHN1YnRyYWN0KDIwICogZG1heCwgZG1heCksIG1pZC4kYWRkKDAsIDIwICogZG1heCksIG1pZC4kYWRkKDIwICogZG1heCwgLWRtYXgpKTtcbiAgICB9XG4gICAgX3RyaWFuZ2xlKGksIGosIGssIHB0cyA9IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChwdHNbaV0sIHB0c1tqXSwgcHRzW2tdKTtcbiAgICB9XG4gICAgX2NpcmN1bShpLCBqLCBrLCB0cmksIHB0cyA9IHRoaXMpIHtcbiAgICAgICAgbGV0IHQgPSB0cmkgfHwgdGhpcy5fdHJpYW5nbGUoaSwgaiwgaywgcHRzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGk6IGksXG4gICAgICAgICAgICBqOiBqLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgICAgIHRyaWFuZ2xlOiB0LFxuICAgICAgICAgICAgY2lyY2xlOiBUcmlhbmdsZS5jaXJjdW1jaXJjbGUodClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIF9kZWR1cGUoZWRnZXMpIHtcbiAgICAgICAgbGV0IGogPSBlZGdlcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChqID4gMSkge1xuICAgICAgICAgICAgbGV0IGIgPSBlZGdlc1stLWpdO1xuICAgICAgICAgICAgbGV0IGEgPSBlZGdlc1stLWpdO1xuICAgICAgICAgICAgbGV0IGkgPSBqO1xuICAgICAgICAgICAgd2hpbGUgKGkgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSBlZGdlc1stLWldO1xuICAgICAgICAgICAgICAgIGxldCBtID0gZWRnZXNbLS1pXTtcbiAgICAgICAgICAgICAgICBpZiAoKGEgPT0gbSAmJiBiID09IG4pIHx8IChhID09IG4gJiYgYiA9PSBtKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlcy5zcGxpY2UoaiwgMik7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzLnNwbGljZShpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlZGdlcztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DcmVhdGUuanMubWFwIiwiLyohIFNvdXJjZSBjb2RlIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSBMaWNlbnNlIDIuMC4gQ29weXJpZ2h0IMKpIDIwMTctY3VycmVudCBXaWxsaWFtIE5nYW4gYW5kIGNvbnRyaWJ1dG9ycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbmdhbi9wdHMpICovXG5pbXBvcnQgeyBNdWx0aVRvdWNoU3BhY2UgfSBmcm9tICcuL1NwYWNlJztcbmltcG9ydCB7IFZpc3VhbEZvcm0sIEZvbnQgfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi9VdGlsJztcbmltcG9ydCB7IFB0LCBCb3VuZCB9IGZyb20gJy4vUHQnO1xuZXhwb3J0IGNsYXNzIERPTVNwYWNlIGV4dGVuZHMgTXVsdGlUb3VjaFNwYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtLCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gXCJkb21zcGFjZVwiO1xuICAgICAgICB0aGlzLl9hdXRvUmVzaXplID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYmdjb2xvciA9IFwiI2UxZTlmMFwiO1xuICAgICAgICB0aGlzLl9jc3MgPSB7fTtcbiAgICAgICAgdmFyIF9zZWxlY3RvciA9IG51bGw7XG4gICAgICAgIHZhciBfZXhpc3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gXCJwdHNcIjtcbiAgICAgICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICBfc2VsZWN0b3IgPSBlbGVtO1xuICAgICAgICAgICAgdGhpcy5pZCA9IFwicHRzX2V4aXN0aW5nX3NwYWNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICAgICAgX2V4aXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZCA9IGVsZW0uc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET01TcGFjZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHRzX2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcyA9IERPTVNwYWNlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwdHNfZWxlbWVudFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9jb250YWluZXIpO1xuICAgICAgICAgICAgX2V4aXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcyA9IF9zZWxlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9zZWxlY3Rvci5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5fcmVhZHkuYmluZCh0aGlzLCBjYWxsYmFjayksIDUwKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZWxlbSA9IFwiZGl2XCIsIGlkLCBhcHBlbmRUbykge1xuICAgICAgICBsZXQgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG4gICAgICAgIGlmIChpZClcbiAgICAgICAgICAgIGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICBpZiAoYXBwZW5kVG8gJiYgYXBwZW5kVG8uYXBwZW5kQ2hpbGQpXG4gICAgICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIF9yZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGluaXRpYXRlICMke3RoaXMuaWR9IGVsZW1lbnRgKTtcbiAgICAgICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZUhhbmRsZXIobnVsbCk7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy5fYmdjb2xvcik7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlYWR5XCIpKTtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJzW2tdLnN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba10uc3RhcnQodGhpcy5ib3VuZC5jbG9uZSgpLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wb2ludGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIHRoaXMucmVmcmVzaChmYWxzZSk7XG4gICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuYm91bmQsIHRoaXMuX2NhbnZhcyk7XG4gICAgfVxuICAgIHNldHVwKG9wdCkge1xuICAgICAgICBpZiAob3B0LmJnY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX2JnY29sb3IgPSBvcHQuYmdjb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dG9SZXNpemUgPSAob3B0LnJlc2l6ZSAhPSB1bmRlZmluZWQpID8gb3B0LnJlc2l6ZSA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0Rm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHNldCBhdXRvUmVzaXplKGF1dG8pIHtcbiAgICAgICAgdGhpcy5fYXV0b1Jlc2l6ZSA9IGF1dG87XG4gICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jc3NbJ3dpZHRoJ107XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY3NzWydoZWlnaHQnXTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBhdXRvUmVzaXplKCkgeyByZXR1cm4gdGhpcy5fYXV0b1Jlc2l6ZTsgfVxuICAgIHJlc2l6ZShiLCBldnQpIHtcbiAgICAgICAgdGhpcy5ib3VuZCA9IGI7XG4gICAgICAgIHRoaXMuc3R5bGVzKHsgd2lkdGg6IGAke2Iud2lkdGh9cHhgLCBoZWlnaHQ6IGAke2IuaGVpZ2h0fXB4YCB9LCB0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMucGxheWVyc1trXTtcbiAgICAgICAgICAgICAgICBpZiAocC5yZXNpemUpXG4gICAgICAgICAgICAgICAgICAgIHAucmVzaXplKHRoaXMuYm91bmQsIGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9yZXNpemVIYW5kbGVyKGV2dCkge1xuICAgICAgICBsZXQgYiA9IEJvdW5kLmZyb21Cb3VuZGluZ1JlY3QodGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzKHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdHlsZXMoeyB3aWR0aDogYCR7Yi53aWR0aH1weGAsIGhlaWdodDogYCR7Yi5oZWlnaHR9cHhgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaXplKGIsIGV2dCk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH1cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cbiAgICBnZXQgcmVhZHkoKSB7IHJldHVybiB0aGlzLl9pc1JlYWR5OyB9XG4gICAgY2xlYXIoYmcpIHtcbiAgICAgICAgaWYgKGJnKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gYmc7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0IGJhY2tncm91bmQoYmcpIHtcbiAgICAgICAgdGhpcy5fYmdjb2xvciA9IGJnO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fYmdjb2xvcjtcbiAgICB9XG4gICAgZ2V0IGJhY2tncm91bmQoKSB7IHJldHVybiB0aGlzLl9iZ2NvbG9yOyB9XG4gICAgc3R5bGUoa2V5LCB2YWwsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2Nzc1trZXldID0gdmFsO1xuICAgICAgICBpZiAodXBkYXRlKVxuICAgICAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdHlsZXMoc3R5bGVzLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBrIGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrKSlcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKGssIHN0eWxlc1trXSwgdXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIHNldEF0dHIoZWxlbSwgZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoaywgZGF0YVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbmxpbmVTdHlsZXMoZGF0YSkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tdKVxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYCR7a306ICR7ZGF0YVtrXX07IGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSFRNTFNwYWNlIGV4dGVuZHMgRE9NU3BhY2Uge1xuICAgIGdldEZvcm0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgSFRNTEZvcm0odGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBodG1sRWxlbWVudChwYXJlbnQsIG5hbWUsIGlkLCBhdXRvQ2xhc3MgPSB0cnVlKSB7XG4gICAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQuYXBwZW5kQ2hpbGQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwYXJlbnQgaXMgbm90IGEgdmFsaWQgRE9NIGVsZW1lbnRcIik7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICAgIGlmICghZWxlbSkge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgICAgIGlmIChhdXRvQ2xhc3MpXG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpZC5zdWJzdHJpbmcoMCwgaWQuaW5kZXhPZihcIi1cIikpKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgcmVtb3ZlKHBsYXllcikge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgSFRNTEZvcm0uc2NvcGVJRChwbGF5ZXIpKTtcbiAgICAgICAgdGVtcC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlKHBsYXllcik7XG4gICAgfVxuICAgIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW1vdmVBbGwoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSFRNTEZvcm0gZXh0ZW5kcyBWaXN1YWxGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihzcGFjZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zdHlsZSA9IHtcbiAgICAgICAgICAgIFwiZmlsbGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0cm9rZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNmMDNcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMXB4XCIsXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIwXCIsXG4gICAgICAgICAgICBcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogMCxcbiAgICAgICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jdHggPSB7XG4gICAgICAgICAgICBncm91cDogbnVsbCxcbiAgICAgICAgICAgIGdyb3VwSUQ6IFwicHRzXCIsXG4gICAgICAgICAgICBncm91cENvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudElEOiBcInB0czBcIixcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzczogXCJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3BhY2UgPSBzcGFjZTtcbiAgICAgICAgdGhpcy5fc3BhY2UuYWRkKHsgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZ3JvdXAgPSB0aGlzLl9zcGFjZS5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5ncm91cElEID0gXCJwdHNfZG9tX1wiICsgKEhUTUxGb3JtLmdyb3VwSUQrKyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3R5bGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldCBzcGFjZSgpIHsgcmV0dXJuIHRoaXMuX3NwYWNlOyB9XG4gICAgc3R5bGVUbyhrLCB2LCB1bml0ID0gJycpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N0eC5zdHlsZVtrXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2t9IHN0eWxlIHByb3BlcnR5IGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgdGhpcy5fY3R4LnN0eWxlW2tdID0gYCR7dn0ke3VuaXR9YDtcbiAgICB9XG4gICAgYWxwaGEoYSkge1xuICAgICAgICB0aGlzLnN0eWxlVG8oXCJvcGFjaXR5XCIsIGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbChjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwiZmlsbGVkXCIsIGMpO1xuICAgICAgICAgICAgaWYgKCFjKVxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcImJhY2tncm91bmRcIiwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcImZpbGxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcImJhY2tncm91bmRcIiwgYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cm9rZShjLCB3aWR0aCwgbGluZWpvaW4sIGxpbmVjYXApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjID09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlVG8oXCJzdHJva2VkXCIsIGMpO1xuICAgICAgICAgICAgaWYgKCFjKVxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcImJvcmRlci13aWR0aFwiLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcInN0cm9rZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlVG8oXCJib3JkZXItY29sb3JcIiwgYyk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlVG8oXCJib3JkZXItd2lkdGhcIiwgKHdpZHRoIHx8IDEpICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbFRleHQoYykge1xuICAgICAgICB0aGlzLnN0eWxlVG8oXCJjb2xvclwiLCBjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNscyhjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5fY3R4LmN1cnJlbnRDbGFzcyA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguY3VycmVudENsYXNzID0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZm9udChzaXplT3JGb250LCB3ZWlnaHQsIHN0eWxlLCBsaW5lSGVpZ2h0LCBmYW1pbHkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplT3JGb250ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbnQuc2l6ZSA9IHNpemVPckZvbnQ7XG4gICAgICAgICAgICBpZiAoZmFtaWx5KVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbnQuZmFjZSA9IGZhbWlseTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC53ZWlnaHQgPSB3ZWlnaHQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgaWYgKGxpbmVIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9udC5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbnQgPSBzaXplT3JGb250O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N0eC5zdHlsZVsnZm9udCddID0gdGhpcy5fZm9udC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9jdHguc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdHlsZSk7XG4gICAgICAgIHRoaXMuX2ZvbnQgPSBuZXcgRm9udCgxMCwgXCJzYW5zLXNlcmlmXCIpO1xuICAgICAgICB0aGlzLl9jdHguc3R5bGVbJ2ZvbnQnXSA9IHRoaXMuX2ZvbnQudmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1cGRhdGVTY29wZShncm91cF9pZCwgZ3JvdXApIHtcbiAgICAgICAgdGhpcy5fY3R4Lmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuX2N0eC5ncm91cElEID0gZ3JvdXBfaWQ7XG4gICAgICAgIHRoaXMuX2N0eC5ncm91cENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5uZXh0SUQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N0eDtcbiAgICB9XG4gICAgc2NvcGUoaXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0gfHwgaXRlbS5hbmltYXRlSUQgPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIml0ZW0gbm90IGRlZmluZWQgb3Igbm90IHlldCBhZGRlZCB0byBTcGFjZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU2NvcGUoSFRNTEZvcm0uc2NvcGVJRChpdGVtKSwgdGhpcy5zcGFjZS5lbGVtZW50KTtcbiAgICB9XG4gICAgbmV4dElEKCkge1xuICAgICAgICB0aGlzLl9jdHguZ3JvdXBDb3VudCsrO1xuICAgICAgICB0aGlzLl9jdHguY3VycmVudElEID0gYCR7dGhpcy5fY3R4Lmdyb3VwSUR9LSR7dGhpcy5fY3R4Lmdyb3VwQ291bnR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N0eC5jdXJyZW50SUQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJRChjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5jdXJyZW50SUQgfHwgYHAtJHtIVE1MRm9ybS5kb21JRCsrfWA7XG4gICAgfVxuICAgIHN0YXRpYyBzY29wZUlEKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGBpdGVtLSR7aXRlbS5hbmltYXRlSUR9YDtcbiAgICB9XG4gICAgc3RhdGljIHN0eWxlKGVsZW0sIHN0eWxlcykge1xuICAgICAgICBsZXQgc3QgPSBbXTtcbiAgICAgICAgaWYgKCFzdHlsZXNbXCJmaWxsZWRcIl0pXG4gICAgICAgICAgICBzdC5wdXNoKFwiYmFja2dyb3VuZDogbm9uZVwiKTtcbiAgICAgICAgaWYgKCFzdHlsZXNbXCJzdHJva2VkXCJdKVxuICAgICAgICAgICAgc3QucHVzaChcImJvcmRlcjogbm9uZVwiKTtcbiAgICAgICAgZm9yIChsZXQgayBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoaykgJiYgayAhPSBcImZpbGxlZFwiICYmIGsgIT0gXCJzdHJva2VkXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHN0eWxlc1trXTtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0eWxlc1tcImZpbGxlZFwiXSAmJiBrLmluZGV4T2YoJ2JhY2tncm91bmQnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXN0eWxlc1tcInN0cm9rZWRcIl0gJiYgay5pbmRleE9mKCdib3JkZXItd2lkdGgnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdC5wdXNoKGAke2t9OiAke3Z9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUxTcGFjZS5zZXRBdHRyKGVsZW0sIHsgc3R5bGU6IHN0LmpvaW4oXCI7XCIpIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVjdFN0eWxlKGN0eCwgcHQsIHNpemUpIHtcbiAgICAgICAgY3R4LnN0eWxlW1wibGVmdFwiXSA9IHB0WzBdICsgXCJweFwiO1xuICAgICAgICBjdHguc3R5bGVbXCJ0b3BcIl0gPSBwdFsxXSArIFwicHhcIjtcbiAgICAgICAgY3R4LnN0eWxlW1wid2lkdGhcIl0gPSBzaXplWzBdICsgXCJweFwiO1xuICAgICAgICBjdHguc3R5bGVbXCJoZWlnaHRcIl0gPSBzaXplWzFdICsgXCJweFwiO1xuICAgICAgICByZXR1cm4gY3R4O1xuICAgIH1cbiAgICBzdGF0aWMgdGV4dFN0eWxlKGN0eCwgcHQpIHtcbiAgICAgICAgY3R4LnN0eWxlW1wibGVmdFwiXSA9IHB0WzBdICsgXCJweFwiO1xuICAgICAgICBjdHguc3R5bGVbXCJ0b3BcIl0gPSBwdFsxXSArIFwicHhcIjtcbiAgICAgICAgcmV0dXJuIGN0eDtcbiAgICB9XG4gICAgc3RhdGljIHBvaW50KGN0eCwgcHQsIHJhZGl1cyA9IDUsIHNoYXBlID0gXCJzcXVhcmVcIikge1xuICAgICAgICBpZiAoc2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBIVE1MRm9ybS5jaXJjbGUoY3R4LCBwdCwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBIVE1MRm9ybS5zcXVhcmUoY3R4LCBwdCwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwb2ludChwdCwgcmFkaXVzID0gNSwgc2hhcGUgPSBcInNxdWFyZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dElEKCk7XG4gICAgICAgIGlmIChzaGFwZSA9PSBcImNpcmNsZVwiKVxuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwMCVcIik7XG4gICAgICAgIEhUTUxGb3JtLnBvaW50KHRoaXMuX2N0eCwgcHQsIHJhZGl1cywgc2hhcGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGNpcmNsZShjdHgsIHB0LCByYWRpdXMgPSAxMCkge1xuICAgICAgICBsZXQgZWxlbSA9IEhUTUxTcGFjZS5odG1sRWxlbWVudChjdHguZ3JvdXAsIFwiZGl2XCIsIEhUTUxGb3JtLmdldElEKGN0eCkpO1xuICAgICAgICBIVE1MU3BhY2Uuc2V0QXR0cihlbGVtLCB7IGNsYXNzOiBgcHRzLWZvcm0gcHRzLWNpcmNsZSAke2N0eC5jdXJyZW50Q2xhc3N9YCB9KTtcbiAgICAgICAgSFRNTEZvcm0ucmVjdFN0eWxlKGN0eCwgbmV3IFB0KHB0KS4kc3VidHJhY3QocmFkaXVzKSwgbmV3IFB0KHJhZGl1cyAqIDIsIHJhZGl1cyAqIDIpKTtcbiAgICAgICAgSFRNTEZvcm0uc3R5bGUoZWxlbSwgY3R4LnN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIGNpcmNsZShwdHMpIHtcbiAgICAgICAgdGhpcy5uZXh0SUQoKTtcbiAgICAgICAgdGhpcy5zdHlsZVRvKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwMCVcIik7XG4gICAgICAgIEhUTUxGb3JtLmNpcmNsZSh0aGlzLl9jdHgsIHB0c1swXSwgcHRzWzFdWzBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBzcXVhcmUoY3R4LCBwdCwgaGFsZnNpemUpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBIVE1MU3BhY2UuaHRtbEVsZW1lbnQoY3R4Lmdyb3VwLCBcImRpdlwiLCBIVE1MRm9ybS5nZXRJRChjdHgpKTtcbiAgICAgICAgSFRNTFNwYWNlLnNldEF0dHIoZWxlbSwgeyBjbGFzczogYHB0cy1mb3JtIHB0cy1zcXVhcmUgJHtjdHguY3VycmVudENsYXNzfWAgfSk7XG4gICAgICAgIEhUTUxGb3JtLnJlY3RTdHlsZShjdHgsIG5ldyBQdChwdCkuJHN1YnRyYWN0KGhhbGZzaXplKSwgbmV3IFB0KGhhbGZzaXplICogMiwgaGFsZnNpemUgKiAyKSk7XG4gICAgICAgIEhUTUxGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBzcXVhcmUocHQsIGhhbGZzaXplKSB7XG4gICAgICAgIHRoaXMubmV4dElEKCk7XG4gICAgICAgIEhUTUxGb3JtLnNxdWFyZSh0aGlzLl9jdHgsIHB0LCBoYWxmc2l6ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgcmVjdChjdHgsIHB0cykge1xuICAgICAgICBsZXQgcCA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKCFVdGlsLmFycmF5Q2hlY2socCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBlbGVtID0gSFRNTFNwYWNlLmh0bWxFbGVtZW50KGN0eC5ncm91cCwgXCJkaXZcIiwgSFRNTEZvcm0uZ2V0SUQoY3R4KSk7XG4gICAgICAgIEhUTUxTcGFjZS5zZXRBdHRyKGVsZW0sIHsgY2xhc3M6IGBwdHMtZm9ybSBwdHMtcmVjdCAke2N0eC5jdXJyZW50Q2xhc3N9YCB9KTtcbiAgICAgICAgSFRNTEZvcm0ucmVjdFN0eWxlKGN0eCwgcFswXSwgcFsxXSk7XG4gICAgICAgIEhUTUxGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICByZWN0KHB0cykge1xuICAgICAgICB0aGlzLm5leHRJRCgpO1xuICAgICAgICB0aGlzLnN0eWxlVG8oXCJib3JkZXItcmFkaXVzXCIsIFwiMFwiKTtcbiAgICAgICAgSFRNTEZvcm0ucmVjdCh0aGlzLl9jdHgsIHB0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgdGV4dChjdHgsIHB0LCB0eHQpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBIVE1MU3BhY2UuaHRtbEVsZW1lbnQoY3R4Lmdyb3VwLCBcImRpdlwiLCBIVE1MRm9ybS5nZXRJRChjdHgpKTtcbiAgICAgICAgSFRNTFNwYWNlLnNldEF0dHIoZWxlbSwgeyBjbGFzczogYHB0cy1mb3JtIHB0cy10ZXh0ICR7Y3R4LmN1cnJlbnRDbGFzc31gIH0pO1xuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gdHh0O1xuICAgICAgICBIVE1MRm9ybS50ZXh0U3R5bGUoY3R4LCBwdCk7XG4gICAgICAgIEhUTUxGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICB0ZXh0KHB0LCB0eHQpIHtcbiAgICAgICAgdGhpcy5uZXh0SUQoKTtcbiAgICAgICAgSFRNTEZvcm0udGV4dCh0aGlzLl9jdHgsIHB0LCB0eHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbG9nKHR4dCkge1xuICAgICAgICB0aGlzLmZpbGwoXCIjMDAwXCIpLnN0cm9rZShcIiNmZmZcIiwgMC41KS50ZXh0KFsxMCwgMTRdLCB0eHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXJjKHB0LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBjYykge1xuICAgICAgICBVdGlsLndhcm4oXCJhcmMgaXMgbm90IGltcGxlbWVudGVkIGluIEhUTUxGb3JtXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZShwdHMpIHtcbiAgICAgICAgVXRpbC53YXJuKFwibGluZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gSFRNTEZvcm1cIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwb2x5Z29uKHB0cykge1xuICAgICAgICBVdGlsLndhcm4oXCJwb2x5Z29uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBIVE1MRm9ybVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuSFRNTEZvcm0uZ3JvdXBJRCA9IDA7XG5IVE1MRm9ybS5kb21JRCA9IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Eb20uanMubWFwIiwiLyohIFNvdXJjZSBjb2RlIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSBMaWNlbnNlIDIuMC4gQ29weXJpZ2h0IMKpIDIwMTctY3VycmVudCBXaWxsaWFtIE5nYW4gYW5kIGNvbnRyaWJ1dG9ycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbmdhbi9wdHMpICovXG5leHBvcnQgY2xhc3MgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgfVxuICAgIGdldCByZWFkeSgpIHsgcmV0dXJuIHRoaXMuX3JlYWR5OyB9XG59XG5leHBvcnQgY2xhc3MgVmlzdWFsRm9ybSBleHRlbmRzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9maWxsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdHJva2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZm9udCA9IG5ldyBGb250KDE0LCBcInNhbnMtc2VyaWZcIik7XG4gICAgfVxuICAgIGdldCBmaWxsZWQoKSB7IHJldHVybiB0aGlzLl9maWxsZWQ7IH1cbiAgICBzZXQgZmlsbGVkKGIpIHsgdGhpcy5fZmlsbGVkID0gYjsgfVxuICAgIGdldCBzdHJva2VkKCkgeyByZXR1cm4gdGhpcy5fc3Ryb2tlZDsgfVxuICAgIHNldCBzdHJva2VkKGIpIHsgdGhpcy5fc3Ryb2tlZCA9IGI7IH1cbiAgICBnZXQgY3VycmVudEZvbnQoKSB7IHJldHVybiB0aGlzLl9mb250OyB9XG4gICAgX211bHRpcGxlKGdyb3Vwcywgc2hhcGUsIC4uLnJlc3QpIHtcbiAgICAgICAgaWYgKCFncm91cHMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpc1tzaGFwZV0oZ3JvdXBzW2ldLCAuLi5yZXN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWxwaGEoYSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbChjKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaWxsT25seShjKSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsbChjKTtcbiAgICB9XG4gICAgc3Ryb2tlKGMsIHdpZHRoLCBsaW5lam9pbiwgbGluZWNhcCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3Ryb2tlT25seShjLCB3aWR0aCwgbGluZWpvaW4sIGxpbmVjYXApIHtcbiAgICAgICAgdGhpcy5maWxsKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Ryb2tlKGMsIHdpZHRoLCBsaW5lam9pbiwgbGluZWNhcCk7XG4gICAgfVxuICAgIHBvaW50cyhwdHMsIHJhZGl1cywgc2hhcGUpIHtcbiAgICAgICAgaWYgKCFwdHMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnQocHRzW2ldLCByYWRpdXMsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2lyY2xlcyhncm91cHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxlKGdyb3VwcywgXCJjaXJjbGVcIik7XG4gICAgfVxuICAgIHNxdWFyZXMoZ3JvdXBzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZShncm91cHMsIFwic3F1YXJlXCIpO1xuICAgIH1cbiAgICBsaW5lcyhncm91cHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxlKGdyb3VwcywgXCJsaW5lXCIpO1xuICAgIH1cbiAgICBwb2x5Z29ucyhncm91cHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxlKGdyb3VwcywgXCJwb2x5Z29uXCIpO1xuICAgIH1cbiAgICByZWN0cyhncm91cHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxlKGdyb3VwcywgXCJyZWN0XCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplID0gMTIsIGZhY2UgPSBcInNhbnMtc2VyaWZcIiwgd2VpZ2h0ID0gXCJcIiwgc3R5bGUgPSBcIlwiLCBsaW5lSGVpZ2h0ID0gMS41KSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuZmFjZSA9IGZhY2U7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGAke3RoaXMuc3R5bGV9ICR7dGhpcy53ZWlnaHR9ICR7dGhpcy5zaXplfXB4LyR7dGhpcy5saW5lSGVpZ2h0fSAke3RoaXMuZmFjZX1gOyB9XG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiB0aGlzLnZhbHVlOyB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtLmpzLm1hcCIsIi8qISBTb3VyY2UgY29kZSBsaWNlbnNlZCB1bmRlciBBcGFjaGUgTGljZW5zZSAyLjAuIENvcHlyaWdodCDCqSAyMDE3LWN1cnJlbnQgV2lsbGlhbSBOZ2FuIGFuZCBjb250cmlidXRvcnMuIChodHRwczovL2dpdGh1Yi5jb20vd2lsbGlhbW5nYW4vcHRzKSAqL1xuaW1wb3J0IHsgUHQsIEdyb3VwIH0gZnJvbSBcIi4vUHRcIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwiLi9PcFwiO1xuZXhwb3J0IGNsYXNzIFZlYyB7XG4gICAgc3RhdGljIGFkZChhLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICAgICAgICBhW2ldICs9IGI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICAgICAgICBhW2ldICs9IGJbaV0gfHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgc3RhdGljIHN1YnRyYWN0KGEsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAgICAgIGFbaV0gLT0gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAgICAgIGFbaV0gLT0gYltpXSB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBzdGF0aWMgbXVsdGlwbHkoYSwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgICAgYVtpXSAqPSBiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZG8gZWxlbWVudC13aXNlIG11bHRpcGx5IHNpbmNlIHRoZSBhcnJheSBsZW5ndGhzIGRvbid0IG1hdGNoOiAke2EudG9TdHJpbmcoKX0gbXVsdGlwbHktd2l0aCAke2IudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAgICAgIGFbaV0gKj0gYltpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgc3RhdGljIGRpdmlkZShhLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoYiA9PT0gMClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGl2aWRlIGJ5IHplcm9cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICAgICAgICBhW2ldIC89IGI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkbyBlbGVtZW50LXdpc2UgZGl2aWRlIHNpbmNlIHRoZSBhcnJheSBsZW5ndGhzIGRvbid0IG1hdGNoLiAke2EudG9TdHJpbmcoKX0gZGl2aWRlLWJ5ICR7Yi50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgICAgYVtpXSAvPSBiW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBzdGF0aWMgZG90KGEsIGIpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJyYXkgbGVuZ3RocyBkb24ndCBtYXRjaFwiKTtcbiAgICAgICAgbGV0IGQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZCArPSBhW2ldICogYltpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgc3RhdGljIGNyb3NzMkQoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgICB9XG4gICAgc3RhdGljIGNyb3NzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQdCgoYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXSksIChhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdKSwgKGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF0pKTtcbiAgICB9XG4gICAgc3RhdGljIG1hZ25pdHVkZShhKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoVmVjLmRvdChhLCBhKSk7XG4gICAgfVxuICAgIHN0YXRpYyB1bml0KGEsIG1hZ25pdHVkZSA9IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbSA9IChtYWduaXR1ZGUgPT09IHVuZGVmaW5lZCkgPyBWZWMubWFnbml0dWRlKGEpIDogbWFnbml0dWRlO1xuICAgICAgICBpZiAobSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBQdC5tYWtlKGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIFZlYy5kaXZpZGUoYSwgbSk7XG4gICAgfVxuICAgIHN0YXRpYyBhYnMoYSkge1xuICAgICAgICByZXR1cm4gVmVjLm1hcChhLCBNYXRoLmFicyk7XG4gICAgfVxuICAgIHN0YXRpYyBmbG9vcihhKSB7XG4gICAgICAgIHJldHVybiBWZWMubWFwKGEsIE1hdGguZmxvb3IpO1xuICAgIH1cbiAgICBzdGF0aWMgY2VpbChhKSB7XG4gICAgICAgIHJldHVybiBWZWMubWFwKGEsIE1hdGguY2VpbCk7XG4gICAgfVxuICAgIHN0YXRpYyByb3VuZChhKSB7XG4gICAgICAgIHJldHVybiBWZWMubWFwKGEsIE1hdGgucm91bmQpO1xuICAgIH1cbiAgICBzdGF0aWMgbWF4KGEpIHtcbiAgICAgICAgbGV0IG0gPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbSA9IE1hdGgubWF4KG0sIGFbaV0pO1xuICAgICAgICAgICAgaWYgKG0gPT09IGFbaV0pXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBtLCBpbmRleDogaW5kZXggfTtcbiAgICB9XG4gICAgc3RhdGljIG1pbihhKSB7XG4gICAgICAgIGxldCBtID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG0gPSBNYXRoLm1pbihtLCBhW2ldKTtcbiAgICAgICAgICAgIGlmIChtID09PSBhW2ldKVxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogbSwgaW5kZXg6IGluZGV4IH07XG4gICAgfVxuICAgIHN0YXRpYyBzdW0oYSkge1xuICAgICAgICBsZXQgcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAgcyArPSBhW2ldO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgc3RhdGljIG1hcChhLCBmbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYVtpXSA9IGZuKGFbaV0sIGksIGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXQge1xuICAgIHN0YXRpYyBhZGQoYSwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgaWYgKGFbMF0ubGVuZ3RoICE9IGJbMF0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgbWF0cml4IGlmIHJvd3MnIGFuZCBjb2x1bW5zJyBzaXplIGRvbid0IG1hdGNoLlwiKTtcbiAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWRkIG1hdHJpeCBpZiByb3dzJyBhbmQgY29sdW1ucycgc2l6ZSBkb24ndCBtYXRjaC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgbGV0IGlzTnVtID0gdHlwZW9mIGIgPT0gXCJudW1iZXJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGcucHVzaChhW2ldLiRhZGQoKGlzTnVtKSA/IGIgOiBiW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiLCB0cmFuc3Bvc2VkID0gZmFsc2UsIGVsZW1lbnR3aXNlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50d2lzZSkge1xuICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG11bHRpcGx5IG1hdHJpeCBlbGVtZW50LXdpc2UgYmVjYXVzZSB0aGUgbWF0cmljZXMnIHNpemVzIGRvbid0IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhaSA9IDAsIGFsZW4gPSBhLmxlbmd0aDsgYWkgPCBhbGVuOyBhaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGcucHVzaChhW2FpXS4kbXVsdGlwbHkoYlthaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRyYW5zcG9zZWQgJiYgYVswXS5sZW5ndGggIT0gYi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtdWx0aXBseSBtYXRyaXggaWYgcm93cyBpbiBtYXRyaXgtYSBkb24ndCBtYXRjaCBjb2x1bW5zIGluIG1hdHJpeC1iLlwiKTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNwb3NlZCAmJiBhWzBdLmxlbmd0aCAhPSBiWzBdLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG11bHRpcGx5IG1hdHJpeCBpZiB0cmFuc3Bvc2VkIGFuZCB0aGUgY29sdW1ucyBpbiBib3RoIG1hdHJpY2VzIGRvbid0IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRyYW5zcG9zZWQpXG4gICAgICAgICAgICAgICAgICAgIGIgPSBNYXQudHJhbnNwb3NlKGIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFpID0gMCwgYWxlbiA9IGEubGVuZ3RoOyBhaSA8IGFsZW47IGFpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBQdC5tYWtlKGIubGVuZ3RoLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYmkgPSAwLCBibGVuID0gYi5sZW5ndGg7IGJpIDwgYmxlbjsgYmkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcFtiaV0gPSBWZWMuZG90KGFbYWldLCBiW2JpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZy5wdXNoKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGFpID0gMCwgYWxlbiA9IGEubGVuZ3RoOyBhaSA8IGFsZW47IGFpKyspIHtcbiAgICAgICAgICAgICAgICBnLnB1c2goYVthaV0uJG11bHRpcGx5KGIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZztcbiAgICB9XG4gICAgc3RhdGljIHppcFNsaWNlKGcsIGluZGV4LCBkZWZhdWx0VmFsdWUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgeiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGdbaV0ubGVuZ3RoIC0gMSA8IGluZGV4ICYmIGRlZmF1bHRWYWx1ZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhyb3cgYEluZGV4ICR7aW5kZXh9IGlzIG91dCBvZiBib3VuZHNgO1xuICAgICAgICAgICAgei5wdXNoKGdbaV1baW5kZXhdIHx8IGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQdCh6KTtcbiAgICB9XG4gICAgc3RhdGljIHppcChnLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSwgdXNlTG9uZ2VzdCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwcyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgbGVuID0gKHVzZUxvbmdlc3QpID8gZy5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWF4KGEsIGIubGVuZ3RoKSwgMCkgOiBnWzBdLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcHMucHVzaChNYXQuemlwU2xpY2UoZywgaSwgZGVmYXVsdFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBzO1xuICAgIH1cbiAgICBzdGF0aWMgdHJhbnNwb3NlKGcsIGRlZmF1bHRWYWx1ZSA9IGZhbHNlLCB1c2VMb25nZXN0ID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIE1hdC56aXAoZywgZGVmYXVsdFZhbHVlLCB1c2VMb25nZXN0KTtcbiAgICB9XG4gICAgc3RhdGljIHRyYW5zZm9ybTJEKHB0LCBtKSB7XG4gICAgICAgIGxldCB4ID0gcHRbMF0gKiBtWzBdWzBdICsgcHRbMV0gKiBtWzFdWzBdICsgbVsyXVswXTtcbiAgICAgICAgbGV0IHkgPSBwdFswXSAqIG1bMF1bMV0gKyBwdFsxXSAqIG1bMV1bMV0gKyBtWzJdWzFdO1xuICAgICAgICByZXR1cm4gbmV3IFB0KHgsIHkpO1xuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUyRE1hdHJpeCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KHgsIDAsIDApLCBuZXcgUHQoMCwgeSwgMCksIG5ldyBQdCgwLCAwLCAxKSk7XG4gICAgfVxuICAgIHN0YXRpYyByb3RhdGUyRE1hdHJpeChjb3NBLCBzaW5BKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KGNvc0EsIHNpbkEsIDApLCBuZXcgUHQoLXNpbkEsIGNvc0EsIDApLCBuZXcgUHQoMCwgMCwgMSkpO1xuICAgIH1cbiAgICBzdGF0aWMgc2hlYXIyRE1hdHJpeCh0YW5YLCB0YW5ZKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KDEsIHRhblgsIDApLCBuZXcgUHQodGFuWSwgMSwgMCksIG5ldyBQdCgwLCAwLCAxKSk7XG4gICAgfVxuICAgIHN0YXRpYyB0cmFuc2xhdGUyRE1hdHJpeCh4LCB5KSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KDEsIDAsIDApLCBuZXcgUHQoMCwgMSwgMCksIG5ldyBQdCh4LCB5LCAxKSk7XG4gICAgfVxuICAgIHN0YXRpYyBzY2FsZUF0MkRNYXRyaXgoc3gsIHN5LCBhdCkge1xuICAgICAgICBsZXQgbSA9IE1hdC5zY2FsZTJETWF0cml4KHN4LCBzeSk7XG4gICAgICAgIG1bMl1bMF0gPSAtYXRbMF0gKiBzeCArIGF0WzBdO1xuICAgICAgICBtWzJdWzFdID0gLWF0WzFdICogc3kgKyBhdFsxXTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIHN0YXRpYyByb3RhdGVBdDJETWF0cml4KGNvc0EsIHNpbkEsIGF0KSB7XG4gICAgICAgIGxldCBtID0gTWF0LnJvdGF0ZTJETWF0cml4KGNvc0EsIHNpbkEpO1xuICAgICAgICBtWzJdWzBdID0gYXRbMF0gKiAoMSAtIGNvc0EpICsgYXRbMV0gKiBzaW5BO1xuICAgICAgICBtWzJdWzFdID0gYXRbMV0gKiAoMSAtIGNvc0EpIC0gYXRbMF0gKiBzaW5BO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG4gICAgc3RhdGljIHNoZWFyQXQyRE1hdHJpeCh0YW5YLCB0YW5ZLCBhdCkge1xuICAgICAgICBsZXQgbSA9IE1hdC5zaGVhcjJETWF0cml4KHRhblgsIHRhblkpO1xuICAgICAgICBtWzJdWzBdID0gLWF0WzFdICogdGFuWTtcbiAgICAgICAgbVsyXVsxXSA9IC1hdFswXSAqIHRhblg7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICBzdGF0aWMgcmVmbGVjdEF0MkRNYXRyaXgocDEsIHAyKSB7XG4gICAgICAgIGxldCBpbnRlcmNlcHQgPSBMaW5lLmludGVyY2VwdChwMSwgcDIpO1xuICAgICAgICBpZiAoaW50ZXJjZXB0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgUHQoWy0xLCAwLCAwXSksXG4gICAgICAgICAgICAgICAgbmV3IFB0KFswLCAxLCAwXSksXG4gICAgICAgICAgICAgICAgbmV3IFB0KFtwMVswXSArIHAyWzBdLCAwLCAxXSlcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeWkgPSBpbnRlcmNlcHQueWk7XG4gICAgICAgICAgICBsZXQgYW5nMiA9IE1hdGguYXRhbihpbnRlcmNlcHQuc2xvcGUpICogMjtcbiAgICAgICAgICAgIGxldCBjb3NBID0gTWF0aC5jb3MoYW5nMik7XG4gICAgICAgICAgICBsZXQgc2luQSA9IE1hdGguc2luKGFuZzIpO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgUHQoW2Nvc0EsIHNpbkEsIDBdKSxcbiAgICAgICAgICAgICAgICBuZXcgUHQoW3NpbkEsIC1jb3NBLCAwXSksXG4gICAgICAgICAgICAgICAgbmV3IFB0KFsteWkgKiBzaW5BLCB5aSArIHlpICogY29zQSwgMV0pXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGluZWFyQWxnZWJyYS5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IENvbnN0LCBVdGlsIH0gZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IHsgQ3VydmUgfSBmcm9tIFwiLi9PcFwiO1xuaW1wb3J0IHsgUHQsIEdyb3VwIH0gZnJvbSBcIi4vUHRcIjtcbmltcG9ydCB7IFZlYywgTWF0IH0gZnJvbSBcIi4vTGluZWFyQWxnZWJyYVwiO1xuZXhwb3J0IGNsYXNzIE51bSB7XG4gICAgc3RhdGljIGVxdWFscyhhLCBiLCB0aHJlc2hvbGQgPSAwLjAwMDAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhIC0gYikgPCB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHN0YXRpYyBsZXJwKGEsIGIsIHQpIHtcbiAgICAgICAgcmV0dXJuICgxIC0gdCkgKiBhICsgdCAqIGI7XG4gICAgfVxuICAgIHN0YXRpYyBjbGFtcCh2YWwsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSk7XG4gICAgfVxuICAgIHN0YXRpYyBib3VuZFZhbHVlKHZhbCwgbWluLCBtYXgpIHtcbiAgICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKG1heCAtIG1pbik7XG4gICAgICAgIGxldCBhID0gdmFsICUgbGVuO1xuICAgICAgICBpZiAoYSA+IG1heClcbiAgICAgICAgICAgIGEgLT0gbGVuO1xuICAgICAgICBlbHNlIGlmIChhIDwgbWluKVxuICAgICAgICAgICAgYSArPSBsZW47XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBzdGF0aWMgd2l0aGluKHAsIGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHAgPj0gTWF0aC5taW4oYSwgYikgJiYgcCA8PSBNYXRoLm1heChhLCBiKTtcbiAgICB9XG4gICAgc3RhdGljIHJhbmRvbVJhbmdlKGEsIGIgPSAwKSB7XG4gICAgICAgIGxldCByID0gKGEgPiBiKSA/IChhIC0gYikgOiAoYiAtIGEpO1xuICAgICAgICByZXR1cm4gYSArIE1hdGgucmFuZG9tKCkgKiByO1xuICAgIH1cbiAgICBzdGF0aWMgbm9ybWFsaXplVmFsdWUobiwgYSwgYikge1xuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oYSwgYik7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heChhLCBiKTtcbiAgICAgICAgcmV0dXJuIChuIC0gbWluKSAvIChtYXggLSBtaW4pO1xuICAgIH1cbiAgICBzdGF0aWMgc3VtKHB0cykge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgbGV0IGMgPSBuZXcgUHQoX3B0c1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxLCBsZW4gPSBfcHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBWZWMuYWRkKGMsIF9wdHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICBzdGF0aWMgYXZlcmFnZShwdHMpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIHJldHVybiBOdW0uc3VtKF9wdHMpLmRpdmlkZShfcHRzLmxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBjeWNsZSh0LCBtZXRob2QgPSBTaGFwaW5nLnNpbmVJbk91dCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHQgPiAwLjUgPyAyIC0gdCAqIDIgOiB0ICogMik7XG4gICAgfVxuICAgIHN0YXRpYyBtYXBUb1JhbmdlKG4sIGN1cnJBLCBjdXJyQiwgdGFyZ2V0QSwgdGFyZ2V0Qikge1xuICAgICAgICBpZiAoY3VyckEgPT0gY3VyckIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbY3Vyck1pbiwgY3Vyck1heF0gbXVzdCBkZWZpbmUgYSByYW5nZSB0aGF0IGlzIG5vdCB6ZXJvXCIpO1xuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4odGFyZ2V0QSwgdGFyZ2V0Qik7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heCh0YXJnZXRBLCB0YXJnZXRCKTtcbiAgICAgICAgcmV0dXJuIE51bS5ub3JtYWxpemVWYWx1ZShuLCBjdXJyQSwgY3VyckIpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdlb20ge1xuICAgIHN0YXRpYyBib3VuZEFuZ2xlKGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBOdW0uYm91bmRWYWx1ZShhbmdsZSwgMCwgMzYwKTtcbiAgICB9XG4gICAgc3RhdGljIGJvdW5kUmFkaWFuKHJhZGlhbikge1xuICAgICAgICByZXR1cm4gTnVtLmJvdW5kVmFsdWUocmFkaWFuLCAwLCBDb25zdC50d29fcGkpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIGFuZ2xlICogQ29uc3QuZGVnX3RvX3JhZDtcbiAgICB9XG4gICAgc3RhdGljIHRvRGVncmVlKHJhZGlhbikge1xuICAgICAgICByZXR1cm4gcmFkaWFuICogQ29uc3QucmFkX3RvX2RlZztcbiAgICB9XG4gICAgc3RhdGljIGJvdW5kaW5nQm94KHB0cykge1xuICAgICAgICBsZXQgbWluUHQsIG1heFB0O1xuICAgICAgICBmb3IgKGxldCBwIG9mIHB0cykge1xuICAgICAgICAgICAgaWYgKG1pblB0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG1pblB0ID0gcC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIG1heFB0ID0gcC5jbG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluUHQgPSBtaW5QdC4kbWluKHApO1xuICAgICAgICAgICAgICAgIG1heFB0ID0gbWF4UHQuJG1heChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKG1pblB0LCBtYXhQdCk7XG4gICAgfVxuICAgIHN0YXRpYyBjZW50cm9pZChwdHMpIHtcbiAgICAgICAgcmV0dXJuIE51bS5hdmVyYWdlKHB0cyk7XG4gICAgfVxuICAgIHN0YXRpYyBhbmNob3IocHRzLCBwdE9ySW5kZXggPSAwLCBkaXJlY3Rpb24gPSBcInRvXCIpIHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IChkaXJlY3Rpb24gPT0gXCJ0b1wiKSA/IFwic3VidHJhY3RcIiA6IFwiYWRkXCI7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwdHMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHRPckluZGV4ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHRPckluZGV4ICE9PSBpKVxuICAgICAgICAgICAgICAgICAgICBwW21ldGhvZF0ocHRzW3B0T3JJbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFttZXRob2RdKHB0T3JJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGludGVycG9sYXRlKGEsIGIsIHQgPSAwLjUpIHtcbiAgICAgICAgbGV0IGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gICAgICAgIGxldCBkID0gUHQubWFrZShsZW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBkW2ldID0gYVtpXSAqICgxIC0gdCkgKyBiW2ldICogdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgc3RhdGljIHBlcnBlbmRpY3VsYXIocHQsIGF4aXMgPSBDb25zdC54eSkge1xuICAgICAgICBsZXQgeSA9IGF4aXNbMV07XG4gICAgICAgIGxldCB4ID0gYXhpc1swXTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHQocHQpO1xuICAgICAgICBsZXQgcGEgPSBuZXcgUHQocCk7XG4gICAgICAgIHBhW3hdID0gLXBbeV07XG4gICAgICAgIHBhW3ldID0gcFt4XTtcbiAgICAgICAgbGV0IHBiID0gbmV3IFB0KHApO1xuICAgICAgICBwYlt4XSA9IHBbeV07XG4gICAgICAgIHBiW3ldID0gLXBbeF07XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAocGEsIHBiKTtcbiAgICB9XG4gICAgc3RhdGljIGlzUGVycGVuZGljdWxhcihwMSwgcDIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQdChwMSkuZG90KHAyKSA9PT0gMDtcbiAgICB9XG4gICAgc3RhdGljIHdpdGhpbkJvdW5kKHB0LCBib3VuZFB0MSwgYm91bmRQdDIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHB0Lmxlbmd0aCwgYm91bmRQdDEubGVuZ3RoLCBib3VuZFB0Mi5sZW5ndGgpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghTnVtLndpdGhpbihwdFtpXSwgYm91bmRQdDFbaV0sIGJvdW5kUHQyW2ldKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBzb3J0RWRnZXMocHRzKSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheShwdHMpO1xuICAgICAgICBsZXQgYm91bmRzID0gR2VvbS5ib3VuZGluZ0JveChfcHRzKTtcbiAgICAgICAgbGV0IGNlbnRlciA9IGJvdW5kc1sxXS5hZGQoYm91bmRzWzBdKS5kaXZpZGUoMik7XG4gICAgICAgIGxldCBmbiA9IChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggPCAyIHx8IGIubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQdCBkaW1lbnNpb24gY2Fubm90IGJlIGxlc3MgdGhhbiAyXCIpO1xuICAgICAgICAgICAgbGV0IGRhID0gYS4kc3VidHJhY3QoY2VudGVyKTtcbiAgICAgICAgICAgIGxldCBkYiA9IGIuJHN1YnRyYWN0KGNlbnRlcik7XG4gICAgICAgICAgICBpZiAoZGFbMF0gPj0gMCAmJiBkYlswXSA8IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoZGFbMF0gPCAwICYmIGRiWzBdID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKGRhWzBdID09IDAgJiYgZGJbMF0gPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChkYVsxXSA+PSAwIHx8IGRiWzFdID49IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZGFbMV0gPiBkYlsxXSkgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChkYlsxXSA+IGRhWzFdKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZXQgPSBkYS4kY3Jvc3MyRChkYik7XG4gICAgICAgICAgICBpZiAoZGV0IDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmIChkZXQgPiAwKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIHJldHVybiAoZGFbMF0gKiBkYVswXSArIGRhWzFdICogZGFbMV0gPiBkYlswXSAqIGRiWzBdICsgZGJbMV0gKiBkYlsxXSkgPyAxIDogLTE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfcHRzLnNvcnQoZm4pO1xuICAgIH1cbiAgICBzdGF0aWMgc2NhbGUocHMsIHNjYWxlLCBhbmNob3IpIHtcbiAgICAgICAgbGV0IHB0cyA9IFV0aWwuaXRlclRvQXJyYXkoKHBzWzBdICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBzWzBdID09ICdudW1iZXInKSA/IFtwc10gOiBwcyk7XG4gICAgICAgIGxldCBzY3MgPSAodHlwZW9mIHNjYWxlID09IFwibnVtYmVyXCIpID8gUHQubWFrZShwdHNbMF0ubGVuZ3RoLCBzY2FsZSkgOiBzY2FsZTtcbiAgICAgICAgaWYgKCFhbmNob3IpXG4gICAgICAgICAgICBhbmNob3IgPSBQdC5tYWtlKHB0c1swXS5sZW5ndGgsIDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHB0c1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBsZW5QID0gcC5sZW5ndGg7IGsgPCBsZW5QOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwW2tdID0gKGFuY2hvciAmJiBhbmNob3Jba10pID8gYW5jaG9yW2tdICsgKHBba10gLSBhbmNob3Jba10pICogc2NzW2tdIDogcFtrXSAqIHNjc1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2VvbTtcbiAgICB9XG4gICAgc3RhdGljIHJvdGF0ZTJEKHBzLCBhbmdsZSwgYW5jaG9yLCBheGlzKSB7XG4gICAgICAgIGxldCBwdHMgPSBVdGlsLml0ZXJUb0FycmF5KChwc1swXSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwc1swXSA9PSAnbnVtYmVyJykgPyBbcHNdIDogcHMpO1xuICAgICAgICBsZXQgZm4gPSAoYW5jaG9yKSA/IE1hdC5yb3RhdGVBdDJETWF0cml4IDogTWF0LnJvdGF0ZTJETWF0cml4O1xuICAgICAgICBpZiAoIWFuY2hvcilcbiAgICAgICAgICAgIGFuY2hvciA9IFB0Lm1ha2UocHRzWzBdLmxlbmd0aCwgMCk7XG4gICAgICAgIGxldCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gKGF4aXMpID8gcHRzW2ldLiR0YWtlKGF4aXMpIDogcHRzW2ldO1xuICAgICAgICAgICAgcC50byhNYXQudHJhbnNmb3JtMkQocCwgZm4oY29zLCBzaW4sIGFuY2hvcikpKTtcbiAgICAgICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBheGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHB0c1tpXVtheGlzW2tdXSA9IHBba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHZW9tO1xuICAgIH1cbiAgICBzdGF0aWMgc2hlYXIyRChwcywgc2NhbGUsIGFuY2hvciwgYXhpcykge1xuICAgICAgICBsZXQgcHRzID0gVXRpbC5pdGVyVG9BcnJheSgocHNbMF0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcHNbMF0gPT0gJ251bWJlcicpID8gW3BzXSA6IHBzKTtcbiAgICAgICAgbGV0IHMgPSAodHlwZW9mIHNjYWxlID09IFwibnVtYmVyXCIpID8gW3NjYWxlLCBzY2FsZV0gOiBzY2FsZTtcbiAgICAgICAgaWYgKCFhbmNob3IpXG4gICAgICAgICAgICBhbmNob3IgPSBQdC5tYWtlKHB0c1swXS5sZW5ndGgsIDApO1xuICAgICAgICBsZXQgZm4gPSAoYW5jaG9yKSA/IE1hdC5zaGVhckF0MkRNYXRyaXggOiBNYXQuc2hlYXIyRE1hdHJpeDtcbiAgICAgICAgbGV0IHRhbnggPSBNYXRoLnRhbihzWzBdKTtcbiAgICAgICAgbGV0IHRhbnkgPSBNYXRoLnRhbihzWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHB0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSAoYXhpcykgPyBwdHNbaV0uJHRha2UoYXhpcykgOiBwdHNbaV07XG4gICAgICAgICAgICBwLnRvKE1hdC50cmFuc2Zvcm0yRChwLCBmbih0YW54LCB0YW55LCBhbmNob3IpKSk7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBwdHNbaV1bYXhpc1trXV0gPSBwW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2VvbTtcbiAgICB9XG4gICAgc3RhdGljIHJlZmxlY3QyRChwcywgbGluZSwgYXhpcykge1xuICAgICAgICBsZXQgcHRzID0gVXRpbC5pdGVyVG9BcnJheSgocHNbMF0gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcHNbMF0gPT0gJ251bWJlcicpID8gW3BzXSA6IHBzKTtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgbGV0IG1hdCA9IE1hdC5yZWZsZWN0QXQyRE1hdHJpeChfbGluZVswXSwgX2xpbmVbMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IChheGlzKSA/IHB0c1tpXS4kdGFrZShheGlzKSA6IHB0c1tpXTtcbiAgICAgICAgICAgIHAudG8oTWF0LnRyYW5zZm9ybTJEKHAsIG1hdCkpO1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGF4aXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHRzW2ldW2F4aXNba11dID0gcFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdlb207XG4gICAgfVxuICAgIHN0YXRpYyBjb3NUYWJsZSgpIHtcbiAgICAgICAgbGV0IGNvcyA9IG5ldyBGbG9hdDY0QXJyYXkoMzYwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNjA7IGkrKylcbiAgICAgICAgICAgIGNvc1tpXSA9IE1hdGguY29zKGkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbGV0IGZpbmQgPSAocmFkKSA9PiBjb3NbTWF0aC5mbG9vcihHZW9tLmJvdW5kQW5nbGUoR2VvbS50b0RlZ3JlZShyYWQpKSldO1xuICAgICAgICByZXR1cm4geyB0YWJsZTogY29zLCBjb3M6IGZpbmQgfTtcbiAgICB9XG4gICAgc3RhdGljIHNpblRhYmxlKCkge1xuICAgICAgICBsZXQgc2luID0gbmV3IEZsb2F0NjRBcnJheSgzNjApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM2MDsgaSsrKVxuICAgICAgICAgICAgc2luW2ldID0gTWF0aC5zaW4oaSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICBsZXQgZmluZCA9IChyYWQpID0+IHNpbltNYXRoLmZsb29yKEdlb20uYm91bmRBbmdsZShHZW9tLnRvRGVncmVlKHJhZCkpKV07XG4gICAgICAgIHJldHVybiB7IHRhYmxlOiBzaW4sIHNpbjogZmluZCB9O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwaW5nIHtcbiAgICBzdGF0aWMgbGluZWFyKHQsIGMgPSAxKSB7XG4gICAgICAgIHJldHVybiBjICogdDtcbiAgICB9XG4gICAgc3RhdGljIHF1YWRyYXRpY0luKHQsIGMgPSAxKSB7XG4gICAgICAgIHJldHVybiBjICogdCAqIHQ7XG4gICAgfVxuICAgIHN0YXRpYyBxdWFkcmF0aWNPdXQodCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIC1jICogdCAqICh0IC0gMik7XG4gICAgfVxuICAgIHN0YXRpYyBxdWFkcmF0aWNJbk91dCh0LCBjID0gMSkge1xuICAgICAgICBsZXQgZHQgPSB0ICogMjtcbiAgICAgICAgcmV0dXJuICh0IDwgMC41KSA/IGMgLyAyICogdCAqIHQgKiA0IDogLWMgLyAyICogKChkdCAtIDEpICogKGR0IC0gMykgLSAxKTtcbiAgICB9XG4gICAgc3RhdGljIGN1YmljSW4odCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgKiB0ICogdCAqIHQ7XG4gICAgfVxuICAgIHN0YXRpYyBjdWJpY091dCh0LCBjID0gMSkge1xuICAgICAgICBsZXQgZHQgPSB0IC0gMTtcbiAgICAgICAgcmV0dXJuIGMgKiAoZHQgKiBkdCAqIGR0ICsgMSk7XG4gICAgfVxuICAgIHN0YXRpYyBjdWJpY0luT3V0KHQsIGMgPSAxKSB7XG4gICAgICAgIGxldCBkdCA9IHQgKiAyO1xuICAgICAgICByZXR1cm4gKHQgPCAwLjUpID8gYyAvIDIgKiBkdCAqIGR0ICogZHQgOiBjIC8gMiAqICgoZHQgLSAyKSAqIChkdCAtIDIpICogKGR0IC0gMikgKyAyKTtcbiAgICB9XG4gICAgc3RhdGljIGV4cG9uZW50aWFsSW4odCwgYyA9IDEsIHAgPSAwLjI1KSB7XG4gICAgICAgIHJldHVybiBjICogTWF0aC5wb3codCwgMSAvIHApO1xuICAgIH1cbiAgICBzdGF0aWMgZXhwb25lbnRpYWxPdXQodCwgYyA9IDEsIHAgPSAwLjI1KSB7XG4gICAgICAgIHJldHVybiBjICogTWF0aC5wb3codCwgcCk7XG4gICAgfVxuICAgIHN0YXRpYyBzaW5lSW4odCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAqIENvbnN0LmhhbGZfcGkpICsgYztcbiAgICB9XG4gICAgc3RhdGljIHNpbmVPdXQodCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0ICogQ29uc3QuaGFsZl9waSk7XG4gICAgfVxuICAgIHN0YXRpYyBzaW5lSW5PdXQodCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbiAgICB9XG4gICAgc3RhdGljIGNvc2luZUFwcHJveCh0LCBjID0gMSkge1xuICAgICAgICBsZXQgdDIgPSB0ICogdDtcbiAgICAgICAgbGV0IHQ0ID0gdDIgKiB0MjtcbiAgICAgICAgbGV0IHQ2ID0gdDQgKiB0MjtcbiAgICAgICAgcmV0dXJuIGMgKiAoNCAqIHQ2IC8gOSAtIDE3ICogdDQgLyA5ICsgMjIgKiB0MiAvIDkpO1xuICAgIH1cbiAgICBzdGF0aWMgY2lyY3VsYXJJbih0LCBjID0gMSkge1xuICAgICAgICByZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICB9XG4gICAgc3RhdGljIGNpcmN1bGFyT3V0KHQsIGMgPSAxKSB7XG4gICAgICAgIGxldCBkdCA9IHQgLSAxO1xuICAgICAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gZHQgKiBkdCk7XG4gICAgfVxuICAgIHN0YXRpYyBjaXJjdWxhckluT3V0KHQsIGMgPSAxKSB7XG4gICAgICAgIGxldCBkdCA9IHQgKiAyO1xuICAgICAgICByZXR1cm4gKHQgPCAwLjUpID8gLWMgLyAyICogKE1hdGguc3FydCgxIC0gZHQgKiBkdCkgLSAxKSA6IGMgLyAyICogKE1hdGguc3FydCgxIC0gKGR0IC0gMikgKiAoZHQgLSAyKSkgKyAxKTtcbiAgICB9XG4gICAgc3RhdGljIGVsYXN0aWNJbih0LCBjID0gMSwgcCA9IDAuNykge1xuICAgICAgICBsZXQgZHQgPSB0IC0gMTtcbiAgICAgICAgbGV0IHMgPSAocCAvIENvbnN0LnR3b19waSkgKiAxLjU3MDc5NjMyNjc5NDg5NjY7XG4gICAgICAgIHJldHVybiBjICogKC1NYXRoLnBvdygyLCAxMCAqIGR0KSAqIE1hdGguc2luKChkdCAtIHMpICogQ29uc3QudHdvX3BpIC8gcCkpO1xuICAgIH1cbiAgICBzdGF0aWMgZWxhc3RpY091dCh0LCBjID0gMSwgcCA9IDAuNykge1xuICAgICAgICBsZXQgcyA9IChwIC8gQ29uc3QudHdvX3BpKSAqIDEuNTcwNzk2MzI2Nzk0ODk2NjtcbiAgICAgICAgcmV0dXJuIGMgKiAoTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAtIHMpICogQ29uc3QudHdvX3BpIC8gcCkpICsgYztcbiAgICB9XG4gICAgc3RhdGljIGVsYXN0aWNJbk91dCh0LCBjID0gMSwgcCA9IDAuNikge1xuICAgICAgICBsZXQgZHQgPSB0ICogMjtcbiAgICAgICAgbGV0IHMgPSAocCAvIENvbnN0LnR3b19waSkgKiAxLjU3MDc5NjMyNjc5NDg5NjY7XG4gICAgICAgIGlmICh0IDwgMC41KSB7XG4gICAgICAgICAgICBkdCAtPSAxO1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoLTAuNSAqIChNYXRoLnBvdygyLCAxMCAqIGR0KSAqIE1hdGguc2luKChkdCAtIHMpICogQ29uc3QudHdvX3BpIC8gcCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR0IC09IDE7XG4gICAgICAgICAgICByZXR1cm4gYyAqICgwLjUgKiAoTWF0aC5wb3coMiwgLTEwICogZHQpICogTWF0aC5zaW4oKGR0IC0gcykgKiBDb25zdC50d29fcGkgLyBwKSkpICsgYztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYm91bmNlSW4odCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgLSBTaGFwaW5nLmJvdW5jZU91dCgoMSAtIHQpLCBjKTtcbiAgICB9XG4gICAgc3RhdGljIGJvdW5jZU91dCh0LCBjID0gMSkge1xuICAgICAgICBpZiAodCA8ICgxIC8gMi43NSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xuICAgICAgICAgICAgdCAtPSAxLjUgLyAyLjc1O1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQgKyAwLjc1KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgICAgICB0IC09IDIuMjUgLyAyLjc1O1xuICAgICAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQgKyAwLjkzNzUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdCAtPSAyLjYyNSAvIDIuNzU7XG4gICAgICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCArIDAuOTg0Mzc1KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYm91bmNlSW5PdXQodCwgYyA9IDEpIHtcbiAgICAgICAgcmV0dXJuICh0IDwgMC41KSA/IFNoYXBpbmcuYm91bmNlSW4odCAqIDIsIGMpIC8gMiA6IFNoYXBpbmcuYm91bmNlT3V0KHQgKiAyIC0gMSwgYykgLyAyICsgYyAvIDI7XG4gICAgfVxuICAgIHN0YXRpYyBzaWdtb2lkKHQsIGMgPSAxLCBwID0gMTApIHtcbiAgICAgICAgbGV0IGQgPSBwICogKHQgLSAwLjUpO1xuICAgICAgICByZXR1cm4gYyAvICgxICsgTWF0aC5leHAoLWQpKTtcbiAgICB9XG4gICAgc3RhdGljIGxvZ1NpZ21vaWQodCwgYyA9IDEsIHAgPSAwLjcpIHtcbiAgICAgICAgcCA9IE1hdGgubWF4KENvbnN0LmVwc2lsb24sIE1hdGgubWluKDEgLSBDb25zdC5lcHNpbG9uLCBwKSk7XG4gICAgICAgIHAgPSAxIC8gKDEgLSBwKTtcbiAgICAgICAgbGV0IEEgPSAxIC8gKDEgKyBNYXRoLmV4cCgoKHQgLSAwLjUpICogcCAqIC0yKSkpO1xuICAgICAgICBsZXQgQiA9IDEgLyAoMSArIE1hdGguZXhwKHApKTtcbiAgICAgICAgbGV0IEMgPSAxIC8gKDEgKyBNYXRoLmV4cCgtcCkpO1xuICAgICAgICByZXR1cm4gYyAqIChBIC0gQikgLyAoQyAtIEIpO1xuICAgIH1cbiAgICBzdGF0aWMgc2VhdCh0LCBjID0gMSwgcCA9IDAuNSkge1xuICAgICAgICBpZiAoKHQgPCAwLjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqIChNYXRoLnBvdygyICogdCwgMSAtIHApKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYyAqICgxIC0gKE1hdGgucG93KDIgKiAoMSAtIHQpLCAxIC0gcCkpIC8gMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHF1YWRyYXRpY0Jlemllcih0LCBjID0gMSwgcCA9IFswLjA1LCAwLjk1XSkge1xuICAgICAgICBsZXQgYSA9ICh0eXBlb2YgcCAhPSBcIm51bWJlclwiKSA/IHBbMF0gOiBwO1xuICAgICAgICBsZXQgYiA9ICh0eXBlb2YgcCAhPSBcIm51bWJlclwiKSA/IHBbMV0gOiAwLjU7XG4gICAgICAgIGxldCBvbTJhID0gMSAtIDIgKiBhO1xuICAgICAgICBpZiAob20yYSA9PT0gMCkge1xuICAgICAgICAgICAgb20yYSA9IENvbnN0LmVwc2lsb247XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGQgPSAoTWF0aC5zcXJ0KGEgKiBhICsgb20yYSAqIHQpIC0gYSkgLyBvbTJhO1xuICAgICAgICByZXR1cm4gYyAqICgoMSAtIDIgKiBiKSAqIChkICogZCkgKyAoMiAqIGIpICogZCk7XG4gICAgfVxuICAgIHN0YXRpYyBjdWJpY0Jlemllcih0LCBjID0gMSwgcDEgPSBbMC4xLCAwLjddLCBwMiA9IFswLjksIDAuMl0pIHtcbiAgICAgICAgbGV0IGN1cnZlID0gbmV3IEdyb3VwKG5ldyBQdCgwLCAwKSwgbmV3IFB0KHAxKSwgbmV3IFB0KHAyKSwgbmV3IFB0KDEsIDEpKTtcbiAgICAgICAgcmV0dXJuIGMgKiBDdXJ2ZS5iZXppZXJTdGVwKG5ldyBQdCh0ICogdCAqIHQsIHQgKiB0LCB0LCAxKSwgQ3VydmUuY29udHJvbFBvaW50cyhjdXJ2ZSkpLnk7XG4gICAgfVxuICAgIHN0YXRpYyBxdWFkcmF0aWNUYXJnZXQodCwgYyA9IDEsIHAxID0gWzAuMiwgMC4zNV0pIHtcbiAgICAgICAgbGV0IGEgPSBNYXRoLm1pbigxIC0gQ29uc3QuZXBzaWxvbiwgTWF0aC5tYXgoQ29uc3QuZXBzaWxvbiwgcDFbMF0pKTtcbiAgICAgICAgbGV0IGIgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBwMVsxXSkpO1xuICAgICAgICBsZXQgQSA9ICgxIC0gYikgLyAoMSAtIGEpIC0gKGIgLyBhKTtcbiAgICAgICAgbGV0IEIgPSAoQSAqIChhICogYSkgLSBiKSAvIGE7XG4gICAgICAgIGxldCB5ID0gQSAqICh0ICogdCkgLSBCICogdDtcbiAgICAgICAgcmV0dXJuIGMgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB5KSk7XG4gICAgfVxuICAgIHN0YXRpYyBjbGlmZih0LCBjID0gMSwgcCA9IDAuNSkge1xuICAgICAgICByZXR1cm4gKHQgPiBwKSA/IGMgOiAwO1xuICAgIH1cbiAgICBzdGF0aWMgc3RlcChmbiwgc3RlcHMsIHQsIGMsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHMgPSAxIC8gc3RlcHM7XG4gICAgICAgIGxldCB0dCA9IE1hdGguZmxvb3IodCAvIHMpICogcztcbiAgICAgICAgcmV0dXJuIGZuKHR0LCBjLCAuLi5hcmdzKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGcpIHtcbiAgICAgICAgdGhpcy5fZGltcyA9IDA7XG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IEdyb3VwLmZyb21QdEFycmF5KGcpO1xuICAgICAgICB0aGlzLmNhbGMoKTtcbiAgICB9XG4gICAgZ2V0IG1heCgpIHsgcmV0dXJuIHRoaXMuX21heC5jbG9uZSgpOyB9XG4gICAgZ2V0IG1pbigpIHsgcmV0dXJuIHRoaXMuX21pbi5jbG9uZSgpOyB9XG4gICAgZ2V0IG1hZ25pdHVkZSgpIHsgcmV0dXJuIHRoaXMuX21hZy5jbG9uZSgpOyB9XG4gICAgY2FsYygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VyY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBkaW1zID0gdGhpcy5fc291cmNlWzBdLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fZGltcyA9IGRpbXM7XG4gICAgICAgIGxldCBtYXggPSBuZXcgUHQoZGltcyk7XG4gICAgICAgIGxldCBtaW4gPSBuZXcgUHQoZGltcyk7XG4gICAgICAgIGxldCBtYWcgPSBuZXcgUHQoZGltcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltczsgaSsrKSB7XG4gICAgICAgICAgICBtYXhbaV0gPSBDb25zdC5taW47XG4gICAgICAgICAgICBtaW5baV0gPSBDb25zdC5tYXg7XG4gICAgICAgICAgICBtYWdbaV0gPSAwO1xuICAgICAgICAgICAgbGV0IHMgPSB0aGlzLl9zb3VyY2UuemlwU2xpY2UoaSk7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gcy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICAgIG1heFtpXSA9IE1hdGgubWF4KG1heFtpXSwgc1trXSk7XG4gICAgICAgICAgICAgICAgbWluW2ldID0gTWF0aC5taW4obWluW2ldLCBzW2tdKTtcbiAgICAgICAgICAgICAgICBtYWdbaV0gPSBtYXhbaV0gLSBtaW5baV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWF4ID0gbWF4O1xuICAgICAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgICAgIHRoaXMuX21hZyA9IG1hZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1hcFRvKG1pbiwgbWF4LCBleGNsdWRlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX3NvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGcgPSB0aGlzLl9zb3VyY2VbaV07XG4gICAgICAgICAgICBsZXQgbiA9IG5ldyBQdCh0aGlzLl9kaW1zKTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5fZGltczsgaysrKSB7XG4gICAgICAgICAgICAgICAgbltrXSA9IChleGNsdWRlICYmIGV4Y2x1ZGVba10pID8gZ1trXSA6IE51bS5tYXBUb1JhbmdlKGdba10sIHRoaXMuX21pbltrXSwgdGhpcy5fbWF4W2tdLCBtaW4sIG1heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBhcHBlbmQocHRzLCB1cGRhdGUgPSB0cnVlKSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheShwdHMpO1xuICAgICAgICBpZiAoX3B0c1swXS5sZW5ndGggIT09IHRoaXMuX2RpbXMpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpbWVuc2lvbnMgZG9uJ3QgbWF0Y2guICR7dGhpcy5fZGltc30gZGltZW5zaW9ucyBpbiBSYW5nZSBhbmQgJHtfcHRzWzBdLmxlbmd0aH0gcHJvdmlkZWQgaW4gcGFyYW1ldGVyLiBgKTtcbiAgICAgICAgdGhpcy5fc291cmNlID0gdGhpcy5fc291cmNlLmNvbmNhdChfcHRzKTtcbiAgICAgICAgaWYgKHVwZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuY2FsYygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGlja3MoY291bnQpIHtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBuZXcgUHQodGhpcy5fZGltcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gdGhpcy5fbWF4Lmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgcFtrXSA9IE51bS5sZXJwKHRoaXMuX21pbltrXSwgdGhpcy5fbWF4W2tdLCBpIC8gY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU51bS5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi9VdGlsXCI7XG5pbXBvcnQgeyBHZW9tLCBOdW0gfSBmcm9tIFwiLi9OdW1cIjtcbmltcG9ydCB7IFB0LCBHcm91cCB9IGZyb20gXCIuL1B0XCI7XG5pbXBvcnQgeyBNYXQgfSBmcm9tIFwiLi9MaW5lYXJBbGdlYnJhXCI7XG5sZXQgX2Vycm9yTGVuZ3RoID0gKG9iaiwgcGFyYW0gPSBcImV4cGVjdGVkXCIpID0+IFV0aWwud2FybihcIkdyb3VwJ3MgbGVuZ3RoIGlzIGxlc3MgdGhhbiBcIiArIHBhcmFtLCBvYmopO1xubGV0IF9lcnJvck91dG9mQm91bmQgPSAob2JqLCBwYXJhbSA9IFwiXCIpID0+IFV0aWwud2FybihgSW5kZXggJHtwYXJhbX0gaXMgb3V0IG9mIGJvdW5kIGluIEdyb3VwYCwgb2JqKTtcbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgICBzdGF0aWMgZnJvbUFuZ2xlKGFuY2hvciwgYW5nbGUsIG1hZ25pdHVkZSkge1xuICAgICAgICBsZXQgZyA9IG5ldyBHcm91cChuZXcgUHQoYW5jaG9yKSwgbmV3IFB0KGFuY2hvcikpO1xuICAgICAgICBnWzFdLnRvQW5nbGUoYW5nbGUsIG1hZ25pdHVkZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICBzdGF0aWMgc2xvcGUocDEsIHAyKSB7XG4gICAgICAgIHJldHVybiAocDJbMF0gLSBwMVswXSA9PT0gMCkgPyB1bmRlZmluZWQgOiAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnRlcmNlcHQocDEsIHAyKSB7XG4gICAgICAgIGlmIChwMlswXSAtIHAxWzBdID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG0gPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XG4gICAgICAgICAgICBsZXQgYyA9IHAxWzFdIC0gbSAqIHAxWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHsgc2xvcGU6IG0sIHlpOiBjLCB4aTogKG0gPT09IDApID8gdW5kZWZpbmVkIDogLWMgLyBtIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHNpZGVPZlB0MkQobGluZSwgcHQpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgcmV0dXJuIChfbGluZVsxXVswXSAtIF9saW5lWzBdWzBdKSAqIChwdFsxXSAtIF9saW5lWzBdWzFdKSAtIChwdFswXSAtIF9saW5lWzBdWzBdKSAqIChfbGluZVsxXVsxXSAtIF9saW5lWzBdWzFdKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbGxpbmVhcihwMSwgcDIsIHAzLCB0aHJlc2hvbGQgPSAwLjAxKSB7XG4gICAgICAgIGxldCBhID0gbmV3IFB0KDAsIDAsIDApLnRvKHAxKS4kc3VidHJhY3QocDIpO1xuICAgICAgICBsZXQgYiA9IG5ldyBQdCgwLCAwLCAwKS50byhwMSkuJHN1YnRyYWN0KHAzKTtcbiAgICAgICAgcmV0dXJuIGEuJGNyb3NzKGIpLmRpdmlkZSgxMDAwKS5lcXVhbHMobmV3IFB0KDAsIDAsIDApLCB0aHJlc2hvbGQpO1xuICAgIH1cbiAgICBzdGF0aWMgbWFnbml0dWRlKGxpbmUpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgcmV0dXJuIChfbGluZS5sZW5ndGggPj0gMikgPyBfbGluZVsxXS4kc3VidHJhY3QoX2xpbmVbMF0pLm1hZ25pdHVkZSgpIDogMDtcbiAgICB9XG4gICAgc3RhdGljIG1hZ25pdHVkZVNxKGxpbmUpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgcmV0dXJuIChfbGluZS5sZW5ndGggPj0gMikgPyBfbGluZVsxXS4kc3VidHJhY3QoX2xpbmVbMF0pLm1hZ25pdHVkZVNxKCkgOiAwO1xuICAgIH1cbiAgICBzdGF0aWMgcGVycGVuZGljdWxhckZyb21QdChsaW5lLCBwdCwgYXNQcm9qZWN0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgaWYgKF9saW5lWzBdLmVxdWFscyhfbGluZVsxXSkpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgYSA9IF9saW5lWzBdLiRzdWJ0cmFjdChfbGluZVsxXSk7XG4gICAgICAgIGxldCBiID0gX2xpbmVbMV0uJHN1YnRyYWN0KHB0KTtcbiAgICAgICAgbGV0IHByb2ogPSBiLiRzdWJ0cmFjdChhLiRwcm9qZWN0KGIpKTtcbiAgICAgICAgcmV0dXJuIChhc1Byb2plY3Rpb24pID8gcHJvaiA6IHByb2ouJGFkZChwdCk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXN0YW5jZUZyb21QdChsaW5lLCBwdCkge1xuICAgICAgICBsZXQgX2xpbmUgPSBVdGlsLml0ZXJUb0FycmF5KGxpbmUpO1xuICAgICAgICBsZXQgcHJvamVjdGlvblZlY3RvciA9IExpbmUucGVycGVuZGljdWxhckZyb21QdChfbGluZSwgcHQsIHRydWUpO1xuICAgICAgICBpZiAocHJvamVjdGlvblZlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Rpb25WZWN0b3IubWFnbml0dWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX2xpbmVbMF0uJHN1YnRyYWN0KHB0KS5tYWduaXR1ZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0UmF5MkQobGEsIGxiKSB7XG4gICAgICAgIGxldCBfbGEgPSBVdGlsLml0ZXJUb0FycmF5KGxhKTtcbiAgICAgICAgbGV0IF9sYiA9IFV0aWwuaXRlclRvQXJyYXkobGIpO1xuICAgICAgICBsZXQgYSA9IExpbmUuaW50ZXJjZXB0KF9sYVswXSwgX2xhWzFdKTtcbiAgICAgICAgbGV0IGIgPSBMaW5lLmludGVyY2VwdChfbGJbMF0sIF9sYlsxXSk7XG4gICAgICAgIGxldCBwYSA9IF9sYVswXTtcbiAgICAgICAgbGV0IHBiID0gX2xiWzBdO1xuICAgICAgICBpZiAoYSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChiID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbGV0IHkxID0gLWIuc2xvcGUgKiAocGJbMF0gLSBwYVswXSkgKyBwYlsxXTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHQocGFbMF0sIHkxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChiID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB5MSA9IC1hLnNsb3BlICogKHBhWzBdIC0gcGJbMF0pICsgcGFbMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQdChwYlswXSwgeTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYi5zbG9wZSAhPSBhLnNsb3BlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHB4ID0gKGEuc2xvcGUgKiBwYVswXSAtIGIuc2xvcGUgKiBwYlswXSArIHBiWzFdIC0gcGFbMV0pIC8gKGEuc2xvcGUgLSBiLnNsb3BlKTtcbiAgICAgICAgICAgICAgICBsZXQgcHkgPSBhLnNsb3BlICogKHB4IC0gcGFbMF0pICsgcGFbMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQdChweCwgcHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWkgPT0gYi55aSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFB0KHBhWzBdLCBwYVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0TGluZTJEKGxhLCBsYikge1xuICAgICAgICBsZXQgX2xhID0gVXRpbC5pdGVyVG9BcnJheShsYSk7XG4gICAgICAgIGxldCBfbGIgPSBVdGlsLml0ZXJUb0FycmF5KGxiKTtcbiAgICAgICAgbGV0IHB0ID0gTGluZS5pbnRlcnNlY3RSYXkyRChfbGEsIF9sYik7XG4gICAgICAgIHJldHVybiAocHQgJiYgR2VvbS53aXRoaW5Cb3VuZChwdCwgX2xhWzBdLCBfbGFbMV0pICYmIEdlb20ud2l0aGluQm91bmQocHQsIF9sYlswXSwgX2xiWzFdKSkgPyBwdCA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdExpbmVXaXRoUmF5MkQobGluZSwgcmF5KSB7XG4gICAgICAgIGxldCBfbGluZSA9IFV0aWwuaXRlclRvQXJyYXkobGluZSk7XG4gICAgICAgIGxldCBfcmF5ID0gVXRpbC5pdGVyVG9BcnJheShyYXkpO1xuICAgICAgICBsZXQgcHQgPSBMaW5lLmludGVyc2VjdFJheTJEKF9saW5lLCBfcmF5KTtcbiAgICAgICAgcmV0dXJuIChwdCAmJiBHZW9tLndpdGhpbkJvdW5kKHB0LCBfbGluZVswXSwgX2xpbmVbMV0pKSA/IHB0IDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0UG9seWdvbjJEKGxpbmVPclJheSwgcG9seSwgc291cmNlSXNSYXkgPSBmYWxzZSkge1xuICAgICAgICBsZXQgX2xpbmVPclJheSA9IFV0aWwuaXRlclRvQXJyYXkobGluZU9yUmF5KTtcbiAgICAgICAgbGV0IF9wb2x5ID0gVXRpbC5pdGVyVG9BcnJheShwb2x5KTtcbiAgICAgICAgbGV0IGZuID0gc291cmNlSXNSYXkgPyBMaW5lLmludGVyc2VjdExpbmVXaXRoUmF5MkQgOiBMaW5lLmludGVyc2VjdExpbmUyRDtcbiAgICAgICAgbGV0IHB0cyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gX3BvbHkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gKGkgPT09IGxlbiAtIDEpID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgbGV0IGQgPSBmbihbX3BvbHlbaV0sIF9wb2x5W25leHRdXSwgX2xpbmVPclJheSk7XG4gICAgICAgICAgICBpZiAoZClcbiAgICAgICAgICAgICAgICBwdHMucHVzaChkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHB0cy5sZW5ndGggPiAwKSA/IHB0cyA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdExpbmVzMkQobGluZXMxLCBsaW5lczIsIGlzUmF5ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBmbiA9IGlzUmF5ID8gTGluZS5pbnRlcnNlY3RMaW5lV2l0aFJheTJEIDogTGluZS5pbnRlcnNlY3RMaW5lMkQ7XG4gICAgICAgIGZvciAobGV0IGwxIG9mIGxpbmVzMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgbDIgb2YgbGluZXMyKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9pcCA9IGZuKGwxLCBsMik7XG4gICAgICAgICAgICAgICAgaWYgKF9pcClcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucHVzaChfaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdEdyaWRXaXRoUmF5MkQocmF5LCBncmlkUHQpIHtcbiAgICAgICAgbGV0IF9yYXkgPSBVdGlsLml0ZXJUb0FycmF5KHJheSk7XG4gICAgICAgIGxldCB0ID0gTGluZS5pbnRlcmNlcHQobmV3IFB0KF9yYXlbMF0pLnN1YnRyYWN0KGdyaWRQdCksIG5ldyBQdChfcmF5WzFdKS5zdWJ0cmFjdChncmlkUHQpKTtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgaWYgKHQgJiYgdC54aSlcbiAgICAgICAgICAgIGcucHVzaChuZXcgUHQoZ3JpZFB0WzBdICsgdC54aSwgZ3JpZFB0WzFdKSk7XG4gICAgICAgIGlmICh0ICYmIHQueWkpXG4gICAgICAgICAgICBnLnB1c2gobmV3IFB0KGdyaWRQdFswXSwgZ3JpZFB0WzFdICsgdC55aSkpO1xuICAgICAgICByZXR1cm4gZztcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdEdyaWRXaXRoTGluZTJEKGxpbmUsIGdyaWRQdCkge1xuICAgICAgICBsZXQgX2xpbmUgPSBVdGlsLml0ZXJUb0FycmF5KGxpbmUpO1xuICAgICAgICBsZXQgZyA9IExpbmUuaW50ZXJzZWN0R3JpZFdpdGhSYXkyRChfbGluZSwgZ3JpZFB0KTtcbiAgICAgICAgbGV0IGdnID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBnLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoR2VvbS53aXRoaW5Cb3VuZChnW2ldLCBfbGluZVswXSwgX2xpbmVbMV0pKVxuICAgICAgICAgICAgICAgIGdnLnB1c2goZ1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdnO1xuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0UmVjdDJEKGxpbmUsIHJlY3QpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgbGV0IF9yZWN0ID0gVXRpbC5pdGVyVG9BcnJheShyZWN0KTtcbiAgICAgICAgbGV0IGJveCA9IEdlb20uYm91bmRpbmdCb3goR3JvdXAuZnJvbVB0QXJyYXkoX2xpbmUpKTtcbiAgICAgICAgaWYgKCFSZWN0YW5nbGUuaGFzSW50ZXJzZWN0UmVjdDJEKGJveCwgX3JlY3QpKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cCgpO1xuICAgICAgICByZXR1cm4gTGluZS5pbnRlcnNlY3RMaW5lczJEKFtfbGluZV0sIFJlY3RhbmdsZS5zaWRlcyhfcmVjdCkpO1xuICAgIH1cbiAgICBzdGF0aWMgc3VicG9pbnRzKGxpbmUsIG51bSkge1xuICAgICAgICBsZXQgX2xpbmUgPSBVdGlsLml0ZXJUb0FycmF5KGxpbmUpO1xuICAgICAgICBsZXQgcHRzID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBwdHMucHVzaChHZW9tLmludGVycG9sYXRlKF9saW5lWzBdLCBfbGluZVsxXSwgaSAvIChudW0gKyAxKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwdHM7XG4gICAgfVxuICAgIHN0YXRpYyBjcm9wKGxpbmUsIHNpemUsIGluZGV4ID0gMCwgY3JvcEFzQ2lyY2xlID0gdHJ1ZSkge1xuICAgICAgICBsZXQgX2xpbmUgPSBVdGlsLml0ZXJUb0FycmF5KGxpbmUpO1xuICAgICAgICBsZXQgdGR4ID0gKGluZGV4ID09PSAwKSA/IDEgOiAwO1xuICAgICAgICBsZXQgbHMgPSBfbGluZVt0ZHhdLiRzdWJ0cmFjdChfbGluZVtpbmRleF0pO1xuICAgICAgICBpZiAobHNbMF0gPT09IDAgfHwgc2l6ZVswXSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBfbGluZVtpbmRleF07XG4gICAgICAgIGlmIChjcm9wQXNDaXJjbGUpIHtcbiAgICAgICAgICAgIGxldCBkID0gbHMudW5pdCgpLm11bHRpcGx5KHNpemVbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIF9saW5lW2luZGV4XS4kYWRkKGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlY3QgPSBSZWN0YW5nbGUuZnJvbUNlbnRlcihfbGluZVtpbmRleF0sIHNpemUpO1xuICAgICAgICAgICAgbGV0IHNpZGVzID0gUmVjdGFuZ2xlLnNpZGVzKHJlY3QpO1xuICAgICAgICAgICAgbGV0IHNpZGVJZHggPSAwO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGxzWzFdIC8gbHNbMF0pID4gTWF0aC5hYnMoc2l6ZVsxXSAvIHNpemVbMF0pKSB7XG4gICAgICAgICAgICAgICAgc2lkZUlkeCA9IChsc1sxXSA8IDApID8gMCA6IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaWRlSWR4ID0gKGxzWzBdIDwgMCkgPyAzIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBMaW5lLmludGVyc2VjdFJheTJEKHNpZGVzW3NpZGVJZHhdLCBfbGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG1hcmtlcihsaW5lLCBzaXplLCBncmFwaGljID0gKFwiYXJyb3dcIiB8fCBcImxpbmVcIiksIGF0VGFpbCA9IHRydWUpIHtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgbGV0IGggPSBhdFRhaWwgPyAwIDogMTtcbiAgICAgICAgbGV0IHQgPSBhdFRhaWwgPyAxIDogMDtcbiAgICAgICAgbGV0IHVuaXQgPSBfbGluZVtoXS4kc3VidHJhY3QoX2xpbmVbdF0pO1xuICAgICAgICBpZiAodW5pdC5tYWduaXR1ZGVTcSgpID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cCgpO1xuICAgICAgICB1bml0LnVuaXQoKTtcbiAgICAgICAgbGV0IHBzID0gR2VvbS5wZXJwZW5kaWN1bGFyKHVuaXQpLm11bHRpcGx5KHNpemVbMF0pLmFkZChfbGluZVt0XSk7XG4gICAgICAgIGlmIChncmFwaGljID09IFwiYXJyb3dcIikge1xuICAgICAgICAgICAgcHMuYWRkKHVuaXQuJG11bHRpcGx5KHNpemVbMV0pKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoX2xpbmVbdF0sIHBzWzBdLCBwc1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKHBzWzBdLCBwc1sxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHRvUmVjdChsaW5lKSB7XG4gICAgICAgIGxldCBfbGluZSA9IFV0aWwuaXRlclRvQXJyYXkobGluZSk7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAoX2xpbmVbMF0uJG1pbihfbGluZVsxXSksIF9saW5lWzBdLiRtYXgoX2xpbmVbMV0pKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBzdGF0aWMgZnJvbSh0b3BMZWZ0LCB3aWR0aE9yU2l6ZSwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbVRvcExlZnQodG9wTGVmdCwgd2lkdGhPclNpemUsIGhlaWdodCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tVG9wTGVmdCh0b3BMZWZ0LCB3aWR0aE9yU2l6ZSwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBzaXplID0gKHR5cGVvZiB3aWR0aE9yU2l6ZSA9PSBcIm51bWJlclwiKSA/IFt3aWR0aE9yU2l6ZSwgKGhlaWdodCB8fCB3aWR0aE9yU2l6ZSldIDogd2lkdGhPclNpemU7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KHRvcExlZnQpLCBuZXcgUHQodG9wTGVmdCkuYWRkKHNpemUpKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21DZW50ZXIoY2VudGVyLCB3aWR0aE9yU2l6ZSwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBoYWxmID0gKHR5cGVvZiB3aWR0aE9yU2l6ZSA9PSBcIm51bWJlclwiKSA/IFt3aWR0aE9yU2l6ZSAvIDIsIChoZWlnaHQgfHwgd2lkdGhPclNpemUpIC8gMl0gOiBuZXcgUHQod2lkdGhPclNpemUpLmRpdmlkZSgyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChuZXcgUHQoY2VudGVyKS5zdWJ0cmFjdChoYWxmKSwgbmV3IFB0KGNlbnRlcikuYWRkKGhhbGYpKTtcbiAgICB9XG4gICAgc3RhdGljIHRvQ2lyY2xlKHB0cywgd2l0aGluID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQ2lyY2xlLmZyb21SZWN0KHB0cywgd2l0aGluKTtcbiAgICB9XG4gICAgc3RhdGljIHRvU3F1YXJlKHB0cywgZW5jbG9zZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheShwdHMpO1xuICAgICAgICBsZXQgcyA9IFJlY3RhbmdsZS5zaXplKF9wdHMpO1xuICAgICAgICBsZXQgbSA9IChlbmNsb3NlKSA/IHMubWF4VmFsdWUoKS52YWx1ZSA6IHMubWluVmFsdWUoKS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tQ2VudGVyKFJlY3RhbmdsZS5jZW50ZXIoX3B0cyksIG0sIG0pO1xuICAgIH1cbiAgICBzdGF0aWMgc2l6ZShwdHMpIHtcbiAgICAgICAgbGV0IHAgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIHJldHVybiBwWzBdLiRtYXgocFsxXSkuc3VidHJhY3QocFswXS4kbWluKHBbMV0pKTtcbiAgICB9XG4gICAgc3RhdGljIGNlbnRlcihwdHMpIHtcbiAgICAgICAgbGV0IHAgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGxldCBtaW4gPSBwWzBdLiRtaW4ocFsxXSk7XG4gICAgICAgIGxldCBtYXggPSBwWzBdLiRtYXgocFsxXSk7XG4gICAgICAgIHJldHVybiBtaW4uYWRkKG1heC4kc3VidHJhY3QobWluKS5kaXZpZGUoMikpO1xuICAgIH1cbiAgICBzdGF0aWMgY29ybmVycyhyZWN0KSB7XG4gICAgICAgIGxldCBfcmVjdCA9IFV0aWwuaXRlclRvQXJyYXkocmVjdCk7XG4gICAgICAgIGxldCBwMCA9IF9yZWN0WzBdLiRtaW4oX3JlY3RbMV0pO1xuICAgICAgICBsZXQgcDIgPSBfcmVjdFswXS4kbWF4KF9yZWN0WzFdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChwMCwgbmV3IFB0KHAyLngsIHAwLnkpLCBwMiwgbmV3IFB0KHAwLngsIHAyLnkpKTtcbiAgICB9XG4gICAgc3RhdGljIHNpZGVzKHJlY3QpIHtcbiAgICAgICAgbGV0IFtwMCwgcDEsIHAyLCBwM10gPSBSZWN0YW5nbGUuY29ybmVycyhyZWN0KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBHcm91cChwMCwgcDEpLCBuZXcgR3JvdXAocDEsIHAyKSxcbiAgICAgICAgICAgIG5ldyBHcm91cChwMiwgcDMpLCBuZXcgR3JvdXAocDMsIHAwKVxuICAgICAgICBdO1xuICAgIH1cbiAgICBzdGF0aWMgYm91bmRpbmdCb3gocmVjdHMpIHtcbiAgICAgICAgbGV0IF9yZWN0cyA9IFV0aWwuaXRlclRvQXJyYXkocmVjdHMpO1xuICAgICAgICBsZXQgbWVyZ2VkID0gVXRpbC5mbGF0dGVuKF9yZWN0cywgZmFsc2UpO1xuICAgICAgICBsZXQgbWluID0gUHQubWFrZSgyLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICAgICAgbGV0IG1heCA9IFB0Lm1ha2UoMiwgTnVtYmVyLk1JTl9WQUxVRSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtZXJnZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IG0gb2YgbWVyZ2VkW2ldKSB7XG4gICAgICAgICAgICAgICAgbWluW2tdID0gTWF0aC5taW4obWluW2tdLCBtW2tdKTtcbiAgICAgICAgICAgICAgICBtYXhba10gPSBNYXRoLm1heChtYXhba10sIG1ba10pO1xuICAgICAgICAgICAgICAgIGlmICgrK2sgPj0gMilcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChtaW4sIG1heCk7XG4gICAgfVxuICAgIHN0YXRpYyBwb2x5Z29uKHJlY3QpIHtcbiAgICAgICAgcmV0dXJuIFJlY3RhbmdsZS5jb3JuZXJzKHJlY3QpO1xuICAgIH1cbiAgICBzdGF0aWMgcXVhZHJhbnRzKHJlY3QsIGNlbnRlcikge1xuICAgICAgICBsZXQgX3JlY3QgPSBVdGlsLml0ZXJUb0FycmF5KHJlY3QpO1xuICAgICAgICBsZXQgY29ybmVycyA9IFJlY3RhbmdsZS5jb3JuZXJzKF9yZWN0KTtcbiAgICAgICAgbGV0IF9jZW50ZXIgPSAoY2VudGVyICE9IHVuZGVmaW5lZCkgPyBuZXcgUHQoY2VudGVyKSA6IFJlY3RhbmdsZS5jZW50ZXIoX3JlY3QpO1xuICAgICAgICByZXR1cm4gY29ybmVycy5tYXAoKGMpID0+IG5ldyBHcm91cChjLCBfY2VudGVyKS5ib3VuZGluZ0JveCgpKTtcbiAgICB9XG4gICAgc3RhdGljIGhhbHZlcyhyZWN0LCByYXRpbyA9IDAuNSwgYXNSb3dzID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IF9yZWN0ID0gVXRpbC5pdGVyVG9BcnJheShyZWN0KTtcbiAgICAgICAgbGV0IG1pbiA9IF9yZWN0WzBdLiRtaW4oX3JlY3RbMV0pO1xuICAgICAgICBsZXQgbWF4ID0gX3JlY3RbMF0uJG1heChfcmVjdFsxXSk7XG4gICAgICAgIGxldCBtaWQgPSAoYXNSb3dzKSA/IE51bS5sZXJwKG1pblsxXSwgbWF4WzFdLCByYXRpbykgOiBOdW0ubGVycChtaW5bMF0sIG1heFswXSwgcmF0aW8pO1xuICAgICAgICByZXR1cm4gKGFzUm93cylcbiAgICAgICAgICAgID8gW25ldyBHcm91cChtaW4sIG5ldyBQdChtYXhbMF0sIG1pZCkpLCBuZXcgR3JvdXAobmV3IFB0KG1pblswXSwgbWlkKSwgbWF4KV1cbiAgICAgICAgICAgIDogW25ldyBHcm91cChtaW4sIG5ldyBQdChtaWQsIG1heFsxXSkpLCBuZXcgR3JvdXAobmV3IFB0KG1pZCwgbWluWzFdKSwgbWF4KV07XG4gICAgfVxuICAgIHN0YXRpYyB3aXRoaW5Cb3VuZChyZWN0LCBwdCkge1xuICAgICAgICBsZXQgX3JlY3QgPSBVdGlsLml0ZXJUb0FycmF5KHJlY3QpO1xuICAgICAgICByZXR1cm4gR2VvbS53aXRoaW5Cb3VuZChwdCwgX3JlY3RbMF0sIF9yZWN0WzFdKTtcbiAgICB9XG4gICAgc3RhdGljIGhhc0ludGVyc2VjdFJlY3QyRChyZWN0MSwgcmVjdDIsIHJlc2V0Qm91bmRpbmdCb3ggPSBmYWxzZSkge1xuICAgICAgICBsZXQgX3JlY3QxID0gVXRpbC5pdGVyVG9BcnJheShyZWN0MSk7XG4gICAgICAgIGxldCBfcmVjdDIgPSBVdGlsLml0ZXJUb0FycmF5KHJlY3QyKTtcbiAgICAgICAgaWYgKHJlc2V0Qm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgIF9yZWN0MSA9IEdlb20uYm91bmRpbmdCb3goX3JlY3QxKTtcbiAgICAgICAgICAgIF9yZWN0MiA9IEdlb20uYm91bmRpbmdCb3goX3JlY3QyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3JlY3QxWzBdWzBdID4gX3JlY3QyWzFdWzBdIHx8IF9yZWN0MlswXVswXSA+IF9yZWN0MVsxXVswXSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKF9yZWN0MVswXVsxXSA+IF9yZWN0MlsxXVsxXSB8fCBfcmVjdDJbMF1bMV0gPiBfcmVjdDFbMV1bMV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0UmVjdDJEKHJlY3QxLCByZWN0Mikge1xuICAgICAgICBsZXQgX3JlY3QxID0gVXRpbC5pdGVyVG9BcnJheShyZWN0MSk7XG4gICAgICAgIGxldCBfcmVjdDIgPSBVdGlsLml0ZXJUb0FycmF5KHJlY3QyKTtcbiAgICAgICAgaWYgKCFSZWN0YW5nbGUuaGFzSW50ZXJzZWN0UmVjdDJEKF9yZWN0MSwgX3JlY3QyKSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgICAgICAgcmV0dXJuIExpbmUuaW50ZXJzZWN0TGluZXMyRChSZWN0YW5nbGUuc2lkZXMoX3JlY3QxKSwgUmVjdGFuZ2xlLnNpZGVzKF9yZWN0MikpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICAgIHN0YXRpYyBmcm9tUmVjdChwdHMsIGVuY2xvc2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgbGV0IHIgPSAwO1xuICAgICAgICBsZXQgbWluID0gciA9IFJlY3RhbmdsZS5zaXplKF9wdHMpLm1pblZhbHVlKCkudmFsdWUgLyAyO1xuICAgICAgICBpZiAoZW5jbG9zZSkge1xuICAgICAgICAgICAgbGV0IG1heCA9IFJlY3RhbmdsZS5zaXplKF9wdHMpLm1heFZhbHVlKCkudmFsdWUgLyAyO1xuICAgICAgICAgICAgciA9IE1hdGguc3FydChtaW4gKiBtaW4gKyBtYXggKiBtYXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgciA9IG1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKFJlY3RhbmdsZS5jZW50ZXIoX3B0cyksIG5ldyBQdChyLCByKSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tVHJpYW5nbGUocHRzLCBlbmNsb3NlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGVuY2xvc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBUcmlhbmdsZS5jaXJjdW1jaXJjbGUocHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBUcmlhbmdsZS5pbmNpcmNsZShwdHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tQ2VudGVyKHB0LCByYWRpdXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cChuZXcgUHQocHQpLCBuZXcgUHQocmFkaXVzLCByYWRpdXMpKTtcbiAgICB9XG4gICAgc3RhdGljIHdpdGhpbkJvdW5kKHB0cywgcHQsIHRocmVzaG9sZCA9IDApIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGxldCBkID0gX3B0c1swXS4kc3VidHJhY3QocHQpO1xuICAgICAgICByZXR1cm4gZC5kb3QoZCkgKyB0aHJlc2hvbGQgPCBfcHRzWzFdLnggKiBfcHRzWzFdLng7XG4gICAgfVxuICAgIHN0YXRpYyBpbnRlcnNlY3RSYXkyRChjaXJjbGUsIHJheSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkoY2lyY2xlKTtcbiAgICAgICAgbGV0IF9yYXkgPSBVdGlsLml0ZXJUb0FycmF5KHJheSk7XG4gICAgICAgIGxldCBkID0gX3JheVswXS4kc3VidHJhY3QoX3JheVsxXSk7XG4gICAgICAgIGxldCBmID0gX3B0c1swXS4kc3VidHJhY3QoX3JheVswXSk7XG4gICAgICAgIGxldCBhID0gZC5kb3QoZCk7XG4gICAgICAgIGxldCBiID0gZi5kb3QoZCk7XG4gICAgICAgIGxldCBjID0gZi5kb3QoZikgLSBfcHRzWzFdLnggKiBfcHRzWzFdLng7XG4gICAgICAgIGxldCBwID0gYiAvIGE7XG4gICAgICAgIGxldCBxID0gYyAvIGE7XG4gICAgICAgIGxldCBkaXNjID0gcCAqIHAgLSBxO1xuICAgICAgICBpZiAoZGlzYyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXNjU3FydCA9IE1hdGguc3FydChkaXNjKTtcbiAgICAgICAgICAgIGxldCB0MSA9IC1wICsgZGlzY1NxcnQ7XG4gICAgICAgICAgICBsZXQgcDEgPSBfcmF5WzBdLiRzdWJ0cmFjdChkLiRtdWx0aXBseSh0MSkpO1xuICAgICAgICAgICAgaWYgKGRpc2MgPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cChwMSk7XG4gICAgICAgICAgICBsZXQgdDIgPSAtcCAtIGRpc2NTcXJ0O1xuICAgICAgICAgICAgbGV0IHAyID0gX3JheVswXS4kc3VidHJhY3QoZC4kbXVsdGlwbHkodDIpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAocDEsIHAyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0TGluZTJEKGNpcmNsZSwgbGluZSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkoY2lyY2xlKTtcbiAgICAgICAgbGV0IF9saW5lID0gVXRpbC5pdGVyVG9BcnJheShsaW5lKTtcbiAgICAgICAgbGV0IHBzID0gQ2lyY2xlLmludGVyc2VjdFJheTJEKF9wdHMsIF9saW5lKTtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgaWYgKHBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChSZWN0YW5nbGUud2l0aGluQm91bmQoX2xpbmUsIHBzW2ldKSlcbiAgICAgICAgICAgICAgICAgICAgZy5wdXNoKHBzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZztcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdENpcmNsZTJEKGNpcmNsZTEsIGNpcmNsZTIpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KGNpcmNsZTEpO1xuICAgICAgICBsZXQgX2NpcmNsZSA9IFV0aWwuaXRlclRvQXJyYXkoY2lyY2xlMik7XG4gICAgICAgIGxldCBkdiA9IF9jaXJjbGVbMF0uJHN1YnRyYWN0KF9wdHNbMF0pO1xuICAgICAgICBsZXQgZHIyID0gZHYubWFnbml0dWRlU3EoKTtcbiAgICAgICAgbGV0IGRyID0gTWF0aC5zcXJ0KGRyMik7XG4gICAgICAgIGxldCBhciA9IF9wdHNbMV0ueDtcbiAgICAgICAgbGV0IGJyID0gX2NpcmNsZVsxXS54O1xuICAgICAgICBsZXQgYXIyID0gYXIgKiBhcjtcbiAgICAgICAgbGV0IGJyMiA9IGJyICogYnI7XG4gICAgICAgIGlmIChkciA+IGFyICsgYnIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkciA8IE1hdGguYWJzKGFyIC0gYnIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKF9wdHNbMF0uY2xvbmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgYSA9IChhcjIgLSBicjIgKyBkcjIpIC8gKDIgKiBkcik7XG4gICAgICAgICAgICBsZXQgaCA9IE1hdGguc3FydChhcjIgLSBhICogYSk7XG4gICAgICAgICAgICBsZXQgcCA9IGR2LiRtdWx0aXBseShhIC8gZHIpLmFkZChfcHRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAobmV3IFB0KHAueCArIGggKiBkdi55IC8gZHIsIHAueSAtIGggKiBkdi54IC8gZHIpLCBuZXcgUHQocC54IC0gaCAqIGR2LnkgLyBkciwgcC55ICsgaCAqIGR2LnggLyBkcikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpbnRlcnNlY3RSZWN0MkQoY2lyY2xlLCByZWN0KSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheShjaXJjbGUpO1xuICAgICAgICBsZXQgX3JlY3QgPSBVdGlsLml0ZXJUb0FycmF5KHJlY3QpO1xuICAgICAgICBsZXQgc2lkZXMgPSBSZWN0YW5nbGUuc2lkZXMoX3JlY3QpO1xuICAgICAgICBsZXQgZyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2lkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcyA9IENpcmNsZS5pbnRlcnNlY3RMaW5lMkQoX3B0cywgc2lkZXNbaV0pO1xuICAgICAgICAgICAgaWYgKHBzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgZy5wdXNoKHBzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXRpbC5mbGF0dGVuKGcpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9SZWN0KGNpcmNsZSwgd2l0aGluID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KGNpcmNsZSk7XG4gICAgICAgIGxldCByID0gX3B0c1sxXVswXTtcbiAgICAgICAgaWYgKHdpdGhpbikge1xuICAgICAgICAgICAgbGV0IGhhbGYgPSBNYXRoLnNxcnQociAqIHIpIC8gMjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoX3B0c1swXS4kc3VidHJhY3QoaGFsZiksIF9wdHNbMF0uJGFkZChoYWxmKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKF9wdHNbMF0uJHN1YnRyYWN0KHIpLCBfcHRzWzBdLiRhZGQocikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB0b1RyaWFuZ2xlKGNpcmNsZSwgd2l0aGluID0gdHJ1ZSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkoY2lyY2xlKTtcbiAgICAgICAgaWYgKHdpdGhpbikge1xuICAgICAgICAgICAgbGV0IGFuZyA9IC1NYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIGxldCBpbmMgPSBNYXRoLlBJICogMiAvIDM7XG4gICAgICAgICAgICBsZXQgZyA9IG5ldyBHcm91cCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnLnB1c2goX3B0c1swXS5jbG9uZSgpLnRvQW5nbGUoYW5nLCBfcHRzWzFdWzBdLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgYW5nICs9IGluYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFRyaWFuZ2xlLmZyb21DZW50ZXIoX3B0c1swXSwgX3B0c1sxXVswXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVHJpYW5nbGUge1xuICAgIHN0YXRpYyBmcm9tUmVjdChyZWN0KSB7XG4gICAgICAgIGxldCBfcmVjdCA9IFV0aWwuaXRlclRvQXJyYXkocmVjdCk7XG4gICAgICAgIGxldCB0b3AgPSBfcmVjdFswXS4kYWRkKF9yZWN0WzFdKS5kaXZpZGUoMik7XG4gICAgICAgIHRvcC55ID0gX3JlY3RbMF1bMV07XG4gICAgICAgIGxldCBsZWZ0ID0gX3JlY3RbMV0uY2xvbmUoKTtcbiAgICAgICAgbGVmdC54ID0gX3JlY3RbMF1bMF07XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAodG9wLCBfcmVjdFsxXS5jbG9uZSgpLCBsZWZ0KTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21DaXJjbGUoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiBDaXJjbGUudG9UcmlhbmdsZShjaXJjbGUsIHRydWUpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUNlbnRlcihwdCwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gVHJpYW5nbGUuZnJvbUNpcmNsZShDaXJjbGUuZnJvbUNlbnRlcihwdCwgc2l6ZSkpO1xuICAgIH1cbiAgICBzdGF0aWMgbWVkaWFsKHRyaSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkodHJpKTtcbiAgICAgICAgaWYgKF9wdHMubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBfZXJyb3JMZW5ndGgobmV3IEdyb3VwKCksIDMpO1xuICAgICAgICByZXR1cm4gUG9seWdvbi5taWRwb2ludHMoX3B0cywgdHJ1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBvcHBvc2l0ZVNpZGUodHJpLCBpbmRleCkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkodHJpKTtcbiAgICAgICAgaWYgKF9wdHMubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBfZXJyb3JMZW5ndGgobmV3IEdyb3VwKCksIDMpO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBHcm91cC5mcm9tUHRBcnJheShbX3B0c1sxXSwgX3B0c1syXV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gR3JvdXAuZnJvbVB0QXJyYXkoW19wdHNbMF0sIF9wdHNbMl1dKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBHcm91cC5mcm9tUHRBcnJheShbX3B0c1swXSwgX3B0c1sxXV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBhbHRpdHVkZSh0cmksIGluZGV4KSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheSh0cmkpO1xuICAgICAgICBsZXQgb3BwID0gVHJpYW5nbGUub3Bwb3NpdGVTaWRlKF9wdHMsIGluZGV4KTtcbiAgICAgICAgaWYgKG9wcC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKF9wdHNbaW5kZXhdLCBMaW5lLnBlcnBlbmRpY3VsYXJGcm9tUHQob3BwLCBfcHRzW2luZGV4XSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBvcnRob2NlbnRlcih0cmkpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHRyaSk7XG4gICAgICAgIGlmIChfcHRzLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gX2Vycm9yTGVuZ3RoKHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIGxldCBhID0gVHJpYW5nbGUuYWx0aXR1ZGUoX3B0cywgMCk7XG4gICAgICAgIGxldCBiID0gVHJpYW5nbGUuYWx0aXR1ZGUoX3B0cywgMSk7XG4gICAgICAgIHJldHVybiBMaW5lLmludGVyc2VjdFJheTJEKGEsIGIpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5jZW50ZXIodHJpKSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheSh0cmkpO1xuICAgICAgICBpZiAoX3B0cy5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIF9lcnJvckxlbmd0aCh1bmRlZmluZWQsIDMpO1xuICAgICAgICBsZXQgYSA9IFBvbHlnb24uYmlzZWN0b3IoX3B0cywgMCkuYWRkKF9wdHNbMF0pO1xuICAgICAgICBsZXQgYiA9IFBvbHlnb24uYmlzZWN0b3IoX3B0cywgMSkuYWRkKF9wdHNbMV0pO1xuICAgICAgICByZXR1cm4gTGluZS5pbnRlcnNlY3RSYXkyRChuZXcgR3JvdXAoX3B0c1swXSwgYSksIG5ldyBHcm91cChfcHRzWzFdLCBiKSk7XG4gICAgfVxuICAgIHN0YXRpYyBpbmNpcmNsZSh0cmksIGNlbnRlcikge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkodHJpKTtcbiAgICAgICAgbGV0IGMgPSAoY2VudGVyKSA/IGNlbnRlciA6IFRyaWFuZ2xlLmluY2VudGVyKF9wdHMpO1xuICAgICAgICBsZXQgYXJlYSA9IFBvbHlnb24uYXJlYShfcHRzKTtcbiAgICAgICAgbGV0IHBlcmltID0gUG9seWdvbi5wZXJpbWV0ZXIoX3B0cywgdHJ1ZSk7XG4gICAgICAgIGxldCByID0gMiAqIGFyZWEgLyBwZXJpbS50b3RhbDtcbiAgICAgICAgcmV0dXJuIENpcmNsZS5mcm9tQ2VudGVyKGMsIHIpO1xuICAgIH1cbiAgICBzdGF0aWMgY2lyY3VtY2VudGVyKHRyaSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkodHJpKTtcbiAgICAgICAgbGV0IG1kID0gVHJpYW5nbGUubWVkaWFsKF9wdHMpO1xuICAgICAgICBsZXQgYSA9IFttZFswXSwgR2VvbS5wZXJwZW5kaWN1bGFyKF9wdHNbMF0uJHN1YnRyYWN0KG1kWzBdKSkucDEuJGFkZChtZFswXSldO1xuICAgICAgICBsZXQgYiA9IFttZFsxXSwgR2VvbS5wZXJwZW5kaWN1bGFyKF9wdHNbMV0uJHN1YnRyYWN0KG1kWzFdKSkucDEuJGFkZChtZFsxXSldO1xuICAgICAgICByZXR1cm4gTGluZS5pbnRlcnNlY3RSYXkyRChhLCBiKTtcbiAgICB9XG4gICAgc3RhdGljIGNpcmN1bWNpcmNsZSh0cmksIGNlbnRlcikge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkodHJpKTtcbiAgICAgICAgbGV0IGMgPSAoY2VudGVyKSA/IGNlbnRlciA6IFRyaWFuZ2xlLmNpcmN1bWNlbnRlcihfcHRzKTtcbiAgICAgICAgbGV0IHIgPSBfcHRzWzBdLiRzdWJ0cmFjdChjKS5tYWduaXR1ZGUoKTtcbiAgICAgICAgcmV0dXJuIENpcmNsZS5mcm9tQ2VudGVyKGMsIHIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIHtcbiAgICBzdGF0aWMgY2VudHJvaWQocHRzKSB7XG4gICAgICAgIHJldHVybiBHZW9tLmNlbnRyb2lkKHB0cyk7XG4gICAgfVxuICAgIHN0YXRpYyByZWN0YW5nbGUoY2VudGVyLCB3aWR0aE9yU2l6ZSwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY29ybmVycyhSZWN0YW5nbGUuZnJvbUNlbnRlcihjZW50ZXIsIHdpZHRoT3JTaXplLCBoZWlnaHQpKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21DZW50ZXIoY2VudGVyLCByYWRpdXMsIHNpZGVzKSB7XG4gICAgICAgIGxldCBnID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFuZyA9IE1hdGguUEkgKiAyICogaSAvIHNpZGVzO1xuICAgICAgICAgICAgZy5wdXNoKG5ldyBQdChNYXRoLmNvcyhhbmcpICogcmFkaXVzLCBNYXRoLnNpbihhbmcpICogcmFkaXVzKS5hZGQoY2VudGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIHN0YXRpYyBsaW5lQXQocHRzLCBpbmRleCkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBfcHRzLmxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IG91dCBvZiB0aGUgUG9seWdvbidzIHJhbmdlXCIpO1xuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKF9wdHNbaW5kZXhdLCAoaW5kZXggPT09IF9wdHMubGVuZ3RoIC0gMSkgPyBfcHRzWzBdIDogX3B0c1tpbmRleCArIDFdKTtcbiAgICB9XG4gICAgc3RhdGljIGxpbmVzKHBvbHksIGNsb3NlUGF0aCA9IHRydWUpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHBvbHkpO1xuICAgICAgICBpZiAoX3B0cy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgcmV0dXJuIF9lcnJvckxlbmd0aChuZXcgR3JvdXAoKSwgMik7XG4gICAgICAgIGxldCBzcCA9IFV0aWwuc3BsaXQoX3B0cywgMiwgMSk7XG4gICAgICAgIGlmIChjbG9zZVBhdGgpXG4gICAgICAgICAgICBzcC5wdXNoKG5ldyBHcm91cChfcHRzW19wdHMubGVuZ3RoIC0gMV0sIF9wdHNbMF0pKTtcbiAgICAgICAgcmV0dXJuIHNwLm1hcCgoZykgPT4gZyk7XG4gICAgfVxuICAgIHN0YXRpYyBtaWRwb2ludHMocG9seSwgY2xvc2VQYXRoID0gZmFsc2UsIHQgPSAwLjUpIHtcbiAgICAgICAgbGV0IHNpZGVzID0gUG9seWdvbi5saW5lcyhwb2x5LCBjbG9zZVBhdGgpO1xuICAgICAgICBsZXQgbWlkcyA9IHNpZGVzLm1hcCgocykgPT4gR2VvbS5pbnRlcnBvbGF0ZShzWzBdLCBzWzFdLCB0KSk7XG4gICAgICAgIHJldHVybiBtaWRzO1xuICAgIH1cbiAgICBzdGF0aWMgYWRqYWNlbnRTaWRlcyhwb2x5LCBpbmRleCwgY2xvc2VQYXRoID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHBvbHkpO1xuICAgICAgICBpZiAoX3B0cy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgcmV0dXJuIF9lcnJvckxlbmd0aChuZXcgR3JvdXAoKSwgMik7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gX3B0cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gX2Vycm9yT3V0b2ZCb3VuZChuZXcgR3JvdXAoKSwgaW5kZXgpO1xuICAgICAgICBsZXQgZ3MgPSBbXTtcbiAgICAgICAgbGV0IGxlZnQgPSBpbmRleCAtIDE7XG4gICAgICAgIGlmIChjbG9zZVBhdGggJiYgbGVmdCA8IDApXG4gICAgICAgICAgICBsZWZ0ID0gX3B0cy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobGVmdCA+PSAwKVxuICAgICAgICAgICAgZ3MucHVzaChuZXcgR3JvdXAoX3B0c1tpbmRleF0sIF9wdHNbbGVmdF0pKTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gaW5kZXggKyAxO1xuICAgICAgICBpZiAoY2xvc2VQYXRoICYmIHJpZ2h0ID4gX3B0cy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgcmlnaHQgPSAwO1xuICAgICAgICBpZiAocmlnaHQgPD0gX3B0cy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgZ3MucHVzaChuZXcgR3JvdXAoX3B0c1tpbmRleF0sIF9wdHNbcmlnaHRdKSk7XG4gICAgICAgIHJldHVybiBncztcbiAgICB9XG4gICAgc3RhdGljIGJpc2VjdG9yKHBvbHksIGluZGV4KSB7XG4gICAgICAgIGxldCBzaWRlcyA9IFBvbHlnb24uYWRqYWNlbnRTaWRlcyhwb2x5LCBpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGlmIChzaWRlcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgbGV0IGEgPSBzaWRlc1swXVsxXS4kc3VidHJhY3Qoc2lkZXNbMF1bMF0pLnVuaXQoKTtcbiAgICAgICAgICAgIGxldCBiID0gc2lkZXNbMV1bMV0uJHN1YnRyYWN0KHNpZGVzWzFdWzBdKS51bml0KCk7XG4gICAgICAgICAgICByZXR1cm4gYS5hZGQoYikuZGl2aWRlKDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcGVyaW1ldGVyKHBvbHksIGNsb3NlUGF0aCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsaW5lcyA9IFBvbHlnb24ubGluZXMocG9seSwgY2xvc2VQYXRoKTtcbiAgICAgICAgbGV0IG1hZyA9IDA7XG4gICAgICAgIGxldCBwID0gUHQubWFrZShsaW5lcy5sZW5ndGgsIDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtID0gTGluZS5tYWduaXR1ZGUobGluZXNbaV0pO1xuICAgICAgICAgICAgbWFnICs9IG07XG4gICAgICAgICAgICBwW2ldID0gbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IG1hZyxcbiAgICAgICAgICAgIHNlZ21lbnRzOiBwXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBhcmVhKHB0cykge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKF9wdHMubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBfZXJyb3JMZW5ndGgobmV3IEdyb3VwKCksIDMpO1xuICAgICAgICBsZXQgZGV0ID0gKGEsIGIpID0+IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gICAgICAgIGxldCBhcmVhID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IF9wdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgX3B0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYXJlYSArPSBkZXQoX3B0c1tpXSwgX3B0c1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJlYSArPSBkZXQoX3B0c1tpXSwgX3B0c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFyZWEgLyAyKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbnZleEh1bGwocHRzLCBzb3J0ZWQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKF9wdHMubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBfZXJyb3JMZW5ndGgobmV3IEdyb3VwKCksIDMpO1xuICAgICAgICBpZiAoIXNvcnRlZCkge1xuICAgICAgICAgICAgX3B0cyA9IF9wdHMuc2xpY2UoKTtcbiAgICAgICAgICAgIF9wdHMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsZWZ0ID0gKGEsIGIsIGMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoYlswXSAtIGFbMF0pICogKGNbMV0gLSBhWzFdKSAtIChjWzBdIC0gYVswXSkgKiAoYlsxXSAtIGFbMV0pID4gMDtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRxID0gW107XG4gICAgICAgIGxldCBib3QgPSBfcHRzLmxlbmd0aCAtIDI7XG4gICAgICAgIGxldCB0b3AgPSBib3QgKyAzO1xuICAgICAgICBkcVtib3RdID0gX3B0c1syXTtcbiAgICAgICAgZHFbdG9wXSA9IF9wdHNbMl07XG4gICAgICAgIGlmIChsZWZ0KF9wdHNbMF0sIF9wdHNbMV0sIF9wdHNbMl0pKSB7XG4gICAgICAgICAgICBkcVtib3QgKyAxXSA9IF9wdHNbMF07XG4gICAgICAgICAgICBkcVtib3QgKyAyXSA9IF9wdHNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkcVtib3QgKyAxXSA9IF9wdHNbMV07XG4gICAgICAgICAgICBkcVtib3QgKyAyXSA9IF9wdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDMsIGxlbiA9IF9wdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwdCA9IF9wdHNbaV07XG4gICAgICAgICAgICBpZiAobGVmdChkcVtib3RdLCBkcVtib3QgKyAxXSwgcHQpICYmIGxlZnQoZHFbdG9wIC0gMV0sIGRxW3RvcF0sIHB0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKCFsZWZ0KGRxW2JvdF0sIGRxW2JvdCArIDFdLCBwdCkpIHtcbiAgICAgICAgICAgICAgICBib3QgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvdCAtPSAxO1xuICAgICAgICAgICAgZHFbYm90XSA9IHB0O1xuICAgICAgICAgICAgd2hpbGUgKCFsZWZ0KGRxW3RvcCAtIDFdLCBkcVt0b3BdLCBwdCkpIHtcbiAgICAgICAgICAgICAgICB0b3AgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcCArPSAxO1xuICAgICAgICAgICAgZHFbdG9wXSA9IHB0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBodWxsID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgKHRvcCAtIGJvdCk7IGgrKykge1xuICAgICAgICAgICAgaHVsbC5wdXNoKGRxW2JvdCArIGhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHVsbDtcbiAgICB9XG4gICAgc3RhdGljIG5ldHdvcmsocG9seSwgb3JpZ2luSW5kZXggPSAwKSB7XG4gICAgICAgIGxldCBfcHRzID0gVXRpbC5pdGVyVG9BcnJheShwb2x5KTtcbiAgICAgICAgbGV0IGcgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IF9wdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9IG9yaWdpbkluZGV4KVxuICAgICAgICAgICAgICAgIGcucHVzaChuZXcgR3JvdXAoX3B0c1tvcmlnaW5JbmRleF0sIF9wdHNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZztcbiAgICB9XG4gICAgc3RhdGljIG5lYXJlc3RQdChwb2x5LCBwdCkge1xuICAgICAgICBsZXQgX25lYXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICBsZXQgX2l0ZW0gPSAtMTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHBvbHkpIHtcbiAgICAgICAgICAgIGxldCBkID0gcC4kc3VidHJhY3QocHQpLm1hZ25pdHVkZVNxKCk7XG4gICAgICAgICAgICBpZiAoZCA8IF9uZWFyKSB7XG4gICAgICAgICAgICAgICAgX25lYXIgPSBkO1xuICAgICAgICAgICAgICAgIF9pdGVtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2l0ZW07XG4gICAgfVxuICAgIHN0YXRpYyBwcm9qZWN0QXhpcyhwb2x5LCB1bml0QXhpcykge1xuICAgICAgICBsZXQgX3BvbHkgPSBVdGlsLml0ZXJUb0FycmF5KHBvbHkpO1xuICAgICAgICBsZXQgZG90ID0gdW5pdEF4aXMuZG90KF9wb2x5WzBdKTtcbiAgICAgICAgbGV0IGQgPSBuZXcgUHQoZG90LCBkb3QpO1xuICAgICAgICBmb3IgKGxldCBuID0gMSwgbGVuID0gX3BvbHkubGVuZ3RoOyBuIDwgbGVuOyBuKyspIHtcbiAgICAgICAgICAgIGRvdCA9IHVuaXRBeGlzLmRvdChfcG9seVtuXSk7XG4gICAgICAgICAgICBkID0gbmV3IFB0KE1hdGgubWluKGRvdCwgZFswXSksIE1hdGgubWF4KGRvdCwgZFsxXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBzdGF0aWMgX2F4aXNPdmVybGFwKHBvbHkxLCBwb2x5MiwgdW5pdEF4aXMpIHtcbiAgICAgICAgbGV0IHBhID0gUG9seWdvbi5wcm9qZWN0QXhpcyhwb2x5MSwgdW5pdEF4aXMpO1xuICAgICAgICBsZXQgcGIgPSBQb2x5Z29uLnByb2plY3RBeGlzKHBvbHkyLCB1bml0QXhpcyk7XG4gICAgICAgIHJldHVybiAocGFbMF0gPCBwYlswXSkgPyBwYlswXSAtIHBhWzFdIDogcGFbMF0gLSBwYlsxXTtcbiAgICB9XG4gICAgc3RhdGljIGhhc0ludGVyc2VjdFBvaW50KHBvbHksIHB0KSB7XG4gICAgICAgIGxldCBfcG9seSA9IFV0aWwuaXRlclRvQXJyYXkocG9seSk7XG4gICAgICAgIGxldCBjID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBfcG9seS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGxuID0gUG9seWdvbi5saW5lQXQoX3BvbHksIGkpO1xuICAgICAgICAgICAgaWYgKCgobG5bMF1bMV0gPiBwdFsxXSkgIT0gKGxuWzFdWzFdID4gcHRbMV0pKSAmJlxuICAgICAgICAgICAgICAgIChwdFswXSA8IChsblsxXVswXSAtIGxuWzBdWzBdKSAqIChwdFsxXSAtIGxuWzBdWzFdKSAvIChsblsxXVsxXSAtIGxuWzBdWzFdKSArIGxuWzBdWzBdKSkge1xuICAgICAgICAgICAgICAgIGMgPSAhYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgc3RhdGljIGhhc0ludGVyc2VjdENpcmNsZShwb2x5LCBjaXJjbGUpIHtcbiAgICAgICAgbGV0IF9wb2x5ID0gVXRpbC5pdGVyVG9BcnJheShwb2x5KTtcbiAgICAgICAgbGV0IF9jaXJjbGUgPSBVdGlsLml0ZXJUb0FycmF5KGNpcmNsZSk7XG4gICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgICAgd2hpY2g6IC0xLFxuICAgICAgICAgICAgZGlzdDogMCxcbiAgICAgICAgICAgIG5vcm1hbDogbnVsbCxcbiAgICAgICAgICAgIGVkZ2U6IG51bGwsXG4gICAgICAgICAgICB2ZXJ0ZXg6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBjID0gX2NpcmNsZVswXTtcbiAgICAgICAgbGV0IHIgPSBfY2lyY2xlWzFdWzBdO1xuICAgICAgICBsZXQgbWluRGlzdCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gX3BvbHkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlZGdlID0gUG9seWdvbi5saW5lQXQoX3BvbHksIGkpO1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBuZXcgUHQoZWRnZVswXS55IC0gZWRnZVsxXS55LCBlZGdlWzFdLnggLSBlZGdlWzBdLngpLnVuaXQoKTtcbiAgICAgICAgICAgIGxldCBwb2x5MiA9IG5ldyBHcm91cChjLiRhZGQoYXhpcy4kbXVsdGlwbHkocikpLCBjLiRzdWJ0cmFjdChheGlzLiRtdWx0aXBseShyKSkpO1xuICAgICAgICAgICAgbGV0IGRpc3QgPSBQb2x5Z29uLl9heGlzT3ZlcmxhcChfcG9seSwgcG9seTIsIGF4aXMpO1xuICAgICAgICAgICAgaWYgKGRpc3QgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChNYXRoLmFicyhkaXN0KSA8IG1pbkRpc3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSBSZWN0YW5nbGUud2l0aGluQm91bmQoZWRnZSwgTGluZS5wZXJwZW5kaWN1bGFyRnJvbVB0KGVkZ2UsIGMpKSB8fCBDaXJjbGUuaW50ZXJzZWN0TGluZTJEKGNpcmNsZSwgZWRnZSkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5lZGdlID0gZWRnZTtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5ub3JtYWwgPSBheGlzO1xuICAgICAgICAgICAgICAgICAgICBtaW5EaXN0ID0gTWF0aC5hYnMoZGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIGluZm8ud2hpY2ggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluZm8uZWRnZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgZGlyID0gYy4kc3VidHJhY3QoUG9seWdvbi5jZW50cm9pZChfcG9seSkpLmRvdChpbmZvLm5vcm1hbCk7XG4gICAgICAgIGlmIChkaXIgPCAwKVxuICAgICAgICAgICAgaW5mby5ub3JtYWwubXVsdGlwbHkoLTEpO1xuICAgICAgICBpbmZvLmRpc3QgPSBtaW5EaXN0O1xuICAgICAgICBpbmZvLnZlcnRleCA9IGM7XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbiAgICBzdGF0aWMgaGFzSW50ZXJzZWN0UG9seWdvbihwb2x5MSwgcG9seTIpIHtcbiAgICAgICAgbGV0IF9wb2x5MSA9IFV0aWwuaXRlclRvQXJyYXkocG9seTEpO1xuICAgICAgICBsZXQgX3BvbHkyID0gVXRpbC5pdGVyVG9BcnJheShwb2x5Mik7XG4gICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgICAgd2hpY2g6IC0xLFxuICAgICAgICAgICAgZGlzdDogMCxcbiAgICAgICAgICAgIG5vcm1hbDogbmV3IFB0KCksXG4gICAgICAgICAgICBlZGdlOiBuZXcgR3JvdXAoKSxcbiAgICAgICAgICAgIHZlcnRleDogbmV3IFB0KClcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG1pbkRpc3QgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHBsZW4gPSAoX3BvbHkxLmxlbmd0aCArIF9wb2x5Mi5sZW5ndGgpOyBpIDwgcGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWRnZSA9IChpIDwgX3BvbHkxLmxlbmd0aCkgPyBQb2x5Z29uLmxpbmVBdChfcG9seTEsIGkpIDogUG9seWdvbi5saW5lQXQoX3BvbHkyLCBpIC0gX3BvbHkxLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IG5ldyBQdChlZGdlWzBdLnkgLSBlZGdlWzFdLnksIGVkZ2VbMV0ueCAtIGVkZ2VbMF0ueCkudW5pdCgpO1xuICAgICAgICAgICAgbGV0IGRpc3QgPSBQb2x5Z29uLl9heGlzT3ZlcmxhcChfcG9seTEsIF9wb2x5MiwgYXhpcyk7XG4gICAgICAgICAgICBpZiAoZGlzdCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGRpc3QpIDwgbWluRGlzdCkge1xuICAgICAgICAgICAgICAgIGluZm8uZWRnZSA9IGVkZ2U7XG4gICAgICAgICAgICAgICAgaW5mby5ub3JtYWwgPSBheGlzO1xuICAgICAgICAgICAgICAgIG1pbkRpc3QgPSBNYXRoLmFicyhkaXN0KTtcbiAgICAgICAgICAgICAgICBpbmZvLndoaWNoID0gKGkgPCBfcG9seTEubGVuZ3RoKSA/IDAgOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluZm8uZGlzdCA9IG1pbkRpc3Q7XG4gICAgICAgIGxldCBiMSA9IChpbmZvLndoaWNoID09PSAwKSA/IF9wb2x5MiA6IF9wb2x5MTtcbiAgICAgICAgbGV0IGIyID0gKGluZm8ud2hpY2ggPT09IDApID8gX3BvbHkxIDogX3BvbHkyO1xuICAgICAgICBsZXQgYzEgPSBQb2x5Z29uLmNlbnRyb2lkKGIxKTtcbiAgICAgICAgbGV0IGMyID0gUG9seWdvbi5jZW50cm9pZChiMik7XG4gICAgICAgIGxldCBkaXIgPSBjMS4kc3VidHJhY3QoYzIpLmRvdChpbmZvLm5vcm1hbCk7XG4gICAgICAgIGlmIChkaXIgPCAwKVxuICAgICAgICAgICAgaW5mby5ub3JtYWwubXVsdGlwbHkoLTEpO1xuICAgICAgICBsZXQgc21hbGxlc3QgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGIxLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZCA9IGluZm8ubm9ybWFsLmRvdChiMVtpXS4kc3VidHJhY3QoYzIpKTtcbiAgICAgICAgICAgIGlmIChkIDwgc21hbGxlc3QpIHtcbiAgICAgICAgICAgICAgICBzbWFsbGVzdCA9IGQ7XG4gICAgICAgICAgICAgICAgaW5mby52ZXJ0ZXggPSBiMVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG4gICAgc3RhdGljIGludGVyc2VjdFBvbHlnb24yRChwb2x5MSwgcG9seTIpIHtcbiAgICAgICAgbGV0IF9wb2x5MSA9IFV0aWwuaXRlclRvQXJyYXkocG9seTEpO1xuICAgICAgICBsZXQgX3BvbHkyID0gVXRpbC5pdGVyVG9BcnJheShwb2x5Mik7XG4gICAgICAgIGxldCBscCA9IFBvbHlnb24ubGluZXMoX3BvbHkxKTtcbiAgICAgICAgbGV0IGcgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5zID0gTGluZS5pbnRlcnNlY3RQb2x5Z29uMkQobHBbaV0sIF9wb2x5MiwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGlucylcbiAgICAgICAgICAgICAgICBnLnB1c2goaW5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXRpbC5mbGF0dGVuKGcsIHRydWUpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9SZWN0cyhwb2x5cykge1xuICAgICAgICBsZXQgYm94ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZyBvZiBwb2x5cykge1xuICAgICAgICAgICAgYm94ZXMucHVzaChHZW9tLmJvdW5kaW5nQm94KGcpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVyZ2VkID0gVXRpbC5mbGF0dGVuKGJveGVzLCBmYWxzZSk7XG4gICAgICAgIGJveGVzLnVuc2hpZnQoR2VvbS5ib3VuZGluZ0JveChtZXJnZWQpKTtcbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDdXJ2ZSB7XG4gICAgc3RhdGljIGdldFN0ZXBzKHN0ZXBzKSB7XG4gICAgICAgIGxldCB0cyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IGkgLyBzdGVwcztcbiAgICAgICAgICAgIHRzLnB1c2gobmV3IFB0KHQgKiB0ICogdCwgdCAqIHQsIHQsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHM7XG4gICAgfVxuICAgIHN0YXRpYyBjb250cm9sUG9pbnRzKHB0cywgaW5kZXggPSAwLCBjb3B5U3RhcnQgPSBmYWxzZSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKGluZGV4ID4gX3B0cy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgX2luZGV4ID0gKGkpID0+IChpIDwgX3B0cy5sZW5ndGggLSAxKSA/IGkgOiBfcHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBwMCA9IF9wdHNbaW5kZXhdO1xuICAgICAgICBpbmRleCA9IChjb3B5U3RhcnQpID8gaW5kZXggOiBpbmRleCArIDE7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAocDAsIF9wdHNbX2luZGV4KGluZGV4KyspXSwgX3B0c1tfaW5kZXgoaW5kZXgrKyldLCBfcHRzW19pbmRleChpbmRleCsrKV0pO1xuICAgIH1cbiAgICBzdGF0aWMgX2NhbGNQdChjdHJscywgcGFyYW1zKSB7XG4gICAgICAgIGxldCB4ID0gY3RybHMucmVkdWNlKChhLCBjLCBpKSA9PiBhICsgYy54ICogcGFyYW1zW2ldLCAwKTtcbiAgICAgICAgbGV0IHkgPSBjdHJscy5yZWR1Y2UoKGEsIGMsIGkpID0+IGEgKyBjLnkgKiBwYXJhbXNbaV0sIDApO1xuICAgICAgICBpZiAoY3RybHNbMF0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbGV0IHogPSBjdHJscy5yZWR1Y2UoKGEsIGMsIGkpID0+IGEgKyBjLnogKiBwYXJhbXNbaV0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQdCh4LCB5LCB6KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFB0KHgsIHkpO1xuICAgIH1cbiAgICBzdGF0aWMgY2F0bXVsbFJvbShwdHMsIHN0ZXBzID0gMTApIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGlmIChfcHRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBwcyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgdHMgPSBDdXJ2ZS5nZXRTdGVwcyhzdGVwcyk7XG4gICAgICAgIGxldCBjID0gQ3VydmUuY29udHJvbFBvaW50cyhfcHRzLCAwLCB0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgICAgICAgcHMucHVzaChDdXJ2ZS5jYXRtdWxsUm9tU3RlcCh0c1tpXSwgYykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBfcHRzLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIGxldCBjcCA9IEN1cnZlLmNvbnRyb2xQb2ludHMoX3B0cywgayk7XG4gICAgICAgICAgICBpZiAoY3AubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHMucHVzaChDdXJ2ZS5jYXRtdWxsUm9tU3RlcCh0c1tpXSwgY3ApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcztcbiAgICB9XG4gICAgc3RhdGljIGNhdG11bGxSb21TdGVwKHN0ZXAsIGN0cmxzKSB7XG4gICAgICAgIGxldCBtID0gbmV3IEdyb3VwKG5ldyBQdCgtMC41LCAxLCAtMC41LCAwKSwgbmV3IFB0KDEuNSwgLTIuNSwgMCwgMSksIG5ldyBQdCgtMS41LCAyLCAwLjUsIDApLCBuZXcgUHQoMC41LCAtMC41LCAwLCAwKSk7XG4gICAgICAgIHJldHVybiBDdXJ2ZS5fY2FsY1B0KGN0cmxzLCBNYXQubXVsdGlwbHkoW3N0ZXBdLCBtLCB0cnVlKVswXSk7XG4gICAgfVxuICAgIHN0YXRpYyBjYXJkaW5hbChwdHMsIHN0ZXBzID0gMTAsIHRlbnNpb24gPSAwLjUpIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGlmIChfcHRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBwcyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgdHMgPSBDdXJ2ZS5nZXRTdGVwcyhzdGVwcyk7XG4gICAgICAgIGxldCBjID0gQ3VydmUuY29udHJvbFBvaW50cyhfcHRzLCAwLCB0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgICAgICAgcHMucHVzaChDdXJ2ZS5jYXJkaW5hbFN0ZXAodHNbaV0sIGMsIHRlbnNpb24pKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgX3B0cy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICBsZXQgY3AgPSBDdXJ2ZS5jb250cm9sUG9pbnRzKF9wdHMsIGspO1xuICAgICAgICAgICAgaWYgKGNwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBzLnB1c2goQ3VydmUuY2FyZGluYWxTdGVwKHRzW2ldLCBjcCwgdGVuc2lvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBzO1xuICAgIH1cbiAgICBzdGF0aWMgY2FyZGluYWxTdGVwKHN0ZXAsIGN0cmxzLCB0ZW5zaW9uID0gMC41KSB7XG4gICAgICAgIGxldCBtID0gbmV3IEdyb3VwKG5ldyBQdCgtMSwgMiwgLTEsIDApLCBuZXcgUHQoLTEsIDEsIDAsIDApLCBuZXcgUHQoMSwgLTIsIDEsIDApLCBuZXcgUHQoMSwgLTEsIDAsIDApKTtcbiAgICAgICAgbGV0IGggPSBNYXQubXVsdGlwbHkoW3N0ZXBdLCBtLCB0cnVlKVswXS5tdWx0aXBseSh0ZW5zaW9uKTtcbiAgICAgICAgbGV0IGgyID0gKDIgKiBzdGVwWzBdIC0gMyAqIHN0ZXBbMV0gKyAxKTtcbiAgICAgICAgbGV0IGgzID0gLTIgKiBzdGVwWzBdICsgMyAqIHN0ZXBbMV07XG4gICAgICAgIGxldCBwdCA9IEN1cnZlLl9jYWxjUHQoY3RybHMsIGgpO1xuICAgICAgICBwdC54ICs9IGgyICogY3RybHNbMV0ueCArIGgzICogY3RybHNbMl0ueDtcbiAgICAgICAgcHQueSArPSBoMiAqIGN0cmxzWzFdLnkgKyBoMyAqIGN0cmxzWzJdLnk7XG4gICAgICAgIGlmIChwdC5sZW5ndGggPiAyKVxuICAgICAgICAgICAgcHQueiArPSBoMiAqIGN0cmxzWzFdLnogKyBoMyAqIGN0cmxzWzJdLno7XG4gICAgICAgIHJldHVybiBwdDtcbiAgICB9XG4gICAgc3RhdGljIGJlemllcihwdHMsIHN0ZXBzID0gMTApIHtcbiAgICAgICAgbGV0IF9wdHMgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIGlmIChfcHRzLmxlbmd0aCA8IDQpXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCBwcyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBsZXQgdHMgPSBDdXJ2ZS5nZXRTdGVwcyhzdGVwcyk7XG4gICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBfcHRzLmxlbmd0aCAtIDMpIHtcbiAgICAgICAgICAgIGxldCBjID0gQ3VydmUuY29udHJvbFBvaW50cyhfcHRzLCBrKTtcbiAgICAgICAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBzLnB1c2goQ3VydmUuYmV6aWVyU3RlcCh0c1tpXSwgYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrICs9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBzO1xuICAgIH1cbiAgICBzdGF0aWMgYmV6aWVyU3RlcChzdGVwLCBjdHJscykge1xuICAgICAgICBsZXQgbSA9IG5ldyBHcm91cChuZXcgUHQoLTEsIDMsIC0zLCAxKSwgbmV3IFB0KDMsIC02LCAzLCAwKSwgbmV3IFB0KC0zLCAzLCAwLCAwKSwgbmV3IFB0KDEsIDAsIDAsIDApKTtcbiAgICAgICAgcmV0dXJuIEN1cnZlLl9jYWxjUHQoY3RybHMsIE1hdC5tdWx0aXBseShbc3RlcF0sIG0sIHRydWUpWzBdKTtcbiAgICB9XG4gICAgc3RhdGljIGJzcGxpbmUocHRzLCBzdGVwcyA9IDEwLCB0ZW5zaW9uID0gMSkge1xuICAgICAgICBsZXQgX3B0cyA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgaWYgKF9wdHMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgICAgICAgbGV0IHBzID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGxldCB0cyA9IEN1cnZlLmdldFN0ZXBzKHN0ZXBzKTtcbiAgICAgICAgbGV0IGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IF9wdHMubGVuZ3RoIC0gMykge1xuICAgICAgICAgICAgbGV0IGMgPSBDdXJ2ZS5jb250cm9sUG9pbnRzKF9wdHMsIGspO1xuICAgICAgICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZW5zaW9uICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzLnB1c2goQ3VydmUuYnNwbGluZVRlbnNpb25TdGVwKHRzW2ldLCBjLCB0ZW5zaW9uKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzLnB1c2goQ3VydmUuYnNwbGluZVN0ZXAodHNbaV0sIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBzO1xuICAgIH1cbiAgICBzdGF0aWMgYnNwbGluZVN0ZXAoc3RlcCwgY3RybHMpIHtcbiAgICAgICAgbGV0IG0gPSBuZXcgR3JvdXAobmV3IFB0KC0wLjE2NjY2NjY2NjY2NjY2NjY2LCAwLjUsIC0wLjUsIDAuMTY2NjY2NjY2NjY2NjY2NjYpLCBuZXcgUHQoMC41LCAtMSwgMCwgMC42NjY2NjY2NjY2NjY2NjY2KSwgbmV3IFB0KC0wLjUsIDAuNSwgMC41LCAwLjE2NjY2NjY2NjY2NjY2NjY2KSwgbmV3IFB0KDAuMTY2NjY2NjY2NjY2NjY2NjYsIDAsIDAsIDApKTtcbiAgICAgICAgcmV0dXJuIEN1cnZlLl9jYWxjUHQoY3RybHMsIE1hdC5tdWx0aXBseShbc3RlcF0sIG0sIHRydWUpWzBdKTtcbiAgICB9XG4gICAgc3RhdGljIGJzcGxpbmVUZW5zaW9uU3RlcChzdGVwLCBjdHJscywgdGVuc2lvbiA9IDEpIHtcbiAgICAgICAgbGV0IG0gPSBuZXcgR3JvdXAobmV3IFB0KC0wLjE2NjY2NjY2NjY2NjY2NjY2LCAwLjUsIC0wLjUsIDAuMTY2NjY2NjY2NjY2NjY2NjYpLCBuZXcgUHQoLTEuNSwgMiwgMCwgLTAuMzMzMzMzMzMzMzMzMzMzMyksIG5ldyBQdCgxLjUsIC0yLjUsIDAuNSwgMC4xNjY2NjY2NjY2NjY2NjY2NiksIG5ldyBQdCgwLjE2NjY2NjY2NjY2NjY2NjY2LCAwLCAwLCAwKSk7XG4gICAgICAgIGxldCBoID0gTWF0Lm11bHRpcGx5KFtzdGVwXSwgbSwgdHJ1ZSlbMF0ubXVsdGlwbHkodGVuc2lvbik7XG4gICAgICAgIGxldCBoMiA9ICgyICogc3RlcFswXSAtIDMgKiBzdGVwWzFdICsgMSk7XG4gICAgICAgIGxldCBoMyA9IC0yICogc3RlcFswXSArIDMgKiBzdGVwWzFdO1xuICAgICAgICBsZXQgcHQgPSBDdXJ2ZS5fY2FsY1B0KGN0cmxzLCBoKTtcbiAgICAgICAgcHQueCArPSBoMiAqIGN0cmxzWzFdLnggKyBoMyAqIGN0cmxzWzJdLng7XG4gICAgICAgIHB0LnkgKz0gaDIgKiBjdHJsc1sxXS55ICsgaDMgKiBjdHJsc1syXS55O1xuICAgICAgICBpZiAocHQubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHB0LnogKz0gaDIgKiBjdHJsc1sxXS56ICsgaDMgKiBjdHJsc1syXS56O1xuICAgICAgICByZXR1cm4gcHQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3AuanMubWFwIiwiLyohIFNvdXJjZSBjb2RlIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSBMaWNlbnNlIDIuMC4gQ29weXJpZ2h0IMKpIDIwMTctY3VycmVudCBXaWxsaWFtIE5nYW4gYW5kIGNvbnRyaWJ1dG9ycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbmdhbi9wdHMpICovXG5pbXBvcnQgeyBQdCwgR3JvdXAsIEJvdW5kIH0gZnJvbSBcIi4vUHRcIjtcbmltcG9ydCB7IFBvbHlnb24sIENpcmNsZSB9IGZyb20gXCIuL09wXCI7XG5pbXBvcnQgeyBHZW9tIH0gZnJvbSBcIi4vTnVtXCI7XG5leHBvcnQgY2xhc3MgV29ybGQge1xuICAgIGNvbnN0cnVjdG9yKGJvdW5kLCBmcmljdGlvbiA9IDEsIGdyYXZpdHkgPSAwKSB7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZ3Jhdml0eSA9IG5ldyBQdCgpO1xuICAgICAgICB0aGlzLl9mcmljdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuX2RhbXBpbmcgPSAwLjc1O1xuICAgICAgICB0aGlzLl9wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYm9kaWVzID0gW107XG4gICAgICAgIHRoaXMuX3BuYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLl9ibmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYm91bmQgPSBCb3VuZC5mcm9tR3JvdXAoYm91bmQpO1xuICAgICAgICB0aGlzLl9mcmljdGlvbiA9IGZyaWN0aW9uO1xuICAgICAgICB0aGlzLl9ncmF2aXR5ID0gKHR5cGVvZiBncmF2aXR5ID09PSBcIm51bWJlclwiKSA/IG5ldyBQdCgwLCBncmF2aXR5KSA6IG5ldyBQdChncmF2aXR5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldCBib3VuZCgpIHsgcmV0dXJuIHRoaXMuX2JvdW5kOyB9XG4gICAgc2V0IGJvdW5kKGJvdW5kKSB7IHRoaXMuX2JvdW5kID0gYm91bmQ7IH1cbiAgICBnZXQgZ3Jhdml0eSgpIHsgcmV0dXJuIHRoaXMuX2dyYXZpdHk7IH1cbiAgICBzZXQgZ3Jhdml0eShnKSB7IHRoaXMuX2dyYXZpdHkgPSBnOyB9XG4gICAgZ2V0IGZyaWN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZnJpY3Rpb247IH1cbiAgICBzZXQgZnJpY3Rpb24oZikgeyB0aGlzLl9mcmljdGlvbiA9IGY7IH1cbiAgICBnZXQgZGFtcGluZygpIHsgcmV0dXJuIHRoaXMuX2RhbXBpbmc7IH1cbiAgICBzZXQgZGFtcGluZyhmKSB7IHRoaXMuX2RhbXBpbmcgPSBmOyB9XG4gICAgZ2V0IGJvZHlDb3VudCgpIHsgcmV0dXJuIHRoaXMuX2JvZGllcy5sZW5ndGg7IH1cbiAgICBnZXQgcGFydGljbGVDb3VudCgpIHsgcmV0dXJuIHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IH1cbiAgICBib2R5KGlkKSB7XG4gICAgICAgIGxldCBpZHggPSBpZDtcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiAmJiBpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZHggPSB0aGlzLl9ibmFtZXMuaW5kZXhPZihpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoaWR4ID49IDApKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZGllc1tpZHhdO1xuICAgIH1cbiAgICBwYXJ0aWNsZShpZCkge1xuICAgICAgICBsZXQgaWR4ID0gaWQ7XG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIgJiYgaWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWR4ID0gdGhpcy5fcG5hbWVzLmluZGV4T2YoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGlkeCA+PSAwKSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJ0aWNsZXNbaWR4XTtcbiAgICB9XG4gICAgYm9keUluZGV4KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JuYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIH1cbiAgICBwYXJ0aWNsZUluZGV4KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BuYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIH1cbiAgICB1cGRhdGUobXMpIHtcbiAgICAgICAgbGV0IGR0ID0gbXMgLyAxMDAwO1xuICAgICAgICB0aGlzLl91cGRhdGVQYXJ0aWNsZXMoZHQpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb2RpZXMoZHQpO1xuICAgIH1cbiAgICBkcmF3UGFydGljbGVzKGZuKSB7XG4gICAgICAgIHRoaXMuX2RyYXdQYXJ0aWNsZXMgPSBmbjtcbiAgICB9XG4gICAgZHJhd0JvZGllcyhmbikge1xuICAgICAgICB0aGlzLl9kcmF3Qm9kaWVzID0gZm47XG4gICAgfVxuICAgIGFkZChwLCBuYW1lID0gJycpIHtcbiAgICAgICAgaWYgKHAgaW5zdGFuY2VvZiBCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLl9ib2RpZXMucHVzaChwKTtcbiAgICAgICAgICAgIHRoaXMuX2JuYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGFydGljbGVzLnB1c2gocCk7XG4gICAgICAgICAgICB0aGlzLl9wbmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX2luZGV4KGZuLCBpZCkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZuKGlkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBpbmRleCBvZiAke2lkfS4gWW91IGNhbiB1c2UgcGFydGljbGVJbmRleCgpIG9yIGJvZHlJbmRleCgpIGZ1bmN0aW9uIHRvIGNoZWNrIGV4aXN0ZW5jZSBieSBuYW1lLmApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHJlbW92ZUJvZHkoZnJvbSwgY291bnQgPSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faW5kZXgodGhpcy5ib2R5SW5kZXguYmluZCh0aGlzKSwgZnJvbSk7XG4gICAgICAgIGNvbnN0IHBhcmFtID0gKGluZGV4IDwgMCkgPyBbaW5kZXggKiAtMSAtIDEsIGNvdW50XSA6IFtpbmRleCwgY291bnRdO1xuICAgICAgICB0aGlzLl9ib2RpZXMuc3BsaWNlKHBhcmFtWzBdLCBwYXJhbVsxXSk7XG4gICAgICAgIHRoaXMuX2JuYW1lcy5zcGxpY2UocGFyYW1bMF0sIHBhcmFtWzFdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbW92ZVBhcnRpY2xlKGZyb20sIGNvdW50ID0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2luZGV4KHRoaXMucGFydGljbGVJbmRleC5iaW5kKHRoaXMpLCBmcm9tKTtcbiAgICAgICAgY29uc3QgcGFyYW0gPSAoaW5kZXggPCAwKSA/IFtpbmRleCAqIC0xIC0gMSwgY291bnRdIDogW2luZGV4LCBjb3VudF07XG4gICAgICAgIHRoaXMuX3BhcnRpY2xlcy5zcGxpY2UocGFyYW1bMF0sIHBhcmFtWzFdKTtcbiAgICAgICAgdGhpcy5fcG5hbWVzLnNwbGljZShwYXJhbVswXSwgcGFyYW1bMV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGVkZ2VDb25zdHJhaW50KHAxLCBwMiwgZGlzdCwgc3RpZmYgPSAxLCBwcmVjaXNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgbTEgPSAxIC8gKHAxLm1hc3MgfHwgMSk7XG4gICAgICAgIGNvbnN0IG0yID0gMSAvIChwMi5tYXNzIHx8IDEpO1xuICAgICAgICBjb25zdCBtbSA9IG0xICsgbTI7XG4gICAgICAgIGxldCBkZWx0YSA9IHAyLiRzdWJ0cmFjdChwMSk7XG4gICAgICAgIGxldCBkaXN0U3EgPSBkaXN0ICogZGlzdDtcbiAgICAgICAgbGV0IGQgPSAocHJlY2lzZSkgPyAoZGlzdCAvIGRlbHRhLm1hZ25pdHVkZSgpIC0gMSkgOiAoZGlzdFNxIC8gKGRlbHRhLmRvdChkZWx0YSkgKyBkaXN0U3EpIC0gMC41KTtcbiAgICAgICAgbGV0IGYgPSBkZWx0YS4kbXVsdGlwbHkoZCAqIHN0aWZmKTtcbiAgICAgICAgcDEuc3VidHJhY3QoZi4kbXVsdGlwbHkobTEgLyBtbSkpO1xuICAgICAgICBwMi5hZGQoZi4kbXVsdGlwbHkobTIgLyBtbSkpO1xuICAgICAgICByZXR1cm4gcDE7XG4gICAgfVxuICAgIHN0YXRpYyBib3VuZENvbnN0cmFpbnQocCwgcmVjdCwgZGFtcGluZyA9IDAuNzUpIHtcbiAgICAgICAgbGV0IGJvdW5kID0gR2VvbS5ib3VuZGluZ0JveChyZWN0KTtcbiAgICAgICAgbGV0IG5wID0gcC4kbWluKGJvdW5kWzFdLnN1YnRyYWN0KHAucmFkaXVzKSkuJG1heChib3VuZFswXS5hZGQocC5yYWRpdXMpKTtcbiAgICAgICAgaWYgKG5wWzBdID09PSBib3VuZFswXVswXSB8fCBucFswXSA9PT0gYm91bmRbMV1bMF0pIHtcbiAgICAgICAgICAgIGxldCBjID0gcC5jaGFuZ2VkLiRtdWx0aXBseShkYW1waW5nKTtcbiAgICAgICAgICAgIHAucHJldmlvdXMgPSBucC4kc3VidHJhY3QobmV3IFB0KC1jWzBdLCBjWzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobnBbMV0gPT09IGJvdW5kWzBdWzFdIHx8IG5wWzFdID09PSBib3VuZFsxXVsxXSkge1xuICAgICAgICAgICAgbGV0IGMgPSBwLmNoYW5nZWQuJG11bHRpcGx5KGRhbXBpbmcpO1xuICAgICAgICAgICAgcC5wcmV2aW91cyA9IG5wLiRzdWJ0cmFjdChuZXcgUHQoY1swXSwgLWNbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICBwLnRvKG5wKTtcbiAgICB9XG4gICAgaW50ZWdyYXRlKHAsIGR0LCBwcmV2RHQpIHtcbiAgICAgICAgcC5hZGRGb3JjZSh0aGlzLl9ncmF2aXR5KTtcbiAgICAgICAgcC52ZXJsZXQoZHQsIHRoaXMuX2ZyaWN0aW9uLCBwcmV2RHQpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgX3VwZGF0ZVBhcnRpY2xlcyhkdCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fcGFydGljbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IHRoaXMuX3BhcnRpY2xlc1tpXTtcbiAgICAgICAgICAgIHRoaXMuaW50ZWdyYXRlKHAsIGR0LCB0aGlzLl9sYXN0VGltZSk7XG4gICAgICAgICAgICBXb3JsZC5ib3VuZENvbnN0cmFpbnQocCwgdGhpcy5fYm91bmQsIHRoaXMuX2RhbXBpbmcpO1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IGkgKyAxOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcDIgPSB0aGlzLl9wYXJ0aWNsZXNba107XG4gICAgICAgICAgICAgICAgICAgIHAuY29sbGlkZShwMiwgdGhpcy5fZGFtcGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYXdQYXJ0aWNsZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd1BhcnRpY2xlcyhwLCBpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0VGltZSA9IGR0O1xuICAgIH1cbiAgICBfdXBkYXRlQm9kaWVzKGR0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9ib2RpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiZHMgPSB0aGlzLl9ib2RpZXNbaV07XG4gICAgICAgICAgICBpZiAoYmRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGtsZW4gPSBiZHMubGVuZ3RoOyBrIDwga2xlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiayA9IGJkc1trXTtcbiAgICAgICAgICAgICAgICAgICAgV29ybGQuYm91bmRDb25zdHJhaW50KGJrLCB0aGlzLl9ib3VuZCwgdGhpcy5fZGFtcGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZWdyYXRlKGJrLCBkdCwgdGhpcy5fbGFzdFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gaSArIDE7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBiZHMucHJvY2Vzc0JvZHkodGhpcy5fYm9kaWVzW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDAsIG1sZW4gPSB0aGlzLl9wYXJ0aWNsZXMubGVuZ3RoOyBtIDwgbWxlbjsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJkcy5wcm9jZXNzUGFydGljbGUodGhpcy5fcGFydGljbGVzW21dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmRzLnByb2Nlc3NFZGdlcygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmF3Qm9kaWVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmF3Qm9kaWVzKGJkcywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUGFydGljbGUgZXh0ZW5kcyBQdCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5fbWFzcyA9IDE7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IDA7XG4gICAgICAgIHRoaXMuX2ZvcmNlID0gbmV3IFB0KCk7XG4gICAgICAgIHRoaXMuX3ByZXYgPSBuZXcgUHQoKTtcbiAgICAgICAgdGhpcy5fbG9jayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wcmV2ID0gdGhpcy5jbG9uZSgpO1xuICAgIH1cbiAgICBnZXQgbWFzcygpIHsgcmV0dXJuIHRoaXMuX21hc3M7IH1cbiAgICBzZXQgbWFzcyhtKSB7IHRoaXMuX21hc3MgPSBtOyB9XG4gICAgZ2V0IHJhZGl1cygpIHsgcmV0dXJuIHRoaXMuX3JhZGl1czsgfVxuICAgIHNldCByYWRpdXMoZikgeyB0aGlzLl9yYWRpdXMgPSBmOyB9XG4gICAgZ2V0IHByZXZpb3VzKCkgeyByZXR1cm4gdGhpcy5fcHJldjsgfVxuICAgIHNldCBwcmV2aW91cyhwKSB7IHRoaXMuX3ByZXYgPSBwOyB9XG4gICAgZ2V0IGZvcmNlKCkgeyByZXR1cm4gdGhpcy5fZm9yY2U7IH1cbiAgICBzZXQgZm9yY2UoZykgeyB0aGlzLl9mb3JjZSA9IGc7IH1cbiAgICBnZXQgYm9keSgpIHsgcmV0dXJuIHRoaXMuX2JvZHk7IH1cbiAgICBzZXQgYm9keShiKSB7IHRoaXMuX2JvZHkgPSBiOyB9XG4gICAgZ2V0IGxvY2soKSB7IHJldHVybiB0aGlzLl9sb2NrOyB9XG4gICAgc2V0IGxvY2soYikge1xuICAgICAgICB0aGlzLl9sb2NrID0gYjtcbiAgICAgICAgdGhpcy5fbG9ja1B0ID0gbmV3IFB0KHRoaXMpO1xuICAgIH1cbiAgICBnZXQgY2hhbmdlZCgpIHsgcmV0dXJuIHRoaXMuJHN1YnRyYWN0KHRoaXMuX3ByZXYpOyB9XG4gICAgc2V0IHBvc2l0aW9uKHApIHtcbiAgICAgICAgdGhpcy5wcmV2aW91cy50byh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2spXG4gICAgICAgICAgICB0aGlzLl9sb2NrUHQgPSBwO1xuICAgICAgICB0aGlzLnRvKHApO1xuICAgIH1cbiAgICBzaXplKHIpIHtcbiAgICAgICAgdGhpcy5fbWFzcyA9IHI7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRGb3JjZSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX2ZvcmNlLmFkZCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmNlO1xuICAgIH1cbiAgICB2ZXJsZXQoZHQsIGZyaWN0aW9uLCBsYXN0RHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHRoaXMudG8odGhpcy5fbG9ja1B0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsdCA9IChsYXN0RHQpID8gbGFzdER0IDogZHQ7XG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMuX2ZvcmNlLm11bHRpcGx5KGR0ICogKGR0ICsgbHQpIC8gMik7XG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMuY2hhbmdlZC5tdWx0aXBseShmcmljdGlvbiAqIGR0IC8gbHQpLmFkZChhKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXYgPSB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgICB0aGlzLmFkZCh2KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmNlID0gbmV3IFB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhpdCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX3ByZXYuc3VidHJhY3QobmV3IFB0KC4uLmFyZ3MpLiRkaXZpZGUoTWF0aC5zcXJ0KHRoaXMuX21hc3MpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb2xsaWRlKHAyLCBkYW1wID0gMSkge1xuICAgICAgICBsZXQgcDEgPSB0aGlzO1xuICAgICAgICBsZXQgZHAgPSBwMS4kc3VidHJhY3QocDIpO1xuICAgICAgICBsZXQgZGlzdFNxID0gZHAubWFnbml0dWRlU3EoKTtcbiAgICAgICAgbGV0IGRyID0gcDEucmFkaXVzICsgcDIucmFkaXVzO1xuICAgICAgICBpZiAoZGlzdFNxIDwgZHIgKiBkcikge1xuICAgICAgICAgICAgbGV0IGMxID0gcDEuY2hhbmdlZDtcbiAgICAgICAgICAgIGxldCBjMiA9IHAyLmNoYW5nZWQ7XG4gICAgICAgICAgICBsZXQgZGlzdCA9IE1hdGguc3FydChkaXN0U3EpO1xuICAgICAgICAgICAgbGV0IGQgPSBkcC4kbXVsdGlwbHkoKChkaXN0IC0gZHIpIC8gZGlzdCkgLyAyKTtcbiAgICAgICAgICAgIGxldCBucDEgPSBwMS4kc3VidHJhY3QoZCk7XG4gICAgICAgICAgICBsZXQgbnAyID0gcDIuJGFkZChkKTtcbiAgICAgICAgICAgIHAxLnRvKG5wMSk7XG4gICAgICAgICAgICBwMi50byhucDIpO1xuICAgICAgICAgICAgbGV0IGYxID0gZGFtcCAqIGRwLmRvdChjMSkgLyBkaXN0U3E7XG4gICAgICAgICAgICBsZXQgZjIgPSBkYW1wICogZHAuZG90KGMyKSAvIGRpc3RTcTtcbiAgICAgICAgICAgIGxldCBkbTEgPSBwMS5tYXNzIC8gKHAxLm1hc3MgKyBwMi5tYXNzKTtcbiAgICAgICAgICAgIGxldCBkbTIgPSBwMi5tYXNzIC8gKHAxLm1hc3MgKyBwMi5tYXNzKTtcbiAgICAgICAgICAgIGMxLmFkZChuZXcgUHQoZjIgKiBkcFswXSAtIGYxICogZHBbMF0sIGYyICogZHBbMV0gLSBmMSAqIGRwWzFdKS4kbXVsdGlwbHkoZG0yKSk7XG4gICAgICAgICAgICBjMi5hZGQobmV3IFB0KGYxICogZHBbMF0gLSBmMiAqIGRwWzBdLCBmMSAqIGRwWzFdIC0gZjIgKiBkcFsxXSkuJG11bHRpcGx5KGRtMSkpO1xuICAgICAgICAgICAgcDEucHJldmlvdXMgPSBwMS4kc3VidHJhY3QoYzEpO1xuICAgICAgICAgICAgcDIucHJldmlvdXMgPSBwMi4kc3VidHJhY3QoYzIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFBhcnRpY2xlOiAke3RoaXNbMF19ICR7dGhpc1sxXX0gfCBwcmV2aW91cyAke3RoaXMuX3ByZXZbMF19ICR7dGhpcy5fcHJldlsxXX0gfCBtYXNzICR7dGhpcy5fbWFzc31gO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCb2R5IGV4dGVuZHMgR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9jcyA9IFtdO1xuICAgICAgICB0aGlzLl9zdGlmZiA9IDE7XG4gICAgICAgIHRoaXMuX2xvY2tzID0ge307XG4gICAgICAgIHRoaXMuX21hc3MgPSAxO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUdyb3VwKGJvZHksIHN0aWZmID0gMSwgYXV0b0xpbmsgPSB0cnVlLCBhdXRvTWFzcyA9IHRydWUpIHtcbiAgICAgICAgbGV0IGIgPSBuZXcgQm9keSgpLmluaXQoYm9keSk7XG4gICAgICAgIGlmIChhdXRvTGluaylcbiAgICAgICAgICAgIGIubGlua0FsbChzdGlmZik7XG4gICAgICAgIGlmIChhdXRvTWFzcylcbiAgICAgICAgICAgIGIuYXV0b01hc3MoKTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIGluaXQoYm9keSwgc3RpZmYgPSAxKSB7XG4gICAgICAgIGxldCBjID0gbmV3IFB0KCk7XG4gICAgICAgIGZvciAobGV0IGxpIG9mIGJvZHkpIHtcbiAgICAgICAgICAgIGxldCBwID0gbmV3IFBhcnRpY2xlKGxpKTtcbiAgICAgICAgICAgIHAuYm9keSA9IHRoaXM7XG4gICAgICAgICAgICBjLmFkZChsaSk7XG4gICAgICAgICAgICB0aGlzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RpZmYgPSBzdGlmZjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldCBtYXNzKCkgeyByZXR1cm4gdGhpcy5fbWFzczsgfVxuICAgIHNldCBtYXNzKG0pIHtcbiAgICAgICAgdGhpcy5fbWFzcyA9IG07XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW2ldLm1hc3MgPSB0aGlzLl9tYXNzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF1dG9NYXNzKCkge1xuICAgICAgICB0aGlzLm1hc3MgPSBNYXRoLnNxcnQoUG9seWdvbi5hcmVhKHRoaXMpKSAvIDEwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluayhpbmRleDEsIGluZGV4Miwgc3RpZmYpIHtcbiAgICAgICAgaWYgKGluZGV4MSA8IDAgfHwgaW5kZXgxID49IHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXgxIGlzIG5vdCBpbiB0aGUgR3JvdXAncyBpbmRpY2VzXCIpO1xuICAgICAgICBpZiAoaW5kZXgyIDwgMCB8fCBpbmRleDIgPj0gdGhpcy5sZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleDEgaXMgbm90IGluIHRoZSBHcm91cCdzIGluZGljZXNcIik7XG4gICAgICAgIGxldCBkID0gdGhpc1tpbmRleDFdLiRzdWJ0cmFjdCh0aGlzW2luZGV4Ml0pLm1hZ25pdHVkZSgpO1xuICAgICAgICB0aGlzLl9jcy5wdXNoKFtpbmRleDEsIGluZGV4MiwgZCwgc3RpZmYgfHwgdGhpcy5fc3RpZmZdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmtBbGwoc3RpZmYpIHtcbiAgICAgICAgbGV0IGhhbGYgPSB0aGlzLmxlbmd0aCAvIDI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbiA9IChpID49IGxlbiAtIDEpID8gMCA6IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy5saW5rKGksIG4sIHN0aWZmKTtcbiAgICAgICAgICAgIGlmIChsZW4gPiA0KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5kID0gKE1hdGguZmxvb3IoaGFsZiAvIDIpKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IG4yID0gKGkgPj0gbGVuIC0gbmQpID8gaSAlIGxlbiA6IGkgKyBuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmsoaSwgbjIsIHN0aWZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpIDw9IGhhbGYgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rKGksIE1hdGgubWluKHRoaXMubGVuZ3RoIC0gMSwgaSArIE1hdGguZmxvb3IoaGFsZikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW5rc1RvTGluZXMoKSB7XG4gICAgICAgIGxldCBncyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fY3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsbiA9IHRoaXMuX2NzW2ldO1xuICAgICAgICAgICAgZ3MucHVzaChuZXcgR3JvdXAodGhpc1tsblswXV0sIHRoaXNbbG5bMV1dKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdzO1xuICAgIH1cbiAgICBwcm9jZXNzRWRnZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9jcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IFttLCBuLCBkLCBzXSA9IHRoaXMuX2NzW2ldO1xuICAgICAgICAgICAgV29ybGQuZWRnZUNvbnN0cmFpbnQodGhpc1ttXSwgdGhpc1tuXSwgZCwgcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc0JvZHkoYikge1xuICAgICAgICBsZXQgYjEgPSB0aGlzO1xuICAgICAgICBsZXQgYjIgPSBiO1xuICAgICAgICBsZXQgaGl0ID0gUG9seWdvbi5oYXNJbnRlcnNlY3RQb2x5Z29uKGIxLCBiMik7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIGxldCBjdiA9IGhpdC5ub3JtYWwuJG11bHRpcGx5KGhpdC5kaXN0KTtcbiAgICAgICAgICAgIGxldCB0O1xuICAgICAgICAgICAgbGV0IGVnID0gaGl0LmVkZ2U7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZWdbMF1bMF0gLSBlZ1sxXVswXSkgPiBNYXRoLmFicyhlZ1swXVsxXSAtIGVnWzFdWzFdKSkge1xuICAgICAgICAgICAgICAgIHQgPSAoaGl0LnZlcnRleFswXSAtIGN2WzBdIC0gZWdbMF1bMF0pIC8gKGVnWzFdWzBdIC0gZWdbMF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IChoaXQudmVydGV4WzFdIC0gY3ZbMV0gLSBlZ1swXVsxXSkgLyAoZWdbMV1bMV0gLSBlZ1swXVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbGFtYmRhID0gMSAvICh0ICogdCArICgxIC0gdCkgKiAoMSAtIHQpKTtcbiAgICAgICAgICAgIGxldCBtMCA9IGhpdC52ZXJ0ZXguYm9keS5tYXNzIHx8IDE7XG4gICAgICAgICAgICBsZXQgbTEgPSBoaXQuZWRnZVswXS5ib2R5Lm1hc3MgfHwgMTtcbiAgICAgICAgICAgIGxldCBtcjAgPSBtMCAvIChtMCArIG0xKTtcbiAgICAgICAgICAgIGxldCBtcjEgPSBtMSAvIChtMCArIG0xKTtcbiAgICAgICAgICAgIGVnWzBdLnN1YnRyYWN0KGN2LiRtdWx0aXBseShtcjAgKiAoMSAtIHQpICogbGFtYmRhIC8gMikpO1xuICAgICAgICAgICAgZWdbMV0uc3VidHJhY3QoY3YuJG11bHRpcGx5KG1yMCAqIHQgKiBsYW1iZGEgLyAyKSk7XG4gICAgICAgICAgICBoaXQudmVydGV4LmFkZChjdi4kbXVsdGlwbHkobXIxKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvY2Vzc1BhcnRpY2xlKGIpIHtcbiAgICAgICAgbGV0IGIxID0gdGhpcztcbiAgICAgICAgbGV0IGIyID0gYjtcbiAgICAgICAgbGV0IGhpdCA9IFBvbHlnb24uaGFzSW50ZXJzZWN0Q2lyY2xlKGIxLCBDaXJjbGUuZnJvbUNlbnRlcihiLCBiLnJhZGl1cykpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBsZXQgY3YgPSBoaXQubm9ybWFsLiRtdWx0aXBseShoaXQuZGlzdCk7XG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIGxldCBlZyA9IGhpdC5lZGdlO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVnWzBdWzBdIC0gZWdbMV1bMF0pID4gTWF0aC5hYnMoZWdbMF1bMV0gLSBlZ1sxXVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0ID0gKGhpdC52ZXJ0ZXhbMF0gLSBjdlswXSAtIGVnWzBdWzBdKSAvIChlZ1sxXVswXSAtIGVnWzBdWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgPSAoaGl0LnZlcnRleFsxXSAtIGN2WzFdIC0gZWdbMF1bMV0pIC8gKGVnWzFdWzFdIC0gZWdbMF1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGxhbWJkYSA9IDEgLyAodCAqIHQgKyAoMSAtIHQpICogKDEgLSB0KSk7XG4gICAgICAgICAgICBsZXQgbTAgPSBoaXQudmVydGV4Lm1hc3MgfHwgYjIubWFzcyB8fCAxO1xuICAgICAgICAgICAgbGV0IG0xID0gaGl0LmVkZ2VbMF0uYm9keS5tYXNzIHx8IDE7XG4gICAgICAgICAgICBsZXQgbXIwID0gbTAgLyAobTAgKyBtMSk7XG4gICAgICAgICAgICBsZXQgbXIxID0gbTEgLyAobTAgKyBtMSk7XG4gICAgICAgICAgICBlZ1swXS5zdWJ0cmFjdChjdi4kbXVsdGlwbHkobXIwICogKDEgLSB0KSAqIGxhbWJkYSAvIDIpKTtcbiAgICAgICAgICAgIGVnWzFdLnN1YnRyYWN0KGN2LiRtdWx0aXBseShtcjAgKiB0ICogbGFtYmRhIC8gMikpO1xuICAgICAgICAgICAgbGV0IGMxID0gYi5jaGFuZ2VkLmFkZChjdi4kbXVsdGlwbHkobXIxKSk7XG4gICAgICAgICAgICBiLnByZXZpb3VzID0gYi4kc3VidHJhY3QoYzEpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGh5c2ljcy5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFB0LCBHcm91cCB9IGZyb20gXCIuL1B0XCI7XG5pbXBvcnQgeyBOdW0gfSBmcm9tIFwiLi9OdW1cIjtcbmV4cG9ydCBjbGFzcyBUZW1wbyB7XG4gICAgY29uc3RydWN0b3IoYnBtKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLl9saXN0ZW5lckluYyA9IDA7XG4gICAgICAgIHRoaXMuYnBtID0gYnBtO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUJlYXQobXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZW1wbyg2MDAwMCAvIG1zKTtcbiAgICB9XG4gICAgZ2V0IGJwbSgpIHsgcmV0dXJuIHRoaXMuX2JwbTsgfVxuICAgIHNldCBicG0obikge1xuICAgICAgICB0aGlzLl9icG0gPSBuO1xuICAgICAgICB0aGlzLl9tcyA9IDYwMDAwIC8gdGhpcy5fYnBtO1xuICAgIH1cbiAgICBnZXQgbXMoKSB7IHJldHVybiB0aGlzLl9tczsgfVxuICAgIHNldCBtcyhuKSB7XG4gICAgICAgIHRoaXMuX2JwbSA9IE1hdGguZmxvb3IoNjAwMDAgLyBuKTtcbiAgICAgICAgdGhpcy5fbXMgPSA2MDAwMCAvIHRoaXMuX2JwbTtcbiAgICB9XG4gICAgX2NyZWF0ZUlEKGxpc3RlbmVyKSB7XG4gICAgICAgIGxldCBpZCA9ICcnO1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZCA9ICdfYicgKyAodGhpcy5fbGlzdGVuZXJJbmMrKyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGxpc3RlbmVyLm5hbWUgfHwgJ19iJyArICh0aGlzLl9saXN0ZW5lckluYysrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIGV2ZXJ5KGJlYXRzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHAgPSBBcnJheS5pc0FycmF5KGJlYXRzKSA/IGJlYXRzWzBdIDogYmVhdHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKGZuLCBvZmZzZXQgPSAwLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gbmFtZSB8fCBzZWxmLl9jcmVhdGVJRChmbik7XG4gICAgICAgICAgICAgICAgc2VsZi5fbGlzdGVuZXJzW2lkXSA9IHsgbmFtZTogaWQsIGJlYXRzOiBiZWF0cywgcGVyaW9kOiBwLCBpbmRleDogMCwgb2Zmc2V0OiBvZmZzZXQsIGR1cmF0aW9uOiAtMSwgY29udGludW91czogZmFsc2UsIGZuOiBmbiB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoZm4sIG9mZnNldCA9IDAsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBuYW1lIHx8IHNlbGYuX2NyZWF0ZUlEKGZuKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9saXN0ZW5lcnNbaWRdID0geyBuYW1lOiBpZCwgYmVhdHM6IGJlYXRzLCBwZXJpb2Q6IHAsIGluZGV4OiAwLCBvZmZzZXQ6IG9mZnNldCwgZHVyYXRpb246IC0xLCBjb250aW51b3VzOiB0cnVlLCBmbjogZm4gfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhY2sodGltZSkge1xuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGxldCBsaSA9IHRoaXMuX2xpc3RlbmVyc1trXTtcbiAgICAgICAgICAgICAgICBsZXQgX3QgPSAobGkub2Zmc2V0KSA/IHRpbWUgKyBsaS5vZmZzZXQgOiB0aW1lO1xuICAgICAgICAgICAgICAgIGxldCBtcyA9IGxpLnBlcmlvZCAqIHRoaXMuX21zO1xuICAgICAgICAgICAgICAgIGxldCBpc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKF90ID4gbGkuZHVyYXRpb24gKyBtcykge1xuICAgICAgICAgICAgICAgICAgICBsaS5kdXJhdGlvbiA9IF90IC0gKF90ICUgdGhpcy5fbXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaS5iZWF0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmluZGV4ID0gKGxpLmluZGV4ICsgMSkgJSBsaS5iZWF0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaS5wZXJpb2QgPSBsaS5iZWF0c1tsaS5pbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNTdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChNYXRoLmZsb29yKGxpLmR1cmF0aW9uIC8gdGhpcy5fbXMpIC8gbGkucGVyaW9kKSk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IChsaS5jb250aW51b3VzKSA/IFtjb3VudCwgTnVtLmNsYW1wKChfdCAtIGxpLmR1cmF0aW9uKSAvIG1zLCAwLCAxKSwgX3QsIGlzU3RhcnRdIDogW2NvdW50XTtcbiAgICAgICAgICAgICAgICBpZiAobGkuY29udGludW91cyB8fCBpc1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkb25lID0gbGkuZm4uYXBwbHkobGksIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tsaS5uYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW25hbWVdO1xuICAgIH1cbiAgICBhbmltYXRlKHRpbWUsIGZ0aW1lKSB7XG4gICAgICAgIHRoaXMudHJhY2sodGltZSk7XG4gICAgfVxuICAgIHJlc2l6ZShib3VuZCwgZXZ0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aW9uKHR5cGUsIHB4LCBweSwgZXZ0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgbGV0IF9jdHggPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHwgZmFsc2U7XG4gICAgICAgIGlmICghX2N0eClcbiAgICAgICAgICAgIHRocm93IChuZXcgRXJyb3IoXCJZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFdlYiBBdWRpby4gKE5vIEF1ZGlvQ29udGV4dClcIikpO1xuICAgICAgICB0aGlzLl9jdHggPSAoX2N0eCkgPyBuZXcgX2N0eCgpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbShub2RlLCBjdHgsIHR5cGUgPSBcImdlblwiLCBzdHJlYW0pIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgU291bmQodHlwZSk7XG4gICAgICAgIHMuX25vZGUgPSBub2RlO1xuICAgICAgICBzLl9jdHggPSBjdHg7XG4gICAgICAgIGlmIChzdHJlYW0pXG4gICAgICAgICAgICBzLl9zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBzdGF0aWMgbG9hZChzb3VyY2UsIGNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBuZXcgU291bmQoXCJmaWxlXCIpO1xuICAgICAgICAgICAgcy5fc291cmNlID0gKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSA/IG5ldyBBdWRpbyhzb3VyY2UpIDogc291cmNlO1xuICAgICAgICAgICAgcy5fc291cmNlLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICBzLl9zb3VyY2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgICAgIHMuX3NvdXJjZS5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkgeyBzLl9wbGF5aW5nID0gZmFsc2U7IH0pO1xuICAgICAgICAgICAgcy5fc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkgeyByZWplY3QoXCJFcnJvciBsb2FkaW5nIHNvdW5kXCIpOyB9KTtcbiAgICAgICAgICAgIHMuX3NvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzLl9ub2RlID0gcy5fY3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShzLl9zb3VyY2UpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2FkQXNCdWZmZXIodXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgbGV0IHMgPSBuZXcgU291bmQoXCJmaWxlXCIpO1xuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy5fY3R4LmRlY29kZUF1ZGlvRGF0YShyZXF1ZXN0LnJlc3BvbnNlLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuY3JlYXRlQnVmZmVyKGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocyk7XG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4gcmVqZWN0KFwiRXJyb3IgZGVjb2RpbmcgYXVkaW9cIikpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlQnVmZmVyKGJ1Zikge1xuICAgICAgICB0aGlzLl9ub2RlID0gdGhpcy5fY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBpZiAoYnVmICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBidWY7XG4gICAgICAgIHRoaXMuX25vZGUuYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgICAgICB0aGlzLl9ub2RlLm9uZW5kZWQgPSAoKSA9PiB7IHRoaXMuX3BsYXlpbmcgPSBmYWxzZTsgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBnZW5lcmF0ZSh0eXBlLCB2YWwpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgU291bmQoXCJnZW5cIik7XG4gICAgICAgIHJldHVybiBzLl9nZW4odHlwZSwgdmFsKTtcbiAgICB9XG4gICAgX2dlbih0eXBlLCB2YWwpIHtcbiAgICAgICAgdGhpcy5fbm9kZSA9IHRoaXMuX2N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICAgIGxldCBvc2MgPSB0aGlzLl9ub2RlO1xuICAgICAgICBvc2MudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmICh0eXBlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgb3NjLnNldFBlcmlvZGljV2F2ZSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3NjLmZyZXF1ZW5jeS52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGlucHV0KGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHMgPSBuZXcgU291bmQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGNvbnN0cmFpbnQgPyBjb25zdHJhaW50IDogeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgcy5fc3RyZWFtID0geWllbGQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoYyk7XG4gICAgICAgICAgICAgICAgcy5fbm9kZSA9IHMuX2N0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzLl9zdHJlYW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGdldCBhdWRpbyBmcm9tIGlucHV0IGRldmljZS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBjdHgoKSB7IHJldHVybiB0aGlzLl9jdHg7IH1cbiAgICBnZXQgbm9kZSgpIHsgcmV0dXJuIHRoaXMuX25vZGU7IH1cbiAgICBnZXQgb3V0cHV0Tm9kZSgpIHsgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7IH1cbiAgICBnZXQgc3RyZWFtKCkgeyByZXR1cm4gdGhpcy5fc3RyZWFtOyB9XG4gICAgZ2V0IHNvdXJjZSgpIHsgcmV0dXJuIHRoaXMuX3NvdXJjZTsgfVxuICAgIGdldCBidWZmZXIoKSB7IHJldHVybiB0aGlzLl9idWZmZXI7IH1cbiAgICBzZXQgYnVmZmVyKGIpIHsgdGhpcy5fYnVmZmVyID0gYjsgfVxuICAgIGdldCB0eXBlKCkgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxuICAgIGdldCBwbGF5aW5nKCkgeyByZXR1cm4gdGhpcy5fcGxheWluZzsgfVxuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgbGV0IGR1ciA9IDA7XG4gICAgICAgIGxldCBjdXJyID0gMDtcbiAgICAgICAgaWYgKCEhdGhpcy5fYnVmZmVyKSB7XG4gICAgICAgICAgICBkdXIgPSB0aGlzLl9idWZmZXIuZHVyYXRpb247XG4gICAgICAgICAgICBjdXJyID0gKHRoaXMuX3RpbWVzdGFtcCkgPyB0aGlzLl9jdHguY3VycmVudFRpbWUgLSB0aGlzLl90aW1lc3RhbXAgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZHVyID0gdGhpcy5fc291cmNlLmR1cmF0aW9uO1xuICAgICAgICAgICAgY3VyciA9IHRoaXMuX3NvdXJjZS5jdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyciAvIGR1cjtcbiAgICB9XG4gICAgZ2V0IHBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3R5cGUgPT09IFwiaW5wdXRcIikgPyB0aGlzLl9ub2RlICE9PSB1bmRlZmluZWQgOiAoISF0aGlzLl9idWZmZXIgfHwgdGhpcy5fc291cmNlLnJlYWR5U3RhdGUgPT09IDQpO1xuICAgIH1cbiAgICBnZXQgYmluU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHl6ZXIuc2l6ZTtcbiAgICB9XG4gICAgZ2V0IHNhbXBsZVJhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdHguc2FtcGxlUmF0ZTtcbiAgICB9XG4gICAgZ2V0IGZyZXF1ZW5jeSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl90eXBlID09PSBcImdlblwiKSA/IHRoaXMuX25vZGUuZnJlcXVlbmN5LnZhbHVlIDogMDtcbiAgICB9XG4gICAgc2V0IGZyZXF1ZW5jeShmKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSBcImdlblwiKVxuICAgICAgICAgICAgdGhpcy5fbm9kZS5mcmVxdWVuY3kudmFsdWUgPSBmO1xuICAgIH1cbiAgICBjb25uZWN0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5fbm9kZS5jb25uZWN0KG5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0T3V0cHV0Tm9kZShvdXRwdXROb2RlKSB7XG4gICAgICAgIHRoaXMuX291dHB1dE5vZGUgPSBvdXRwdXROb2RlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVtb3ZlT3V0cHV0Tm9kZSgpIHtcbiAgICAgICAgdGhpcy5fb3V0cHV0Tm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhbmFseXplKHNpemUgPSAyNTYsIG1pbkRiID0gLTEwMCwgbWF4RGIgPSAtMzAsIHNtb290aCA9IDAuOCkge1xuICAgICAgICBsZXQgYSA9IHRoaXMuX2N0eC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICBhLmZmdFNpemUgPSBzaXplICogMjtcbiAgICAgICAgYS5taW5EZWNpYmVscyA9IG1pbkRiO1xuICAgICAgICBhLm1heERlY2liZWxzID0gbWF4RGI7XG4gICAgICAgIGEuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gc21vb3RoO1xuICAgICAgICB0aGlzLmFuYWx5emVyID0ge1xuICAgICAgICAgICAgbm9kZTogYSxcbiAgICAgICAgICAgIHNpemU6IGEuZnJlcXVlbmN5QmluQ291bnQsXG4gICAgICAgICAgICBkYXRhOiBuZXcgVWludDhBcnJheShhLmZyZXF1ZW5jeUJpbkNvdW50KVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ub2RlLmNvbm5lY3QodGhpcy5hbmFseXplci5ub2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIF9kb21haW4odGltZSkge1xuICAgICAgICBpZiAodGhpcy5hbmFseXplcikge1xuICAgICAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLm5vZGUuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKHRoaXMuYW5hbHl6ZXIuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLm5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5hbmFseXplci5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuYWx5emVyLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO1xuICAgIH1cbiAgICBfZG9tYWluVG8odGltZSwgc2l6ZSwgcG9zaXRpb24gPSBbMCwgMF0sIHRyaW0gPSBbMCwgMF0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSAodGltZSkgPyB0aGlzLnRpbWVEb21haW4oKSA6IHRoaXMuZnJlcURvbWFpbigpO1xuICAgICAgICBsZXQgZyA9IG5ldyBHcm91cCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gdHJpbVswXSwgbGVuID0gZGF0YS5sZW5ndGggLSB0cmltWzFdOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGcucHVzaChuZXcgUHQocG9zaXRpb25bMF0gKyBzaXplWzBdICogaSAvIGxlbiwgcG9zaXRpb25bMV0gKyBzaXplWzFdICogZGF0YVtpXSAvIDI1NSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cbiAgICB0aW1lRG9tYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluKHRydWUpO1xuICAgIH1cbiAgICB0aW1lRG9tYWluVG8oc2l6ZSwgcG9zaXRpb24gPSBbMCwgMF0sIHRyaW0gPSBbMCwgMF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpblRvKHRydWUsIHNpemUsIHBvc2l0aW9uLCB0cmltKTtcbiAgICB9XG4gICAgZnJlcURvbWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpbihmYWxzZSk7XG4gICAgfVxuICAgIGZyZXFEb21haW5UbyhzaXplLCBwb3NpdGlvbiA9IFswLCAwXSwgdHJpbSA9IFswLCAwXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluVG8oZmFsc2UsIHNpemUsIHBvc2l0aW9uLCB0cmltKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLl9ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXJ0KHRpbWVBdCA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX2N0eC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpXG4gICAgICAgICAgICB0aGlzLl9jdHgucmVzdW1lKCk7XG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5fYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZS5zdGFydCh0aW1lQXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVzdGFtcCA9IHRoaXMuX2N0eC5jdXJyZW50VGltZSArIHRpbWVBdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVBdCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5jdXJyZW50VGltZSA9IHRpbWVBdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90eXBlID09PSBcImdlblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW4odGhpcy5fbm9kZS50eXBlLCB0aGlzLl9ub2RlLmZyZXF1ZW5jeS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9ub2RlLnN0YXJ0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmFseXplcilcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlLmNvbm5lY3QodGhpcy5hbmFseXplci5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5fb3V0cHV0Tm9kZSB8fCB0aGlzLl9ub2RlKS5jb25uZWN0KHRoaXMuX2N0eC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXlpbmcpXG4gICAgICAgICAgICAodGhpcy5fb3V0cHV0Tm9kZSB8fCB0aGlzLl9ub2RlKS5kaXNjb25uZWN0KHRoaXMuX2N0eC5kZXN0aW5hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgaWYgKCEhdGhpcy5fYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09IFwiZ2VuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX25vZGUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09IFwiaW5wdXRcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBsYXkuanMubWFwIiwiLyohIFNvdXJjZSBjb2RlIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSBMaWNlbnNlIDIuMC4gQ29weXJpZ2h0IMKpIDIwMTctY3VycmVudCBXaWxsaWFtIE5nYW4gYW5kIGNvbnRyaWJ1dG9ycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbmdhbi9wdHMpICovXG5pbXBvcnQgeyBVdGlsLCBDb25zdCB9IGZyb20gXCIuL1V0aWxcIjtcbmltcG9ydCB7IEdlb20sIE51bSB9IGZyb20gXCIuL051bVwiO1xuaW1wb3J0IHsgVmVjLCBNYXQgfSBmcm9tIFwiLi9MaW5lYXJBbGdlYnJhXCI7XG5leHBvcnQgY2xhc3MgUHQgZXh0ZW5kcyBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHN1cGVyKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIoKGFyZ3MubGVuZ3RoID4gMCkgPyBVdGlsLmdldEFyZ3MoYXJncykgOiBbMCwgMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBtYWtlKGRpbWVuc2lvbnMsIGRlZmF1bHRWYWx1ZSA9IDAsIHJhbmRvbWl6ZSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwID0gbmV3IEZsb2F0MzJBcnJheShkaW1lbnNpb25zKTtcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgIHAuZmlsbChkZWZhdWx0VmFsdWUpO1xuICAgICAgICBpZiAocmFuZG9taXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBbaV0gPSBwW2ldICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFB0KHApO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZDsgfVxuICAgIHNldCBpZChzKSB7IHRoaXMuX2lkID0gczsgfVxuICAgIGdldCB4KCkgeyByZXR1cm4gdGhpc1swXTsgfVxuICAgIHNldCB4KG4pIHsgdGhpc1swXSA9IG47IH1cbiAgICBnZXQgeSgpIHsgcmV0dXJuIHRoaXNbMV07IH1cbiAgICBzZXQgeShuKSB7IHRoaXNbMV0gPSBuOyB9XG4gICAgZ2V0IHooKSB7IHJldHVybiB0aGlzWzJdOyB9XG4gICAgc2V0IHoobikgeyB0aGlzWzJdID0gbjsgfVxuICAgIGdldCB3KCkgeyByZXR1cm4gdGhpc1szXTsgfVxuICAgIHNldCB3KG4pIHsgdGhpc1szXSA9IG47IH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQdCh0aGlzKTtcbiAgICB9XG4gICAgZXF1YWxzKHAsIHRocmVzaG9sZCA9IDAuMDAwMDAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpc1tpXSAtIHBbaV0pID4gdGhyZXNob2xkKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdG8oLi4uYXJncykge1xuICAgICAgICBsZXQgcCA9IFV0aWwuZ2V0QXJncyhhcmdzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHRoaXMubGVuZ3RoLCBwLmxlbmd0aCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpc1tpXSA9IHBbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICR0byguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkudG8oLi4uYXJncyk7XG4gICAgfVxuICAgIHRvQW5nbGUocmFkaWFuLCBtYWduaXR1ZGUsIGFuY2hvckZyb21QdCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBtID0gKG1hZ25pdHVkZSAhPSB1bmRlZmluZWQpID8gbWFnbml0dWRlIDogdGhpcy5tYWduaXR1ZGUoKTtcbiAgICAgICAgbGV0IGNoYW5nZSA9IFtNYXRoLmNvcyhyYWRpYW4pICogbSwgTWF0aC5zaW4ocmFkaWFuKSAqIG1dO1xuICAgICAgICByZXR1cm4gKGFuY2hvckZyb21QdCkgPyB0aGlzLmFkZChjaGFuZ2UpIDogdGhpcy50byhjaGFuZ2UpO1xuICAgIH1cbiAgICBvcChmbikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZm4oc2VsZiwgLi4ucGFyYW1zKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3BzKGZucykge1xuICAgICAgICBsZXQgX29wcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBfb3BzLnB1c2godGhpcy5vcChmbnNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX29wcztcbiAgICB9XG4gICAgJHRha2UoYXhpcykge1xuICAgICAgICBsZXQgcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcC5wdXNoKHRoaXNbYXhpc1tpXV0gfHwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQdChwKTtcbiAgICB9XG4gICAgJGNvbmNhdCguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHQodGhpcy50b0FycmF5KCkuY29uY2F0KFV0aWwuZ2V0QXJncyhhcmdzKSkpO1xuICAgIH1cbiAgICBhZGQoLi4uYXJncykge1xuICAgICAgICAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT0gXCJudW1iZXJcIikgPyBWZWMuYWRkKHRoaXMsIGFyZ3NbMF0pIDogVmVjLmFkZCh0aGlzLCBVdGlsLmdldEFyZ3MoYXJncykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgJGFkZCguLi5hcmdzKSB7IHJldHVybiB0aGlzLmNsb25lKCkuYWRkKC4uLmFyZ3MpOyB9XG4gICAgc3VidHJhY3QoLi4uYXJncykge1xuICAgICAgICAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT0gXCJudW1iZXJcIikgPyBWZWMuc3VidHJhY3QodGhpcywgYXJnc1swXSkgOiBWZWMuc3VidHJhY3QodGhpcywgVXRpbC5nZXRBcmdzKGFyZ3MpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICRzdWJ0cmFjdCguLi5hcmdzKSB7IHJldHVybiB0aGlzLmNsb25lKCkuc3VidHJhY3QoLi4uYXJncyk7IH1cbiAgICBtdWx0aXBseSguLi5hcmdzKSB7XG4gICAgICAgIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PSBcIm51bWJlclwiKSA/IFZlYy5tdWx0aXBseSh0aGlzLCBhcmdzWzBdKSA6IFZlYy5tdWx0aXBseSh0aGlzLCBVdGlsLmdldEFyZ3MoYXJncykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgJG11bHRpcGx5KC4uLmFyZ3MpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5tdWx0aXBseSguLi5hcmdzKTsgfVxuICAgIGRpdmlkZSguLi5hcmdzKSB7XG4gICAgICAgIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PSBcIm51bWJlclwiKSA/IFZlYy5kaXZpZGUodGhpcywgYXJnc1swXSkgOiBWZWMuZGl2aWRlKHRoaXMsIFV0aWwuZ2V0QXJncyhhcmdzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAkZGl2aWRlKC4uLmFyZ3MpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5kaXZpZGUoLi4uYXJncyk7IH1cbiAgICBtYWduaXR1ZGVTcSgpIHsgcmV0dXJuIFZlYy5kb3QodGhpcywgdGhpcyk7IH1cbiAgICBtYWduaXR1ZGUoKSB7IHJldHVybiBWZWMubWFnbml0dWRlKHRoaXMpOyB9XG4gICAgdW5pdChtYWduaXR1ZGUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgVmVjLnVuaXQodGhpcywgbWFnbml0dWRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICR1bml0KG1hZ25pdHVkZSA9IHVuZGVmaW5lZCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLnVuaXQobWFnbml0dWRlKTsgfVxuICAgIGRvdCguLi5hcmdzKSB7IHJldHVybiBWZWMuZG90KHRoaXMsIFV0aWwuZ2V0QXJncyhhcmdzKSk7IH1cbiAgICAkY3Jvc3MyRCguLi5hcmdzKSB7IHJldHVybiBWZWMuY3Jvc3MyRCh0aGlzLCBVdGlsLmdldEFyZ3MoYXJncykpOyB9XG4gICAgJGNyb3NzKC4uLmFyZ3MpIHsgcmV0dXJuIFZlYy5jcm9zcyh0aGlzLCBVdGlsLmdldEFyZ3MoYXJncykpOyB9XG4gICAgJHByb2plY3QoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy4kbXVsdGlwbHkodGhpcy5kb3QoLi4uYXJncykgLyB0aGlzLm1hZ25pdHVkZVNxKCkpO1xuICAgIH1cbiAgICBwcm9qZWN0U2NhbGFyKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG90KC4uLmFyZ3MpIC8gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICB9XG4gICAgYWJzKCkge1xuICAgICAgICBWZWMuYWJzKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgJGFicygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5hYnMoKTtcbiAgICB9XG4gICAgZmxvb3IoKSB7XG4gICAgICAgIFZlYy5mbG9vcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICRmbG9vcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5mbG9vcigpO1xuICAgIH1cbiAgICBjZWlsKCkge1xuICAgICAgICBWZWMuY2VpbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICRjZWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmNlaWwoKTtcbiAgICB9XG4gICAgcm91bmQoKSB7XG4gICAgICAgIFZlYy5yb3VuZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICRyb3VuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5yb3VuZCgpO1xuICAgIH1cbiAgICBtaW5WYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIFZlYy5taW4odGhpcyk7XG4gICAgfVxuICAgIG1heFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gVmVjLm1heCh0aGlzKTtcbiAgICB9XG4gICAgJG1pbiguLi5hcmdzKSB7XG4gICAgICAgIGxldCBwID0gVXRpbC5nZXRBcmdzKGFyZ3MpO1xuICAgICAgICBsZXQgbSA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHRoaXMubGVuZ3RoLCBwLmxlbmd0aCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbVtpXSA9IE1hdGgubWluKHRoaXNbaV0sIHBbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICAkbWF4KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHAgPSBVdGlsLmdldEFyZ3MoYXJncyk7XG4gICAgICAgIGxldCBtID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTWF0aC5taW4odGhpcy5sZW5ndGgsIHAubGVuZ3RoKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBtW2ldID0gTWF0aC5tYXgodGhpc1tpXSwgcFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIGFuZ2xlKGF4aXMgPSBDb25zdC54eSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzW2F4aXNbMV1dLCB0aGlzW2F4aXNbMF1dKTtcbiAgICB9XG4gICAgYW5nbGVCZXR3ZWVuKHAsIGF4aXMgPSBDb25zdC54eSkge1xuICAgICAgICByZXR1cm4gR2VvbS5ib3VuZFJhZGlhbih0aGlzLmFuZ2xlKGF4aXMpKSAtIEdlb20uYm91bmRSYWRpYW4ocC5hbmdsZShheGlzKSk7XG4gICAgfVxuICAgIHNjYWxlKHNjYWxlLCBhbmNob3IpIHtcbiAgICAgICAgR2VvbS5zY2FsZSh0aGlzLCBzY2FsZSwgYW5jaG9yIHx8IFB0Lm1ha2UodGhpcy5sZW5ndGgsIDApKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJvdGF0ZTJEKGFuZ2xlLCBhbmNob3IsIGF4aXMpIHtcbiAgICAgICAgR2VvbS5yb3RhdGUyRCh0aGlzLCBhbmdsZSwgYW5jaG9yIHx8IFB0Lm1ha2UodGhpcy5sZW5ndGgsIDApLCBheGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNoZWFyMkQoc2NhbGUsIGFuY2hvciwgYXhpcykge1xuICAgICAgICBHZW9tLnNoZWFyMkQodGhpcywgc2NhbGUsIGFuY2hvciB8fCBQdC5tYWtlKHRoaXMubGVuZ3RoLCAwKSwgYXhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWZsZWN0MkQobGluZSwgYXhpcykge1xuICAgICAgICBHZW9tLnJlZmxlY3QyRCh0aGlzLCBsaW5lLCBheGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFB0KCR7dGhpcy5qb2luKFwiLCBcIil9KWA7XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICB0b0dyb3VwKCkge1xuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKFB0Lm1ha2UodGhpcy5sZW5ndGgpLCB0aGlzLmNsb25lKCkpO1xuICAgIH1cbiAgICB0b0JvdW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJvdW5kKFB0Lm1ha2UodGhpcy5sZW5ndGgpLCB0aGlzLmNsb25lKCkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZDsgfVxuICAgIHNldCBpZChzKSB7IHRoaXMuX2lkID0gczsgfVxuICAgIGdldCBwMSgpIHsgcmV0dXJuIHRoaXNbMF07IH1cbiAgICBnZXQgcDIoKSB7IHJldHVybiB0aGlzWzFdOyB9XG4gICAgZ2V0IHAzKCkgeyByZXR1cm4gdGhpc1syXTsgfVxuICAgIGdldCBwNCgpIHsgcmV0dXJuIHRoaXNbM107IH1cbiAgICBnZXQgcTEoKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH1cbiAgICBnZXQgcTIoKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMl07IH1cbiAgICBnZXQgcTMoKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gM107IH1cbiAgICBnZXQgcTQoKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gNF07IH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBncm91cC5wdXNoKHRoaXNbaV0uY2xvbmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUFycmF5KGxpc3QpIHtcbiAgICAgICAgbGV0IGcgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgbGkgb2YgbGlzdCkge1xuICAgICAgICAgICAgbGV0IHAgPSAobGkgaW5zdGFuY2VvZiBQdCkgPyBsaSA6IG5ldyBQdChsaSk7XG4gICAgICAgICAgICBnLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tUHRBcnJheShsaXN0KSB7XG4gICAgICAgIHJldHVybiBHcm91cC5mcm9tKGxpc3QpO1xuICAgIH1cbiAgICBzcGxpdChjaHVua1NpemUsIHN0cmlkZSwgbG9vcEJhY2sgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3AgPSBVdGlsLnNwbGl0KHRoaXMsIGNodW5rU2l6ZSwgc3RyaWRlLCBsb29wQmFjayk7XG4gICAgICAgIHJldHVybiBzcDtcbiAgICB9XG4gICAgaW5zZXJ0KHB0cywgaW5kZXggPSAwKSB7XG4gICAgICAgIEdyb3VwLnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcywgW2luZGV4LCAwLCAuLi5wdHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbW92ZShpbmRleCA9IDAsIGNvdW50ID0gMSkge1xuICAgICAgICBsZXQgcGFyYW0gPSAoaW5kZXggPCAwKSA/IFtpbmRleCAqIC0xIC0gMSwgY291bnRdIDogW2luZGV4LCBjb3VudF07XG4gICAgICAgIHJldHVybiBHcm91cC5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMsIHBhcmFtKTtcbiAgICB9XG4gICAgc2VnbWVudHMocHRzX3Blcl9zZWdtZW50ID0gMiwgc3RyaWRlID0gMSwgbG9vcEJhY2sgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpdChwdHNfcGVyX3NlZ21lbnQsIHN0cmlkZSwgbG9vcEJhY2spO1xuICAgIH1cbiAgICBsaW5lcygpIHsgcmV0dXJuIHRoaXMuc2VnbWVudHMoMiwgMSk7IH1cbiAgICBjZW50cm9pZCgpIHtcbiAgICAgICAgcmV0dXJuIEdlb20uY2VudHJvaWQodGhpcyk7XG4gICAgfVxuICAgIGJvdW5kaW5nQm94KCkge1xuICAgICAgICByZXR1cm4gR2VvbS5ib3VuZGluZ0JveCh0aGlzKTtcbiAgICB9XG4gICAgYW5jaG9yVG8ocHRPckluZGV4ID0gMCkgeyBHZW9tLmFuY2hvcih0aGlzLCBwdE9ySW5kZXgsIFwidG9cIik7IH1cbiAgICBhbmNob3JGcm9tKHB0T3JJbmRleCA9IDApIHsgR2VvbS5hbmNob3IodGhpcywgcHRPckluZGV4LCBcImZyb21cIik7IH1cbiAgICBvcChmbikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZm4oc2VsZiwgLi4ucGFyYW1zKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb3BzKGZucykge1xuICAgICAgICBsZXQgX29wcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBfb3BzLnB1c2godGhpcy5vcChmbnNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX29wcztcbiAgICB9XG4gICAgaW50ZXJwb2xhdGUodCkge1xuICAgICAgICB0ID0gTnVtLmNsYW1wKHQsIDAsIDEpO1xuICAgICAgICBsZXQgY2h1bmsgPSB0aGlzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0YyA9IDEgLyAodGhpcy5sZW5ndGggLSAxKTtcbiAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IodCAvIHRjKTtcbiAgICAgICAgcmV0dXJuIEdlb20uaW50ZXJwb2xhdGUodGhpc1tpZHhdLCB0aGlzW01hdGgubWluKHRoaXMubGVuZ3RoIC0gMSwgaWR4ICsgMSldLCAodCAtIGlkeCAqIHRjKSAqIGNodW5rKTtcbiAgICB9XG4gICAgbW92ZUJ5KC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKC4uLmFyZ3MpO1xuICAgIH1cbiAgICBtb3ZlVG8oLi4uYXJncykge1xuICAgICAgICBsZXQgZCA9IG5ldyBQdChVdGlsLmdldEFyZ3MoYXJncykpLnN1YnRyYWN0KHRoaXNbMF0pO1xuICAgICAgICB0aGlzLm1vdmVCeShkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNjYWxlKHNjYWxlLCBhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIEdlb20uc2NhbGUodGhpc1tpXSwgc2NhbGUsIGFuY2hvciB8fCB0aGlzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcm90YXRlMkQoYW5nbGUsIGFuY2hvciwgYXhpcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgR2VvbS5yb3RhdGUyRCh0aGlzW2ldLCBhbmdsZSwgYW5jaG9yIHx8IHRoaXNbMF0sIGF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzaGVhcjJEKHNjYWxlLCBhbmNob3IsIGF4aXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIEdlb20uc2hlYXIyRCh0aGlzW2ldLCBzY2FsZSwgYW5jaG9yIHx8IHRoaXNbMF0sIGF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWZsZWN0MkQobGluZSwgYXhpcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgR2VvbS5yZWZsZWN0MkQodGhpc1tpXSwgbGluZSwgYXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNvcnRCeURpbWVuc2lvbihkaW0sIGRlc2MgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0KChhLCBiKSA9PiAoZGVzYykgPyBiW2RpbV0gLSBhW2RpbV0gOiBhW2RpbV0gLSBiW2RpbV0pO1xuICAgIH1cbiAgICBmb3JFYWNoUHQocHRGbiwgLi4uYXJncykge1xuICAgICAgICBpZiAoIXRoaXNbMF1bcHRGbl0pIHtcbiAgICAgICAgICAgIFV0aWwud2FybihgJHtwdEZufSBpcyBub3QgYSBmdW5jdGlvbiBvZiBQdGApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0gPSB0aGlzW2ldW3B0Rm5dKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGQoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JFYWNoUHQoXCJhZGRcIiwgLi4uYXJncyk7XG4gICAgfVxuICAgIHN1YnRyYWN0KC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yRWFjaFB0KFwic3VidHJhY3RcIiwgLi4uYXJncyk7XG4gICAgfVxuICAgIG11bHRpcGx5KC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yRWFjaFB0KFwibXVsdGlwbHlcIiwgLi4uYXJncyk7XG4gICAgfVxuICAgIGRpdmlkZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvckVhY2hQdChcImRpdmlkZVwiLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgJG1hdHJpeEFkZChnKSB7XG4gICAgICAgIHJldHVybiBNYXQuYWRkKHRoaXMsIGcpO1xuICAgIH1cbiAgICAkbWF0cml4TXVsdGlwbHkoZywgdHJhbnNwb3NlZCA9IGZhbHNlLCBlbGVtZW50d2lzZSA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBNYXQubXVsdGlwbHkodGhpcywgZywgdHJhbnNwb3NlZCwgZWxlbWVudHdpc2UpO1xuICAgIH1cbiAgICB6aXBTbGljZShpbmRleCwgZGVmYXVsdFZhbHVlID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIE1hdC56aXBTbGljZSh0aGlzLCBpbmRleCwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gICAgJHppcChkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQsIHVzZUxvbmdlc3QgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gTWF0LnppcCh0aGlzLCBkZWZhdWx0VmFsdWUsIHVzZUxvbmdlc3QpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiR3JvdXBbIFwiICsgdGhpcy5yZWR1Y2UoKHAsIGMpID0+IHAgKyBjLnRvU3RyaW5nKCkgKyBcIiBcIiwgXCJcIikgKyBcIiBdXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJvdW5kIGV4dGVuZHMgR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuX2NlbnRlciA9IG5ldyBQdCgpO1xuICAgICAgICB0aGlzLl9zaXplID0gbmV3IFB0KCk7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBuZXcgUHQoKTtcbiAgICAgICAgdGhpcy5fYm90dG9tUmlnaHQgPSBuZXcgUHQoKTtcbiAgICAgICAgdGhpcy5faW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbUJvdW5kaW5nUmVjdChyZWN0KSB7XG4gICAgICAgIGxldCBiID0gbmV3IEJvdW5kKG5ldyBQdChyZWN0LmxlZnQgfHwgMCwgcmVjdC50b3AgfHwgMCksIG5ldyBQdChyZWN0LnJpZ2h0IHx8IDAsIHJlY3QuYm90dG9tIHx8IDApKTtcbiAgICAgICAgaWYgKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpXG4gICAgICAgICAgICBiLnNpemUgPSBuZXcgUHQocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgc3RhdGljIGZyb21Hcm91cChnKSB7XG4gICAgICAgIGxldCBfZyA9IFV0aWwuaXRlclRvQXJyYXkoZyk7XG4gICAgICAgIGlmIChfZy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNyZWF0ZSBhIEJvdW5kIGZyb20gYSBncm91cCB0aGF0IGhhcyBsZXNzIHRoYW4gMiBQdFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZChfZ1swXSwgX2dbX2cubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5wMSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMucDEuY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucDEgJiYgdGhpcy5wMikge1xuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnAxO1xuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnAyO1xuICAgICAgICAgICAgdGhpcy50b3BMZWZ0ID0gYS4kbWluKGIpO1xuICAgICAgICAgICAgdGhpcy5fYm90dG9tUmlnaHQgPSBhLiRtYXgoYik7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XG4gICAgICAgICAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJvdW5kKHRoaXMuX3RvcExlZnQuY2xvbmUoKSwgdGhpcy5fYm90dG9tUmlnaHQuY2xvbmUoKSk7XG4gICAgfVxuICAgIF91cGRhdGVTaXplKCkge1xuICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fYm90dG9tUmlnaHQuJHN1YnRyYWN0KHRoaXMuX3RvcExlZnQpLmFicygpO1xuICAgICAgICB0aGlzLl91cGRhdGVDZW50ZXIoKTtcbiAgICB9XG4gICAgX3VwZGF0ZUNlbnRlcigpIHtcbiAgICAgICAgdGhpcy5fY2VudGVyID0gdGhpcy5fc2l6ZS4kbXVsdGlwbHkoMC41KS5hZGQodGhpcy5fdG9wTGVmdCk7XG4gICAgfVxuICAgIF91cGRhdGVQb3NGcm9tVG9wKCkge1xuICAgICAgICB0aGlzLl9ib3R0b21SaWdodCA9IHRoaXMuX3RvcExlZnQuJGFkZCh0aGlzLl9zaXplKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2VudGVyKCk7XG4gICAgfVxuICAgIF91cGRhdGVQb3NGcm9tQm90dG9tKCkge1xuICAgICAgICB0aGlzLl90b3BMZWZ0ID0gdGhpcy5fYm90dG9tUmlnaHQuJHN1YnRyYWN0KHRoaXMuX3NpemUpO1xuICAgICAgICB0aGlzLl91cGRhdGVDZW50ZXIoKTtcbiAgICB9XG4gICAgX3VwZGF0ZVBvc0Zyb21DZW50ZXIoKSB7XG4gICAgICAgIGxldCBoYWxmID0gdGhpcy5fc2l6ZS4kbXVsdGlwbHkoMC41KTtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IHRoaXMuX2NlbnRlci4kc3VidHJhY3QoaGFsZik7XG4gICAgICAgIHRoaXMuX2JvdHRvbVJpZ2h0ID0gdGhpcy5fY2VudGVyLiRhZGQoaGFsZik7XG4gICAgfVxuICAgIGdldCBzaXplKCkgeyByZXR1cm4gbmV3IFB0KHRoaXMuX3NpemUpOyB9XG4gICAgc2V0IHNpemUocCkge1xuICAgICAgICB0aGlzLl9zaXplID0gbmV3IFB0KHApO1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NGcm9tVG9wKCk7XG4gICAgfVxuICAgIGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUHQodGhpcy5fY2VudGVyKTsgfVxuICAgIHNldCBjZW50ZXIocCkge1xuICAgICAgICB0aGlzLl9jZW50ZXIgPSBuZXcgUHQocCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc0Zyb21DZW50ZXIoKTtcbiAgICB9XG4gICAgZ2V0IHRvcExlZnQoKSB7IHJldHVybiBuZXcgUHQodGhpcy5fdG9wTGVmdCk7IH1cbiAgICBzZXQgdG9wTGVmdChwKSB7XG4gICAgICAgIHRoaXMuX3RvcExlZnQgPSBuZXcgUHQocCk7XG4gICAgICAgIHRoaXNbMF0gPSB0aGlzLl90b3BMZWZ0O1xuICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGdldCBib3R0b21SaWdodCgpIHsgcmV0dXJuIG5ldyBQdCh0aGlzLl9ib3R0b21SaWdodCk7IH1cbiAgICBzZXQgYm90dG9tUmlnaHQocCkge1xuICAgICAgICB0aGlzLl9ib3R0b21SaWdodCA9IG5ldyBQdChwKTtcbiAgICAgICAgdGhpc1sxXSA9IHRoaXMuX2JvdHRvbVJpZ2h0O1xuICAgICAgICB0aGlzLl91cGRhdGVTaXplKCk7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHsgcmV0dXJuICh0aGlzLl9zaXplLmxlbmd0aCA+IDApID8gdGhpcy5fc2l6ZS54IDogMDsgfVxuICAgIHNldCB3aWR0aCh3KSB7XG4gICAgICAgIHRoaXMuX3NpemUueCA9IHc7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc0Zyb21Ub3AoKTtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuICh0aGlzLl9zaXplLmxlbmd0aCA+IDEpID8gdGhpcy5fc2l6ZS55IDogMDsgfVxuICAgIHNldCBoZWlnaHQoaCkge1xuICAgICAgICB0aGlzLl9zaXplLnkgPSBoO1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NGcm9tVG9wKCk7XG4gICAgfVxuICAgIGdldCBkZXB0aCgpIHsgcmV0dXJuICh0aGlzLl9zaXplLmxlbmd0aCA+IDIpID8gdGhpcy5fc2l6ZS56IDogMDsgfVxuICAgIHNldCBkZXB0aChkKSB7XG4gICAgICAgIHRoaXMuX3NpemUueiA9IGQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc0Zyb21Ub3AoKTtcbiAgICB9XG4gICAgZ2V0IHgoKSB7IHJldHVybiB0aGlzLnRvcExlZnQueDsgfVxuICAgIGdldCB5KCkgeyByZXR1cm4gdGhpcy50b3BMZWZ0Lnk7IH1cbiAgICBnZXQgeigpIHsgcmV0dXJuIHRoaXMudG9wTGVmdC56OyB9XG4gICAgZ2V0IGluaXRlZCgpIHsgcmV0dXJuIHRoaXMuX2luaXRlZDsgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fdG9wTGVmdCA9IHRoaXNbMF07XG4gICAgICAgIHRoaXMuX2JvdHRvbVJpZ2h0ID0gdGhpc1sxXTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU2l6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QdC5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IFB0LCBCb3VuZCB9IGZyb20gXCIuL1B0XCI7XG5pbXBvcnQgeyBVSVBvaW50ZXJBY3Rpb25zIGFzIFVJQSB9IGZyb20gXCIuL1VJXCI7XG5leHBvcnQgY2xhc3MgU3BhY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gXCJzcGFjZVwiO1xuICAgICAgICB0aGlzLmJvdW5kID0gbmV3IEJvdW5kKCk7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB7IHByZXY6IDAsIGRpZmY6IDAsIGVuZDogLTEgfTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0ge307XG4gICAgICAgIHRoaXMucGxheWVyQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9hbmltSUQgPSAtMTtcbiAgICAgICAgdGhpcy5fcGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVmcmVzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IG5ldyBQdCgpO1xuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVmcmVzaChiKSB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2ggPSBiO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkKHApIHtcbiAgICAgICAgbGV0IHBsYXllciA9ICh0eXBlb2YgcCA9PSBcImZ1bmN0aW9uXCIpID8geyBhbmltYXRlOiBwIH0gOiBwO1xuICAgICAgICBsZXQgayA9IHRoaXMucGxheWVyQ291bnQrKztcbiAgICAgICAgbGV0IHBpZCA9IHRoaXMuaWQgKyBrO1xuICAgICAgICB0aGlzLnBsYXllcnNbcGlkXSA9IHBsYXllcjtcbiAgICAgICAgcGxheWVyLmFuaW1hdGVJRCA9IHBpZDtcbiAgICAgICAgaWYgKHBsYXllci5yZXNpemUgJiYgdGhpcy5ib3VuZC5pbml0ZWQpXG4gICAgICAgICAgICBwbGF5ZXIucmVzaXplKHRoaXMuYm91bmQpO1xuICAgICAgICBpZiAodGhpcy5fcmVmcmVzaCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZW1vdmUocGxheWVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsYXllcnNbcGxheWVyLmFuaW1hdGVJRF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcGxheSh0aW1lID0gMCkge1xuICAgICAgICBpZiAodGltZSA9PT0gMCAmJiB0aGlzLl9hbmltSUQgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW5pbUlEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucGxheS5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKHRoaXMuX3BhdXNlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHRoaXMuX3RpbWUuZGlmZiA9IHRpbWUgLSB0aGlzLl90aW1lLnByZXY7XG4gICAgICAgIHRoaXMuX3RpbWUucHJldiA9IHRpbWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlJdGVtcyh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltSUQpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbUlEID0gLTE7XG4gICAgICAgICAgICB0aGlzLl9wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlcGxheSgpIHtcbiAgICAgICAgdGhpcy5fdGltZS5lbmQgPSAtMTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICAgIHBsYXlJdGVtcyh0aW1lKSB7XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fcmVmcmVzaClcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVhZHkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyc1trXS5hbmltYXRlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNba10uYW5pbWF0ZSh0aW1lLCB0aGlzLl90aW1lLmRpZmYsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90aW1lLmVuZCA+PSAwICYmIHRpbWUgPiB0aGlzLl90aW1lLmVuZCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbUlEKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1JRCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlKHRvZ2dsZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX3BhdXNlID0gKHRvZ2dsZSkgPyAhdGhpcy5fcGF1c2UgOiB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLl9wYXVzZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RvcCh0ID0gMCkge1xuICAgICAgICB0aGlzLl90aW1lLmVuZCA9IHQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwbGF5T25jZShkdXJhdGlvbiA9IDUwMDApIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RvcChkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyRnVuYylcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckZ1bmMoY29udGV4dCwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXQgY3VzdG9tUmVuZGVyaW5nKGYpIHsgdGhpcy5fcmVuZGVyRnVuYyA9IGY7IH1cbiAgICBnZXQgY3VzdG9tUmVuZGVyaW5nKCkgeyByZXR1cm4gdGhpcy5fcmVuZGVyRnVuYzsgfVxuICAgIGdldCBpc1BsYXlpbmcoKSB7IHJldHVybiB0aGlzLl9wbGF5aW5nOyB9XG4gICAgZ2V0IG91dGVyQm91bmQoKSB7IHJldHVybiB0aGlzLmJvdW5kLmNsb25lKCk7IH1cbiAgICBnZXQgaW5uZXJCb3VuZCgpIHsgcmV0dXJuIG5ldyBCb3VuZChQdC5tYWtlKHRoaXMuc2l6ZS5sZW5ndGgsIDApLCB0aGlzLnNpemUuY2xvbmUoKSk7IH1cbiAgICBnZXQgc2l6ZSgpIHsgcmV0dXJuIHRoaXMuYm91bmQuc2l6ZS5jbG9uZSgpOyB9XG4gICAgZ2V0IGNlbnRlcigpIHsgcmV0dXJuIHRoaXMuc2l6ZS5kaXZpZGUoMik7IH1cbiAgICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLmJvdW5kLndpZHRoOyB9XG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuYm91bmQuaGVpZ2h0OyB9XG59XG5leHBvcnQgY2xhc3MgTXVsdGlUb3VjaFNwYWNlIGV4dGVuZHMgU3BhY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGFzTW91c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGFzVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHBvaW50ZXIoKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5fcG9pbnRlci5jbG9uZSgpO1xuICAgICAgICBwLmlkID0gdGhpcy5fcG9pbnRlci5pZDtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGJpbmRDYW52YXMoZXZ0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgdW5iaW5kQ2FudmFzKGV2dCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGJpbmRNb3VzZShfYmluZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKF9iaW5kKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRDYW52YXMoXCJtb3VzZWRvd25cIiwgdGhpcy5fbW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5iaW5kQ2FudmFzKFwibW91c2V1cFwiLCB0aGlzLl9tb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5iaW5kQ2FudmFzKFwibW91c2VvdmVyXCIsIHRoaXMuX21vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuYmluZENhbnZhcyhcIm1vdXNlb3V0XCIsIHRoaXMuX21vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5iaW5kQ2FudmFzKFwibW91c2Vtb3ZlXCIsIHRoaXMuX21vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuYmluZENhbnZhcyhcImNvbnRleHRtZW51XCIsIHRoaXMuX2NvbnRleHRNZW51LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5faGFzTW91c2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRDYW52YXMoXCJtb3VzZWRvd25cIiwgdGhpcy5fbW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy51bmJpbmRDYW52YXMoXCJtb3VzZXVwXCIsIHRoaXMuX21vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnVuYmluZENhbnZhcyhcIm1vdXNlb3ZlclwiLCB0aGlzLl9tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnVuYmluZENhbnZhcyhcIm1vdXNlb3V0XCIsIHRoaXMuX21vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy51bmJpbmRDYW52YXMoXCJtb3VzZW1vdmVcIiwgdGhpcy5fbW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy51bmJpbmRDYW52YXMoXCJjb250ZXh0bWVudVwiLCB0aGlzLl9jb250ZXh0TWVudS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc01vdXNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJpbmRUb3VjaChfYmluZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKF9iaW5kKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRDYW52YXMoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RvdWNoU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRDYW52YXMoXCJ0b3VjaGVuZFwiLCB0aGlzLl9tb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5iaW5kQ2FudmFzKFwidG91Y2htb3ZlXCIsIHRoaXMuX3RvdWNoTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuYmluZENhbnZhcyhcInRvdWNoY2FuY2VsXCIsIHRoaXMuX21vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5faGFzVG91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRDYW52YXMoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX3RvdWNoU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnVuYmluZENhbnZhcyhcInRvdWNoZW5kXCIsIHRoaXMuX21vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnVuYmluZENhbnZhcyhcInRvdWNobW92ZVwiLCB0aGlzLl90b3VjaE1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnVuYmluZENhbnZhcyhcInRvdWNoY2FuY2VsXCIsIHRoaXMuX21vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5faGFzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG91Y2hlc1RvUG9pbnRzKGV2dCwgd2hpY2ggPSBcInRvdWNoZXNcIikge1xuICAgICAgICBpZiAoIWV2dCB8fCAhZXZ0W3doaWNoXSlcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgbGV0IHRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZ0W3doaWNoXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHQgPSBldnRbd2hpY2hdLml0ZW0oaSk7XG4gICAgICAgICAgICB0cy5wdXNoKG5ldyBQdCh0LnBhZ2VYIC0gdGhpcy5ib3VuZC50b3BMZWZ0LngsIHQucGFnZVkgLSB0aGlzLmJvdW5kLnRvcExlZnQueSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cztcbiAgICB9XG4gICAgX21vdXNlQWN0aW9uKHR5cGUsIGV2dCkge1xuICAgICAgICBsZXQgcHggPSAwLCBweSA9IDA7XG4gICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLnBsYXllcnNba107XG4gICAgICAgICAgICAgICAgICAgIHB4ID0gZXZ0LnBhZ2VYIC0gdGhpcy5vdXRlckJvdW5kLng7XG4gICAgICAgICAgICAgICAgICAgIHB5ID0gZXZ0LnBhZ2VZIC0gdGhpcy5vdXRlckJvdW5kLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmFjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuYWN0aW9uKHR5cGUsIHB4LCBweSwgZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLnBsYXllcnNba107XG4gICAgICAgICAgICAgICAgICAgIGxldCBjID0gZXZ0LmNoYW5nZWRUb3VjaGVzICYmIGV2dC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBldnQuY2hhbmdlZFRvdWNoZXMuaXRlbSgwKTtcbiAgICAgICAgICAgICAgICAgICAgcHggPSAoYykgPyB0b3VjaC5wYWdlWCAtIHRoaXMub3V0ZXJCb3VuZC54IDogMDtcbiAgICAgICAgICAgICAgICAgICAgcHkgPSAoYykgPyB0b3VjaC5wYWdlWSAtIHRoaXMub3V0ZXJCb3VuZC55IDogMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdi5hY3Rpb24odHlwZSwgcHgsIHB5LCBldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlci50byhweCwgcHkpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlci5pZCA9IHR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX21vdXNlRG93bihldnQpIHtcbiAgICAgICAgdGhpcy5fbW91c2VBY3Rpb24oVUlBLmRvd24sIGV2dCk7XG4gICAgICAgIHRoaXMuX3ByZXNzZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9tb3VzZVVwKGV2dCkge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ2dlZCkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2VBY3Rpb24oVUlBLmRyb3AsIGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZUFjdGlvbihVSUEudXAsIGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX21vdXNlTW92ZShldnQpIHtcbiAgICAgICAgdGhpcy5fbW91c2VBY3Rpb24oVUlBLm1vdmUsIGV2dCk7XG4gICAgICAgIGlmICh0aGlzLl9wcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlQWN0aW9uKFVJQS5kcmFnLCBldnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX21vdXNlT3ZlcihldnQpIHtcbiAgICAgICAgdGhpcy5fbW91c2VBY3Rpb24oVUlBLm92ZXIsIGV2dCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX21vdXNlT3V0KGV2dCkge1xuICAgICAgICB0aGlzLl9tb3VzZUFjdGlvbihVSUEub3V0LCBldnQpO1xuICAgICAgICBpZiAodGhpcy5fZHJhZ2dlZClcbiAgICAgICAgICAgIHRoaXMuX21vdXNlQWN0aW9uKFVJQS5kcm9wLCBldnQpO1xuICAgICAgICB0aGlzLl9kcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2NvbnRleHRNZW51KGV2dCkge1xuICAgICAgICB0aGlzLl9tb3VzZUFjdGlvbihVSUEuY29udGV4dG1lbnUsIGV2dCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3RvdWNoTW92ZShldnQpIHtcbiAgICAgICAgdGhpcy5fbW91c2VNb3ZlKGV2dCk7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF90b3VjaFN0YXJ0KGV2dCkge1xuICAgICAgICB0aGlzLl9tb3VzZURvd24oZXZ0KTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TcGFjZS5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IFZpc3VhbEZvcm0sIEZvbnQgfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBHZW9tIH0gZnJvbSAnLi9OdW0nO1xuaW1wb3J0IHsgQ29uc3QsIFV0aWwgfSBmcm9tICcuL1V0aWwnO1xuaW1wb3J0IHsgUHQsIEdyb3VwIH0gZnJvbSAnLi9QdCc7XG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tIFwiLi9PcFwiO1xuaW1wb3J0IHsgRE9NU3BhY2UgfSBmcm9tIFwiLi9Eb21cIjtcbmV4cG9ydCBjbGFzcyBTVkdTcGFjZSBleHRlbmRzIERPTVNwYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtLCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlcihlbGVtLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX2JnY29sb3IgPSBcIiM5OTlcIjtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9IFwic3ZnXCIpIHtcbiAgICAgICAgICAgIGxldCBzID0gU1ZHU3BhY2Uuc3ZnRWxlbWVudCh0aGlzLl9jYW52YXMsIFwic3ZnXCIsIGAke3RoaXMuaWR9X3N2Z2ApO1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fY2FudmFzO1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGb3JtKCkgeyByZXR1cm4gbmV3IFNWR0Zvcm0odGhpcyk7IH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcbiAgICB9XG4gICAgcmVzaXplKGIsIGV2dCkge1xuICAgICAgICBzdXBlci5yZXNpemUoYiwgZXZ0KTtcbiAgICAgICAgU1ZHU3BhY2Uuc2V0QXR0cih0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIFwidmlld0JveFwiOiBgMCAwICR7dGhpcy5ib3VuZC53aWR0aH0gJHt0aGlzLmJvdW5kLmhlaWdodH1gLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiBgJHt0aGlzLmJvdW5kLndpZHRofWAsXG4gICAgICAgICAgICBcImhlaWdodFwiOiBgJHt0aGlzLmJvdW5kLmhlaWdodH1gLFxuICAgICAgICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjFcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBzdmdFbGVtZW50KHBhcmVudCwgbmFtZSwgaWQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC5hcHBlbmRDaGlsZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInBhcmVudCBpcyBub3QgYSB2YWxpZCBET00gZWxlbWVudFwiKTtcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbmFtZSk7XG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgcmVtb3ZlKHBsYXllcikge1xuICAgICAgICBsZXQgdGVtcCA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgU1ZHRm9ybS5zY29wZUlEKHBsYXllcikpO1xuICAgICAgICB0ZW1wLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW1vdmUocGxheWVyKTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbW92ZUFsbCgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdGb3JtIGV4dGVuZHMgVmlzdWFsRm9ybSB7XG4gICAgY29uc3RydWN0b3Ioc3BhY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc3R5bGUgPSB7XG4gICAgICAgICAgICBcImZpbGxlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdHJva2VkXCI6IHRydWUsXG4gICAgICAgICAgICBcImZpbGxcIjogXCIjZjAzXCIsXG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDEsXG4gICAgICAgICAgICBcInN0cm9rZS1saW5lam9pblwiOiBcImJldmVsXCIsXG4gICAgICAgICAgICBcInN0cm9rZS1saW5lY2FwXCI6IFwic3FhdXJlXCIsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jdHggPSB7XG4gICAgICAgICAgICBncm91cDogbnVsbCxcbiAgICAgICAgICAgIGdyb3VwSUQ6IFwicHRzXCIsXG4gICAgICAgICAgICBncm91cENvdW50OiAwLFxuICAgICAgICAgICAgY3VycmVudElEOiBcInB0czBcIixcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzczogXCJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3BhY2UgPSBzcGFjZTtcbiAgICAgICAgdGhpcy5fc3BhY2UuYWRkKHsgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZ3JvdXAgPSB0aGlzLl9zcGFjZS5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5ncm91cElEID0gXCJwdHNfc3ZnX1wiICsgKFNWR0Zvcm0uZ3JvdXBJRCsrKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdHlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0IHNwYWNlKCkgeyByZXR1cm4gdGhpcy5fc3BhY2U7IH1cbiAgICBzdHlsZVRvKGssIHYpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N0eC5zdHlsZVtrXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2t9IHN0eWxlIHByb3BlcnR5IGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgdGhpcy5fY3R4LnN0eWxlW2tdID0gdjtcbiAgICB9XG4gICAgYWxwaGEoYSkge1xuICAgICAgICB0aGlzLnN0eWxlVG8oXCJvcGFjaXR5XCIsIGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbChjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYyA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwiZmlsbGVkXCIsIGMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwiZmlsbGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwiZmlsbFwiLCBjKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3Ryb2tlKGMsIHdpZHRoLCBsaW5lam9pbiwgbGluZWNhcCkge1xuICAgICAgICBpZiAodHlwZW9mIGMgPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcInN0cm9rZWRcIiwgYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlVG8oXCJzdHJva2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwic3Ryb2tlXCIsIGMpO1xuICAgICAgICAgICAgaWYgKHdpZHRoKVxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcInN0cm9rZS13aWR0aFwiLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAobGluZWpvaW4pXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVRvKFwic3Ryb2tlLWxpbmVqb2luXCIsIGxpbmVqb2luKTtcbiAgICAgICAgICAgIGlmIChsaW5lY2FwKVxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVUbyhcInN0cm9rZS1saW5lY2FwXCIsIGxpbmVjYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbHMoYykge1xuICAgICAgICBpZiAodHlwZW9mIGMgPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0eC5jdXJyZW50Q2xhc3MgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3R4LmN1cnJlbnRDbGFzcyA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZvbnQoc2l6ZU9yRm9udCwgd2VpZ2h0LCBzdHlsZSwgbGluZUhlaWdodCwgZmFtaWx5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZU9yRm9udCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLl9mb250LnNpemUgPSBzaXplT3JGb250O1xuICAgICAgICAgICAgaWYgKGZhbWlseSlcbiAgICAgICAgICAgICAgICB0aGlzLl9mb250LmZhY2UgPSBmYW1pbHk7XG4gICAgICAgICAgICBpZiAod2VpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbnQud2VpZ2h0ID0gd2VpZ2h0O1xuICAgICAgICAgICAgaWYgKHN0eWxlKVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbnQuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgICAgIGlmIChsaW5lSGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvbnQubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb250ID0gc2l6ZU9yRm9udDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdHguc3R5bGVbJ2ZvbnQnXSA9IHRoaXMuX2ZvbnQudmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fY3R4LnN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3R5bGUpO1xuICAgICAgICB0aGlzLl9mb250ID0gbmV3IEZvbnQoMTAsIFwic2Fucy1zZXJpZlwiKTtcbiAgICAgICAgdGhpcy5fY3R4LnN0eWxlWydmb250J10gPSB0aGlzLl9mb250LnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdXBkYXRlU2NvcGUoZ3JvdXBfaWQsIGdyb3VwKSB7XG4gICAgICAgIHRoaXMuX2N0eC5ncm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLl9jdHguZ3JvdXBJRCA9IGdyb3VwX2lkO1xuICAgICAgICB0aGlzLl9jdHguZ3JvdXBDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubmV4dElEKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdHg7XG4gICAgfVxuICAgIHNjb3BlKGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uYW5pbWF0ZUlEID09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpdGVtIG5vdCBkZWZpbmVkIG9yIG5vdCB5ZXQgYWRkZWQgdG8gU3BhY2VcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVNjb3BlKFNWR0Zvcm0uc2NvcGVJRChpdGVtKSwgdGhpcy5zcGFjZS5lbGVtZW50KTtcbiAgICB9XG4gICAgbmV4dElEKCkge1xuICAgICAgICB0aGlzLl9jdHguZ3JvdXBDb3VudCsrO1xuICAgICAgICB0aGlzLl9jdHguY3VycmVudElEID0gYCR7dGhpcy5fY3R4Lmdyb3VwSUR9LSR7dGhpcy5fY3R4Lmdyb3VwQ291bnR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N0eC5jdXJyZW50SUQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJRChjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5jdXJyZW50SUQgfHwgYHAtJHtTVkdGb3JtLmRvbUlEKyt9YDtcbiAgICB9XG4gICAgc3RhdGljIHNjb3BlSUQoaXRlbSkge1xuICAgICAgICByZXR1cm4gYGl0ZW0tJHtpdGVtLmFuaW1hdGVJRH1gO1xuICAgIH1cbiAgICBzdGF0aWMgc3R5bGUoZWxlbSwgc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdCA9IFtdO1xuICAgICAgICBpZiAoIXN0eWxlc1tcImZpbGxlZFwiXSlcbiAgICAgICAgICAgIHN0LnB1c2goXCJmaWxsOiBub25lXCIpO1xuICAgICAgICBpZiAoIXN0eWxlc1tcInN0cm9rZWRcIl0pXG4gICAgICAgICAgICBzdC5wdXNoKFwic3Ryb2tlOiBub25lXCIpO1xuICAgICAgICBmb3IgKGxldCBrIGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrKSAmJiBrICE9IFwiZmlsbGVkXCIgJiYgayAhPSBcInN0cm9rZWRcIikge1xuICAgICAgICAgICAgICAgIGxldCB2ID0gc3R5bGVzW2tdO1xuICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3R5bGVzW1wiZmlsbGVkXCJdICYmIGsuaW5kZXhPZignZmlsbCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghc3R5bGVzW1wic3Ryb2tlZFwiXSAmJiBrLmluZGV4T2YoJ3N0cm9rZScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0LnB1c2goYCR7a306ICR7dn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRE9NU3BhY2Uuc2V0QXR0cihlbGVtLCB7IHN0eWxlOiBzdC5qb2luKFwiO1wiKSB9KTtcbiAgICB9XG4gICAgc3RhdGljIHBvaW50KGN0eCwgcHQsIHJhZGl1cyA9IDUsIHNoYXBlID0gXCJzcXVhcmVcIikge1xuICAgICAgICBpZiAoc2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBTVkdGb3JtLmNpcmNsZShjdHgsIHB0LCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNWR0Zvcm0uc3F1YXJlKGN0eCwgcHQsIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcG9pbnQocHQsIHJhZGl1cyA9IDUsIHNoYXBlID0gXCJzcXVhcmVcIikge1xuICAgICAgICB0aGlzLm5leHRJRCgpO1xuICAgICAgICBTVkdGb3JtLnBvaW50KHRoaXMuX2N0eCwgcHQsIHJhZGl1cywgc2hhcGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGNpcmNsZShjdHgsIHB0LCByYWRpdXMgPSAxMCkge1xuICAgICAgICBsZXQgZWxlbSA9IFNWR1NwYWNlLnN2Z0VsZW1lbnQoY3R4Lmdyb3VwLCBcImNpcmNsZVwiLCBTVkdGb3JtLmdldElEKGN0eCkpO1xuICAgICAgICBET01TcGFjZS5zZXRBdHRyKGVsZW0sIHtcbiAgICAgICAgICAgIGN4OiBwdFswXSxcbiAgICAgICAgICAgIGN5OiBwdFsxXSxcbiAgICAgICAgICAgIHI6IHJhZGl1cyxcbiAgICAgICAgICAgICdjbGFzcyc6IGBwdHMtc3ZnZm9ybSBwdHMtY2lyY2xlICR7Y3R4LmN1cnJlbnRDbGFzc31gLFxuICAgICAgICB9KTtcbiAgICAgICAgU1ZHRm9ybS5zdHlsZShlbGVtLCBjdHguc3R5bGUpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgY2lyY2xlKHB0cykge1xuICAgICAgICB0aGlzLm5leHRJRCgpO1xuICAgICAgICBsZXQgcCA9IFV0aWwuaXRlclRvQXJyYXkocHRzKTtcbiAgICAgICAgU1ZHRm9ybS5jaXJjbGUodGhpcy5fY3R4LCBwWzBdLCBwWzFdWzBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBhcmMoY3R4LCBwdCwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgY2MpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBTVkdTcGFjZS5zdmdFbGVtZW50KGN0eC5ncm91cCwgXCJwYXRoXCIsIFNWR0Zvcm0uZ2V0SUQoY3R4KSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IFB0KHB0KS50b0FuZ2xlKHN0YXJ0QW5nbGUsIHJhZGl1cywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ldyBQdChwdCkudG9BbmdsZShlbmRBbmdsZSwgcmFkaXVzLCB0cnVlKTtcbiAgICAgICAgY29uc3QgZGlmZiA9IEdlb20uYm91bmRBbmdsZShlbmRBbmdsZSkgLSBHZW9tLmJvdW5kQW5nbGUoc3RhcnRBbmdsZSk7XG4gICAgICAgIGxldCBsYXJnZUFyYyA9IChkaWZmID4gQ29uc3QucGkpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAoY2MpXG4gICAgICAgICAgICBsYXJnZUFyYyA9ICFsYXJnZUFyYztcbiAgICAgICAgY29uc3Qgc3dlZXAgPSAoY2MpID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZCA9IGBNICR7c3RhcnRbMF19ICR7c3RhcnRbMV19IEEgJHtyYWRpdXN9ICR7cmFkaXVzfSAwICR7bGFyZ2VBcmMgPyBcIjFcIiA6IFwiMFwifSAke3N3ZWVwfSAke2VuZFswXX0gJHtlbmRbMV19YDtcbiAgICAgICAgRE9NU3BhY2Uuc2V0QXR0cihlbGVtLCB7XG4gICAgICAgICAgICBkOiBkLFxuICAgICAgICAgICAgJ2NsYXNzJzogYHB0cy1zdmdmb3JtIHB0cy1hcmMgJHtjdHguY3VycmVudENsYXNzfWAsXG4gICAgICAgIH0pO1xuICAgICAgICBTVkdGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBhcmMocHQsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjKSB7XG4gICAgICAgIHRoaXMubmV4dElEKCk7XG4gICAgICAgIFNWR0Zvcm0uYXJjKHRoaXMuX2N0eCwgcHQsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGNjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBzcXVhcmUoY3R4LCBwdCwgaGFsZnNpemUpIHtcbiAgICAgICAgbGV0IGVsZW0gPSBTVkdTcGFjZS5zdmdFbGVtZW50KGN0eC5ncm91cCwgXCJyZWN0XCIsIFNWR0Zvcm0uZ2V0SUQoY3R4KSk7XG4gICAgICAgIERPTVNwYWNlLnNldEF0dHIoZWxlbSwge1xuICAgICAgICAgICAgeDogcHRbMF0gLSBoYWxmc2l6ZSxcbiAgICAgICAgICAgIHk6IHB0WzFdIC0gaGFsZnNpemUsXG4gICAgICAgICAgICB3aWR0aDogaGFsZnNpemUgKiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiBoYWxmc2l6ZSAqIDIsXG4gICAgICAgICAgICAnY2xhc3MnOiBgcHRzLXN2Z2Zvcm0gcHRzLXNxdWFyZSAke2N0eC5jdXJyZW50Q2xhc3N9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIFNWR0Zvcm0uc3R5bGUoZWxlbSwgY3R4LnN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHNxdWFyZShwdCwgaGFsZnNpemUpIHtcbiAgICAgICAgdGhpcy5uZXh0SUQoKTtcbiAgICAgICAgU1ZHRm9ybS5zcXVhcmUodGhpcy5fY3R4LCBwdCwgaGFsZnNpemUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIGxpbmUoY3R4LCBwdHMpIHtcbiAgICAgICAgbGV0IHBvaW50cyA9IFNWR0Zvcm0ucG9pbnRzU3RyaW5nKHB0cyk7XG4gICAgICAgIGlmIChwb2ludHMuY291bnQgPCAyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAocG9pbnRzLmNvdW50ID4gMilcbiAgICAgICAgICAgIHJldHVybiBTVkdGb3JtLl9wb2x5KGN0eCwgcG9pbnRzLnN0cmluZywgZmFsc2UpO1xuICAgICAgICBsZXQgZWxlbSA9IFNWR1NwYWNlLnN2Z0VsZW1lbnQoY3R4Lmdyb3VwLCBcImxpbmVcIiwgU1ZHRm9ybS5nZXRJRChjdHgpKTtcbiAgICAgICAgbGV0IHAgPSBVdGlsLml0ZXJUb0FycmF5KHB0cyk7XG4gICAgICAgIERPTVNwYWNlLnNldEF0dHIoZWxlbSwge1xuICAgICAgICAgICAgeDE6IHBbMF1bMF0sXG4gICAgICAgICAgICB5MTogcFswXVsxXSxcbiAgICAgICAgICAgIHgyOiBwWzFdWzBdLFxuICAgICAgICAgICAgeTI6IHBbMV1bMV0sXG4gICAgICAgICAgICAnY2xhc3MnOiBgcHRzLXN2Z2Zvcm0gcHRzLWxpbmUgJHtjdHguY3VycmVudENsYXNzfWAsXG4gICAgICAgIH0pO1xuICAgICAgICBTVkdGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBsaW5lKHB0cykge1xuICAgICAgICB0aGlzLm5leHRJRCgpO1xuICAgICAgICBTVkdGb3JtLmxpbmUodGhpcy5fY3R4LCBwdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIF9wb2x5KGN0eCwgcG9pbnRzLCBjbG9zZVBhdGggPSB0cnVlKSB7XG4gICAgICAgIGxldCBlbGVtID0gU1ZHU3BhY2Uuc3ZnRWxlbWVudChjdHguZ3JvdXAsICgoY2xvc2VQYXRoKSA/IFwicG9seWdvblwiIDogXCJwb2x5bGluZVwiKSwgU1ZHRm9ybS5nZXRJRChjdHgpKTtcbiAgICAgICAgRE9NU3BhY2Uuc2V0QXR0cihlbGVtLCB7XG4gICAgICAgICAgICBwb2ludHM6IHBvaW50cyxcbiAgICAgICAgICAgICdjbGFzcyc6IGBwdHMtc3ZnZm9ybSBwdHMtcG9seWdvbiAke2N0eC5jdXJyZW50Q2xhc3N9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIFNWR0Zvcm0uc3R5bGUoZWxlbSwgY3R4LnN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHN0YXRpYyBwb2ludHNTdHJpbmcocHRzKSB7XG4gICAgICAgIGxldCBwb2ludHMgPSBcIlwiO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHB0cykge1xuICAgICAgICAgICAgcG9pbnRzICs9IGAke3BbMF19LCR7cFsxXX0gYDtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RyaW5nOiBwb2ludHMsIGNvdW50OiBjb3VudCB9O1xuICAgIH1cbiAgICBzdGF0aWMgcG9seWdvbihjdHgsIHB0cykge1xuICAgICAgICBsZXQgcG9pbnRzID0gU1ZHRm9ybS5wb2ludHNTdHJpbmcocHRzKTtcbiAgICAgICAgcmV0dXJuIFNWR0Zvcm0uX3BvbHkoY3R4LCBwb2ludHMuc3RyaW5nLCB0cnVlKTtcbiAgICB9XG4gICAgcG9seWdvbihwdHMpIHtcbiAgICAgICAgdGhpcy5uZXh0SUQoKTtcbiAgICAgICAgU1ZHRm9ybS5wb2x5Z29uKHRoaXMuX2N0eCwgcHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyByZWN0KGN0eCwgcHRzKSB7XG4gICAgICAgIGlmICghVXRpbC5hcnJheUNoZWNrKHB0cykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBlbGVtID0gU1ZHU3BhY2Uuc3ZnRWxlbWVudChjdHguZ3JvdXAsIFwicmVjdFwiLCBTVkdGb3JtLmdldElEKGN0eCkpO1xuICAgICAgICBsZXQgYm91bmQgPSBHcm91cC5mcm9tQXJyYXkocHRzKS5ib3VuZGluZ0JveCgpO1xuICAgICAgICBsZXQgc2l6ZSA9IFJlY3RhbmdsZS5zaXplKGJvdW5kKTtcbiAgICAgICAgRE9NU3BhY2Uuc2V0QXR0cihlbGVtLCB7XG4gICAgICAgICAgICB4OiBib3VuZFswXVswXSxcbiAgICAgICAgICAgIHk6IGJvdW5kWzBdWzFdLFxuICAgICAgICAgICAgd2lkdGg6IHNpemVbMF0sXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVbMV0sXG4gICAgICAgICAgICAnY2xhc3MnOiBgcHRzLXN2Z2Zvcm0gcHRzLXJlY3QgJHtjdHguY3VycmVudENsYXNzfWAsXG4gICAgICAgIH0pO1xuICAgICAgICBTVkdGb3JtLnN0eWxlKGVsZW0sIGN0eC5zdHlsZSk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICByZWN0KHB0cykge1xuICAgICAgICB0aGlzLm5leHRJRCgpO1xuICAgICAgICBTVkdGb3JtLnJlY3QodGhpcy5fY3R4LCBwdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIHRleHQoY3R4LCBwdCwgdHh0KSB7XG4gICAgICAgIGxldCBlbGVtID0gU1ZHU3BhY2Uuc3ZnRWxlbWVudChjdHguZ3JvdXAsIFwidGV4dFwiLCBTVkdGb3JtLmdldElEKGN0eCkpO1xuICAgICAgICBET01TcGFjZS5zZXRBdHRyKGVsZW0sIHtcbiAgICAgICAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIsXG4gICAgICAgICAgICB4OiBwdFswXSxcbiAgICAgICAgICAgIHk6IHB0WzFdLFxuICAgICAgICAgICAgZHg6IDAsIGR5OiAwLFxuICAgICAgICAgICAgJ2NsYXNzJzogYHB0cy1zdmdmb3JtIHB0cy10ZXh0ICR7Y3R4LmN1cnJlbnRDbGFzc31gLFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IHR4dDtcbiAgICAgICAgU1ZHRm9ybS5zdHlsZShlbGVtLCBjdHguc3R5bGUpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgdGV4dChwdCwgdHh0KSB7XG4gICAgICAgIHRoaXMubmV4dElEKCk7XG4gICAgICAgIFNWR0Zvcm0udGV4dCh0aGlzLl9jdHgsIHB0LCB0eHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbG9nKHR4dCkge1xuICAgICAgICB0aGlzLmZpbGwoXCIjMDAwXCIpLnN0cm9rZShcIiNmZmZcIiwgMC41KS50ZXh0KFsxMCwgMTRdLCB0eHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5TVkdGb3JtLmdyb3VwSUQgPSAwO1xuU1ZHRm9ybS5kb21JRCA9IDA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdmcuanMubWFwIiwiLyohIFNvdXJjZSBjb2RlIGxpY2Vuc2VkIHVuZGVyIEFwYWNoZSBMaWNlbnNlIDIuMC4gQ29weXJpZ2h0IMKpIDIwMTctY3VycmVudCBXaWxsaWFtIE5nYW4gYW5kIGNvbnRyaWJ1dG9ycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93aWxsaWFtbmdhbi9wdHMpICovXG5pbXBvcnQgeyBQdCwgQm91bmQgfSBmcm9tIFwiLi9QdFwiO1xuZXhwb3J0IGNsYXNzIFR5cG9ncmFwaHkge1xuICAgIHN0YXRpYyB0ZXh0V2lkdGhFc3RpbWF0b3IoZm4sIHNhbXBsZXMgPSBbXCJNXCIsIFwiblwiLCBcIi5cIl0sIGRpc3RyaWJ1dGlvbiA9IFswLjA2LCAwLjgsIDAuMTRdKSB7XG4gICAgICAgIGxldCBtID0gc2FtcGxlcy5tYXAoZm4pO1xuICAgICAgICBsZXQgYXZnID0gbmV3IFB0KGRpc3RyaWJ1dGlvbikuZG90KG0pO1xuICAgICAgICByZXR1cm4gKHN0cikgPT4gc3RyLmxlbmd0aCAqIGF2ZztcbiAgICB9XG4gICAgc3RhdGljIHRydW5jYXRlKGZuLCBzdHIsIHdpZHRoLCB0YWlsID0gXCJcIikge1xuICAgICAgICBsZXQgdHJpbSA9IE1hdGguZmxvb3Ioc3RyLmxlbmd0aCAqIE1hdGgubWluKDEsIHdpZHRoIC8gZm4oc3RyKSkpO1xuICAgICAgICBpZiAodHJpbSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyaW0gPSBNYXRoLm1heCgwLCB0cmltIC0gdGFpbC5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIFtzdHIuc3Vic3RyKDAsIHRyaW0pICsgdGFpbCwgdHJpbV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3N0ciwgc3RyLmxlbmd0aF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGZvbnRTaXplVG9Cb3goYm94LCByYXRpbyA9IDEsIGJ5SGVpZ2h0ID0gdHJ1ZSkge1xuICAgICAgICBsZXQgYm91bmQgPSBCb3VuZC5mcm9tR3JvdXAoYm94KTtcbiAgICAgICAgbGV0IGggPSBieUhlaWdodCA/IGJvdW5kLmhlaWdodCA6IGJvdW5kLndpZHRoO1xuICAgICAgICBsZXQgZiA9IHJhdGlvICogaDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChib3gyKSB7XG4gICAgICAgICAgICBsZXQgYm91bmQyID0gQm91bmQuZnJvbUdyb3VwKGJveDIpO1xuICAgICAgICAgICAgbGV0IG5oID0gKGJ5SGVpZ2h0ID8gYm91bmQyLmhlaWdodCA6IGJvdW5kMi53aWR0aCkgLyBoO1xuICAgICAgICAgICAgcmV0dXJuIGYgKiBuaDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGZvbnRTaXplVG9UaHJlc2hvbGQodGhyZXNob2xkLCBkaXJlY3Rpb24gPSAwKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGVmYXVsdFNpemUsIHZhbCkge1xuICAgICAgICAgICAgbGV0IGQgPSBkZWZhdWx0U2l6ZSAqIHZhbCAvIHRocmVzaG9sZDtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPCAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihkLCBkZWZhdWx0U2l6ZSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoZCwgZGVmYXVsdFNpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHlwb2dyYXBoeS5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IFB0LCBHcm91cCB9IGZyb20gXCIuL1B0XCI7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIENpcmNsZSwgUG9seWdvbiB9IGZyb20gXCIuL09wXCI7XG5leHBvcnQgY29uc3QgVUlTaGFwZSA9IHtcbiAgICByZWN0YW5nbGU6IFwicmVjdGFuZ2xlXCIsIGNpcmNsZTogXCJjaXJjbGVcIiwgcG9seWdvbjogXCJwb2x5Z29uXCIsIHBvbHlsaW5lOiBcInBvbHlsaW5lXCIsIGxpbmU6IFwibGluZVwiXG59O1xuZXhwb3J0IGNvbnN0IFVJUG9pbnRlckFjdGlvbnMgPSB7XG4gICAgdXA6IFwidXBcIiwgZG93bjogXCJkb3duXCIsIG1vdmU6IFwibW92ZVwiLCBkcmFnOiBcImRyYWdcIiwgdWlkcmFnOiBcInVpZHJhZ1wiLCBkcm9wOiBcImRyb3BcIiwgdWlkcm9wOiBcInVpZHJvcFwiLCBvdmVyOiBcIm92ZXJcIiwgb3V0OiBcIm91dFwiLCBlbnRlcjogXCJlbnRlclwiLCBsZWF2ZTogXCJsZWF2ZVwiLCBjb250ZXh0bWVudTogXCJjb250ZXh0bWVudVwiLCBhbGw6IFwiYWxsXCJcbn07XG5leHBvcnQgY2xhc3MgVUkge1xuICAgIGNvbnN0cnVjdG9yKGdyb3VwLCBzaGFwZSwgc3RhdGVzID0ge30sIGlkKSB7XG4gICAgICAgIHRoaXMuX2hvbGRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9ncm91cCA9IEdyb3VwLmZyb21BcnJheShncm91cCk7XG4gICAgICAgIHRoaXMuX3NoYXBlID0gc2hhcGU7XG4gICAgICAgIHRoaXMuX2lkID0gaWQgPT09IHVuZGVmaW5lZCA/IGB1aV8keyhVSS5fY291bnRlcisrKX1gIDogaWQ7XG4gICAgICAgIHRoaXMuX3N0YXRlcyA9IHN0YXRlcztcbiAgICAgICAgdGhpcy5fYWN0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVJlY3RhbmdsZShncm91cCwgc3RhdGVzLCBpZCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoZ3JvdXAsIFVJU2hhcGUucmVjdGFuZ2xlLCBzdGF0ZXMsIGlkKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21DaXJjbGUoZ3JvdXAsIHN0YXRlcywgaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKGdyb3VwLCBVSVNoYXBlLmNpcmNsZSwgc3RhdGVzLCBpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tUG9seWdvbihncm91cCwgc3RhdGVzLCBpZCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoZ3JvdXAsIFVJU2hhcGUucG9seWdvbiwgc3RhdGVzLCBpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tVUkodWksIHN0YXRlcywgaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKHVpLmdyb3VwLCB1aS5zaGFwZSwgc3RhdGVzIHx8IHVpLl9zdGF0ZXMsIGlkKTtcbiAgICB9XG4gICAgZ2V0IGlkKCkgeyByZXR1cm4gdGhpcy5faWQ7IH1cbiAgICBzZXQgaWQoZCkgeyB0aGlzLl9pZCA9IGQ7IH1cbiAgICBnZXQgZ3JvdXAoKSB7IHJldHVybiB0aGlzLl9ncm91cDsgfVxuICAgIHNldCBncm91cChkKSB7IHRoaXMuX2dyb3VwID0gZDsgfVxuICAgIGdldCBzaGFwZSgpIHsgcmV0dXJuIHRoaXMuX3NoYXBlOyB9XG4gICAgc2V0IHNoYXBlKGQpIHsgdGhpcy5fc2hhcGUgPSBkOyB9XG4gICAgc3RhdGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWtleSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZXNba2V5XTtcbiAgICB9XG4gICAgb24odHlwZSwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hY3Rpb25zW3R5cGVdKVxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uc1t0eXBlXSA9IFtdO1xuICAgICAgICByZXR1cm4gVUkuX2FkZEhhbmRsZXIodGhpcy5fYWN0aW9uc1t0eXBlXSwgZm4pO1xuICAgIH1cbiAgICBvZmYodHlwZSwgd2hpY2gpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hY3Rpb25zW3R5cGVdKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAod2hpY2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGlvbnNbdHlwZV07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBVSS5fcmVtb3ZlSGFuZGxlcih0aGlzLl9hY3Rpb25zW3R5cGVdLCB3aGljaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGlzdGVuKHR5cGUsIHAsIGV2dCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aW9uc1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fd2l0aGluKHApIHx8IEFycmF5LmZyb20odGhpcy5faG9sZHMudmFsdWVzKCkpLmluZGV4T2YodHlwZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIFVJLl90cmlnZ2VyKHRoaXMuX2FjdGlvbnNbdHlwZV0sIHRoaXMsIHAsIHR5cGUsIGV2dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9hY3Rpb25zWydhbGwnXSkge1xuICAgICAgICAgICAgICAgIFVJLl90cmlnZ2VyKHRoaXMuX2FjdGlvbnNbJ2FsbCddLCB0aGlzLCBwLCB0eXBlLCBldnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaG9sZCh0eXBlKSB7XG4gICAgICAgIGxldCBuZXdLZXkgPSBNYXRoLm1heCgwLCAuLi5BcnJheS5mcm9tKHRoaXMuX2hvbGRzLmtleXMoKSkpICsgMTtcbiAgICAgICAgdGhpcy5faG9sZHMuc2V0KG5ld0tleSwgdHlwZSk7XG4gICAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfVxuICAgIHVuaG9sZChrZXkpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9ob2xkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hvbGRzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHRyYWNrKHVpcywgdHlwZSwgcCwgZXZ0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHVpc1tpXS5saXN0ZW4odHlwZSwgcCwgZXZ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoZm4pIHtcbiAgICAgICAgZm4odGhpcy5fZ3JvdXAsIHRoaXMuX3N0YXRlcyk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFVJICR7dGhpcy5ncm91cC50b1N0cmluZ31gO1xuICAgIH1cbiAgICBfd2l0aGluKHApIHtcbiAgICAgICAgbGV0IGZuID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3NoYXBlID09PSBVSVNoYXBlLnJlY3RhbmdsZSkge1xuICAgICAgICAgICAgZm4gPSBSZWN0YW5nbGUud2l0aGluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2hhcGUgPT09IFVJU2hhcGUuY2lyY2xlKSB7XG4gICAgICAgICAgICBmbiA9IENpcmNsZS53aXRoaW5Cb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zaGFwZSA9PT0gVUlTaGFwZS5wb2x5Z29uKSB7XG4gICAgICAgICAgICBmbiA9IFBvbHlnb24uaGFzSW50ZXJzZWN0UG9pbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuKHRoaXMuX2dyb3VwLCBwKTtcbiAgICB9XG4gICAgc3RhdGljIF90cmlnZ2VyKGZucywgdGFyZ2V0LCBwdCwgdHlwZSwgZXZ0KSB7XG4gICAgICAgIGlmIChmbnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZm5zW2ldKVxuICAgICAgICAgICAgICAgICAgICBmbnNbaV0odGFyZ2V0LCBwdCwgdHlwZSwgZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgX2FkZEhhbmRsZXIoZm5zLCBmbikge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGZucy5wdXNoKGZuKTtcbiAgICAgICAgICAgIHJldHVybiBmbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgX3JlbW92ZUhhbmRsZXIoZm5zLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGZucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gZm5zLmxlbmd0aDtcbiAgICAgICAgICAgIGZucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuICh0ZW1wID4gZm5zLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5VSS5fY291bnRlciA9IDA7XG5leHBvcnQgY2xhc3MgVUlCdXR0b24gZXh0ZW5kcyBVSSB7XG4gICAgY29uc3RydWN0b3IoZ3JvdXAsIHNoYXBlLCBzdGF0ZXMgPSB7fSwgaWQpIHtcbiAgICAgICAgc3VwZXIoZ3JvdXAsIHNoYXBlLCBzdGF0ZXMsIGlkKTtcbiAgICAgICAgdGhpcy5faG92ZXJJRCA9IC0xO1xuICAgICAgICBpZiAoc3RhdGVzLmhvdmVyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZXNbJ2hvdmVyJ10gPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlcy5jbGlja3MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlc1snY2xpY2tzJ10gPSAwO1xuICAgICAgICBjb25zdCBVQSA9IFVJUG9pbnRlckFjdGlvbnM7XG4gICAgICAgIHRoaXMub24oVUEudXAsICh0YXJnZXQsIHB0LCB0eXBlLCBldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUoJ2NsaWNrcycsIHRoaXMuX3N0YXRlcy5jbGlja3MgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oVUEubW92ZSwgKHRhcmdldCwgcHQsIHR5cGUsIGV2dCkgPT4ge1xuICAgICAgICAgICAgbGV0IGhvdmVyID0gdGhpcy5fd2l0aGluKHB0KTtcbiAgICAgICAgICAgIGlmIChob3ZlciAmJiAhdGhpcy5fc3RhdGVzLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSgnaG92ZXInLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBVSS5fdHJpZ2dlcih0aGlzLl9hY3Rpb25zW1VBLmVudGVyXSwgdGhpcywgcHQsIFVBLmVudGVyLCBldnQpO1xuICAgICAgICAgICAgICAgIHZhciBfY2FwSUQgPSB0aGlzLmhvbGQoVUEubW92ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJJRCA9IHRoaXMub24oVUEubW92ZSwgKHQsIHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93aXRoaW4ocCkgJiYgIXRoaXMuc3RhdGUoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUoJ2hvdmVyJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVUkuX3RyaWdnZXIodGhpcy5fYWN0aW9uc1tVQS5sZWF2ZV0sIHRoaXMsIHB0LCBVQS5sZWF2ZSwgZXZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmKFVBLm1vdmUsIHRoaXMuX2hvdmVySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmhvbGQoX2NhcElEKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGljayhmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vbihVSVBvaW50ZXJBY3Rpb25zLnVwLCBmbik7XG4gICAgfVxuICAgIG9mZkNsaWNrKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZihVSVBvaW50ZXJBY3Rpb25zLnVwLCBpZCk7XG4gICAgfVxuICAgIG9uQ29udGV4dE1lbnUoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub24oVUlQb2ludGVyQWN0aW9ucy5jb250ZXh0bWVudSwgZm4pO1xuICAgIH1cbiAgICBvZmZDb250ZXh0TWVudShpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmYoVUlQb2ludGVyQWN0aW9ucy5jb250ZXh0bWVudSwgaWQpO1xuICAgIH1cbiAgICBvbkhvdmVyKGVudGVyLCBsZWF2ZSkge1xuICAgICAgICB2YXIgaWRzID0gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcbiAgICAgICAgaWYgKGVudGVyKVxuICAgICAgICAgICAgaWRzWzBdID0gdGhpcy5vbihVSVBvaW50ZXJBY3Rpb25zLmVudGVyLCBlbnRlcik7XG4gICAgICAgIGlmIChsZWF2ZSlcbiAgICAgICAgICAgIGlkc1sxXSA9IHRoaXMub24oVUlQb2ludGVyQWN0aW9ucy5sZWF2ZSwgbGVhdmUpO1xuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH1cbiAgICBvZmZIb3ZlcihlbnRlcklELCBsZWF2ZUlEKSB7XG4gICAgICAgIHZhciBzID0gW2ZhbHNlLCBmYWxzZV07XG4gICAgICAgIGlmIChlbnRlcklEID09PSB1bmRlZmluZWQgfHwgZW50ZXJJRCA+PSAwKVxuICAgICAgICAgICAgc1swXSA9IHRoaXMub2ZmKFVJUG9pbnRlckFjdGlvbnMuZW50ZXIsIGVudGVySUQpO1xuICAgICAgICBpZiAobGVhdmVJRCA9PT0gdW5kZWZpbmVkIHx8IGxlYXZlSUQgPj0gMClcbiAgICAgICAgICAgIHNbMV0gPSB0aGlzLm9mZihVSVBvaW50ZXJBY3Rpb25zLmxlYXZlLCBsZWF2ZUlEKTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVJRHJhZ2dlciBleHRlbmRzIFVJQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihncm91cCwgc2hhcGUsIHN0YXRlcyA9IHt9LCBpZCkge1xuICAgICAgICBzdXBlcihncm91cCwgc2hhcGUsIHN0YXRlcywgaWQpO1xuICAgICAgICB0aGlzLl9kcmFnZ2luZ0lEID0gLTE7XG4gICAgICAgIHRoaXMuX21vdmVIb2xkSUQgPSAtMTtcbiAgICAgICAgdGhpcy5fZHJvcEhvbGRJRCA9IC0xO1xuICAgICAgICB0aGlzLl91cEhvbGRJRCA9IC0xO1xuICAgICAgICBpZiAoc3RhdGVzLmRyYWdnaW5nID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZXNbJ2RyYWdnaW5nJ10gPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlcy5tb3ZlZCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5fc3RhdGVzWydtb3ZlZCddID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZXMub2Zmc2V0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZXNbJ29mZnNldCddID0gbmV3IFB0KCk7XG4gICAgICAgIGNvbnN0IFVBID0gVUlQb2ludGVyQWN0aW9ucztcbiAgICAgICAgdGhpcy5vbihVQS5kb3duLCAodGFyZ2V0LCBwdCwgdHlwZSwgZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbW92ZUhvbGRJRCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlKCdkcmFnZ2luZycsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUoJ29mZnNldCcsIG5ldyBQdChwdCkuc3VidHJhY3QodGFyZ2V0Lmdyb3VwWzBdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUhvbGRJRCA9IHRoaXMuaG9sZChVQS5tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9kcm9wSG9sZElEID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Ryb3BIb2xkSUQgPSB0aGlzLmhvbGQoVUEuZHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fdXBIb2xkSUQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBIb2xkSUQgPSB0aGlzLmhvbGQoVUEudXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nSUQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJRCA9IHRoaXMub24oVUEubW92ZSwgKHQsIHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJLl90cmlnZ2VyKHRoaXMuX2FjdGlvbnNbVUEudWlkcmFnXSwgdCwgcCwgVUEudWlkcmFnLCBldnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSgnbW92ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW5kRHJhZyA9ICh0YXJnZXQsIHB0LCB0eXBlLCBldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUoJ2RyYWdnaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5vZmYoVUEubW92ZSwgdGhpcy5fZHJhZ2dpbmdJRCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0lEID0gLTE7XG4gICAgICAgICAgICB0aGlzLnVuaG9sZCh0aGlzLl9tb3ZlSG9sZElEKTtcbiAgICAgICAgICAgIHRoaXMuX21vdmVIb2xkSUQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMudW5ob2xkKHRoaXMuX2Ryb3BIb2xkSUQpO1xuICAgICAgICAgICAgdGhpcy5fZHJvcEhvbGRJRCA9IC0xO1xuICAgICAgICAgICAgdGhpcy51bmhvbGQodGhpcy5fdXBIb2xkSUQpO1xuICAgICAgICAgICAgdGhpcy5fdXBIb2xkSUQgPSAtMTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlKCdtb3ZlZCcpKSB7XG4gICAgICAgICAgICAgICAgVUkuX3RyaWdnZXIodGhpcy5fYWN0aW9uc1tVQS51aWRyb3BdLCB0YXJnZXQsIHB0LCBVQS51aWRyb3AsIGV2dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSgnbW92ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oVUEuZHJvcCwgZW5kRHJhZyk7XG4gICAgICAgIHRoaXMub24oVUEudXAsIGVuZERyYWcpO1xuICAgICAgICB0aGlzLm9uKFVBLm91dCwgZW5kRHJhZyk7XG4gICAgfVxuICAgIG9uRHJhZyhmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vbihVSVBvaW50ZXJBY3Rpb25zLnVpZHJhZywgZm4pO1xuICAgIH1cbiAgICBvZmZEcmFnKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZihVSVBvaW50ZXJBY3Rpb25zLnVpZHJhZywgaWQpO1xuICAgIH1cbiAgICBvbkRyb3AoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub24oVUlQb2ludGVyQWN0aW9ucy51aWRyb3AsIGZuKTtcbiAgICB9XG4gICAgb2ZmRHJvcChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmYoVUlQb2ludGVyQWN0aW9ucy51aWRyb3AsIGlkKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VSS5qcy5tYXAiLCIvKiEgU291cmNlIGNvZGUgbGljZW5zZWQgdW5kZXIgQXBhY2hlIExpY2Vuc2UgMi4wLiBDb3B5cmlnaHQgwqkgMjAxNy1jdXJyZW50IFdpbGxpYW0gTmdhbiBhbmQgY29udHJpYnV0b3JzLiAoaHR0cHM6Ly9naXRodWIuY29tL3dpbGxpYW1uZ2FuL3B0cykgKi9cbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vUHRcIjtcbmV4cG9ydCBjb25zdCBDb25zdCA9IHtcbiAgICB4eTogXCJ4eVwiLFxuICAgIHl6OiBcInl6XCIsXG4gICAgeHo6IFwieHpcIixcbiAgICB4eXo6IFwieHl6XCIsXG4gICAgaG9yaXpvbnRhbDogMCxcbiAgICB2ZXJ0aWNhbDogMSxcbiAgICBpZGVudGljYWw6IDAsXG4gICAgcmlnaHQ6IDQsXG4gICAgYm90dG9tX3JpZ2h0OiA1LFxuICAgIGJvdHRvbTogNixcbiAgICBib3R0b21fbGVmdDogNyxcbiAgICBsZWZ0OiA4LFxuICAgIHRvcF9sZWZ0OiAxLFxuICAgIHRvcDogMixcbiAgICB0b3BfcmlnaHQ6IDMsXG4gICAgZXBzaWxvbjogMC4wMDAxLFxuICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICBtaW46IE51bWJlci5NSU5fVkFMVUUsXG4gICAgcGk6IE1hdGguUEksXG4gICAgdHdvX3BpOiA2LjI4MzE4NTMwNzE3OTU4NixcbiAgICBoYWxmX3BpOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgcXVhcnRlcl9waTogMC43ODUzOTgxNjMzOTc0NDgzLFxuICAgIG9uZV9kZWdyZWU6IDAuMDE3NDUzMjkyNTE5OTQzMjk1LFxuICAgIHJhZF90b19kZWc6IDU3LjI5NTc3OTUxMzA4MjMyLFxuICAgIGRlZ190b19yYWQ6IDAuMDE3NDUzMjkyNTE5OTQzMjk1LFxuICAgIGdyYXZpdHk6IDkuODEsXG4gICAgbmV3dG9uOiAwLjEwMTk3LFxuICAgIGdhdXNzaWFuOiAwLjM5ODk0MjI4MDQwMTQzMjdcbn07XG5leHBvcnQgY2xhc3MgVXRpbCB7XG4gICAgc3RhdGljIHdhcm5MZXZlbChsdikge1xuICAgICAgICBpZiAobHYpIHtcbiAgICAgICAgICAgIFV0aWwuX3dhcm5MZXZlbCA9IGx2O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVdGlsLl93YXJuTGV2ZWw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBcmdzKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgbGV0IHBvcyA9IFtdO1xuICAgICAgICBsZXQgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGFyZ3NbMF0pO1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBwb3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBhID0gW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwid1wiXTtcbiAgICAgICAgICAgIGxldCBwID0gYXJnc1swXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgocC5sZW5ndGggJiYgaSA+PSBwLmxlbmd0aCkgfHwgIShhW2ldIGluIHApKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBwb3MucHVzaChwW2FbaV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBwb3MgPSBbXS5zbGljZS5jYWxsKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuICAgIHN0YXRpYyB3YXJuKG1lc3NhZ2UgPSBcImVycm9yXCIsIGRlZmF1bHRSZXR1cm4gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKFV0aWwud2FybkxldmVsKCkgPT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoVXRpbC53YXJuTGV2ZWwoKSA9PSBcIndhcm5cIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0UmV0dXJuO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZG9tSW50KHJhbmdlLCBzdGFydCA9IDApIHtcbiAgICAgICAgVXRpbC53YXJuKFwiVXRpbC5yYW5kb21JbnQgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgTnVtLnJhbmRvbVJhbmdlYFwiKTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKSArIHN0YXJ0O1xuICAgIH1cbiAgICBzdGF0aWMgc3BsaXQocHRzLCBzaXplLCBzdHJpZGUsIGxvb3BCYWNrID0gZmFsc2UsIG1hdGNoU2l6ZSA9IHRydWUpIHtcbiAgICAgICAgbGV0IGNodW5rcyA9IFtdO1xuICAgICAgICBsZXQgcGFydCA9IFtdO1xuICAgICAgICBsZXQgc3QgPSBzdHJpZGUgfHwgc2l6ZTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgaWYgKHB0cy5sZW5ndGggPD0gMCB8fCBzdCA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBwdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJ0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNpemU7IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChsb29wQmFjaykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnB1c2gocHRzWyhpbmRleCArIGspICUgcHRzLmxlbmd0aF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgayA+PSBwdHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucHVzaChwdHNbaW5kZXggKyBrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggKz0gc3Q7XG4gICAgICAgICAgICBpZiAoIW1hdGNoU2l6ZSB8fCAobWF0Y2hTaXplICYmIHBhcnQubGVuZ3RoID09PSBzaXplKSlcbiAgICAgICAgICAgICAgICBjaHVua3MucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2h1bmtzO1xuICAgIH1cbiAgICBzdGF0aWMgZmxhdHRlbihwdHMsIGZsYXR0ZW5Bc0dyb3VwID0gdHJ1ZSkge1xuICAgICAgICBsZXQgYXJyID0gKGZsYXR0ZW5Bc0dyb3VwKSA/IG5ldyBHcm91cCgpIDogbmV3IEFycmF5KCk7XG4gICAgICAgIHJldHVybiBhcnIuY29uY2F0LmFwcGx5KGFyciwgcHRzKTtcbiAgICB9XG4gICAgc3RhdGljIGNvbWJpbmUoYSwgYiwgb3ApIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbkIgPSBiLmxlbmd0aDsgayA8IGxlbkI7IGsrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9wKGFbaV0sIGJba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgemlwKGFycmF5cykge1xuICAgICAgICBsZXQgeiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXlzWzBdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhcnJheXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwLnB1c2goYXJyYXlzW2tdW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHoucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gejtcbiAgICB9XG4gICAgc3RhdGljIHN0ZXBwZXIobWF4LCBtaW4gPSAwLCBzdHJpZGUgPSAxLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgYyA9IG1pbjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGMgKz0gc3RyaWRlO1xuICAgICAgICAgICAgaWYgKGMgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgYyA9IG1pbiArIChjIC0gbWF4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjKTtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZm9yUmFuZ2UoZm4sIHJhbmdlLCBzdGFydCA9IDAsIHN0ZXAgPSAxKSB7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydCwgbGVuID0gcmFuZ2U7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICAgICAgdGVtcFtpXSA9IGZuKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgICBzdGF0aWMgbG9hZCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVxdWVzdC5yZXNwb25zZVRleHQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYFNlcnZlciBlcnJvciAoJHtyZXF1ZXN0LnN0YXR1c30pIHdoZW4gbG9hZGluZyBcIiR7dXJsfVwiYCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhgVW5rbm93biBuZXR3b3JrIGVycm9yYCwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG4gICAgc3RhdGljIHBlcmZvcm1hbmNlKGF2Z0ZyYW1lcyA9IDEwKSB7XG4gICAgICAgIGxldCBsYXN0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGF2ZyA9IFtdO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGF2Zy5wdXNoKG5vdyAtIGxhc3QpO1xuICAgICAgICAgICAgaWYgKGF2Zy5sZW5ndGggPj0gYXZnRnJhbWVzKVxuICAgICAgICAgICAgICAgIGF2Zy5zaGlmdCgpO1xuICAgICAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGF2Zy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIGF2Zy5sZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgYXJyYXlDaGVjayhwdHMsIG1pblJlcXVpcmVkID0gMikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwdHMpICYmIHB0cy5sZW5ndGggPCBtaW5SZXF1aXJlZCkge1xuICAgICAgICAgICAgVXRpbC53YXJuKGBSZXF1aXJlcyAke21pblJlcXVpcmVkfSBvciBtb3JlIFB0cyBpbiB0aGlzIEdyb3VwLmApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgaXRlclRvQXJyYXkoaXQpIHtcbiAgICAgICAgcmV0dXJuICghQXJyYXkuaXNBcnJheShpdCkpID8gWy4uLml0XSA6IGl0O1xuICAgIH1cbn1cblV0aWwuX3dhcm5MZXZlbCA9IFwibXV0ZVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VXRpbC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9DYW52YXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0NyZWF0ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRm9ybVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vTGluZWFyQWxnZWJyYVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vTnVtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9PcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vUHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NwYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9Db2xvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vVXRpbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRG9tXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9TdmdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1R5cG9ncmFwaHlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1BoeXNpY3NcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1BsYXlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1VJXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fbW9kdWxlLmpzLm1hcCIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgRmFsbGluZ09jZWFuIH0gZnJvbSAnLi9za2V0Y2hlcydcblxubmV3IEZhbGxpbmdPY2VhbigpLnJ1bigpXG4iLCJpbXBvcnQgeyBOdW0sIFNoYXBpbmcsIENpcmNsZSwgR3JvdXAgfSBmcm9tICdwdHMnXG5pbXBvcnQgdHlwZSB7IFB0LCBDYW52YXNGb3JtLCBDYW52YXNTcGFjZSB9IGZyb20gJ3B0cydcbmltcG9ydCB7IEJVQkJMRV9NQVgsIEJVQkJMRV9NSU4gfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IHJnYmFGcm9tSGV4IH0gZnJvbSAndG9vbHMnXG5pbXBvcnQgeyBQb2ludERlc2NyaXB0aW9uLCBDb2xvclBhY2sgfSBmcm9tICd0eXBlcydcblxuY2xhc3MgQnViYmxlIHtcbiAgcHJpdmF0ZSBjZW50ZXI6IFB0XG4gIHByaXZhdGUgc2l6ZTogbnVtYmVyXG4gIHByaXZhdGUgYWxwaGFDeWNsZSA9IDAuMFxuICBwcml2YXRlIGRlc2M6IFBvaW50RGVzY3JpcHRpb25cbiAgcHJpdmF0ZSBjb2xvcjogQ29sb3JQYWNrXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgQnViYmxlXG4gICAqIEBwYXJhbSBwdCAgIENlbnRlciBwb2ludCBmb3IgYnViYmxlXG4gICAqIEBwYXJhbSBzaXplIFRoZSByYWRpdXMgb2YgdGhlIGJ1YmJsZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHQ6IFB0LCBzaXplOiBudW1iZXIsIGNvbG9yOiBDb2xvclBhY2spIHtcbiAgICB0aGlzLmNlbnRlciA9IHB0XG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuXG4gICAgdGhpcy5kZXNjID0ge1xuICAgICAgbWFnbml0dWRlOiBCVUJCTEVfTUlOIC8gc2l6ZSxcbiAgICAgIG1heEFscGhhOiAxIC8gKEJVQkJMRV9NQVggLSBzaXplKSxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogW3VwZGF0ZSBkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtIHNjYWxlIHQgdmFsdWUgYmV0d2VlbiAwIC0gMVxuICAgKiBAcGFyYW0gc3BhY2UgVGhlIHNwYWNlIGluIHdoaWNoIHRoZSBidWJibGUgZXhpc3RzXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKHNjYWxlOiBudW1iZXIsIHNwYWNlOiBDYW52YXNTcGFjZSk6IHZvaWQge1xuICAgIC8vIEZhZGUgb3ZlciB0aW1lXG4gICAgdGhpcy5hbHBoYUN5Y2xlID0gTnVtLmN5Y2xlKHNjYWxlLCBTaGFwaW5nLmVsYXN0aWNPdXQpXG5cbiAgICAvLyBTaHJpbmsgb3ZlciB0aW1lXG4gICAgY29uc3Qgc2l6ZU9mZnNldCA9IE51bS5tYXBUb1JhbmdlKE1hdGguYWJzKDEgLSBzY2FsZSksIDAsIDEsIDAuOTksIDEpXG4gICAgdGhpcy5zaXplICo9IHNpemVPZmZzZXRcblxuICAgIC8vIE1vdmUgY2VudGVyIHRvd2FyZHMgJ2xpZ2h0JyBzb3VyY2Ugb3ZlciB0aW1lXG4gICAgY29uc3QgcG9pbnRlck9wcG9zaXRlID0gc3BhY2UucG9pbnRlclxuICAgICAgLmNsb25lKClcbiAgICAgIC5yb3RhdGUyRChNYXRoLlBJLCBzcGFjZS5jZW50ZXIpXG4gICAgY29uc3QgbGluZVRvd2FyZHNMaWdodCA9IG5ldyBHcm91cCh0aGlzLmNlbnRlciwgcG9pbnRlck9wcG9zaXRlKVxuICAgIGNvbnN0IG5ld0NlbnRlciA9IGxpbmVUb3dhcmRzTGlnaHQuaW50ZXJwb2xhdGUoXG4gICAgICBOdW0ubWFwVG9SYW5nZSh0aGlzLmRlc2MubWFnbml0dWRlLCAwLCAxLCAwLjAwMDEsIDAuMDE1KVxuICAgIClcbiAgICB0aGlzLmNlbnRlci50byhuZXdDZW50ZXIpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYnViYmxlXG4gICAqIEBwYXJhbSBmb3JtIFRoZSBmb3JtIHRoYXQgd2lsbCBiZSBkb2luZyB0aGUgcmVuZGVyaW5nXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKGZvcm06IENhbnZhc0Zvcm0sIG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGxBbHBoYSA9IE51bS5tYXBUb1JhbmdlKFxuICAgICAgdGhpcy5hbHBoYUN5Y2xlLFxuICAgICAgMCxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgdGhpcy5kZXNjLm1heEFscGhhICsgMC4xXG4gICAgKVxuICAgIGNvbnN0IHN0cm9rZUFscGhhID0gTnVtLm1hcFRvUmFuZ2UoXG4gICAgICB0aGlzLmFscGhhQ3ljbGUsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICAgIDAsXG4gICAgICB0aGlzLmRlc2MubWF4QWxwaGFcbiAgICApXG4gICAgY29uc3QgY2lyY2xlID0gQ2lyY2xlLmZyb21DZW50ZXIodGhpcy5jZW50ZXIsIHRoaXMuc2l6ZSlcbiAgICBmb3JtXG4gICAgICAuZmlsbChyZ2JhRnJvbUhleCh0aGlzLmNvbG9yLmZpbGwsIGZpbGxBbHBoYSkpXG4gICAgICAuc3Ryb2tlKHJnYmFGcm9tSGV4KHRoaXMuY29sb3Iuc3Ryb2tlLCBzdHJva2VBbHBoYSksIDUpXG4gICAgICAuY29tcG9zaXRlKG1vZGUpXG4gICAgICAuY2lyY2xlKGNpcmNsZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWJibGVcbiIsImltcG9ydCB7IFJlY3RhbmdsZSwgQ3JlYXRlLCBOdW0sIEJvdW5kIH0gZnJvbSAncHRzJ1xuaW1wb3J0IHR5cGUgeyBQdCwgQ2FudmFzRm9ybSwgQ2FudmFzU3BhY2UgfSBmcm9tICdwdHMnXG5pbXBvcnQgQnViYmxlIGZyb20gJy4vQnViYmxlJ1xuaW1wb3J0IHsgQlVCQkxFX01JTiwgQlVCQkxFX01BWCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQ29sb3JQYWNrIH0gZnJvbSAndHlwZXMnXG5cbmNsYXNzIEJ1YmJsZUdyb3VwIHtcbiAgcHJpdmF0ZSBidWJibGVzOiBCdWJibGVbXSA9IFtdXG4gIHByaXZhdGUgcG9pbnRlcjogUHRcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgZmluYWxUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbFxuICBwcml2YXRlIHJlbmRlclRpbWU6IG51bWJlclxuICBwcml2YXRlIHNjYWxlID0gMFxuICBwcml2YXRlIHNwYWNlOiBDYW52YXNTcGFjZVxuICBwcml2YXRlIGNvbG9yOiBDb2xvclBhY2tcbiAgcHJpdmF0ZSBjb21wTW9kZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcG9pbnRlcjogUHQsXG4gICAgc3BhY2U6IENhbnZhc1NwYWNlLFxuICAgIGF1ZGlvU2NhbGU6IG51bWJlcixcbiAgICBjb21wTW9kZTogc3RyaW5nLFxuICAgIGNvbG9yPzogQ29sb3JQYWNrLFxuICAgIHJlbmRlclRpbWU/OiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5wb2ludGVyID0gcG9pbnRlclxuICAgIHRoaXMucmVuZGVyVGltZSA9IHJlbmRlclRpbWUgfHwgMzAwMFxuICAgIHRoaXMuc3BhY2UgPSBzcGFjZVxuICAgIHRoaXMuY29tcE1vZGUgPSBjb21wTW9kZSB8fCAnc291cmNlLW92ZXInXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8IHsgZmlsbDogJyNmZmYnLCBzdHJva2U6ICcjZmZmJyB9XG5cbiAgICBjb25zdCBib3VuZGluZ0JveFNpemUgPSBOdW0ubWFwVG9SYW5nZShhdWRpb1NjYWxlLCAwLCAxLCA4MCwgODAwKVxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gUmVjdGFuZ2xlLmZyb21DZW50ZXIodGhpcy5wb2ludGVyLCBib3VuZGluZ0JveFNpemUpXG4gICAgY29uc3QgbWluQnViYmxlcyA9IE51bS5tYXBUb1JhbmdlKGF1ZGlvU2NhbGUsIDAsIDEsIDAsIDEpXG4gICAgY29uc3QgbWF4QnViYmxlcyA9IE51bS5tYXBUb1JhbmdlKGF1ZGlvU2NhbGUsIDAsIDEsIDEsIDQpXG4gICAgY29uc3QgcG9pbnRzID0gQ3JlYXRlLmRpc3RyaWJ1dGVSYW5kb20oXG4gICAgICBCb3VuZC5mcm9tR3JvdXAoYm91bmRpbmdCb3gpLFxuICAgICAgTnVtLnJhbmRvbVJhbmdlKG1pbkJ1YmJsZXMsIG1heEJ1YmJsZXMpXG4gICAgKVxuXG4gICAgY29uc3QgbWluU2l6ZSA9IE51bS5tYXBUb1JhbmdlKFxuICAgICAgYXVkaW9TY2FsZSxcbiAgICAgIDAsXG4gICAgICAxLFxuICAgICAgQlVCQkxFX01JTixcbiAgICAgIEJVQkJMRV9NSU4gKyAyMFxuICAgIClcbiAgICBjb25zdCBtYXhTaXplID0gTnVtLm1hcFRvUmFuZ2UoYXVkaW9TY2FsZSwgMCwgMSwgbWluU2l6ZSwgQlVCQkxFX01BWClcblxuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgICAgdGhpcy5idWJibGVzLnB1c2goXG4gICAgICAgIG5ldyBCdWJibGUocG9pbnQsIE51bS5yYW5kb21SYW5nZShtaW5TaXplLCBtYXhTaXplKSwgdGhpcy5jb2xvcilcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldEJ1YmJsZXMoKTogQnViYmxlW10ge1xuICAgIHJldHVybiB0aGlzLmJ1YmJsZXNcbiAgfVxuXG4gIHB1YmxpYyBpc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNjYWxlID49IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGJ1YmJsZSBncm91cFxuICAgKiBAcGFyYW0gdGltZSBjdXJyZW50VGltZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGFydFRpbWUgPT09IG51bGwgfHwgdGhpcy5maW5hbFRpbWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGltZVxuICAgICAgdGhpcy5maW5hbFRpbWUgPSB0aGlzLnN0YXJ0VGltZSArIHRoaXMucmVuZGVyVGltZVxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUgPSBOdW0ubWFwVG9SYW5nZSh0aW1lLCB0aGlzLnN0YXJ0VGltZSwgdGhpcy5maW5hbFRpbWUsIDAsIDEpXG4gICAgdGhpcy5idWJibGVzLmZvckVhY2goKGJ1YmJsZSkgPT4gYnViYmxlLnVwZGF0ZSh0aGlzLnNjYWxlLCB0aGlzLnNwYWNlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGJ1YmJsZSBncm91cFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihmb3JtOiBDYW52YXNGb3JtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGaW5pc2hlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuYnViYmxlcy5mb3JFYWNoKChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5yZW5kZXIoZm9ybSwgdGhpcy5jb21wTW9kZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZUdyb3VwXG4iLCJleHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICBibGFjazogJyMwMDAwMDAnLFxuICBkYXJrYmx1ZTogJyMwNDFGNjAnLFxuICBibHVlZ3JvdHRvOiAnIzA0NzZEMCcsXG4gIGN5YW46ICcjMkNFRUYwJyxcbiAgdGlmZmFueWJsdWU6ICcjQjRGNUYwJyxcbn1cblxuZXhwb3J0IGNvbnN0IEJVQkJMRV9NSU4gPSA1XG5leHBvcnQgY29uc3QgQlVCQkxFX01BWCA9IDEyMFxuXG4vLydUYWxrLCBvciB5ZWxsLCBpbnRvIHRoZSB2b2lkJyxcbmV4cG9ydCBjb25zdCBJTlRST19URVhUID0gW1xuICAnRkFMTElORyBPQ0VBTicsXG4gICdUYWxrIChvciB5ZWxsKSBpbnRvIHRoZSB2b2lkJyxcbiAgJ011c2ljOiBSZXN0bGVzcyBTdGF0ZXMgYnkgRGFuaWVsIEJpcmNoJyxcbiAgJ1ByZXNzIHNwYWNlYmFyIHRvIHBhdXNlJyxcbiAgJ01pY3JvcGhvbmUgYWNjZXNzIHJlcXVpcmVkIHRvIHdvcmsnLFxuXVxuIiwiaW1wb3J0IHsgQ2FudmFzU3BhY2UsIENhbnZhc0Zvcm0sIFRlbXBvLCBOdW0sIENpcmNsZSwgU291bmQsIEZvbnQgfSBmcm9tICdwdHMnXG5pbXBvcnQgU2tldGNoIGZyb20gJy4uL3NrZXRjaCdcbmltcG9ydCBCdWJibGVHcm91cCBmcm9tICcuL0J1YmJsZUdyb3VwJ1xuaW1wb3J0IHsgQ09MT1JTLCBJTlRST19URVhUIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBCYWNrZ3JvdW5kUGFydGljbGVzLCBzb2xpZEJhY2tncm91bmQsIHJnYmFGcm9tSGV4IH0gZnJvbSAndG9vbHMnXG5pbXBvcnQgU09ORyBmcm9tICcuL2RhbmllbF9iaXJjaF9yZXN0bGVzc19zdGF0ZXNfY29uc3RyYWluZWRfZGVzaXJlXzIubXAzJ1xuXG5leHBvcnQgY2xhc3MgRmFsbGluZ09jZWFuIGV4dGVuZHMgU2tldGNoIHtcbiAgcHJvdGVjdGVkIHNwYWNlOiBDYW52YXNTcGFjZVxuICBwcm90ZWN0ZWQgZm9ybTogQ2FudmFzRm9ybVxuICBwcml2YXRlIHRlbXBvOiBUZW1wb1xuICBwcml2YXRlIG1pY0lucHV0OiBTb3VuZFxuICBwcml2YXRlIHNvbmc6IFNvdW5kXG4gIHByaXZhdGUgZ2Fpbk5vZGU6IEdhaW5Ob2RlXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0ZhbGxpbmcgT2NlYW4nKVxuICAgIHRoaXMudGVtcG8gPSBUZW1wby5mcm9tQmVhdCg1MClcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG9jZWFuIGJhY2tncm91bmRcbiAgICovXG4gIHByaXZhdGUgYWRkQmFja2dyb3VuZCgpOiB2b2lkIHtcbiAgICBzb2xpZEJhY2tncm91bmQodGhpcy5zcGFjZSwgdGhpcy5mb3JtLCBDT0xPUlMuYmxhY2spXG5cbiAgICBjb25zdCBTSU5LSU5HX1RJTUUgPSAxMjAgKiAxMDAwXG4gICAgdGhpcy5zcGFjZS5hZGQoKHRpbWUsIF9mdGltZSwgc3BhY2UpID0+IHtcbiAgICAgIGxldCBzY2FsZSA9IHRpbWUgLyBTSU5LSU5HX1RJTUVcblxuICAgICAgaWYgKHNjYWxlID4gMC44KSBzY2FsZSA9IDAuOCAvLyBlbmQgYW5pbWF0aW9uIGlmIHBhc3QgU0lOS0lOR19USU1FXG5cbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5mb3JtLmdyYWRpZW50KFtcbiAgICAgICAgW051bS5tYXBUb1JhbmdlKHNjYWxlLCAwLCAxLCAwLjMsIDAuOTIpLCBDT0xPUlMuYmxhY2tdLFxuICAgICAgICBbTnVtLm1hcFRvUmFuZ2Uoc2NhbGUsIDAsIDEsIDAuOCwgMC45OSksIENPTE9SUy5kYXJrYmx1ZV0sXG4gICAgICAgIFtOdW0ubWFwVG9SYW5nZShzY2FsZSwgMCwgMSwgMC45MiwgMSksIENPTE9SUy5ibHVlZ3JvdHRvXSxcbiAgICAgICAgWzEsIENPTE9SUy5jeWFuXSxcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGMxID0gQ2lyY2xlLmZyb21DZW50ZXIoXG4gICAgICAgIHNwYWNlLmNlbnRlcixcbiAgICAgICAgTWF0aC5tYXgoc3BhY2Uud2lkdGgsIHNwYWNlLmhlaWdodClcbiAgICAgIClcbiAgICAgIGNvbnN0IG9wcG9zaXRlUG9pbnRlciA9IHNwYWNlLnBvaW50ZXJcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLnJvdGF0ZTJEKE1hdGguUEksIHNwYWNlLmNlbnRlcilcbiAgICAgIGNvbnN0IGMyID0gQ2lyY2xlLmZyb21DZW50ZXIob3Bwb3NpdGVQb2ludGVyLCAyKVxuICAgICAgdGhpcy5mb3JtLmZpbGwoZ3JhZGllbnQoYzEsIGMyKSkuY2lyY2xlKGMxKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBidWJibGVzXG4gICAqL1xuICBwcml2YXRlIGRyYXdCdWJibGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGJ1YmJsZUdyb3VwczogQnViYmxlR3JvdXBbXSA9IFtdXG5cbiAgICB0aGlzLnRlbXBvLmV2ZXJ5KDEpLnByb2dyZXNzKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1pY0lucHV0ICYmIHRoaXMubWljSW5wdXQucGxheWFibGUpIHtcbiAgICAgICAgbGV0IGZyZXFEb21haW4gPSB0aGlzLm1pY0lucHV0LmZyZXFEb21haW4oKVxuICAgICAgICAvLyBDdXQgb3V0IGxvdyBhbmQgaGlnaCBiYW5rc1xuICAgICAgICBmcmVxRG9tYWluID0gZnJlcURvbWFpbi5zbGljZSgxLCA4KVxuICAgICAgICBjb25zdCBmcmVxQXZlcmFnZSA9XG4gICAgICAgICAgZnJlcURvbWFpbi5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIGZyZXFEb21haW4ubGVuZ3RoXG4gICAgICAgIGNvbnN0IGF1ZGlvU2NhbGUgPSBOdW0ubWFwVG9SYW5nZShmcmVxQXZlcmFnZSwgMCwgMTgwLCAwLCAxKVxuXG4gICAgICAgIC8vIENyZWF0ZSBidWJibGVzIG1vcmUgZnJlcXVlbnRseSwgdGhlIGxvdWRlciB0aGUgaW5wdXRcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBhdWRpb1NjYWxlKVxuICAgICAgICAgIGJ1YmJsZUdyb3Vwcy5wdXNoKFxuICAgICAgICAgICAgbmV3IEJ1YmJsZUdyb3VwKFxuICAgICAgICAgICAgICB0aGlzLnNwYWNlLnBvaW50ZXIsXG4gICAgICAgICAgICAgIHRoaXMuc3BhY2UsXG4gICAgICAgICAgICAgIGF1ZGlvU2NhbGUsXG4gICAgICAgICAgICAgICdleGNsdXNpb24nLFxuICAgICAgICAgICAgICB7IGZpbGw6IENPTE9SUy5ibHVlZ3JvdHRvLCBzdHJva2U6IENPTE9SUy5jeWFuIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICB9XG4gICAgfSwgMClcblxuICAgIHRoaXMuc3BhY2UuYWRkKCh0aW1lKSA9PiB7XG4gICAgICAvLyBSZXZlcnNlIGJ1YmJsZSBncm91cCB0byBoYXZlIGl0IGFjdCBsaWtlIGEgc3RhY2tcbiAgICAgIC8vIFJ1biB0aHJvdWdoIGJ1YmJsZSBncm91cHMgYmFja3dhcmRzLCBjaG9wcGluZyBkb3duIHRvIG1heGltdW0gbnVtYmVyIG9mXG4gICAgICAvLyBlbGVtZW50cywgYW5kIHJlbW92aW5nIHRob3NlIHRoYXQgYXJlIGFscmVhZHkgZmluaXNoZWQuIE90aGVyd2lzZSxcbiAgICAgIC8vIFVwZGF0ZSBhbmQgcmVuZGVyXG4gICAgICBjb25zdCByZXZCdWJibGVHcm91cCA9IFsuLi5idWJibGVHcm91cHNdLnJldmVyc2UoKVxuICAgICAgZm9yIChsZXQgaSA9IHJldkJ1YmJsZUdyb3VwLmxlbmd0aCAtIDE7IGkgPiAwOyAtLWkpIHtcbiAgICAgICAgaWYgKHJldkJ1YmJsZUdyb3VwW2ldLmlzRmluaXNoZWQoKSB8fCByZXZCdWJibGVHcm91cC5sZW5ndGggPiAzMikge1xuICAgICAgICAgIHJldkJ1YmJsZUdyb3VwLnNwbGljZShpLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldkJ1YmJsZUdyb3VwW2ldLnVwZGF0ZSh0aW1lKVxuICAgICAgICAgIHJldkJ1YmJsZUdyb3VwW2ldLnJlbmRlcih0aGlzLmZvcm0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFtkcmF3VGV4dCBkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaXZhdGUgZHJhd1RleHQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9udCA9IG5ldyBGb250KDgwLCAnTW9udHNlcnJhdCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcbiAgICBjb25zdCB0ZXh0VGVtcG8gPSB0aGlzLnRlbXBvLmV2ZXJ5KDEwMClcbiAgICBsZXQgdGV4dCA9IElOVFJPX1RFWFRbMF1cblxuICAgIHRleHRUZW1wby5zdGFydCgoY291bnQpID0+IHtcbiAgICAgIHRleHQgPSBJTlRST19URVhUW2NvdW50XVxuICAgICAgY29uc29sZS5sb2codGV4dClcbiAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgZm9udC5zaXplID0gMjhcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA+PSBJTlRST19URVhULmxlbmd0aCkgcmV0dXJuIHRydWVcbiAgICB9LCAwKVxuXG4gICAgdGV4dFRlbXBvLnByb2dyZXNzKChjb3VudCwgdCkgPT4ge1xuICAgICAgY29uc3QgeSA9IE51bS5tYXBUb1JhbmdlKFxuICAgICAgICAxIC0gdCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgdGhpcy5zcGFjZS5oZWlnaHQgLSA2MCxcbiAgICAgICAgdGhpcy5zcGFjZS5oZWlnaHQgLSAxMjBcbiAgICAgIClcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gWzYwLCB5XVxuICAgICAgY29uc3QgYWxwaGEgPSBOdW0uY3ljbGUodClcbiAgICAgIGNvbnN0IGNvbG9yID0gcmdiYUZyb21IZXgoJyNmZmYnLCBhbHBoYSlcbiAgICAgIHRoaXMuZm9ybS5maWxsKGNvbG9yKS5zdHJva2UoY29sb3IpLmZvbnQoZm9udCkudGV4dChwb3NpdGlvbiwgdGV4dClcbiAgICAgIGlmIChjb3VudCA+PSBJTlRST19URVhULmxlbmd0aCkgcmV0dXJuIHRydWVcbiAgICB9LCAwKVxuICB9XG5cbiAgLyoqXG4gICAqIFtjb25uZWN0TWljcm9waG9uZSBkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBwcml2YXRlIGNvbm5lY3RNaWNyb3Bob25lKCk6IHZvaWQge1xuICAgIFNvdW5kLmlucHV0KHsgYXVkaW86IHRydWUgfSkudGhlbigobWljSW5wdXQpID0+IHtcbiAgICAgIHRoaXMubWljSW5wdXQgPSBtaWNJbnB1dFxuICAgICAgdGhpcy5taWNJbnB1dC5hbmFseXplKDMyLCAtNTAsIC0zMClcbiAgICAgIC8vIEVuc3VyZSB0aGUgY3R4IGlzbid0IHN1c3BlbmRlZFxuICAgICAgaWYgKHRoaXMubWljSW5wdXQuY3R4LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgICB0aGlzLm1pY0lucHV0LmN0eC5yZXN1bWUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogW2xvYWRBdWRpbyBkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaXZhdGUgbG9hZEF1ZGlvKCk6IHZvaWQge1xuICAgIFNvdW5kLmxvYWQoU09ORykudGhlbigoc29uZykgPT4ge1xuICAgICAgY29uc3QgY3R4ID0gc29uZy5jdHhcbiAgICAgIGNvbnN0IGdhaW5Ob2RlID0gY3R4LmNyZWF0ZUdhaW4oKVxuXG4gICAgICBzb25nLmNvbm5lY3QoZ2Fpbk5vZGUpXG4gICAgICBzb25nLnNldE91dHB1dE5vZGUoZ2Fpbk5vZGUpXG4gICAgICBnYWluTm9kZS5nYWluLnZhbHVlID0gMC4xXG5cbiAgICAgIHNvbmcuc3RhcnQoKVxuXG4gICAgICB0aGlzLnNvbmcgPSBzb25nXG4gICAgICB0aGlzLmdhaW5Ob2RlID0gZ2Fpbk5vZGVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFtvblBhdXNlIGRlc2NyaXB0aW9uXVxuICAgKi9cbiAgcHJvdGVjdGVkIG9uUGF1c2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29uZy5wbGF5aW5nKSB7XG4gICAgICB0aGlzLnNvbmcuc3RvcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29uZy5zdGFydCgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgRmFsbGluZyBPY2VhblxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25uZWN0TWljcm9waG9uZSgpXG4gICAgdGhpcy5sb2FkQXVkaW8oKVxuICAgIHRoaXMuYWRkQmFja2dyb3VuZCgpXG4gICAgbmV3IEJhY2tncm91bmRQYXJ0aWNsZXMoXG4gICAgICB0aGlzLnNwYWNlLFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgQ09MT1JTLnRpZmZhbnlibHVlLFxuICAgICAgJ2NvbG9yLWRvZGdlJ1xuICAgICkucnVuKClcbiAgICB0aGlzLmRyYXdCdWJibGVzKClcbiAgICB0aGlzLnNwYWNlLmFkZCh0aGlzLnRlbXBvKVxuICAgIHRoaXMuZHJhd1RleHQoKVxuICB9XG59IiwiaW1wb3J0IHsgRmFsbGluZ09jZWFuIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2Uvc3JjXCI7XG5cbmV4cG9ydCB7IEZhbGxpbmdPY2VhbiB9IGZyb20gJy4vRmFsbGluZ09jZWFuL2luZGV4LnRzJyIsImltcG9ydCB7IENhbnZhc1NwYWNlIH0gZnJvbSAncHRzJ1xuaW1wb3J0IHR5cGUgeyBGb3JtIH0gZnJvbSAncHRzJ1xuXG5hYnN0cmFjdCBjbGFzcyBTa2V0Y2gge1xuICBwcml2YXRlIGlkOiBzdHJpbmdcbiAgcHJvdGVjdGVkIHNwYWNlOiBDYW52YXNTcGFjZVxuICBwcm90ZWN0ZWQgZm9ybTogRm9ybVxuICBwcm90ZWN0ZWQgcGxheU9uY2U6IG51bWJlclxuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYW52YXNTcGFjZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHBsYXlPbmNlID0gMCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuc3BhY2UgPSBuZXcgQ2FudmFzU3BhY2UoU2tldGNoLmNyZWF0ZUVsZW1lbnQoKSkuc2V0dXAoe1xuICAgICAgYmdjb2xvcjogJyNmZmYnLFxuICAgICAgcmVzaXplOiB0cnVlLFxuICAgICAgcmV0aW5hOiB0cnVlLFxuICAgIH0pXG4gICAgdGhpcy5mb3JtID0gdGhpcy5zcGFjZS5nZXRGb3JtKClcbiAgICB0aGlzLnBsYXlPbmNlID0gcGxheU9uY2VcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmlkfSBoYXMgYmVlbiBjcmVhdGVkLmApXG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGRvbmUgYmVmb3JlIHNwYWNlLnBsYXkoKVxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTogdm9pZFxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYWxsIHNpZGUgZWZmZWN0cyBvbiBwYXVzZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG9uUGF1c2UoKTogdm9pZFxuXG4gIHB1YmxpYyBhc3luYyBydW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLnNwYWNlLmJpbmRNb3VzZSgpLmJpbmRUb3VjaCgpXG4gICAgaWYgKHRoaXMucGxheU9uY2UpIHtcbiAgICAgIHRoaXMuc3BhY2UucGxheU9uY2UodGhpcy5wbGF5T25jZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGFjZS5wbGF5KClcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGtleWJvYXJkIGFjdGlvbnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gZVxuICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzogLy8gU3BhY2UgQmFyXG4gICAgICAgICAgdGhpcy5zcGFjZS5wYXVzZSh0cnVlKSAvLyBCb29sZWFuIHRydWUgbWFrZXMgdGhpcyBhY3QgYXMgYSB0b2dnbGVcbiAgICAgICAgICB0aGlzLm9uUGF1c2UoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tldGNoXG4iLCJpbXBvcnQgeyBDcmVhdGUsIE51bSwgQm91bmQsIFJlY3RhbmdsZSwgU2hhcGluZyB9IGZyb20gJ3B0cydcbmltcG9ydCB0eXBlIHsgR3JvdXBMaWtlLCBDYW52YXNTcGFjZSwgQ2FudmFzRm9ybSB9IGZyb20gJ3B0cydcbmltcG9ydCB0eXBlIHsgUG9pbnREZXNjcmlwdGlvbiB9IGZyb20gJ3R5cGVzJ1xuaW1wb3J0IHsgZnVsbFdpZHRoUmVjdCwgcmdiYUZyb21IZXggfSBmcm9tICcuLydcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRQYXJ0aWNsZXMge1xuICBwcml2YXRlIHNwYWNlOiBDYW52YXNTcGFjZVxuICBwcml2YXRlIGZvcm06IENhbnZhc0Zvcm1cbiAgcHJpdmF0ZSBwb2ludHM6IEdyb3VwTGlrZVxuICBwcml2YXRlIHBvaW50RGVzY3JpcHRpb25zOiBQb2ludERlc2NyaXB0aW9uW10gPSBbXVxuICBwdWJsaWMgY29sb3I6IHN0cmluZ1xuICBwdWJsaWMgY29tcG9zaXRlOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzcGFjZTogQ2FudmFzU3BhY2UsXG4gICAgZm9ybTogQ2FudmFzRm9ybSxcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIGNvbXBvc2l0ZT86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnNwYWNlID0gc3BhY2VcbiAgICB0aGlzLmZvcm0gPSBmb3JtXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5jb21wb3NpdGUgPSBjb21wb3NpdGUgfHwgJ3NvdXJjZS1vdmVyJ1xuICB9XG5cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLnNwYWNlLmFkZCh7XG4gICAgICBzdGFydDogKGJvdW5kKSA9PiB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gQ3JlYXRlLmRpc3RyaWJ1dGVSYW5kb20oYm91bmQsIE51bS5yYW5kb21SYW5nZSg4MCwgMjAwKSlcblxuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvaW50RGVzY3JpcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgYW5nbGU6IE51bS5yYW5kb21SYW5nZSgwLCAyICogTWF0aC5QSSksXG4gICAgICAgICAgICBtYWduaXR1ZGU6IE51bS5yYW5kb21SYW5nZSgwLjEsIDAuOCksXG4gICAgICAgICAgICBtaW5BbHBoYTogTnVtLnJhbmRvbVJhbmdlKDAsIDAuNCksXG4gICAgICAgICAgICBtYXhBbHBoYTogTnVtLnJhbmRvbVJhbmdlKDAuNCwgMC44KSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFuaW1hdGU6ICh0aW1lLCBfZnRpbWUsIHNwYWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xlID0gTnVtLmN5Y2xlKCh0aW1lICUgNTAwMCkgLyA1MDAwLCBTaGFwaW5nLnNpbmVJbk91dClcbiAgICAgICAgY29uc3QgYm91bmQgPSBCb3VuZC5mcm9tR3JvdXAoZnVsbFdpZHRoUmVjdChzcGFjZSkpXG5cbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMucG9pbnREZXNjcmlwdGlvbnNbaW5kZXhdXG4gICAgICAgICAgcG9pbnQudG9BbmdsZShkZXNjLmFuZ2xlLCBkZXNjLm1hZ25pdHVkZSwgdHJ1ZSlcbiAgICAgICAgICAvLyBJZiBwb2ludCBpcyBvdXRzaWRlIG9mIGJvdW5kLCBtb3ZlIGl0IHRvIHJhbmRvbSBwb2ludCB3aXRoaW4gYm91bmRcbiAgICAgICAgICBpZiAoIVJlY3RhbmdsZS53aXRoaW5Cb3VuZChib3VuZCwgcG9pbnQpKSB7XG4gICAgICAgICAgICBwb2ludC50byhDcmVhdGUuZGlzdHJpYnV0ZVJhbmRvbShib3VuZCwgMSlbMF0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5mb3JtXG4gICAgICAgICAgICAuY29tcG9zaXRlKHRoaXMuY29tcG9zaXRlKVxuICAgICAgICAgICAgLmZpbGxPbmx5KFxuICAgICAgICAgICAgICByZ2JhRnJvbUhleChcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgICAgIE51bS5tYXBUb1JhbmdlKGN5Y2xlLCAwLCAxLCBkZXNjLm1pbkFscGhhLCBkZXNjLm1heEFscGhhKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucG9pbnQocG9pbnQsIDEsICdjaXJjbGUnKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IENhbnZhc1NwYWNlLCBDYW52YXNGb3JtLCBQdExpa2UgfSBmcm9tICdwdHMnXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTd2l0Y2hlciB7XG4gIHByaXZhdGUgc3BhY2U6IENhbnZhc1NwYWNlXG4gIHByaXZhdGUgZm9ybTogQ2FudmFzRm9ybVxuICBwcml2YXRlIGZvbnRDb2xvcjogc3RyaW5nXG4gIHByaXZhdGUgcG9zaXRpb246IFB0TGlrZVxuICBwcml2YXRlIG1vZGVzID0gW1xuICAgICdzb3VyY2Utb3ZlcicsXG4gICAgJ3NvdXJjZS1pbicsXG4gICAgJ3NvdXJjZS1vdXQnLFxuICAgICdzb3VyY2UtYXRvcCcsXG4gICAgJ2Rlc3RpbmF0aW9uLW92ZXInLFxuICAgICdkZXN0aW5hdGlvbi1pbicsXG4gICAgJ2Rlc3RpbmF0aW9uLW91dCcsXG4gICAgJ2Rlc3RpbmF0aW9uLWF0b3AnLFxuICAgICdsaWdodGVyJyxcbiAgICAnY29weScsXG4gICAgJ3hvcicsXG4gICAgJ211bHRpcGx5JyxcbiAgICAnc2NyZWVuJyxcbiAgICAnb3ZlcmxheScsXG4gICAgJ2RhcmtlbicsXG4gICAgJ2xpZ2h0ZW4nLFxuICAgICdjb2xvci1kb2RnZScsXG4gICAgJ2NvbG9yLWJ1cm4nLFxuICAgICdoYXJkLWxpZ2h0JyxcbiAgICAnc29mdC1saWdodCcsXG4gICAgJ2RpZmZlcmVuY2UnLFxuICAgICdleGNsdXNpb24nLFxuICAgICdodWUnLFxuICAgICdzYXR1cmF0aW9uJyxcbiAgICAnY29sb3InLFxuICAgICdsdW1pbm9zaXR5JyxcbiAgXS5yZXZlcnNlKClcbiAgcHJpdmF0ZSBjdXJNb2RlID0gMFxuXG4gIGNvbnN0cnVjdG9yKHNwYWNlOiBDYW52YXNTcGFjZSwgY29sb3I/OiBzdHJpbmcsIHBvc2l0aW9uPzogUHRMaWtlKSB7XG4gICAgdGhpcy5zcGFjZSA9IHNwYWNlXG4gICAgdGhpcy5mb3JtID0gc3BhY2UuZ2V0Rm9ybSgpXG4gICAgdGhpcy5mb250Q29sb3IgPSBjb2xvciB8fCAnI2ZmZidcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24gfHwgWzIwLCAyMF1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVNb2RlKGUpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhd01vZGVUaXRsZSgpXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1vZGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLmN1ck1vZGUgPVxuICAgICAgICAgIHRoaXMuY3VyTW9kZSArIDEgPj0gdGhpcy5tb2Rlcy5sZW5ndGggPyAwIDogdGhpcy5jdXJNb2RlICsgMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5jdXJNb2RlID1cbiAgICAgICAgICB0aGlzLmN1ck1vZGUgLSAxIDwgMCA/IHRoaXMubW9kZXMubGVuZ3RoIC0gMSA6IHRoaXMuY3VyTW9kZSAtIDFcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VyTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vZGVzW3RoaXMuY3VyTW9kZV1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3TW9kZVRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3BhY2UuYWRkKCgpID0+IHtcbiAgICAgIHRoaXMuZm9ybVxuICAgICAgICAuZm9udCgxOClcbiAgICAgICAgLmZpbGxPbmx5KHRoaXMuZm9udENvbG9yKVxuICAgICAgICAudGV4dCh0aGlzLnBvc2l0aW9uLCB0aGlzLm1vZGVzW3RoaXMuY3VyTW9kZV0pXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAncHRzJ1xuaW1wb3J0IHR5cGUgeyBTcGFjZSwgR3JvdXBMaWtlIH0gZnJvbSAncHRzJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWN0YW5nbGUgZW5jb21wYXNzaW5nIHNwYWNlXG4gKiBAcGFyYW0gIHNwYWNlIFRoZSBzcGFjZSBmb3IgdGhlIHJlY3RhbmdsZSB0byBjb3ZlclxuICogQHJldHVybiAgICAgICBUaGUgcmVzdWx0aW5nIHJlY3RhbmdsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnVsbFdpZHRoUmVjdChzcGFjZTogU3BhY2UpOiBHcm91cExpa2Uge1xuICByZXR1cm4gUmVjdGFuZ2xlLmZyb20oWzAsIDBdLCBzcGFjZS53aWR0aCwgc3BhY2UuaGVpZ2h0KVxufVxuIiwiZXhwb3J0IHsgQmFja2dyb3VuZFBhcnRpY2xlcyB9IGZyb20gJy4vQmFja2dyb3VuZFBhcnRpY2xlcydcbmV4cG9ydCB7IGZ1bGxXaWR0aFJlY3QgfSBmcm9tICcuL2Z1bGxXaWR0aFJlY3QnXG5leHBvcnQgeyByZ2JhRnJvbUhleCB9IGZyb20gJy4vcmdiYUZyb21IZXgnXG5leHBvcnQgeyBzb2xpZEJhY2tncm91bmQgfSBmcm9tICcuL3NvbGlkQmFja2dyb3VuZCdcbmV4cG9ydCB7IENvbXBvc2l0ZVN3aXRjaGVyIH0gZnJvbSAnLi9Db21wb3NpdGVTd2l0Y2hlcidcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAncHRzJ1xuXG4vKipcbiAqIENvbnZlcnRzIGEgaGV4IHdpdGggcHJvdmlkZWQgYWxwaGEgaW50byBSR0JBIHZhbHVlXG4gKiBAcGFyYW0gIGhleCAgIEhleCBjb2xvciBzdHJpbmdcbiAqIEBwYXJhbSAgYWxwaGEgQWxwaGEgdmFsdWVcbiAqIEByZXR1cm4gICAgICAgUkdCQSByZXByZXNlbnRhdGlvbiBvZiBwcm92aWRlZCB2YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJnYmFGcm9tSGV4KGhleDogc3RyaW5nLCBhbHBoYTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleClcbiAgY29sb3IuYWxwaGEgPSBhbHBoYVxuICByZXR1cm4gY29sb3IucmdiYVxufVxuIiwiaW1wb3J0IHR5cGUgeyBDYW52YXNTcGFjZSwgQ2FudmFzRm9ybSwgR3JvdXBMaWtlIH0gZnJvbSAncHRzJ1xuaW1wb3J0IHsgZnVsbFdpZHRoUmVjdCB9IGZyb20gJ3Rvb2xzJ1xuXG5leHBvcnQgZnVuY3Rpb24gc29saWRCYWNrZ3JvdW5kKFxuICBzcGFjZTogQ2FudmFzU3BhY2UsXG4gIGZvcm06IENhbnZhc0Zvcm0sXG4gIGNvbG9yOiBzdHJpbmdcbikge1xuICBsZXQgYmFja2dyb3VuZDogR3JvdXBMaWtlXG4gIHNwYWNlLmFkZCh7XG4gICAgc3RhcnQ6ICgpID0+IHtcbiAgICAgIGJhY2tncm91bmQgPSBmdWxsV2lkdGhSZWN0KHNwYWNlKVxuICAgIH0sXG4gICAgYW5pbWF0ZTogKCkgPT4ge1xuICAgICAgZm9ybS5maWxsKGNvbG9yKS5zdHJva2UoY29sb3IpLnJlY3QoYmFja2dyb3VuZClcbiAgICB9LFxuICB9KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=