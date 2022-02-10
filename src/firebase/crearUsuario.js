import { db } from './firebaseConfig'
// import { ref, set } from 'firebase/database';
import { setDoc, doc } from 'firebase/firestore';

const crearUsuario = (uid, nombre, correo, celular, rol) => {


    setDoc(doc(db, 'usuarios', uid), {
        nombre: nombre,
        correo: correo,
        celular: celular,
        rol: rol,
        uid: uid
    })

    // return ( 
    //     set(ref(db, 'usuarios/' + uid), {
    //         nombre: nombre,
    //         correo: correo,
    //         celular: celular,
    //         rol: 'Motorizado',
    //         uid: uid
    //     })
    // );
}
 
export default crearUsuario;