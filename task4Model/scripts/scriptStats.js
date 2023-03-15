dataEvents();

console.log("data", data);

const eventsPre = (array) => {
  let itemMayor;
  let itemMenor;
  let itemMayorAforo;
  let porcentajeMayor = 0;
  let porcentajeMenor = 100;

  for (let item of array) {
    if (!itemMayor) {
      itemMayor = item;
    }
    if (!itemMenor) {
      itemMenor = item;
    }
    if (!itemMayorAforo) {
      itemMayorAforo = item;
    }

    if ((item.assistance * 100) / item.capacity > porcentajeMayor) {
      itemMayor = item;
      porcentajeMayor = (item.assistance * 100) / item.capacity;
    }

    if ((item.assistance * 100) / item.capacity < porcentajeMenor) {
      itemMenor = item;
      porcentajeMenor = (item.assistance * 100) / item.capacity;
    }

    if (item.capacity > itemMayorAforo.capacity) {
      itemMayorAforo = item;
    }
  }

  let eventsPresentes = document.getElementById("events");

  let fragmento = document.createDocumentFragment();

  let tdMayor = document.createElement("td");
  tdMayor.textContent = itemMayor.name;
  let tdMenor = document.createElement("td");
  tdMenor.textContent = itemMenor.name;
  let tdMayorAforo = document.createElement("td");
  tdMayorAforo.textContent = itemMayorAforo.name;

  fragmento.appendChild(tdMayor);
  fragmento.appendChild(tdMenor);
  fragmento.appendChild(tdMayorAforo);

  eventsPresentes.appendChild(fragmento);
};

/* const eventsFut = (events) => {
  console.log("events", events);
  let categoriesFil;
  for (let categ of events) {
    if (!categoriesFil.include(categ.catgegory)) {
      console.log("ingreso a push", categ);
      categoriesFil.push(categ);
    }
  } */

/*  console.log("events", events);
  let categoriesFut = [...new Set(events.category)];
  console.log("categoriesFut", categoriesFut);
  /// events proximos
  let eventsFuturos = document.getElementById("eventsProx");
  let fragmentoProx = document.createDocumentFragment();
  for (let event of events) {
    let trLinea = document.createElement("tr");
    let tdCatProx = document.createElement("td");
    tdCatProx.textContent = event.category;
    let tdIngProx = document.createElement("td");
    tdIngProx.textContent = event.category;
    let tdPorProx = document.createElement("td");
    tdPorProx.textContent = event.category;

    trLinea.appendChild(tdCatProx);
    trLinea.appendChild(tdIngProx);
    trLinea.appendChild(tdPorProx);
    fragmentoProx.appendChild(trLinea);
  }
  eventsFuturos.appendChild(fragmentoProx);
}; */

/// events pasados

let eventsPasados = document.getElementById("eventsPast");

let fragmentoPasados = document.createDocumentFragment();

let tdCatPast = document.createElement("td");
tdCatPast.textContent = "td Mayor Pasado";
let tdIngPast = document.createElement("td");
tdIngPast.textContent = "td Menor Pasado";
let tdPorPast = document.createElement("td");
tdPorPast.textContent = "td Mayor Aforo Pasado";

fragmentoPasados.appendChild(tdCatPast);
fragmentoPasados.appendChild(tdIngPast);
fragmentoPasados.appendChild(tdPorPast);

eventsPasados.appendChild(fragmentoPasados);

setTimeout(() => {
  /* eventsFut(data.events); */
  eventsPre(data.events);
}, 1000);
