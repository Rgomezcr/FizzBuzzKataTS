import {FizzBuzz} from "../src/FizzBuzz";

describe("FizzBuzzShould", function () {
    describe("When number is one", function() {
        
        it("and so is a spec", function () {

            let fizzBuzz = new FizzBuzz();

            let numberAsString:string = fizzBuzz.ReturnNumberAsString(1);

            expect('1').toBe(numberAsString);
        });
    });

});


