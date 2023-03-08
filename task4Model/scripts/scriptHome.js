// se encarga de dibujar los cards en el html
const dibujarCards = (array) => {
  let listCards = document.getElementById("cardsHome");

  let fragmento = document.createDocumentFragment();

  for (let itemCard of array) {
    let div = document.createElement("div");
    div.className = "card";
    div.method = "GET";
    div.action = "./details.html";
    let img = document.createElement("img");
    img.src = itemCard.image;
    img.className = "card-img-top";
    img.alt = itemCard.name;
    div.appendChild(img);
    let div1 = document.createElement("div");
    div1.className =
      "card-body d-flex flex-column align-items-center justify-content-between";
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = itemCard.name;
    div1.appendChild(h5);
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = itemCard.description;
    div1.appendChild(p);
    let div2 = document.createElement("div");
    div2.className =
      "d-flex justify-content-between w-100 align-content-center";
    let p2 = document.createElement("p");
    p2.className = "card-text";
    p2.textContent = "Price $ " + itemCard.price;
    div2.appendChild(p2);
    let a = document.createElement("a");
    a.textContent = "Ver mas";
    a.className = "btn btnHome";
    a.href = `./details.html?id=${itemCard._id}`;
    div2.appendChild(a);
    div1.appendChild(div2);
    div.appendChild(div1);
    fragmento.appendChild(div);
  }

  listCards.appendChild(fragmento);
};

// se encarga de llamar al dibujo de cards y a su vez extrae los valores de las categorias
const dibujarCardsInicial = (array) => {
  dibujarCards(array);
  // extraer categorias para dibujar
  for (item of array) {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
};

const dibujarCat = (array) => {
  let listCategories = document.getElementById("categoriesHome");

  let fragmento = document.createDocumentFragment();

  for (let cat of array) {
    let div = document.createElement("div");
    div.className = "form-check";
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.className = "check";
    input.type = "checkbox";
    input.name = "catSel";
    input.value = cat;
    label.appendChild(input);
    let span = document.createElement("span");
    span.textContent = cat;
    label.appendChild(span);
    div.appendChild(label);
    fragmento.appendChild(div);
  }

  listCategories.appendChild(fragmento);
};
// se encarga de filtrar por categoria

const handleModal = (title, menssage, valor) => {
  if (modalNuevo !== null) {
    modalNuevo.remove();
  }

  modalNuevo = document.createElement("div");
  modalNuevo.innerHTML = `<div class="modal" tabindex="-1">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p><strong>${valor}</strong>  ${menssage}</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-Modal" data-bs-dismiss="modal">Close</button>
          </div>
      </div>
  </div>
</div>`;
  document.body.append(modalNuevo);

  const modal = new bootstrap.Modal(modalNuevo.querySelector(".modal"));
  modal.show();
};

const buscarContenido = (array, consulta) => {
  cardSearch = [];
  for (let item of array) {
    if (
      item.name.toLowerCase().includes(consulta.toLowerCase()) ||
      item.description.toLowerCase().includes(consulta.toLowerCase())
    ) {
      cardSearch.push(item);
    }
  }
  document.getElementById("cardsHome").innerHTML = "";
  
  if (!cardSearch.length) {
    handleModal(
      "Search error",
      "Does not return results, search with another value.",
      consulta
    );
  }
  dibujarCards(cardSearch);
};

const handleFilterCategegory = (event) => {
  // en cada vuelta vaciar el arreglo cards filtrada
  cardsFiltradas = [];
  // ARMADO DEL FILTRO se condiciona el ingreso si no esta agrega el valor

  if (!categoriesSelected.includes(event.target.value)) {
    categoriesSelected.push(event.target.value);
  } else {
    // se condiciona el ingreso si ya esta se busca y se borra
    categoriesSelected.splice(
      categoriesSelected.indexOf(event.target.value),
      1
    );
  }

  // si hay categoriesSelected hay filtro
  if (categoriesSelected.length) {
    // se realiza un foreach y se analiza cada instancia si es una categoria filtrada
    data.events.forEach((element) => {
      if (categoriesSelected.includes(element.category)) {
        cardsFiltradas.push(element);
      }
    });
  }

  // si hay card selected y hay valor buscado
  if (categoriesSelected.length && buttonSearch) {
    //vaciar html antes de dibujar
    document.getElementById("cardsHome").innerHTML = "";
    buscarContenido(cardsFiltradas, buttonSearch);
  }

  // si no hay categoriesSelectd redibujar completo
  if (!categoriesSelected.length && !buttonSearch) {
    //vaciar html antes de dibujar
    document.getElementById("cardsHome").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }

  if (categoriesSelected.length && !buttonSearch) {
    //se vacia el innerHTML
    document.getElementById("cardsHome").innerHTML = "";

    // se dibuja nuevamente pero solo con las cards filtradas
    dibujarCards(cardsFiltradas);
  }

  if (!categoriesSelected.length && buttonSearch) {
    //se vacia el innerHTML
    document.getElementById("cardsHome").innerHTML = "";
    buscarContenido(cardSeleccionadas, buttonSearch);
  }
};

// funcion buscardor

const handleSearchButton = () => {
  buttonSearch = document.forms["formSearch"]["inputSearch"].value;

  //
  if (buttonSearch && cardsFiltradas.length) {
    buscarContenido(cardsFiltradas, buttonSearch);
  } else if (buttonSearch) {
    buscarContenido(cardSeleccionadas, buttonSearch);
  }
};

const handleSearch = (event) => {
  buttonSearch = document.forms["formSearch"]["inputSearch"].value;
  //
  if (!event.target.value.length) {
    buttonSearch = "";
  }

  //se aplica para que si esta vacio y no hay categoriasfiltradas dibuje todas las cards
  if (!event.target.value.length && !categoriesSelected.length) {
    document.getElementById("cardsHome").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }

  if (event.target.value.length && categoriesSelected.length) {
    if (cardsFiltradas.length) {
      buscarContenido(cardsFiltradas, buttonSearch);
    } else {
      buscarContenido(cardSeleccionadas, buttonSearch);
    }
  }


  if (event.target.value.length && !categoriesSelected.length) {
    if (cardsFiltradas.length) {
      buscarContenido(cardsFiltradas, buttonSearch);
    } else {
      buscarContenido(cardSeleccionadas, buttonSearch);
    }
  }



  if (!event.target.value.length && categoriesSelected.length) {
    if (cardsFiltradas.length) {
      buscarContenido(cardsFiltradas, buttonSearch);
    } else {
      buscarContenido(cardSeleccionadas, buttonSearch);
    }
  }

};

// Aqui comienza la logica
// se hace una copia inmutable del  array
let cardSeleccionadas = [].concat(data.events);
let categories = [];
let cardsFiltradas = [];
let modalNuevo = null;
// se dibjua inicialmente las cards
dibujarCardsInicial(cardSeleccionadas);

// se dibuja las categorias que se filtraron de la data
dibujarCat(categories);

// escucho el event en CategoriesHome y reacciona en base a la info

let categoriesSelected = [];
let buttonSearch = "";
let cardSearch = [];
const aSearch = document.getElementById("aSearch");
const input = document.getElementById("inputSearch");
const checkbox = document.getElementById("categoriesHome");

// envio de los eventos de los check a la funcion
checkbox.addEventListener("change", (event) => handleFilterCategegory(event));
// envio los click de la lupa a la funcion
aSearch.addEventListener("click", (event) => {
  handleSearchButton();
});
//envio los enter y borrado del input a la funcion
input.addEventListener("search", (event) => {
  handleSearch(event);
});
