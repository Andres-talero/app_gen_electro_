import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header';
import { useUser } from '../contextos/UserContext';
import { useNavBot } from '../contextos/NavBotContext';
import ComprobarUsuario from './ComprobarRol';
import ListadeErrores from './ListaDeErrores'


const ErroresPresentados = () => {

  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


useEffect(() => {
  datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'clientes'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'clientes'}, {name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
}, [cambiarBotones, datosUsuario])



  return ( 
  <>
      <Helmet>
        <title>Errores</title>
      </Helmet>
      <ComprobarUsuario Administrador Motorizado Asesor>
        <Header>
            <ContenedorHeader>
              <Titulo>Errores</Titulo>
              {/* <Boton to="/crear-cliente">Crear Nuevo</Boton> */}
            </ContenedorHeader>
        </Header>
        <ListadeErrores />
      </ComprobarUsuario>
  </>
   );
}
 
export default ErroresPresentados;