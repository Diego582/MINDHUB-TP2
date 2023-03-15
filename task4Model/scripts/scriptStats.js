dataEvents();

console.log("data", data);
const eventsFut = (events) => {
  console.log("events", events);
  let categoriesFil;
  for (let categ of events) {
    if (!categoriesFil.include(categ.catgegory)) {
      console.log("ingreso a push", categ);
      categoriesFil.push(categ);
    }
  }

  console.log("events", events);
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
};

let eventsPresentes = document.getElementById("events");

let fragmento = document.createDocumentFragment();

let tdMayor = document.createElement("td");
tdMayor.textContent = "td Mayor prueba";
let tdMenor = document.createElement("td");
tdMenor.textContent = "td Menor prueba";
let tdMayorAforo = document.createElement("td");
tdMayorAforo.textContent = "td Mayor Aforo";

fragmento.appendChild(tdMayor);
fragmento.appendChild(tdMenor);
fragmento.appendChild(tdMayorAforo);

eventsPresentes.appendChild(fragmento);

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
  eventsFut(data.events);
}, 1000);
