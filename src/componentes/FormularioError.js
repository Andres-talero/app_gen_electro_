import React, {useState, useEffect} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, InputItalic, ContenedorBoton} from '../elementos/ElementosDeFormulario'
import Boton from '../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import agregarError from '../firebase/agregarError';
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';
import {useUser} from '../contextos/UserContext';
import Alerta from '../elementos/Alerta';
import { useNavigate } from 'react-router-dom';
import editarError from '../firebase/editarError';
import { useParams } from 'react-router';
import SelectEstado from './SelectEstado';

const FormularioError = ({error}) => {


    const [titulo, cambiarTitulo] = useState('');
    const [descripcion, cambiarDescripcion] = useState('');
    const [estado, cambiarEstado] = useState('Pendiente');
    const [fecha, cambiarFecha] = useState(new Date());
    const [resultado, cambiarResultado] = useState('Aun no se ha procedido...');
    const {datosUsuario} = useUser();
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});
    let estadoFinal = '';
    const navigate = useNavigate();

    const {doc} = useParams();
    
    useEffect(() => {
        //Comprobamos si ya hay algun cliente
        //De ser así establecemos los estados con estos valores
        if(error){
            //Comprobamos si el cliente es del usuario actual.
            //Comprobamos con el uid que tenemos guardado con el del uid del cliente
            if(error.data().estado === true){
                cambiarEstado('Pendiente');
             } else if(error.data().estado === false){
                cambiarEstado('Completado');
             }

                cambiarTitulo(error.data().titulo);
                cambiarDescripcion(error.data().descripcion)
                cambiarResultado(error.data().resultado);
                cambiarFecha(error.data().fecha)
        }
    }, [error, navigate])

    const handleChange = (e) =>{

        switch(e.target.name){
            case "titulo":
                cambiarTitulo(e.target.value);
            break;
            case "descripcion":
                cambiarDescripcion(e.target.value);
            break;
            case "estado":
                cambiarEstado(e.target.value);
            break;
            case "resultado":
                cambiarResultado(e.target.value);
            break;
            default : 
            break;
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Comprobamos que hayan valores en descripción y valor

        if(titulo !== '' && descripcion !== ''){

            if(estado === 'Pendiente'){
               estadoFinal = true;
            } else if(estado === 'Completado'){
                estadoFinal = false;
            }

                if(error){
                    editarError({
                        id: error.id,
                        titulo: titulo,
                        descripcion: descripcion,
                        estado: estadoFinal,
                        resultado: resultado,
                        fecha: getUnixTime(fecha),
                    })
                        navigate(-1);

                } else {

                    agregarError({
                        titulo: titulo,
                        descripcion: descripcion,
                        documento: doc,
                        estado: estadoFinal,
                        resultado: resultado,
                        fecha: getUnixTime(fecha),
                        creador: datosUsuario.nombre
                    })

                        cambiarTitulo('');
                        cambiarDescripcion('');
                        cambiarEstado('');
                        cambiarResultado('');
                        cambiarFecha(new Date());
    
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'exito', mensaje: 'El error fue agregado correctamente.'});
                }

            
        } else{
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellena todos los campos.'});

        }
    }

    return ( 
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                {/* <Selectcorreos correo={correo} cambiarcorreo={cambiarcorreo}/>
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha}/> */}
            </ContenedorFiltros>

            <div>
                <InputGrande
                    type="text"
                    name="titulo"
                    placeholder="Titulo"
                    autoComplete='off'
                    value={titulo}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    autoComplete='off'
                    value={descripcion}
                    onChange={handleChange}
                />
                {error ? 
                <>
                     <InputItalic
                    type="text"
                    name="resultado"
                    placeholder="Resultado"
                    autoComplete='off'
                    value={resultado}
                    onChange={handleChange}
                    />

                    <SelectEstado estado={estado} cambiarEstado={cambiarEstado}/>
                </> : <></>}

               
            </div>
            <ContenedorBoton>
                <Boton as="button" primario conIcono>{error ? 'Editar error' : 'Agregar error'} <IconoPlus /></Boton>
            </ContenedorBoton>
            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />

        </Formulario>
     );
}
 
export default FormularioError;