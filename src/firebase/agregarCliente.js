import { db } from './../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

const agregarCliente = ({nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha, uidUsuario}) => {


    return ( 
            addDoc(collection(db, 'clientes'), {
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