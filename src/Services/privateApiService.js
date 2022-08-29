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
        console.log("El endpoint no fue definido");
    }

    let apiUrl = baseUrl + endpoint;

    return await axios.get(apiUrl, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get