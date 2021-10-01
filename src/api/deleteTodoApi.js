import axios from 'axios'

const BACKEND_URL = "http://localhost:9000/todos";

const deleteTodoApi = (id) => {
    return axios.delete(BACKEND_URL + `/${id}`)
}
export default deleteTodoApi;