import axios from 'axios';

let token = localStorage.getItem('token')  /* local o session? */

const config = {
    headers: {
        Group: 1,                //Aqui va el ID del equipo!!
        /* octal literals are not allowed in strict mode. */
        Authorization: 'Bearer ' + token
    }
}

const Get = async (endpoint, id="") => {

    if(!endpoint) {
        console.log("El endpoint no fue definido");
    }

    return await axios.get(`https://ongapi.alkemy.org/api/${endpoint}/${id}`, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get