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
    return axios.get("/api/user", body);
  },
  removeMatch: function (id) {
    return axios.put("/api/user", id);
  },
  getMatch: function (id) {
    return axios.get("/api/user" + id);
  },
};
