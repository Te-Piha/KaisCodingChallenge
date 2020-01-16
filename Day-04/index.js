const people = [
    {name: 'Piha', hairColor: 'Black with a hint of blonde'},
    {name: 'Andria', hairColor: 'Short but sassy'},
    {name: 'Adam', hairColor: 'Bald'} 
]

const person = people.map(x => document.getElementById('persons').innerHTML +='Name of Champion'+ x.name + '. I am' + x.hairColor + '.                        ')