/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/main.css?");

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => /* binding */ About\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nconst About = () => { \n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\",null,\"Learn More About Us ! \");\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/about.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => /* binding */ Contact\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nconst Contact = ()=>{\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\",null,\"This is Contact Section\")\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\r\n\r\nconst Header = () => {\r\n    const menuItems = [\r\n        // {\r\n        //     link: '/',\r\n        //     name: 'Home'\r\n        // },\r\n        // {\r\n        //     link: '/about',\r\n        //     name: 'About'\r\n        // },\r\n        // {\r\n        //     link: '/contacts',\r\n        //     name: 'Contacts'\r\n        // },\r\n        // {\r\n        //     link: '/signup',\r\n        //     name: 'signup'\r\n        // },\r\n    ]\r\n    const list = [];\r\n\r\n    menuItems.forEach(item => {\r\n        const liProps = {\r\n            onclick: () => {\r\n                window.location.pathname = item.link;\r\n            },\r\n            style: \"padding: 5px 15px; border: 1px solid #ddd; margin: 5px; display: inline-block; background-color: maroon; cursor:pointer; font-weight:bolder; color:white;\"\r\n        }\r\n        const li = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', liProps, item.name);\r\n        list.push(li);\r\n    })\r\n\r\n    const menus = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', null, list);\r\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', null, menus);\r\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _logIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logIn */ \"./src/components/logIn.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/components/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup */ \"./src/components/signup.js\");\n\n\n\n\n\nconst Layout = ()=> {\n    const renderLayout = (page) => (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n        \"div\",\n        {style:\n        \"margin: auto; \"\n        },\n        page);\n\n\nif (location.pathname === \"/\"){\n    return renderLayout((0,_logIn__WEBPACK_IMPORTED_MODULE_1__.logIn)());\n}\nelse if (location.pathname === \"/about\"){\n    return renderLayout((0,_about__WEBPACK_IMPORTED_MODULE_2__.About)());\n}\nelse if (location.pathname === \"/contacts\"){\n    return renderLayout((0,_contact__WEBPACK_IMPORTED_MODULE_3__.Contact)());\n}\nelse if (location.pathname === \"/signup\"){\n    return renderLayout((0,_signup__WEBPACK_IMPORTED_MODULE_4__.signup)());\n}};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/logIn.js":
/*!*********************************!*\
  !*** ./src/components/logIn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logIn\": () => /* binding */ logIn\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nlet logIn = () => {\n \n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"form-container\"},\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('form',{class: \"login-form\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Phone number, username or email\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Password\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',{class: \"btn btn-primary\"}, \"Log In\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3',{class: \"login-alternative\" , }, \"or\"),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i',{class:\"fab fa-facebook\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"facebook-login\", href:\"https://www.facebook.com/\"}, \"Log in with Facebook\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"forgot-password\", href:\"https://www.instagram.com/accounts/password/reset/\"}, \"Forgot password?\"),\n    \n),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"signup-container\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', null, \"Don't have an account?\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"signUp\", href:\"http://localhost:9000/signUp/\"}, \"Sign up\"),\n),\n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"get-app\"}, \"Get the app.\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"store-links\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png\"})),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png\"}),)\n),\n    )\n\n};\n    // export let footer = () => {\n\n    //     return createElement('div', {class:\"footer\"},\n    //     createElement('ul',{class:\"footer-ul\"},\n    //     createElement('li',{class:\"footer-li\"}, \"Blog\"),\n    //     createElement('li',{class:\"footer-li\"}, \"contacts\"),\n    //     createElement('li',{class:\"footer-li\"}),\n    //     createElement('li',{class:\"footer-li\"}),\n    //     ))\n\n    // };\n\n\n\n\n//     const rootElem = document.getElementById('root');\n//     let createform = document.createElement('form',) ;\n//     rootElem.append(createform);\n    \n//     let heading = document.createElement('h1'); \n//     heading.innerHTML = \"Instagram\";\n//     createform.appendChild(heading);\n    \n//     let nameInput = document.createElement('input');\n//     createform.appendChild(nameInput, );\n\n    \n    \n//     let passwordInput = document.createElement('input');\n//     createform.appendChild(passwordInput);\n    \n    \n//     let loginButton = document.createElement('button');\n//     loginButton.innerHTML = \"Log in\";\n//     createform.appendChild(loginButton);\n    \n//     let textelement = document.createElement('h3');\n//     textelement.innerHTML = \"--------  OR  -------- \";\n//     createform.appendChild(textelement);\n//     textelement.style.opacity = '0.5';\n    \n    \n    \n//     let facebookLogin = document.createElement('a');\n//     facebookLogin.innerHTML = \"Log in with Facebook\"\n//     createform.appendChild(facebookLogin);\n\n    \n//     let forgotPassword = document.createElement('a');\n//     forgotPassword.innerHTML = \"Forgot Password ? \"\n//     createform.appendChild(forgotPassword);\n    \n\n// createElement('div', {class: \"Hello\"}, Hello);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/logIn.js?");

/***/ }),

/***/ "./src/components/signup.js":
/*!**********************************!*\
  !*** ./src/components/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": () => /* binding */ signup\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nlet signup = () => {\n    \n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"signupform-container\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:\"signup-form\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', { src:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"parag\"}, \"Sign up to see photos and videos from your friends.\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i',{class:\"fab fa-facebook\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button',{class:\"facebook-login\", href:\"https://www.facebook.com/\"}, \"Log in with Facebook\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3',{class: \"login-alternative\" , }, \"or\"),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Mobile number or Email\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Full Name\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Username\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Password\"}),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class:\"btn btn-primary btn-signUp\"},\"Sign up\"),\n    \n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"terms\"},\"By signing up, you agree to our <span>Terms</span>, Data policy and Cookies Policy.\")\n\n    ))\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/signup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n\n\n\n\n\nconst App = () => {\n    const main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',null);\n    const layout= (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',null,(0,_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout)());\n    main.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n    main.appendChild(layout);\n    return main;\n\n\n    \n}\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById('root'));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\n    const createElement = (elementType, props, ...children) => {\r\n    const element = document.createElement(elementType);\r\n    children.forEach(child => {\r\n        if(typeof child === 'object') {\r\n            if(Array.isArray(child)) {\r\n                child.forEach(innerChild => {\r\n                    element.appendChild(innerChild);\r\n                })\r\n            } else {\r\n                element.appendChild(child);\r\n            }\r\n        } else {\r\n            element.innerHTML = children;\r\n        }\r\n    })\r\n    return handleProps(element, props);\r\n}\r\n\r\nconst handleProps = (element, props) => {\r\n    if(props) {\r\n        Object.keys(props).forEach(prop => {\r\n            if(prop) {\r\n                if(/^on.*$/.test(prop)) {\r\n                    element.addEventListener(prop.substring(2), props[prop])\r\n                } else {\r\n                    element.setAttribute(prop, props[prop])\r\n                }\r\n            }\r\n        })\r\n    }\r\n    return element;\r\n}\r\n\r\nconst reactDOM = {\r\n    render: (element, rootElement) => {\r\n        rootElement.appendChild(element);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/react/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;