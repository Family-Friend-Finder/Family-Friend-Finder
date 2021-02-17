import axios from "axios"; 

export default {
    // Gets all posts
    isloggedin:  function() {
      return axios.get("/api/isauthenticated");
    }
}