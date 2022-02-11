import { db } from './../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

const agregarCliente = async({nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha, uidUsuario}) => {


    return await( 
            await addDoc(collection(db, 'clientes'), {
                nombres: nombres.toUpperCase(),
                apellidos: apellidos.toUpperCase(),
                documento: Number(documento),
                correo: correo,
                celular: Number(celular),
                direccion: direccion.toUpperCase(),
                ciudad: ciudad.toUpperCase(),
                fecha: fecha,
                usuario_creador: uidUsuario
            })
    );

}
 
export default agregarCliente;