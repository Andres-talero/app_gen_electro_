import {HeaderErrores, Titulo} from '../elementos/Header';
import useObtenerErroresPorCliente from './../hooks/useObtenerErroresPorCliente';
import ErroresPorCliente from './ErroresPorCliente';
import Boton from '../elementos/Boton';
import {Contenedor, ContenedorNoDatos, TextoPrincipal} from '../elementos/ElementosInformacion';

const ErroresPorUsuario = ({documento}) => {

    const [errores] = useObtenerErroresPorCliente(documento);

    console.log(errores);

    return ( 
        <>
        <HeaderErrores>
              <Titulo>Errores</Titulo>
              <Boton to={`/crear-error/${documento}`}>Reportar Error</Boton>
        </HeaderErrores>
        <Contenedor>
        {errores !== 'No hay concidencias' ?

        <ErroresPorCliente errores={errores}/>
        
        : <ContenedorNoDatos>
            <TextoPrincipal>No hay errores del cliente especificado</TextoPrincipal>
        </ContenedorNoDatos>}

        </Contenedor>
        </>
     );
}

 
export default ErroresPorUsuario;