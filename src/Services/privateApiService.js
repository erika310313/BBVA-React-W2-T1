import axios from 'axios';


const config = {
    headers: {
        Group: 1           //Aqui va el ID del equipo!!
    }
}

const baseUrl = "https://ongapi.alkemy.org/api/";

// const Get = async (endpoint) => {

//     if(!endpoint) {
//         console.log("El endpoint no fue definido");
//     }

//     let apiUrl = baseUrl + endpoint;

//     return await axios.get(apiUrl)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

const Get = async (url) => {
    let urlFinal = baseUrl + url;
  
    return await axios
      .get(urlFinal)
      .then((res) => res.data.data)
      .catch((err) => err);
};

const Put = async (url, body) => {
    let urlFinal = baseUrl + url;
  
    return await axios
      .put(urlFinal, body)
      .then((response) => response.data)
      .catch((error) => error);
  };

  const Post = async (url, body) => {
    let urlFinal = baseUrl + url;
    return await axios
      .post(urlFinal, body)
      .then((res) => res.data)
      .catch((err) => err);
  };


const token = () => {
    let token = localStorage.getItem('token');
    if (token) {
        const headerAuthorization = {
            bearer: "Bearer" + token
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {Get,Put,Post}