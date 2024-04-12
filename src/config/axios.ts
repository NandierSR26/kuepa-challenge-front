import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

const token = localStorage.getItem('token')

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        // 'Authorization': `Bearer ${jwtToken}`
    },
    timeout: 45000
})

clienteAxios.interceptors.request.use(async (config) => {
    if (token) {
        console.log({token})
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

export default clienteAxios;