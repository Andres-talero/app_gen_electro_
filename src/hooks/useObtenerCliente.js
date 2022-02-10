import { useEffect, useState } from "react";
import { dbRealT } from "../firebase/firebaseConfig";
import { onValue, ref} from 'firebase/database';
import { useNavigate } from "react-router-dom";


const useObtenerCliente = (id) => {

    const [cliente, establecerCliente] = useState('');

    const navigate = useNavigate();


    useEffect(() => {

        const obtenerGasto = async() =>{


            const unsuscribe = await onValue(ref(dbRealT, 'clientes/' + id), (snapshot) => {
                if (snapshot.exists()) {
                    establecerCliente(snapshot.val());
                }else{
                    navigate('/lista');
                }
            });

            return unsuscribe;


        }

        obtenerGasto();


    }, [navigate, id])
  


    return [cliente];
}
 
export default useObtenerCliente;