const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
  data() {
    return {
      urlAPI: "https://mindhub-xj03.onrender.com/api/amazing",
      currentDateFilter: "",
      data: [],
      backupData: [],
      categories: [],
      search: "",
      categoriesSelected: [],
      favoritos: [],
    };
  },
  created() {
    this.dataEvents();
  },
  mounted() {},
  methods: {
    async dataEvents() {
      await fetch(this.urlAPI)
        .then((response) => response.json())
        .then((dataEvent) => {
          this.currentDateFilter = dataEvent.currentDate;
          this.data = dataEvent.events.filter(
            (event) => event.date <= this.currentDateFilter
          );
          this.backupData = this.data;
          this.filterCategories(this.data);
        })
        .catch((e) => console.log(e.message));
    },
    filterCategories(array) {
      array.forEach((element) => {
        if (!this.categories.includes(element.category)) {
          this.categories.push(element.category);
        }
      });
    },
    data: () => ({
      show: false,
    }),
  },
  computed: {
    handleFilter() {
      let filter = this.backupData.filter((cardEvent) =>
        cardEvent.name.toLowerCase().includes(this.search.toLowerCase())
      );
      if (this.categoriesSelected.length > 0) {
        this.data = filter.filter((cardEvent) =>
          cardEvent.category.includes(this.categoriesSelected)
        );
      } else {
        this.data = filter;
      }
    },
  },
});
app.use(vuetify).mount("#app");
