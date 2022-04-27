let pokemonRepository= (function(){

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
function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    return{
        add:add,
        getAll:getAll
      }
      })();

pokemonRepository.getAll().forEach(function(pokemon) {

    if (pokemon.height > 0.9 ) {
        document.write('<p><b> Name:</b> ' + pokemon.name + ' (Height: ' + pokemon.height + ') is a ' + pokemon.type + " type and Wow,that's big!");
    }else{
        document.write('<p><b> Name:</b> ' + pokemon.name + ' (Height: ' + pokemon.height + ') is a ' + pokemon.type );}
        document.write("<br>");
});
