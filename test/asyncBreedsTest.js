// asyncBreedsTest.js
// const fs = require("fs");

const assert = require("chai").assert;
const breedDetailsFromFile = require("../asyncBreeds");

describe("#breedDetailsFromFile", () => {
  it("provides, via callback, breed details for the Bombay breed", done => {
    const breedDone = function(breed) {
      console.log("Return Value: ", breed); // => will NOT print out details, instead we will see undefined!

      const expectedDesc =
        "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.\n";

      assert.equal(expectedDesc, breed);
      done();
    };
    const bombay = breedDetailsFromFile("Bombay", breedDone);

    // console.log(breedDetailsFromFile);
  });
});
