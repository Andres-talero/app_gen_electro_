import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './elementos/Header';
import { useUser } from './contextos/UserContext';
import { useNavBot } from './contextos/NavBotContext';
import ComprobarUsuario from './componentes/ComprobarRol';
import Boton from './elementos/Boton';
import ListaDeClientes from './componentes/ListaDeClientes';
import ListadeErrores from './componentes/ListaDeErrores'


const App = () => {

  const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();


useEffect(() => {
  datosUsuario.rol==='Motorizado' ? cambiarBotones([{name: 'errores'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Asesor' ? cambiarBotones([{name: 'usuario'}, {name: 'cerrarSesion'}]) : 
  datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'errores'}, {name: 'registro'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
}, [cambiarBotones, datosUsuario])



  return ( 
  <>
    <ComprobarUsuario Administrador Motorizado>
      <Helmet>
        <title>Clientes</title>
      </Helmet>
        <Header>
            <ContenedorHeader>
              <Titulo>Clientes</Titulo>
              <Boton to="/crear-cliente">Crear Nuevo</Boton>
            </ContenedorHeader>
        </Header>
        <ListaDeClientes />
    </ComprobarUsuario>
    <ComprobarUsuario Asesor>
      <Helmet>
        <title>Errores</title>
      </Helmet>
        <Header>
            <ContenedorHeader>
              <Titulo>Errores</Titulo>
            </ContenedorHeader>
        </Header>
        <ListadeErrores />
    </ComprobarUsuario>
  </>
   );
}
 
export default App;