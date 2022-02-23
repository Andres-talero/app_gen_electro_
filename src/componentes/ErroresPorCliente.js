import React, {useState} from 'react';
import {ContenedorDatos, ContenedorError, Informacion, Dato, TextoPrincipal, Span, Texto, TextoI, Estado, ContenedorBotones, BotonAccion} from '../elementos/ElementosInformacion';
import FormatearFecha from '../funciones/FormatearFecha';
import borrarError from '../firebase/borrarError';
import {Link} from 'react-router-dom';
import Alerta from '../elementos/Alerta';

const ErroresPorCliente = ({errores}) => {

    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});


    const pBorrarError = (id) =>{
        borrarError(id);
        cambiarAlerta({tipo: 'exito', mensaje: 'El error fue eliminado correctamente.'});
        cambiarEstadoAlerta(true);
      }

    const estadoEsIgual = (errores, index, error) => {

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
        {errores.map((error, index) =>{
            return(
                <ContenedorError key={index}>
                    {!estadoEsIgual(errores, index, error) &&  <Estado>{valorEstado(error.estado)}</Estado>}
                <div className="shadow p-4 mb-3 bg-white rounded">
                    <ContenedorBotones>
                    <BotonAccion as={Link} to={`/editar-error/${error.id}`}>Editar</BotonAccion>
                    <BotonAccion danger onClick={() => {pBorrarError(error.id)}}>Eliminar</BotonAccion>
                    </ContenedorBotones>
                <ContenedorDatos key={index}>
                    <TextoPrincipal>{error.titulo}</TextoPrincipal>
                </ContenedorDatos>
                    <Informacion>
                        <Dato>
                        <Span>Usuario Creador</Span>
                        <Texto>{error.creador}</Texto>
                        </Dato>
                        <Dato>
                        <Span>Fecha</Span>
                        <Texto>{FormatearFecha(error.fecha)}</Texto>
                        </Dato>
                    </Informacion>
                    <Informacion className='mt-3'>
                        <Dato>
                        <Span>Descripción</Span>
                        <Texto>{error.descripcion}</Texto>
                        </Dato>
                    </Informacion>
                    <Informacion className='mt-5'>
                        <Dato>
                        <Span>Estado Proceso</Span>
                        <TextoI>{error.resultado}</TextoI>
                        </Dato>
                    </Informacion>
                    </div>
                    </ContenedorError>
            );
        })}
        <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
        />
        </>
     );
}


 
export default ErroresPorCliente;