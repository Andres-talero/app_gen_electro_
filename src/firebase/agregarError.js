import { db } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

const agregarCliente = async({titulo, descripcion, documento, estado, resultado, fecha, creador}) => {


    return await( 
            await addDoc(collection(db, 'errores'), {
                titulo: titulo.toUpperCase(),
                descripcion: descripcion.toUpperCase(),
                documentoCliente: Number(documento),
                estado: estado,
                resultado: resultado.toUpperCase(),
                fecha: fecha,
                creador: creador.toUpperCase()
            })
    );

}
 
export default agregarCliente;