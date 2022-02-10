import React from 'react';
import {useUser} from '../contextos/UserContext';
import {Navigate} from 'react-router-dom'

const ComprobarUsuario = (props) => {

    const {datosUsuario} = useUser();
    const propsR = props;

    
    if(datosUsuario){

        if(datosUsuario.rol === 'Administrador'){

            if(propsR.Administrador){
                return ( 
                    props.children
                );
            } else {return <></>}

        } else if(datosUsuario.rol === 'Motorizado'){

            if(propsR.Motorizado){
                return ( 
                    props.children
                );
            } else {return <></>}
    
        } else if(datosUsuario.rol === 'Asesor'){

            if(propsR.Asesor){
                return ( 
                    props.children
                );
            } else {return <></>}
    
        }


    } else {
        return <Navigate to="/iniciar-sesion" />
    }
}
 
export default ComprobarUsuario;