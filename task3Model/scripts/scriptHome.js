// se encarga de dibujar los cards en el html
const dibujarCards = (array) => {
  let listCards = document.getElementById("cardsHome");

  let fragmento = document.createDocumentFragment();

  for (let itemCard of array) {
    let div = document.createElement("form");
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
    let button = document.createElement("button");
    button.textContent = "Ver mas";
    button.className = "btn btnHome";
    button.type = "submit";
    button.name = "id";
    button.value = itemCard._id;
    div2.appendChild(button);
    div1.appendChild(div2);
    div.appendChild(div1);
    fragmento.appendChild(div);
  }

  listCards.appendChild(fragmento);

  /* for (item of array) {
    document.getElementById("cardsHome").innerHTML +=
      "<div class='card'><img src='" +
      item.image +
      " class='card-img-top' alt='...'><div class='card-body d-flex flex-column align-items-center justify-content-between'><h5 class='card-title'>" +
      item.name +
      "</h5><p class='card-text'>" +
      item.description +
      "</p><div class='d-flex justify-content-between w-100 align-content-center'><p class='card-text'>Price $" +
      item.price +
      "</p><a href='#' class='btn btnHome' >Ver mas</a></div></div></div>";
  } */
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

  /*   for (cat of array) {
    document.getElementById("categoriesHome").innerHTML +=
      "<div class='form-check'><label><input class='check' type='checkbox' name='catSel' value='" +
      cat +
      "'> <span>" +
      cat +
      "</span> </label> </div>";
  } */
};

// funcion buscardor

const buscarContenido = (array, consulta) => {
  cardSearch = [];
  for (let item of array) {
    if (
      item.name.includes(consulta) ||
      item.date.includes(consulta) ||
      item.description.includes(consulta) ||
      item.category.includes(consulta) ||
      item.place.includes(consulta)
    ) {
      cardSearch.push(item);
    }
  }
  document.getElementById("cardsHome").innerHTML = "";
  console.log("esto es cardSearch", cardSearch);
  dibujarCards(cardSearch);
};

// se hace una copia inmutable del  array
let cardSeleccionadas = [].concat(data.events);
let categories = [];
let cardsFiltradas = [];

// se dibjua inicialmente las cards
dibujarCardsInicial(cardSeleccionadas);

// se dibuja las categorias que se filtraron de la data
dibujarCat(categories);

// escucho el event en CategoriesHome y reacciona en base a la info
const checkbox = document.getElementById("categoriesHome");
let categoriesSelected = [];

checkbox.addEventListener("change", (event) => {
  // en cada vuelta vaciar el arreglo cards filtrada
  cardsFiltradas = [];
  // se condiciona el ingreso si no esta agrega el valor

  if (!categoriesSelected.includes(event.target.value)) {
    categoriesSelected.push(event.target.value);
  } else {
    // se condiciona el ingreso si ya esta se busca y se borra
    categoriesSelected.splice(
      categoriesSelected.indexOf(event.target.value),
      1
    );
  }

  // si no hay categoriesSelectd redibujar completo
  if (!categoriesSelected.length) {
    //vaciar html antes de dibujar
    document.getElementById("cardsHome").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }

  // si hay categoriesSelected hay filtro
  if (categoriesSelected.length) {
    // se realiza un foreach y se analiza cada instancia si es una categoria filtrada
    data.events.forEach((element) => {
      if (categoriesSelected.includes(element.category)) {
        cardsFiltradas.push(element);
      }
    });
    //se vacia el innerHTML
    document.getElementById("cardsHome").innerHTML = "";

    // se dibuja nuevamente pero solo con las cards filtradas

    dibujarCards(cardsFiltradas);
  }
});

let buttonSearch = "";

let cardSearch = [];
const aSearch = document.getElementById("aSearch");
aSearch.addEventListener("click", (event) => {
  buttonSearch = document.forms["formSearch"]["inputSearch"].value;
  //revisar todavia no funciona
  if (buttonSearch && cardsFiltradas.length) {
    buscarContenido(cardsFiltradas, buttonSearch);
  }
  if (buttonSearch) {
    buscarContenido(cardSeleccionadas, buttonSearch);
  }
});

const input = document.getElementById("inputSearch");
input.addEventListener("click", (event) => {
  //se aplica para que si esta vacio y no hay categoriasfiltradas dibuje todas las cards
  if (!event.target.value && !categoriesSelected.length) {
    document.getElementById("cardsHome").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }
});
