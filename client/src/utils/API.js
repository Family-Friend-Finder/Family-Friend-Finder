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

  allfamilies: function () {
    return axios.get("/api/users");
  },
  removeMatch: function (id,body) {
    return axios.put("/api/users/removematch/" + id, body);
  },
  getMatch: function (id) {
    return axios.get("/api/users/viewmatches/" + id);
  },
  updateProfile: function (body, id) {
    return axios.put("/api/users/" + id, body);
  },
  updateMatches: function(id, body) {
    return axios.put("/api/users/addmatch/" + id, body);
  },

};
