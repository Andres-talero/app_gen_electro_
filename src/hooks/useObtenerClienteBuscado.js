import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, where, orderBy} from 'firebase/firestore';


const useObtenerCliente = (doc) => {

    const [cliente, establecerCliente] = useState([]);


    useEffect(() => {

        const consult = query(
            collection(db, 'clientes'),
            orderBy('nombres', 'desc'),
            where('documento', '==', doc)
        );

        const unsuscribe = onSnapshot(consult, { includeMetadataChanges: true }, (snapshot) => {
             //Tranferir data al estado
             if(snapshot.docs.length > 0){
                establecerCliente(snapshot.docs.map((cliente) => {
                    return {...cliente.data(), id: cliente.id}
                }));
             }else{
                establecerCliente('No hay concidencias');
             }

            
        });
        
        return unsuscribe;

    }, [doc])
  


    return [cliente];
}
 
export default useObtenerCliente;