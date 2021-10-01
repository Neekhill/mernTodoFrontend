
import axios from 'axios'

const BACKEND_URL = "http://localhost:9000/todos";

const createTaskApi = (title, description) => {

    return axios.post(BACKEND_URL, {
        title: title,
        description: description
    })

}

export default createTaskApi
