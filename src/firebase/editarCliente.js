import { db } from './../firebase/firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore';


const editarCliente = async ({id, nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha}) => {

return await(

            await updateDoc(doc(db, 'clientes', id), {
                id: id,
                nombres: nombres,
                apellidos: apellidos,
                documento: documento,
                correo: correo,
                celular: celular,
                direccion: direccion,
                ciudad: ciudad,
                fecha: fecha
            })

);
}
 
export default editarCliente;