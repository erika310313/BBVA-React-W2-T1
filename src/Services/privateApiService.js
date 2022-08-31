import axios from 'axios';

let token = localStorage.getItem('token')  /* local o session? */

const config = {
    headers: {
        Group: 1,                //Aqui va el ID del equipo!!
        Authorization: 'Bearer ' + token
    }
}

const baseUrl = "https://ongapi.alkemy.org/api/";

const Get = async (endpoint) => {

    if(!endpoint) {
        throw new Error ("El endpoint no fue definido");
    }

    let apiUrl = baseUrl + endpoint;

    return await axios.get(apiUrl, config)
    .then(res => res)
    .catch(err => err)
}

const Post = (endpoint, body) => {
    axios.ost(`https://ongapi.alkemy.org/api/${endpoint}`, body)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}  

/* probando codigo */

export default {Get, Post}; 