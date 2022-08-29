import axios from 'axios';

const config = {
    headers: {
        Group: 1,                //Aqui va el ID del equipo!!
    }
}

const baseUrl = "https://ongapi.alkemy.org/api/";

const Get = async (endpoint) => { 

    if(!endpoint) {
        throw new Error ("El endpoint no fue definido");
    }

    let apiUrl = baseUrl + endpoint;

    return await axios.get(apiUrl, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const post = (endpoint,object) => {

    let apiUrl = baseUrl + endpoint 

    axios.post(apiUrl, object)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get