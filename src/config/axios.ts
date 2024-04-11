import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

clienteAxios.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

export default clienteAxios;