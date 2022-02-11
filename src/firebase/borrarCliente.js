import { db } from "./firebaseConfig"
import {doc, deleteDoc} from 'firebase/firestore'

const borrarCliente = async(id) => {


    try{
        await deleteDoc(doc(db, 'clientes', id))
        } catch(error){
            console.log('Se presento el error:')
            console.log(error)
        }

}

export default borrarCliente;