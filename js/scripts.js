const pokemonRepository = (function () {

  const pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
      pokemonList.push(pokemon);
  }



    // function to add single pokemon to the pokemonList from outside IIFE
    function add(pokemon) {
      // added condition if true
      if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon ) {
        return pokemonList.push(pokemon);
      } else {
        return alert('To add a pokémon, pokemon type should be object + keys should be {name: , height: , types:[]}')
      }
    }

    // showDetails funtion to log the pokemon
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        // console.log(pokemon);
        showModal(pokemon);

      });
    }

    // Modal related code

    // varaible declared globally
    const modalContainer = document.querySelector('#modal-container');
    // showModal function
    function showModal(pokemon) {

      // Clear all existing modal content
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      // Add the new modal content
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      // hiding modal by clciking on 'X' in the modal
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.classList.add('pokemon-title-name');
      titleElement.innerText = pokemon.name.toUpperCase();

      let contentElement = document.createElement('p');
      contentElement.classList.add('pokemon-content-height');
      contentElement.innerText = `Height: ${pokemon.height}`;

      let imageElement = document.createElement('img');
      imageElement.classList.add('pokemon-front-image');
      imageElement.setAttribute('src', pokemon.imageUrl);
      imageElement.setAttribute('alt', pokemon.name + ' image');

      // appending elements to the modal div
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);

      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
    }

    // hideModal function to hide to modal
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    // hiding a modal by clicking on escape key
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    // eventListener for hiding a modal by clicking outside modal
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if(target === modalContainer) {
        hideModal();
      }
    });

    // function for button click handler/listener
    function pokemonButtonClickHandler(button, pokemon) {
      button.addEventListener('click', function () {
        showDetails(pokemon);
      })
    }


  function addListItem(pokemon) {
    const ul = document.querySelector(".pokemon-list");
    const listItem = document.createElement("li");
    listItem.classList.add('pokemon-list-item');
    ul.appendChild(listItem);
    const button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-list__item--button");
    listItem.appendChild(button);


//  function addEvent(button, pokemon) {
      //  button.addEventListener('click', function () {
        //    showDetails(pokemon);
      //  })
  //  }

  pokemonButtonClickHandler(button, pokemon);
 }

 function loadList() {
     return fetch(apiUrl).then(function (response) {
       return response.json();
     }).then(function (json) {
       json.results.forEach(function (item) {
         let pokemon = {
           name: item.name,
           detailsUrl: item.url
         };
         add(pokemon);
       });
     }).catch(function (e) {
       console.error(e);
     })
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
      add, getAll, addListItem, showDetails, addEvent, loadList, loadDetails
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    })
});
