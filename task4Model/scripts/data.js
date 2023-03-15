let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
var data = "";
async function dataEvents() {
  await fetch(urlAPI)
    .then((response) => response.json())
    .then((dataEvent) => {
      data = dataEvent;
      console.log("data", data.events);
      return data;
    })
    .catch((e) => console.log(e));
}
