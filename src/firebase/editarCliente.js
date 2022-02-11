import { db } from './../firebase/firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore';


const editarCliente = async ({id, nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha}) => {

return await(

            await updateDoc(doc(db, 'clientes', id), {
                nombres: nombres.toUpperCase(),
                apellidos: apellidos.toUpperCase(),
                documento: Number(documento),
                correo: correo,
                celular: Number(celular),
                direccion: direccion.toUpperCase(),
                ciudad: ciudad.toUpperCase(),
                fecha: fecha
            })

);
}
 
export default editarCliente;