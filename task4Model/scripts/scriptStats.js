dataEvents();

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

const eventsFut = (events) => {
  console.log("events en event Fut", events);
  // filtro las categorias recibidas
  let categoriesFil = [];
  for (let categ of events) {
    if (!categoriesFil.length) {
      categoriesFil.push(categ.category);
    }
    if (!categoriesFil.includes(categ.category)) {
      categoriesFil.push(categ.category);
    }
  }
  /// events proximos
  let eventsFuturos = document.getElementById("eventsProx");
  let fragmentoProx = document.createDocumentFragment();
  let filtarPorCategoria = [];
  for (let categoria of categoriesFil) {
    ingresosTotales = 0;
    porcentajeAsistencia = [];
    filtarPorCategoria = events.filter((item) => item.category == categoria);
    for (itemCalculado of filtarPorCategoria) {
      ingresosTotales =
        ingresosTotales + itemCalculado.estimate * itemCalculado.price;
      porcentajeAsistencia.push(
        (itemCalculado.estimate * 100) / itemCalculado.capacity
      );
    }
    let sumaAsistencia = porcentajeAsistencia.reduce(function (
      acumulador,
      siguienteValor
    ) {
      return acumulador + siguienteValor;
    });

    let trLinea = document.createElement("tr");
    let tdCatProx = document.createElement("td");
    tdCatProx.textContent = categoria;
    let tdIngProx = document.createElement("td");
    tdIngProx.textContent = "$ " + ingresosTotales.toLocaleString();
    let tdPorProx = document.createElement("td");
    tdPorProx.textContent =
      (sumaAsistencia / porcentajeAsistencia.length).toFixed(2) + " %";
    trLinea.appendChild(tdCatProx);
    trLinea.appendChild(tdIngProx);
    trLinea.appendChild(tdPorProx);
    fragmentoProx.appendChild(trLinea);
  }
  eventsFuturos.appendChild(fragmentoProx);
};

const eventsPas = (events) => {
  // filtro las categorias recibidas
  let categoriesFil = [];
  for (let categ of events) {
    if (!categoriesFil.length) {
      categoriesFil.push(categ.category);
    }
    if (!categoriesFil.includes(categ.category)) {
      categoriesFil.push(categ.category);
    }
  }
  /// events proximos
  let eventsPasados = document.getElementById("eventsPast");
  let fragmentoProx = document.createDocumentFragment();
  let filtarPorCategoria = [];
  for (let categoria of categoriesFil) {
    ingresosTotales = 0;
    porcentajeAsistencia = [];
    filtarPorCategoria = events.filter((item) => item.category == categoria);
    for (itemCalculado of filtarPorCategoria) {
      ingresosTotales =
        ingresosTotales + itemCalculado.assistance * itemCalculado.price;
      porcentajeAsistencia.push(
        (itemCalculado.assistance * 100) / itemCalculado.capacity
      );
    }
    let sumaAsistencia = porcentajeAsistencia.reduce(function (
      acumulador,
      siguienteValor
    ) {
      return acumulador + siguienteValor;
    });

    let trLinea = document.createElement("tr");
    let tdCatProx = document.createElement("td");
    tdCatProx.textContent = categoria;
    let tdIngProx = document.createElement("td");
    tdIngProx.textContent = "$ " + ingresosTotales.toLocaleString();
    let tdPorProx = document.createElement("td");
    tdPorProx.textContent =
      (sumaAsistencia / porcentajeAsistencia.length).toFixed(2) + " %";
    trLinea.appendChild(tdCatProx);
    trLinea.appendChild(tdIngProx);
    trLinea.appendChild(tdPorProx);
    fragmentoProx.appendChild(trLinea);
  }
  eventsPasados.appendChild(fragmentoProx);
};

setTimeout(() => {
  eventsPre(data.events);
  eventsFut(data.events.filter((event) => event.date >= data.currentDate));
  eventsPas(data.events.filter((event) => event.date <= data.currentDate));
}, 1000);
