function f1()
{
    var x = 10;
    function f2(fx)
    {
        var x;
        x = 6;
        return fx();
    }

    function f3()
    {
        return x;
    }

    return f2(f3);
}

// https://stackoverflow.com/questions/15550648/shallow-deep-binding-what-would-this-program-print
test('is deep bind', () => {
    expect(f1()).toBe(10)
});

test('is not shallow bind', () => {
    expect(f1()).not.toBe(6)
})