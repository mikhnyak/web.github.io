const response = require("../Response");
const expect = require("chai").expect;
const nock = require("nock");

const getCocktail = require("../cocktail").getCocktail;
describe("Get cocktails tests", () => {
  beforeEach(() => {
    nock("http://127.0.0.1:8000/").get("/cocktails/1").reply(200, response);
  });

  it("Get cocktail", () => {
    return getCocktail(1).then((response) => {
      //expect an object back
      expect(typeof response).to.equal("object");
      expect(response.id).to.equal(1);
    });
  });
});

const getCafe = require("../cocktail").getCafe;
describe("Get cafes tests", () => {
  beforeEach(() => {
    nock("http://127.0.0.1:8000/").get("/cafes/1").reply(200, response);
  });

  it("Get cocktail", () => {
    return getCafe(1).then((response) => {
      //expect an object back
      expect(typeof response).to.equal("object");
      expect(response.id).to.equal(1);
    });
  });
});
