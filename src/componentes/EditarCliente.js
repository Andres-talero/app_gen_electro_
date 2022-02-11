import React, {useEffect} from 'react';
import { useUser } from './../contextos/UserContext';
import { useNavBot } from './../contextos/NavBotContext';
import { Helmet } from 'react-helmet';
import {Header, Titulo} from '../elementos/Header'
import BtnRegresar from '../elementos/BtnRegresar';
import FormularioGasto from './FormularioGasto';
import { useParams } from 'react-router-dom';
import useObtenerCliente from '../hooks/useObtenerCliente';

const EditarCliente = () => {

  const {id} = useParams();
  const [cliente] = useObtenerCliente(id);
  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


  useEffect(() => {
      datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
      datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
  }, [cambiarBotones, datosUsuario])


    return (
      <>
      <Helmet>
        <title>Editar Cliente</title>
      </Helmet>

      <Header>
          <BtnRegresar ruta="/"/>
        <Titulo>Editar Cliente</Titulo>
    </Header>

    <FormularioGasto cliente={cliente}/>

    </>
      );
}
 
export default EditarCliente;