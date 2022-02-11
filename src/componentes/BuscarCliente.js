import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import BtnRegresar from './../elementos/BtnRegresar';
import useObtenerCliente from '../hooks/useObtenerClienteBuscado';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Boton from '../elementos/Boton';

const BuscarCliente = () => {

    const {doc} = useParams();
    const [cliente] = useObtenerCliente(doc);

    return ( 
        <>
        <Helmet>
        <title>Busqueda Cliente</title>
      </Helmet>
        <Header>
            <ContenedorHeader>
                <BtnRegresar ruta="/"/>
              <Titulo>Busqueda Cliente</Titulo>
            </ContenedorHeader>
        </Header>
        <Contenedor>
        {cliente !== 'No hay concidencias' ?

        <>
            {cliente.map((cli, index) =>{
                return(
                    <div key={index}>
                        <h1>{cli.nombres}</h1>
                    </div>
                );
            })}
        </>

        
        : <>
            <Texto>No hay datos del usuario especificado</Texto>
            <Boton to="/">Regresar a la lista</Boton>
        </>}

        </Contenedor>
        </>
     );
}

const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (max-width: 60rem) { /*80px*/
        font-size: 1rem;
        display: flex;
    }
`;

const Texto = styled.p`
    font-size: 3rem;
    @media (max-width: 60rem) { /*80px*/
        font-size: 1.5rem;
    }
`
 
export default BuscarCliente;