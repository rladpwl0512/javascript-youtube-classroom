/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _dummy_dummyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy/dummyObject.js */ "./src/js/dummy/dummyObject.js");
/* harmony import */ var _models_Video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Video.js */ "./src/js/models/Video.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/event.js */ "./src/js/utils/event.js");
/* harmony import */ var _utils_validator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/validator.js */ "./src/js/utils/validator.js");
/* harmony import */ var _views_AppView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/AppView.js */ "./src/js/views/AppView.js");
/* harmony import */ var _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/SearchInputView.js */ "./src/js/views/SearchInputView.js");
/* harmony import */ var _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/SearchResultView.js */ "./src/js/views/SearchResultView.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }









var _subscribeViewEvents = /*#__PURE__*/new WeakSet();

var _searchVideo = /*#__PURE__*/new WeakSet();

var _scrollNextVideos = /*#__PURE__*/new WeakSet();

var _saveVideo = /*#__PURE__*/new WeakSet();

var Controller = /*#__PURE__*/_createClass(function Controller() {
  _classCallCheck(this, Controller);

  _classPrivateMethodInitSpec(this, _saveVideo);

  _classPrivateMethodInitSpec(this, _scrollNextVideos);

  _classPrivateMethodInitSpec(this, _searchVideo);

  _classPrivateMethodInitSpec(this, _subscribeViewEvents);

  this.video = new _models_Video_js__WEBPACK_IMPORTED_MODULE_1__["default"](_dummy_dummyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  this.appView = new _views_AppView_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  this.searchInputView = new _views_SearchInputView_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.searchResultView = new _views_SearchResultView_js__WEBPACK_IMPORTED_MODULE_6__["default"]();

  _classPrivateMethodGet(this, _subscribeViewEvents, _subscribeViewEvents2).call(this);
});

function _subscribeViewEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(this.searchInputView.$searchButton, '@search', _classPrivateMethodGet(this, _searchVideo, _searchVideo2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(this.searchResultView.$searchTarget, '@scroll-bottom', _classPrivateMethodGet(this, _scrollNextVideos, _scrollNextVideos2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_2__.on)(this.searchResultView.$searchTarget, '@save-video', _classPrivateMethodGet(this, _saveVideo, _saveVideo2).bind(this));
}

function _searchVideo2(_x) {
  return _searchVideo3.apply(this, arguments);
}

function _searchVideo3() {
  _searchVideo3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var keyword;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.searchResultView.removeVideo();
            keyword = event.detail.keyword;

            if (!(0,_utils_validator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(keyword)) {
              _context.next = 5;
              break;
            }

            alert('입력된 검색어가 없습니다. 검색어를 입력해주세요.');
            return _context.abrupt("return");

          case 5:
            this.video.keyword = keyword;
            this.searchResultView.showSkeleton();
            _context.next = 9;
            return this.video.fetchYoutubeApi(keyword);

          case 9:
            this.video.setVideoInfo();
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();

            if (!(0,_utils_validator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.video.newVideoItems)) {
              _context.next = 16;
              break;
            }

            this.searchResultView.removeVideo();
            this.searchResultView.showNotFound();
            return _context.abrupt("return");

          case 16:
            this.searchResultView.hideNotFound();
            this.searchResultView.renderVideo(this.video.newVideoItems);
            this.searchResultView.startObserve();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _searchVideo3.apply(this, arguments);
}

function _scrollNextVideos2() {
  return _scrollNextVideos3.apply(this, arguments);
}

function _scrollNextVideos3() {
  _scrollNextVideos3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.searchResultView.stopObserve();
            this.searchResultView.showSkeleton();
            _context2.next = 4;
            return this.video.fetchYoutubeApi(this.video.keyword, this.video.nextPageToken);

          case 4:
            this.video.setVideoInfo();
            this.video.accumulateVideoItems();
            this.video.updateNewVideoItems();

            if (!(this.video.newVideoItems.length < 10)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return");

          case 9:
            this.searchResultView.renderVideo(this.video.newVideoItems);
            this.searchResultView.startObserve();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _scrollNextVideos3.apply(this, arguments);
}

function _saveVideo2(event) {
  if (this.video.savedVideoItems.length >= 100) {
    alert('저장된 영상의 개수가 100개를 초과하여 저장되지 않았습니다. 100개 이하의 영상만 저장해주세요.');
    return;
  }

  this.searchResultView.changeSaveButtonStyle(event.detail.buttonElement);
  var savedId = event.detail.savedId;
  this.video.setItemsLocalStorage(savedId);
}



/***/ }),

/***/ "./src/js/dummy/dummyObject.js":
/*!*************************************!*\
  !*** ./src/js/dummy/dummyObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dummyObject = {
  "kind": "youtube#searchListResponse",
  "etag": "CeWgOMvW7YtKhspWGE0SwlO4iPo",
  "nextPageToken": "CBQQAA",
  "prevPageToken": "CAoQAQ",
  "regionCode": "KR",
  "pageInfo": {
    "totalResults": 34794,
    "resultsPerPage": 10
  },
  "items": [{
    "kind": "youtube#searchResult",
    "etag": "LLJCs6OPpwzOwvVdLyzQYGkTJ2A",
    "id": {
      "kind": "youtube#video",
      "videoId": "FMUpVA0Vvjw"
    },
    "snippet": {
      "publishedAt": "2021-10-13T01:33:11Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🤔 조엘의 GC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/FMUpVA0Vvjw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-13T01:33:11Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "DGW8RKsCt-5QHqeqtIEDP4doOmQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "ccXMdSM1IRo"
    },
    "snippet": {
      "publishedAt": "2020-06-05T12:55:40Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우아한테크코스 교육설명회] 1. 개발자에게 교육자로 사는 경험이 왜 중요한가",
      "description": "우아한테크코스 교육설명회 2020년 5월 28월 목요일 온라인으로 우아한테크코스 교육설명회를 진행했습니다. 첫번째 세션은 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/ccXMdSM1IRo/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-06-05T12:55:40Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "isgdvYY7DOrXn3GALnmyA22khY4",
    "id": {
      "kind": "youtube#video",
      "videoId": "OrKdin6IM8Y"
    },
    "snippet": {
      "publishedAt": "2021-10-25T01:45:30Z",
      "channelId": "UCPTjwgKQkrgx6UP14XRLYRQ",
      "title": "D1_박재성&amp;임동준 우아한테크코스, 우아한형제들_우아한테크코스가 지향하는 교육은?(풀영상)",
      "description": "D1_박재성&임동준 우아한테크코스, 우아한형제들_9/13(월) 13:20~14:30 우아한테크코스가 지향하는 교육은?(풀영상) 우아한테크 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/OrKdin6IM8Y/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "9월은 직업능력의 달",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-25T01:45:30Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "yMZx5KNUThjCwiJN7DvW6GoQHPQ",
    "id": {
      "kind": "youtube#video",
      "videoId": "xcrjamphIp4"
    },
    "snippet": {
      "publishedAt": "2020-09-23T02:34:33Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🧃쿨라임의 HTTP/1.1, HTTP/2, 그리고 QUIC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/xcrjamphIp4/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-09-23T02:34:33Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "TC43QSPn3RMBKCVbm1G8REh10Fs",
    "id": {
      "kind": "youtube#video",
      "videoId": "-wNPwne8jJk"
    },
    "snippet": {
      "publishedAt": "2020-09-01T05:23:41Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우테코 🎬vlog] Ep.2 오렌지의 하루",
      "description": "우테코로그 Ep.2 오렌지의 하루 우테코 vlog의 두 번째 주자는 오렌지입니다. 길어지는 코로나 시기에 우아한테크코스는 어떤 방식 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/-wNPwne8jJk/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-09-01T05:23:41Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "bB64tQO8LExICG1MUmwQvXdsNno",
    "id": {
      "kind": "youtube#video",
      "videoId": "wPdH7lJ8jf0"
    },
    "snippet": {
      "publishedAt": "2021-10-19T01:18:13Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🍭 다니의 HTTPS",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/wPdH7lJ8jf0/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-10-19T01:18:13Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "MgTCXMypeUICimjHgQasrMiz1Ig",
    "id": {
      "kind": "youtube#video",
      "videoId": "nhQRaRgV19o"
    },
    "snippet": {
      "publishedAt": "2021-09-09T04:04:59Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[우테코 인터뷰 챌린지] 🎙 코치에게 묻다! 코테뷰 #4 포비",
      "description": "우아한테크코스의 크루들이 진행하는 인터뷰 챌린지입니다.   이번 우테코 인터뷰 챌린지는 '코치 인터뷰'로 진행되었습니다.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/nhQRaRgV19o/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-09-09T04:04:59Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "N3U53wnSa5sGySNL8IFVCql-vZ4",
    "id": {
      "kind": "youtube#video",
      "videoId": "7iGIfcEsc2g"
    },
    "snippet": {
      "publishedAt": "2020-11-12T05:34:03Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] 🤠럿고의 CORS",
      "description": "녹화 문제로 잡음이 섞여있을 수 있습니다. ‍♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡' ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/7iGIfcEsc2g/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2020-11-12T05:34:03Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "ffuxBOI47WpNg5rgeg1rd_OpYZI",
    "id": {
      "kind": "youtube#video",
      "videoId": "Ppqc3qN75EE"
    },
    "snippet": {
      "publishedAt": "2019-07-29T11:52:46Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡]  🙆‍♂️올레의 JPA와 JDBC",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테코톡입니다. '올레'가 동료 크루들이 지금 가장 활발히 적용하고 공부하고 있는 JPA를 ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Ppqc3qN75EE/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2019-07-29T11:52:46Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }, {
    "kind": "youtube#searchResult",
    "etag": "h0gGPC9Dzr-wX2AuuFjcXOVVMvg",
    "id": {
      "kind": "youtube#video",
      "videoId": "sJ14cWjrNis"
    },
    "snippet": {
      "publishedAt": "2021-06-02T07:46:52Z",
      "channelId": "UC-mOekGSesms0agFntnQang",
      "title": "[10분 테코톡] ☕️ 체프의 브라우저 렌더링",
      "description": "우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. ‍♂️ '10분 테코톡'이란 우아한테크코스 과정을 진행하며 크루(수강생) ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/sJ14cWjrNis/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "우아한Tech",
      "liveBroadcastContent": "none",
      "publishTime": "2021-06-02T07:46:52Z"
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dummyObject);

/***/ }),

/***/ "./src/js/models/Video.js":
/*!********************************!*\
  !*** ./src/js/models/Video.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _keyword = /*#__PURE__*/new WeakMap();

var _fetchedVideos = /*#__PURE__*/new WeakMap();

var _newVideoItems = /*#__PURE__*/new WeakMap();

var _allVideoItems = /*#__PURE__*/new WeakMap();

var _nextPageToken = /*#__PURE__*/new WeakMap();

var _savedVideoItems = /*#__PURE__*/new WeakMap();

/* eslint-disable max-depth */

/* eslint-disable no-unreachable-loop */
var Video = /*#__PURE__*/function () {
  // 검색어
  // length:10, type:array, fetch한 원본(items, nextPageToken)
  //  length:10, type:array, search해서 첫 10개, 스크롤 때마다 10개 추가되는 items (orgin: #fetchedVideos), svaed 속성이 바뀌면 override가 된다.
  // length:미상, type:array, 스크롤할 때마다 해당 newVideoItems 10개씩 누적되는 items
  // fetch하기 위한 다음 페이지 Token (orgin: #fetchedVideos)
  // length:미상(최대100), type:array,저장된 비디오 items, localStorage 상호작용
  function Video(dummyObject) {
    _classCallCheck(this, Video);

    _classPrivateFieldInitSpec(this, _keyword, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _fetchedVideos, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _newVideoItems, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _allVideoItems, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _nextPageToken, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _savedVideoItems, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _fetchedVideos, dummyObject);

    this.savedIdList = [];

    _classPrivateFieldSet(this, _savedVideoItems, this.getItemsLocalStorage());

    console.log(_classPrivateFieldGet(this, _savedVideoItems));
  }

  _createClass(Video, [{
    key: "keyword",
    get: function get() {
      return _classPrivateFieldGet(this, _keyword);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _keyword, value);
    }
  }, {
    key: "nextPageToken",
    get: function get() {
      return _classPrivateFieldGet(this, _nextPageToken);
    }
  }, {
    key: "newVideoItems",
    get: function get() {
      return _classPrivateFieldGet(this, _newVideoItems);
    }
  }, {
    key: "savedVideoItems",
    get: function get() {
      return _classPrivateFieldGet(this, _savedVideoItems);
    }
  }, {
    key: "accumulateVideoItems",
    value: function accumulateVideoItems() {
      _classPrivateFieldSet(this, _allVideoItems, [].concat(_toConsumableArray(_classPrivateFieldGet(this, _allVideoItems)), _toConsumableArray(_classPrivateFieldGet(this, _newVideoItems))));

      console.log(_classPrivateFieldGet(this, _allVideoItems));
    }
  }, {
    key: "setItemsLocalStorage",
    value: function setItemsLocalStorage(savedId) {
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _allVideoItems)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.videoId === savedId) {
            item.saved = true;
            var allSavedVideoItems = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _savedVideoItems)), [item]);

            _classPrivateFieldSet(this, _savedVideoItems, allSavedVideoItems);

            localStorage.setItem('saved-video', JSON.stringify(allSavedVideoItems));
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getItemsLocalStorage",
    value: function getItemsLocalStorage() {
      var _JSON$parse;

      return (_JSON$parse = JSON.parse(localStorage.getItem('saved-video'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
    }
  }, {
    key: "updateNewVideoItems",
    value: function updateNewVideoItems() {
      var updatedNewVideoItems = [];

      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _newVideoItems)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var newItem = _step2.value;
          var isfindSavedItem = false;

          var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _savedVideoItems)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var savedItem = _step3.value;

              if (newItem.videoId === savedItem.videoId) {
                isfindSavedItem = true;
                updatedNewVideoItems.push(savedItem);
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (isfindSavedItem === false) {
            updatedNewVideoItems.push(newItem);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (updatedNewVideoItems.length) {
        _classPrivateFieldSet(this, _newVideoItems, updatedNewVideoItems);
      }
    }
  }, {
    key: "setVideoInfo",
    value: function setVideoInfo() {
      _classPrivateFieldSet(this, _newVideoItems, _classPrivateFieldGet(this, _fetchedVideos).items.map(function (item) {
        return {
          videoId: item.id.videoId,
          channelId: item.snippet.channelId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          publishTime: item.snippet.publishTime,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          saved: false
        };
      }));

      _classPrivateFieldSet(this, _nextPageToken, _classPrivateFieldGet(this, _fetchedVideos).nextPageToken);
    }
  }, {
    key: "fetchYoutubeApi",
    value: function () {
      var _fetchYoutubeApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, nextPageToken) {
        var REDIRECT_SERVER_HOST, url, parameters, response, body;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // const ORIGINAL_HOST = "https://www.googleapis.com"; // 기존 유튜브 API 호스트
                REDIRECT_SERVER_HOST = 'https://zealous-swartz-f699df.netlify.app/'; // my own redirect server hostname

                url = new URL('youtube/v3/search', REDIRECT_SERVER_HOST);
                parameters = new URLSearchParams({
                  part: 'snippet',
                  type: 'video',
                  maxResults: 10,
                  regionCode: 'kr',
                  safeSearch: 'strict',
                  pageToken: nextPageToken || '',
                  q: query
                });
                url.search = parameters.toString();
                _context.next = 7;
                return fetch(url, {
                  method: 'GET'
                });

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.json();

              case 10:
                body = _context.sent;

                if (response.ok) {
                  _context.next = 13;
                  break;
                }

                throw new Error(body.error.message);

              case 13:
                _classPrivateFieldSet(this, _fetchedVideos, body);

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 16]]);
      }));

      function fetchYoutubeApi(_x, _x2) {
        return _fetchYoutubeApi.apply(this, arguments);
      }

      return fetchYoutubeApi;
    }()
  }]);

  return Video;
}();



/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$)
/* harmony export */ });
var $ = function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
};
var $$ = function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
};

/***/ }),

/***/ "./src/js/utils/event.js":
/*!*******************************!*\
  !*** ./src/js/utils/event.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
// emit은 view에서 쓴다. element 커스텀이벤트를 붙여준다.
var emit = function emit(target, eventName, detail) {
  var event = new CustomEvent(eventName, {
    detail: detail
  });
  target.dispatchEvent(event);
};
var on = function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
};

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isZeroLength = function isZeroLength(target) {
  return target.length === 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isZeroLength);

/***/ }),

/***/ "./src/js/views/AppView.js":
/*!*********************************!*\
  !*** ./src/js/views/AppView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppView)
/* harmony export */ });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _bindEvents = /*#__PURE__*/new WeakSet();

var _handleClickButton = /*#__PURE__*/new WeakSet();

var AppView = /*#__PURE__*/_createClass(function AppView() {
  _classCallCheck(this, AppView);

  _classPrivateMethodInitSpec(this, _handleClickButton);

  _classPrivateMethodInitSpec(this, _bindEvents);

  this.$searchModalButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-modal-button');
  this.$modalContainer = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-container');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  this.$searchModalButton.addEventListener('click', _classPrivateMethodGet(this, _handleClickButton, _handleClickButton2).bind(this));
}

function _handleClickButton2() {
  this.$modalContainer.classList.remove('hide');
}



/***/ }),

/***/ "./src/js/views/SearchInputView.js":
/*!*****************************************!*\
  !*** ./src/js/views/SearchInputView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInputView)
/* harmony export */ });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _bindEvents = /*#__PURE__*/new WeakSet();

var _handleKeypress = /*#__PURE__*/new WeakSet();

var _handleClick = /*#__PURE__*/new WeakSet();

var SearchInputView = /*#__PURE__*/_createClass(function SearchInputView() {
  _classCallCheck(this, SearchInputView);

  _classPrivateMethodInitSpec(this, _handleClick);

  _classPrivateMethodInitSpec(this, _handleKeypress);

  _classPrivateMethodInitSpec(this, _bindEvents);

  this.$searchInputKeyword = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword');
  this.$searchButton = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-button');

  _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);
});

function _bindEvents2() {
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_1__.on)(this.$searchButton, 'click', _classPrivateMethodGet(this, _handleClick, _handleClick2).bind(this));
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_1__.on)(this.$searchInputKeyword, 'keypress', _classPrivateMethodGet(this, _handleKeypress, _handleKeypress2).bind(this));
}

function _handleKeypress2() {
  if (window.event.keyCode === 13) {
    _classPrivateMethodGet(this, _handleClick, _handleClick2).call(this);
  }
}

function _handleClick2() {
  var keyword = this.$searchInputKeyword.value;
  (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_1__.emit)(this.$searchButton, '@search', {
    keyword: keyword
  });
}



/***/ }),

/***/ "./src/js/views/SearchResultView.js":
/*!******************************************!*\
  !*** ./src/js/views/SearchResultView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultView)
/* harmony export */ });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/event.js */ "./src/js/utils/event.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var SearchResultView = /*#__PURE__*/function () {
  function SearchResultView() {
    var _this = this;

    _classCallCheck(this, SearchResultView);

    this.$videoList = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list');
    this.template = new Template();
    this.$searchTarget = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-target');
    this.$searchNoResult = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-no-result');
    this.observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        console.log('무한스크롤중');
        (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_1__.emit)(_this.$searchTarget, '@scroll-bottom');
      } else console.log('Not on the bottom');
    }, {
      root: this.$videoList,
      threshold: 1.0
    });
  }

  _createClass(SearchResultView, [{
    key: "renderVideo",
    value: function renderVideo(newVideoItems) {
      var _this2 = this;

      this.$videoItems = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.skeleton');
      this.$videoItems.forEach(function ($item, idx) {
        $item.classList.remove('skeleton');
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__thumbnail', $item).setAttribute('srcdoc', _this2.template.getThumbnail(newVideoItems[idx].thumbnailUrl, newVideoItems[idx].videoId));
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__title', $item).innerText = newVideoItems[idx].title;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__channel-name', $item).innerText = newVideoItems[idx].channelTitle;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__published-date', $item).innerText = newVideoItems[idx].publishTime;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__save-button', $item).innerText = newVideoItems[idx].saved ? '저장됨' : '⬇ 저장';
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__save-button', $item).classList.add(newVideoItems[idx].saved ? 'saved-button' : 'button');
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__save-button', $item).disabled = newVideoItems[idx].saved;
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__save-button', $item).addEventListener('click', _this2.handleSaveButton.bind(_this2));
        (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-item__save-button', $item).dataset.id = newVideoItems[idx].videoId;
      });
    }
  }, {
    key: "handleSaveButton",
    value: function handleSaveButton(event) {
      var savedId = event.target.dataset.id;
      var buttonElement = event.target;
      (0,_utils_event_js__WEBPACK_IMPORTED_MODULE_1__.emit)(this.$searchTarget, '@save-video', {
        savedId: savedId,
        buttonElement: buttonElement
      });
    }
  }, {
    key: "changeSaveButtonStyle",
    value: function changeSaveButtonStyle($savedButton) {
      $savedButton.disabled = true;
      $savedButton.textContent = '저장됨';
      $savedButton.classList.add('saved-button');
    }
  }, {
    key: "removeVideo",
    value: function removeVideo() {
      this.$videoList.replaceChildren();
    }
  }, {
    key: "showSkeleton",
    value: function showSkeleton() {
      this.$videoList.insertAdjacentHTML('beforeend', this.template.getSkeleton());
      console.log('show skeleton');
    }
  }, {
    key: "startObserve",
    value: function startObserve() {
      this.observer.observe(this.$videoList.lastElementChild);
    }
  }, {
    key: "stopObserve",
    value: function stopObserve() {
      this.observer.unobserve(this.$videoList.lastElementChild);
    }
  }, {
    key: "showNotFound",
    value: function showNotFound() {
      this.$searchTarget.classList.add('hide');
      this.$searchNoResult.classList.remove('hide');
    }
  }, {
    key: "hideNotFound",
    value: function hideNotFound() {
      this.$searchTarget.classList.remove('hide');
      this.$searchNoResult.classList.add('hide');
    }
  }]);

  return SearchResultView;
}();



var Template = /*#__PURE__*/function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, [{
    key: "getThumbnail",
    value: function getThumbnail(imgUrl, videoId) {
      return "\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          overflow: hidden;\n        }\n\n        body {\n          position: relative; \n        }\n\n        img {\n          object-fit: cover;\n          width: 100%;\n          height: 135px;\n        }\n\n        .play { \n          position: absolute; \n          top: 30%;\n          left: 37%;\n          background: gray;\n          border-radius: 50% / 10%;\n          color: #FFFFFF;\n          font-size: 1em; /* change this to change size */\n          height: 3em;\n          padding: 0;\n          text-align: center;\n          text-indent: 0.1em;\n          transition: all 150ms ease-out;\n          width: 4em;\n        }\n\n        .play:hover {\n          background: red;\n        }\n\n        .play::before { \n          background: inherit;\n          border-radius: 5% / 50%;\n          bottom: 9%;\n          content: '';\n          left: -5%;\n          position: absolute;\n          right: -5%;\n          top: 9%;\n        }\n\n        .play::after {\n          border-style: solid;\n          border-width: 1em 0 1em 1.732em;\n          border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);\n          content: ' ';\n          font-size: 0.75em;\n          height: 0;\n          margin: -1em 0 0 -0.75em;\n          top: 50%;\n          position: absolute;\n          width: 0;\n        }\n\n      </style>\n      <a href='https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&mute=1'>\n      <img src=").concat(imgUrl, ">\n        <div class='play'></div>\n      </a>\n    ");
    }
  }, {
    key: "getSkeleton",
    value: function getSkeleton() {
      return "\n      <li class=\"video-item skeleton\" data-video-id=\"\">\n        <iframe \n          class=\"video-item__thumbnail\" \n          srcdoc=\"\" \n          frameborder=\"0\"\n          allow=\"autoplay\"\n          allowfullscreen>\n        </iframe>\n        <h4 class=\"video-item__title\"></h4>\n        <p class=\"video-item__channel-name\"></p>\n        <p class=\"video-item__published-date\"></p>\n        <button data-id=\"\" class=\"video-item__save-button button\"></button>\n      </li>\n    ".repeat(10);
    }
  }, {
    key: "getNotFound",
    value: function getNotFound() {
      return "\n    <section class=\"search-result search-result--no-result\">\n        <h3 hidden>\uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C</h3>\n        <div class=\"no-result\">\n          <img src=\"./src/assets/images/not_found.png\" alt=\"no result image\" class=\"no-result__image\">\n          <p class=\"no-result__description\">\n            \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4<br />\n            \uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694\n          </p>\n        </div>\n      </section>\n    ";
    }
  }]);

  return Template;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n\n.bottom-target {\n    /* visibility: hidden; */\n    margin-top: 100px;\n    height: 100px;       \n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;AACjB","sourcesContent":["body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n\n.bottom-target {\n    /* visibility: hidden; */\n    margin-top: 100px;\n    height: 100px;       \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nol,ul {\r\n    list-style: none;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput, button, textarea, select {\r\n    font: inherit;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAKA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB","sourcesContent":["@import './root.css';\r\n@import './app.css';\r\n@import './modal.css';\r\n@import './skeleton.css';\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nol,ul {\r\n    list-style: none;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\ninput, button, textarea, select {\r\n    font: inherit;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.dimmer {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.search-modal {\r\n    position: relative;\r\n    width: 1080px;\r\n    height: 727px;\r\n    background: #FFFFFF;\r\n    border: 1px solid rgba(0, 0, 0, 0.12);\r\n    border-radius: 4px;\r\n    padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n    font-weight: bold;\r\n    font-size: 34px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n    width: 400px;\r\n    height: 36px;\r\n    margin-right: 20px;\r\n    padding: 4px 8px;\r\n    border: 1px solid #B4B4B4;\r\n    border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n    color: #8B8B8B;\r\n    font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n    width: 72px;\r\n    height: 36px;\r\n    background: #00BCD4;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 493px;\r\n}\r\n\r\n.no-result {\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n    width: 190px;\r\n    height: 140px;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n    width: 1040px;\r\n    height: 493px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    gap: 32px 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n    position: relative;\r\n    width: 240px;\r\n    height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n    width: 100%;\r\n    height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 80px;\r\n    height: 36px;\r\n    background-color: var(--secondary-lighten);\r\n    margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n    background-color: var(--secondary);\r\n}\r\n\r\n.saved-button {\r\n    color: white;\r\n    cursor: default;\r\n    background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n    color: white;\r\n    background-color: var(--primary);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;AACX;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,gCAAgC;AACpC","sourcesContent":[".modal-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.dimmer {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.search-modal {\r\n    position: relative;\r\n    width: 1080px;\r\n    height: 727px;\r\n    background: #FFFFFF;\r\n    border: 1px solid rgba(0, 0, 0, 0.12);\r\n    border-radius: 4px;\r\n    padding: 50px 30px 32px 30px;\r\n}\r\n\r\n.search-modal__title {\r\n    font-weight: bold;\r\n    font-size: 34px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.search-input {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.search-input__keyword {\r\n    width: 400px;\r\n    height: 36px;\r\n    margin-right: 20px;\r\n    padding: 4px 8px;\r\n    border: 1px solid #B4B4B4;\r\n    border-radius: 4px;\r\n}\r\n\r\n.search-input__keyword::placeholder {\r\n    color: #8B8B8B;\r\n    font-size: 16px;\r\n}\r\n\r\n.search-input__search-button {\r\n    width: 72px;\r\n    height: 36px;\r\n    background: #00BCD4;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.search-result.search-result--no-result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 493px;\r\n}\r\n\r\n.no-result {\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.no-result__image {\r\n    width: 190px;\r\n    height: 140px;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.no-result__description {\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.video-list {\r\n    width: 1040px;\r\n    height: 493px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    gap: 32px 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.scroll {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.video-item {\r\n    position: relative;\r\n    width: 240px;\r\n    height: 255px;\r\n}\r\n\r\n.video-item__thumbnail {\r\n    width: 100%;\r\n    height: 135px;\r\n}\r\n\r\n.video-item__title {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin: 4px 0;\r\n}\r\n\r\n.video-item__channel-name {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.video-item__published-date {\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.video-item__save-button {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 80px;\r\n    height: 36px;\r\n    background-color: var(--secondary-lighten);\r\n    margin-top: 4px;\r\n}\r\n\r\n.video-item__save-button:hover {\r\n    background-color: var(--secondary);\r\n}\r\n\r\n.saved-button {\r\n    color: white;\r\n    cursor: default;\r\n    background-color: var(--primary);\r\n}\r\n\r\n.saved-button:hover {\r\n    color: white;\r\n    background-color: var(--primary);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #00bcd4;\n  --primary-lighten: #80deea;\n  --secondary: #b4b4b4;\n  --secondary-lighten: #ededed;\n  --surface: #212121;\n}\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,oBAAoB;EACpB,4BAA4B;EAC5B,kBAAkB;AACpB","sourcesContent":[":root {\n  --primary: #00bcd4;\n  --primary-lighten: #80deea;\n  --secondary: #b4b4b4;\n  --secondary-lighten: #ededed;\n  --surface: #212121;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\n  width: 220px;\n  margin: 8px;\n}\n\n.skeleton .video-item__thumbnail,\n.skeleton .video-item__title,\n.skeleton .video-item__channel-name,\n.skeleton .video-item__published-date, \n.skeleton .video-item__save-button {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .video-item__title,\n.skeleton .video-item__channel-name,\n.skeleton .video-item__published-date {\n  height: 16px;\n  margin-bottom: 10px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;EAKE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;;;EAGE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\n  width: 220px;\n  margin: 8px;\n}\n\n.skeleton .video-item__thumbnail,\n.skeleton .video-item__title,\n.skeleton .video-item__channel-name,\n.skeleton .video-item__published-date, \n.skeleton .video-item__save-button {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .video-item__title,\n.skeleton .video-item__channel-name,\n.skeleton .video-item__published-date {\n  height: 16px;\n  margin-bottom: 10px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index */ "./src/css/index.css");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/js/Controller.js");


window.addEventListener('DOMContentLoaded', new _Controller__WEBPACK_IMPORTED_MODULE_1__["default"]());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map