import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header'
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario'
import {auth} from './../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Alerta from '../elementos/Alerta';
import { useNavBot } from '../contextos/NavBotContext';
import crearUsuario from '../firebase/crearUsuario';
import { useUser } from './../contextos/UserContext';
import SelectRol from './SelectRol';



const RegistroUsuarios = () => {


  
    const {datosUsuario} = useUser();
  const {cambiarBotones} = useNavBot();

  useEffect(() => {
    datosUsuario.rol==='Administrador' ? cambiarBotones([{name: 'clientes'}, {name: 'usuario'}, {name: 'cerrarSesion'}]) : <></>
  }, [cambiarBotones, datosUsuario])
  
  

  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState('');
  const [password, establecerPassword] = useState('');
  const [password2, establecerPassword2] = useState('');
  const [nombre, establecerNombre] = useState('');
  const [celular, establecerCelular] = useState('');
  const [rol, establecerRol] = useState('Motorizado');
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch(e.target.name){
      case 'nombre' :
        establecerNombre(e.target.value.replace(/[^a-z.A-Z]/g, ''));
        break;
      case 'celular' :
        const preCelular = e.target.value.replace(/[^0-9.]/g, '');
        establecerCelular(preCelular.substr(0,10));
        break;
      case 'email' :
        establecerCorreo(e.target.value);
        break;
      case 'password' : 
        establecerPassword(e.target.value);
        break;
      case 'password2' : 
        establecerPassword2(e.target.value);
        break;
      default : 
       break;
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    //Comprobamos del lado del cliente que el correo sea valido.
    const expresionRegularCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if( !expresionRegularCorreo.test(correo) ){
      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo: 'error', mensaje: 'Por favor ingresa un correo electronico valido'});
      return;
    }
    if(correo === '' || password === '' || password2 === '' || nombre === '' || celular === ''){
      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo: 'error', mensaje: 'por favor rellena todos los datos'});
      return;
    }
    if(password !== password2)
    {
      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo: 'error', mensaje: 'Las contraseñas no son iguales'});
      return;
    }

    try{
      const datosUsuario = await createUserWithEmailAndPassword(auth, correo, password)
      if(datosUsuario){
        const uid = datosUsuario.user.uid;
        crearUsuario(uid, nombre, correo, celular, rol);
        navigate('/');
      }
    } catch(error){
      let mensaje;
      switch(error.code){
        case 'auth/invalid-password':
          mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.';
        break;
        case 'auth/email-already-in-use':
            mensaje = 'Ya existe una cuenta con el correo proporcionado.';
        break;
        case 'auth/invalid-email':
          mensaje = 'El correo electrónico no es valido.';
        break;
        default:
          mensaje = 'Hubo un error al intentar crear la cuenta';
        break;
      }

      cambiarEstadoAlerta(true);
      cambiarAlerta({tipo: 'error', mensaje: mensaje});

    }

  }

    return (
        <>
        <Helmet>
          <title>Crear Cuenta</title>
        </Helmet>

        <Header>
          <ContenedorHeader>
            <Titulo>Crear Cuenta</Titulo>
          </ContenedorHeader>
        </Header>

        <Formulario onSubmit={handleSubmit}>
        <Input
            type="nombre"
            name="nombre"
            placeholder='Nombre'
            value={nombre}
            onChange={handleChange}
          />
          <Input
            type="celular"
            name="celular"
            placeholder='Celular'
            value={celular}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder='Correo Electronico'
            value={correo}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder='Contraseña'
            value={password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password2"
            placeholder='Repetir la contraseña'
            value={password2}
            onChange={handleChange}
          />
          <SelectRol rol={rol} cambiarRol={establecerRol}/>

          <ContenedorBoton>
            <Boton primario iconoGrande as="button" type="submit">Crear Cuenta</Boton>
          </ContenedorBoton>
        </Formulario>
       <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
        </>
      );
}
 
export default RegistroUsuarios;