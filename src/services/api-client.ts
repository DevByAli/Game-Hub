import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0fc8049fdcb144c595b2a4c9bd4e96b1",
  },
});
