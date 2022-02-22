import React from 'react';
import {ContenedorDatos, Informacion, Dato, TextoPrincipal, Span, Texto, ContenedorBotones, BotonAccion} from './../elementos/ElementosInformacion';
import FormatearFecha from '../funciones/FormatearFecha';
import ComprobarUsuario from './ComprobarRol';
import borrarCliente from '../firebase/borrarCliente';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ErroresPorUsuario from './ErroresPorUsuario';

const DatosCliente = ({cliente}) => {

    const navigate = useNavigate();

    const pBorrarCliente = (id) =>{
        borrarCliente(id);
        navigate(-1);
      }

    return ( 
        <>
        {cliente.map((cli, index) =>{
            return(
                <div key={index}>
                <ContenedorDatos key={index}>
                    <TextoPrincipal>{cli.nombres}</TextoPrincipal>
                    <TextoPrincipal>{cli.apellidos}</TextoPrincipal>
                </ContenedorDatos>
                <ComprobarUsuario Administrador Motorizado>
                    <ContenedorBotones>
                    <BotonAccion as={Link} to={`/editar/${cli.id}`}>Editar</BotonAccion>
                    <BotonAccion danger onClick={() => {pBorrarCliente(cli.id)}}>Eliminar</BotonAccion>
                    </ContenedorBotones>
                </ComprobarUsuario>
                    <Informacion>
                        <Dato>
                        <Span>Celular</Span>
                        <Texto>{cli.celular}</Texto>
                        </Dato>
                        <Dato>
                        <Span>Correo</Span>
                        <Texto>{cli.correo}</Texto>
                        </Dato>
                    </Informacion>
                    <Informacion>
                        <Dato>
                        <Span>Direccion</Span>
                        <Texto>{cli.direccion}</Texto>
                        </Dato>
                        <Dato>
                        <Span>Ciudad</Span>
                        <Texto>{cli.ciudad}</Texto>
                        </Dato>
                    </Informacion>
                    <Informacion>
                        <Dato>
                        <Span>Documento</Span>
                        <Texto>{cli.documento}</Texto>
                        </Dato>
                        <Dato>
                        <Span>Fecha creacion</Span>
                        <Texto>{FormatearFecha(cli.fecha)}</Texto>
                        </Dato>
                    </Informacion>
                    <ErroresPorUsuario documento={cli.documento}/>
                    </div>
            );
        })}
        </>
     );
}


 
export default DatosCliente;