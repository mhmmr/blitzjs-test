module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

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

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "KSsN":
/***/ (function(module, exports) {

module.exports = require("react-error-boundary");

/***/ }),

/***/ "a0Gb":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jwnU");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vvKO");
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KSsN");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iddH");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_auth_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pvfg");
/* harmony import */ var app_styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a0Gb");
/* harmony import */ var app_styles_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(app_styles_global_css__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => page);

  const router = Object(blitz__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"], {
    FallbackComponent: RootErrorFallback,
    resetKeys: [router.asPath],
    onReset: () => {
      // This ensures the Blitz useQuery hooks will automatically refetch
      // data any time you reset the error boundary
      react_query__WEBPACK_IMPORTED_MODULE_4__["queryCache"].resetErrorBoundaries();
    }
  }, getLayout(__jsx(Component, pageProps)));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_blitzjs_core__WEBPACK_IMPORTED_MODULE_0__["withBlitzAppRoot"])(App));

function RootErrorFallback({
  error,
  resetErrorBoundary
}) {
  if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_2__["AuthenticationError"]) {
    return __jsx(app_auth_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], {
      onSuccess: resetErrorBoundary
    });
  } else if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_2__["AuthorizationError"]) {
    return __jsx(blitz__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
      statusCode: error.statusCode,
      title: "Sorry, you are not authorized to access this"
    });
  } else {
    return __jsx(blitz__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], {
      statusCode: error.statusCode || 400,
      title: error.message || error.name
    });
  }
}

/***/ }),

/***/ "iddH":
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "iuxm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabeledTextField; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const LabeledTextField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((_ref, ref) => {
  var _errors$props$name;

  let {
    label,
    outerProps
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "outerProps"]);

  const {
    register,
    formState: {
      isSubmitting
    },
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  const error = Array.isArray(errors[props.name]) ? errors[props.name].join(", ") : ((_errors$props$name = errors[props.name]) === null || _errors$props$name === void 0 ? void 0 : _errors$props$name.message) || errors[props.name];
  return __jsx("div", _extends({}, outerProps, {
    className: "jsx-2918798477" + " " + (outerProps && outerProps.className != null && outerProps.className || "")
  }), __jsx("label", {
    className: "jsx-2918798477"
  }, label, __jsx("input", _extends({
    disabled: isSubmitting
  }, props, {
    ref: register,
    className: "jsx-2918798477" + " " + (props && props.className != null && props.className || "")
  }))), error && __jsx("div", {
    role: "alert",
    style: {
      color: "red"
    },
    className: "jsx-2918798477"
  }, error), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2918798477"
  }, ["label.jsx-2918798477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;font-size:1rem;}", "input.jsx-2918798477{font-size:1rem;padding:0.25rem 0.5rem;border-radius:3px;border:1px solid purple;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:0.5rem;}"]));
});
/* unused harmony default export */ var _unused_webpack_default_export = (LabeledTextField);

/***/ }),

/***/ "jwnU":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core");

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

/***/ "pvfg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vvKO");
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iuxm");
/* harmony import */ var app_core_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rJSM");
/* harmony import */ var app_auth_mutations_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("94Nm");
/* harmony import */ var app_auth_validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ptJ+");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LoginForm = props => {
  const [loginMutation] = Object(blitz__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(app_auth_mutations_login__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]);
  return __jsx("div", null, __jsx("h1", null, "Login"), __jsx(app_core_components_Form__WEBPACK_IMPORTED_MODULE_3__[/* Form */ "b"], {
    submitText: "Login",
    schema: app_auth_validations__WEBPACK_IMPORTED_MODULE_5__[/* Login */ "c"],
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async values => {
      try {
        var _props$onSuccess;

        await loginMutation(values);
        (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props);
      } catch (error) {
        if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_1__["AuthenticationError"]) {
          return {
            [app_core_components_Form__WEBPACK_IMPORTED_MODULE_3__[/* FORM_ERROR */ "a"]]: "Sorry, those credentials are invalid"
          };
        } else {
          return {
            [app_core_components_Form__WEBPACK_IMPORTED_MODULE_3__[/* FORM_ERROR */ "a"]]: "Sorry, we had an unexpected error. Please try again. - " + error.toString()
          };
        }
      }
    }
  }, __jsx(app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[/* LabeledTextField */ "a"], {
    name: "email",
    label: "Email",
    placeholder: "Email"
  }), __jsx(app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[/* LabeledTextField */ "a"], {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password"
  }), __jsx("div", null, __jsx(blitz__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/forgot-password"
  }, __jsx("a", null, "Forgot your password?")))), __jsx("div", {
    style: {
      marginTop: "1rem"
    }
  }, "Or ", __jsx(blitz__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/signup"
  }, "Sign Up")));
};
/* harmony default export */ __webpack_exports__["b"] = (LoginForm);

/***/ }),

/***/ "rJSM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Form; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FORM_ERROR = "FORM_ERROR";
function Form(_ref) {
  let {
    children,
    submitText,
    schema,
    initialValues,
    onSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "submitText", "schema", "initialValues", "onSubmit"]);

  const ctx = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    mode: "onBlur",
    resolver: async values => {
      try {
        if (schema) {
          schema.parse(values);
        }

        return {
          values,
          errors: {}
        };
      } catch (error) {
        var _error$formErrors;

        return {
          values: {},
          errors: (_error$formErrors = error.formErrors) === null || _error$formErrors === void 0 ? void 0 : _error$formErrors.fieldErrors
        };
      }
    },
    defaultValues: initialValues
  });
  const {
    0: formError,
    1: setFormError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  return __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["FormProvider"], ctx, __jsx("form", _extends({
    onSubmit: ctx.handleSubmit(async values => {
      const result = (await onSubmit(values)) || {};

      for (const [key, value] of Object.entries(result)) {
        if (key === FORM_ERROR) {
          setFormError(value);
        } else {
          ctx.setError(key, {
            type: "submit",
            message: value
          });
        }
      }
    })
  }, props, {
    className: "jsx-50508738" + " " + (props && props.className != null && props.className || "form")
  }), children, formError && __jsx("div", {
    role: "alert",
    style: {
      color: "red"
    },
    className: "jsx-50508738"
  }, formError), submitText && __jsx("button", {
    type: "submit",
    disabled: ctx.formState.isSubmitting,
    className: "jsx-50508738"
  }, submitText), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "50508738"
  }, [".form>*+*{margin-top:1rem;}"])));
}
/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),

/***/ "vvKO":
/***/ (function(module, exports) {

module.exports = require("blitz");

/***/ })

/******/ });