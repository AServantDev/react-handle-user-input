import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID L4UXI2WcZkG-Q9ikXlASbiSvnMvxadRkeW53Cq6HRgU",
  },
});
