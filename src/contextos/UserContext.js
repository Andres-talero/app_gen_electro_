import React, { useContext, useState, useEffect } from 'react';
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc} from 'firebase/firestore';
import { useAuth } from './AuthContext';

//Creamos estado global
const UserContext = React.createContext();



// Hook para acceder al contexto

const useUser = () =>{
    return useContext(UserContext);
}


//proveedor del estado

const UserProvider = ({children}) => {

    const [datosUsuario, establecerDatosUsuario] = useState('');
    const [cargando, cambiarCargando] = useState(true);
    const {usuario} = useAuth();



    useEffect(() => {

        const obtenerGasto = async() =>{

            if(usuario){
                    const id = usuario.uid;
                    const documento = await getDoc(doc(db, 'usuarios', id));

                if(documento.data()){
                    establecerDatosUsuario({...documento.data(), id: documento.id});
                    cambiarCargando(false);
                }

            }else{
                cambiarCargando(false);
            }
            

        }



        obtenerGasto();


    }, [usuario])


    return ( 
        <UserContext.Provider value={{datosUsuario}}>
            {!cargando && children}
        </UserContext.Provider>
     );
}
 
export {UserProvider, UserContext, useUser};