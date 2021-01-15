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

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => /* binding */ Contact\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nconst Contact = ()=>{\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\",null,\"This is Contact Section\")\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dashboard\": () => /* binding */ Dashboard\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nconst Dashboard = () => { \n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\",null,\" This is our Dashboard ! \");\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/dashboard.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => /* binding */ footer,\n/* harmony export */   \"footerSecondary\": () => /* binding */ footerSecondary,\n/* harmony export */   \"footerpostSecondary\": () => /* binding */ footerpostSecondary\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\n\n\nconst footer = ()=>{\n\n\n\n    let a = [\n        {name:\"About\", link:\"https://about.instagram.com/\"},\n        {name:\"Blog\", link:\"https://about.instagram.com/en_US/blog\"},\n        {name:\"Jobs\", link:\"https://www.instagram.com/about/jobs/\"},\n        {name:\"Help\",link:\"https://help.instagram.com/\"},\n        {name:\"Api\",link:\"https://www.instagram.com/developer/\"},\n        {name:\"Privacy\",link:\"https://help.instagram.com/519522125107875\"},\n        {name:\"Terms\", link:\"https://help.instagram.com/581066165581870\"},\n        {name:\"Top Accounts\", link:\"https://www.instagram.com/directory/profiles/\"},\n        {name:\"Hashtags\", link:\"https://www.instagram.com/directory/hashtags/\"},\n        {name:\"Locations\", link:\"https://www.instagram.com/explore/locations/\"},\n    \n    ];\n\n    let b = [];\n\n\n    a.forEach((e)=> {\n\n        const links = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{style:\"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;\" ,href:e.link},e.name)\n\n        const linksDiv = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"link-div\",},links)\n\n        b.push(linksDiv)    });\n\n\n\n    const main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"footer-div\", style:\"display:flex; flex-wrap:wrap; justify-content:space-around; align-content:center; ; \"},b)\n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"footer\", {class:\"footer-main\", style:\"margin:auto; width:38%; height:3%; margin-top:19em; \"},main)\n    }\n\n\n\n    /*footer Secondary*/\n\n    const footerSecondary = ()=>{\n\n    let a2 = [\n        {name:\"Beauty\", link:\"https://about.instagram.com/\"},\n        {name:\"Dance & Performance\", link:\"https://about.instagram.com/en_US/blog\"},\n        {name:\"Fitness\", link:\"https://www.instagram.com/about/jobs/\"},\n        {name:\"Food & Drink\",link:\"https://help.instagram.com/\"},\n        {name:\"Home & Garden\",link:\"https://www.instagram.com/developer/\"},\n        {name:\"Music\",link:\"https://help.instagram.com/519522125107875\"},\n        {name:\"Visual Arts\", link:\"https://help.instagram.com/581066165581870\"},\n    ];\n\n    let b2 = [];\n\n\n    a2.forEach((e)=> {\n\n        const links2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{style:\"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;\" ,href:e.link},e.name)\n\n        const linksDiv2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"link-secoondary\",},links2)\n\n        b2.push(linksDiv2)    });\n\n\n\n    const main2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"footer-secondary\", style:\"display:flex; flex-wrap:wrap; justify-content:space-around; align-content:center; ; \"},b2)\n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"footer\", {class:\"footer-secondary\", style:\"margin:auto; width:42%; height:6%;  \"},main2)\n\n}\n\n\n\nconst footerpostSecondary = ()=>{\n\n    let a3 = [\n        {name:\"English \", link:\"https://about.instagram.com/\"},\n        {name:\"@ 2021 Isntagram from Facebook\", link:\"https://about.instagram.com/en-us/en_US/blog\"},\n\n    ];\n/* border: 1px solid red; */\n    /* width: 130px; */\n    let b3 = [];\n\n\n    a3.forEach((e)=> {\n\n        const links3 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{style:\"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;\" ,href:e.link},e.name)\n\n        const linksDiv3 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"link-post-secoondary\",},links3)\n\n        b3.push(linksDiv3)    });\n\n\n\n    const main3 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"footer-post-secondary\", style:\"display:flex; flex-wrap:wrap; justify-content:space-around; align-content:center; ; \"},b3)\n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"footer\", {class:\"footer-post-secondary\", style:\"margin:auto; width:20%; height:6%;  \"},main3)\n\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\r\n\r\nconst Header = () => {\r\n    const menuItems = [\r\n        // {\r\n        //     link: '/',\r\n        //     name: 'Home'\r\n        // },\r\n        // {\r\n        //     link: '/dashboard',\r\n        //     name: 'Dashboard'\r\n        // },\r\n        // {\r\n        //     link: '/contacts',\r\n        //     name: 'Contacts'\r\n        // },\r\n        // {\r\n        //     link: '/signup',\r\n        //     name: 'signup'\r\n        // },\r\n    ]\r\n    const list = [];\r\n\r\n    menuItems.forEach(item => {\r\n        const liProps = {\r\n            onclick: () => {\r\n                window.location.pathname = item.link;\r\n            },\r\n            style: \"padding: 5px 15px; border: 1px solid #ddd; margin: 5px; display: inline-block; background-color: maroon; cursor:pointer; font-weight:bolder; color:white;\"\r\n        }\r\n        const li = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', liProps, item.name);\r\n        list.push(li);\r\n    })\r\n\r\n    const menus = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', null, list);\r\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', null, menus);\r\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _logIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logIn */ \"./src/components/logIn.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard */ \"./src/components/dashboard.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup */ \"./src/components/signup.js\");\n\n\n\n\n\n\nconst Layout = ()=> {\n    const renderLayout = (page) => (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n        \"div\",\n        {style:\n        \"margin: auto; \"\n        },\n        page);\n\n\nif (location.pathname === \"/\"){\n    return renderLayout((0,_logIn__WEBPACK_IMPORTED_MODULE_1__.logIn)());\n}\nelse if (location.pathname === \"/dashboard\"){\n    return renderLayout((0,_dashboard__WEBPACK_IMPORTED_MODULE_2__.Dashboard)());\n}\nelse if (location.pathname === \"/contacts\"){\n    return renderLayout((0,_contact__WEBPACK_IMPORTED_MODULE_3__.Contact)());\n}\nelse if (location.pathname === \"/signup\"){\n    return renderLayout((0,_signup__WEBPACK_IMPORTED_MODULE_4__.signup)());\n}};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/logIn.js":
/*!*********************************!*\
  !*** ./src/components/logIn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logIn\": () => /* binding */ logIn\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\n\nlet logIn = () => {\n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {class:\"parent\"},\n    \n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"form-container\",},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', { class:\"insta-image\", src:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxV6Yr6XMS7r3vrjPIrJnXVQDH3V1nfq3cQ&usqp=CAU\"}),\n   \n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('form',{class: \"login-form\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Phone number, username or email\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Password\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class: \"btn btn-primary\", href:\"http://localhost:9000/dashboard\"}, \"Log In\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3',{class: \"login-alternative\" , }, \"or\"),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('i',{class:\"fab fa-facebook\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"facebook-login\", href:\"https://www.facebook.com/\"}, \"Log in with Facebook\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"forgot-password\", href:\"https://www.instagram.com/accounts/password/reset/\"}, \"Forgot password?\"),\n    \n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"signup-container\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', null, \"Don't have an account?\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"signUp\", href:\"http://localhost:9000/signup\"}, \"Sign up\"),\n),\n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"get-app\"}, \"Get the app.\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"store-links\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png\"})),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png\"}),)\n)\n)\n)\n,(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)(),(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footerSecondary)(), (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footerpostSecondary)(),\n)\n};\nlogIn()\n    // export let footer = () => {\n\n    //     return createElement('div', {class:\"footer\"},\n    //     createElement('ul',{class:\"footer-ul\"},\n    //     createElement('li',{class:\"footer-li\"}, \"Blog\"),\n    //     createElement('li',{class:\"footer-li\"}, \"contacts\"),\n    //     createElement('li',{class:\"footer-li\"}),\n    //     createElement('li',{class:\"footer-li\"}),\n    //     ))\n\n    // };\n\n\n\n\n//     const rootElem = document.getElementById('root');\n//     let createform = document.createElement('form',) ;\n//     rootElem.append(createform);\n    \n//     let heading = document.createElement('h1'); \n//     heading.innerHTML = \"Instagram\";\n//     createform.appendChild(heading);\n    \n//     let nameInput = document.createElement('input');\n//     createform.appendChild(nameInput, );\n\n    \n    \n//     let passwordInput = document.createElement('input');\n//     createform.appendChild(passwordInput);\n    \n    \n//     let loginButton = document.createElement('button');\n//     loginButton.innerHTML = \"Log in\";\n//     createform.appendChild(loginButton);\n    \n//     let textelement = document.createElement('h3');\n//     textelement.innerHTML = \"--------  OR  -------- \";\n//     createform.appendChild(textelement);\n//     textelement.style.opacity = '0.5';\n    \n    \n    \n//     let facebookLogin = document.createElement('a');\n//     facebookLogin.innerHTML = \"Log in with Facebook\"\n//     createform.appendChild(facebookLogin);\n\n    \n//     let forgotPassword = document.createElement('a');\n//     forgotPassword.innerHTML = \"Forgot Password ? \"\n//     createform.appendChild(forgotPassword);\n    \n\n// createElement('div', {class: \"Hello\"}, Hello);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/logIn.js?");

/***/ }),

/***/ "./src/components/signup.js":
/*!**********************************!*\
  !*** ./src/components/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": () => /* binding */ signup\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\n\n\nlet signup = () => {\n    \n\n    return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {class:\"signup-page-container\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"signupform-container\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {class:\"signup-form\"},\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', { src:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"parag\"}, \"Sign up to see photos and videos from your friends.\"),\n    // createElement('i',{class:\"fab fa-facebook\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"facebook-log\", href:\"https://www.facebook.com/\"}, \"Log in with Facebook\"),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3',{class: \"login-alternate\" , }, \"or\"),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Mobile number or Email\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Full Name\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Username\"}),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('input',{placeholder:\"Password\"}),\n\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {class:\"btn btn-primary btn-signUp\", href:\"http://localhost:9000/dashboard\"},\n    \"Sign up\"),\n    \n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"terms\"},\"By signing up, you agree to our <span>Terms</span>, Data policy and Cookies Policy.\")\n    \n\n    ),\n    (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',{class:\"signup-page-signup-container\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', null, \"Have an account?\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{class:\"signup-page-signUp\", href:\"http://localhost:9000/signup\"}, \"Log in\"),\n),\n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {class:\"get-app-signup\"}, \"Get the app.\"),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:\"store-links\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png\"})),\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('a',{href:\"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo\"},\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('img',{src:\"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png\"}),)\n)\n    ),\n    (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)(), (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footerpostSecondary)())\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/signup.js?");

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