const person = {
    name: 'piet',
    getName: function () {
        return this.name;
    }
}

test('person unbound name undefined', () => {
    const unboundName = person.getName;
    expect(unboundName()).toBe(undefined);
});

test('person bound name piet', () => {
    const boundName = person.getName.bind(person);
    expect(boundName()).toBe('piet');
});