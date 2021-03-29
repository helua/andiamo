(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.3rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n  margin: 0px;\n}\nbody ::selection {\n  background-color: #84fb54;\n}\n.router-wrapper {\n  margin: 5% 0;\n}\n#logotype-wrapper {\n  position: fixed;\n  left: 50%;\n  transform: translate(-50%, 0);\n  bottom: -1rem;\n  width: 35rem;\n  z-index: 2;\n  mix-blend-mode: difference;\n  height: 7rem;\n}\n@media screen and (max-width: 405px) {\n  #logotype-wrapper {\n    width: 22.826rem;\n  }\n}\n.logotype {\n  position: absolute;\n  width: 12rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 405px) {\n  .logotype {\n    width: 7.826rem;\n  }\n}\nspan#question-mark, span#allora {\n  display: none;\n  position: absolute;\n  font-size: 2.3rem;\n  text-transform: uppercase;\n  transform: rotate(-7.2deg);\n  color: #84fb54;\n  z-index: 10;\n}\n@media screen and (max-width: 405px) {\n  span#question-mark, span#allora {\n    font-size: 1.5rem;\n  }\n}\nspan#allora {\n  left: 0;\n  bottom: 8%;\n}\n@media screen and (max-width: 405px) {\n  span#allora {\n    bottom: 23%;\n  }\n}\nspan#question-mark {\n  right: 27%;\n  top: 13%;\n}\n@media screen and (max-width: 405px) {\n  span#question-mark {\n    top: 25%;\n  }\n}\nh1, h2 {\n  font-size: 1.3rem;\n  letter-spacing: 0.15rem;\n}\n@media screen and (max-width: 400px) {\n  h1, h2 {\n    font-size: 1rem;\n    letter-spacing: 0.11rem;\n  }\n}\na {\n  text-decoration: none;\n  color: black;\n  text-shadow: 2px 2px rgba(132, 251, 84, 0.2);\n}\n@media screen and (min-width: 600px) {\n  a:hover {\n    background-color: rgba(132, 251, 84, 0.8);\n  }\n}\np, h2, h1, ul {\n  padding: 0 5rem;\n}\n@media screen and (max-width: 900px) {\n  p, h2, h1, ul {\n    padding: 0 1rem;\n  }\n}\nbutton {\n  border: none;\n  cursor: pointer;\n  background-color: rgba(250, 255, 246, 0);\n}\n@media only screen and (max-width: 600px) {\n  .desktop {\n    display: none;\n    visibility: hidden;\n  }\n}\n.mobile {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  width: 100%;\n}\n.mobile ul {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n}\n@media only screen and (min-width: 600px) {\n  .mobile {\n    display: none;\n    visibility: hidden;\n  }\n}\n.mat-drawer {\n  position: fixed !important;\n  padding-top: 6rem;\n}\n.mat-drawer-container {\n  background-color: rgba(250, 255, 246, 0);\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(132, 251, 84, 0.6);\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAIA;EACI,yCAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,WAAA;AAHJ;AAKI;EACI,yBAXE;AAQV;AAOA;EACI,YAAA;AAJJ;AAQA;EACI,eAAA;EACA,SAAA;EACA,6BAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,0BAAA;EACA,YAAA;AALJ;AAMI;EATJ;IAUQ,gBAAA;EAHN;AACF;AAKA;EACI,kBAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAFJ;AAGI;EANJ;IAOQ,eAAA;EAAN;AACF;AAGA;EACI,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,0BAAA;EACA,cAlDM;EAmDN,WAAA;AAAJ;AACI;EARJ;IASQ,iBAAA;EAEN;AACF;AAAA;EACI,OAAA;EACA,UAAA;AAGJ;AAFI;EAHJ;IAIQ,WAAA;EAKN;AACF;AAHA;EACI,UAAA;EACA,QAAA;AAMJ;AALI;EAHJ;IAIQ,QAAA;EAQN;AACF;AALA;EACI,iBAAA;EACA,uBAAA;AAQJ;AANI;EAJJ;IAKQ,eAAA;IACA,uBAAA;EASN;AACF;AALA;EACI,qBAAA;EACA,YAAA;EACA,4CAAA;AAQJ;AAPI;EACI;IACI,yCAAA;EASV;AACF;AAJA;EACI,eAAA;AAOJ;AANI;EAFJ;IAGQ,eAAA;EASN;AACF;AALA;EACI,YAAA;EACA,eAAA;EACA,wCAAA;AAQJ;AALA;EACI;IACI,aAAA;IACA,kBAAA;EAQN;AACF;AAFA;EACI,gBAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;AAIJ;AAHI;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AAKR;AAFI;EAXJ;IAYI,aAAA;IACA,kBAAA;EAKF;AACF;AAHA;EACI,0BAAA;EACA,iBAAA;AAMJ;AAJA;EACI,wCAAA;AAOJ;AAJA;EACI,yCAAA;AAOJ","sourcesContent":["$color:#f7695a;\n$color-2: #84fb54;\n$white: #fafff6;\n\nbody{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.3rem;\n    font-weight: 600;\n    letter-spacing: .1rem;\n    margin: 0px;\n    \n    & ::selection{\n        background-color: $color-2;\n    }\n}\n\n.router-wrapper{\n    margin: 5% 0;\n}\n\n//logotype \"Allora, ANDIAMO ?\"\n#logotype-wrapper{\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, 0);\n    bottom: -1rem;\n    width: 35rem;\n    z-index: 2;\n    mix-blend-mode: difference;\n    height: 7rem; \n    @media screen and (max-width: 405px){\n        width: 22.826rem;\n    }  \n}\n.logotype{\n    position: absolute;\n    width: 12rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    @media screen and (max-width: 405px){\n        width: 7.826rem;\n    }  \n\n}\nspan#question-mark, span#allora{\n    display: none;\n    position: absolute;\n    font-size: 2.3rem;\n    text-transform: uppercase;\n    transform: rotate(-7.2deg);\n    color: $color-2;\n    z-index: 10;\n    @media screen and (max-width: 405px){\n        font-size: 1.5rem;\n    }  \n}\nspan#allora{\n    left: 0;\n    bottom: 8%;\n    @media screen and (max-width: 405px){\n        bottom: 23%;\n        }  \n}\nspan#question-mark{\n    right: 27%;\n    top: 13%;\n    @media screen and (max-width: 405px){\n        top: 25%;\n        }  \n}\n\nh1, h2{\n    font-size: 1.3rem;\n    letter-spacing: .15rem;\n\n    @media screen and (max-width: 400px){\n        font-size: 1rem;\n        letter-spacing: .11rem;\n    }\n    \n}\n\na{\n    text-decoration: none;\n    color: black;\n    text-shadow: 2px 2px rgba($color-2, .2);\n    @media screen and (min-width: 600px){\n        &:hover{\n            background-color: rgba($color-2, 0.8);\n        }\n    }\n    \n}\n\np, h2, h1, ul {\n    padding: 0 5rem;\n    @media screen and (max-width: 900px){\n        padding: 0 1rem;\n    }\n    \n}\n\nbutton{\n    border: none;\n    cursor: pointer;\n    background-color: rgba($white, 0);\n}\n//responsive menu\n@media only screen and (max-width: 600px) {\n    .desktop{\n        display: none;\n        visibility: hidden;\n    }\n}\n    \n\n \n//mobile menu\n.mobile{\n    position: sticky;\n    top: 0;\n    z-index: 100;\n    width: 100%;\n    & ul{\n        display: flex;\n        justify-content: space-between;\n        list-style: none;\n    }\n\n    @media only screen and (min-width: 600px) {\n    display: none;\n    visibility: hidden;\n    }\n}\n.mat-drawer{\n    position: fixed !important;\n    padding-top: 6rem;\n}\n.mat-drawer-container{\n    background-color: rgba($white, 0);\n}\n\n.mat-drawer-backdrop.mat-drawer-shown{\n    background-color: rgba($color-2, .6);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\holni\OneDrive\Dokumenty\commerce\andiamo\andiamo\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map