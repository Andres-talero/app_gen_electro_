import {useState, useEffect} from 'react';
import {db} from './../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy, limit, startAfter } from 'firebase/firestore';
import {useAuth} from '../contextos/AuthContext'

const useObtenerGastos = () => {

    const {usuario} = useAuth();
    const [clientes, cambiarClientes] = useState([]);
    const [ultimoGasto, cambiarUltimoGasto] = useState(null);
    const [hayMasPorCargar, cambiarhayMasPorCargar] = useState(false);

    
    const obtenerMasClientes = () =>{

        const consultaMas = query(
            collection(db, 'clientes'),
            orderBy('nombres', 'asc'),
            limit(10),
            startAfter(ultimoGasto)
        );

         onSnapshot(consultaMas, (snapshot) => {
             //Tranferir data al estado
             if(snapshot.docs.length > 0){
                cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
                cambiarClientes(clientes.concat(snapshot.docs.map((cliente) => {
                    return {...cliente.data(), id: cliente.id}
                })));
             }else{
                 cambiarhayMasPorCargar(false);
             }
            
        });
    }

    
    useEffect(() => {

    
        const consulta = query(
            collection(db, 'clientes'),
            orderBy('nombres', 'asc'),
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
             cambiarClientes(snapshot.docs.map((cliente) => {
                return {...cliente.data(), id: cliente.id}
            }));
        });

        return unsuscribe;


    }, [])




    return [clientes, obtenerMasClientes, hayMasPorCargar];
}
 
export default useObtenerGastos;
