import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/logo.png';
import InicioSesion from "./componentes/InicioSesion"
import RegistroUsuarios from "./componentes/RegistroUsuarios"
import { NavBotProvider } from './contextos/NavBotContext';
import HeaderNavbar from './elementos/HeaderNavbar';
import { AuthProvider } from './contextos/AuthContext';
import { UserProvider } from './contextos/UserContext';
import RutaPrivada from './componentes/RutaPrivada';
import CrearCliente from './componentes/CrearCliente';
import EditarCliente from './componentes/EditarCliente';
import BuscarCliente from './componentes/BuscarCliente';
import ValidarSesion from './componentes/ValidarSesion';
import ErroresPresentados from './componentes/ErroresPresentados';
import CrearError from './componentes/CrearError';
import EditarError from './componentes/EditarError';



const Index = () => {
  return ( 
    <>
      <Helmet>
      <link rel="shortcut icon" href={favicon}  type="image/x-icon"/>
      </Helmet>

      <AuthProvider>
      <NavBotProvider>
      <UserProvider>
      <BrowserRouter>
        <HeaderNavbar />

        <div className='contendorP'>
        <Contenedor>

          <Routes>

           <Route path="/iniciar-sesion" element={
             <ValidarSesion>
                <InicioSesion />
             </ValidarSesion>
             }/>

           <Route path="/" element={
               <RutaPrivada>
                  <App />
               </RutaPrivada>
          }/>

          <Route path="/crear-cuenta" element={
               <RutaPrivada>
                 <RegistroUsuarios />
                 </RutaPrivada>
          }/>

          <Route path="/crear-cliente" element={
               <RutaPrivada>
                 <CrearCliente />
                 </RutaPrivada>
          }/>

          <Route path="/cliente/:doc" element={
               <RutaPrivada>
                 <BuscarCliente />
                 </RutaPrivada>
          }/>

          <Route path="/errores" element={
               <RutaPrivada>
                 <ErroresPresentados />
                 </RutaPrivada>
          }/>

          <Route path="/crear-error/:doc" element={
               <RutaPrivada>
                 <CrearError />
                 </RutaPrivada>
          }/>

          <Route path="/editar-error/:id" element={
               <RutaPrivada>
                 <EditarError />
                 </RutaPrivada>
          }/>

          <Route path="/editar/:id" element={
               <RutaPrivada>
                 <EditarCliente />
                </RutaPrivada>
          }/>

          <Route path="*" element={<InicioSesion />}/>

          </Routes>

        </Contenedor>
        </div>
      
      </BrowserRouter>
      </UserProvider>
      </NavBotProvider>
      </AuthProvider>
    
    </>
   );
}
 
export default Index;


ReactDOM.render(<Index />, document.getElementById('root'));


serviceWorkerRegistration.register();