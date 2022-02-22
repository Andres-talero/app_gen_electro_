import React, { useState } from 'react';
import useObtenerErrores from '../hooks/useObtenerErrores';
import {Lista, ElementoLista, Categoria, Descripcion,  Valor, Fecha, ContenedorBotones, BotonAccion, BotonCargarMas, ContenedorBotonCentral, ContenedorSubtitulo, Subtitulo} from '../elementos/ElemntosDeLista';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import Boton from '../elementos/Boton'
import { Link } from 'react-router-dom';
import borrarError from '../firebase/borrarError';
import Busqueda from '../elementos/Busqueda';
import { useNavigate } from 'react-router-dom';
import Alerta from '../elementos/Alerta';
import FormatearFecha from '../funciones/FormatearFecha';

const ListaDeClientes = () => {

  const [errores, obtenerMasErrores, hayMasPorCargar] = useObtenerErrores();
  const [buscar, cambiarBuscar] = useState('')
  const navigate = useNavigate()
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  //Función para transformar la fecha de cara al usuario
  
  // const formatearFecha = (fecha) => {
  //   return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy", {locale: es})
  // }

  const handleChange = (e) =>{

    if(e.target.name === "buscar"){
        cambiarBuscar(e.target.value.replace(/[^0-9.]/g, ''))
    }   
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(buscar !== ''){
      navigate(`/cliente/${buscar}`)
    }
  }

  const pBorrarError = (id) =>{
    borrarError(id)
    cambiarAlerta({tipo: 'exito', mensaje: 'El error fue eliminado correctamente.'});
    cambiarEstadoAlerta(true);
  }


  const verError = (doc) => {
    navigate(`/cliente/${doc}`)
  }


  const fechaEsIgual = (errores, index, error) => {

    if(index !== 0){


      const estadoActual = error.estado;
      const estadoAnterior = errores[index -1].estado;

      if(estadoActual === estadoAnterior){
        return true;
      } else{
        return false;
      }

    }
  }

  const valorEstado = (estado) =>{
    if(estado === true){
      return "Pendiente";
    }else if(estado === false){
      return "Cerrado";
    }
  }

    return (
      <>
      <Busqueda buscar={buscar} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Lista>
        {(errores).map((error, index) => {
          return(
            <div key={index}>
              {!fechaEsIgual(errores, index, error) &&  <Fecha>{valorEstado(error.estado)}</Fecha>}
              <ElementoLista key={index}>
                <Categoria onClick={() => {verError(error.documentoCliente)}}>{error.titulo}</Categoria>
                <Descripcion onClick={() => {verError(error.documentoCliente)}}>{error.descripcion.substr(0, 10)}...</Descripcion>
                <Valor onClick={() => {verError(error.documentoCliente)}}>{FormatearFecha(error.fecha)}</Valor>
                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar-error/${error.id}`}><IconoEditar/></BotonAccion>
                  <BotonAccion onClick={() => {pBorrarError(error.id)}}><IconoBorrar /></BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          );
        })}

        {hayMasPorCargar && 
        <ContenedorBotonCentral>
        <BotonCargarMas onClick={() => obtenerMasErrores()}>Cargar más</BotonCargarMas>
        </ContenedorBotonCentral>
        }

        {errores.length === 0 &&
          <ContenedorSubtitulo>
            <Subtitulo>No hay clientes por mostrar</Subtitulo>
            <Boton as={Link} to="/crear-cliente">Agregar cliente</Boton>
          </ContenedorSubtitulo>
        }
      </Lista>
      <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
      />

      </>
      );
}
 

export default ListaDeClientes;