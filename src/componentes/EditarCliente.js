import React, {useEffect} from 'react';
import { useUser } from './../contextos/UserContext';
import { useNavBot } from './../contextos/NavBotContext';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import BtnRegresar from '../elementos/BtnRegresar';
import FormularioCliente from './FormularioCliente';
import { useParams } from 'react-router-dom';
import useObtenerCliente from '../hooks/useObtenerCliente';

const EditarCliente = () => {

  const {id} = useParams();
  const [cliente] = useObtenerCliente(id);
  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();
  let documento = '';

  if(cliente){
    documento = cliente.data().documento;
  }


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
        <ContenedorHeader>
          <BtnRegresar ruta={`/cliente/${documento}`}/>
        <Titulo>Editar Cliente</Titulo>
        </ContenedorHeader>
    </Header>

    <FormularioCliente cliente={cliente}/>

    </>
      );
}
 
export default EditarCliente;