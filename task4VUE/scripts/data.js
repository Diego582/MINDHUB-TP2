/* let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";
var data = "";
async function dataEvents(option) {
  await fetch(urlAPI)
    .then((response) => response.json())
    .then((dataEvent) => {
      data = dataEvent;
      option === "home"
        ? handleOpenHome()
        : option === "upcoming"
        ? handleOpenUpcoming()
        : option === "past"
        ? handleOpenPast()
        : option === "stats"
        ? handleOpenStats()
        : handleOpenDetails();
    })
    .catch((e) => console.log(e));
}
 */