import axios from "axios";

const defaultOptions = {
    baseURL:  "https://script.google.com/macros/s/",
    headers: {
      "Content-Type": "multipart/form-data" ,
      Accept: 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  export default instance ;