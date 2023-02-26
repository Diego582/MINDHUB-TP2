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

let id = parseInt(location.search.substring(4, 6));
console.log(location.search);
console.log(id);

let listCards = document.getElementById("cardDetails");

let fragmento = document.createDocumentFragment();

let keyItem = [];
for (let cardDetail of data.events) {
  if (cardDetail._id == id) {
    for (const key in cardDetail) {
      keyItem.push(key.toUpperCase());
    }

    console.log("ingreso en el ", cardDetail._id);
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
    let div21 = document.createElement("div");
    div21.className = "d-flex justify-content-around";
    let span = document.createElement("span");
    span.className = "card-text fs-5";
    span.textContent = keyItem[5];
    div21.appendChild(span);
    let p = document.createElement("p");
    p.className = "card-text fs-5";
    p.textContent = cardDetail.category;
    div21.appendChild(p);
    let span1 = document.createElement("span");
    span1.className = "card-text fs-5";
    span1.textContent = keyItem[3];
    div21.appendChild(span1);
    let p1 = document.createElement("p");
    p1.className = "card-text fs-5";
    p1.textContent = cardDetail.date;
    div21.appendChild(p1);
    div2.appendChild(div21);
    let div22 = document.createElement("div");
    div22.className = "d-flex justify-content-around";
    let span2 = document.createElement("span");
    span2.className = "card-text fs-5";
    span2.textContent = keyItem[4];
    div22.appendChild(span2);
    let p2 = document.createElement("p");
    p2.className = "card-text fs-5";
    p2.textContent = cardDetail.description;
    div22.appendChild(p2);
    div2.appendChild(div22);
    let div23 = document.createElement("div");
    div23.className = "d-flex justify-content-around";
    let span31 = document.createElement("span");
    span31.className = "card-text fs-5 m-2";
    span31.textContent = keyItem[7];
    div23.appendChild(span31);
    let p31 = document.createElement("p");
    p31.className = "card-text fs-5 m-2";
    p31.textContent = cardDetail.capacity;
    div23.appendChild(p31);
    let span32 = document.createElement("span");
    span32.className = "card-text fs-5 m-2";
    span32.textContent = keyItem[8];
    div23.appendChild(span32);
    let p32 = document.createElement("p");
    p32.className = "card-text fs-5 m-2";
    if (cardDetail.assistance) {
      p32.textContent = cardDetail.assistance;
    } else {
      p32.textContent = cardDetail.estimate;
    }
    div23.appendChild(p32);
    div2.appendChild(div23);
    let div24 = document.createElement("div");
    div24.className = "d-flex justify-content-around";
    let span41 = document.createElement("span");
    span41.className = "card-text fs-5 m-2";
    span41.textContent = keyItem[6];
    div24.appendChild(span41);
    let p41 = document.createElement("p");
    p41.className = "card-text fs-5 m-2";
    p41.textContent = cardDetail.place;
    div24.appendChild(p41);
    let span42 = document.createElement("span");
    span42.className = "card-text fs-5 m-2";
    span42.textContent = keyItem[9] + " $ ";
    div24.appendChild(span42);
    let p42 = document.createElement("p");
    p42.className = "card-text fs-5 m-2";
    p42.textContent = cardDetail.price;
    div24.appendChild(p42);
    div2.appendChild(div24);
    fragmento.appendChild(div2);
  }
}
listCards.appendChild(fragmento);

/*let i = 0;
for (i = 0; i < 1; i++) {
  console.log("ingresa al for");
  document.getElementById("cardDetails").innerHTML +=
    "<div class= 'bg-white col-5 d-flex justify-space-center align-items-center flex-grow-1 imgDetails'>" +
    "<img src=" +
    data.events[i].image +
    " class='card-img object-fit-contain border rounded' alt='...'></div><div class='col-1'></div>" +
    "<div class=' bg-white col-5 row align-items-center text-center flex-grow-1 cardTextDetails '>" +
    "<h5 class='card-title fs-1'>" +
    data.events[i].name +
    "</h5>" +
    "<div class='d-flex justify-content-around'><p class='card-text fs-5'>Category: " +
    data.events[i].category +
    "</p>" +
    "<p class='card-text fs-5'>Date: " +
    data.events[i].date +
    "</p></div>" +
    "<div><p class='card-text textDetails'>" +
    data.events[i].description +
    "</p> <p class='card-text fs-3'>Price $" +
    data.events[i].price +
    "</p></div>" +
    "<div class='d-flex justify-content-around'><p class='card-text fs-5'>Capacity: " +
    data.events[i].capacity +
    "</p>" +
    "<p class='card-text fs-5'>Assitance: " +
    data.events[i].assistance +
    "</p></div>" +
    "</div>";
} */

/* 





  

     $0000



 */
