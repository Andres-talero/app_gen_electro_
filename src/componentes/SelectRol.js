import React, {useState} from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {ReactComponent as IconoDown} from './../imagenes/down.svg'

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    margin-top: 1.3rem;
    position: relative;
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.2rem;
        height: 15rem; /* 80px */
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 60rem){ /* 950px */
        height: 5rem; /* 80px */
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;

    ::-webkit-scrollbar{
	transition: .3s ease all;
	width: 8.5px;
	background: rgba(125, 206, 160, 0.363);
    }

    ::-webkit-scrollbar-thumb{
	background: rgba(43, 161, 137, 0.6);
	border-radius: 8.5px;
    }
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

const SelectRol = ({rol, cambiarRol}) => {

    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    const categorias = [
        {id: 'Motorizado', texto: 'Motorizado'},
        {id: 'Agente', texto: 'Agente'},
        {id: 'Administrador', texto: 'Administrador'},
    ]

    const handleClick = (e) => {
        cambiarRol(e.target.dataset.valor);
    }

    return ( 
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{rol} <IconoDown /></OpcionSeleccionada>

           {mostrarSelect &&
            <Opciones>
                {categorias.map((categoria) => { 
                    return (
                        <Opcion key={categoria.id} data-valor={categoria.id} onClick={handleClick}>{categoria.texto}</Opcion>
                    );
                })}
            </Opciones>
           }

        </ContenedorSelect>
     );
}
 
export default SelectRol;