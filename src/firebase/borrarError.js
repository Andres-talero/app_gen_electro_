import { db } from "./firebaseConfig"
import {doc, deleteDoc} from 'firebase/firestore'

const borrarError = async(id) => {


    try{
        await deleteDoc(doc(db, 'errores', id))
        } catch(error){
            console.log('Se presento el error:')
            console.log(error)
        }

}

export default borrarError;