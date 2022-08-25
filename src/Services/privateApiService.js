import axios from 'axios';

const config = {
    headers: {
        //Group: 01                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


const token = () => {
    let token = localStorage.getItem('token');
    if (token) {
        const headerAuthorization = {
            bearer: "Bearer" + token
        }
    }
}


export default Get