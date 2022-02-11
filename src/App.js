import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './elementos/Header';
import { useUser } from './contextos/UserContext';
import { useNavBot } from './contextos/NavBotContext';
import ComprobarUsuario from './componentes/ComprobarRol';
import Boton from './elementos/Boton';
import ListaDeClientes from './componentes/ListaDeClientes';
import { Navigate } from 'react-router';


const App = () => {

  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


useEffect(() => {
  datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
}, [cambiarBotones, datosUsuario])



  return ( 
  <>
      <Helmet>
        <title>Clientes</title>
      </Helmet>
      <ComprobarUsuario Administrador Motorizado>
        <Header>
            <ContenedorHeader>
              <Titulo>Clientes</Titulo>
              <Boton to="/crear-cliente">Crear Nuevo</Boton>
            </ContenedorHeader>
        </Header>
        <ListaDeClientes />
      </ComprobarUsuario>
      <ComprobarUsuario Asesor><Navigate to="/iniciar-sesion" /></ComprobarUsuario>
  </>
   );
}
 
export default App;