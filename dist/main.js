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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board-template.js":
/*!******************************************!*\
  !*** ./src/components/board-template.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return boardTemplate; });\nfunction boardTemplate(startNum, endNum) {\r\n    let HTML = '';\r\n    for (let i = startNum; i <= endNum; i++) {\r\n        HTML += `<div data-number=\"${i}\" class=\"js-btn result-balls\">${i}</div> `;\r\n        document.getElementById('section-1').innerHTML = HTML;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/board-template.js?");

/***/ }),

/***/ "./src/components/deal-component.js":
/*!******************************************!*\
  !*** ./src/components/deal-component.js ***!
  \******************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DealComponent\", function() { return DealComponent; });\nclass DealComponent {\r\n    constructor() {\r\n        this.drawedNums = [];\r\n        this.count = 12;\r\n    }\r\n    start(callback) {\r\n        this.onFinish = callback;\r\n        this.makeNumbers();\r\n        this.render();\r\n        return this;\r\n    }\r\n\r\n    generateRandomNum() {\r\n        let num = Math.round(Math.random() * (30 - 1) + 1);\r\n        if (this.drawedNums.indexOf(num) < 0) {\r\n            return num;\r\n        }\r\n        return this.generateRandomNum();\r\n    }\r\n\r\n    makeNumbers() {\r\n        for (let i = 0; i < this.count; i++) {\r\n            let genNum = this.generateRandomNum();\r\n            this.drawedNums.push(genNum);\r\n        }\r\n        console.log(this.drawedNums, 'array result');\r\n    }\r\n    render() {\r\n        for (let i = 0; i < this.drawedNums.length; i++) {\r\n            setTimeout(() => {\r\n                let HTML = `<div \r\n                 class=\"result-balls glow\"\r\n                >${this.drawedNums[i]}</div>`;\r\n                document.getElementById('sec-3').innerHTML += HTML;\r\n                if (i == this.drawedNums.length - 1) {\r\n                    this.onFinish(this.drawedNums);\r\n                }\r\n            }, i * 2000);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/deal-component.js?");

/***/ }),

/***/ "./src/components/ticket-list-template.js":
/*!************************************************!*\
  !*** ./src/components/ticket-list-template.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ticketListTemplate; });\nfunction ticketListTemplate(ticketList) {\r\n    let HTML = '';\r\n    ticketList.forEach((ticket) => {\r\n        HTML += `<tr class=\"js-ticket-row\">`;\r\n        ticket.forEach((number) => {\r\n            HTML += `<th><span class=\"ball result-balls btn-circle\">${number}</span></th>`;\r\n        });\r\n        HTML += `</tr>`;\r\n    });\r\n    document.getElementById('tbody').innerHTML = HTML;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/ticket-list-template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_deal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/deal-component */ \"./src/components/deal-component.js\");\n/* harmony import */ var _components_ticket_list_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ticket-list-template */ \"./src/components/ticket-list-template.js\");\n/* harmony import */ var _components_board_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board-template */ \"./src/components/board-template.js\");\n\r\n\r\n\r\n\r\nconst PlaySelector = 'js-play';\r\nconst AddTicketSelector = 'js-add-ticket';\r\nconst TicketRowSelector = 'js-ticket-row';\r\nconst BtnNumSelector = 'js-btn';\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.init();\r\n    }\r\n\r\n    addBtnClick() {\r\n        let buttons = document.getElementsByClassName(BtnNumSelector);\r\n        for (let i = 0; i < buttons.length; i++) {\r\n            buttons[i].onclick = this.handleBtnClick.bind(this);\r\n        }\r\n    }\r\n\r\n    onFinish(winNums) {\r\n        this.ticketList.forEach((ticket, key) => {\r\n            let isWining = this.isWiningTicket(ticket, winNums);\r\n            let status = isWining ? 'win' : 'lose';\r\n            document.getElementsByClassName(TicketRowSelector)[key].classList.add(status);\r\n        });\r\n        // resets game after 5 seconds\r\n        setTimeout(this.resetGame.bind(this), 5000);\r\n    }\r\n\r\n    handlePlayClick() {\r\n        if (this.playDisabled) {\r\n            return;\r\n        }\r\n        new _components_deal_component__WEBPACK_IMPORTED_MODULE_0__[\"DealComponent\"]().start(this.onFinish.bind(this));\r\n        this.playDisabled = true;\r\n    }\r\n\r\n    handleTicketClick() {\r\n        if (this.hasReachedTicketMaxNum() || this.selectedNum.length == 0) {\r\n            return;\r\n        }\r\n        this.ticketList.push(this.selectedNum);\r\n        this.resetTicket();\r\n    }\r\n\r\n    handleBtnClick(event) {\r\n        if (this.selectedNum.length >= this.maxNumsPlayed) {\r\n            return;\r\n        }\r\n        let element = event.currentTarget;\r\n        let numValue = element.dataset.number;\r\n        element.style.backgroundColor = '#247cea';\r\n        this.selectedNum.push(numValue);\r\n    }\r\n\r\n    hasReachedTicketMaxNum() {\r\n        return this.ticketList.length > this.maxTicketsNum;\r\n    }\r\n\r\n    init() {\r\n        this.startNum = 1;\r\n        this.endNum = 30;\r\n        this.selectedNum = [];\r\n        this.ticketList = [];\r\n        this.winArray = [];\r\n        this.maxTicketsNum = 4;\r\n        this.maxNumsPlayed = 5;\r\n        this.playDisabled = false;\r\n    }\r\n\r\n    isWiningTicket(ticket, winNums) {\r\n        return ticket.every((value) => winNums.indexOf(parseInt(value)) > -1);\r\n    }\r\n\r\n    resetGame() {\r\n        this.init();\r\n        document.getElementById(PlaySelector).style.display = 'none';\r\n        document.getElementById(AddTicketSelector).style.display = 'inline';\r\n        document.getElementById('tbody').innerHTML = '';\r\n        document.getElementById('sec-3').innerHTML = '';\r\n    }\r\n\r\n    resetTicket() {\r\n        if (this.hasReachedTicketMaxNum()) {\r\n            document.getElementById(PlaySelector).style.display = 'inline';\r\n            document.getElementById(AddTicketSelector).style.display = 'none';\r\n        }\r\n        this.selectedNum = [];\r\n        Object(_components_board_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.startNum, this.endNum);\r\n        this.addBtnClick();\r\n        Object(_components_ticket_list_template__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.ticketList);\r\n    }\r\n\r\n    startGame() {\r\n        Object(_components_board_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.startNum, this.endNum);\r\n        this.addBtnClick();\r\n        document.getElementById(PlaySelector).onclick = this.handlePlayClick.bind(this);\r\n        document.getElementById(AddTicketSelector).onclick = this.handleTicketClick.bind(this);\r\n    }\r\n}\r\n\r\nnew Game().startGame();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });