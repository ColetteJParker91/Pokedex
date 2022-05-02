let pokemonRepository = (function() {

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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

  function add(pokemon) {
    if (pokemon.name && pokemon.height && pokemon.type) {
      pokemonList.push(pokemon);
    } else {
      console.log("Pokemon is not correct!");
    }
  }


  function addListItem(pokemon) {
      let ul = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.addEventListener("click", (event) => {
        showDetails(pokemon);
        event.target.blur();
      });
      button.classList.add("pokemon-list__item--button");


      listItem.appendChild(button);
      ul.appendChild(listItem);
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(() => console.log(pokemon));
    }

    function filter(name) {
      let nameLowCase = name.toLowerCase();
      let result = pokemonList.filter(
        (pokemon) => pokemon.name.toLowerCase() === nameLowCase
      )[0];
      return result || "Pokemon not found!";
    }

    function loadList() {
      return fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          json.results.forEach((item) => {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch((err) => console.log(err));
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url)
        .then((res) => res.json())
        .then((details) => {
          //Now we add details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          let types = [];
          details.types.forEach((item) => types.push(item.type.name));
          item.types = types;
        })
        .catch((err) => console.log(err));
    }

    return {
      getAll,
      add,
      loadList,
      loadDetails,
      addListItem,
    };
  })();
