"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gds = exports["default"] = exports.USER_RENT_REQUESTS = exports.USERS_HASH = exports.USERS = exports.RENT_REQUESTS = void 0;
var _generalisedDatastore = _interopRequireDefault(require("generalised-datastore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var gds;
exports.gds = gds;
var USERS, USERS_HASH, RENT_REQUESTS, USER_RENT_REQUESTS;
exports.USER_RENT_REQUESTS = USER_RENT_REQUESTS;
exports.RENT_REQUESTS = RENT_REQUESTS;
exports.USERS_HASH = USERS_HASH;
exports.USERS = USERS;
var ds_conn = function ds_conn() {
  exports.gds = gds = new _generalisedDatastore["default"]('cardy_mock').sync();
  exports.USERS = USERS = gds.folder('users');
  exports.USERS_HASH = USERS_HASH = gds.folder('user_hash', 'user');
  exports.USER_RENT_REQUESTS = USER_RENT_REQUESTS = gds.folder('user_rent_requests', 'user', 'request');
  exports.RENT_REQUESTS = RENT_REQUESTS = gds.folder('rent_requests');
};
var _default = ds_conn;
exports["default"] = _default;