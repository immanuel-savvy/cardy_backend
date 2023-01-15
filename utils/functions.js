"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phone_regex = exports.generate_random_string = exports.gen_random_int = exports.email_regex = void 0;
var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var combinations = {
  alnum: charset,
  num: '01234556789',
  alpha: 'abcdefghijklmnopqrstuvwxyz'
};
var phone_regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
exports.phone_regex = phone_regex;
var email_regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
exports.email_regex = email_regex;
var gen_random_int = function gen_random_int(max_int) {
  var min_int = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return min_int + Math.floor(Math.random() * max_int);
};
exports.gen_random_int = gen_random_int;
var generate_random_string = function generate_random_string() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'num';
  var string = '';
  var char_combination = combinations[combination];
  for (var i = 0; i < len; i++) string += char_combination[gen_random_int(char_combination.length)];
  return string;
};
exports.generate_random_string = generate_random_string;