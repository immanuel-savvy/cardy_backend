"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove_request = exports.pending_request = exports.new_rent_request = void 0;
var _conn = require("../ds/conn");
var pending_request = function pending_request(req, res) {
  var user = req.params.user;
  var request = _conn.USER_RENT_REQUESTS.readone({
    user: user
  });
  res.json({
    ok: true,
    message: 'pending_request',
    data: request
  });
};
exports.pending_request = pending_request;
var new_rent_request = function new_rent_request(req, res) {
  var request = req.body;
  var rent_result = _conn.RENT_REQUESTS.write(request);
  request._id = rent_result._id;
  request.created = rent_result.created;
  var user_request = _conn.USER_RENT_REQUESTS.write({
    request: request._id,
    user: request.user
  });
  res.json({
    ok: true,
    message: 'new rent request',
    data: {
      _id: request._id,
      created: request.created,
      user_request_id: user_request._id
    }
  });
};
exports.new_rent_request = new_rent_request;
var remove_request = function remove_request(req, res) {
  var request = req.params.request;
  var result = _conn.RENT_REQUESTS.remove(request);
  _conn.USER_RENT_REQUESTS.remove({
    request: request,
    user: result.user
  });
  res.end();
};
exports.remove_request = remove_request;