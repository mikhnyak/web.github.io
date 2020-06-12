const axios = require("axios");

module.exports = {
  getCocktail(id) {
    return axios
      .get(`http://127.0.0.1:8000/cocktails/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
  getCafe(id) {
    return axios
      .get(`http://127.0.0.1:8000/cafes/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
};
