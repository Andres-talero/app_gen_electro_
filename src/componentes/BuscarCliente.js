import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import BtnRegresar from './../elementos/BtnRegresar';
import useObtenerCliente from '../hooks/useObtenerClienteBuscado';
import { useParams } from 'react-router';
import DatosCliente from './DatosCliente';
import Boton from '../elementos/Boton';
import {Contenedor, ContenedorNoDatos, TextoPrincipal} from './../elementos/ElementosInformacion';

const BuscarCliente = () => {

    const {doc} = useParams();
    const [cliente] = useObtenerCliente(doc);

    return ( 
        <>
        <Helmet>
        <title>Cliente</title>
      </Helmet>
        <Header>
            <ContenedorHeader>
                <BtnRegresar ruta="/"/>
              <Titulo>Cliente</Titulo>
            </ContenedorHeader>
        </Header>
        <Contenedor>
        {cliente !== 'No hay concidencias' ?

        <DatosCliente cliente={cliente}/>
        
        : <ContenedorNoDatos>
            <TextoPrincipal>No hay datos del cliente especificado</TextoPrincipal>
            <Boton to="/crear-cliente">Crear Cliente</Boton>
        </ContenedorNoDatos>}

        </Contenedor>
        </>
     );
}

 
export default BuscarCliente;