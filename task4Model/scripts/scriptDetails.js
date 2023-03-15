let id = parseInt(location.search.substring(4, 6));

let listCards = document.getElementById("cardDetails");

let fragmento = document.createDocumentFragment();

let keyItem = [];
let cardFiltrada;
dataEvents();
setTimeout(() => {
  console.log("data", data.events);
  cardDetail = data.events.find((item) => item._id == id);
  console.log("cardDetail", cardDetail);
  if (cardDetail._id == id) {
    for (const key in cardDetail) {
      keyItem.push(key.toUpperCase());
    }
    let div = document.createElement("div");
    div.className =
      "bg-white col-5 d-flex justify-space-center align-items-center flex-grow-1 imgDetails";
    let img = document.createElement("img");
    img.src = cardDetail.image;
    img.className = "card-img object-fit-contain border rounded";
    img.alt = cardDetail.name;
    div.appendChild(img);
    fragmento.appendChild(div);
    let div1 = document.createElement("div");
    div1.className = "col-1";
    fragmento.appendChild(div1);
    let div2 = document.createElement("div");
    div2.className =
      "bg-white col-5 row align-items-center text-center flex-grow-1 cardTextDetails";
    let h5 = document.createElement("h5");
    h5.className = "card-title fs-1";
    h5.textContent = cardDetail.name;
    div2.appendChild(h5);
    //category-date
    let div21 = document.createElement("div");
    div21.className = "d-flex justify-content-around flex-wrap";
    //category
    let div211 = document.createElement("div");
    div211.className = "d-flex justify-content-between categoryDetails";
    let span = document.createElement("span");
    span.className = "card-text fs-5 m-2";
    span.textContent = keyItem[2];
    div211.appendChild(span);
    let p = document.createElement("p");
    p.className = "card-text fs-5 m-2";
    p.textContent = cardDetail.category;
    div211.appendChild(p);
    div21.appendChild(div211);
    //date
    let div212 = document.createElement("div");
    div212.className = "d-flex justify-content-between dateDetails";
    let span1 = document.createElement("span");
    span1.className = "card-text fs-5 m-2";
    span1.textContent = keyItem[3];
    div212.appendChild(span1);
    let p1 = document.createElement("p");
    p1.className = "card-text fs-5 m-2";
    p1.textContent = cardDetail.date;
    div212.appendChild(p1);
    div21.appendChild(div212);
    div2.appendChild(div21);
    //description
    let div22 = document.createElement("div");
    div22.className = "d-flex justify-content-around flex-wrap";
    let span2 = document.createElement("span");
    span2.className = "card-text fs-5 w-100";
    span2.textContent = keyItem[4];
    div22.appendChild(span2);
    let p2 = document.createElement("p");
    p2.className = "card-text fs-5";
    p2.textContent = cardDetail.description;
    div22.appendChild(p2);
    div2.appendChild(div22);
    //capacity-assitance-estimate
    let div23 = document.createElement("div");
    div23.className = "d-flex justify-content-around flex-wrap";
    //capacity
    let div231 = document.createElement("div");
    div231.className = "d-flex justify-content-between";
    let span31 = document.createElement("span");
    span31.className = "card-text fs-5 m-2";
    span31.textContent = keyItem[8];
    div231.appendChild(span31);
    let p31 = document.createElement("p");
    p31.className = "card-text fs-5 m-2";
    p31.textContent = cardDetail.capacity;
    div231.appendChild(p31);
    div23.appendChild(div231);
    //assitance-estimate
    let div232 = document.createElement("div");
    div232.className = "d-flex justify-content-between";
    let span32 = document.createElement("span");
    span32.className = "card-text fs-5 m-2";
    span32.textContent = keyItem[9];
    div232.appendChild(span32);
    let p32 = document.createElement("p");
    p32.className = "card-text fs-5 m-2";
    if (cardDetail.assistance) {
      p32.textContent = cardDetail.assistance;
    } else {
      p32.textContent = cardDetail.estimate;
    }
    div232.appendChild(p32);
    div23.appendChild(div232);
    div2.appendChild(div23);
    //place-price
    let div24 = document.createElement("div");
    div24.className = "d-flex justify-content-around flex-wrap";
    //place
    let div241 = document.createElement("div");
    div241.className = "d-flex justify-content-between";

    let span41 = document.createElement("span");
    span41.className = "card-text fs-5 m-2";
    span41.textContent = keyItem[6];
    div241.appendChild(span41);
    let p41 = document.createElement("p");
    p41.className = "card-text fs-5 m-2";
    p41.textContent = cardDetail.place;
    div241.appendChild(p41);
    div24.appendChild(div241);
    //price
    let div242 = document.createElement("div");
    div242.className = "d-flex justify-content-between";

    let span42 = document.createElement("span");
    span42.className = "card-text fs-5 m-2";
    span42.textContent = keyItem[7] + " $ ";
    div242.appendChild(span42);
    let p42 = document.createElement("p");
    p42.className = "card-text fs-5 m-2";
    p42.textContent = cardDetail.price;
    div242.appendChild(p42);

    div24.appendChild(div242);

    div2.appendChild(div24);
    fragmento.appendChild(div2);
  }
  listCards.appendChild(fragmento);
}, 1000);
