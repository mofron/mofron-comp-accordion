require('mofron-comp-heading');
require('mofron-event-click');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file accordion.js
	 * @author simpart
	 */

	/**
	 * @class mofron.comp.Accordion
	 * @brief Accordion Component class
	 */
	mofron.comp.Accordion = function (_mofron$Component) {
	    _inherits(_class, _mofron$Component);

	    function _class(prm, opt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

	            _this.setBaseName('Accordion');
	            _this.name('Accordion');

	            _this.chg_evt = null;

	            if (null !== opt) {
	                _this.option(opt);
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    /**
	     * initialize DOM contents
	     * 
	     * @param vd : (mofron.util.Vdom) vdom object
	     */


	    _createClass(_class, [{
	        key: 'initDomConts',
	        value: function initDomConts(prm) {
	            try {
	                this.target(this.vdom());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setChangeEvt',
	        value: function setChangeEvt(fnc) {
	            try {
	                if (null === fnc) {
	                    throw new Error('invalid parameter');
	                }
	                this.chg_evt = fnc;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'add',
	        value: function add(ttl, cnt) {
	            try {
	                if (undefined === cnt || null === cnt || 'object' !== (typeof cnt === 'undefined' ? 'undefined' : _typeof(cnt))) {
	                    throw new Error('invalid parameter');
	                }

	                var hdg_thm = this.theme().getComp('Heading');
	                if (null === hdg_thm) {
	                    hdg_thm = mofron.comp.Heading;
	                }
	                var hdg = new hdg_thm(ttl, {
	                    level: 2
	                });
	                hdg.addEvent(new mofron.event.Click(function (clk_prm) {
	                    try {
	                        var acd_obj = clk_prm[0];
	                        var conts = clk_prm[1];
	                        var idx = clk_prm[2];
	                        conts.visible(!acd_obj.state(idx));
	                    } catch (e) {
	                        console.error(e.stack);
	                        throw e;
	                    }
	                }, [this, cnt, this.getChild().length]));

	                var wrp = new mofron.Component();
	                wrp.addChild(hdg);
	                wrp.addChild(cnt, false);

	                this.addChild(wrp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(idx) {
	            try {} catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'state',
	        value: function state(idx) {
	            try {
	                if ('number' !== typeof idx) {
	                    throw new Error('invalid parameter');
	                }
	                var chdlen = this.getChild();
	                if (chdlen.length <= idx || 0 > idx) {
	                    throw new Error('invalid parameter');
	                }

	                if (false === chdlen[idx].isRendered()) {
	                    return false;
	                }
	                var disp = chdlen[idx].getChild(1).vdom().style('display');
	                if ('none' === disp) {
	                    return false;
	                } else {
	                    return true;
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.Component);

/***/ }
/******/ ]);
