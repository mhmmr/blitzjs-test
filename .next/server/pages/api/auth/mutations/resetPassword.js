module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1QM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vvKO");
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1N0Q");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _prisma_client__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


const EnhancedPrisma = Object(blitz__WEBPACK_IMPORTED_MODULE_0__["enhancePrisma"])(_prisma_client__WEBPACK_IMPORTED_MODULE_1__["PrismaClient"]);

/* harmony default export */ __webpack_exports__["default"] = (new EnhancedPrisma());

/***/ }),

/***/ "/IrO":
/***/ (function(module, exports) {

module.exports = require("zod");

/***/ }),

/***/ "16sC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var app_auth_mutations_resetPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R6ri");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jwnU");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blitzjs_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kHmN");
/* harmony import */ var _blitzjs_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
// This imports the output of getIsomorphicEnhancedResolver()



 // Ensure these files are not eliminated by trace-based tree-shaking (like Vercel)

path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve("next.config.js");
path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve("blitz.config.js");
path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(".next/blitz/db.js"); // End anti-tree-shaking

let db;
let connect;

try {
  var _db, _db2;

  db = __webpack_require__("+1QM").default;

  if (__webpack_require__("+1QM").connect) {
    connect = __webpack_require__("+1QM").connect;
  } else if ((_db = db) !== null && _db !== void 0 && _db.$connect || (_db2 = db) !== null && _db2 !== void 0 && _db2.connect) {
    connect = () => db.$connect ? db.$connect() : db.connect();
  } else {
    connect = () => {};
  }
} catch (_) {}

/* harmony default export */ __webpack_exports__["default"] = (Object(_blitzjs_server__WEBPACK_IMPORTED_MODULE_2__["rpcApiHandler"])(app_auth_mutations_resetPassword__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_blitzjs_core__WEBPACK_IMPORTED_MODULE_1__["getAllMiddlewareForModule"])(app_auth_mutations_resetPassword__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), () => {
  var _connect;

  return db && ((_connect = connect) === null || _connect === void 0 ? void 0 : _connect());
}));
const config = {
  api: {
    externalResolver: true
  }
};

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("16sC");


/***/ }),

/***/ "94Nm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ authenticateUser; });

// NAMESPACE OBJECT: ./app/_resolvers/auth/mutations/login.ts
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, "authenticateUser", function() { return authenticateUser; });
__webpack_require__.d(login_namespaceObject, "default", function() { return login; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__("vvKO");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__("ptJ+");

// CONCATENATED MODULE: ./app/_resolvers/auth/mutations/login.ts
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const authenticateUser = async (email, password) => {
  const user = await db["default"].user.findFirst({
    where: {
      email
    }
  });
  if (!user) throw new external_blitz_["AuthenticationError"]();
  const result = await external_blitz_["SecurePassword"].verify(user.hashedPassword, password);

  if (result === external_blitz_["SecurePassword"].VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await external_blitz_["SecurePassword"].hash(password);
    await db["default"].user.update({
      where: {
        id: user.id
      },
      data: {
        hashedPassword: improvedHash
      }
    });
  }

  const {
    hashedPassword
  } = user,
        rest = _objectWithoutProperties(user, ["hashedPassword"]);

  return rest;
};
/* harmony default export */ var login = (external_blitz_["resolver"].pipe(external_blitz_["resolver"].zod(validations["c" /* Login */]), async ({
  email,
  password
}, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password);
  await ctx.session.$create({
    userId: user.id,
    role: user.role
  });
  return user;
}));
// CONCATENATED MODULE: ./app/auth/mutations/login.ts



/* harmony default export */ var mutations_login = __webpack_exports__["b"] = (Object(core_["getIsomorphicEnhancedResolver"])(login_namespaceObject, 'app/_resolvers/auth/mutations/login', 'login', 'mutation', undefined, {
  warmApiEndpoints: false
}));

/***/ }),

/***/ "R6ri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ResetPasswordError

// NAMESPACE OBJECT: ./app/_resolvers/auth/mutations/resetPassword.ts
var resetPassword_namespaceObject = {};
__webpack_require__.r(resetPassword_namespaceObject);
__webpack_require__.d(resetPassword_namespaceObject, "ResetPasswordError", function() { return ResetPasswordError; });
__webpack_require__.d(resetPassword_namespaceObject, "default", function() { return resetPassword; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__("vvKO");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__("ptJ+");

// EXTERNAL MODULE: ./app/auth/mutations/login.ts + 1 modules
var login = __webpack_require__("94Nm");

// CONCATENATED MODULE: ./app/_resolvers/auth/mutations/resetPassword.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ResetPasswordError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", "ResetPasswordError");

    _defineProperty(this, "message", "Reset password link is invalid or it has expired.");
  }

}
/* harmony default export */ var resetPassword = (external_blitz_["resolver"].pipe(external_blitz_["resolver"].zod(validations["d" /* ResetPassword */]), async ({
  password,
  token
}, ctx) => {
  // 1. Try to find this token in the database
  const hashedToken = Object(external_blitz_["hash256"])(token);
  const possibleToken = await db["default"].token.findFirst({
    where: {
      hashedToken,
      type: "RESET_PASSWORD"
    },
    include: {
      user: true
    }
  }); // 2. If token not found, error

  if (!possibleToken) {
    throw new ResetPasswordError();
  }

  const savedToken = possibleToken; // 3. Delete token so it can't be used again

  await db["default"].token.delete({
    where: {
      id: savedToken.id
    }
  }); // 4. If token has expired, error

  if (savedToken.expiresAt < new Date()) {
    throw new ResetPasswordError();
  } // 5. Since token is valid, now we can update the user's password


  const hashedPassword = await external_blitz_["SecurePassword"].hash(password);
  const user = await db["default"].user.update({
    where: {
      id: savedToken.userId
    },
    data: {
      hashedPassword
    }
  }); // 6. Revoke all existing login sessions for this user

  await db["default"].session.deleteMany({
    where: {
      userId: user.id
    }
  }); // 7. Now log the user in with the new credentials

  await Object(login["b" /* default */])({
    email: user.email,
    password
  }, ctx);
  return true;
}));
// CONCATENATED MODULE: ./app/auth/mutations/resetPassword.ts



/* harmony default export */ var mutations_resetPassword = __webpack_exports__["a"] = (Object(core_["getIsomorphicEnhancedResolver"])(resetPassword_namespaceObject, 'app/_resolvers/auth/mutations/resetPassword', 'resetPassword', 'mutation', undefined, {
  warmApiEndpoints: false
}));

/***/ }),

/***/ "jwnU":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core");

/***/ }),

/***/ "kHmN":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/server");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "ptJ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassword; });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/IrO");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);

const password = zod__WEBPACK_IMPORTED_MODULE_0__["string"]().min(10).max(100);
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email(),
  password
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email(),
  password: zod__WEBPACK_IMPORTED_MODULE_0__["string"]()
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  email: zod__WEBPACK_IMPORTED_MODULE_0__["string"]().email()
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  password: password,
  passwordConfirmation: password,
  token: zod__WEBPACK_IMPORTED_MODULE_0__["string"]()
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"] // set the path of the error

});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__["object"]({
  currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__["string"](),
  newPassword: password
});

/***/ }),

/***/ "vvKO":
/***/ (function(module, exports) {

module.exports = require("blitz");

/***/ })

/******/ });