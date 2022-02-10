import React from 'react';
import Boton from './Boton';
import BotonCerrarSesion from './BotonCerrarSesion';
import { useUser } from './../contextos/UserContext';



const BotonNavbar = ({boton}) => {

    const {datosUsuario} = useUser();

    switch(boton){
        case 'categorias' :
            return <Boton to="/categorias" primario="true">Categorias</Boton>;
        case 'lista' :
            return <Boton to="/lista" primario="true">Gastos</Boton>;
        case 'registro' :
                return <Boton to="/crear-cuenta" primario="true">Registro</Boton>
        case 'iniciar-sesion' :
                    return <Boton to="/iniciar-sesion" primario="true">Iniciar Sesion</Boton>
        case 'clientes' :
                 return <Boton to="/" primario="true">Clientes</Boton>;
        case 'usuario' :
                 return <Boton to="/" secundario="true">{datosUsuario.nombre.substr(0,1)}</Boton>;
        case 'cerrarSesion' :
            return <BotonCerrarSesion/>;
        case '' :
            return <></>;
        default:
            return <></>;
    }
    
}
 
export default BotonNavbar;