(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["common"], {
    /***/
    68225:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      39461);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    27069:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      71567);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!delegate) {
                  _context.n = 1;
                  break;
                }

                return _context.a(2, delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 1:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.n = 2;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 2:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.n = 3;
                return new Promise(function (resolve) {
                  return (0, _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                });

              case 3:
                return _context.a(2, el);
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator().m(function _callee2(url, ev, direction, animation) {
          var router;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.n = 1;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.n = 1;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.a(2, router.push(url, direction, animation));

              case 1:
                return _context2.a(2, false);
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    74352:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/commonpages/summarypopuppage/summarypopuppage.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummarypopuppagePage": function SummarypopuppagePage() {
          return (
            /* binding */
            _SummarypopuppagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summarypopuppage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summarypopuppage.page.html */
      12288);
      /* harmony import */


      var _summarypopuppage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summarypopuppage.page.scss */
      19294);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _view_image_view_image_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);

      var _SummarypopuppagePage = /*#__PURE__*/function () {
        function SummarypopuppagePage(uploadService, modalCtrl, alertService, navParams) {
          _classCallCheck(this, SummarypopuppagePage);

          this.uploadService = uploadService;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.navParams = navParams;
        }

        return _createClass(SummarypopuppagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reportname = this.navParams.get('reportname');
            this.schoolname = this.navParams.get('schoolname');
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "openDateModal",
          value: function openDateModal(item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this = this;

              var bucketName, filename, expiry;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    if (item.image) {
                      bucketName = "renewalapplicationemis";
                      filename = item.image;
                      expiry = 1800;
                      this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                          var modal;
                          return _regenerator().w(function (_context3) {
                            while (1) switch (_context3.n) {
                              case 0:
                                console.log(item.date_ts);

                                if (!result) {
                                  _context3.n = 3;
                                  break;
                                }

                                _context3.n = 1;
                                return this.modalCtrl.create({
                                  component: _view_image_view_image_page__WEBPACK_IMPORTED_MODULE_2__.ViewImagePage,
                                  componentProps: {
                                    image: result.url
                                  },
                                  cssClass: 'view-image-modal_capturedimage'
                                });

                              case 1:
                                modal = _context3.v;
                                _context3.n = 2;
                                return modal.present();

                              case 2:
                                _context3.n = 4;
                                break;

                              case 3:
                                this.alertService.error('Error while getting image');

                              case 4:
                                return _context3.a(2);
                            }
                          }, _callee3, this);
                        }));
                      });
                    } else {
                      this.alertService.warning('No data found');
                    }

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addWatermark",
          value: function addWatermark(imageUrl, watermarkText) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    return _context5.a(2, new Promise(function (resolve, reject) {
                      var img = new Image();
                      img.crossOrigin = "Anonymous"; // To avoid CORS issues

                      img.src = imageUrl;

                      img.onload = function () {
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");

                        if (!ctx) {
                          reject("Canvas context not available");
                          return;
                        } // Set canvas size to match the image


                        canvas.width = img.width;
                        canvas.height = img.height; // Draw the original image

                        ctx.drawImage(img, 0, 0); // Set watermark properties

                        ctx.font = "bold 40px Arial";
                        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // Semi-transparent white

                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle"; // Position watermark at the bottom-right corner

                        var x = canvas.width - 150;
                        var y = canvas.height - 50; // Draw watermark text

                        ctx.fillText(watermarkText, x, y); // Convert canvas to image URL

                        resolve(canvas.toDataURL("image/png"));
                      };

                      img.onerror = function (error) {
                        return reject(error);
                      };
                    }));
                }
              }, _callee5);
            }));
          }
        }]);
      }();

      _SummarypopuppagePage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }];
      };

      _SummarypopuppagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-summarypopuppage',
        template: _raw_loader_summarypopuppage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summarypopuppage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummarypopuppagePage);
      /***/
    },

    /***/
    80795:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-attend-filter/cwsn-attend-filter.page.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnAttendFilterPage": function CwsnAttendFilterPage() {
          return (
            /* binding */
            _CwsnAttendFilterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cwsn_attend_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cwsn-attend-filter.page.html */
      2299);
      /* harmony import */


      var _cwsn_attend_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-attend-filter.page.scss */
      39602);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! html2canvas */
      20977);
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service */
      90110);

      var _CwsnAttendFilterPage = /*#__PURE__*/function () {
        function CwsnAttendFilterPage(router, modalCtrl, cWSNService, datePipe, alertService, loaderSerivce, alertCtrl, userSessionService) {
          _classCallCheck(this, CwsnAttendFilterPage);

          this.router = router;
          this.modalCtrl = modalCtrl;
          this.cWSNService = cWSNService;
          this.datePipe = datePipe;
          this.alertService = alertService;
          this.loaderSerivce = loaderSerivce;
          this.alertCtrl = alertCtrl;
          this.userSessionService = userSessionService;
          this.attenHistory = [];
          this.filteredHistory = [];
        }

        return _createClass(CwsnAttendFilterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.todayDate = new Date().toISOString().split('T')[0];
            this.userId = this.userSessionService.emis_username();
            this.teacherName = this.userSessionService.teacher_name();
          }
        }, {
          key: "filterHistory",
          value: function filterHistory() {
            var _this2 = this;

            if (this.fromDate && this.toDate) {
              this.cWSNService.CwsnAttendDate(this.userId, this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate, 'yyyy-MM-dd')).subscribe(function (res) {
                if (res.dataStatus) {
                  _this2.filteredHistory = res.result;
                } else {
                  _this2.alertService.error(res.message);
                }
              });
            } else {
              this.alertService.error("Please select date");
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.fromDate = "";
            this.toDate = "";
            this.modalCtrl.dismiss();
          }
        }, {
          key: "getPDF",
          value: function getPDF() {
            var _this3 = this;

            debugger;

            if (!Array.isArray(this.filteredHistory)) {
              console.error('filteredHistory is not a valid array');
              return;
            }

            var data = document.getElementById('pdfContent');
            if (!data) return;
            this.loaderSerivce.presentLoadingTillDismiss();
            data.style.display = 'block';

            if (data) {
              html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(data, {
                scale: 1,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff'
              }).then(function (canvas) {
                var imgData = canvas.toDataURL('image/png');
                var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('p', 'mm', 'a4');
                var imgProps = pdf.getImageProperties(imgData);
                var pdfWidth = pdf.internal.pageSize.getWidth();
                var pdfHeight = imgProps.height * pdfWidth / imgProps.width;
                var formattedDate = "".concat(_this3.datePipe.transform(_this3.fromDate, 'yyyy-MM-dd'), " to ").concat(_this3.datePipe.transform(_this3.toDate, 'yyyy-MM-dd'));
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(formattedDate + '_Attendance.pdf');
              })["finally"](function () {
                data.style.display = 'none';
                _this3.loaderSerivce.isLoading = false;

                _this3.loaderSerivce.dismissLoader();
              });
            }
          }
        }]);
      }();

      _CwsnAttendFilterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_7__.LoaderServiceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }];
      };

      _CwsnAttendFilterPage.propDecorators = {
        pdfContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: ['pdfContent']
        }]
      };
      _CwsnAttendFilterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-cwsn-attend-filter',
        template: _raw_loader_cwsn_attend_filter_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cwsn_attend_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CwsnAttendFilterPage);
      /***/
    },

    /***/
    95829:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/cwsn/disability-screening/disability-screening-routing.module.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisabilityScreeningPageRoutingModule": function DisabilityScreeningPageRoutingModule() {
          return (
            /* binding */
            _DisabilityScreeningPageRoutingModule
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


      var _disability_screening_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./disability-screening.page */
      21439);

      var routes = [{
        path: '',
        component: _disability_screening_page__WEBPACK_IMPORTED_MODULE_0__.DisabilityScreeningPage
      }];

      var _DisabilityScreeningPageRoutingModule = /*#__PURE__*/_createClass(function DisabilityScreeningPageRoutingModule() {
        _classCallCheck(this, DisabilityScreeningPageRoutingModule);
      });

      _DisabilityScreeningPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DisabilityScreeningPageRoutingModule);
      /***/
    },

    /***/
    40042:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/cwsn/disability-screening/disability-screening.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DisabilityScreeningPageModule": function DisabilityScreeningPageModule() {
          return (
            /* binding */
            _DisabilityScreeningPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _disability_screening_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./disability-screening-routing.module */
      95829);
      /* harmony import */


      var _disability_screening_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./disability-screening.page */
      21439);
      /* harmony import */


      var _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../commonpages/dynamic-form-table/dynamic-form-table.module */
      41721);
      /* harmony import */


      var _pop_screened_student_pop_screened_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pop-screened-student/pop-screened-student.component */
      96154);

      var _DisabilityScreeningPageModule = /*#__PURE__*/_createClass(function DisabilityScreeningPageModule() {
        _classCallCheck(this, DisabilityScreeningPageModule);
      });

      _DisabilityScreeningPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _disability_screening_routing_module__WEBPACK_IMPORTED_MODULE_0__.DisabilityScreeningPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormTablePageModule],
        declarations: [_disability_screening_page__WEBPACK_IMPORTED_MODULE_1__.DisabilityScreeningPage, _pop_screened_student_pop_screened_student_component__WEBPACK_IMPORTED_MODULE_3__.PopScreenedStudentComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        exports: [_disability_screening_page__WEBPACK_IMPORTED_MODULE_1__.DisabilityScreeningPage],
        providers: [_disability_screening_page__WEBPACK_IMPORTED_MODULE_1__.DisabilityScreeningPage]
      })], _DisabilityScreeningPageModule);
      /***/
    },

    /***/
    96154:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cwsn/pop-screened-student/pop-screened-student.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopScreenedStudentComponent": function PopScreenedStudentComponent() {
          return (
            /* binding */
            _PopScreenedStudentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_pop_screened_student_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pop-screened-student.component.html */
      38511);
      /* harmony import */


      var _pop_screened_student_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pop-screened-student.component.scss */
      85701);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PopScreenedStudentComponent = /*#__PURE__*/function () {
        function PopScreenedStudentComponent(modalController) {
          _classCallCheck(this, PopScreenedStudentComponent);

          this.modalController = modalController;
        }

        return _createClass(PopScreenedStudentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // dismiss() {
          //   this.modalController.dismiss();
          // }

        }, {
          key: "dismiss",
          value: function dismiss() {
            alert("Close button clicked");
            this.modalController.dismiss();
          }
        }]);
      }();

      _PopScreenedStudentComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _PopScreenedStudentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-pop-screened-student",
        template: _raw_loader_pop_screened_student_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pop_screened_student_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PopScreenedStudentComponent);
      /***/
    },

    /***/
    42966:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/services/dynamicform.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DynamicformService": function DynamicformService() {
          return (
            /* binding */
            _DynamicformService
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


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/data.service */
      52468);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019); // import { environment } from 'src/environments/environment';


      var _DynamicformService = /*#__PURE__*/function () {
        function DynamicformService(dataService) {
          _classCallCheck(this, DynamicformService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.emisApiUrl;
          this.emisApiUrl3 = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.emisApiUrl3;
        }

        return _createClass(DynamicformService, [{
          key: "DynmcFrmAnswrSave",
          value: function DynmcFrmAnswrSave(data) {
            return this.dataService.post(this.emisApiUrl3 + '/DynmcFrmAnswrSave', data);
          }
        }, {
          key: "jsonFetch",
          value: function jsonFetch(id) {
            return this.dataService.getData(this.emisApiUrl3 + '/JSONfetch?id=' + id, true);
          }
        }, {
          key: "get_data_set",
          value: function get_data_set(data) {
            return this.dataService.post(this.emisApiUrl3 + '/get_data_set', data);
          }
        }]);
      }();

      _DynamicformService.ctorParameters = function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }];
      };

      _DynamicformService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DynamicformService);
      /***/
    },

    /***/
    10467:
    /*!************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/view-pdf/view-pdf.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPdfPage": function ViewPdfPage() {
          return (
            /* binding */
            _ViewPdfPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./view-pdf.page.html */
      84460);
      /* harmony import */


      var _view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-pdf.page.scss */
      52755);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ViewPdfPage = /*#__PURE__*/function () {
        function ViewPdfPage(sanitizer, modalCtrl, navParams) {
          _classCallCheck(this, ViewPdfPage);

          this.sanitizer = sanitizer;
          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.noOfLikes = 0;
          this.noOfDisLikes = 0;
          this.likeClass = ['like-button'];
          this.likeState = '';
          this.iconColor = '#000';
          this.zoom = 1.0;
          this.originalSize = true;
        }

        return _createClass(ViewPdfPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.extension = this.navParams.get('extension');
            this.imageURL = this.navParams.get('image');
            this.src = this.imageURL;
            this.ext = this.extension.toLowerCase();
          }
        }, {
          key: "incrementZoom",
          value: function incrementZoom(amount) {
            this.zoom += amount;
          }
        }, {
          key: "zoom_in",
          value: function zoom_in() {
            this.zoom_to = this.zoom_to + 0.25;
          }
        }, {
          key: "zoom_out",
          value: function zoom_out() {
            if (this.zoom_to > 1) {
              this.zoom_to = this.zoom_to - 0.25;
            }
          }
        }, {
          key: "getPDFUrl",
          value: function getPDFUrl() {
            var url = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.URL, this.imageURL.toString());
            var embedurl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            return embedurl;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);
      }();

      _ViewPdfPage.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }];
      };

      _ViewPdfPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-view-pdf',
        template: _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewPdfPage);
      /***/
    },

    /***/
    19584:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup.page.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservModelpopupPage": function SchoolObservModelpopupPage() {
          return (
            /* binding */
            _SchoolObservModelpopupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_observ_modelpopup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-observ-modelpopup.page.html */
      51401);
      /* harmony import */


      var _school_observ_modelpopup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-observ-modelpopup.page.scss */
      92900);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _SchoolObservModelpopupPage = /*#__PURE__*/function () {
        function SchoolObservModelpopupPage(modalCtrl, navParams) {
          _classCallCheck(this, SchoolObservModelpopupPage);

          var _a;

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.schoolClassData = this.navParams.get('schoolClassData');
          this.clusterId = this.schoolClassData.id;
          this.clusterName = this.schoolClassData.name;
          this.clusterBlock = this.schoolClassData.block;
          this.schoolList = this.schoolClassData.pending;
          this.compleSchool = this.schoolClassData.completed;
          this.schoollength = (_a = this.schoolList) === null || _a === void 0 ? void 0 : _a.length;
          console.log(this.schoollength);
          console.log(this.schoolClassData);
          console.log(this.schoolList);
        }

        return _createClass(SchoolObservModelpopupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);
      }();

      _SchoolObservModelpopupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _SchoolObservModelpopupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-school-observ-modelpopup',
        template: _raw_loader_school_observ_modelpopup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_observ_modelpopup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolObservModelpopupPage);
      /***/
    },

    /***/
    21645:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/services/loader/ion-loader.service.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IonLoaderService": function IonLoaderService() {
          return (
            /* binding */
            _IonLoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _IonLoaderService = /*#__PURE__*/function () {
        function IonLoaderService(loadingController) {
          _classCallCheck(this, IonLoaderService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(IonLoaderService, [{
          key: "simpleLoader",
          value: function simpleLoader() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this4 = this;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    this.isLoading = true;
                    _context6.n = 1;
                    return this.loadingController.create({
                      // duration: 5000,
                      message: 'Loading...'
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this4.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 1:
                    return _context6.a(2, _context6.v);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    this.isLoading = false;
                    _context7.n = 1;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 1:
                    return _context7.a(2, _context7.v);
                }
              }, _callee7, this);
            }));
          }
        }]);
      }();

      _IonLoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _IonLoaderService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _IonLoaderService);
      /***/
    },

    /***/
    13756:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mht/mht-view-modal/mht-view-modal.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MhtViewModalPage": function MhtViewModalPage() {
          return (
            /* binding */
            _MhtViewModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_mht_view_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mht-view-modal.page.html */
      51564);
      /* harmony import */


      var _mht_view_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mht-view-modal.page.scss */
      6210);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/diagnosis.service */
      10293);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _MhtViewModalPage = /*#__PURE__*/function () {
        function MhtViewModalPage(usersessionService, alert, router, modalCtrl, alertService, diagnosisService) {
          _classCallCheck(this, MhtViewModalPage);

          this.usersessionService = usersessionService;
          this.alert = alert;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.alertService = alertService;
          this.diagnosisService = diagnosisService;
          this.diagnoses = [];
          this.fltDiagnosis = [];
          this.disabledItems = [];
          this.UserName = this.usersessionService.emis_username();
          this.diagnoses = this.diagnosisService.getDiagnoses();
        }

        return _createClass(MhtViewModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this5 = this;

            var checkViewType = localStorage.getItem('viewType');
            this.jsonData = '';

            if (checkViewType && checkViewType != undefined) {
              this.jsonData = JSON.parse(checkViewType);
              this.filterBy = this.jsonData.type;
              this.filterDiagnosis = this.jsonData.diagnosis;

              if (this.filterBy != '2') {
                if (this.filterBy == '1') {
                  this.fltDiagnosis = [{
                    type: this.filterBy,
                    value: 'All',
                    label: "All",
                    selected: false
                  }].concat(_toConsumableArray(this.diagnoses));

                  if (this.filterDiagnosis.length == 0) {
                    this.filterDiagnosis.push({
                      type: this.filterBy,
                      value: 'All',
                      label: "All"
                    });
                  }
                } else {
                  this.fltDiagnosis = [{
                    type: this.filterBy,
                    value: 'All',
                    label: "All"
                  }].concat(_toConsumableArray(this.diagnoses.filter(function (item) {
                    return item.type === _this5.filterBy;
                  })));

                  if (this.filterDiagnosis.length == 0) {
                    this.filterDiagnosis.push({
                      type: this.filterBy,
                      value: 'All',
                      label: "All"
                    });
                  }
                }

                this.onSelectionChange2();
              } else {
                this.fltDiagnosis = [];
              }
            }
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.modalCtrl.dismiss();

            if (this.jsonData && this.jsonData != undefined) {
              this.router.navigate(['/tabs/school-list-mht']);
            } else {
              this.router.navigate(['/tabs/home']);
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            var obj = {};

            if (this.filterBy) {
              if (this.filterBy != '2') {
                if (this.filterDiagnosis[0].value === 'All') {
                  obj = {
                    type: this.filterBy,
                    diagnosis: []
                  };
                } else {
                  obj = {
                    type: this.filterBy,
                    diagnosis: this.filterDiagnosis
                  };
                }

                this.modalCtrl.dismiss(obj); // Dismiss the modal
              } else if (this.filterBy == '2') {
                obj = {
                  type: this.filterBy,
                  diagnosis: []
                };
                this.modalCtrl.dismiss(obj); // Dismiss the modal
              } else {
                this.alertService.warning("Please select the diagnosis");
              }
            } else {
              this.alertService.warning("Please select the field");
            }
          }
        }, {
          key: "selectFilterBy",
          value: function selectFilterBy() {
            var _this6 = this;

            this.filterDiagnosis = [];
            this.fltDiagnosis = [];

            if (this.filterBy != 1) {
              this.fltDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }].concat(_toConsumableArray(this.diagnoses.filter(function (item) {
                return item.type === _this6.filterBy;
              })));
            } else {
              this.fltDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }].concat(_toConsumableArray(this.diagnoses));
            }

            this.onSelectionChange2();
          }
        }, {
          key: "onSelectionChange",
          value: function onSelectionChange(event, ionicSelectable) {
            if (event.isSelected === true && event.item.value === 'All') {
              this.filterDiagnosis = [];
              this.filterDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }];
              this.disabledItems = this.fltDiagnosis.filter(function (item) {
                return item.value !== 'All';
              });
              ionicSelectable.close();
            } else {
              this.disabledItems = [];
            }
          }
        }, {
          key: "onSelectionChange2",
          value: function onSelectionChange2() {
            if (this.filterDiagnosis.some(function (item) {
              return item.value === 'All';
            })) {
              this.filterDiagnosis = [{
                type: this.filterBy,
                value: 'All',
                label: "All"
              }]; // Reset selection to only "All"

              this.disabledItems = this.fltDiagnosis.filter(function (item) {
                return item.value !== 'All';
              });
            } else {
              this.disabledItems = [];
            }
          }
        }]);
      }();

      _MhtViewModalPage.ctorParameters = function () {
        return [{
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_3__.DiagnosisService
        }];
      };

      _MhtViewModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mht-view-modal',
        template: _raw_loader_mht_view_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mht_view_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MhtViewModalPage);
      /***/
    },

    /***/
    463:
    /*!************************************************************!*\
      !*** ./src/app/pages/stem_new/auto-slot/auto-slot.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutoSlotPage": function AutoSlotPage() {
          return (
            /* binding */
            _AutoSlotPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_auto_slot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./auto-slot.page.html */
      85672);
      /* harmony import */


      var _auto_slot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auto-slot.page.scss */
      62525);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);

      var _AutoSlotPage = /*#__PURE__*/function () {
        function AutoSlotPage(modalCtrl, navParams, userService, router) {
          _classCallCheck(this, AutoSlotPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.userService = userService;
          this.router = router;
        }

        return _createClass(AutoSlotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.schoolClassData = this.navParams.get('schoolClassData');
            this.school_name = this.navParams.get('school_name');
            this.slot = this.navParams.get('slot');
            this.school_id = this.navParams.get('school_id');
            this.item = this.navParams.get('item');
            this.startdate = this.navParams.get('startdate');
            this.enddate = this.navParams.get('enddate');
            this.statusMode = this.navParams.get('statusMode');
            this.cycleNo = this.navParams.get('cycle');
            this.eventenddate = this.navParams.get('eventenddate');
            this.eventstartdate = this.navParams.get('eventstartdate');
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this7 = this;

            for (var i = 0; i < this.schoolClassData.length; i++) {
              var data1 = {
                "IndexId": "",
                "ProgramType": "3",
                "UserId": this.schoolClassData[i].user_id,
                "SchoolId": this.school_id,
                "PlanningDate": this.schoolClassData[i].planning_date,
                "Session": this.schoolClassData[i].session,
                "CycleId": this.cycleNo,
                "Type": '2'
              };
              var data = {
                "records": data1
              };
              this.userService.slotData(data).subscribe(function (response) {
                _this7.router.navigate(['/tabs/school-schedule'], {
                  queryParams: {
                    "item": _this7.item,
                    "startdate": _this7.startdate,
                    "enddate": _this7.enddate,
                    "eventstartdate": _this7.eventstartdate,
                    "eventenddate": _this7.eventenddate,
                    'statusMode': _this7.statusMode,
                    'cycle': _this7.cycleNo
                  }
                });

                _this7.modalCtrl.dismiss();
              });
            }
          }
        }]);
      }();

      _AutoSlotPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _AutoSlotPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-auto-slot',
        template: _raw_loader_auto_slot_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auto_slot_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AutoSlotPage); //**********  By Malini */  

      /***/
    },

    /***/
    15907:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/class-sec-list/class-sec-list.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassSecListPage": function ClassSecListPage() {
          return (
            /* binding */
            _ClassSecListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_class_sec_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./class-sec-list.page.html */
      75619);
      /* harmony import */


      var _class_sec_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./class-sec-list.page.scss */
      82414);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ClassSecListPage = /*#__PURE__*/function () {
        function ClassSecListPage(modalCtrl, navParams) {
          _classCallCheck(this, ClassSecListPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.schoolClassData = this.navParams.get('schoolClassData');
        }

        return _createClass(ClassSecListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);
      }();

      _ClassSecListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _ClassSecListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-class-sec-list',
        template: _raw_loader_class_sec_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_class_sec_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClassSecListPage);
      /***/
    },

    /***/
    51747:
    /*!*************************************************!*\
      !*** ./src/app/pages/view-pdf/view-pdf.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPdfPage": function ViewPdfPage() {
          return (
            /* binding */
            _ViewPdfPage2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./view-pdf.page.html */
      72176);
      /* harmony import */


      var _view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-pdf.page.scss */
      33997);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);

      var _ViewPdfPage2 = /*#__PURE__*/function () {
        function ViewPdfPage(domsaintizer, loader, modalController, navParams) {
          _classCallCheck(this, ViewPdfPage);

          this.domsaintizer = domsaintizer;
          this.loader = loader;
          this.modalController = modalController;
          this.navParams = navParams;
          this.show = false;
        }

        return _createClass(ViewPdfPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.filename = '';
            this.filename = this.navParams.get('image');
            this.Heading = this.navParams.get('name');
            this.loader.show();
            this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.filename);
            setTimeout(function () {}, 5000);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);
      }();

      _ViewPdfPage2.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }];
      };

      _ViewPdfPage2.propDecorators = {
        filename: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }],
        Heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }]
      };
      _ViewPdfPage2 = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-pdf',
        template: _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewPdfPage2);
      /***/
    },

    /***/
    63987:
    /*!*****************************************************!*\
      !*** ./src/app/services/emis/regulatory.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegulatoryService": function RegulatoryService() {
          return (
            /* binding */
            _RegulatoryService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      52468);

      var _RegulatoryService = /*#__PURE__*/function () {
        function RegulatoryService(dataService) {
          _classCallCheck(this, RegulatoryService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
        }

        return _createClass(RegulatoryService, [{
          key: "toGetRCIndex",
          value: function toGetRCIndex(data) {
            return this.dataService.post(this.emisApiUrl + '/RCSectn', data).map(function (res) {
              return res;
            });
          }
        }, {
          key: "toGetRCForm",
          value: function toGetRCForm(data) {
            return this.dataService.post(this.emisApiUrl + '/RCQuestChce', data).map(function (res) {
              return res;
            });
          }
        }, {
          key: "toGetRCFormquestion",
          value: function toGetRCFormquestion(data) {
            return this.dataService.post(this.emisApiUrl + '/rc_get_questions', data).map(function (res) {
              return res;
            });
          }
        }, {
          key: "toGetAppList",
          value: function toGetAppList() {
            return this.dataService.getData(this.emisApiUrl + '/RCInfoList', true);
          }
        }, {
          key: "saveRC",
          value: function saveRC(data) {
            return this.dataService.post(this.emisApiUrl + '/RCInsert', data).map(function (res) {
              return res;
            });
            ;
          }
        }, {
          key: "overallsaveRC",
          value: function overallsaveRC(data) {
            return this.dataService.post(this.emisApiUrl + '/final_deo_submit', data).map(function (res) {
              return res;
            });
            ;
          }
        }, {
          key: "rejectForm",
          value: function rejectForm(data) {
            return this.dataService.post(this.emisApiUrl + '/RCMobStatus', data).map(function (res) {
              return res;
            });
            ;
          }
        }, {
          key: "cancelForm",
          value: function cancelForm(data) {
            return this.dataService.post(this.emisApiUrl + '/cancel_application', data).map(function (res) {
              return res;
            });
            ;
          }
        }, {
          key: "otpSubmit",
          value: function otpSubmit(data) {
            return this.dataService.post(this.emisApiUrl + '/OfclRCOTPVerfictn', data).map(function (res) {
              return res;
            });
            ;
          }
        }, {
          key: "otpverifySubmit",
          value: function otpverifySubmit(data) {
            return this.dataService.post(this.emisApiUrl + '/RCOTPValidatn', data).map(function (res) {
              return res;
            });
          }
        }]);
      }();

      _RegulatoryService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _RegulatoryService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _RegulatoryService);
      /***/
    },

    /***/
    95357:
    /*!***************************************************************************************!*\
      !*** ./src/app/services/tnvn/services/common_Provider/toast-service/toast.service.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ToastService = /*#__PURE__*/function () {
        function ToastService(toastCtrl, alertCtrl) {
          _classCallCheck(this, ToastService);

          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
        }

        return _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(msg, color) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var toast;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: this.getColor(color)
                    });

                  case 1:
                    toast = _context8.v;
                    _context8.n = 2;
                    return toast.present();

                  case 2:
                    return _context8.a(2, _context8.v);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "presentToastWithOptions",
          value: function presentToastWithOptions(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var toast;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    _context9.n = 1;
                    return this.toastCtrl.create({
                      header: 'Toast header',
                      message: msg,
                      position: 'top',
                      buttons: [{
                        side: 'start',
                        icon: 'star',
                        text: 'Favorite',
                        handler: function handler() {}
                      }, {
                        text: 'Done',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 1:
                    toast = _context9.v;
                    _context9.n = 2;
                    return toast.present();

                  case 2:
                    return _context9.a(2, _context9.v);
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "setAlertForUpdateCheck",
          value: function setAlertForUpdateCheck(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var alert, result;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    _context0.n = 1;
                    return this.alertCtrl.create({
                      header: header,
                      backdropDismiss: false,
                      message: message,
                      buttons: [{
                        text: 'Ok',
                        role: 'ok',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          alert.dismiss('ok');
                          return false;
                        }
                      }]
                    });

                  case 1:
                    alert = _context0.v;
                    _context0.n = 2;
                    return alert.present();

                  case 2:
                    _context0.n = 3;
                    return alert.onDidDismiss();

                  case 3:
                    result = _context0.v;
                    return _context0.a(2, result);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "setAlert",
          value: function setAlert(title_name, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
              var alert;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    _context1.n = 1;
                    return this.alertCtrl.create({
                      header: title_name,
                      message: msg,
                      cssClass: 'buttoncss',
                      buttons: [{
                        text: 'No',
                        cssClass: 'btnNo',
                        handler: function handler() {
                          alert.dismiss(false);
                          return false;
                        }
                      }, {
                        text: 'Yes',
                        cssClass: 'btnYes',
                        handler: function handler() {
                          alert.dismiss('s');
                          return false;
                        }
                      }]
                    });

                  case 1:
                    alert = _context1.v;
                    return _context1.a(2, alert);
                }
              }, _callee1, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
              var alert, result;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    _context10.n = 1;
                    return this.alertCtrl.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          alert.dismiss('cancel');
                          return false;
                        }
                      }, {
                        text: 'Okay',
                        role: 'okay',
                        handler: function handler() {
                          alert.dismiss('okay');
                          return false;
                        }
                      }]
                    });

                  case 1:
                    alert = _context10.v;
                    _context10.n = 2;
                    return alert.present();

                  case 2:
                    _context10.n = 3;
                    return alert.onDidDismiss();

                  case 3:
                    result = _context10.v;
                    return _context10.a(2, result);
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getColor",
          value: function getColor(color) {
            switch (color) {
              case 'success':
                return 'primary';

              case 'warning':
                return 'warning';

              case 'error':
                return 'danger';

              case 'success_green':
                return 'secondary';

              case 'dark':
                return 'dark';

              default:
                return '';
            }
          }
        }]);
      }();

      _ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
        }];
      };

      _ToastService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ToastService);
      /***/
    },

    /***/
    62538:
    /*!********************************************************!*\
      !*** ./src/app/services/tnvn/services/post.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostService": function PostService() {
          return (
            /* binding */
            _PostService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PostService = /*#__PURE__*/_createClass(function PostService() {
        var _this8 = this;

        _classCallCheck(this, PostService);

        this.setFinalInfo = function (globalObject) {
          _this8.finalData = globalObject;
        };

        this.getFinalInfo = function () {
          return _this8.finalData;
        };
      });

      _PostService.ctorParameters = function () {
        return [];
      };

      _PostService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _PostService);
      /***/
    },

    /***/
    89019:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        awsApiUrl: "https://5388d2qb88.execute-api.ap-south-1.amazonaws.com/MobilePrd",
        civilapiBaseUrl: "https://sqs.ap-south-1.amazonaws.com/840620226347/MAppMonitoring",
        readFileUrl: "https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl",
        writeFileUrl: "https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-preurl",
        loginUrl: "https://emislogin.tnschools.gov.in/emis_login/api",
        emisApiUrl: "https://emis4.tnschools.gov.in/api",
        api_url: "https://emis4.tnschools.gov.in/api/",
        emisApiUrl1: "https://emis1.tnschools.gov.in/api",
        emisApiUrlWeb: "https://emis1.tnschools.gov.in/api",
        emisApiUrl3: "https://emis3.tnschools.gov.in/api",
        tntpApiUrl: "https://tntp-staging.tnschools.gov.in/api",
        emisApiUrlJango1: "https://mobileapi.tnsed.com/api/mobile",
        // ImgUrl:'https://d1mvc33dlzwoi9.cloudfront.net/',
        ImgUrl: "https://d24di8ui084m6v.cloudfront.net/",
        BaseLineJSONStaging: "question_type_staging_1.json",
        BaseLineJSONLive: "question_type_1.json",
        FormativeJSONStaging: "",
        FormativeJSONLive: "question_type_2.json",
        SummativeJSONLive: "question_type_4.json",
        tokenEndPoint: "/api/token",
        production: true,
        dataInterval: 10000,
        cwsn_asses_ques: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_asses_ques_prod_json.json",
        cwsn_intervensions_phase2: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_intervensions_phase2.json",
        cwsn_diff_able_json: "https://d1wpyxz35bzzz4.cloudfront.net/dif_able/cwsn_diff_able_json.json" // cwsn_asses_ques: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_asses_ques_stage_json.json",
        // cwsn_intervensions_phase2: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_intervensions_phase2_stage.json"

      };
      /***/
    },

    /***/
    19294:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/commonpages/summarypopuppage/summarypopuppage.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n}\n\nth, td {\n  padding: 12px;\n  border: 1px solid #ddd;\n}\n\nth {\n  background-color: #f4f4f4;\n  font-weight: bold;\n}\n\ntd {\n  font-size: 16px;\n}\n\n.main {\n  padding: 16px;\n  margin-top: 30px;\n}\n\n.main img {\n  /* max-width: 100%; */\n  height: auto;\n}\n\n.button {\n  width: 300px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnlwb3B1cHBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFFTjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoic3VtbWFyeXBvcHVwcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLm1haW4gaW1nIHtcclxuICAgICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    39602:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-attend-filter/cwsn-attend-filter.page.scss ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cuscard {\n  background: white;\n  margin: 20px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.m0 {\n  margin: 0;\n}\n\n#pdfContent .table-style {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n\n#pdfContent .table-style th,\n#pdfContent .table-style td {\n  border: 1px solid #333;\n  padding: 6px;\n  text-align: left;\n  background-color: #fff;\n}\n\n#pdfContent .table-style th {\n  background-color: #f2f2f2;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tYXR0ZW5kLWZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUdBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUVFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJjd3NuLWF0dGVuZC1maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c2NhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tMCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNwZGZDb250ZW50IC50YWJsZS1zdHlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiNwZGZDb250ZW50IC50YWJsZS1zdHlsZSB0aCxcclxuI3BkZkNvbnRlbnQgLnRhYmxlLXN0eWxlIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNwZGZDb250ZW50IC50YWJsZS1zdHlsZSB0aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    85701:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/cwsn/pop-screened-student/pop-screened-student.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99999;\n}\n\n.popup-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\n\n.popup-content {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  max-width: 90%;\n  width: 320px;\n  text-align: left;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100000;\n}\n\n.popup-header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.warning-icon {\n  font-size: 48px;\n  color: #ff4444;\n  margin-bottom: 10px;\n}\n\n.popup-header h3 {\n  color: #333;\n  font-weight: 600;\n  margin: 0;\n  font-size: 18px;\n  text-align: center;\n}\n\n.popup-body {\n  margin-bottom: 24px;\n}\n\n.popup-body p {\n  margin: 12px 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #555;\n  text-align: left;\n}\n\n.popup-body strong {\n  color: #333;\n  font-weight: 600;\n}\n\n.popup-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.ok-button {\n  --background: #dc3545;\n  --background-hover: #c82333;\n  --border-radius: 6px;\n  --padding-start: 30px;\n  --padding-end: 30px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: none;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcC1zY3JlZW5lZC1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJwb3Atc2NyZWVuZWQtc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucG9wdXAtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ud2FybmluZy1pY29uIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6ICNmZjQ0NDQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBvcHVwLWhlYWRlciBoMyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLWJvZHkge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5wb3B1cC1ib2R5IHAge1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wb3B1cC1ib2R5IHN0cm9uZyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnBvcHVwLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ub2stYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYzgyMzMzO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAtLXBhZGRpbmctZW5kOiAzMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    52755:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/view-pdf/view-pdf.page.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcGRmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1wZGYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    92900:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup.page.scss ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-item {\n  margin-top: 1%;\n  text-align: center;\n  padding: 2%;\n  color: #6B4DC9;\n  font-weight: bold;\n}\n\n.card-col {\n  text-align: center;\n  color: #6c757d;\n  font-weight: bold;\n}\n\n.card-col1 {\n  text-align: center;\n  color: #6c757d;\n  font-weight: bold;\n  background-color: #EDE7FF;\n}\n\n.headertop {\n  color: #6B4DC9 !important;\n  font-weight: bold;\n}\n\n.card-col-total {\n  text-align: center;\n  color: #6B4DC9;\n  font-weight: bold;\n  background-color: #EDE7FF;\n}\n\n.clusterHead {\n  text-align: center;\n  padding: 10px;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 0%);\n}\n\ntable .grey {\n  color: #888;\n}\n\ntable .success {\n  color: #28ba62;\n}\n\ntable .blue {\n  color: #8b67b3;\n}\n\nth {\n  background: #f7ecff;\n  font-size: 15px;\n  padding: 10px;\n  color: #333;\n}\n\ntd {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1vYnNlcnYtbW9kZWxwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQUk7RUFDSSxXQUFBO0FBRVI7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUFHSiIsImZpbGUiOiJzY2hvb2wtb2JzZXJ2LW1vZGVscG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6ICM2QjREQzk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9IFxyXG5cclxuICAuY2FyZC1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb2wxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERTdGRjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJ0b3Age1xyXG4gICAgY29sb3I6ICM2QjREQzkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29sLXRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNkI0REM5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERTdGRjsgXHJcbiAgfVxyXG5cclxuICAuY2x1c3RlckhlYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMCUpO1xyXG4gICAgLmdyZXl7XHJcbiAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICB9XHJcbiAgICAuc3VjY2Vzc3tcclxuICAgICAgICBjb2xvcjogIzI4YmE2MjtcclxuICAgIH1cclxuICAgIC5ibHVle1xyXG4gICAgICAgIGNvbG9yOiAjOGI2N2IzO1xyXG4gICAgfVxyXG59XHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZWNmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG50ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    6210:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/mht/mht-view-modal/mht-view-modal.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaHQtdmlldy1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    62525:
    /*!**************************************************************!*\
      !*** ./src/app/pages/stem_new/auto-slot/auto-slot.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  padding-left: 15px;\n}\n\n.school_name {\n  padding: 5%;\n  color: #620810;\n  font-weight: bold;\n  text-align: center;\n  border-bottom: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tc2xvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJhdXRvLXNsb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNjaG9vbF9uYW1lIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgY29sb3I6ICM2MjA4MTA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    82414:
    /*!************************************************************************!*\
      !*** ./src/app/pages/stem_new/class-sec-list/class-sec-list.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-item {\n  margin-top: 5%;\n  text-align: center;\n  padding: 2%;\n  color: #6B4DC9;\n  font-weight: bold;\n}\n\n.card-col {\n  text-align: center;\n  color: #6c757d;\n  font-weight: bold;\n}\n\n.card-col1 {\n  text-align: center;\n  color: #6c757d;\n  font-weight: bold;\n  background-color: #EDE7FF;\n}\n\n.headertop {\n  color: #6B4DC9 !important;\n  font-weight: bold;\n}\n\n.card-col-total {\n  text-align: center;\n  color: #6B4DC9;\n  font-weight: bold;\n  background-color: #EDE7FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLXNlYy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiY2xhc3Mtc2VjLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgY29sb3I6ICM2QjREQzk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9IFxyXG5cclxuICAuY2FyZC1jb2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb2wxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERTdGRjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJ0b3Age1xyXG4gICAgY29sb3I6ICM2QjREQzkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29sLXRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNkI0REM5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERTdGRjsgXHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    33997:
    /*!***************************************************!*\
      !*** ./src/app/pages/view-pdf/view-pdf.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backButton {\n  color: white;\n}\n\n.txtalignCenSelf {\n  text-align: center;\n  align-self: center;\n}\n\n.txtLeftalign {\n  text-align: left;\n}\n\n.txtmargin {\n  margin: auto;\n}\n\nion-grid {\n  padding: 3%;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.liked, .disliked {\n  font-weight: bold;\n  color: #1565c0;\n}\n\npdf-viewer {\n  height: calc(120vh - 375px);\n  display: block;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcGRmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFJSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUtFO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBRk47O0FBSUU7RUFBYSwyQkFBQTtFQUE2QixjQUFBO0FBQzVDOztBQUFFO0VBQ0UscUJBQUE7QUFHSiIsImZpbGUiOiJ2aWV3LXBkZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0J1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC50eHRhbGlnbkNlblNlbGYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAudHh0TGVmdGFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC50eHRtYXJnaW4ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5saWtlLWJ1dHRvbiwgLmRpc2xpa2UtYnV0dG9uIHtcclxuICAgIC8vICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLy8gICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIC8vICAgY29sb3I6ICAgIzU4NTg1ODtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmxpa2VkLCAuZGlzbGlrZWQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICMxNTY1YzA7XHJcbiAgfVxyXG4gIHBkZi12aWV3ZXIgeyBoZWlnaHQ6IGNhbGMoMTIwdmggLSAzNzVweCk7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    12288:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/summarypopuppage/summarypopuppage.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">{{reportname}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\" >\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>{{ schoolname }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-grid>\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Date of visit</th>\r\n              <th *ngIf=\"reportname === 'Summary report'\">No of students screened</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items\">\r\n              <td>\r\n                <ng-container *ngIf=\"reportname === 'Summary report'; else noAnchor\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"openDateModal(item)\">\r\n                    {{ item.date_ts }}\r\n                  </a>\r\n                </ng-container>\r\n                \r\n                <ng-template #noAnchor>\r\n                  <span>{{ item.date_ts }}</span>\r\n                </ng-template>\r\n              </td>\r\n              <td *ngIf=\"reportname === 'Summary report'\">{{ item.count }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </ion-grid>\r\n    </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    2299:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cwsn-attend-filter/cwsn-attend-filter.page.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Attendance Details</ion-title>\r\n    <!-- <ion-buttons *ngIf=\"filteredHistory.length > 0\" slot=\"end\" class=\"back-button\" (click)=\"getPDF()\">\r\n\t\t\t<ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cloud-download\" style=\"color: white;\"></ion-icon></ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>From</ion-label>\r\n    <ion-datetime display-format=\"DD-MM-YYYY\" [max]=\"todayDate\" [(ngModel)]=\"fromDate\" placeholder=\"Select From Date\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>To</ion-label>\r\n    <ion-datetime display-format=\"DD-MM-YYYY\" [min]=\"fromDate\" [max]=\"todayDate\" [(ngModel)]=\"toDate\" placeholder=\"Select To Date\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-button expand=\"block\" (click)=\"filterHistory()\" style=\"color: white;\">Search</ion-button>\r\n\r\n  <div *ngIf=\"filteredHistory.length > 0\" >\r\n    <div class=\"cuscard\" *ngFor=\"let attenItm of filteredHistory\">\r\n      <h6>{{attenItm.atten_type}} / {{attenItm.name}} {{attenItm.remarks}}</h6>\r\n      <p class=\"m0 text-right\">{{attenItm.atten_date | date: 'dd-MM-yyyy'}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div #pdfContent id=\"pdfContent\" style=\"display: none;\">\r\n    <div style=\"text-align: center; background: var(--ion-color-primary); \r\n    color: white; padding: 5px;\">{{teacherName}}</div>\r\n    <table class=\"table-style\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"text-align: center;\">Type</th>\r\n          <th style=\"text-align: center;\">Name </th>\r\n          <th style=\"text-align: center;\">Remarks</th>\r\n          <th style=\"text-align: center;\">Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let attenItm of filteredHistory\">\r\n          <td>{{ attenItm.atten_type }}</td>\r\n          <td>{{ attenItm.name ? attenItm.name : '-' }}</td>\r\n          <td>{{ attenItm.remarks ? attenItm.remarks : '-' }}</td>\r\n          <td>{{ attenItm.atten_date | date: 'dd-MM-yyyy' }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <!-- <div *ngIf=\"filteredHistory.length === 0\" class=\"text-center text-danger\">\r\n    No data found\r\n  </div> -->\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    38511:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/pop-screened-student/pop-screened-student.component.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"popup-overlay\">\r\n  <div class=\"popup-container\">\r\n    <div class=\"popup-content\">\r\n      <div class=\"popup-header\">\r\n        <ion-icon name=\"warning-outline\" class=\"warning-icon\"></ion-icon>\r\n        <h3>Disability Verification Required</h3>\r\n      </div>\r\n\r\n      <div class=\"popup-body\">\r\n        <p><strong>NOTE:</strong></p>\r\n        <p>No disability has been selected for this student.</p>\r\n        <p>\r\n          Kindly verify whether the student has any disability before\r\n          proceeding, as the student has been marked as a\r\n          <strong>CWSN student</strong> in the student profile.\r\n        </p>\r\n        <p>\r\n          If the student does not have any disability, please inform the\r\n          <strong>School HM</strong> to update the student profile in the school\r\n          login as <strong>\"None\"</strong> to continue.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"popup-footer\">\r\n        <ion-button class=\"ok-button\" (click)=\"dismiss()\">OK</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    84460:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-form-generator/view-pdf/view-pdf.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">View Pdf</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.0\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div id=\"outerContainer\">\r\n    <div class=\"pdf-container\">\r\n      <pdf-viewer *ngIf=\"ext == 'pdf'\" src=\"{{src}}\" [fit-to-page]=\"true\" [zoom]=\"zoom\" [original-size]=\"true\" [render-text]=\"false\" style=\"display: block; width: 100%; height: 800px;\"></pdf-viewer>\r\n      <img *ngIf=\"ext == 'jpg' || 'jpeg'\" src=\"{{src}}\" class=\"img image\">\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"\" >\r\n  <div class=\"footer-txt\" >\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <button ion-button  >\r\n          <ion-icon name=\"remove-outline\" (click)=\"incrementZoom(-0.1)\"></ion-icon>\r\n        </button> \r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <button ion-button >\r\n          <ion-icon name=\"add-outline\" (click)=\"incrementZoom(0.1)\"></ion-icon>\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    51401:
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup.page.html ***!
      \*******************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">{{clusterId}}</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\" style=\"overflow-x: auto;margin-top: 0px;\">\r\n    <!--======================================================Cluster details===========================================================-->\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h5 class=\"clusterHead\">Cluster Details</h5>\r\n      </ion-col>\r\n    </ion-row>\r\n    <table class=\"table\">\r\n      <tr>\r\n        <th>Cluster Id</th>\r\n        <th>Block</th>\r\n        <th>Cluster Name</th>\r\n      </tr>\r\n      <tr>\r\n        <td>{{this.clusterId}}</td>\r\n        <td>{{this.clusterBlock}}</td>\r\n        <td>{{this.clusterName}}</td>\r\n      </tr>\r\n    </table>\r\n\r\n    <!--==================================================pending schools===========================================================-->\r\n    <!-- <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h5 class=\"clusterHead\">Pending Schools</h5>\r\n      </ion-col>\r\n    </ion-row>\r\n    <table class=\"table\">\r\n      <tr>\r\n        <th>School Id</th>\r\n        <th>UDISE Code</th>\r\n        <th>School Name</th>\r\n      </tr>\r\n      <tr *ngFor=\"let data of schoolList\">\r\n        <td>{{data.school_id}}</td>\r\n        <td>{{data.udise_code}}</td>\r\n        <td>{{data.school_name}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"schoolList == undefined\">\r\n        <td colspan=\"3\">\r\n          There is no Pending School in this Cluster.\r\n        </td>\r\n      </tr>\r\n    </table> -->\r\n\r\n    <!--==================================================completed schools===========================================================-->\r\n    <!-- <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h5 class=\"clusterHead\">Completed Schools</h5>\r\n      </ion-col>\r\n    </ion-row>\r\n    <table class=\"table\">\r\n      <tr>\r\n        <th>School Id</th>\r\n        <th>UDISE Code</th>\r\n        <th>School Name</th>\r\n      </tr>\r\n      <tr *ngFor=\"let data of compleSchool\">\r\n        <td>{{data.school_id}}</td>\r\n        <td>{{data.udise_code}}</td>\r\n        <td>{{data.school_name}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"compleSchool == undefined\">\r\n        <td colspan=\"3\">\r\n          There is no Completed School in this Cluster.\r\n        </td>\r\n      </tr>\r\n    </table> -->\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    51564:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/mht-view-modal/mht-view-modal.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">MHT</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon name=\"close-outline\" size=\"large\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;\">\r\n      <ion-label>Filter by <span style=\"color: red;\"> *</span></ion-label>\r\n      <ion-select label-placement=\"stacked\" [(ngModel)]=\"filterBy\" placeholder=\"Select Filter by\"\r\n      (ngModelChange)=\"selectFilterBy()\">\r\n        <ion-select-option value=\"D1\">D1</ion-select-option>\r\n        <ion-select-option value=\"D2\">D2</ion-select-option>\r\n        <ion-select-option value=\"D3\">D3</ion-select-option>\r\n        <ion-select-option value=\"D4\">D4</ion-select-option>\r\n        <ion-select-option value=\"1\">All Diagnosis</ion-select-option>\r\n        <ion-select-option value=\"2\">No filter</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"filterBy == 'D1' || filterBy == 'D2' || filterBy == 'D3' || filterBy == 'D4' || filterBy == '1'\" >\r\n    <h5 style=\"text-align: center;\">\r\n      {{filterBy == 'D1' ? 'D1' : filterBy == 'D2' ? 'D2' : filterBy == 'D3' ? 'D3' : filterBy == 'D4' ? 'D4' : filterBy == '1' ? 'All Diagnosis' : null}}<span style=\"color: red;\"> *</span>\r\n    </h5>\r\n    <ion-item style=\"background-color: white;margin-bottom: 20px;border-radius: 18px;font-size: 20px;\r\n    margin-top: 10px; margin-left: 20px; margin-right: 20px;\">\r\n      <ionic-selectable \r\n        #ionicSelectable\r\n        placeholder=\"Select Diagnosis\"\r\n        item-content\r\n        itemValueField=\"value\" \r\n        itemTextField=\"label\" \r\n        [items]=\"fltDiagnosis\"\r\n        [(ngModel)]=\"filterDiagnosis\"\r\n        [canSearch]=\"true\"\r\n        [isMultiple]=\"true\"\r\n        (onSelect)=\"onSelectionChange($event,ionicSelectable)\"\r\n        [disabledItems]=\"disabledItems\"\r\n        >\r\n      </ionic-selectable>\r\n    </ion-item>\r\n  </div>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button style=\"color: white\" (click)=\"closeModal()\">Submit</ion-button>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    85672:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/auto-slot/auto-slot.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"title\">\r\n      <div class=\"ion-text-wrap\">Auto Slot</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"school_name\">{{school_name}} - Total Slot {{slot}}</ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"margin: 5%;\">\r\n    <ion-col size=\"2\" style=\"font-size: larger;text-align: center;\">S.No</ion-col>\r\n    <ion-col style=\"font-size: larger;text-align: center;\" size=\"5\"> Date</ion-col>\r\n    <ion-col size=\"5\" style=\"text-align: center;\"> SLOT</ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"margin: 5%;\" *ngFor=\"let data of schoolClassData; let i = index;\">\r\n    <ion-col size=\"2\" style=\"font-size: larger;text-align: center;\">{{i + 1}}</ion-col>\r\n    <ion-col style=\"font-size: larger;text-align: center;\" size=\"5\">{{data.planning_date}}</ion-col>\r\n    <ion-col size=\"5\" style=\"text-align: center;\">\r\n      <ion-button style=\"color: #212529;--background: #99e096;text-align: center;\">SLOT {{data.session}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row style=\"padding: 3%;font-weight: bolder;\">\r\n    <ion-col size=\"12\" style=\"text-align: center; color: white;\">\r\n      <div (click)=\"onSave()\">Save</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    },

    /***/
    75619:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/class-sec-list/class-sec-list.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">Total Student</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"card-item\" style=\"border: 1px solid;\">\r\n        <ion-col size=\"3\"> Section</ion-col>\r\n        <ion-col size=\"2.3\"> Class 6</ion-col>\r\n        <ion-col size=\"2.3\"> Class 7 </ion-col>\r\n        <ion-col size=\"2.3\"> Class 8</ion-col>\r\n        <ion-col size=\"2\"> Total</ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-row *ngFor=\"let data of schoolClassData.SecWiseTotal; let i = index;\"\r\n        [ngClass]=\"(i % 2 == 0) ? 'card-col1' : 'card-col'\">\r\n        <ion-col size=\"3\" class=\"headertop\">{{data.Section}}</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls6}}</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls7}}</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls8}}</ion-col>\r\n        <ion-col size=\"2\">{{data.TotalCount}}</ion-col>\r\n        <ion-col size=\"2\" *ngFor=\"let item of data.SecWiseTotal;\">{{data.TotalCount}}</ion-col>\r\n      </ion-row>\r\n      <ion-row *ngFor=\"let data of schoolClassData.OverAllClsWiseTotal; let i = index;\"\r\n        [ngClass]=\"(i % 2 == 0) ? 'card-col-total' : 'card-col'\">\r\n        <ion-col size=\"3\">Total</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls6Total}}</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls7Total}}</ion-col>\r\n        <ion-col size=\"2.3\">{{data.Cls8Total}}</ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
      /***/
    },

    /***/
    72176:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-pdf/view-pdf.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"end\" (click)=\"dismiss()\">\r\n      <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 3%;\"> {{Heading}} PDF</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-padding ion-text-center\">\r\n    <ion-col size=\"12\" offset=\"1\" >\r\n      <pdf-viewer [src]=this.PDFFileName.changingThisBreaksApplicationSecurity [render-text]=\"true\" [original-size]=\"false\" style=\"width:100%!important;\">\r\n      </pdf-viewer>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map