import React from 'react';
import {useAuth} from '../contextos/AuthContext';
import {Navigate} from 'react-router-dom'

const ValidarSesion = ({children}) => {
    const {usuario} = useAuth();

    if(!usuario){
        return ( 
            children
        );
    } else {
        return <Navigate to="/" />
    }
}
 
export default ValidarSesion;