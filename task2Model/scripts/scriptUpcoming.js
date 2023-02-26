var data = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      _id: 3,
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      name: "Batman",
      date: "2021-03-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};

// se encarga de dibujar los cards en el html
const dibujarCards = (array) => {
  let listCards = document.getElementById("cardsUpcoming");

  let fragmento = document.createDocumentFragment();

  for (let itemCard of array) {
    let div = document.createElement("div");
    div.className = "card";
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
    a.href = "#";
    a.className = "btn btnHome";
    a.textContent = "Ver mas";
    div2.appendChild(a);
    div1.appendChild(div2);
    div.appendChild(div1);
    fragmento.appendChild(div);
  }

  listCards.appendChild(fragmento);

  /* 

  for (item of array) {
    document.getElementById("cardsUpcoming").innerHTML +=
      "<div class='card'><img src='" +
      item.image +
      " class='card-img-top' alt='...'><div class='card-body d-flex flex-column align-items-center justify-content-between'><h5 class='card-title'>" +
      item.name +
      "</h5><p class='card-text'>" +
      item.description +
      "</p><div class='d-flex justify-content-between w-100 align-content-center'><p class='card-text'>Price $" +
      item.price +
      "</p><a href='./details.html' class='btn btnHome'>Ver mas</a></div></div></div>";
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
  document.getElementById("cardsUpcoming").innerHTML = "";

  dibujarCards(cardSearch);
};

// se hace una copia del array filtrando los events
let cardSeleccionadas = data.events.filter(
  (event) => event.date > data.currentDate
);

let categories = [];
let cardsFiltradas = [];

// se dibuja inicialmente

dibujarCardsInicial(cardSeleccionadas);

// se dibuja las categorias que se filtraron de la data
dibujarCat(categories);

// escucho el event en CategoriesHome y reacciona en base a la info
const checkbox = document.getElementById("categoriesHome");
let categoriesSelected = [];

checkbox.addEventListener("change", (event) => {
  // en cada vuelta vaciar el arreglo cards filtrada
  cardsFiltradas = [];
  // se condiciona el ingreso si no esta agrega el valor de categorias

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
    document.getElementById("cardsUpcoming").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }

  // si hay categoriesSelected hay filtro
  if (categoriesSelected.length) {
    // se realiza un foreach y se analiza cada instancia si es una categoria filtrada
    cardSeleccionadas.forEach((element) => {
      if (categoriesSelected.includes(element.category)) {
        cardsFiltradas.push(element);
      }
    });
    //se vacia el innerHTML
    document.getElementById("cardsUpcoming").innerHTML = "";
    // se dibuja nuevamente pero solo con las cards filtradas
    dibujarCards(cardsFiltradas);
  }
});

let buttonSearch = "";

let cardSearch = [];
const aSearch = document.getElementById("aSearch");
aSearch.addEventListener("click", (event) => {
  buttonSearch = document.forms["formSearch"]["inputSearch"].value;
  buscarContenido(cardSeleccionadas, buttonSearch);
  console.log(cardSearch);
});

const input = document.getElementById("inputSearch");
input.addEventListener("click", (event) => {
  if (!event.target.value) {
    document.getElementById("cardsUpcoming").innerHTML = "";
    dibujarCards(cardSeleccionadas);
  }
});
