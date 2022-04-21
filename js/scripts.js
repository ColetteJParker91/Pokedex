let pokemonList = [{
    name: 'Pikachu',
    height: 0.4,
    type: 'Electric',
  },
  {
    name: 'Bulbasaur',
    height: 0.7,
    type: 'Grass'
  },
  {
    name: 'Squirtle',
    height: 0.5,
    type: 'Water'
  },
  {
    name: 'Charmander',
    height: 0.6,
    type: 'Fire'
  },
  {
    name: 'Caterpie',
    height: 0.3,
    type: 'Bug'
  },
  {
    name: 'Weedle',
    height: 0.3,
    type: 'Bug, Poison'
  },
  {
    name: 'Pidgey',
    height: 0.3,
    type: 'Flying, Normal'
  },
  {
    name: 'Rattata',
    height: 0.3,
    type: 'Normal'
  },
  {
    name: 'Pontya',
    height: 1,
    type: 'Fire'
  },
  {
    name: 'Lapras',
    height: 2.5,
    type: 'Ice, Water'
  }
];

console.log(pokemonList);

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.9)
	document.write('<p>' + "Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " Wow, that's big!" + '</p>');
  else {
    document.write('<p>' + "Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + "." + '</p>');
  }
	}
