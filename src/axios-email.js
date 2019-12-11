import axios from 'axios';

const instance = axios.create({
   baseURL: "https://8wdtpe73z5.execute-api.us-east-1.amazonaws.com/dev/"
});


export default instance;
