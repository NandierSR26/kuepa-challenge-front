import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext';

export const PrivateRoutes = () => {

    const { logged } = useContext(AuthContext);

    if (logged === 'no') {
        return <Navigate to={'/'} />
    }

    return <Outlet />
}