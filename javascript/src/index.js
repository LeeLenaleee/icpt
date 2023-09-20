require('./testFramework')

const add = (a, b) => a + b;

// testFrameWork.showTestsResults()

describe("Test Math", () => {
    it("Should add two numbers correctly", () => { expect(add(5, 3)).toEqual(8) });
    it("Should be a failing test", () => { expect(add(5, 3)).toEqual(9) })
});

showTestsResults();