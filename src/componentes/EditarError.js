import React, {useEffect} from 'react';
import { useUser } from '../contextos/UserContext';
import { useNavBot } from '../contextos/NavBotContext';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import BtnRegresar from '../elementos/BtnRegresar';
import FormularioError from './FormularioError';
import { useParams } from 'react-router-dom';
import useObtenerError from '../hooks/useObtenerError';

const EditarError = () => {

  const {id} = useParams();
  const [error] = useObtenerError(id);
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
        <title>Editar Error</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <BtnRegresar />
        <Titulo>Editar Error</Titulo>
        </ContenedorHeader>
    </Header>

    <FormularioError error={error}/>

    </>
      );
}
 
export default EditarError;