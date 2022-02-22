import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


const useObtenerError = (id) => {

    const [error, establecerError] = useState('');

    const navigate = useNavigate();


    useEffect(() => {

        const obtenerGasto = async() =>{

            const documento = await getDoc(doc(db, 'errores', id));

            if(documento.data()){
                establecerError(documento);
            } else {
                navigate(-1);
            }

        }

        obtenerGasto();


    }, [navigate, id])
  


    return [error];
}
 
export default useObtenerError;