/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configureStore */ "./assets/js/configureStore.js");
/* harmony import */ var _sprinkles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sprinkles */ "./assets/js/sprinkles.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLink"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"]]);
document.addEventListener('DOMContentLoaded', function () {
  var sprinkles = Object(_sprinkles__WEBPACK_IMPORTED_MODULE_6__["getSprinklesComponent"])();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sprinkles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sprinkle = _step.value;
      var Comp = sprinkle.Comp,
          props = sprinkle.props,
          node = sprinkle.node;
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, _extends({
        store: _configureStore__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, props)), node);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

/***/ }),

/***/ "./assets/js/components sync recursive \\.(\\/index)?js$":
/*!***************************************************!*\
  !*** ./assets/js/components sync \.(\/index)?js$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CustomPagination.js": "./assets/js/components/CustomPagination.js",
	"./CustomStateResults.js": "./assets/js/components/CustomStateResults.js",
	"./GeoSearchMapbox.js": "./assets/js/components/GeoSearchMapbox.js",
	"./GuideHitsList.js": "./assets/js/components/GuideHitsList.js",
	"./GuideHitsMobileMap.js": "./assets/js/components/GuideHitsMobileMap.js",
	"./GuideMap.js": "./assets/js/components/GuideMap.js",
	"./GuideMobile.js": "./assets/js/components/GuideMobile.js",
	"./GuideNavMobile.js": "./assets/js/components/GuideNavMobile.js",
	"./GuideWide.js": "./assets/js/components/GuideWide.js",
	"./HitIcon.js": "./assets/js/components/HitIcon.js",
	"./Icon.js": "./assets/js/components/Icon.js",
	"./LocationFilters.js": "./assets/js/components/LocationFilters.js",
	"./Map.js": "./assets/js/components/Map.js",
	"./MapMarker.js": "./assets/js/components/MapMarker.js",
	"./MapSearch.js": "./assets/js/components/MapSearch.js",
	"./MapSearchResultStatamic.js": "./assets/js/components/MapSearchResultStatamic.js",
	"./MapSearchStatamic.js": "./assets/js/components/MapSearchStatamic.js",
	"./MapSingle.js": "./assets/js/components/MapSingle.js",
	"./PlacesInput.js": "./assets/js/components/PlacesInput.js",
	"./PlacesRedirectToExplore.js": "./assets/js/components/PlacesRedirectToExplore.js",
	"./RadiusSelect.js": "./assets/js/components/RadiusSelect.js",
	"./RefinementClearButton.js": "./assets/js/components/RefinementClearButton.js",
	"./RefinementList.js": "./assets/js/components/RefinementList.js",
	"./RefinementSelect.js": "./assets/js/components/RefinementSelect.js",
	"./SanitizeHtml.js": "./assets/js/components/SanitizeHtml.js",
	"./StyledComponents.js": "./assets/js/components/StyledComponents.js",
	"./ToggleRefinement.js": "./assets/js/components/ToggleRefinement.js",
	"./TownBody.js": "./assets/js/components/TownBody.js",
	"./TownHeader.js": "./assets/js/components/TownHeader.js",
	"./TownHits.js": "./assets/js/components/TownHits.js",
	"./helpers/map.js": "./assets/js/components/helpers/map.js",
	"./helpers/strings.js": "./assets/js/components/helpers/strings.js",
	"./hooks/useElementSize.js": "./assets/js/components/hooks/useElementSize.js",
	"./hooks/useIsMobile.js": "./assets/js/components/hooks/useIsMobile.js",
	"./hooks/useRefIntersect.js": "./assets/js/components/hooks/useRefIntersect.js",
	"./hooks/useRefScrollTo.js": "./assets/js/components/hooks/useRefScrollTo.js",
	"./hooks/useURLSearchState.js": "./assets/js/components/hooks/useURLSearchState.js",
	"./reducers/MapSearchStatamicReducer.js": "./assets/js/components/reducers/MapSearchStatamicReducer.js",
	"./reducers/viewportReducer.js": "./assets/js/components/reducers/viewportReducer.js",
	"./types.js": "./assets/js/components/types.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/components sync recursive \\.(\\/index)?js$";

/***/ }),

/***/ "./assets/js/components/CustomPagination.js":
/*!**************************************************!*\
  !*** ./assets/js/components/CustomPagination.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var Pagination = function Pagination(_ref) {
  var currentRefinement = _ref.currentRefinement,
      nbPages = _ref.nbPages,
      refine = _ref.refine;
  var pages = [];

  for (var i = 1; i <= nbPages; i++) {
    pages.push(i);
  }

  var renderLink = function renderLink(text, ariaLabel, displayAsLink, clickHandler) {
    if (displayAsLink) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        "aria-label": ariaLabel,
        style: {
          textDecoration: 'underline'
        },
        onClick: clickHandler
      }, text);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, text);
  };

  if (nbPages === 1) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "inline-block ml-3"
  }, renderLink('‹', 'Previous Page', currentRefinement !== 1, function () {
    refine(currentRefinement - 1);
  })), pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "inline-block ml-3",
      key: page
    }, renderLink(page, "Page ".concat(page), currentRefinement !== page, function () {
      refine(page);
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "inline-block ml-3"
  }, renderLink('›', 'Next page', currentRefinement !== nbPages, function () {
    refine(currentRefinement + 1);
  }))));
};

Pagination.propTypes = {
  currentRefinement: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  nbPages: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  refine: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
var CustomPagination = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectPagination"])(Pagination);
/* harmony default export */ __webpack_exports__["default"] = (CustomPagination);

/***/ }),

/***/ "./assets/js/components/CustomStateResults.js":
/*!****************************************************!*\
  !*** ./assets/js/components/CustomStateResults.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");





var StateResults = function StateResults(_ref) {
  var searchResults = _ref.searchResults;

  if (!searchResults) {
    return null;
  }

  var hits = searchResults.hits,
      nbHits = searchResults.nbHits;

  if (hits.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "italic my-2"
    }, "There are no results for that search.");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-red text-2xl font-semibold mt-3"
  }, nbHits, " Ghost Town", hits.length > 1 && 's');
};

StateResults.propTypes = {
  searchResults: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].shape({
    hits: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_3__["hitType"]),
    hitsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
    nbHits: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
    page: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number
  })
};
var CustomStateResults = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(StateResults);
/* harmony default export */ __webpack_exports__["default"] = (CustomStateResults);

/***/ }),

/***/ "./assets/js/components/GeoSearchMapbox.js":
/*!*************************************************!*\
  !*** ./assets/js/components/GeoSearchMapbox.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var use_deep_compare_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-deep-compare-effect */ "./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Map */ "./assets/js/components/Map.js");
/* harmony import */ var _helpers_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/map */ "./assets/js/components/helpers/map.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");
/* harmony import */ var _reducers_viewportReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/viewportReducer */ "./assets/js/components/reducers/viewportReducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Hits = function Hits(_ref) {
  var hits = _ref.hits,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 600 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 600 : _ref$height,
      _ref$initialLatitude = _ref.initialLatitude,
      initialLatitude = _ref$initialLatitude === void 0 ? 0 : _ref$initialLatitude,
      _ref$initialLongitude = _ref.initialLongitude,
      initialLongitude = _ref$initialLongitude === void 0 ? 0 : _ref$initialLongitude,
      _ref$initialZoom = _ref.initialZoom,
      initialZoom = _ref$initialZoom === void 0 ? 1 : _ref$initialZoom;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_viewportReducer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: width,
    height: height,
    latitude: initialLatitude,
    longitude: initialLongitude,
    zoom: initialZoom
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      viewport = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'UPDATE',
      params: {
        width: width
      }
    });
  }, [width]);
  Object(use_deep_compare_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    if (hits.length === 0) return;

    var _getBoundingBoxFromHi = Object(_helpers_map__WEBPACK_IMPORTED_MODULE_5__["getBoundingBoxFromHits"])(viewport, hits),
        longitude = _getBoundingBoxFromHi.longitude,
        latitude = _getBoundingBoxFromHi.latitude,
        zoom = _getBoundingBoxFromHi.zoom;

    dispatch({
      type: 'UPDATE',
      params: {
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      }
    });
  }, [hits]);
  if (hits.length === 0) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewport: viewport,
    onUpdateViewport: function onUpdateViewport(updatedViewport) {
      return dispatch({
        type: 'UPDATE',
        params: updatedViewport
      });
    }
  }, children({
    hits: hits
  }));
};

Hits.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_6__["hitType"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  initialLatitude: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  initialLongitude: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  initialZoom: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number
};
var GeoSearchMapBox = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(Hits);
/* harmony default export */ __webpack_exports__["default"] = (GeoSearchMapBox);

/***/ }),

/***/ "./assets/js/components/GuideHitsList.js":
/*!***********************************************!*\
  !*** ./assets/js/components/GuideHitsList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use/lib/useWindowScroll */ "./node_modules/react-use/lib/useWindowScroll.js");
/* harmony import */ var react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useRefIntersect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useRefIntersect */ "./assets/js/components/hooks/useRefIntersect.js");
/* harmony import */ var _hooks_useRefScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useRefScrollTo */ "./assets/js/components/hooks/useRefScrollTo.js");
/* harmony import */ var _TownBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TownBody */ "./assets/js/components/TownBody.js");
/* harmony import */ var _TownHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TownHeader */ "./assets/js/components/TownHeader.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");










var Hit = function Hit(_ref) {
  var hit = _ref.hit,
      index = _ref.index,
      setCurrentTown = _ref.setCurrentTown,
      chosenTown = _ref.chosenTown;
  var hitRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useWindowScroll = react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_2___default()(),
      y = _useWindowScroll.y;

  Object(_hooks_useRefIntersect__WEBPACK_IMPORTED_MODULE_4__["default"])(y, hitRef, function () {
    return setCurrentTown(hit);
  });
  var isTownChosen = !!(chosenTown && chosenTown.objectID === hit.objectID);
  Object(_hooks_useRefScrollTo__WEBPACK_IMPORTED_MODULE_5__["default"])(hitRef, isTownChosen);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-5 py-2",
    style: {
      minHeight: '500px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: hitRef,
    className: "flex content-start items-baseline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, index + 1, ". ", hit.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TownHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    town: hit
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mt-2"
  }, hit.structure_description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TownBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    town: hit
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mt-2"
  }));
};

Hit.propTypes = {
  hit: _types__WEBPACK_IMPORTED_MODULE_8__["hitType"],
  index: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  setCurrentTown: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  chosenTown: _types__WEBPACK_IMPORTED_MODULE_8__["hitType"]
};

var Hits = function Hits(_ref2) {
  var hits = _ref2.hits,
      setCurrentTown = _ref2.setCurrentTown,
      chosenTown = _ref2.chosenTown;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hits.map(function (hit, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hit, {
      key: hit.name,
      hit: hit,
      index: i,
      setCurrentTown: setCurrentTown,
      chosenTown: chosenTown
    });
  }));
};

Hits.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_8__["hitType"]),
  setCurrentTown: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  chosenTown: _types__WEBPACK_IMPORTED_MODULE_8__["hitType"]
};
var GuideHitsList = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(Hits);
/* harmony default export */ __webpack_exports__["default"] = (GuideHitsList);

/***/ }),

/***/ "./assets/js/components/GuideHitsMobileMap.js":
/*!****************************************************!*\
  !*** ./assets/js/components/GuideHitsMobileMap.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TownBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TownBody */ "./assets/js/components/TownBody.js");
/* harmony import */ var _TownHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TownHeader */ "./assets/js/components/TownHeader.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");








var Hit = function Hit(_ref) {
  var hit = _ref.hit,
      index = _ref.index,
      chosenTown = _ref.chosenTown,
      isTownOpen = _ref.isTownOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:block ".concat(chosenTown && chosenTown.name !== hit.name ? 'hidden' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3 pt-2 pb-10 mx-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex content-start items-baseline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, index + 1, ". ", hit.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TownHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    town: hit
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mt-2"
  }, hit.structure_description), isTownOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TownBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    town: hit
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "mt-2"
  }));
};

Hit.propTypes = {
  hit: _types__WEBPACK_IMPORTED_MODULE_6__["hitType"],
  index: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].number,
  chosenTown: _types__WEBPACK_IMPORTED_MODULE_6__["hitType"],
  isTownOpen: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].bool
};

var Hits = function Hits(_ref2) {
  var hits = _ref2.hits,
      setChosenTown = _ref2.setChosenTown,
      currentTown = _ref2.currentTown,
      chosenTown = _ref2.chosenTown,
      isTownOpen = _ref2.isTownOpen;
  // currentTown is already set via the list view, syncs to chosen for map
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hits.length > 0 && !chosenTown) {
      setChosenTown(currentTown);
    }
  }, [chosenTown, setChosenTown, currentTown, hits]); // This runs once when switching to map view, syncs scrolled current town with chosen

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(currentTown, 'name') !== lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(chosenTown, 'name')) {
      setChosenTown(currentTown);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hits.map(function (hit, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hit, {
      key: hit.name,
      hit: hit,
      index: i,
      chosenTown: chosenTown,
      isTownOpen: isTownOpen
    });
  }));
};

Hits.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_6__["hitType"]),
  setChosenTown: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  currentTown: _types__WEBPACK_IMPORTED_MODULE_6__["hitType"],
  chosenTown: _types__WEBPACK_IMPORTED_MODULE_6__["hitType"],
  isTownOpen: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].bool
};
var GuideHitsMobileMap = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(Hits);
/* harmony default export */ __webpack_exports__["default"] = (GuideHitsMobileMap);

/***/ }),

/***/ "./assets/js/components/GuideMap.js":
/*!******************************************!*\
  !*** ./assets/js/components/GuideMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./assets/js/components/Map.js");
/* harmony import */ var _helpers_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/map */ "./assets/js/components/helpers/map.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        viewport: _objectSpread({}, state.viewport, {}, action.params)
      };

    default:
      return state;
  }
}

var Hits = function Hits(_ref) {
  var hits = _ref.hits,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 600 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 600 : _ref$height,
      _ref$initialLatitude = _ref.initialLatitude,
      initialLatitude = _ref$initialLatitude === void 0 ? 0 : _ref$initialLatitude,
      _ref$initialLongitude = _ref.initialLongitude,
      initialLongitude = _ref$initialLongitude === void 0 ? 0 : _ref$initialLongitude,
      _ref$initialZoom = _ref.initialZoom,
      initialZoom = _ref$initialZoom === void 0 ? 1 : _ref$initialZoom,
      currentTown = _ref.currentTown;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, {
    viewport: {
      width: width,
      height: height,
      latitude: initialLatitude,
      longitude: initialLongitude,
      zoom: initialZoom
    }
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'UPDATE',
      params: {
        width: width
      }
    });
  }, [width]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hits.length === 0 || !currentTown) return;

    var _getBoundingBoxFromHi = Object(_helpers_map__WEBPACK_IMPORTED_MODULE_4__["getBoundingBoxFromHit"])(currentTown),
        longitude = _getBoundingBoxFromHi.longitude,
        latitude = _getBoundingBoxFromHi.latitude,
        zoom = _getBoundingBoxFromHi.zoom;

    dispatch({
      type: 'UPDATE',
      params: {
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      }
    });
  }, [currentTown, hits.length]);
  if (hits.length === 0) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    viewport: state.viewport,
    onUpdateViewport: function onUpdateViewport(updatedViewport) {
      return dispatch({
        type: 'UPDATE',
        params: updatedViewport
      });
    }
  }, children({
    hits: hits
  }));
};

Hits.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_5__["hitType"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  initialLatitude: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  initialLongitude: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  initialZoom: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  currentTown: _types__WEBPACK_IMPORTED_MODULE_5__["hitType"]
};
var GuideMap = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(Hits);
/* harmony default export */ __webpack_exports__["default"] = (GuideMap);

/***/ }),

/***/ "./assets/js/components/GuideMobile.js":
/*!*********************************************!*\
  !*** ./assets/js/components/GuideMobile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use/lib/useWindowSize */ "./node_modules/react-use/lib/useWindowSize.js");
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _GuideHitsMobileMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GuideHitsMobileMap */ "./assets/js/components/GuideHitsMobileMap.js");
/* harmony import */ var _GuideMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GuideMap */ "./assets/js/components/GuideMap.js");
/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MapMarker */ "./assets/js/components/MapMarker.js");
/* harmony import */ var _GuideNavMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GuideNavMobile */ "./assets/js/components/GuideNavMobile.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Icon */ "./assets/js/components/Icon.js");
/* harmony import */ var _GuideHitsList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GuideHitsList */ "./assets/js/components/GuideHitsList.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    max-height: ", ";\n    overflow: ", ";\n    bottom: 0;\n    height: 100%;\n    &:before {\n        content: '';\n        width: 100%;\n        height: ", ";\n        position: absolute;\n        left: 0;\n        bottom: 50px;\n        background: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
















var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default()("S5AHQE32Z2", "c3a4b54e708fede2d5e6c278b15dace8");
var GuideMobileHitsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject(), function (props) {
  return props.isOpen ? 'none' : '250px';
}, function (props) {
  return props.isOpen ? 'scroll' : 'hidden';
}, function (props) {
  return props.isOpen ? 0 : '100%';
}, function (props) {
  return props.isOpen ? '' : 'linear-gradient(rgba(255,255,255,0) 170px, #fff)';
});

var GuideMobile = function GuideMobile(_ref) {
  var slug = _ref.slug,
      name = _ref.name;

  // sets popup, marker as active - used on click of marker or when hit is scrolled to
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentTown = _useState2[0],
      setCurrentTown = _useState2[1]; // on click of marker


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      chosenTown = _useState4[0],
      setChosenTown = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isTownOpen = _useState6[0],
      setIsTownOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('list'),
      _useState8 = _slicedToArray(_useState7, 2),
      mobileViewMode = _useState8[0],
      setMobileViewMode = _useState8[1];

  var _useWindowSize = react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_6___default()(),
      width = _useWindowSize.width,
      height = _useWindowSize.height;

  var filter = "guides:".concat(slug);

  var renderPopup = function renderPopup() {
    return chosenTown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
      latitude: chosenTown._geoloc.lat,
      longitude: chosenTown._geoloc.lng,
      closeButton: false,
      anchor: "bottom",
      tipSize: 5,
      offsetTop: -20,
      closeOnClick: false
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, chosenTown.name)));
  }; // account for header, hit and bottom nav


  var mapHeight = height - 300;
  var mapWidth = width;
  console.log('current', lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(currentTown, 'name'), 'chosen', lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(chosenTown, 'name'));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed",
    style: {
      width: '100%',
      top: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex border-b border-gray-300 bg-white justify-between px-3 content-center items-center",
    style: {
      height: 50
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/",
    className: "no-underline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "angle-left"
  }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "derelict house"
  }, "\uD83C\uDFDA\uFE0F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-lg"
  }, "Guide: ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "text-sm",
    onClick: function onClick() {
      return setMobileViewMode(mobileViewMode === 'list' ? 'map' : 'list');
    }
  }, mobileViewMode === 'list' ? 'Map' : 'List', " View"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["InstantSearch"], {
    searchClient: searchClient,
    indexName: "test_GHOST_TOWNS"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Configure"], {
    filters: filter
  }), mobileViewMode === 'list' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuideHitsList__WEBPACK_IMPORTED_MODULE_14__["default"], {
    chosenTown: chosenTown,
    setCurrentTown: setCurrentTown
  })), mobileViewMode === 'map' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed",
    style: {
      bottom: '250px',
      top: '50px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuideMap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: mapWidth,
    height: mapHeight,
    currentTown: chosenTown
  }, function (_ref2) {
    var hits = _ref2.hits;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderPopup(), hits.map(function (hit) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: hit.name
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapMarker__WEBPACK_IMPORTED_MODULE_11__["default"], {
        latitude: hit._geoloc.lat,
        longitude: hit._geoloc.lng,
        name: hit.name,
        onClick: function onClick() {
          setCurrentTown(hit);
          setChosenTown(hit);
        },
        isSelected: chosenTown !== null && chosenTown.name === hit.name
      }));
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GuideMobileHitsWrapper, {
    className: "fixed px-3",
    isOpen: isTownOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuideHitsMobileMap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setChosenTown: setChosenTown,
    currentTown: currentTown,
    chosenTown: chosenTown,
    isTownOpen: isTownOpen
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuideNavMobile__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isTownOpen: isTownOpen,
    setIsTownOpen: setIsTownOpen,
    chosenTown: chosenTown,
    setChosenTown: setChosenTown
  }))));
};

GuideMobile.propTypes = {
  slug: prop_types__WEBPACK_IMPORTED_MODULE_8__["PropTypes"].string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_8__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (GuideMobile);

/***/ }),

/***/ "./assets/js/components/GuideNavMobile.js":
/*!************************************************!*\
  !*** ./assets/js/components/GuideNavMobile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");





var HitsNav = function HitsNav(_ref) {
  var hits = _ref.hits,
      setIsTownOpen = _ref.setIsTownOpen,
      isTownOpen = _ref.isTownOpen,
      chosenTown = _ref.chosenTown,
      setChosenTown = _ref.setChosenTown;

  var getChosenHitIndex = function getChosenHitIndex(currentTownName) {
    var currentHit = hits.find(function (hit) {
      return hit.name === currentTownName;
    });
    return hits.indexOf(currentHit);
  };

  var handleNext = function handleNext() {
    var index = getChosenHitIndex(chosenTown.name);
    var nextIndex = index + 1;

    if (nextIndex >= hits.length) {
      setChosenTown(hits[0]);
    } else {
      setChosenTown(hits[nextIndex]);
    }
  };

  var handlePrev = function handlePrev() {
    var index = getChosenHitIndex(chosenTown.name);
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      setChosenTown(hits[hits.length - 1]);
    } else {
      setChosenTown(hits[prevIndex]);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full fixed border border-gray-300 bg-gray-100",
    style: {
      bottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between items-center mx-3",
    style: {
      height: '50px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handlePrev
  }, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setIsTownOpen(!isTownOpen);
    }
  }, isTownOpen ? 'Less Info' : 'More Info'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleNext
  }, "Next")));
};

HitsNav.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(_types__WEBPACK_IMPORTED_MODULE_3__["hitType"]),
  setIsTownOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  isTownOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool,
  chosenTown: _types__WEBPACK_IMPORTED_MODULE_3__["hitType"],
  setChosenTown: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
var GuideNavMobile = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(HitsNav);
/* harmony default export */ __webpack_exports__["default"] = (GuideNavMobile);

/***/ }),

/***/ "./assets/js/components/GuideWide.js":
/*!*******************************************!*\
  !*** ./assets/js/components/GuideWide.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GuideHitsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GuideHitsList */ "./assets/js/components/GuideHitsList.js");
/* harmony import */ var _GeoSearchMapbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeoSearchMapbox */ "./assets/js/components/GeoSearchMapbox.js");
/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapMarker */ "./assets/js/components/MapMarker.js");
/* harmony import */ var _hooks_useElementSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useElementSize */ "./assets/js/components/hooks/useElementSize.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default()("S5AHQE32Z2", "c3a4b54e708fede2d5e6c278b15dace8");

var GuideWide = function GuideWide(_ref) {
  var slug = _ref.slug,
      name = _ref.name;

  var _useElementSize = Object(_hooks_useElementSize__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      _useElementSize2 = _slicedToArray(_useElementSize, 2),
      mapWrapRef = _useElementSize2[0],
      mapWidth = _useElementSize2[1]; // The difference between current and chosen is current is a passive
  // selection that happens on scroll. Chosen happens on a specific action.
  // sets popup, marker as active - used on click of marker or when hit is scrolled to


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentTown = _useState2[0],
      setCurrentTown = _useState2[1]; // on click of marker


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      chosenTown = _useState4[0],
      setChosenTown = _useState4[1];

  var filter = "guides:".concat(slug);

  var renderPopup = function renderPopup() {
    return currentTown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
      latitude: currentTown._geoloc.lat,
      longitude: currentTown._geoloc.lng,
      closeButton: false,
      anchor: "bottom",
      offsetTop: -20,
      tipSize: 5,
      closeOnClick: false
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, currentTown.name)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["InstantSearch"], {
    searchClient: searchClient,
    indexName: "test_GHOST_TOWNS"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Configure"], {
    filters: filter
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-3 sm:ml-0 mr-3 mb-10 pb-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Guide: ", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "md:hidden"
  }, "View as Map"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuideHitsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setCurrentTown: setCurrentTown,
    chosenTown: chosenTown
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2",
    id: "test",
    ref: mapWrapRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed",
    style: {
      top: '55px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GeoSearchMapbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: mapWidth,
    height: 500
  }, function (_ref2) {
    var hits = _ref2.hits;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderPopup(), hits.map(function (hit) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: hit.name
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapMarker__WEBPACK_IMPORTED_MODULE_7__["default"], {
        latitude: hit._geoloc.lat,
        longitude: hit._geoloc.lng,
        name: hit.name,
        onClick: function onClick() {
          setCurrentTown(hit);
          setChosenTown(hit);
        },
        isSelected: currentTown !== null && currentTown.name === hit.name
      }));
    }));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: '40rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "More Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To buffer hits so they can be scrolled with map on larger screens")));
};

GuideWide.propTypes = {
  slug: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (GuideWide);

/***/ }),

/***/ "./assets/js/components/HitIcon.js":
/*!*****************************************!*\
  !*** ./assets/js/components/HitIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_marker_15_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/marker-15.svg */ "./images/marker-15.svg");
/* harmony import */ var _images_marker_15_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_marker_15_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_marker_15_selected_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/marker-15-selected.svg */ "./images/marker-15-selected.svg");
/* harmony import */ var _images_marker_15_selected_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_marker_15_selected_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_star_15_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/star-15.svg */ "./images/star-15.svg");
/* harmony import */ var _images_star_15_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_star_15_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_star_15_selected_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/star-15-selected.svg */ "./images/star-15-selected.svg");
/* harmony import */ var _images_star_15_selected_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_star_15_selected_svg__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var HitIcon = function HitIcon(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 30 : _ref$size,
      isFeatured = _ref.isFeatured,
      isSelected = _ref.isSelected,
      props = _objectWithoutProperties(_ref, ["className", "size", "isFeatured", "isSelected"]);

  var icon = _images_marker_15_svg__WEBPACK_IMPORTED_MODULE_2___default.a;

  if (isFeatured) {
    icon = isSelected ? _images_star_15_selected_svg__WEBPACK_IMPORTED_MODULE_5___default.a : _images_star_15_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
  } else if (isSelected) {
    icon = _images_marker_15_selected_svg__WEBPACK_IMPORTED_MODULE_3___default.a;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    alt: "icon",
    className: className,
    src: icon,
    width: size
  }, props));
};

HitIcon.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].number,
  isFeatured: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool
};
/* harmony default export */ __webpack_exports__["default"] = (HitIcon);

/***/ }),

/***/ "./assets/js/components/Icon.js":
/*!**************************************!*\
  !*** ./assets/js/components/Icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["name", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], _extends({
    icon: name,
    size: size
  }, props));
};

Icon.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string,
  // e.g. 'xs', 'sm', 'lg', '2x', etc.
  size: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./assets/js/components/LocationFilters.js":
/*!*************************************************!*\
  !*** ./assets/js/components/LocationFilters.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algolia-places-react */ "./node_modules/algolia-places-react/dist/index.es.js");
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algolia_places_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RadiusSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadiusSelect */ "./assets/js/components/RadiusSelect.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var LocationFilters = function LocationFilters(_ref) {
  var aroundRadius = _ref.aroundRadius,
      aroundLocationName = _ref.aroundLocationName,
      selectedTab = _ref.selectedTab,
      onChangeViaIP = _ref.onChangeViaIP,
      onChangeRadius = _ref.onChangeRadius,
      onChangeAroundLatLng = _ref.onChangeAroundLatLng,
      onChangeLocationName = _ref.onChangeLocationName,
      onTabChange = _ref.onTabChange;

  var getButtonClasses = function getButtonClasses(tabNumber) {
    var _classNames;

    var buttonClassesNormal = 'mt-2 inline mx-2';
    var buttonClassesSelected = 'underline';
    return classNames((_classNames = {}, _defineProperty(_classNames, buttonClassesNormal, true), _defineProperty(_classNames, buttonClassesSelected, selectedTab === tabNumber), _classNames));
  };

  var openFilterByAllTab = function openFilterByAllTab() {
    onTabChange(1);
    onChangeAroundLatLng('');
    onChangeLocationName('');
    onChangeViaIP(false);
  };

  var openFilterByMyLocationTab = function openFilterByMyLocationTab() {
    onTabChange(2);
    onChangeAroundLatLng('');
    onChangeLocationName('');
    onChangeViaIP(true);
  };

  var openFilterByAnyLocationTab = function openFilterByAnyLocationTab() {
    onTabChange(3);
    onChangeViaIP(false);
  };

  var handlePlaceSelection = function handlePlaceSelection(_ref2) {
    var suggestion = _ref2.suggestion;
    onChangeAroundLatLng("".concat(suggestion.latlng.lat, ",").concat(suggestion.latlng.lng));
    onChangeLocationName(suggestion.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "mr-3"
  }, "Search by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: getButtonClasses(1),
    onClick: openFilterByAllTab
  }, "all"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: getButtonClasses(2),
    onClick: openFilterByMyLocationTab
  }, "my location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: getButtonClasses(3),
    onClick: openFilterByAnyLocationTab
  }, "a location")), selectedTab === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadiusSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onChangeRadius,
    currentValue: aroundRadius
  })), selectedTab === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(algolia_places_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultValue: aroundLocationName,
    options: {
      appId: "plLHTLSZESWF",
      apiKey: "f1e8cfcd27b9bf33dccfa95eab24882b",
      countries: ['us'],
      type: 'city',
      aroundLatLngViaIP: false
    },
    onChange: handlePlaceSelection
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadiusSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: onChangeRadius,
    currentValue: aroundRadius
  })));
};

LocationFilters.propTypes = {
  aroundRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  // e.g. Philipsburg, Montana, United States of America
  aroundLocationName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  // e.g. 1, 2, 3
  selectedTab: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onChangeViaIP: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChangeRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChangeAroundLatLng: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChangeLocationName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onTabChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (LocationFilters);

/***/ }),

/***/ "./assets/js/components/Map.js":
/*!*************************************!*\
  !*** ./assets/js/components/Map.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.json */ "./assets/js/components/style.json");
var _style_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./style.json */ "./assets/js/components/style.json", 1);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var token = "pk.eyJ1IjoiYWRhbXRzYWkiLCJhIjoiY2prbW84NWFtMDNkdTNwb2V2ZnF5dTNhMSJ9.aoHMtGjoL3DgKWiILQHN6g";

var Map = function Map(_ref) {
  var children = _ref.children,
      _ref$onUpdateViewport = _ref.onUpdateViewport,
      onUpdateViewport = _ref$onUpdateViewport === void 0 ? function () {} : _ref$onUpdateViewport,
      viewport = _ref.viewport;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, viewport, {
    mapStyle: _style_json__WEBPACK_IMPORTED_MODULE_3__,
    mapboxApiAccessToken: token,
    onViewportChange: onUpdateViewport
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"], {
    onViewportChange: onUpdateViewport
  }), children);
};

Map.propTypes = {
  onUpdateViewport: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./assets/js/components/MapMarker.js":
/*!*******************************************!*\
  !*** ./assets/js/components/MapMarker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HitIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HitIcon */ "./assets/js/components/HitIcon.js");





var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var MapMarker = function MapMarker(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      _ref$isFeatured = _ref.isFeatured,
      isFeatured = _ref$isFeatured === void 0 ? false : _ref$isFeatured,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected;
  var markerClass = classNames({
    'z-10': isSelected
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    latitude: latitude,
    longitude: longitude,
    offsetLeft: -16,
    offsetTop: -20,
    className: markerClass
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HitIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isFeatured: isFeatured,
    isSelected: isSelected
  }))));
};

MapMarker.propTypes = {
  latitude: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  longitude: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  isFeatured: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool
};
/* harmony default export */ __webpack_exports__["default"] = (MapMarker);

/***/ }),

/***/ "./assets/js/components/MapSearch.js":
/*!*******************************************!*\
  !*** ./assets/js/components/MapSearch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use/lib/useLocalStorage */ "./node_modules/react-use/lib/useLocalStorage.js");
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rooks_use_timeout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rooks/use-timeout */ "./node_modules/@rooks/use-timeout/lib/index.esm.js");
/* harmony import */ var _GeoSearchMapbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GeoSearchMapbox */ "./assets/js/components/GeoSearchMapbox.js");
/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MapMarker */ "./assets/js/components/MapMarker.js");
/* harmony import */ var _CustomStateResults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CustomStateResults */ "./assets/js/components/CustomStateResults.js");
/* harmony import */ var _TownHits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TownHits */ "./assets/js/components/TownHits.js");
/* harmony import */ var _LocationFilters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LocationFilters */ "./assets/js/components/LocationFilters.js");
/* harmony import */ var _ToggleRefinement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ToggleRefinement */ "./assets/js/components/ToggleRefinement.js");
/* harmony import */ var _RefinementClearButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RefinementClearButton */ "./assets/js/components/RefinementClearButton.js");
/* harmony import */ var _RefinementSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RefinementSelect */ "./assets/js/components/RefinementSelect.js");
/* harmony import */ var _hooks_useElementSize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useElementSize */ "./assets/js/components/hooks/useElementSize.js");
/* harmony import */ var _hooks_useURLSearchState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/useURLSearchState */ "./assets/js/components/hooks/useURLSearchState.js");
/* harmony import */ var _hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hooks/useIsMobile */ "./assets/js/components/hooks/useIsMobile.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default()("S5AHQE32Z2", "c3a4b54e708fede2d5e6c278b15dace8");
var defaultAroundRadius = '64373';

var MapSearch = function MapSearch() {
  //----------------------------
  // Filters
  //----------------------------
  var initialSearchState = getSearchStateFromURL();
  var initialAroundRadius = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(initialSearchState, 'configure.aroundRadius', defaultAroundRadius);
  var initialAroundLatLng = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(initialSearchState, 'configure.aroundLatLng', null);
  var initialAroundLatLngViaIP = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(initialSearchState, 'configure.aroundLatLngViaIP', false);

  var _useURLSearchState = Object(_hooks_useURLSearchState__WEBPACK_IMPORTED_MODULE_18__["default"])(initialSearchState),
      _useURLSearchState2 = _slicedToArray(_useURLSearchState, 4),
      searchState = _useURLSearchState2[0],
      searchLocation = _useURLSearchState2[1],
      setURLSearchState = _useURLSearchState2[2],
      setURLSearchLocation = _useURLSearchState2[3];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialAroundRadius),
      _useState2 = _slicedToArray(_useState, 2),
      aroundRadius = _useState2[0],
      setAroundRadius = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialAroundLatLng),
      _useState4 = _slicedToArray(_useState3, 2),
      aroundLatLng = _useState4[0],
      setAroundLatLng = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialAroundLatLngViaIP),
      _useState6 = _slicedToArray(_useState5, 2),
      aroundLatLngViaIP = _useState6[0],
      setAroundLatLngViaIP = _useState6[1]; // Set initial location filter tab


  var initialTab = 1;

  if (initialAroundLatLngViaIP) {
    initialTab = 2;
  } else if (!initialAroundLatLngViaIP && initialAroundLatLng) {
    initialTab = 3;
  }

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTab),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedLocationFilterTab = _useState8[0],
      setSelectedLocationFilterTab = _useState8[1];

  var onSearchStateChange = function onSearchStateChange(searchState) {
    setURLSearchState(searchState);
  };

  var onSearchLocationChange = function onSearchLocationChange(locationName) {
    setURLSearchLocation(locationName);
  };

  var clearFilters = function clearFilters() {
    setAroundRadius(defaultAroundRadius);
    setAroundLatLng(null);
    setAroundLatLngViaIP(false);
    setSelectedLocationFilterTab(1);
    setURLSearchState({});
    setURLSearchLocation('');
  };

  var areFiltersApplied = function areFiltersApplied() {
    var tempSearchState = _objectSpread({}, searchState);

    delete tempSearchState.page;
    delete tempSearchState.data;
    return Object.keys(tempSearchState).length > 0;
  }; //----------------------------
  // UI
  //----------------------------


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      popupHit = _useState10[0],
      setPopupHit = _useState10[1];

  var _useLocalStorage = react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_1___default()('mobileViewMode', 'list'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      mobileViewMode = _useLocalStorage2[0],
      setMobileViewMode = _useLocalStorage2[1];

  var _useElementSize = Object(_hooks_useElementSize__WEBPACK_IMPORTED_MODULE_17__["default"])(),
      _useElementSize2 = _slicedToArray(_useElementSize, 3),
      mapWrapRef = _useElementSize2[0],
      mapWidth = _useElementSize2[1],
      mapHeight = _useElementSize2[2];

  var _useTimeout = Object(_rooks_use_timeout__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    setPopupHit(null);
  }, 300),
      startPopupHideTimeout = _useTimeout.start,
      clearPopupHideTimeout = _useTimeout.clear; //----------------------------
  // Render
  //----------------------------


  var renderPopup = function renderPopup() {
    return popupHit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onMouseEnter: clearPopupHideTimeout,
      onMouseLeave: startPopupHideTimeout
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
      latitude: popupHit._geoloc.lat,
      longitude: popupHit._geoloc.lng,
      closeButton: false,
      anchor: "bottom",
      tipSize: 5,
      closeOnClick: false,
      offsetTop: -20
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/towns/".concat(popupHit.slug)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mt-2"
    }, popupHit.name))));
  };

  var config = _objectSpread({
    aroundLatLngViaIP: aroundLatLngViaIP,
    aroundRadius: aroundRadius
  }, aroundLatLng !== null ? {
    aroundLatLng: aroundLatLng
  } : {}, {
    hitsPerPage: 10
  });

  var isMobile = Object(_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_19__["default"])();
  console.log(mapHeight);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__["InstantSearch"], {
    searchClient: searchClient,
    searchState: searchState,
    indexName: "test_GHOST_TOWNS",
    onSearchStateChange: onSearchStateChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__["Configure"], config), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__["SearchBox"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LocationFilters__WEBPACK_IMPORTED_MODULE_13__["default"], {
    aroundRadius: aroundRadius,
    aroundLocationName: searchLocation,
    selectedTab: selectedLocationFilterTab,
    onChangeViaIP: setAroundLatLngViaIP,
    onChangeRadius: setAroundRadius,
    onChangeAroundLatLng: setAroundLatLng,
    onChangeLocationName: onSearchLocationChange,
    onTabChange: setSelectedLocationFilterTab
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mr-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleRefinement__WEBPACK_IMPORTED_MODULE_14__["default"], {
    attribute: "featured",
    label: "Featured",
    value: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RefinementSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
    attribute: "road_condition",
    label: "Road"
  }))), areFiltersApplied() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RefinementClearButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: function onClick() {
      return clearFilters();
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:hidden text-right mr-1"
  }, mobileViewMode === 'map' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "underline text-xs",
    onClick: function onClick() {
      return setMobileViewMode('list');
    }
  }, "List"), mobileViewMode === 'list' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "underline text-xs",
    onClick: function onClick() {
      return setMobileViewMode('map');
    }
  }, "Map")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), (!isMobile || mobileViewMode === 'list') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomStateResults__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TownHits__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onMouseEnter: function onMouseEnter(hit) {
      return setPopupHit(hit);
    },
    onMouseLeave: function onMouseLeave() {
      return setPopupHit(null);
    }
  })))), (!isMobile || mobileViewMode === 'map') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-2 md:ml-5",
    style: {
      height: '100%'
    },
    ref: mapWrapRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GeoSearchMapbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: mapWidth,
    height: mapHeight
  }, function (_ref) {
    var hits = _ref.hits;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderPopup(), hits.map(function (hit) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: hit.name,
        onMouseEnter: function onMouseEnter() {
          clearPopupHideTimeout();
          setPopupHit(hit);
        },
        onMouseLeave: function onMouseLeave() {
          startPopupHideTimeout();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapMarker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        latitude: hit._geoloc.lat,
        longitude: hit._geoloc.lng,
        name: hit.name,
        isFeatured: !!hit.featured,
        isSelected: popupHit && popupHit.name === hit.name
      }));
    }));
  })))));
};

function getSearchStateFromURL() {
  var state = qs__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.search.slice(1));

  if (state.configure) {
    var aroundLatLngViaIP = state.configure.aroundLatLngViaIP;

    if (aroundLatLngViaIP) {
      state.configure.aroundLatLngViaIP = aroundLatLngViaIP === 'true';
    }
  }

  for (var key in state.toggle) {
    state.toggle[key] = state.toggle[key] === 'true';
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (MapSearch);

/***/ }),

/***/ "./assets/js/components/MapSearchResultStatamic.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/MapSearchResultStatamic.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/strings */ "./assets/js/components/helpers/strings.js");




var MapSeachResultStatamic = function MapSeachResultStatamic(_ref) {
  var searchResult = _ref.searchResult;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap my-3 content-between border rounded border-tan-400 bg-white px-4 py-2 min-h-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-col flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tagline"
  }, searchResult.county, " County"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: searchResult.url
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-semibold text-lg"
  }, searchResult.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, " ", searchResult.states))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-brown text-xs mt-2"
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(Object(_helpers_strings__WEBPACK_IMPORTED_MODULE_2__["truncate"])(searchResult.summary_description))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-row mb-3"
  }, searchResult.access && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-blue"
  }, searchResult.access)));
};

/* harmony default export */ __webpack_exports__["default"] = (MapSeachResultStatamic);

/***/ }),

/***/ "./assets/js/components/MapSearchStatamic.js":
/*!***************************************************!*\
  !*** ./assets/js/components/MapSearchStatamic.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MapSearchResultStatamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapSearchResultStatamic */ "./assets/js/components/MapSearchResultStatamic.js");
/* harmony import */ var _reducers_MapSearchStatamicReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/MapSearchStatamicReducer */ "./assets/js/components/reducers/MapSearchStatamicReducer.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // App




var MapSearchStatamicComponent = function MapSearchStatamicComponent(_ref) {
  var searchResults = _ref.searchResults,
      fetchSearchResults = _ref.fetchSearchResults;

  //----------------------------
  // Helpers
  //----------------------------
  var search =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function search() {
      return _ref2.apply(this, arguments);
    };
  }(); //----------------------------
  // Effects
  //----------------------------


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchSearchResults();
  }, []); //----------------------------
  // Render
  //----------------------------

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mx-2 mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    className: "ais-SearchBox-form",
    action: "",
    role: "search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "ais-SearchBox-input",
    type: "search",
    placeholder: "Search here\u2026",
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    required: true,
    maxLength: "512"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    title: "Submit your search query.",
    className: "ais-SearchBox-submit"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "ais-SearchBox-submitIcon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    viewBox: "0 0 40 40"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "reset",
    title: "Clear the search query.",
    className: "ais-SearchBox-reset",
    hidden: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "ais-SearchBox-resetIcon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: "10",
    height: "10"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "search-results-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "text-red text-2xl font-semibold mt-3"
  }, searchResults.length, " Ghost Town", searchResults.length > 1 && 's'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, searchResults.map(function (searchResult) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MapSearchResultStatamic__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: searchResult.id,
      searchResult: searchResult
    });
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mx-2 md:ml-5",
    style: {
      height: '100%'
    }
  }, "Map")));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchResults: Object(_reducers_MapSearchStatamicReducer__WEBPACK_IMPORTED_MODULE_4__["getSearchResultsState"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchSearchResults: function fetchSearchResults() {
      return _reducers_MapSearchStatamicReducer__WEBPACK_IMPORTED_MODULE_4__["dispatchFetchSearchResults"].apply(void 0, arguments)(dispatch);
    }
  };
};

var MapSearchStatamic = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MapSearchStatamicComponent);
MapSearchStatamic.reducers = {
  MapSearchStatamic: _reducers_MapSearchStatamicReducer__WEBPACK_IMPORTED_MODULE_4__["reducers"]
};
/* harmony default export */ __webpack_exports__["default"] = (MapSearchStatamic); // import useLocalStorage from 'react-use/lib/useLocalStorage';
// import {InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
// import {Popup} from 'react-map-gl';
// import get from 'lodash.get';
// import qs from 'qs';
// import useTimeout from '@rooks/use-timeout';
// import GeoSearchMapbox from './GeoSearchMapbox';
// import MapMarker from './MapMarker';
// import CustomStateResults from './CustomStateResults';
// import TownHits from './TownHits';
// import LocationFilters from './LocationFilters';
// import ToggleRefinement from './ToggleRefinement';
// import RefinementClearButton from './RefinementClearButton';
// import RefinementSelect from './RefinementSelect';
// import useElementSize from './hooks/useElementSize';
// import useURLSearchState from './hooks/useURLSearchState';
// import useIsMobile from './hooks/useIsMobile';
// const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);
// const defaultAroundRadius = '64373';
// const MapSearchStatamic = () => {
//     //----------------------------
//     // Filters
//     //----------------------------
//     const initialSearchState = getSearchStateFromURL();
//     const initialAroundRadius = get(initialSearchState, 'configure.aroundRadius', defaultAroundRadius);
//     const initialAroundLatLng = get(initialSearchState, 'configure.aroundLatLng', null);
//     const initialAroundLatLngViaIP = get(initialSearchState, 'configure.aroundLatLngViaIP', false);
//     const [searchState, searchLocation, setURLSearchState, setURLSearchLocation] = useURLSearchState(
//         initialSearchState
//     );
//     const [aroundRadius, setAroundRadius] = useState(initialAroundRadius);
//     const [aroundLatLng, setAroundLatLng] = useState(initialAroundLatLng);
//     const [aroundLatLngViaIP, setAroundLatLngViaIP] = useState(initialAroundLatLngViaIP);
//     // Set initial location filter tab
//     let initialTab = 1;
//     if (initialAroundLatLngViaIP) {
//         initialTab = 2;
//     } else if (!initialAroundLatLngViaIP && initialAroundLatLng) {
//         initialTab = 3;
//     }
//     const [selectedLocationFilterTab, setSelectedLocationFilterTab] = useState(initialTab);
//     const onSearchStateChange = searchState => {
//         setURLSearchState(searchState);
//     };
//     const onSearchLocationChange = locationName => {
//         setURLSearchLocation(locationName);
//     };
//     const clearFilters = () => {
//         setAroundRadius(defaultAroundRadius);
//         setAroundLatLng(null);
//         setAroundLatLngViaIP(false);
//         setSelectedLocationFilterTab(1);
//         setURLSearchState({});
//         setURLSearchLocation('');
//     };
//     const areFiltersApplied = () => {
//         const tempSearchState = { ...searchState };
//         delete tempSearchState.page;
//         delete tempSearchState.data;
//         return Object.keys(tempSearchState).length > 0;
//     };
//     //----------------------------
//     // UI
//     //----------------------------
//     const [popupHit, setPopupHit] = useState(null);
//     const [mobileViewMode, setMobileViewMode] = useLocalStorage('mobileViewMode', 'list');
//     const [mapWrapRef, mapWidth, mapHeight] = useElementSize();
//     const { start: startPopupHideTimeout, clear: clearPopupHideTimeout } = useTimeout(() => {
//         setPopupHit(null);
//     }, 300);
//     //----------------------------
//     // Render
//     //----------------------------
//     const renderPopup = () =>
//         popupHit && (
//             <div onMouseEnter={clearPopupHideTimeout} onMouseLeave={startPopupHideTimeout}>
//                 <Popup
//                     latitude={popupHit._geoloc.lat}
//                     longitude={popupHit._geoloc.lng}
//                     closeButton={false}
//                     anchor="bottom"
//                     tipSize={5}
//                     closeOnClick={false}
//                     offsetTop={-20}
//                 >
//                     <a href={`/towns/${popupHit.slug}`}>
//                         <span className="mt-2">{popupHit.name}</span>
//                     </a>
//                 </Popup>
//             </div>
//         );
//     const config = {
//         aroundLatLngViaIP,
//         aroundRadius,
//         ...(aroundLatLng !== null ? { aroundLatLng } : {}),
//         hitsPerPage: 10,
//     };
//     const isMobile = useIsMobile();
//     console.log(mapHeight);
//     return (
//         <InstantSearch
//             searchClient={searchClient}
//             searchState={searchState}
//             indexName={process.env.REACT_APP_ALGOLIA_INDEX}
//             onSearchStateChange={onSearchStateChange}
//         >
//             <Configure {...config} />
//             <div className="flex flex-wrap">
//                 <div className="w-full md:w-1/2">
//                     <div className="mx-2 mt-3">
//                         <SearchBox />
//                         <LocationFilters
//                             aroundRadius={aroundRadius}
//                             aroundLocationName={searchLocation}
//                             selectedTab={selectedLocationFilterTab}
//                             onChangeViaIP={setAroundLatLngViaIP}
//                             onChangeRadius={setAroundRadius}
//                             onChangeAroundLatLng={setAroundLatLng}
//                             onChangeLocationName={onSearchLocationChange}
//                             onTabChange={setSelectedLocationFilterTab}
//                         />
//                         <hr className="my-3" />
//                         <div className="mt-2 mb-4">
//                             <div className="inline-block mr-5">
//                                 <ToggleRefinement attribute="featured" label="Featured" value />
//                             </div>
//                             <div className="inline-block ml-5">
//                                 <RefinementSelect attribute="road_condition" label="Road" />
//                             </div>
//                         </div>
//                         {areFiltersApplied() && (
//                             <div className="mb-4">
//                                 <RefinementClearButton onClick={() => clearFilters()} />
//                             </div>
//                         )}
//                         <div className="md:hidden text-right mr-1">
//                             {mobileViewMode === 'map' && (
//                                 <button
//                                     type="button"
//                                     className="underline text-xs"
//                                     onClick={() => setMobileViewMode('list')}
//                                 >
//                                     List
//                                 </button>
//                             )}
//                             {mobileViewMode === 'list' && (
//                                 <button
//                                     type="button"
//                                     className="underline text-xs"
//                                     onClick={() => setMobileViewMode('map')}
//                                 >
//                                     Map
//                                 </button>
//                             )}
//                         </div>
//                         <hr />
//                         {(!isMobile || mobileViewMode === 'list') && (
//                             <div>
//                                 <CustomStateResults />
//                                 <TownHits
//                                     onMouseEnter={hit => setPopupHit(hit)}
//                                     onMouseLeave={() => setPopupHit(null)}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 {(!isMobile || mobileViewMode === 'map') && (
//                     <div className="w-full md:w-1/2">
//                         <div className="mx-2 md:ml-5" style={{ height: '100%' }} ref={mapWrapRef}>
//                             <GeoSearchMapbox width={mapWidth} height={mapHeight}>
//                                 {({ hits }) => (
//                                     <div>
//                                         {renderPopup()}
//                                         {hits.map(hit => (
//                                             <div
//                                                 key={hit.name}
//                                                 onMouseEnter={() => {
//                                                     clearPopupHideTimeout();
//                                                     setPopupHit(hit);
//                                                 }}
//                                                 onMouseLeave={() => {
//                                                     startPopupHideTimeout();
//                                                 }}
//                                             >
//                                                 <MapMarker
//                                                     latitude={hit._geoloc.lat}
//                                                     longitude={hit._geoloc.lng}
//                                                     name={hit.name}
//                                                     isFeatured={!!hit.featured}
//                                                     isSelected={popupHit && popupHit.name === hit.name}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </GeoSearchMapbox>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </InstantSearch>
//     );
// };
// function getSearchStateFromURL() {
//     const state = qs.parse(window.location.search.slice(1));
//     if (state.configure) {
//         const { aroundLatLngViaIP } = state.configure;
//         if (aroundLatLngViaIP) {
//             state.configure.aroundLatLngViaIP = aroundLatLngViaIP === 'true';
//         }
//     }
//     for (const key in state.toggle) {
//         state.toggle[key] = state.toggle[key] === 'true';
//     }
//     return state;
// }

/***/ }),

/***/ "./assets/js/components/MapSingle.js":
/*!*******************************************!*\
  !*** ./assets/js/components/MapSingle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./assets/js/components/Map.js");
/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapMarker */ "./assets/js/components/MapMarker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ "./assets/js/components/Icon.js");
/* harmony import */ var _hooks_useElementSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useElementSize */ "./assets/js/components/hooks/useElementSize.js");
/* harmony import */ var _reducers_viewportReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/viewportReducer */ "./assets/js/components/reducers/viewportReducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var MapSingle = function MapSingle(_ref) {
  var town = _ref.town;

  var _useElementSize = Object(_hooks_useElementSize__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      _useElementSize2 = _slicedToArray(_useElementSize, 2),
      mapWrapRef = _useElementSize2[0],
      mapWrapWidth = _useElementSize2[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_viewportReducer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: mapWrapWidth,
    height: 500,
    zoom: 12,
    latitude: town._geoloc.lat,
    longitude: town._geoloc.lng
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      viewport = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      showPopup = _useState2[0],
      setShowPopup = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'UPDATE',
      params: {
        width: mapWrapWidth
      }
    });
  }, [mapWrapRef, mapWrapWidth]);

  var updateViewport = function updateViewport(updatedViewport) {
    dispatch({
      type: 'UPDATE',
      params: updatedViewport
    });
  };

  var renderPopup = function renderPopup() {
    return showPopup && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      latitude: town._geoloc.lat,
      longitude: town._geoloc.lng,
      closeButton: true,
      anchor: "bottom",
      onClose: function onClose() {
        return setShowPopup(false);
      },
      tipSize: 5,
      closeOnClick: false,
      offsetTop: -20
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-2"
    }, town.name));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3",
    ref: mapWrapRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    viewport: viewport,
    onUpdateViewport: updateViewport
  }, renderPopup(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapMarker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: town.name,
    latitude: town._geoloc.lat,
    longitude: town._geoloc.lng,
    name: town.name,
    featured: false,
    onClick: function onClick() {
      return setShowPopup(true);
    }
  })));
}; // MapSingle.propTypes = {
//     prop: PropTypes.
// };


/* harmony default export */ __webpack_exports__["default"] = (MapSingle);

/***/ }),

/***/ "./assets/js/components/PlacesInput.js":
/*!*********************************************!*\
  !*** ./assets/js/components/PlacesInput.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algolia-places-react */ "./node_modules/algolia-places-react/dist/index.es.js");
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algolia_places_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var PlacesInput = function PlacesInput(_ref) {
  var onSelection = _ref.onSelection;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(algolia_places_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placeholder: "Where would you like to explore?",
    options: {
      appId: "plLHTLSZESWF",
      apiKey: "f1e8cfcd27b9bf33dccfa95eab24882b",
      countries: ['us'],
      type: 'city',
      aroundLatLngViaIP: false
    },
    onChange: onSelection
  });
};

PlacesInput.propTypes = {
  onSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
/* harmony default export */ __webpack_exports__["default"] = (PlacesInput);

/***/ }),

/***/ "./assets/js/components/PlacesRedirectToExplore.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/PlacesRedirectToExplore.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algolia-places-react */ "./node_modules/algolia-places-react/dist/index.es.js");
/* harmony import */ var algolia_places_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algolia_places_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlacesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlacesInput */ "./assets/js/components/PlacesInput.js");




var PlacesRedirectToExplore = function PlacesRedirectToExplore() {
  var handlePlaceSelection = function handlePlaceSelection(_ref) {
    var suggestion = _ref.suggestion;

    if (suggestion.value) {
      window.location.href = "/explore?query=".concat(suggestion.value);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlacesInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSelection: handlePlaceSelection
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PlacesRedirectToExplore);

/***/ }),

/***/ "./assets/js/components/RadiusSelect.js":
/*!**********************************************!*\
  !*** ./assets/js/components/RadiusSelect.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var items = [{
  label: '30 miles',
  value: '64373'
}, {
  label: '100 miles',
  value: '160934'
}, {
  label: '500 miles',
  value: '804672'
}, {
  label: 'All',
  value: 'all'
}];

var RadiusSelect = function RadiusSelect(_ref) {
  var currentValue = _ref.currentValue,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-2 mr-2 text-xs inline"
  }, "Search within:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: currentValue || '',
    onChange: function onChange(event) {
      return _onChange(event.currentTarget.value);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Select mile radius"), items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: item.label,
      value: item.isRefined ? currentValue : item.value
    }, item.label);
  })));
};

RadiusSelect.propTypes = {
  currentValue: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func
};
/* harmony default export */ __webpack_exports__["default"] = (RadiusSelect);

/***/ }),

/***/ "./assets/js/components/RefinementClearButton.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/RefinementClearButton.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledComponents */ "./assets/js/components/StyledComponents.js");





var RefinementClearButton = function RefinementClearButton(_ref) {
  var refine = _ref.refine,
      items = _ref.items,
      _onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "button button-white button-sm hover:bg-tan-200",
    onClick: function onClick() {
      refine(items);

      _onClick();
    }
  }, "Clear Filters");
};

RefinementClearButton.propTypes = {
  refine: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  items: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].array,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectCurrentRefinements"])(RefinementClearButton));

/***/ }),

/***/ "./assets/js/components/RefinementList.js":
/*!************************************************!*\
  !*** ./assets/js/components/RefinementList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var RefinementList = function RefinementList(_ref) {
  var items = _ref.items,
      label = _ref.label,
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.label
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      checked: item.isRefined,
      type: "checkbox",
      onChange: function onChange() {
        return refine(item.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ml-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, item.label, " (", item.count, ")"))));
  })));
};

var ItemPropType = prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].shape({
  value: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string.isRequired,
  isRefined: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool.isRequired
});
RefinementList.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(ItemPropType).isRequired,
  refine: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectRefinementList"])(RefinementList));

/***/ }),

/***/ "./assets/js/components/RefinementSelect.js":
/*!**************************************************!*\
  !*** ./assets/js/components/RefinementSelect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var RefinementSelect = function RefinementSelect(_ref) {
  var attribute = _ref.attribute,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, label, ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block ml-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["MenuSelect"], {
    attribute: attribute
  }))));
};

RefinementSelect.propTypes = {
  attribute: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RefinementSelect);

/***/ }),

/***/ "./assets/js/components/SanitizeHtml.js":
/*!**********************************************!*\
  !*** ./assets/js/components/SanitizeHtml.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/dist/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaultOptions = {
  // allow all
  allowedTags: false,
  allowedAttributes: false,
  selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta']
};

var sanitize = function sanitize(dirty, options) {
  return {
    __html: sanitize_html__WEBPACK_IMPORTED_MODULE_2___default()(dirty, _objectSpread({}, defaultOptions, {}, options))
  };
};

var SanitizeHtml = function SanitizeHtml(_ref) {
  var html = _ref.html,
      options = _ref.options;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: sanitize(html, options)
  });
};

SanitizeHtml.propTypes = {
  html: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].object
};
/* harmony default export */ __webpack_exports__["default"] = (SanitizeHtml);

/***/ }),

/***/ "./assets/js/components/StyledComponents.js":
/*!**************************************************!*\
  !*** ./assets/js/components/StyledComponents.js ***!
  \**************************************************/
/*! exports provided: Button, ButtonSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSmall", function() { return ButtonSmall; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 80%;\n    line-height: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #f8f8f8;\n    border-radius: 5px;\n    border: 1px solid #e2e8f0;\n    padding: 4px 10px 4px 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject());
var ButtonSmall = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button)(_templateObject2());

/***/ }),

/***/ "./assets/js/components/ToggleRefinement.js":
/*!**************************************************!*\
  !*** ./assets/js/components/ToggleRefinement.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var ToggleRefinement = function ToggleRefinement(_ref) {
  var currentRefinement = _ref.currentRefinement,
      label = _ref.label,
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    checked: currentRefinement === true || currentRefinement === 'true',
    type: "checkbox",
    onChange: function onChange() {
      return refine(!currentRefinement);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, label)));
};

ToggleRefinement.propTypes = {
  currentRefinement: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool,
  refine: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectToggleRefinement"])(ToggleRefinement));

/***/ }),

/***/ "./assets/js/components/TownBody.js":
/*!******************************************!*\
  !*** ./assets/js/components/TownBody.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./assets/js/components/Icon.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");
/* harmony import */ var _SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SanitizeHtml */ "./assets/js/components/SanitizeHtml.js");






var TownBody = function TownBody(_ref) {
  var town = _ref.town;
  var locationQuery = town.location_query ? town.location_query : "".concat(town._geoloc.lat, ",").concat(town._geoloc.lng);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, town.narrative_description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-4 mb-2"
  }, "Narrative Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: town.narrative_description
  })), town.history && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-4 mb-2"
  }, "History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: town.history
  })), town.legacy && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-4 mb-2"
  }, "Legacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: town.legacy
  })), town.when_to_visit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-4 mb-2"
  }, "When to Visit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: town.when_to_visit
  })), town.directions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-4 mb-2"
  }, "Directions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"], {
    html: town.directions
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center",
    href: "https://www.google.com/maps/search/?api=1&query=".concat(locationQuery)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mr-1",
    name: "map-marker-alt",
    size: "xs"
  }), " View in Google Maps")));
};

TownBody.propTypes = {
  town: _types__WEBPACK_IMPORTED_MODULE_3__["hitType"]
};
/* harmony default export */ __webpack_exports__["default"] = (TownBody);

/***/ }),

/***/ "./assets/js/components/TownHeader.js":
/*!********************************************!*\
  !*** ./assets/js/components/TownHeader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./assets/js/components/Icon.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");




var TownHeader = function TownHeader(_ref) {
  var town = _ref.town;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm mt-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs uppercase"
  }, "County:"), " ", town.county), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs uppercase"
  }, "Road:"), " ", town.road_condition), town.managed_by && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs uppercase"
  }, "Managed by:"), " ", town.managed_by), town.url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs underline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: town.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "link",
    size: "xs"
  }), " Website"))));
};

TownHeader.propTypes = {
  town: _types__WEBPACK_IMPORTED_MODULE_2__["hitType"]
};
/* harmony default export */ __webpack_exports__["default"] = (TownHeader);

/***/ }),

/***/ "./assets/js/components/TownHits.js":
/*!******************************************!*\
  !*** ./assets/js/components/TownHits.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomPagination */ "./assets/js/components/CustomPagination.js");
/* harmony import */ var _HitIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HitIcon */ "./assets/js/components/HitIcon.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ "./assets/js/components/Icon.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./assets/js/components/types.js");
/* harmony import */ var _helpers_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/strings */ "./assets/js/components/helpers/strings.js");










var Hit = function Hit(_ref) {
  var hit = _ref.hit,
      _ref$onMouseEnter = _ref.onMouseEnter,
      _onMouseEnter = _ref$onMouseEnter === void 0 ? function () {} : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? function () {} : _ref$onMouseLeave;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap my-3 content-between border rounded border-tan-400 bg-white px-4 py-2 min-h-card",
    onMouseEnter: function onMouseEnter() {
      return _onMouseEnter(hit);
    },
    onMouseLeave: onMouseLeave
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-col flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tagline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Highlight"], {
    hit: hit,
    attribute: "county"
  }), " County"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/towns/".concat(hit.slug)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-semibold text-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Highlight"], {
    hit: hit,
    attribute: "name"
  }), ","), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, " ", hit.state))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-brown text-xs mt-2"
  }, Object(_helpers_strings__WEBPACK_IMPORTED_MODULE_8__["truncate"])(hit.structure_description)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-row mb-3"
  }, hit.road_condition && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-blue"
  }, hit.road_condition), hit.featured && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-blue"
  }, "Landmark"), hit.managed_by && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-blue"
  }, "Managed")));
};

Hit.propTypes = {
  hit: _types__WEBPACK_IMPORTED_MODULE_7__["hitType"],
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func
};

var Hits = function Hits(_ref2) {
  var hits = _ref2.hits,
      _ref2$onMouseEnter = _ref2.onMouseEnter,
      onMouseEnter = _ref2$onMouseEnter === void 0 ? function () {} : _ref2$onMouseEnter,
      _ref2$onMouseLeave = _ref2.onMouseLeave,
      onMouseLeave = _ref2$onMouseLeave === void 0 ? function () {} : _ref2$onMouseLeave;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, hits.map(function (hit) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hit, {
      key: hit.name,
      hit: hit,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    });
  }), hits.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomPagination__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

Hits.propTypes = {
  hits: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].array,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func
};
var TownHits = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectHits"])(Hits);
/* harmony default export */ __webpack_exports__["default"] = (TownHits);

/***/ }),

/***/ "./assets/js/components/helpers/map.js":
/*!*********************************************!*\
  !*** ./assets/js/components/helpers/map.js ***!
  \*********************************************/
/*! exports provided: getBoundingBoxFromHit, getBoundingBoxFromHits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBoxFromHit", function() { return getBoundingBoxFromHit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBoxFromHits", function() { return getBoundingBoxFromHits; });
/* harmony import */ var viewport_mercator_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewport-mercator-project */ "./node_modules/viewport-mercator-project/dist/esm/index.js");

var getBoundingBoxFromHit = function getBoundingBoxFromHit(hit) {
  return {
    longitude: hit._geoloc.lng,
    latitude: hit._geoloc.lat,
    zoom: 9
  };
};
var getBoundingBoxFromHits = function getBoundingBoxFromHits(viewport, hits) {
  if (hits.length === 1) {
    return getBoundingBoxFromHit(hits[0]);
  }

  var coords = hits.map(function (hit) {
    return hit._geoloc;
  });
  var lats = coords.map(function (coord) {
    return coord.lat;
  });
  var lngs = coords.map(function (coord) {
    return coord.lng;
  });
  var maxLng = lngs.reduce(function (a, b) {
    return Math.max(a, b);
  });
  var minLng = lngs.reduce(function (a, b) {
    return Math.min(a, b);
  });
  var maxLat = lats.reduce(function (a, b) {
    return Math.max(a, b);
  });
  var minLat = lats.reduce(function (a, b) {
    return Math.min(a, b);
  });
  var bounds = [[minLng, minLat], [maxLng, maxLat]];

  try {
    return new viewport_mercator_project__WEBPACK_IMPORTED_MODULE_0__["default"](viewport).fitBounds(bounds, {
      padding: 20,
      offset: [-100, -100]
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./assets/js/components/helpers/strings.js":
/*!*************************************************!*\
  !*** ./assets/js/components/helpers/strings.js ***!
  \*************************************************/
/*! exports provided: truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
var truncate = function truncate(text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 190;
  if (!text) return '';
  return text.length > length ? "".concat(text.slice(0, length), "...") : text;
};

/***/ }),

/***/ "./assets/js/components/hooks/useElementSize.js":
/*!******************************************************!*\
  !*** ./assets/js/components/hooks/useElementSize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useElementSize = function useElementSize() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(500),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(500),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return [ref, width, height];
};

/* harmony default export */ __webpack_exports__["default"] = (useElementSize);

/***/ }),

/***/ "./assets/js/components/hooks/useIsMobile.js":
/*!***************************************************!*\
  !*** ./assets/js/components/hooks/useIsMobile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-use/lib/useWindowSize */ "./node_modules/react-use/lib/useWindowSize.js");
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);


function useIsMobile() {
  var _useWindowSize = react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default()(),
      width = _useWindowSize.width;

  return width < 768;
}

/* harmony default export */ __webpack_exports__["default"] = (useIsMobile);

/***/ }),

/***/ "./assets/js/components/hooks/useRefIntersect.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/hooks/useRefIntersect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useRefIntersect = function useRefIntersect(y, ref, callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!ref.current) return;
    var elFromTop = ref.current.offsetTop;

    if (elFromTop >= y - 100 && elFromTop <= y + 200) {
      callback();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [y]);
};

/* harmony default export */ __webpack_exports__["default"] = (useRefIntersect);

/***/ }),

/***/ "./assets/js/components/hooks/useRefScrollTo.js":
/*!******************************************************!*\
  !*** ./assets/js/components/hooks/useRefScrollTo.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useRefScrollTo = function useRefScrollTo(ref, shouldScroll) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (shouldScroll) {
      window.scroll(0, ref.current.offsetTop - 80);
    }
  }, [ref, shouldScroll]);
};

/* harmony default export */ __webpack_exports__["default"] = (useRefScrollTo);

/***/ }),

/***/ "./assets/js/components/hooks/useURLSearchState.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/hooks/useURLSearchState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/lib/index.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Custom hook that syncs Algolia InstantSearch's state with URL
 */





var updateURLWithSearchState = function updateURLWithSearchState(searchState) {
  var queryString = qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(searchState);
  var newUrl = "".concat(window.location.pathname).concat(queryString.length > 0 ? '?' : '').concat(qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(searchState));
  window.history.pushState(searchState, null, newUrl);
};

var pruneSearchState = function pruneSearchState(searchState) {
  var configure = searchState.configure,
      menu = searchState.menu,
      toggle = searchState.toggle,
      data = searchState.data;

  if (configure) {
    var aroundLatLngIsBlank = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(configure, 'aroundLatLng', '').length === 0;
    var aroundLatLngViaIPIsFalse = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(configure, 'aroundLatLngViaIP', false) === false;

    if (aroundLatLngIsBlank) {
      delete searchState.configure.aroundLatLng;
    }

    if (aroundLatLngViaIPIsFalse) {
      delete searchState.configure.aroundLatLngViaIP;
    }

    if (aroundLatLngIsBlank && aroundLatLngViaIPIsFalse) {
      delete searchState.configure.aroundRadius;
    }

    delete searchState.configure.hitsPerPage;

    if (Object.keys(searchState.configure).length === 0) {
      delete searchState.configure;
    }
  }

  if (menu) {
    var roadConditionIsBlank = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(menu, 'road_condition', '').length === 0;

    if (roadConditionIsBlank) {
      delete searchState.menu.road_condition;
    }

    if (Object.keys(searchState.menu).length === 0) {
      delete searchState.menu;
    }
  }

  if (toggle) {
    var featuredIsFalse = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(toggle, 'featured', false) === false;

    if (featuredIsFalse) {
      delete searchState.toggle.featured;
    }

    if (Object.keys(searchState.toggle).length === 0) {
      delete searchState.toggle;
    }
  }

  if (data) {
    if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'location', '').length === 0) {
      delete searchState.data.location;
    }

    if (Object.keys(searchState.data).length === 0) {
      delete searchState.data;
    }
  }

  return searchState;
};

var useURLSearchState = function useURLSearchState() {
  var initialSearchState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prunedInitialSearchState = pruneSearchState(initialSearchState);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(prunedInitialSearchState),
      _useState2 = _slicedToArray(_useState, 2),
      searchState = _useState2[0],
      setSearchState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(prunedInitialSearchState, 'data.location', '')),
      _useState4 = _slicedToArray(_useState3, 2),
      searchLocation = _useState4[0],
      setSearchLocation = _useState4[1];

  var _useDebounce = Object(use_debounce__WEBPACK_IMPORTED_MODULE_3__["useDebounce"])(searchState, 750),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedSearchState = _useDebounce2[0];

  var _useDebounce3 = Object(use_debounce__WEBPACK_IMPORTED_MODULE_3__["useDebounce"])(searchLocation, 750),
      _useDebounce4 = _slicedToArray(_useDebounce3, 1),
      debouncedSearchLocation = _useDebounce4[0];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var urlState = _objectSpread({}, debouncedSearchState);

    if (debouncedSearchLocation.length > 0) {
      urlState.data = _objectSpread({}, urlState.data, {
        location: debouncedSearchLocation
      });
    }

    updateURLWithSearchState(urlState);
  }, [debouncedSearchState, debouncedSearchLocation]);

  var handleSearchStateChange = function handleSearchStateChange(newSearchState) {
    var prunedSearchState = pruneSearchState(newSearchState);
    setSearchState(prunedSearchState);
  };

  var handleSearchLocationChange = function handleSearchLocationChange(newLocation) {
    setSearchLocation(newLocation);
  };

  return [searchState, searchLocation, handleSearchStateChange, handleSearchLocationChange];
};

/* harmony default export */ __webpack_exports__["default"] = (useURLSearchState);

/***/ }),

/***/ "./assets/js/components/reducers/MapSearchStatamicReducer.js":
/*!*******************************************************************!*\
  !*** ./assets/js/components/reducers/MapSearchStatamicReducer.js ***!
  \*******************************************************************/
/*! exports provided: dispatchFetchSearchResults, getSearchResultsState, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchFetchSearchResults", function() { return dispatchFetchSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchResultsState", function() { return getSearchResultsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 //----------------------------
// Action Types
//----------------------------

var initSearchResultsFetch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('SEARCH_RESULTS_FETCH_INIT');
var requestSearchResultsFetch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('SEARCH_RESULTS_FETCH_REQUEST');
var receiveSearchResultsFetch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('SEARCH_RESULTS_FETCH_RECEIVE');
var errorSearchResultsFetch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('SEARCH_RESULTS_FETCH_ERROR');
var finishSearchResultsFetch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])('SEARCH_RESULTS_FETCH_FINISH'); //----------------------------
// Action Dispatch
//----------------------------

var dispatchFetchSearchResults = function dispatchFetchSearchResults() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var _ref2, _searchResults;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(initSearchResultsFetch());
                _context.prev = 1;
                dispatch(requestSearchResultsFetch());
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/!/Fetch/search?collection=towns&query=lion');

              case 5:
                _ref2 = _context.sent;
                _searchResults = _ref2.data.data;
                dispatch(receiveSearchResultsFetch(_searchResults));
                return _context.abrupt("return", _searchResults);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                dispatch(errorSearchResultsFetch(_context.t0));
                throw new Error(_context.t0);

              case 15:
                _context.prev = 15;
                dispatch(finishSearchResultsFetch());
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11, 15, 18]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; //----------------------------
// Reducers
//----------------------------


var searchResults = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(_defineProperty({}, receiveSearchResultsFetch, function (action, _ref3) {
  var payload = _ref3.payload;
  return payload;
}), []);
var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  searchResults: searchResults
}); //----------------------------
// Selectors
//----------------------------

var getSearchResultsState = function getSearchResultsState(state) {
  return state.MapSearchStatamic.searchResults;
}; //----------------------------
// Exports
//----------------------------




/***/ }),

/***/ "./assets/js/components/reducers/viewportReducer.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/reducers/viewportReducer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread({}, state, {}, action.params);

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./assets/js/components/style.json":
/*!*****************************************!*\
  !*** ./assets/js/components/style.json ***!
  \*****************************************/
/*! exports provided: version, name, metadata, center, zoom, bearing, pitch, sources, sprite, glyphs, layers, created, id, modified, owner, visibility, draft, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":8,\"name\":\"Ghost Towns\",\"metadata\":{\"mapbox:origin\":\"basic-template\",\"mapbox:autocomposite\":true,\"mapbox:type\":\"template\",\"mapbox:sdk-support\":{\"js\":\"0.50.0\",\"android\":\"6.7.0\",\"ios\":\"4.6.0\"},\"mapbox:trackposition\":true},\"center\":[-108.98112947560628,46.66034771143407],\"zoom\":6.5412451056716545,\"bearing\":0,\"pitch\":0,\"sources\":{\"composite\":{\"url\":\"mapbox://mapbox.mapbox-streets-v8\",\"type\":\"vector\"},\"mapbox://mapbox.terrain-rgb\":{\"url\":\"mapbox://mapbox.terrain-rgb\",\"type\":\"raster-dem\",\"tileSize\":256}},\"sprite\":\"mapbox://sprites/fostermade/cjw8aoh3321771cnv3tk3aenp/629bpdwpqxu5j66f3aoku8h84\",\"glyphs\":\"mapbox://fonts/fostermade/{fontstack}/{range}.pbf\",\"layers\":[{\"id\":\"background\",\"type\":\"background\",\"layout\":{},\"paint\":{\"background-color\":\"hsl(38, 48%, 86%)\"}},{\"id\":\"national_park\",\"type\":\"fill\",\"source\":\"composite\",\"source-layer\":\"landuse_overlay\",\"minzoom\":5,\"filter\":[\"==\",[\"get\",\"class\"],\"national_park\"],\"layout\":{},\"paint\":{\"fill-color\":\"hsl(78, 51%, 73%)\",\"fill-opacity\":[\"interpolate\",[\"linear\"],[\"zoom\"],5,0,6,0.5]}},{\"id\":\"landuse\",\"type\":\"fill\",\"source\":\"composite\",\"source-layer\":\"landuse\",\"minzoom\":5,\"filter\":[\"match\",[\"get\",\"class\"],[\"airport\",\"hospital\",\"park\",\"pitch\",\"school\"],true,false],\"layout\":{},\"paint\":{\"fill-color\":[\"match\",[\"get\",\"class\"],[\"airport\"],\"hsl(345, 6%, 87%)\",[\"hospital\"],\"hsl(0, 56%, 89%)\",[\"park\",\"pitch\"],\"hsl(78, 51%, 74%)\",[\"school\"],\"#ead6c8\",\"hsla(0, 0%, 0%, 0)\"],\"fill-opacity\":[\"interpolate\",[\"linear\"],[\"zoom\"],5,0,6,1]}},{\"id\":\"waterway\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"waterway\",\"minzoom\":8,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"match\",[\"get\",\"class\"],[\"canal\",\"river\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-color\":\"hsl(205, 76%, 70%)\",\"line-width\":[\"interpolate\",[\"exponential\",1.3],[\"zoom\"],8.5,0.1,20,8],\"line-opacity\":[\"interpolate\",[\"linear\"],[\"zoom\"],8,0,8.5,1]}},{\"id\":\"water\",\"type\":\"fill\",\"source\":\"composite\",\"source-layer\":\"water\",\"filter\":[\"all\"],\"layout\":{},\"paint\":{\"fill-color\":\"hsl(205, 76%, 70%)\"}},{\"id\":\"aeroway-polygon\",\"type\":\"fill\",\"source\":\"composite\",\"source-layer\":\"aeroway\",\"minzoom\":10,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"Polygon\"],[\"match\",[\"get\",\"type\"],[\"helipad\",\"runway\",\"taxiway\"],true,false]],\"layout\":{},\"paint\":{\"fill-color\":\"hsl(0, 0%, 77%)\"}},{\"id\":\"aeroway-line\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"aeroway\",\"minzoom\":9,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"match\",[\"get\",\"type\"],[\"runway\",\"taxiway\"],true,false]],\"layout\":{},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],10,0.5,18,20],\"line-color\":\"hsl(0, 0%, 77%)\"}},{\"id\":\"building\",\"type\":\"fill\",\"source\":\"composite\",\"source-layer\":\"building\",\"minzoom\":15,\"filter\":[\"all\",[\"!=\",[\"get\",\"type\"],\"building:part\"],[\"==\",[\"get\",\"underground\"],\"false\"]],\"layout\":{},\"paint\":{\"fill-color\":\"hsl(38, 35%, 78%)\",\"fill-opacity\":[\"interpolate\",[\"linear\"],[\"zoom\"],13.5,0,14,1]}},{\"id\":\"pedestrian-path\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":14,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"!=\",[\"get\",\"type\"],\"platform\"],[\"match\",[\"get\",\"class\"],[\"path\",\"pedestrian\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],14,[\"match\",[\"get\",\"class\"],\"pedestrian\",1,0.75],20,[\"match\",[\"get\",\"class\"],\"pedestrian\",8,5]],\"line-color\":[\"match\",[\"get\",\"type\"],[\"crossing\",\"sidewalk\"],\"hsl(38, 35%, 80%)\",\"hsl(38, 28%, 70%)\"]}},{\"id\":\"tunnel\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":13,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"!=\",[\"get\",\"type\"],\"service:parking_aisle\"],[\"==\",[\"get\",\"structure\"],\"tunnel\"],[\"match\",[\"get\",\"class\"],[\"motorway\",\"motorway_link\",\"trunk\",\"trunk_link\",\"primary\",\"primary_link\",\"secondary\",\"secondary_link\",\"tertiary\",\"tertiary_link\",\"street\",\"street_limited\",\"service\",\"track\"],true,false]],\"layout\":{\"line-join\":\"round\"},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],5,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],0.5,\"tertiary\",0.01,0],12,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],3,[\"secondary\",\"tertiary\"],2,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],0.5,0],18,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],30,[\"secondary\",\"tertiary\"],24,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],12,10]],\"line-color\":[\"match\",[\"get\",\"class\"],[\"primary_link\",\"secondary_link\",\"tertiary_link\",\"street\",\"street_limited\",\"service\",\"track\"],\"hsl(38, 100%, 98%)\",\"hsl(0, 0%, 100%)\"],\"line-dasharray\":[0.2,0.2]}},{\"id\":\"road\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":5,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"!=\",[\"get\",\"type\"],\"service:parking_aisle\"],[\"match\",[\"get\",\"structure\"],[\"bridge\",\"tunnel\"],false,true],[\"match\",[\"get\",\"class\"],[\"motorway\",\"motorway_link\",\"trunk\",\"trunk_link\",\"primary\",\"primary_link\",\"secondary\",\"secondary_link\",\"tertiary\",\"tertiary_link\",\"street\",\"street_limited\",\"service\",\"track\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],5,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],0.5,\"tertiary\",0.01,0],12,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],3,[\"secondary\",\"tertiary\"],2,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],0.5,0],18,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],30,[\"secondary\",\"tertiary\"],24,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],12,10]],\"line-color\":[\"match\",[\"get\",\"class\"],[\"street\",\"street_limited\",\"service\",\"track\",\"secondary_link\",\"tertiary_link\",\"primary_link\",\"trunk_link\"],\"hsl(38, 80%, 95%)\",\"hsl(0, 0%, 100%)\"]}},{\"id\":\"bridge-case\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":13,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"!=\",[\"get\",\"type\"],\"service:parking_aisle\"],[\"==\",[\"get\",\"structure\"],\"bridge\"],[\"match\",[\"get\",\"class\"],[\"motorway\",\"motorway_link\",\"trunk\",\"trunk_link\",\"primary\",\"primary_link\",\"secondary\",\"secondary_link\",\"tertiary\",\"tertiary_link\",\"street\",\"street_limited\",\"service\",\"track\"],true,false]],\"layout\":{\"line-join\":\"round\"},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],10,1,16,2],\"line-color\":\"hsl(38, 48%, 86%)\",\"line-gap-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],5,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],0.5,\"tertiary\",0.01,0],12,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],3,[\"secondary\",\"tertiary\"],2,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],0.5,0],18,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],30,[\"secondary\",\"tertiary\"],24,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],12,10]]}},{\"id\":\"bridge\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":13,\"filter\":[\"all\",[\"==\",[\"geometry-type\"],\"LineString\"],[\"!=\",[\"get\",\"type\"],\"service:parking_aisle\"],[\"==\",[\"get\",\"structure\"],\"bridge\"],[\"match\",[\"get\",\"class\"],[\"motorway\",\"motorway_link\",\"trunk\",\"trunk_link\",\"primary\",\"primary_link\",\"secondary\",\"secondary_link\",\"tertiary\",\"tertiary_link\",\"service\",\"street\",\"street_limited\",\"track\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-width\":[\"interpolate\",[\"exponential\",1.5],[\"zoom\"],5,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],0.5,\"tertiary\",0.01,0],12,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],3,[\"secondary\",\"tertiary\"],2,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],0.5,0],18,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\"],30,[\"secondary\",\"tertiary\"],24,[\"motorway_link\",\"trunk_link\",\"street\",\"street_limited\"],12,10]],\"line-color\":[\"match\",[\"get\",\"class\"],[\"primary_link\",\"secondary_link\",\"tertiary_link\",\"street\",\"street_limited\",\"service\",\"track\"],\"hsl(38, 100%, 98%)\",\"hsl(0, 0%, 100%)\"]}},{\"id\":\"admin-state-province\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"admin\",\"minzoom\":2,\"filter\":[\"all\",[\"==\",[\"get\",\"admin_level\"],1],[\"==\",[\"get\",\"disputed\"],\"false\"],[\"==\",[\"get\",\"maritime\"],\"false\"],[\"match\",[\"get\",\"worldview\"],[\"US\",\"all\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-dasharray\":[\"step\",[\"zoom\"],[\"literal\",[2,0]],7,[\"literal\",[2,2,6,2]]],\"line-color\":\"hsl(0, 100%, 49%)\",\"line-opacity\":[\"interpolate\",[\"linear\"],[\"zoom\"],2,0,3,1],\"line-width\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,1,6.54,3,22,1]}},{\"id\":\"admin-country\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"admin\",\"minzoom\":1,\"filter\":[\"all\",[\"==\",[\"get\",\"admin_level\"],0],[\"==\",[\"get\",\"disputed\"],\"false\"],[\"==\",[\"get\",\"maritime\"],\"false\"],[\"match\",[\"get\",\"worldview\"],[\"US\",\"all\"],true,false]],\"layout\":{\"line-join\":\"round\",\"line-cap\":\"round\"},\"paint\":{\"line-color\":\"#fa0000\",\"line-width\":[\"interpolate\",[\"linear\"],[\"zoom\"],3,0.5,10,2]}},{\"id\":\"admin-country-disputed\",\"type\":\"line\",\"source\":\"composite\",\"source-layer\":\"admin\",\"minzoom\":1,\"filter\":[\"all\",[\"==\",[\"get\",\"admin_level\"],0],[\"==\",[\"get\",\"disputed\"],\"true\"],[\"==\",[\"get\",\"maritime\"],\"false\"],[\"match\",[\"get\",\"worldview\"],[\"US\",\"all\"],true,false]],\"layout\":{\"line-join\":\"round\"},\"paint\":{\"line-color\":\"hsl(0, 100%, 56%)\",\"line-width\":[\"interpolate\",[\"linear\"],[\"zoom\"],3,0.5,10,2],\"line-dasharray\":[1.5,1.5]}},{\"id\":\"road-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"road\",\"minzoom\":12,\"filter\":[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\",\"secondary\",\"tertiary\",\"street\",\"street_limited\",\"pedestrian\"],true,false],\"layout\":{\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]],\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],9,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\",\"secondary\",\"tertiary\"],10,9],20,[\"match\",[\"get\",\"class\"],[\"motorway\",\"trunk\",\"primary\",\"secondary\",\"tertiary\"],15,14]],\"text-max-angle\":30,\"text-font\":[\"Roboto Regular\",\"Arial Unicode MS Regular\"],\"symbol-placement\":\"line\",\"text-padding\":1,\"text-rotation-alignment\":\"map\",\"text-pitch-alignment\":\"viewport\"},\"paint\":{\"text-color\":\"hsl(0, 0%, 0%)\",\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-halo-width\":1}},{\"id\":\"poi-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"poi_label\",\"minzoom\":6,\"filter\":[\"<=\",[\"get\",\"filterrank\"],3],\"layout\":{\"text-line-height\":1.1,\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],10,11,18,13],\"icon-image\":[\"concat\",[\"get\",\"maki\"],\"-11\"],\"text-max-angle\":38,\"text-font\":[\"Roboto Regular\",\"Arial Unicode MS Regular\"],\"text-padding\":2,\"text-offset\":[0,0.75],\"text-anchor\":\"top\",\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]],\"text-max-width\":8},\"paint\":{\"text-color\":\"hsl(38, 19%, 29%)\",\"text-halo-color\":\"hsla(0, 0%, 100%, 0.75)\",\"text-halo-width\":1,\"text-halo-blur\":0.5}},{\"id\":\"airport-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"airport_label\",\"minzoom\":8,\"filter\":[\"all\"],\"layout\":{\"text-line-height\":1.1,\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],10,12,18,18],\"icon-image\":[\"step\",[\"zoom\"],[\"concat\",[\"get\",\"maki\"],\"-11\"],13,[\"concat\",[\"get\",\"maki\"],\"-15\"]],\"text-font\":[\"Roboto Regular\",\"Arial Unicode MS Regular\"],\"text-padding\":2,\"text-offset\":[0,0.75],\"text-anchor\":\"top\",\"text-field\":[\"step\",[\"zoom\"],[\"get\",\"ref\"],14,[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]]],\"text-max-width\":9},\"paint\":{\"text-color\":\"hsl(38, 19%, 29%)\",\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-halo-width\":1}},{\"id\":\"place-neighborhood-suburb-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"place_label\",\"minzoom\":11,\"maxzoom\":15,\"filter\":[\"all\",[\"<=\",[\"get\",\"filterrank\"],3],[\"match\",[\"get\",\"type\"],[\"suburb\",\"quarter\",\"neighbourhood\"],true,false]],\"layout\":{\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]],\"text-transform\":\"uppercase\",\"text-letter-spacing\":0.15,\"text-max-width\":8,\"text-font\":[\"Roboto Regular\",\"Arial Unicode MS Regular\"],\"text-padding\":3,\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],12,11,16,16]},\"paint\":{\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-halo-width\":1,\"text-color\":\"hsl(38, 62%, 21%)\"}},{\"id\":\"place-town-village-hamlet-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"place_label\",\"minzoom\":6,\"maxzoom\":14,\"filter\":[\"all\",[\"match\",[\"get\",\"type\"],[\"town\",\"village\",\"hamlet\"],true,false],[\"<=\",[\"get\",\"filterrank\"],3]],\"layout\":{\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],5,[\"match\",[\"get\",\"type\"],\"town\",9.5,8],16,[\"match\",[\"get\",\"type\"],\"town\",20,16]],\"text-font\":[\"step\",[\"zoom\"],[\"literal\",[\"Roboto Regular\",\"Arial Unicode MS Regular\"]],12,[\"match\",[\"get\",\"type\"],\"town\",[\"literal\",[\"Roboto Medium\",\"Arial Unicode MS Regular\"]],[\"literal\",[\"Roboto Regular\",\"Arial Unicode MS Regular\"]]]],\"text-max-width\":7,\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]]},\"paint\":{\"text-color\":\"hsl(0, 0%, 0%)\",\"text-halo-blur\":0.5,\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-halo-width\":1}},{\"id\":\"place-city-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"place_label\",\"minzoom\":3,\"maxzoom\":14,\"filter\":[\"all\",[\"<=\",[\"get\",\"filterrank\"],3],[\"==\",[\"get\",\"type\"],\"city\"]],\"layout\":{\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],3,[\"step\",[\"get\",\"symbolrank\"],12,9,11,12,10,14,6.5],14,[\"step\",[\"get\",\"symbolrank\"],27,9,23,10,21,12,20]],\"text-font\":[\"step\",[\"zoom\"],[\"literal\",[\"Roboto Medium\",\"Arial Unicode MS Regular\"]],10,[\"step\",[\"get\",\"symbolrank\"],[\"literal\",[\"Roboto Bold\",\"Arial Unicode MS Bold\"]],5,[\"literal\",[\"Roboto Medium\",\"Arial Unicode MS Regular\"]]]],\"text-max-width\":10,\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]]},\"paint\":{\"text-color\":[\"interpolate\",[\"linear\"],[\"zoom\"],5,\"hsl(0, 0%, 33%)\",6,\"hsl(0, 0%, 0%)\"],\"text-halo-blur\":0.5,\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-halo-width\":1.25,\"text-opacity\":1}},{\"id\":\"state-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"place_label\",\"minzoom\":4,\"maxzoom\":8,\"filter\":[\"==\",[\"get\",\"type\"],\"state\"],\"layout\":{\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],4,9.5,9,18],\"text-transform\":\"uppercase\",\"text-font\":[\"Roboto Black\",\"Arial Unicode MS Bold\"],\"text-padding\":1,\"text-field\":[\"step\",[\"zoom\"],[\"get\",\"abbr\"],5,[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]]],\"text-letter-spacing\":0.2,\"text-max-width\":6},\"paint\":{\"text-color\":\"hsl(38, 7%, 64%)\",\"text-halo-width\":1,\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\"}},{\"id\":\"country-label\",\"type\":\"symbol\",\"source\":\"composite\",\"source-layer\":\"place_label\",\"minzoom\":3,\"maxzoom\":8,\"filter\":[\"==\",[\"get\",\"type\"],\"country\"],\"layout\":{\"text-field\":[\"coalesce\",[\"get\",\"name_en\"],[\"get\",\"name\"]],\"text-max-width\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,5,3,6],\"text-font\":[\"step\",[\"zoom\"],[\"literal\",[\"Roboto Medium\",\"Arial Unicode MS Regular\"]],4,[\"literal\",[\"Roboto Bold\",\"Arial Unicode MS Bold\"]]],\"text-size\":[\"interpolate\",[\"linear\"],[\"zoom\"],1,[\"step\",[\"get\",\"symbolrank\"],12,3,10,5,9],9,[\"step\",[\"get\",\"symbolrank\"],35,3,27,5,22]]},\"paint\":{\"text-halo-width\":1.5,\"text-halo-color\":\"hsla(0, 0%, 100%, 0.95)\",\"text-color\":\"hsl(0, 0%, 0%)\"}},{\"id\":\"mapbox-terrain-rgb\",\"type\":\"hillshade\",\"source\":\"mapbox://mapbox.terrain-rgb\",\"layout\":{},\"paint\":{\"hillshade-exaggeration\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,0.11,22,0.5],\"hillshade-shadow-color\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,\"hsla(0, 0%, 0%, 0)\",22,\"#000000\"],\"hillshade-highlight-color\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,\"hsla(0, 0%, 100%, 0)\",22,\"#FFFFFF\"],\"hillshade-accent-color\":[\"interpolate\",[\"linear\"],[\"zoom\"],0,\"hsla(0, 0%, 0%, 0)\",22,\"#000000\"]}}],\"created\":\"2019-05-28T21:10:20.618Z\",\"id\":\"cjw8aoh3321771cnv3tk3aenp\",\"modified\":\"2019-05-30T15:13:39.163Z\",\"owner\":\"fostermade\",\"visibility\":\"private\",\"draft\":false}");

/***/ }),

/***/ "./assets/js/components/types.js":
/*!***************************************!*\
  !*** ./assets/js/components/types.js ***!
  \***************************************/
/*! exports provided: hitType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitType", function() { return hitType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var hitType = prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
  county: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  directions: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  history: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  legacy: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  location_query: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  objectID: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  road_condition: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  state: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  structure_description: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  _geoloc: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number,
    lng: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].number
  }),
  featured: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].bool,
  managed_by: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string,
  guides: prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0__["PropTypes"].string)
});

/***/ }),

/***/ "./assets/js/configureStore.js":
/*!*************************************!*\
  !*** ./assets/js/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sprinkles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprinkles */ "./assets/js/sprinkles.js");






var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])();
var sprinkleReducers = Object(_sprinkles__WEBPACK_IMPORTED_MODULE_5__["getSprinkleReducers"])(); // check to see if this works with actual reducers

var getStore = function getStore(reducers) {
  if (lodash_isempty__WEBPACK_IMPORTED_MODULE_4___default()(reducers)) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware)));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware)));
};

/* harmony default export */ __webpack_exports__["default"] = (getStore(sprinkleReducers));

/***/ }),

/***/ "./assets/js/ghosttowns.js":
/*!*********************************!*\
  !*** ./assets/js/ghosttowns.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var flexslider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flexslider */ "./node_modules/flexslider/jquery.flexslider.js");
/* harmony import */ var flexslider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flexslider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui */ "./assets/js/ui/ui.js");
/* harmony import */ var _ui_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/forms */ "./assets/js/ui/forms.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./assets/js/app.js");





window.$ = $;
Object(_ui_ui__WEBPACK_IMPORTED_MODULE_2__["default"])();
$('.flexslider').flexslider({
  animation: 'slide'
});
new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 3
}).mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/lib/modernizr.js":
/*!************************************!*\
  !*** ./assets/js/lib/modernizr.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-svg-printshiv-setclasses !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function o() {
    var e, t, n, o, i, a, s;

    for (var l in E) {
      if (E.hasOwnProperty(l)) {
        if (e = [], t = E[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) {
          a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-"));
        }
      }
    }
  }

  function i(e) {
    var t = b.className,
        n = Modernizr._config.classPrefix || "";

    if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? b.className.baseVal = t : b.className = t);
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function s() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function l() {
    var e = t.body;
    return e || (e = s(x ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, n, r, o) {
    var i,
        a,
        u,
        c,
        f = "modernizr",
        d = s("div"),
        p = l();
    if (parseInt(r, 10)) for (; r--;) {
      u = s("div"), u.id = o ? o[r] : f + (r + 1), d.appendChild(u);
    }
    return i = s("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!a;
  }

  function c(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function f(t, n, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (i) {
        var a = i.error ? "error" : "log";
        i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];

    return o;
  }

  function d(t, r) {
    var o = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(c(t[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) {
        i.push("(" + c(t[o]) + ":" + r + ")");
      }

      return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == f(e, null, "position");
      });
    }

    return n;
  }

  function p(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function m(e, t, o, i) {
    function l() {
      c && (delete _.style, delete _.modElem);
    }

    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var u = d(e, o);
      if (!r(u, "undefined")) return u;
    }

    for (var c, f, m, h, v, g = ["modernizr", "tspan", "samp"]; !_.style && g.length;) {
      c = !0, _.modElem = s(g.shift()), _.style = _.modElem.style;
    }

    for (m = e.length, f = 0; m > f; f++) {
      if (h = e[f], v = _.style[h], a(h, "-") && (h = p(h)), _.style[h] !== n) {
        if (i || r(o, "undefined")) return l(), "pfx" == t ? h : !0;

        try {
          _.style[h] = o;
        } catch (y) {}

        if (_.style[h] != v) return l(), "pfx" == t ? h : !0;
      }
    }

    return l(), !1;
  }

  function h(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function v(e, t, n) {
    var o;

    for (var i in e) {
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? h(o, n || t) : o);
    }

    return !1;
  }

  function g(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + N.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined") ? m(s, t, o, i) : (s = (e + " " + j.join(a + " ") + a).split(" "), v(s, t, n));
  }

  function y(e, t, r) {
    return g(e, n, n, t, r);
  }

  var E = [],
      S = {
    _version: "3.5.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      E.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      E.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = S, Modernizr = new Modernizr();
  var C = [],
      b = t.documentElement,
      x = "svg" === b.nodeName.toLowerCase();
  x || !function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
    }

    function r() {
      var e = w.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }

    function o(e, t) {
      var n = w.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, u(t);
    }

    function i(e) {
      var t = x[e[C]];
      return t || (t = {}, b++, e[C] = b, x[b] = t), t;
    }

    function a(e, n, r) {
      if (n || (n = t), v) return n.createElement(e);
      r || (r = i(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : S.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || E.test(e) || o.tagUrn ? o : r.frag.appendChild(o);
    }

    function s(e, n) {
      if (e || (e = t), v) return e.createDocumentFragment();
      n = n || i(e);

      for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) {
        o.createElement(s[a]);
      }

      return o;
    }

    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return w.shivMethods ? a(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ");return n}")(w, t.frag);
    }

    function u(e) {
      e || (e = t);
      var r = i(e);
      return !w.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || l(e, r), e;
    }

    function c(e) {
      for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) {
        t = n[o], i.test(t.nodeName) && a.push(t.applyElement(f(t)));
      }

      return a;
    }

    function f(e) {
      for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(T + ":" + e.nodeName); r--;) {
        t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
      }

      return o.style.cssText = e.style.cssText, o;
    }

    function d(e) {
      for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + T + "\\:$2"; o--;) {
        t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
      }

      return n.join("{");
    }

    function p(e) {
      for (var t = e.length; t--;) {
        e[t].removeNode();
      }
    }

    function m(e) {
      function t() {
        clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null;
      }

      var r,
          o,
          a = i(e),
          s = e.namespaces,
          l = e.parentWindow;
      return !_ || e.printShived ? e : ("undefined" == typeof s[T] && s.add(T), l.attachEvent("onbeforeprint", function () {
        t();

        for (var i, a, s, l = e.styleSheets, u = [], f = l.length, p = Array(f); f--;) {
          p[f] = l[f];
        }

        for (; s = p.pop();) {
          if (!s.disabled && N.test(s.media)) {
            try {
              i = s.imports, a = i.length;
            } catch (m) {
              a = 0;
            }

            for (f = 0; a > f; f++) {
              p.push(i[f]);
            }

            try {
              u.push(s.cssText);
            } catch (m) {}
          }
        }

        u = d(u.reverse().join("")), o = c(e), r = n(e, u);
      }), l.attachEvent("onafterprint", function () {
        p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500);
      }), e.printShived = !0, e);
    }

    var h,
        v,
        g = "3.7.3",
        y = e.html5 || {},
        E = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        S = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        C = "_html5shiv",
        b = 0,
        x = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", h = "hidden" in e, v = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
        }();
      } catch (n) {
        h = !0, v = !0;
      }
    }();
    var w = {
      elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: g,
      shivCSS: y.shivCSS !== !1,
      supportsUnknownElements: v,
      shivMethods: y.shivMethods !== !1,
      type: "default",
      shivDocument: u,
      createElement: a,
      createDocumentFragment: s,
      addElements: o
    };
    e.html5 = w, u(t);

    var N = /^$|\b(?:all|print)\b/,
        T = "html5shiv",
        _ = !v && function () {
      var n = t.documentElement;
      return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent);
    }();

    w.type += " print", w.shivPrint = m, m(t), "object" == ( false ? undefined : _typeof(module)) && module.exports && (module.exports = w);
  }("undefined" != typeof e ? e : this, t), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var w = "Moz O ms Webkit",
      N = S._config.usePrefixes ? w.split(" ") : [];
  S._cssomPrefixes = N;
  var T = {
    elem: s("modernizr")
  };

  Modernizr._q.push(function () {
    delete T.elem;
  });

  var _ = {
    style: T.elem.style
  };

  Modernizr._q.unshift(function () {
    delete _.style;
  });

  var j = S._config.usePrefixes ? w.toLowerCase().split(" ") : [];
  S._domPrefixes = j, S.testAllProps = g, S.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), o(), i(C), delete S.addTest, delete S.addAsyncTest;

  for (var z = 0; z < Modernizr._q.length; z++) {
    Modernizr._q[z]();
  }

  e.Modernizr = Modernizr;
}(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/sprinkles.js":
/*!********************************!*\
  !*** ./assets/js/sprinkles.js ***!
  \********************************/
/*! exports provided: getSprinkleReducers, getSprinklesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSprinkleReducers", function() { return getSprinkleReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSprinklesComponent", function() { return getSprinklesComponent; });
/*
 * Allow for React components to be sprinkled in HTML and loaded dynamically
 *
 * Component can either be in same dir as this file or in index.js in a component dir:
 * AddFilesFormContainer.js or AddFilesFormContainer/index.js
 *
 * example:
 *   <div data-react="AddFilesFormContainer"></div>
 *
 * example with props:
 *   <div
 *      data-react="FormFieldText"
 *      data-react-props='{"label": "LABEL", "name":"SOMTHING"}'
 *   ></div>
 *
 */
var getComponentContext = function getComponentContext() {
  return __webpack_require__("./assets/js/components sync recursive \\.(\\/index)?js$");
};

var getComponent = function getComponent(context, componentName) {
  var findComponentDir = new RegExp("".concat(componentName, "(/index)?\\.js"));
  var componentDir = context.keys().find(function (path) {
    return path.match(findComponentDir);
  });

  if (!componentDir) {
    throw new Error("No dir or file found for component ".concat(componentName, ". Check your spelling or make sure the component file is in ./components like Example.js or Example/index.js"));
  }

  return context(componentDir)["default"];
};

var getSprinkleNodes = function getSprinkleNodes() {
  return Array.from(document.querySelectorAll('[data-react]'));
};

function getSprinkleReducers() {
  var nodes = getSprinkleNodes();
  var context = getComponentContext();
  return nodes.reduce(function (obj, node) {
    var Comp = getComponent(context, node.dataset.react);

    if (Comp.reducers) {
      return Object.assign(obj, Comp.reducers);
    }

    return obj;
  }, {});
}
function getSprinklesComponent() {
  var nodes = getSprinkleNodes();
  var context = getComponentContext();
  return nodes.map(function (node) {
    var Comp = getComponent(context, node.dataset.react);
    var props = node.dataset.reactProps ? JSON.parse(node.dataset.reactProps) : {};
    props.children = node.innerHTML;
    return {
      Comp: Comp,
      props: props,
      node: node
    };
  });
}

/***/ }),

/***/ "./assets/js/ui/forms.js":
/*!*******************************!*\
  !*** ./assets/js/ui/forms.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parsleyjs */ "./node_modules/parsleyjs/dist/parsley.js");
/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parsleyjs__WEBPACK_IMPORTED_MODULE_0__);

$('form').parsley();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/ui/ui.js":
/*!****************************!*\
  !*** ./assets/js/ui/ui.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {// OPEN .PDF'S AND EXTERNAL LINKS IN A NEW WINDOW
var openExternalInNewWindow = function openExternalInNewWindow() {
  $('a[href^="http:"], a[href^="https:"]').not("[href*=\"".concat(document.domain, "\"]")).attr('target', '_blank');
  $('a[href$=".pdf"]').attr('target', '_blank');
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  openExternalInNewWindow();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/scss/ghosttowns.scss":
/*!*************************************!*\
  !*** ./assets/scss/ghosttowns.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n@import \"~@fortawesome/fontawesome-free/scss/fontawesome\";\n       ^\n      Can't find stylesheet to import.\n   ╷\n12 │ @import \"~@fortawesome/fontawesome-free/scss/fontawesome\";\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  stdin 12:9  root stylesheet\n      in /var/www/ghosttownfinder.dev/assets/scss/ghosttowns.scss (line 12, column 9)\n    at runLoaders (/var/www/ghosttownfinder.dev/node_modules/webpack/lib/NormalModule.js:313:20)\n    at /var/www/ghosttownfinder.dev/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/www/ghosttownfinder.dev/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/var/www/ghosttownfinder.dev/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/var/www/ghosttownfinder.dev/node_modules/sass-loader/lib/loader.js:90:7)\n    at Function.call$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:53443:16)\n    at _render_closure1.call$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:33267:12)\n    at _RootZone.runBinary$3$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19664:18)\n    at _RootZone.runBinary$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19668:19)\n    at _FutureListener.handleError$1 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18136:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18421:40)\n    at Object._Future__propagateToListeners (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:3470:88)\n    at _Future._completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18257:9)\n    at _SyncCompleter._completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18123:19)\n    at _SyncCompleter.completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18092:12)\n    at _AsyncAwaitCompleter.completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:17629:25)\n    at Object._asyncRethrow (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:3226:17)\n    at /var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:10407:20\n    at _wrapJsFunctionForAsync_closure.$protected (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:3249:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:17664:12)\n    at _awaitOnObject_closure0.call$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:17656:25)\n    at _RootZone.runBinary$3$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19664:18)\n    at _RootZone.runBinary$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19668:19)\n    at _FutureListener.handleError$1 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18136:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18421:40)\n    at Object._Future__propagateToListeners (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:3470:88)\n    at _Future._completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18257:9)\n    at _SyncCompleter._completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18123:19)\n    at _SyncCompleter.completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18092:12)\n    at Object.eval (eval at Closure_forwardCallTo (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:1515:14), <anonymous>:2:41)\n    at _RootZone.runBinary$3$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19664:18)\n    at _RootZone.runBinary$3 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:19668:19)\n    at _FutureListener.handleError$1 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18136:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18421:40)\n    at Object._Future__propagateToListeners (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:3470:88)\n    at _Future._completeError$2 (/var/www/ghosttownfinder.dev/node_modules/sass/sass.dart.js:18257:9)");

/***/ }),

/***/ "./images/marker-15-selected.svg":
/*!***************************************!*\
  !*** ./images/marker-15-selected.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marker-15-selected.svg?b8c9b5419572305ca8536ffb3fbb2c41";

/***/ }),

/***/ "./images/marker-15.svg":
/*!******************************!*\
  !*** ./images/marker-15.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marker-15.svg?bb030173f9f867555a5c6ff509ea43f4";

/***/ }),

/***/ "./images/star-15-selected.svg":
/*!*************************************!*\
  !*** ./images/star-15-selected.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/star-15-selected.svg?861187b3bf29ee8ae20ecb0272c4283c";

/***/ }),

/***/ "./images/star-15.svg":
/*!****************************!*\
  !*** ./images/star-15.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/star-15.svg?90bbe4f5d347ae13b9c42665dd252df0";

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@fortawesome/fontawesome-svg-core/index.es.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js ***!
  \********************************************************************/
/*! exports provided: fas, prefix, faAd, faAddressBook, faAddressCard, faAdjust, faAirFreshener, faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAllergies, faAmbulance, faAmericanSignLanguageInterpreting, faAnchor, faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faAngry, faAnkh, faAppleAlt, faArchive, faArchway, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faArrowsAlt, faArrowsAltH, faArrowsAltV, faAssistiveListeningSystems, faAsterisk, faAt, faAtlas, faAtom, faAudioDescription, faAward, faBaby, faBabyCarriage, faBackspace, faBackward, faBacon, faBalanceScale, faBalanceScaleLeft, faBalanceScaleRight, faBan, faBandAid, faBarcode, faBars, faBaseballBall, faBasketballBall, faBath, faBatteryEmpty, faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatteryThreeQuarters, faBed, faBeer, faBell, faBellSlash, faBezierCurve, faBible, faBicycle, faBiking, faBinoculars, faBiohazard, faBirthdayCake, faBlender, faBlenderPhone, faBlind, faBlog, faBold, faBolt, faBomb, faBone, faBong, faBook, faBookDead, faBookMedical, faBookOpen, faBookReader, faBookmark, faBorderAll, faBorderNone, faBorderStyle, faBowlingBall, faBox, faBoxOpen, faBoxes, faBraille, faBrain, faBreadSlice, faBriefcase, faBriefcaseMedical, faBroadcastTower, faBroom, faBrush, faBug, faBuilding, faBullhorn, faBullseye, faBurn, faBus, faBusAlt, faBusinessTime, faCalculator, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCalendarWeek, faCamera, faCameraRetro, faCampground, faCandyCane, faCannabis, faCapsules, faCar, faCarAlt, faCarBattery, faCarCrash, faCarSide, faCaretDown, faCaretLeft, faCaretRight, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faCaretUp, faCarrot, faCartArrowDown, faCartPlus, faCashRegister, faCat, faCertificate, faChair, faChalkboard, faChalkboardTeacher, faChargingStation, faChartArea, faChartBar, faChartLine, faChartPie, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faCheese, faChess, faChessBishop, faChessBoard, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faChild, faChurch, faCircle, faCircleNotch, faCity, faClinicMedical, faClipboard, faClipboardCheck, faClipboardList, faClock, faClone, faClosedCaptioning, faCloud, faCloudDownloadAlt, faCloudMeatball, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faCloudUploadAlt, faCocktail, faCode, faCodeBranch, faCoffee, faCog, faCogs, faCoins, faColumns, faComment, faCommentAlt, faCommentDollar, faCommentDots, faCommentMedical, faCommentSlash, faComments, faCommentsDollar, faCompactDisc, faCompass, faCompress, faCompressArrowsAlt, faConciergeBell, faCookie, faCookieBite, faCopy, faCopyright, faCouch, faCreditCard, faCrop, faCropAlt, faCross, faCrosshairs, faCrow, faCrown, faCrutch, faCube, faCubes, faCut, faDatabase, faDeaf, faDemocrat, faDesktop, faDharmachakra, faDiagnoses, faDice, faDiceD20, faDiceD6, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo, faDigitalTachograph, faDirections, faDivide, faDizzy, faDna, faDog, faDollarSign, faDolly, faDollyFlatbed, faDonate, faDoorClosed, faDoorOpen, faDotCircle, faDove, faDownload, faDraftingCompass, faDragon, faDrawPolygon, faDrum, faDrumSteelpan, faDrumstickBite, faDumbbell, faDumpster, faDumpsterFire, faDungeon, faEdit, faEgg, faEject, faEllipsisH, faEllipsisV, faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faEnvelopeSquare, faEquals, faEraser, faEthernet, faEuroSign, faExchangeAlt, faExclamation, faExclamationCircle, faExclamationTriangle, faExpand, faExpandArrowsAlt, faExternalLinkAlt, faExternalLinkSquareAlt, faEye, faEyeDropper, faEyeSlash, faFan, faFastBackward, faFastForward, faFax, faFeather, faFeatherAlt, faFemale, faFighterJet, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileContract, faFileCsv, faFileDownload, faFileExcel, faFileExport, faFileImage, faFileImport, faFileInvoice, faFileInvoiceDollar, faFileMedical, faFileMedicalAlt, faFilePdf, faFilePowerpoint, faFilePrescription, faFileSignature, faFileUpload, faFileVideo, faFileWord, faFill, faFillDrip, faFilm, faFilter, faFingerprint, faFire, faFireAlt, faFireExtinguisher, faFirstAid, faFish, faFistRaised, faFlag, faFlagCheckered, faFlagUsa, faFlask, faFlushed, faFolder, faFolderMinus, faFolderOpen, faFolderPlus, faFont, faFontAwesomeLogoFull, faFootballBall, faForward, faFrog, faFrown, faFrownOpen, faFunnelDollar, faFutbol, faGamepad, faGasPump, faGavel, faGem, faGenderless, faGhost, faGift, faGifts, faGlassCheers, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faGlasses, faGlobe, faGlobeAfrica, faGlobeAmericas, faGlobeAsia, faGlobeEurope, faGolfBall, faGopuram, faGraduationCap, faGreaterThan, faGreaterThanEqual, faGrimace, faGrin, faGrinAlt, faGrinBeam, faGrinBeamSweat, faGrinHearts, faGrinSquint, faGrinSquintTears, faGrinStars, faGrinTears, faGrinTongue, faGrinTongueSquint, faGrinTongueWink, faGrinWink, faGripHorizontal, faGripLines, faGripLinesVertical, faGripVertical, faGuitar, faHSquare, faHamburger, faHammer, faHamsa, faHandHolding, faHandHoldingHeart, faHandHoldingUsd, faHandLizard, faHandMiddleFinger, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandRock, faHandScissors, faHandSpock, faHands, faHandsHelping, faHandshake, faHanukiah, faHardHat, faHashtag, faHatWizard, faHaykal, faHdd, faHeading, faHeadphones, faHeadphonesAlt, faHeadset, faHeart, faHeartBroken, faHeartbeat, faHelicopter, faHighlighter, faHiking, faHippo, faHistory, faHockeyPuck, faHollyBerry, faHome, faHorse, faHorseHead, faHospital, faHospitalAlt, faHospitalSymbol, faHotTub, faHotdog, faHotel, faHourglass, faHourglassEnd, faHourglassHalf, faHourglassStart, faHouseDamage, faHryvnia, faICursor, faIceCream, faIcicles, faIcons, faIdBadge, faIdCard, faIdCardAlt, faIgloo, faImage, faImages, faInbox, faIndent, faIndustry, faInfinity, faInfo, faInfoCircle, faItalic, faJedi, faJoint, faJournalWhills, faKaaba, faKey, faKeyboard, faKhanda, faKiss, faKissBeam, faKissWinkHeart, faKiwiBird, faLandmark, faLanguage, faLaptop, faLaptopCode, faLaptopMedical, faLaugh, faLaughBeam, faLaughSquint, faLaughWink, faLayerGroup, faLeaf, faLemon, faLessThan, faLessThanEqual, faLevelDownAlt, faLevelUpAlt, faLifeRing, faLightbulb, faLink, faLiraSign, faList, faListAlt, faListOl, faListUl, faLocationArrow, faLock, faLockOpen, faLongArrowAltDown, faLongArrowAltLeft, faLongArrowAltRight, faLongArrowAltUp, faLowVision, faLuggageCart, faMagic, faMagnet, faMailBulk, faMale, faMap, faMapMarked, faMapMarkedAlt, faMapMarker, faMapMarkerAlt, faMapPin, faMapSigns, faMarker, faMars, faMarsDouble, faMarsStroke, faMarsStrokeH, faMarsStrokeV, faMask, faMedal, faMedkit, faMeh, faMehBlank, faMehRollingEyes, faMemory, faMenorah, faMercury, faMeteor, faMicrochip, faMicrophone, faMicrophoneAlt, faMicrophoneAltSlash, faMicrophoneSlash, faMicroscope, faMinus, faMinusCircle, faMinusSquare, faMitten, faMobile, faMobileAlt, faMoneyBill, faMoneyBillAlt, faMoneyBillWave, faMoneyBillWaveAlt, faMoneyCheck, faMoneyCheckAlt, faMonument, faMoon, faMortarPestle, faMosque, faMotorcycle, faMountain, faMousePointer, faMugHot, faMusic, faNetworkWired, faNeuter, faNewspaper, faNotEqual, faNotesMedical, faObjectGroup, faObjectUngroup, faOilCan, faOm, faOtter, faOutdent, faPager, faPaintBrush, faPaintRoller, faPalette, faPallet, faPaperPlane, faPaperclip, faParachuteBox, faParagraph, faParking, faPassport, faPastafarianism, faPaste, faPause, faPauseCircle, faPaw, faPeace, faPen, faPenAlt, faPenFancy, faPenNib, faPenSquare, faPencilAlt, faPencilRuler, faPeopleCarry, faPepperHot, faPercent, faPercentage, faPersonBooth, faPhone, faPhoneAlt, faPhoneSlash, faPhoneSquare, faPhoneSquareAlt, faPhoneVolume, faPhotoVideo, faPiggyBank, faPills, faPizzaSlice, faPlaceOfWorship, faPlane, faPlaneArrival, faPlaneDeparture, faPlay, faPlayCircle, faPlug, faPlus, faPlusCircle, faPlusSquare, faPodcast, faPoll, faPollH, faPoo, faPooStorm, faPoop, faPortrait, faPoundSign, faPowerOff, faPray, faPrayingHands, faPrescription, faPrescriptionBottle, faPrescriptionBottleAlt, faPrint, faProcedures, faProjectDiagram, faPuzzlePiece, faQrcode, faQuestion, faQuestionCircle, faQuidditch, faQuoteLeft, faQuoteRight, faQuran, faRadiation, faRadiationAlt, faRainbow, faRandom, faReceipt, faRecycle, faRedo, faRedoAlt, faRegistered, faRemoveFormat, faReply, faReplyAll, faRepublican, faRestroom, faRetweet, faRibbon, faRing, faRoad, faRobot, faRocket, faRoute, faRss, faRssSquare, faRubleSign, faRuler, faRulerCombined, faRulerHorizontal, faRulerVertical, faRunning, faRupeeSign, faSadCry, faSadTear, faSatellite, faSatelliteDish, faSave, faSchool, faScrewdriver, faScroll, faSdCard, faSearch, faSearchDollar, faSearchLocation, faSearchMinus, faSearchPlus, faSeedling, faServer, faShapes, faShare, faShareAlt, faShareAltSquare, faShareSquare, faShekelSign, faShieldAlt, faShip, faShippingFast, faShoePrints, faShoppingBag, faShoppingBasket, faShoppingCart, faShower, faShuttleVan, faSign, faSignInAlt, faSignLanguage, faSignOutAlt, faSignal, faSignature, faSimCard, faSitemap, faSkating, faSkiing, faSkiingNordic, faSkull, faSkullCrossbones, faSlash, faSleigh, faSlidersH, faSmile, faSmileBeam, faSmileWink, faSmog, faSmoking, faSmokingBan, faSms, faSnowboarding, faSnowflake, faSnowman, faSnowplow, faSocks, faSolarPanel, faSort, faSortAlphaDown, faSortAlphaDownAlt, faSortAlphaUp, faSortAlphaUpAlt, faSortAmountDown, faSortAmountDownAlt, faSortAmountUp, faSortAmountUpAlt, faSortDown, faSortNumericDown, faSortNumericDownAlt, faSortNumericUp, faSortNumericUpAlt, faSortUp, faSpa, faSpaceShuttle, faSpellCheck, faSpider, faSpinner, faSplotch, faSprayCan, faSquare, faSquareFull, faSquareRootAlt, faStamp, faStar, faStarAndCrescent, faStarHalf, faStarHalfAlt, faStarOfDavid, faStarOfLife, faStepBackward, faStepForward, faStethoscope, faStickyNote, faStop, faStopCircle, faStopwatch, faStore, faStoreAlt, faStream, faStreetView, faStrikethrough, faStroopwafel, faSubscript, faSubway, faSuitcase, faSuitcaseRolling, faSun, faSuperscript, faSurprise, faSwatchbook, faSwimmer, faSwimmingPool, faSynagogue, faSync, faSyncAlt, faSyringe, faTable, faTableTennis, faTablet, faTabletAlt, faTablets, faTachometerAlt, faTag, faTags, faTape, faTasks, faTaxi, faTeeth, faTeethOpen, faTemperatureHigh, faTemperatureLow, faTenge, faTerminal, faTextHeight, faTextWidth, faTh, faThLarge, faThList, faTheaterMasks, faThermometer, faThermometerEmpty, faThermometerFull, faThermometerHalf, faThermometerQuarter, faThermometerThreeQuarters, faThumbsDown, faThumbsUp, faThumbtack, faTicketAlt, faTimes, faTimesCircle, faTint, faTintSlash, faTired, faToggleOff, faToggleOn, faToilet, faToiletPaper, faToolbox, faTools, faTooth, faTorah, faToriiGate, faTractor, faTrademark, faTrafficLight, faTrain, faTram, faTransgender, faTransgenderAlt, faTrash, faTrashAlt, faTrashRestore, faTrashRestoreAlt, faTree, faTrophy, faTruck, faTruckLoading, faTruckMonster, faTruckMoving, faTruckPickup, faTshirt, faTty, faTv, faUmbrella, faUmbrellaBeach, faUnderline, faUndo, faUndoAlt, faUniversalAccess, faUniversity, faUnlink, faUnlock, faUnlockAlt, faUpload, faUser, faUserAlt, faUserAltSlash, faUserAstronaut, faUserCheck, faUserCircle, faUserClock, faUserCog, faUserEdit, faUserFriends, faUserGraduate, faUserInjured, faUserLock, faUserMd, faUserMinus, faUserNinja, faUserNurse, faUserPlus, faUserSecret, faUserShield, faUserSlash, faUserTag, faUserTie, faUserTimes, faUsers, faUsersCog, faUtensilSpoon, faUtensils, faVectorSquare, faVenus, faVenusDouble, faVenusMars, faVial, faVials, faVideo, faVideoSlash, faVihara, faVoicemail, faVolleyballBall, faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp, faVoteYea, faVrCardboard, faWalking, faWallet, faWarehouse, faWater, faWaveSquare, faWeight, faWeightHanging, faWheelchair, faWifi, faWind, faWindowClose, faWindowMaximize, faWindowMinimize, faWindowRestore, faWineBottle, faWineGlass, faWineGlassAlt, faWonSign, faWrench, faXRay, faYenSign, faYinYang */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@fortawesome/free-solid-svg-icons/index.es.js'");

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@fortawesome/react-fontawesome/index.es.js'");

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@glidejs/glide/dist/glide.esm.js'");

/***/ }),

/***/ "./node_modules/@rooks/use-timeout/lib/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@rooks/use-timeout/lib/index.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/@rooks/use-timeout/lib/index.esm.js'");

/***/ }),

/***/ "./node_modules/algolia-places-react/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/algolia-places-react/dist/index.es.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/algolia-places-react/dist/index.es.js'");

/***/ }),

/***/ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js":
/*!****************************************************************************!*\
  !*** ./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/classnames/index.js'");

/***/ }),

/***/ "./node_modules/flexslider/jquery.flexslider.js":
/*!******************************************************!*\
  !*** ./node_modules/flexslider/jquery.flexslider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/flexslider/jquery.flexslider.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ "./node_modules/lodash.get/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.get/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/lodash.get/index.js'");

/***/ }),

/***/ "./node_modules/lodash.isempty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/lodash.isempty/index.js'");

/***/ }),

/***/ "./node_modules/parsleyjs/dist/parsley.js":
/*!************************************************!*\
  !*** ./node_modules/parsleyjs/dist/parsley.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/parsleyjs/dist/parsley.js'");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/prop-types/index.js'");

/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/qs/lib/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-html-parser/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-html-parser/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-html-parser/lib/index.js'");

/***/ }),

/***/ "./node_modules/react-instantsearch-dom/dist/es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-instantsearch-dom/dist/es/index.js ***!
  \***************************************************************/
/*! exports provided: createConnector, HIGHLIGHT_TAGS, translatable, Configure, QueryRuleContext, connectAutoComplete, connectBreadcrumb, connectConfigure, connectCurrentRefinements, connectGeoSearch, connectHierarchicalMenu, connectHighlight, connectHitInsights, connectHits, connectHitsPerPage, connectInfiniteHits, connectMenu, connectNumericMenu, connectPagination, connectPoweredBy, connectQueryRules, connectRange, connectRefinementList, connectScrollTo, connectSearchBox, connectSortBy, connectStateResults, connectStats, connectToggleRefinement, InstantSearch, Index, Breadcrumb, ClearRefinements, CurrentRefinements, HierarchicalMenu, Highlight, Hits, HitsPerPage, InfiniteHits, Menu, MenuSelect, NumericMenu, Pagination, Panel, PoweredBy, RangeInput, RangeSlider, RatingMenu, RefinementList, ScrollTo, SearchBox, Snippet, SortBy, Stats, ToggleRefinement, VoiceSearch, QueryRuleCustomData, createClassNames, createVoiceSearchHelper */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-instantsearch-dom/dist/es/index.js'");

/***/ }),

/***/ "./node_modules/react-map-gl/dist/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-map-gl/dist/esm/index.js ***!
  \*****************************************************/
/*! exports provided: default, InteractiveMap, StaticMap, BaseControl, Marker, Popup, FullscreenControl, GeolocateControl, NavigationControl, CanvasOverlay, HTMLOverlay, SVGOverlay, TRANSITION_EVENTS, TransitionInterpolator, LinearInterpolator, FlyToInterpolator, MapController, _MapContext */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-map-gl/dist/esm/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, useSelector, useStore, shallowEqual */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter, __RouterContext, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-router-dom/esm/react-router-dom.js'");

/***/ }),

/***/ "./node_modules/react-use/lib/useLocalStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/lib/useLocalStorage.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-use/lib/useLocalStorage.js'");

/***/ }),

/***/ "./node_modules/react-use/lib/useWindowScroll.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/lib/useWindowScroll.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-use/lib/useWindowScroll.js'");

/***/ }),

/***/ "./node_modules/react-use/lib/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/lib/useWindowSize.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react-use/lib/useWindowSize.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-actions/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-actions/es/index.js ***!
  \************************************************/
/*! exports provided: combineActions, createAction, createActions, createCurriedAction, handleAction, handleActions */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/redux-actions/es/index.js'");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/redux-devtools-extension/index.js'");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/redux-logger/dist/redux-logger.js'");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/redux-thunk/es/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/redux/es/redux.js'");

/***/ }),

/***/ "./node_modules/sanitize-html/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/sanitize-html/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/sanitize-html/dist/index.js'");

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/styled-components/dist/styled-components.browser.esm.js'");

/***/ }),

/***/ "./node_modules/use-debounce/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-debounce/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/use-debounce/lib/index.js'");

/***/ }),

/***/ "./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default, useDeepCompareEffectNoCheck */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js'");

/***/ }),

/***/ "./node_modules/viewport-mercator-project/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/viewport-mercator-project/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default, WebMercatorViewport, fitBounds, normalizeViewportProps, flyToViewport, lngLatToWorld, worldToLngLat, worldToPixels, pixelsToWorld, getMeterZoom, getDistanceScales, addMetersToLngLat, getViewMatrix, getProjectionMatrix, getProjectionParameters, PerspectiveMercatorViewport, getUncenteredViewMatrix, projectFlat, unprojectFlat */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/viewport-mercator-project/dist/esm/index.js'");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/ghosttownfinder.dev/node_modules/webpack/buildin/module.js'");

/***/ }),

/***/ 0:
/*!**************************************************************************************************!*\
  !*** multi ./assets/js/lib/modernizr.js ./assets/js/ghosttowns.js ./assets/scss/ghosttowns.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/ghosttownfinder.dev/assets/js/lib/modernizr.js */"./assets/js/lib/modernizr.js");
__webpack_require__(/*! /var/www/ghosttownfinder.dev/assets/js/ghosttowns.js */"./assets/js/ghosttowns.js");
module.exports = __webpack_require__(/*! /var/www/ghosttownfinder.dev/assets/scss/ghosttowns.scss */"./assets/scss/ghosttowns.scss");


/***/ })

/******/ });