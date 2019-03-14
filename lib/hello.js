"use strict";

function sayHello(name) {
  return "Hello " + (name || "");
}

exports.hello = sayHello;