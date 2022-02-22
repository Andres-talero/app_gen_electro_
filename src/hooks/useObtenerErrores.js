import {useState, useEffect} from 'react';
import {db} from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy, limit, startAfter } from 'firebase/firestore';
import {useAuth} from '../contextos/AuthContext'

const useObtenerErrores = () => {

    const {usuario} = useAuth();
    const [errores, cambiarErrores] = useState([]);
    const [ultimoGasto, cambiarUltimoGasto] = useState(null);
    const [hayMasPorCargar, cambiarhayMasPorCargar] = useState(false);

    
    const obtenerMasErrores = () =>{

        const consultaMas = query(
            collection(db, 'errores'),
            orderBy('estado', 'desc'),
            limit(10),
            startAfter(ultimoGasto)
        );

         onSnapshot(consultaMas, (snapshot) => {
             //Tranferir data al estado
             if(snapshot.docs.length > 0){
                cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
                cambiarErrores(errores.concat(snapshot.docs.map((error) => {
                    return {...error.data(), id: error.id}
                })));
             }else{
                 cambiarhayMasPorCargar(false);
             }
            
        });
    }

    
    useEffect(() => {

    
        const consulta = query(
            collection(db, 'errores'),
            orderBy('estado', 'desc'),
            limit(10)
        );

        const unsuscribe = onSnapshot(consulta, { includeMetadataChanges: true }, (snapshot) => {

            if(snapshot.docs.length > 0){
                cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
                cambiarhayMasPorCargar(true);
            } else{
                cambiarhayMasPorCargar(false);
            }

             //Tranferir data al estado
             cambiarErrores(snapshot.docs.map((error) => {
                return {...error.data(), id: error.id}
            }));
        });

        return unsuscribe;


    }, [])




    return [errores, obtenerMasErrores, hayMasPorCargar];
}
 
export default useObtenerErrores;
