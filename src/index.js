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
import RutaPrivada from './componentes/RutaPrivada'



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
            <Route path="/iniciar-sesion" element={<InicioSesion />}/>

            <Route path="/crear-cuenta" element={
               <RutaPrivada>
                 <RegistroUsuarios />
                 </RutaPrivada>
            }/>

            <Route path="/" element={
               <RutaPrivada>
                  <App />
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