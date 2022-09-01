import axios from 'axios';

let token = localStorage.getItem('token')  /* local o session? */

const config = {
    headers: {
        Group: 1,                //Aqui va el ID del equipo!!
        Authorization: 'Bearer ' + token
    }
}

const baseUrl = "https://ongapi.alkemy.org/api/";

const Put = async (url, body) => {
    let urlFinal = baseUrl + url;
  
    return await axios
      .put(urlFinal, body)
      .then((response) => response.data)
      .catch((error) => error);
  }

const Get = async (endpoint) => {

    if(!endpoint) {
        throw new Error ("Endpoint is not defined");
    }

    let apiUrl = baseUrl + endpoint;

    return await axios.get(apiUrl, config)
    .then(res => res)
    .catch(err => err)
}

const Post = (endpoint, body) => {

    let apiUrl = baseUrl + endpoint;

    axios.post(apiUrl, body)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}  

// eslint-disable-next-line import/no-anonymous-default-export

export default {Get, Post, Put}; 
