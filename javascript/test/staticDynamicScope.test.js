var bar = 10;

function retUpperBar () {
    return bar;
}

function retInnerBar () {
    var bar = 20;
    return retUpperBar();
}

test('upperBar is 10', () => {
    expect(retUpperBar()).toBe(10);
});

test('innerBar is 10', () => {
    expect(retInnerBar()).toBe(10);
})