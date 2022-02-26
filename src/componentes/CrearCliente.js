import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import { useUser } from './../contextos/UserContext';
import { useNavBot } from './../contextos/NavBotContext';
import ComprobarUsuario from './ComprobarRol';
import BtnRegresar from '../elementos/BtnRegresar';
import FormularioCliente from './FormularioCliente';


const CrearCliente = () => {

  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


useEffect(() => {
  datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Asesor' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'errores'}, {name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
}, [cambiarBotones, datosUsuario])



  return ( 
  <>
      <Helmet>
        <title>Clientes</title>
      </Helmet>
      <ComprobarUsuario Administrador Motorizado>
        <Header>
            <ContenedorHeader>
              <BtnRegresar ruta="/"/>
              <Titulo>Crear Cliente</Titulo>
            </ContenedorHeader>
        </Header>
        <FormularioCliente />
      </ComprobarUsuario>
  </>
   );
}
 
export default CrearCliente;