import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './elementos/Header'
import { useUser } from './contextos/UserContext';
import { useNavBot } from './contextos/NavBotContext';

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
    <Header>
        <ContenedorHeader>
          <Titulo>Clientes</Titulo>
        </ContenedorHeader>
      </Header>
  </>
   );
}
 
export default App;