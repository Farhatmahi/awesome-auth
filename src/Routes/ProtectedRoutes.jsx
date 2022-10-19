import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const ProtectedRoutes = ({children}) => {
    const {user} = useContext(authContext)
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' />
};

export default ProtectedRoutes;