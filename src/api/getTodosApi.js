import axios from 'axios'

const BACKEND_URL = "http://localhost:9000/todos";

const getTodosApi = () => {
    return axios.get(BACKEND_URL)
}
export default getTodosApi;