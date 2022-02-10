import React, {useState, useEffect} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario'
import Boton from '../elementos/Boton';
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import agregarCliente from '../firebase/agregarCliente';
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';
import {useAuth} from './../contextos/AuthContext';
import Alerta from '../elementos/Alerta';
import { useNavigate } from 'react-router-dom';
import editarCliente from '../firebase/editarCliente';

const Formulariocliente = ({cliente, id}) => {


    const [nombres, cambiarnombres] = useState('');
    const [apellidos, cambiarapellidos] = useState('');
    const [correo, cambiarcorreo] = useState('');
    const [documento, cambiarDocumento] = useState('');
    const [celular, cambiarCelular] = useState('');
    const [direccion, cambiarDireccion] = useState('');
    const [ciudad, cambiarCiudad] = useState('');
    const [fecha, cambiarFecha] = useState(new Date());
    const {usuario} = useAuth();
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        //Comprobamos si ya hay algun cliente
        //De ser así establecemos los estados con estos valores
        if(cliente){
            //Comprobamos si el cliente es del usuario actual.
            //Comprobamos con el uid que tenemos guardado con el del uid del cliente
                cambiarnombres(cliente.nombres);
                cambiarapellidos(cliente.apellidos)
                cambiarDocumento(cliente.documento);
                cambiarcorreo(cliente.correo);
                cambiarCelular(cliente.celular);
                cambiarDireccion(cliente.direccion);
                cambiarCiudad(cliente.ciudad);
                cambiarFecha(cliente.fecha)
        }
    }, [cliente, usuario, navigate])

    const handleChange = (e) =>{

        switch(e.target.name){
            case "nombres":
                cambiarnombres(e.target.value.replace(/[^a-z.A-Z ]/g, ''));
            break;
            case "apellidos":
                cambiarapellidos(e.target.value.replace(/[^a-z.A-Z ]/g, ''));
            break;
            case "documento":
                cambiarDocumento(e.target.value.replace(/[^0-9.]/g, ''));
            break;
            case "correo":
                cambiarcorreo(e.target.value);
            break;
            case "direccion":
                cambiarDireccion(e.target.value);
            break;
            case "ciudad":
                cambiarCiudad(e.target.value);
            break;
            case "celular":
                const preCelular = e.target.value.replace(/[^0-9.]/g, '');
                cambiarCelular(preCelular.substr(0,10));
            break;
            default : 
            break;
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let cantidad = parseFloat(apellidos).toFixed(2);

        //Comprobamos el correo

        const expresionRegularCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if( !expresionRegularCorreo.test(correo) ){
          cambiarEstadoAlerta(true);
          cambiarAlerta({tipo: 'error', mensaje: 'Por favor ingresa un correo electronico valido'});
          return;
        }


        //Comprobamos que hayan valores en descripción y valor

        if(nombres !== '' && apellidos !== ''){

            if(cantidad){

                if(cliente){
                    editarCliente({
                        id: id,
                        nombres: nombres,
                        apellidos: apellidos,
                        documento: documento,
                        correo: correo,
                        celular: celular,
                        direccion: direccion,
                        ciudad: ciudad,
                        fecha: fecha
                    }).then(() =>{
                        navigate("/");
                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    agregarCliente({
                        nombres: nombres,
                        apellidos: apellidos,
                        documento: documento,
                        correo: correo,
                        celular: celular,
                        direccion: direccion,
                        ciudad: ciudad,
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                    .then(() => {
                        cambiarnombres('');
                        cambiarapellidos('');
                        cambiarDocumento('');
                        cambiarcorreo('');
                        cambiarCelular('');
                        cambiarDireccion('');
                        cambiarCiudad('');
                        cambiarFecha(new Date());
    
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'exito', mensaje: 'El cliente fue agregado correctamente.'});
                    })
                    .catch((error) => {
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({tipo: 'error', mensaje: 'Hubo un problema al agregar el cliente.'})
                    })
                }
            }else{
                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo: 'error', mensaje: 'El valor que ingresaste no es correcta.'});
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
                <Input 
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    autoComplete='off'
                    value={nombres}
                    onChange={handleChange}
                />
                <Input 
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    autoComplete='off'
                    value={apellidos}
                    onChange={handleChange}
                />
                <Input 
                    type="text"
                    name="documento"
                    placeholder="Documento"
                    autoComplete='off'
                    value={documento}
                    onChange={handleChange}
                />
                <Input 
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    autoComplete='off'
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type="text"
                    name="celular"
                    placeholder="Celular"
                    autoComplete='off'
                    value={celular}
                    onChange={handleChange}
                />
                <Input 
                    type="text"
                    name="direccion"
                    placeholder="Direccion"
                    autoComplete='off'
                    value={direccion}
                    onChange={handleChange}
                />
                 <Input 
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    autoComplete='off'
                    value={ciudad}
                    onChange={handleChange}
                />
               
            </div>
            <ContenedorBoton>
                <Boton as="button" primario conIcono>{cliente ? 'Editar cliente' : 'Agregar Cliente'} <IconoPlus /></Boton>
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
 
export default Formulariocliente;