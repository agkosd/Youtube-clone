import axios from "axios";

const KEY = "AIzaSyDNKEsU7xfQoyznEtHu4tC82XiOHt6Awb4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    q: "surfing",
  },
});
