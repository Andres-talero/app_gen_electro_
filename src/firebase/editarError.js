import { db } from './firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore';


const editarCliente = async ({id, titulo, descripcion, estado, resultado, fecha}) => {

return await(

            await updateDoc(doc(db, 'errores', id), {
                titulo: titulo.toUpperCase(),
                descripcion: descripcion.toUpperCase(),
                estado: estado,
                resultado: resultado.toUpperCase(),
                fecha: fecha
            })

);
}
 
export default editarCliente;