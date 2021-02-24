import axios from "axios";

export default {
  // Gets all posts
  isloggedin: function () {
    return axios.get("/api/isauthenticated");
  },

  login: function (body) {
    return axios.post("/api/login", body);
  },

  signup: function (body) {
    return axios.post("/api/signup", body);
  },

  allfamilies: function (body) {

    return axios.get("/api/users", body);
  },
  removeMatch: function (id) {
    return axios.put("/api/users/", id);
  },
  getMatch: function (id) {
    return axios.get("/api/users/" + id);

  },

  updateProfile: function (body, id) {
    return axios.put("/api/users/" + id, body);

  },
};
