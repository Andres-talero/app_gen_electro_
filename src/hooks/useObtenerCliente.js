import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


const useObtenerCliente = (id) => {

    const [cliente, establecerCliente] = useState('');

    const navigate = useNavigate();


    useEffect(() => {

        const obtenerGasto = async() =>{

            const documento = await getDoc(doc(db, 'clientes', id));

            if(documento.data()){
                establecerCliente(documento);
            } else {
                navigate('/lista');
            }

        }

        obtenerGasto();


    }, [navigate, id])
  


    return [cliente];
}
 
export default useObtenerCliente;