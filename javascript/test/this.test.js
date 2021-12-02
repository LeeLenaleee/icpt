const name = 'Sander'

test('this.name is not equeal to local name', () => {
    const name = 'Pjeter'
    console.log(this)
    expect(this.name).not.toBe(name);
});