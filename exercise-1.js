function personWithMaxAge(people) {
    var maxAgePerson = null;
    var maxLifeSpan = -1;

    people.forEach(person => {
        if (maxAgePerson == null) {
            maxAgePerson = person;
            maxLifeSpan = maxAgePerson['yearOfDeath'] - maxAgePerson['yearOfBirth'];
        }
        else {
            var personLifeSpan = person['yearOfDeath'] - person['yearOfBirth'];
            if (personLifeSpan > maxLifeSpan) {
                maxAgePerson = person;
                maxLifeSpan = personLifeSpan;
            }
        }
    });

    return maxAgePerson;
}

const people = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    }
]

console.log(personWithMaxAge(people));