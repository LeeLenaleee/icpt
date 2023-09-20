const log = console.log;
var beforeEachs = [];
var afterEachs = [];
var afterAlls = [];
var beforeAlls = [];
var Totaltests = 0;
var passedTests = 0;

var failedTests = 0;
var stats = [];
var currDesc = {
    it: []
};

var currentItteration = {}

function beforeEach(fn) {
    beforeEachs.push(fn);
}

function afterEach(fn) {
    afterEachs.push(fn);
}

function beforeAll(fn) {
    beforeAlls.push(fn);
}

function afterAll(fn) {
    afterAlls.push(fn);
}

function expect(value) {
    return {

        // Match or Asserts that expected and actual objects are same.
        toBe: function(expected) {
            if (value === expected) {
                currentItteration.expects.push({ name: `expect ${value} toBe ${expected}`, status: true });
                passedTests++;
            } else {
                currentItteration.expects.push({ name: `expect ${value} toBe ${expected}`, status: false });
                failedTests++;
            }
        },

        // Match the expected and actual result of the test.
        toEqual: function(expected) {
            if (value == expected) {
                currentItteration.expects.push({ name: `expect ${value} toEqual ${expected}`, status: true });
                passedTests++;
            } else {
                currentItteration.expects.push({ name: `expect ${value} toEqual ${expected}`, status: false });
                failedTests++;
            }
        }
    }
}

function it(desc, fn) {
    Totaltests++
    if (beforeEachs) {
        for (var index = 0; index < beforeEachs.length; index++) {
            beforeEachs[index].apply(this);
        }
    }

    currentItteration = {
            name: desc,
            expects: []
        };

    fn.apply(this)
    for (var index = 0; index < afterEachs.length; index++) {
        afterEachs[index].apply(this);
    }
    currDesc.it.push(currentItteration);
}

function describe(desc, fn) {
    currDesc = {
        it: []
    };
    for (var index = 0; index < beforeAlls.length; index++) {
        beforeAlls[index].apply(this);
    }
    currDesc.name = desc;
    fn.apply(this);
    for (var index = 0; index < afterAlls.length; index++) {
        afterAlls[index].apply(this);
    }
    stats.push(currDesc);
}

function showTestsResults() {
    console.log(`Total Test: ${Totaltests}    
Test Suites: passed, total
Tests: ${passedTests} passed, ${Totaltests} total
`);
    log('Test Suites')
    for (var index = 0; index < stats.length; index++) {
        var e = stats[index];
        const descName = e.name;
        const its = e.it;
        log(descName);
        for (var i = 0; i < its.length; i++) {
            var _e = its[i];
            log(`   ${_e.name}`);
            for (var ii = 0; ii < _e.expects.length; ii++) {
                const expect = _e.expects[ii];
                log(`      ${expect.status === true ? '√' : 'X' } ${expect.name}`);
            }
        }
    }
}

global.describe = describe;
global.it = it;
global.expect = expect;
global.afterEach = afterEach;
global.beforeEach = beforeEach;
global.beforeAll = beforeAll;
global.afterAll = afterAll;
global.showTestsResults = showTestsResults;