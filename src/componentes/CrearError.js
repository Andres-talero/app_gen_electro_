import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import { useUser } from '../contextos/UserContext';
import { useNavBot } from '../contextos/NavBotContext';
import BtnRegresar from '../elementos/BtnRegresar';
import FormularioError from './FormularioError';


const CrearError = () => {

  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


useEffect(() => {
  datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'clientes'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Asesor' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'clientes'}, {name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
}, [cambiarBotones, datosUsuario])



  return ( 
  <>
      <Helmet>
        <title>Crear Error</title>
      </Helmet>
        <Header>
            <ContenedorHeader>
              <BtnRegresar ruta="/"/>
              <Titulo>Crear Error</Titulo>
            </ContenedorHeader>
        </Header>
        <FormularioError />
  </>
   );
}
 
export default CrearError;