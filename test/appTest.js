const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");

describe("App", function() {
  it("sayHello should return hello", function() {
    let result = app.sayHello();
    assert.equal(result, "hello");
  });

  it("sayHello should be a type of string", function() {
    let result = app.sayHello();
    assert.typeOf(result, "string");
  });

  it("addNumbers should be above the value of 5", function() {
    let result = app.addNumbers(5, 5);
    assert.isAbove(result, 5);
  });

  it("addNumbers should be a type of number", function() {
    let result = app.addNumbers(5, 5);
    assert.typeOf(result, "number");
  });
});
