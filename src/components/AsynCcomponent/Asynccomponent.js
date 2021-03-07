import axios from "axios";

export default {
  name: "AsyncComp",
  data() {
    return {
      datas: [],
      nameModel: "",
      idData: null,
    };
  },
  async mounted() {
    await this.loadData();
    this.idData = this.datas[0].id;
  },
  methods: {
    loadData() {
      return axios
        .get(`https://5fe01c7deca1780017a311db.mockapi.io/nameEntity`)
        .then((response) => {
          this.datas = response.data;
        })
        .catch((error) => console.log(error));
    },
    handleSubmit() {
      axios
        .post(`https://5fe01c7deca1780017a311db.mockapi.io/nameEntity`, {
          name: this.nameModel,
        })
        .then((respone) => {
          console.log(respone);
          this.loadData();
        })
        .catch((error) => console.log(error));
      // reset text field

      this.nameModel = "";
    },
    handleRemoveItem(id) {
      axios
        .delete(`https://5fe01c7deca1780017a311db.mockapi.io/nameEntity/${id}`)
        .then((response) => {
          console.log(response);
          this.loadData();
        })
        .catch((error) => console.log(error));
    },
  },
};
