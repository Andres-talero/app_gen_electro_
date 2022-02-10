import { dbRealT } from './firebaseConfig'
import { update, ref, child} from 'firebase/database';

const editarCliente = async ({id, nombres, apellidos, documento, correo, celular, direccion, ciudad, fecha}) => {

return await(

            await update(child(ref(dbRealT), `clientes/${id}`), {
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