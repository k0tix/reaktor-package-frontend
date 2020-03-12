import axios from 'axios'
const baseUrl = 'http://localhost:8000/api/packages'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }