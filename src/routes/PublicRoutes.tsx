import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'

export const PublicRoutes = () => {

    const { logged } = useContext(AuthContext);

    if( logged === 'yes' ){
        return <Navigate to={'/classroom'} />
    }

    return <Outlet />
}