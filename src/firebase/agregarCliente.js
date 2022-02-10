import { dbRealT } from './firebaseConfig'
import { set, ref } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const agregarCliente = ({nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha, uidUsuario}) => {


    return ( 
            set(ref(dbRealT, 'clientes/' + uuidv4()), {
                nombres: nombres.toUpperCase(),
                apellidos: apellidos.toUpperCase(),
                documento: Number(documento),
                correo: correo.toUpperCase(),
                celular: Number(celular),
                direccion: direccion.toUpperCase(),
                ciudad: ciudad.toUpperCase(),
                fecha: fecha,
                usuario_creador: uidUsuario
            })
    );

}
 
export default agregarCliente;