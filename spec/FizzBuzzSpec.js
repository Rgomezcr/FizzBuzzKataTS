"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FizzBuzz_1 = require("../src/FizzBuzz");
describe("FizzBuzzShould", function () {
    describe("When number is one", function () {
        it("and so is a spec", function () {
            let fizzBuzz = new FizzBuzz_1.FizzBuzz();
            let numberAsString = fizzBuzz.ReturnNumberAsString(1);
            expect('1').toBe(numberAsString);
        });
    });
});
