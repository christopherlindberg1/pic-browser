import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6n4GMVE8dOtwx7muMVKT5w0WwqKOZIQ0GVPwm1N1ejE"
  }
});