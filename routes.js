"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _rent = require("./route_handlers/rent");
var _users = require("./route_handlers/users");
var router = function router(app) {
  app.get('/user_refresh/:user', _users.user_refresh);
  app.get('/pending_request/:user', _rent.pending_request);
  //
  app.post('/register_user', _users.register_user);
  app.post('/login', _users.login);
  app.post('/remove_request/:request', _rent.remove_request);
  app.post('/new_rent_request', _rent.new_rent_request);
  app.post('/request_otp', _users.request_otp);
  app.post('/verify_email', _users.verify_email);
  app.post('/verify_later', _users.verify_later);
};
var _default = router;
exports["default"] = _default;