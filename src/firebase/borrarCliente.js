import { dbRealT } from "./firebaseConfig";
import { remove, ref, child} from 'firebase/database';


const borrarCliente = async(id) => {

    try{
        await remove(child(ref(dbRealT), `clientes/${id}`))
        } catch(error){
            console.log('Se presento el error:')
            console.log(error)
        }

}

export default borrarCliente;