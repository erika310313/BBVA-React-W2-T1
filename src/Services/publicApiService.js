import axios from 'axios';

const config = {
    headers: {
        Group: 1                //Aqui va el ID del equipo!!
    }
}

const Get = (endpoint, id="") => { 

    if(!endpoint) {
        console.log("El endpoint no fue definido");
    }

    axios.get(`https://ongapi.alkemy.org/api/${endpoint}${id}`, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Post = (endpoint,object) => {
    axios.post(`https://ongapi.alkemy.org/api/${endpoint}`,object)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {Get, Post}