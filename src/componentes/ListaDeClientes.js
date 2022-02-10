import React from 'react';
import useObtenerClientes from '../hooks/useObtenerClientes';
import {Lista, ElementoLista, Categoria, Descripcion,  Valor, Fecha, ContenedorBotones, BotonAccion, BotonCargarMas, ContenedorBotonCentral, ContenedorSubtitulo, Subtitulo} from '../elementos/ElemntosDeLista';
import {ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import {ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import Boton from '../elementos/Boton'
import { Link } from 'react-router-dom';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import borrarCliente from '../firebase/borrarCliente';

const ListaDeClientes = () => {

  const [clientes, obtenerMasClientes, hayMasPorCargar] = useObtenerClientes();

  //Función para transformar la fecha de cara al usuario
  
  // const formatearFecha = (fecha) => {
  //   return format(fromUnixTime(fecha), "dd 'de' MMMM 'del' yyyy", {locale: es})
  // }

  const fechaEsIgual = (clientes, index, cliente) => {

    if(index !== 0){

      const idFechaAnterior = Object.keys(clientes)[index-1];

      const fechaActual = cliente.nombres.substr(0,1).toUpperCase();
      const fechaGastoAnterior = clientes[idFechaAnterior].nombres.substr(0,1).toUpperCase();

      if(fechaActual === fechaGastoAnterior){
        return true;
      } else{
        return false;
      }

    }
  }

    return (
      <>

      <Lista>
        {Object.keys(clientes).map((id, index) => {
          return(
            <div key={index}>
              {!fechaEsIgual(clientes, index, clientes[id]) &&  <Fecha>{clientes[id].nombres.substr(0,1).toUpperCase()}</Fecha>}
              <ElementoLista key={index}>
                <Categoria>
                  {clientes[id].nombres} {clientes[id].apellidos}
                </Categoria>

                <Descripcion>Doc. {clientes[id].documento}</Descripcion>
                <Valor>Cel. {clientes[id].celular}</Valor>

                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar/${id}`}><IconoEditar/></BotonAccion>
                  <BotonAccion onClick={() => {borrarCliente(id)}}><IconoBorrar /></BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          );
        })}

        {hayMasPorCargar && 
        <ContenedorBotonCentral>
        <BotonCargarMas onClick={() => obtenerMasClientes()}>Cargar más</BotonCargarMas>
        </ContenedorBotonCentral>
        }

        {clientes.length === 0 &&
          <ContenedorSubtitulo>
            <Subtitulo>No hay clientes por mostrar</Subtitulo>
            <Boton as={Link} to="/crear-cliente">Agregar cliente</Boton>
          </ContenedorSubtitulo>
        }
      </Lista>

      </>
      );
}
 
export default ListaDeClientes;