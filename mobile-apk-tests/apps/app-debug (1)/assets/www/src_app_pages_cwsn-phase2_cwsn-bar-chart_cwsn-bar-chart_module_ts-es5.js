(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_cwsn-bar-chart_cwsn-bar-chart_module_ts"], {
    /***/
    92217:
    /*!**************************************************************************************!*\
      !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            plugin
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! chart.js/helpers */
      65886);
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.js */
      5803);
      /*!
       * chartjs-plugin-datalabels v2.2.0
       * https://chartjs-plugin-datalabels.netlify.app
       * (c) 2017-2022 chartjs-plugin-datalabels contributors
       * Released under the MIT license
       */


      var devicePixelRatio = function () {
        if (typeof window !== 'undefined') {
          if (window.devicePixelRatio) {
            return window.devicePixelRatio;
          } // devicePixelRatio is undefined on IE10
          // https://stackoverflow.com/a/20204180/8837887
          // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85


          var screen = window.screen;

          if (screen) {
            return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
          }
        }

        return 1;
      }();

      var utils = {
        // @todo move this in Chart.helpers.toTextLines
        toTextLines: function toTextLines(inputs) {
          var lines = [];
          var input;
          inputs = [].concat(inputs);

          while (inputs.length) {
            input = inputs.pop();

            if (typeof input === 'string') {
              lines.unshift.apply(lines, input.split('\n'));
            } else if (Array.isArray(input)) {
              inputs.push.apply(inputs, input);
            } else if (!(0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(inputs)) {
              lines.unshift('' + input);
            }
          }

          return lines;
        },
        // @todo move this in Chart.helpers.canvas.textSize
        // @todo cache calls of measureText if font doesn't change?!
        textSize: function textSize(ctx, lines, font) {
          var items = [].concat(lines);
          var ilen = items.length;
          var prev = ctx.font;
          var width = 0;
          var i;
          ctx.font = font.string;

          for (i = 0; i < ilen; ++i) {
            width = Math.max(ctx.measureText(items[i]).width, width);
          }

          ctx.font = prev;
          return {
            height: ilen * font.lineHeight,
            width: width
          };
        },

        /**
         * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
         * @todo move this method in Chart.helpers.bound
         * https://doc.qt.io/qt-5/qtglobal.html#qBound
         */
        bound: function bound(min, value, max) {
          return Math.max(min, Math.min(value, max));
        },

        /**
         * Returns an array of pair [value, state] where state is:
         * * -1: value is only in a0 (removed)
         * *  1: value is only in a1 (added)
         */
        arrayDiff: function arrayDiff(a0, a1) {
          var prev = a0.slice();
          var updates = [];
          var i, j, ilen, v;

          for (i = 0, ilen = a1.length; i < ilen; ++i) {
            v = a1[i];
            j = prev.indexOf(v);

            if (j === -1) {
              updates.push([v, 1]);
            } else {
              prev.splice(j, 1);
            }
          }

          for (i = 0, ilen = prev.length; i < ilen; ++i) {
            updates.push([prev[i], -1]);
          }

          return updates;
        },

        /**
         * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
         */
        rasterize: function rasterize(v) {
          return Math.round(v * devicePixelRatio) / devicePixelRatio;
        }
      };

      function orient(point, origin) {
        var x0 = origin.x;
        var y0 = origin.y;

        if (x0 === null) {
          return {
            x: 0,
            y: -1
          };
        }

        if (y0 === null) {
          return {
            x: 1,
            y: 0
          };
        }

        var dx = point.x - x0;
        var dy = point.y - y0;
        var ln = Math.sqrt(dx * dx + dy * dy);
        return {
          x: ln ? dx / ln : 0,
          y: ln ? dy / ln : -1
        };
      }

      function aligned(x, y, vx, vy, align) {
        switch (align) {
          case 'center':
            vx = vy = 0;
            break;

          case 'bottom':
            vx = 0;
            vy = 1;
            break;

          case 'right':
            vx = 1;
            vy = 0;
            break;

          case 'left':
            vx = -1;
            vy = 0;
            break;

          case 'top':
            vx = 0;
            vy = -1;
            break;

          case 'start':
            vx = -vx;
            vy = -vy;
            break;

          case 'end':
            // keep natural orientation
            break;

          default:
            // clockwise rotation (in degree)
            align *= Math.PI / 180;
            vx = Math.cos(align);
            vy = Math.sin(align);
            break;
        }

        return {
          x: x,
          y: y,
          vx: vx,
          vy: vy
        };
      } // Line clipping (Cohen–Sutherland algorithm)
      // https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm


      var R_INSIDE = 0;
      var R_LEFT = 1;
      var R_RIGHT = 2;
      var R_BOTTOM = 4;
      var R_TOP = 8;

      function region(x, y, rect) {
        var res = R_INSIDE;

        if (x < rect.left) {
          res |= R_LEFT;
        } else if (x > rect.right) {
          res |= R_RIGHT;
        }

        if (y < rect.top) {
          res |= R_TOP;
        } else if (y > rect.bottom) {
          res |= R_BOTTOM;
        }

        return res;
      }

      function clipped(segment, area) {
        var x0 = segment.x0;
        var y0 = segment.y0;
        var x1 = segment.x1;
        var y1 = segment.y1;
        var r0 = region(x0, y0, area);
        var r1 = region(x1, y1, area);
        var r, x, y; // eslint-disable-next-line no-constant-condition

        while (true) {
          if (!(r0 | r1) || r0 & r1) {
            // both points inside or on the same side: no clipping
            break;
          } // at least one point is outside


          r = r0 || r1;

          if (r & R_TOP) {
            x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
            y = area.top;
          } else if (r & R_BOTTOM) {
            x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
            y = area.bottom;
          } else if (r & R_RIGHT) {
            y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
            x = area.right;
          } else if (r & R_LEFT) {
            y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
            x = area.left;
          }

          if (r === r0) {
            x0 = x;
            y0 = y;
            r0 = region(x0, y0, area);
          } else {
            x1 = x;
            y1 = y;
            r1 = region(x1, y1, area);
          }
        }

        return {
          x0: x0,
          x1: x1,
          y0: y0,
          y1: y1
        };
      }

      function compute$1(range, config) {
        var anchor = config.anchor;
        var segment = range;
        var x, y;

        if (config.clamp) {
          segment = clipped(segment, config.area);
        }

        if (anchor === 'start') {
          x = segment.x0;
          y = segment.y0;
        } else if (anchor === 'end') {
          x = segment.x1;
          y = segment.y1;
        } else {
          x = (segment.x0 + segment.x1) / 2;
          y = (segment.y0 + segment.y1) / 2;
        }

        return aligned(x, y, range.vx, range.vy, config.align);
      }

      var positioners = {
        arc: function arc(el, config) {
          var angle = (el.startAngle + el.endAngle) / 2;
          var vx = Math.cos(angle);
          var vy = Math.sin(angle);
          var r0 = el.innerRadius;
          var r1 = el.outerRadius;
          return compute$1({
            x0: el.x + vx * r0,
            y0: el.y + vy * r0,
            x1: el.x + vx * r1,
            y1: el.y + vy * r1,
            vx: vx,
            vy: vy
          }, config);
        },
        point: function point(el, config) {
          var v = orient(el, config.origin);
          var rx = v.x * el.options.radius;
          var ry = v.y * el.options.radius;
          return compute$1({
            x0: el.x - rx,
            y0: el.y - ry,
            x1: el.x + rx,
            y1: el.y + ry,
            vx: v.x,
            vy: v.y
          }, config);
        },
        bar: function bar(el, config) {
          var v = orient(el, config.origin);
          var x = el.x;
          var y = el.y;
          var sx = 0;
          var sy = 0;

          if (el.horizontal) {
            x = Math.min(el.x, el.base);
            sx = Math.abs(el.base - el.x);
          } else {
            y = Math.min(el.y, el.base);
            sy = Math.abs(el.base - el.y);
          }

          return compute$1({
            x0: x,
            y0: y + sy,
            x1: x + sx,
            y1: y,
            vx: v.x,
            vy: v.y
          }, config);
        },
        fallback: function fallback(el, config) {
          var v = orient(el, config.origin);
          return compute$1({
            x0: el.x,
            y0: el.y,
            x1: el.x + (el.width || 0),
            y1: el.y + (el.height || 0),
            vx: v.x,
            vy: v.y
          }, config);
        }
      };
      var rasterize = utils.rasterize;

      function boundingRects(model) {
        var borderWidth = model.borderWidth || 0;
        var padding = model.padding;
        var th = model.size.height;
        var tw = model.size.width;
        var tx = -tw / 2;
        var ty = -th / 2;
        return {
          frame: {
            x: tx - padding.left - borderWidth,
            y: ty - padding.top - borderWidth,
            w: tw + padding.width + borderWidth * 2,
            h: th + padding.height + borderWidth * 2
          },
          text: {
            x: tx,
            y: ty,
            w: tw,
            h: th
          }
        };
      }

      function getScaleOrigin(el, context) {
        var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;

        if (!scale) {
          return null;
        }

        if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
          return {
            x: scale.xCenter,
            y: scale.yCenter
          };
        }

        var pixel = scale.getBasePixel();
        return el.horizontal ? {
          x: pixel,
          y: null
        } : {
          x: null,
          y: pixel
        };
      }

      function getPositioner(el) {
        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement) {
          return positioners.arc;
        }

        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement) {
          return positioners.point;
        }

        if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement) {
          return positioners.bar;
        }

        return positioners.fallback;
      }

      function drawRoundedRect(ctx, x, y, w, h, radius) {
        var HALF_PI = Math.PI / 2;

        if (radius) {
          var r = Math.min(radius, h / 2, w / 2);
          var left = x + r;
          var top = y + r;
          var right = x + w - r;
          var bottom = y + h - r;
          ctx.moveTo(x, top);

          if (left < right && top < bottom) {
            ctx.arc(left, top, r, -Math.PI, -HALF_PI);
            ctx.arc(right, top, r, -HALF_PI, 0);
            ctx.arc(right, bottom, r, 0, HALF_PI);
            ctx.arc(left, bottom, r, HALF_PI, Math.PI);
          } else if (left < right) {
            ctx.moveTo(left, y);
            ctx.arc(right, top, r, -HALF_PI, HALF_PI);
            ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
          } else if (top < bottom) {
            ctx.arc(left, top, r, -Math.PI, 0);
            ctx.arc(left, bottom, r, 0, Math.PI);
          } else {
            ctx.arc(left, top, r, -Math.PI, Math.PI);
          }

          ctx.closePath();
          ctx.moveTo(x, y);
        } else {
          ctx.rect(x, y, w, h);
        }
      }

      function drawFrame(ctx, rect, model) {
        var bgColor = model.backgroundColor;
        var borderColor = model.borderColor;
        var borderWidth = model.borderWidth;

        if (!bgColor && (!borderColor || !borderWidth)) {
          return;
        }

        ctx.beginPath();
        drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
        ctx.closePath();

        if (bgColor) {
          ctx.fillStyle = bgColor;
          ctx.fill();
        }

        if (borderColor && borderWidth) {
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = borderWidth;
          ctx.lineJoin = 'miter';
          ctx.stroke();
        }
      }

      function textGeometry(rect, align, font) {
        var h = font.lineHeight;
        var w = rect.w;
        var x = rect.x;
        var y = rect.y + h / 2;

        if (align === 'center') {
          x += w / 2;
        } else if (align === 'end' || align === 'right') {
          x += w;
        }

        return {
          h: h,
          w: w,
          x: x,
          y: y
        };
      }

      function drawTextLine(ctx, text, cfg) {
        var shadow = ctx.shadowBlur;
        var stroked = cfg.stroked;
        var x = rasterize(cfg.x);
        var y = rasterize(cfg.y);
        var w = rasterize(cfg.w);

        if (stroked) {
          ctx.strokeText(text, x, y, w);
        }

        if (cfg.filled) {
          if (shadow && stroked) {
            // Prevent drawing shadow on both the text stroke and fill, so
            // if the text is stroked, remove the shadow for the text fill.
            ctx.shadowBlur = 0;
          }

          ctx.fillText(text, x, y, w);

          if (shadow && stroked) {
            ctx.shadowBlur = shadow;
          }
        }
      }

      function drawText(ctx, lines, rect, model) {
        var align = model.textAlign;
        var color = model.color;
        var filled = !!color;
        var font = model.font;
        var ilen = lines.length;
        var strokeColor = model.textStrokeColor;
        var strokeWidth = model.textStrokeWidth;
        var stroked = strokeColor && strokeWidth;
        var i;

        if (!ilen || !filled && !stroked) {
          return;
        } // Adjust coordinates based on text alignment and line height


        rect = textGeometry(rect, align, font);
        ctx.font = font.string;
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.shadowBlur = model.textShadowBlur;
        ctx.shadowColor = model.textShadowColor;

        if (filled) {
          ctx.fillStyle = color;
        }

        if (stroked) {
          ctx.lineJoin = 'round';
          ctx.lineWidth = strokeWidth;
          ctx.strokeStyle = strokeColor;
        }

        for (i = 0, ilen = lines.length; i < ilen; ++i) {
          drawTextLine(ctx, lines[i], {
            stroked: stroked,
            filled: filled,
            w: rect.w,
            x: rect.x,
            y: rect.y + rect.h * i
          });
        }
      }

      var Label = function Label(config, ctx, el, index) {
        var me = this;
        me._config = config;
        me._index = index;
        me._model = null;
        me._rects = null;
        me._ctx = ctx;
        me._el = el;
      };

      (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(Label.prototype, {
        /**
         * @private
         */
        _modelize: function _modelize(display, lines, config, context) {
          var me = this;
          var index = me._index;
          var font = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toFont)((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.font, {}], context, index));
          var color = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.color, chart_js__WEBPACK_IMPORTED_MODULE_1__.defaults.color], context, index);
          return {
            align: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.align, 'center'], context, index),
            anchor: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.anchor, 'center'], context, index),
            area: context.chart.chartArea,
            backgroundColor: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.backgroundColor, null], context, index),
            borderColor: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderColor, null], context, index),
            borderRadius: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderRadius, 0], context, index),
            borderWidth: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderWidth, 0], context, index),
            clamp: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clamp, false], context, index),
            clip: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clip, false], context, index),
            color: color,
            display: display,
            font: font,
            lines: lines,
            offset: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.offset, 4], context, index),
            opacity: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.opacity, 1], context, index),
            origin: getScaleOrigin(me._el, context),
            padding: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toPadding)((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.padding, 4], context, index)),
            positioner: getPositioner(me._el),
            rotation: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.rotation, 0], context, index) * (Math.PI / 180),
            size: utils.textSize(me._ctx, lines, font),
            textAlign: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textAlign, 'start'], context, index),
            textShadowBlur: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowBlur, 0], context, index),
            textShadowColor: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowColor, color], context, index),
            textStrokeColor: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeColor, color], context, index),
            textStrokeWidth: (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeWidth, 0], context, index)
          };
        },
        update: function update(context) {
          var me = this;
          var model = null;
          var rects = null;
          var index = me._index;
          var config = me._config;
          var value, label, lines; // We first resolve the display option (separately) to avoid computing
          // other options in case the label is hidden (i.e. display: false).

          var display = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.display, true], context, index);

          if (display) {
            value = context.dataset.data[index];
            label = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault)((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(config.formatter, [value, context]), value);
            lines = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(label) ? [] : utils.toTextLines(label);

            if (lines.length) {
              model = me._modelize(display, lines, config, context);
              rects = boundingRects(model);
            }
          }

          me._model = model;
          me._rects = rects;
        },
        geometry: function geometry() {
          return this._rects ? this._rects.frame : {};
        },
        rotation: function rotation() {
          return this._model ? this._model.rotation : 0;
        },
        visible: function visible() {
          return this._model && this._model.opacity;
        },
        model: function model() {
          return this._model;
        },
        draw: function draw(chart, center) {
          var me = this;
          var ctx = chart.ctx;
          var model = me._model;
          var rects = me._rects;
          var area;

          if (!this.visible()) {
            return;
          }

          ctx.save();

          if (model.clip) {
            area = model.area;
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
          }

          ctx.globalAlpha = utils.bound(0, model.opacity, 1);
          ctx.translate(rasterize(center.x), rasterize(center.y));
          ctx.rotate(model.rotation);
          drawFrame(ctx, rects.frame, model);
          drawText(ctx, model.lines, rects.text, model);
          ctx.restore();
        }
      });
      var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger

      var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

      function rotated(point, center, angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var cx = center.x;
        var cy = center.y;
        return {
          x: cx + cos * (point.x - cx) - sin * (point.y - cy),
          y: cy + sin * (point.x - cx) + cos * (point.y - cy)
        };
      }

      function projected(points, axis) {
        var min = MAX_INTEGER;
        var max = MIN_INTEGER;
        var origin = axis.origin;
        var i, pt, vx, vy, dp;

        for (i = 0; i < points.length; ++i) {
          pt = points[i];
          vx = pt.x - origin.x;
          vy = pt.y - origin.y;
          dp = axis.vx * vx + axis.vy * vy;
          min = Math.min(min, dp);
          max = Math.max(max, dp);
        }

        return {
          min: min,
          max: max
        };
      }

      function toAxis(p0, p1) {
        var vx = p1.x - p0.x;
        var vy = p1.y - p0.y;
        var ln = Math.sqrt(vx * vx + vy * vy);
        return {
          vx: (p1.x - p0.x) / ln,
          vy: (p1.y - p0.y) / ln,
          origin: p0,
          ln: ln
        };
      }

      var HitBox = function HitBox() {
        this._rotation = 0;
        this._rect = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
      };

      (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(HitBox.prototype, {
        center: function center() {
          var r = this._rect;
          return {
            x: r.x + r.w / 2,
            y: r.y + r.h / 2
          };
        },
        update: function update(center, rect, rotation) {
          this._rotation = rotation;
          this._rect = {
            x: rect.x + center.x,
            y: rect.y + center.y,
            w: rect.w,
            h: rect.h
          };
        },
        contains: function contains(point) {
          var me = this;
          var margin = 1;
          var rect = me._rect;
          point = rotated(point, me.center(), -me._rotation);
          return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
        },
        // Separating Axis Theorem
        // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
        intersects: function intersects(other) {
          var r0 = this._points();

          var r1 = other._points();

          var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
          var i, pr0, pr1;

          if (this._rotation !== other._rotation) {
            // Only separate with r1 axis if the rotation is different,
            // else it's enough to separate r0 and r1 with r0 axis only!
            axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
          }

          for (i = 0; i < axes.length; ++i) {
            pr0 = projected(r0, axes[i]);
            pr1 = projected(r1, axes[i]);

            if (pr0.max < pr1.min || pr1.max < pr0.min) {
              return false;
            }
          }

          return true;
        },

        /**
         * @private
         */
        _points: function _points() {
          var me = this;
          var rect = me._rect;
          var angle = me._rotation;
          var center = me.center();
          return [rotated({
            x: rect.x,
            y: rect.y
          }, center, angle), rotated({
            x: rect.x + rect.w,
            y: rect.y
          }, center, angle), rotated({
            x: rect.x + rect.w,
            y: rect.y + rect.h
          }, center, angle), rotated({
            x: rect.x,
            y: rect.y + rect.h
          }, center, angle)];
        }
      });

      function coordinates(el, model, geometry) {
        var point = model.positioner(el, model);
        var vx = point.vx;
        var vy = point.vy;

        if (!vx && !vy) {
          // if aligned center, we don't want to offset the center point
          return {
            x: point.x,
            y: point.y
          };
        }

        var w = geometry.w;
        var h = geometry.h; // take in account the label rotation

        var rotation = model.rotation;
        var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
        var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation)); // scale the unit vector (vx, vy) to get at least dx or dy equal to
        // w or h respectively (else we would calculate the distance to the
        // ellipse inscribed in the bounding rect)

        var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
        dx *= vx * vs;
        dy *= vy * vs; // finally, include the explicit offset

        dx += model.offset * vx;
        dy += model.offset * vy;
        return {
          x: point.x + dx,
          y: point.y + dy
        };
      }

      function collide(labels, collider) {
        var i, j, s0, s1; // IMPORTANT Iterate in the reverse order since items at the end of the
        // list have an higher weight/priority and thus should be less impacted
        // by the overlapping strategy.

        for (i = labels.length - 1; i >= 0; --i) {
          s0 = labels[i].$layout;

          for (j = i - 1; j >= 0 && s0._visible; --j) {
            s1 = labels[j].$layout;

            if (s1._visible && s0._box.intersects(s1._box)) {
              collider(s0, s1);
            }
          }
        }

        return labels;
      }

      function compute(labels) {
        var i, ilen, label, state, geometry, center, proxy; // Initialize labels for overlap detection

        for (i = 0, ilen = labels.length; i < ilen; ++i) {
          label = labels[i];
          state = label.$layout;

          if (state._visible) {
            // Chart.js 3 removed el._model in favor of getProps(), making harder to
            // abstract reading values in positioners. Also, using string arrays to
            // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
            // positioners inefficient in the normal case (i.e. not the final values)
            // and the code a bit ugly, so let's use a Proxy instead.
            proxy = new Proxy(label._el, {
              get: function get(el, p) {
                return el.getProps([p], true)[p];
              }
            });
            geometry = label.geometry();
            center = coordinates(proxy, label.model(), geometry);

            state._box.update(center, geometry, label.rotation());
          }
        } // Auto hide overlapping labels


        return collide(labels, function (s0, s1) {
          var h0 = s0._hidable;
          var h1 = s1._hidable;

          if (h0 && h1 || h1) {
            s1._visible = false;
          } else if (h0) {
            s0._visible = false;
          }
        });
      }

      var layout = {
        prepare: function prepare(datasets) {
          var labels = [];
          var i, j, ilen, jlen, label;

          for (i = 0, ilen = datasets.length; i < ilen; ++i) {
            for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
              label = datasets[i][j];
              labels.push(label);
              label.$layout = {
                _box: new HitBox(),
                _hidable: false,
                _visible: true,
                _set: i,
                _idx: label._index
              };
            }
          } // TODO New `z` option: labels with a higher z-index are drawn
          // of top of the ones with a lower index. Lowest z-index labels
          // are also discarded first when hiding overlapping labels.


          labels.sort(function (a, b) {
            var sa = a.$layout;
            var sb = b.$layout;
            return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
          });
          this.update(labels);
          return labels;
        },
        update: function update(labels) {
          var dirty = false;
          var i, ilen, label, model, state;

          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            label = labels[i];
            model = label.model();
            state = label.$layout;
            state._hidable = model && model.display === 'auto';
            state._visible = label.visible();
            dirty |= state._hidable;
          }

          if (dirty) {
            compute(labels);
          }
        },
        lookup: function lookup(labels, point) {
          var i, state; // IMPORTANT Iterate in the reverse order since items at the end of
          // the list have an higher z-index, thus should be picked first.

          for (i = labels.length - 1; i >= 0; --i) {
            state = labels[i].$layout;

            if (state && state._visible && state._box.contains(point)) {
              return labels[i];
            }
          }

          return null;
        },
        draw: function draw(chart, labels) {
          var i, ilen, label, state, geometry, center;

          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            label = labels[i];
            state = label.$layout;

            if (state._visible) {
              geometry = label.geometry();
              center = coordinates(label._el, label.model(), geometry);

              state._box.update(center, geometry, label.rotation());

              label.draw(chart, center);
            }
          }
        }
      };

      var formatter = function formatter(value) {
        if ((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value)) {
          return null;
        }

        var label = value;
        var keys, klen, k;

        if ((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
          if (!(0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.label)) {
            label = value.label;
          } else if (!(0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.r)) {
            label = value.r;
          } else {
            label = '';
            keys = Object.keys(value);

            for (k = 0, klen = keys.length; k < klen; ++k) {
              label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
            }
          }
        }

        return '' + label;
      };
      /**
       * IMPORTANT: make sure to also update tests and TypeScript definition
       * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
       */


      var defaults = {
        align: 'center',
        anchor: 'center',
        backgroundColor: null,
        borderColor: null,
        borderRadius: 0,
        borderWidth: 0,
        clamp: false,
        clip: false,
        color: undefined,
        display: true,
        font: {
          family: undefined,
          lineHeight: 1.2,
          size: undefined,
          style: undefined,
          weight: null
        },
        formatter: formatter,
        labels: undefined,
        listeners: {},
        offset: 4,
        opacity: 1,
        padding: {
          top: 4,
          right: 4,
          bottom: 4,
          left: 4
        },
        rotation: 0,
        textAlign: 'start',
        textStrokeColor: undefined,
        textStrokeWidth: 0,
        textShadowBlur: 0,
        textShadowColor: undefined
      };
      /**
       * @see https://github.com/chartjs/Chart.js/issues/4176
       */

      var EXPANDO_KEY = '$datalabels';
      var DEFAULT_KEY = '$default';

      function configure(dataset, options) {
        var override = dataset.datalabels;
        var listeners = {};
        var configs = [];
        var labels, keys;

        if (override === false) {
          return null;
        }

        if (override === true) {
          override = {};
        }

        options = (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, override]);
        labels = options.labels || {};
        keys = Object.keys(labels);
        delete options.labels;

        if (keys.length) {
          keys.forEach(function (key) {
            if (labels[key]) {
              configs.push((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, labels[key], {
                _key: key
              }]));
            }
          });
        } else {
          // Default label if no "named" label defined.
          configs.push(options);
        } // listeners: {<event-type>: {<label-key>: <fn>}}


        listeners = configs.reduce(function (target, config) {
          (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.each)(config.listeners || {}, function (fn, event) {
            target[event] = target[event] || {};
            target[event][config._key || DEFAULT_KEY] = fn;
          });
          delete config.listeners;
          return target;
        }, {});
        return {
          labels: configs,
          listeners: listeners
        };
      }

      function dispatchEvent(chart, listeners, label, event) {
        if (!listeners) {
          return;
        }

        var context = label.$context;
        var groups = label.$groups;
        var callback$1;

        if (!listeners[groups._set]) {
          return;
        }

        callback$1 = listeners[groups._set][groups._key];

        if (!callback$1) {
          return;
        }

        if ((0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(callback$1, [context, event]) === true) {
          // Users are allowed to tweak the given context by injecting values that can be
          // used in scriptable options to display labels differently based on the current
          // event (e.g. highlight an hovered label). That's why we update the label with
          // the output context and schedule a new chart render by setting it dirty.
          chart[EXPANDO_KEY]._dirty = true;
          label.update(context);
        }
      }

      function dispatchMoveEvents(chart, listeners, previous, label, event) {
        var enter, leave;

        if (!previous && !label) {
          return;
        }

        if (!previous) {
          enter = true;
        } else if (!label) {
          leave = true;
        } else if (previous !== label) {
          leave = enter = true;
        }

        if (leave) {
          dispatchEvent(chart, listeners.leave, previous, event);
        }

        if (enter) {
          dispatchEvent(chart, listeners.enter, label, event);
        }
      }

      function handleMoveEvents(chart, event) {
        var expando = chart[EXPANDO_KEY];
        var listeners = expando._listeners;
        var previous, label;

        if (!listeners.enter && !listeners.leave) {
          return;
        }

        if (event.type === 'mousemove') {
          label = layout.lookup(expando._labels, event);
        } else if (event.type !== 'mouseout') {
          return;
        }

        previous = expando._hovered;
        expando._hovered = label;
        dispatchMoveEvents(chart, listeners, previous, label, event);
      }

      function handleClickEvents(chart, event) {
        var expando = chart[EXPANDO_KEY];
        var handlers = expando._listeners.click;
        var label = handlers && layout.lookup(expando._labels, event);

        if (label) {
          dispatchEvent(chart, handlers, label, event);
        }
      }

      var plugin = {
        id: 'datalabels',
        defaults: defaults,
        beforeInit: function beforeInit(chart) {
          chart[EXPANDO_KEY] = {
            _actives: []
          };
        },
        beforeUpdate: function beforeUpdate(chart) {
          var expando = chart[EXPANDO_KEY];
          expando._listened = false;
          expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}

          expando._datasets = []; // per dataset labels: [Label[]]

          expando._labels = []; // layouted labels: Label[]
        },
        afterDatasetUpdate: function afterDatasetUpdate(chart, args, options) {
          var datasetIndex = args.index;
          var expando = chart[EXPANDO_KEY];
          var labels = expando._datasets[datasetIndex] = [];
          var visible = chart.isDatasetVisible(datasetIndex);
          var dataset = chart.data.datasets[datasetIndex];
          var config = configure(dataset, options);
          var elements = args.meta.data || [];
          var ctx = chart.ctx;
          var i, j, ilen, jlen, cfg, key, el, label;
          ctx.save();

          for (i = 0, ilen = elements.length; i < ilen; ++i) {
            el = elements[i];
            el[EXPANDO_KEY] = [];

            if (visible && el && chart.getDataVisibility(i) && !el.skip) {
              for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
                cfg = config.labels[j];
                key = cfg._key;
                label = new Label(cfg, ctx, el, i);
                label.$groups = {
                  _set: datasetIndex,
                  _key: key || DEFAULT_KEY
                };
                label.$context = {
                  active: false,
                  chart: chart,
                  dataIndex: i,
                  dataset: dataset,
                  datasetIndex: datasetIndex
                };
                label.update(label.$context);
                el[EXPANDO_KEY].push(label);
                labels.push(label);
              }
            }
          }

          ctx.restore(); // Store listeners at the chart level and per event type to optimize
          // cases where no listeners are registered for a specific event.

          (0, chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(expando._listeners, config.listeners, {
            merger: function merger(event, target, source) {
              target[event] = target[event] || {};
              target[event][args.index] = source[event];
              expando._listened = true;
            }
          });
        },
        afterUpdate: function afterUpdate(chart) {
          chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
        },
        // Draw labels on top of all dataset elements
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
        afterDatasetsDraw: function afterDatasetsDraw(chart) {
          layout.draw(chart, chart[EXPANDO_KEY]._labels);
        },
        beforeEvent: function beforeEvent(chart, args) {
          // If there is no listener registered for this chart, `listened` will be false,
          // meaning we can immediately ignore the incoming event and avoid useless extra
          // computation for users who don't implement label interactions.
          if (chart[EXPANDO_KEY]._listened) {
            var event = args.event;

            switch (event.type) {
              case 'mousemove':
              case 'mouseout':
                handleMoveEvents(chart, event);
                break;

              case 'click':
                handleClickEvents(chart, event);
                break;
            }
          }
        },
        afterEvent: function afterEvent(chart) {
          var expando = chart[EXPANDO_KEY];
          var previous = expando._actives;
          var actives = expando._actives = chart.getActiveElements();
          var updates = utils.arrayDiff(previous, actives);
          var i, ilen, j, jlen, update, label, labels;

          for (i = 0, ilen = updates.length; i < ilen; ++i) {
            update = updates[i];

            if (update[1]) {
              labels = update[0].element[EXPANDO_KEY] || [];

              for (j = 0, jlen = labels.length; j < jlen; ++j) {
                label = labels[j];
                label.$context.active = update[1] === 1;
                label.update(label.$context);
              }
            }
          }

          if (expando._dirty || updates.length) {
            layout.update(expando._labels);
            chart.render();
          }

          delete expando._dirty;
        }
      };
      /***/
    },

    /***/
    57249:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnBarChartPageRoutingModule": function CwsnBarChartPageRoutingModule() {
          return (
            /* binding */
            _CwsnBarChartPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _cwsn_bar_chart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-bar-chart.page */
      43803);

      var routes = [{
        path: '',
        component: _cwsn_bar_chart_page__WEBPACK_IMPORTED_MODULE_0__.CwsnBarChartPage
      }];

      var _CwsnBarChartPageRoutingModule = /*#__PURE__*/_createClass(function CwsnBarChartPageRoutingModule() {
        _classCallCheck(this, CwsnBarChartPageRoutingModule);
      });

      _CwsnBarChartPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CwsnBarChartPageRoutingModule);
      /***/
    },

    /***/
    19031:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnBarChartPageModule": function CwsnBarChartPageModule() {
          return (
            /* binding */
            _CwsnBarChartPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cwsn_bar_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-bar-chart-routing.module */
      57249);
      /* harmony import */


      var _cwsn_bar_chart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-bar-chart.page */
      43803);

      var _CwsnBarChartPageModule = /*#__PURE__*/_createClass(function CwsnBarChartPageModule() {
        _classCallCheck(this, CwsnBarChartPageModule);
      });

      _CwsnBarChartPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cwsn_bar_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnBarChartPageRoutingModule],
        declarations: [_cwsn_bar_chart_page__WEBPACK_IMPORTED_MODULE_1__.CwsnBarChartPage]
      })], _CwsnBarChartPageModule);
      /***/
    },

    /***/
    43803:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnBarChartPage": function CwsnBarChartPage() {
          return (
            /* binding */
            _CwsnBarChartPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cwsn_bar_chart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cwsn-bar-chart.page.html */
      3104);
      /* harmony import */


      var _cwsn_bar_chart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-bar-chart.page.scss */
      20061);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! chart.js/auto */
      6625);
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      92217);

      var _CwsnBarChartPage = /*#__PURE__*/function () {
        function CwsnBarChartPage(router) {
          _classCallCheck(this, CwsnBarChartPage);

          this.router = router;
        }

        return _createClass(CwsnBarChartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.createBarChart();
          }
        }, {
          key: "createBarChart",
          value: function createBarChart() {
            var pluginOptions = {
              datalabels: {
                anchor: 'start',
                align: 'start',
                display: true
              },
              title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
              }
            };
            this.barChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](this.barCanvas.nativeElement, {
              type: 'bar',
              data: {
                labels: ['Sensory', 'Motor & Mobility', 'Cognition & Sensory Integration', 'Communication & Social Skill', 'Assistive Device'],
                datasets: [{
                  label: 'Archived',
                  data: [12, 55, 3, 65, 2, 3],
                  backgroundColor: '#8B66B3',
                  borderWidth: 1
                }, {
                  label: 'Need Intervention',
                  data: [7, 11, 5, 8, 83, 6],
                  backgroundColor: '#E10B91',
                  borderWidth: 1
                }, {
                  label: 'Total Goals',
                  data: [0, 0, 0, 0, 0, 0],
                  backgroundColor: '#15B10A',
                  borderWidth: 1
                }]
              },
              options: {
                // plugins: pluginOptions,
                interaction: {
                  intersect: false
                },
                responsive: true,
                scales: {
                  x: {
                    stacked: true
                  },
                  y: {
                    stacked: true
                  }
                }
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/home']);
          }
        }]);
      }();

      _CwsnBarChartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _CwsnBarChartPage.propDecorators = {
        barCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: ['barCanvas']
        }]
      };
      _CwsnBarChartPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cwsn-bar-chart',
        template: _raw_loader_cwsn_bar_chart_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cwsn_bar_chart_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CwsnBarChartPage);
      /***/
    },

    /***/
    82710:
    /*!************************************************!*\
      !*** ./node_modules/chart.js/dist/helpers.mjs ***!
      \************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HALF_PI": function HALF_PI() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.H
          );
        },

        /* harmony export */
        "INFINITY": function INFINITY() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b1
          );
        },

        /* harmony export */
        "PI": function PI() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.P
          );
        },

        /* harmony export */
        "PITAU": function PITAU() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b0
          );
        },

        /* harmony export */
        "QUARTER_PI": function QUARTER_PI() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b3
          );
        },

        /* harmony export */
        "RAD_PER_DEG": function RAD_PER_DEG() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b2
          );
        },

        /* harmony export */
        "TAU": function TAU() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.T
          );
        },

        /* harmony export */
        "TWO_THIRDS_PI": function TWO_THIRDS_PI() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b4
          );
        },

        /* harmony export */
        "_addGrace": function _addGrace() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.D
          );
        },

        /* harmony export */
        "_alignPixel": function _alignPixel() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.J
          );
        },

        /* harmony export */
        "_alignStartEnd": function _alignStartEnd() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.S
          );
        },

        /* harmony export */
        "_angleBetween": function _angleBetween() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.p
          );
        },

        /* harmony export */
        "_angleDiff": function _angleDiff() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b5
          );
        },

        /* harmony export */
        "_arrayUnique": function _arrayUnique() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__._
          );
        },

        /* harmony export */
        "_attachContext": function _attachContext() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a9
          );
        },

        /* harmony export */
        "_bezierCurveTo": function _bezierCurveTo() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.at
          );
        },

        /* harmony export */
        "_bezierInterpolation": function _bezierInterpolation() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aq
          );
        },

        /* harmony export */
        "_boundSegment": function _boundSegment() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ay
          );
        },

        /* harmony export */
        "_boundSegments": function _boundSegments() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ao
          );
        },

        /* harmony export */
        "_capitalize": function _capitalize() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.W
          );
        },

        /* harmony export */
        "_computeSegments": function _computeSegments() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.an
          );
        },

        /* harmony export */
        "_createResolver": function _createResolver() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aa
          );
        },

        /* harmony export */
        "_decimalPlaces": function _decimalPlaces() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aL
          );
        },

        /* harmony export */
        "_deprecated": function _deprecated() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aU
          );
        },

        /* harmony export */
        "_descriptors": function _descriptors() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ab
          );
        },

        /* harmony export */
        "_elementsEqual": function _elementsEqual() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ai
          );
        },

        /* harmony export */
        "_factorize": function _factorize() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.A
          );
        },

        /* harmony export */
        "_filterBetween": function _filterBetween() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aN
          );
        },

        /* harmony export */
        "_getParentNode": function _getParentNode() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a2
          );
        },

        /* harmony export */
        "_getStartAndCountOfVisiblePoints": function _getStartAndCountOfVisiblePoints() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.q
          );
        },

        /* harmony export */
        "_int16Range": function _int16Range() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.I
          );
        },

        /* harmony export */
        "_isBetween": function _isBetween() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ak
          );
        },

        /* harmony export */
        "_isClickEvent": function _isClickEvent() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aj
          );
        },

        /* harmony export */
        "_isDomSupported": function _isDomSupported() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a6
          );
        },

        /* harmony export */
        "_isPointInArea": function _isPointInArea() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.$
          );
        },

        /* harmony export */
        "_limitValue": function _limitValue() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.E
          );
        },

        /* harmony export */
        "_longestText": function _longestText() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aM
          );
        },

        /* harmony export */
        "_lookup": function _lookup() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aO
          );
        },

        /* harmony export */
        "_lookupByKey": function _lookupByKey() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Z
          );
        },

        /* harmony export */
        "_measureText": function _measureText() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.G
          );
        },

        /* harmony export */
        "_merger": function _merger() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aS
          );
        },

        /* harmony export */
        "_mergerIf": function _mergerIf() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aT
          );
        },

        /* harmony export */
        "_normalizeAngle": function _normalizeAngle() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.az
          );
        },

        /* harmony export */
        "_parseObjectDataRadialScale": function _parseObjectDataRadialScale() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.y
          );
        },

        /* harmony export */
        "_pointInLine": function _pointInLine() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ar
          );
        },

        /* harmony export */
        "_readValueToProps": function _readValueToProps() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.al
          );
        },

        /* harmony export */
        "_rlookupByKey": function _rlookupByKey() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Y
          );
        },

        /* harmony export */
        "_scaleRangesChanged": function _scaleRangesChanged() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.w
          );
        },

        /* harmony export */
        "_setMinAndMaxByKey": function _setMinAndMaxByKey() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aH
          );
        },

        /* harmony export */
        "_splitKey": function _splitKey() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aV
          );
        },

        /* harmony export */
        "_steppedInterpolation": function _steppedInterpolation() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ap
          );
        },

        /* harmony export */
        "_steppedLineTo": function _steppedLineTo() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.as
          );
        },

        /* harmony export */
        "_textX": function _textX() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aC
          );
        },

        /* harmony export */
        "_toLeftRightCenter": function _toLeftRightCenter() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.R
          );
        },

        /* harmony export */
        "_updateBezierControlPoints": function _updateBezierControlPoints() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.am
          );
        },

        /* harmony export */
        "addRoundedRectPath": function addRoundedRectPath() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.av
          );
        },

        /* harmony export */
        "almostEquals": function almostEquals() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aK
          );
        },

        /* harmony export */
        "almostWhole": function almostWhole() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aJ
          );
        },

        /* harmony export */
        "callback": function callback() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.C
          );
        },

        /* harmony export */
        "clearCanvas": function clearCanvas() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ag
          );
        },

        /* harmony export */
        "clipArea": function clipArea() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.L
          );
        },

        /* harmony export */
        "clone": function clone() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aR
          );
        },

        /* harmony export */
        "color": function color() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.c
          );
        },

        /* harmony export */
        "createContext": function createContext() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.h
          );
        },

        /* harmony export */
        "debounce": function debounce() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ae
          );
        },

        /* harmony export */
        "defined": function defined() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.j
          );
        },

        /* harmony export */
        "distanceBetweenPoints": function distanceBetweenPoints() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aG
          );
        },

        /* harmony export */
        "drawPoint": function drawPoint() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.au
          );
        },

        /* harmony export */
        "drawPointLegend": function drawPointLegend() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aE
          );
        },

        /* harmony export */
        "each": function each() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.Q
          );
        },

        /* harmony export */
        "easingEffects": function easingEffects() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.e
          );
        },

        /* harmony export */
        "finiteOrDefault": function finiteOrDefault() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.B
          );
        },

        /* harmony export */
        "fontString": function fontString() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a_
          );
        },

        /* harmony export */
        "formatNumber": function formatNumber() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.o
          );
        },

        /* harmony export */
        "getAngleFromPoint": function getAngleFromPoint() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a0
          );
        },

        /* harmony export */
        "getHoverColor": function getHoverColor() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aQ
          );
        },

        /* harmony export */
        "getMaximumSize": function getMaximumSize() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a1
          );
        },

        /* harmony export */
        "getRelativePosition": function getRelativePosition() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.X
          );
        },

        /* harmony export */
        "getRtlAdapter": function getRtlAdapter() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aA
          );
        },

        /* harmony export */
        "getStyle": function getStyle() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aZ
          );
        },

        /* harmony export */
        "isArray": function isArray() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.b
          );
        },

        /* harmony export */
        "isFinite": function isFinite() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.g
          );
        },

        /* harmony export */
        "isFunction": function isFunction() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a8
          );
        },

        /* harmony export */
        "isNullOrUndef": function isNullOrUndef() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.k
          );
        },

        /* harmony export */
        "isNumber": function isNumber() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.x
          );
        },

        /* harmony export */
        "isObject": function isObject() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.i
          );
        },

        /* harmony export */
        "isPatternOrGradient": function isPatternOrGradient() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aP
          );
        },

        /* harmony export */
        "listenArrayEvents": function listenArrayEvents() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.l
          );
        },

        /* harmony export */
        "log10": function log10() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.z
          );
        },

        /* harmony export */
        "merge": function merge() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.V
          );
        },

        /* harmony export */
        "mergeIf": function mergeIf() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ac
          );
        },

        /* harmony export */
        "niceNum": function niceNum() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aI
          );
        },

        /* harmony export */
        "noop": function noop() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aF
          );
        },

        /* harmony export */
        "overrideTextDirection": function overrideTextDirection() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aB
          );
        },

        /* harmony export */
        "readUsedSize": function readUsedSize() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a3
          );
        },

        /* harmony export */
        "renderText": function renderText() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.M
          );
        },

        /* harmony export */
        "requestAnimFrame": function requestAnimFrame() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.r
          );
        },

        /* harmony export */
        "resolve": function resolve() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a
          );
        },

        /* harmony export */
        "resolveObjectKey": function resolveObjectKey() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.f
          );
        },

        /* harmony export */
        "restoreTextDirection": function restoreTextDirection() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aD
          );
        },

        /* harmony export */
        "retinaScale": function retinaScale() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.af
          );
        },

        /* harmony export */
        "setsEqual": function setsEqual() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ah
          );
        },

        /* harmony export */
        "sign": function sign() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.s
          );
        },

        /* harmony export */
        "splineCurve": function splineCurve() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aX
          );
        },

        /* harmony export */
        "splineCurveMonotone": function splineCurveMonotone() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aY
          );
        },

        /* harmony export */
        "supportsEventListenerOptions": function supportsEventListenerOptions() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a5
          );
        },

        /* harmony export */
        "throttled": function throttled() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a4
          );
        },

        /* harmony export */
        "toDegrees": function toDegrees() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.F
          );
        },

        /* harmony export */
        "toDimension": function toDimension() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.n
          );
        },

        /* harmony export */
        "toFont": function toFont() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.O
          );
        },

        /* harmony export */
        "toFontString": function toFontString() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aW
          );
        },

        /* harmony export */
        "toLineHeight": function toLineHeight() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.a$
          );
        },

        /* harmony export */
        "toPadding": function toPadding() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.K
          );
        },

        /* harmony export */
        "toPercentage": function toPercentage() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.m
          );
        },

        /* harmony export */
        "toRadians": function toRadians() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.t
          );
        },

        /* harmony export */
        "toTRBL": function toTRBL() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.aw
          );
        },

        /* harmony export */
        "toTRBLCorners": function toTRBLCorners() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ax
          );
        },

        /* harmony export */
        "uid": function uid() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.ad
          );
        },

        /* harmony export */
        "unclipArea": function unclipArea() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.N
          );
        },

        /* harmony export */
        "unlistenArrayEvents": function unlistenArrayEvents() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.u
          );
        },

        /* harmony export */
        "valueOrDefault": function valueOrDefault() {
          return (
            /* reexport safe */
            _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__.v
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _chunks_helpers_segment_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chunks/helpers.segment.mjs */
      36615);
      /*!
       * Chart.js v3.9.1
       * https://www.chartjs.org
       * (c) 2022 Chart.js Contributors
       * Released under the MIT License
       */

      /***/

    },

    /***/
    65886:
    /*!***************************************************!*\
      !*** ./node_modules/chart.js/helpers/helpers.mjs ***!
      \***************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HALF_PI": function HALF_PI() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.HALF_PI
          );
        },

        /* harmony export */
        "INFINITY": function INFINITY() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.INFINITY
          );
        },

        /* harmony export */
        "PI": function PI() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.PI
          );
        },

        /* harmony export */
        "PITAU": function PITAU() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.PITAU
          );
        },

        /* harmony export */
        "QUARTER_PI": function QUARTER_PI() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.QUARTER_PI
          );
        },

        /* harmony export */
        "RAD_PER_DEG": function RAD_PER_DEG() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.RAD_PER_DEG
          );
        },

        /* harmony export */
        "TAU": function TAU() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.TAU
          );
        },

        /* harmony export */
        "TWO_THIRDS_PI": function TWO_THIRDS_PI() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.TWO_THIRDS_PI
          );
        },

        /* harmony export */
        "_addGrace": function _addGrace() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._addGrace
          );
        },

        /* harmony export */
        "_alignPixel": function _alignPixel() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._alignPixel
          );
        },

        /* harmony export */
        "_alignStartEnd": function _alignStartEnd() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._alignStartEnd
          );
        },

        /* harmony export */
        "_angleBetween": function _angleBetween() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._angleBetween
          );
        },

        /* harmony export */
        "_angleDiff": function _angleDiff() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._angleDiff
          );
        },

        /* harmony export */
        "_arrayUnique": function _arrayUnique() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._arrayUnique
          );
        },

        /* harmony export */
        "_attachContext": function _attachContext() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._attachContext
          );
        },

        /* harmony export */
        "_bezierCurveTo": function _bezierCurveTo() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._bezierCurveTo
          );
        },

        /* harmony export */
        "_bezierInterpolation": function _bezierInterpolation() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._bezierInterpolation
          );
        },

        /* harmony export */
        "_boundSegment": function _boundSegment() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._boundSegment
          );
        },

        /* harmony export */
        "_boundSegments": function _boundSegments() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._boundSegments
          );
        },

        /* harmony export */
        "_capitalize": function _capitalize() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._capitalize
          );
        },

        /* harmony export */
        "_computeSegments": function _computeSegments() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._computeSegments
          );
        },

        /* harmony export */
        "_createResolver": function _createResolver() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._createResolver
          );
        },

        /* harmony export */
        "_decimalPlaces": function _decimalPlaces() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._decimalPlaces
          );
        },

        /* harmony export */
        "_deprecated": function _deprecated() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._deprecated
          );
        },

        /* harmony export */
        "_descriptors": function _descriptors() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._descriptors
          );
        },

        /* harmony export */
        "_elementsEqual": function _elementsEqual() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._elementsEqual
          );
        },

        /* harmony export */
        "_factorize": function _factorize() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._factorize
          );
        },

        /* harmony export */
        "_filterBetween": function _filterBetween() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._filterBetween
          );
        },

        /* harmony export */
        "_getParentNode": function _getParentNode() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._getParentNode
          );
        },

        /* harmony export */
        "_getStartAndCountOfVisiblePoints": function _getStartAndCountOfVisiblePoints() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._getStartAndCountOfVisiblePoints
          );
        },

        /* harmony export */
        "_int16Range": function _int16Range() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._int16Range
          );
        },

        /* harmony export */
        "_isBetween": function _isBetween() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._isBetween
          );
        },

        /* harmony export */
        "_isClickEvent": function _isClickEvent() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._isClickEvent
          );
        },

        /* harmony export */
        "_isDomSupported": function _isDomSupported() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._isDomSupported
          );
        },

        /* harmony export */
        "_isPointInArea": function _isPointInArea() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._isPointInArea
          );
        },

        /* harmony export */
        "_limitValue": function _limitValue() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._limitValue
          );
        },

        /* harmony export */
        "_longestText": function _longestText() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._longestText
          );
        },

        /* harmony export */
        "_lookup": function _lookup() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._lookup
          );
        },

        /* harmony export */
        "_lookupByKey": function _lookupByKey() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._lookupByKey
          );
        },

        /* harmony export */
        "_measureText": function _measureText() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._measureText
          );
        },

        /* harmony export */
        "_merger": function _merger() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._merger
          );
        },

        /* harmony export */
        "_mergerIf": function _mergerIf() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._mergerIf
          );
        },

        /* harmony export */
        "_normalizeAngle": function _normalizeAngle() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._normalizeAngle
          );
        },

        /* harmony export */
        "_parseObjectDataRadialScale": function _parseObjectDataRadialScale() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._parseObjectDataRadialScale
          );
        },

        /* harmony export */
        "_pointInLine": function _pointInLine() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._pointInLine
          );
        },

        /* harmony export */
        "_readValueToProps": function _readValueToProps() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._readValueToProps
          );
        },

        /* harmony export */
        "_rlookupByKey": function _rlookupByKey() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._rlookupByKey
          );
        },

        /* harmony export */
        "_scaleRangesChanged": function _scaleRangesChanged() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._scaleRangesChanged
          );
        },

        /* harmony export */
        "_setMinAndMaxByKey": function _setMinAndMaxByKey() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._setMinAndMaxByKey
          );
        },

        /* harmony export */
        "_splitKey": function _splitKey() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._splitKey
          );
        },

        /* harmony export */
        "_steppedInterpolation": function _steppedInterpolation() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._steppedInterpolation
          );
        },

        /* harmony export */
        "_steppedLineTo": function _steppedLineTo() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._steppedLineTo
          );
        },

        /* harmony export */
        "_textX": function _textX() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._textX
          );
        },

        /* harmony export */
        "_toLeftRightCenter": function _toLeftRightCenter() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._toLeftRightCenter
          );
        },

        /* harmony export */
        "_updateBezierControlPoints": function _updateBezierControlPoints() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__._updateBezierControlPoints
          );
        },

        /* harmony export */
        "addRoundedRectPath": function addRoundedRectPath() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.addRoundedRectPath
          );
        },

        /* harmony export */
        "almostEquals": function almostEquals() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.almostEquals
          );
        },

        /* harmony export */
        "almostWhole": function almostWhole() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.almostWhole
          );
        },

        /* harmony export */
        "callback": function callback() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.callback
          );
        },

        /* harmony export */
        "clearCanvas": function clearCanvas() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.clearCanvas
          );
        },

        /* harmony export */
        "clipArea": function clipArea() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.clipArea
          );
        },

        /* harmony export */
        "clone": function clone() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.clone
          );
        },

        /* harmony export */
        "color": function color() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.color
          );
        },

        /* harmony export */
        "createContext": function createContext() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.createContext
          );
        },

        /* harmony export */
        "debounce": function debounce() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.debounce
          );
        },

        /* harmony export */
        "defined": function defined() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.defined
          );
        },

        /* harmony export */
        "distanceBetweenPoints": function distanceBetweenPoints() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.distanceBetweenPoints
          );
        },

        /* harmony export */
        "drawPoint": function drawPoint() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.drawPoint
          );
        },

        /* harmony export */
        "drawPointLegend": function drawPointLegend() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.drawPointLegend
          );
        },

        /* harmony export */
        "each": function each() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.each
          );
        },

        /* harmony export */
        "easingEffects": function easingEffects() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.easingEffects
          );
        },

        /* harmony export */
        "finiteOrDefault": function finiteOrDefault() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.finiteOrDefault
          );
        },

        /* harmony export */
        "fontString": function fontString() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.fontString
          );
        },

        /* harmony export */
        "formatNumber": function formatNumber() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.formatNumber
          );
        },

        /* harmony export */
        "getAngleFromPoint": function getAngleFromPoint() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getAngleFromPoint
          );
        },

        /* harmony export */
        "getHoverColor": function getHoverColor() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getHoverColor
          );
        },

        /* harmony export */
        "getMaximumSize": function getMaximumSize() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getMaximumSize
          );
        },

        /* harmony export */
        "getRelativePosition": function getRelativePosition() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getRelativePosition
          );
        },

        /* harmony export */
        "getRtlAdapter": function getRtlAdapter() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getRtlAdapter
          );
        },

        /* harmony export */
        "getStyle": function getStyle() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.getStyle
          );
        },

        /* harmony export */
        "isArray": function isArray() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isArray
          );
        },

        /* harmony export */
        "isFinite": function isFinite() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isFinite
          );
        },

        /* harmony export */
        "isFunction": function isFunction() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isFunction
          );
        },

        /* harmony export */
        "isNullOrUndef": function isNullOrUndef() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef
          );
        },

        /* harmony export */
        "isNumber": function isNumber() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isNumber
          );
        },

        /* harmony export */
        "isObject": function isObject() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isObject
          );
        },

        /* harmony export */
        "isPatternOrGradient": function isPatternOrGradient() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.isPatternOrGradient
          );
        },

        /* harmony export */
        "listenArrayEvents": function listenArrayEvents() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.listenArrayEvents
          );
        },

        /* harmony export */
        "log10": function log10() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.log10
          );
        },

        /* harmony export */
        "merge": function merge() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.merge
          );
        },

        /* harmony export */
        "mergeIf": function mergeIf() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.mergeIf
          );
        },

        /* harmony export */
        "niceNum": function niceNum() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.niceNum
          );
        },

        /* harmony export */
        "noop": function noop() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.noop
          );
        },

        /* harmony export */
        "overrideTextDirection": function overrideTextDirection() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.overrideTextDirection
          );
        },

        /* harmony export */
        "readUsedSize": function readUsedSize() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.readUsedSize
          );
        },

        /* harmony export */
        "renderText": function renderText() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.renderText
          );
        },

        /* harmony export */
        "requestAnimFrame": function requestAnimFrame() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.requestAnimFrame
          );
        },

        /* harmony export */
        "resolve": function resolve() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.resolve
          );
        },

        /* harmony export */
        "resolveObjectKey": function resolveObjectKey() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveObjectKey
          );
        },

        /* harmony export */
        "restoreTextDirection": function restoreTextDirection() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.restoreTextDirection
          );
        },

        /* harmony export */
        "retinaScale": function retinaScale() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.retinaScale
          );
        },

        /* harmony export */
        "setsEqual": function setsEqual() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.setsEqual
          );
        },

        /* harmony export */
        "sign": function sign() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.sign
          );
        },

        /* harmony export */
        "splineCurve": function splineCurve() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.splineCurve
          );
        },

        /* harmony export */
        "splineCurveMonotone": function splineCurveMonotone() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.splineCurveMonotone
          );
        },

        /* harmony export */
        "supportsEventListenerOptions": function supportsEventListenerOptions() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsEventListenerOptions
          );
        },

        /* harmony export */
        "throttled": function throttled() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.throttled
          );
        },

        /* harmony export */
        "toDegrees": function toDegrees() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toDegrees
          );
        },

        /* harmony export */
        "toDimension": function toDimension() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toDimension
          );
        },

        /* harmony export */
        "toFont": function toFont() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toFont
          );
        },

        /* harmony export */
        "toFontString": function toFontString() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toFontString
          );
        },

        /* harmony export */
        "toLineHeight": function toLineHeight() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toLineHeight
          );
        },

        /* harmony export */
        "toPadding": function toPadding() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toPadding
          );
        },

        /* harmony export */
        "toPercentage": function toPercentage() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toPercentage
          );
        },

        /* harmony export */
        "toRadians": function toRadians() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toRadians
          );
        },

        /* harmony export */
        "toTRBL": function toTRBL() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toTRBL
          );
        },

        /* harmony export */
        "toTRBLCorners": function toTRBLCorners() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.toTRBLCorners
          );
        },

        /* harmony export */
        "uid": function uid() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.uid
          );
        },

        /* harmony export */
        "unclipArea": function unclipArea() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.unclipArea
          );
        },

        /* harmony export */
        "unlistenArrayEvents": function unlistenArrayEvents() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.unlistenArrayEvents
          );
        },

        /* harmony export */
        "valueOrDefault": function valueOrDefault() {
          return (
            /* reexport safe */
            _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dist_helpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dist/helpers.mjs */
      82710);
      /***/

    },

    /***/
    20061:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartDiv {\n  padding: 5px;\n  border-radius: 15px;\n  border: 1px solid #f5f5f5;\n  margin: 15px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tYmFyLWNoYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY3dzbi1iYXItY2hhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0RGl2e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    3104:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of clusters (CA Cluster)</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: #E6DDEB;\">\r\n  <div class=\"chartDiv\">\r\n    <canvas #barCanvas height=\"400px\"></canvas>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_cwsn-bar-chart_cwsn-bar-chart_module_ts-es5.js.map