import styled from 'styled-components';

const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    align-items: start;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;


const ContenedorDatos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const ContenedorNoDatos = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
 
    @media(max-width: 60rem){ /* 950px */
        padding: 2rem 0;
    }
`;

const ContenedorError = styled.div`
    width: 100%;
    padding: 1rem 3rem;
    @media(max-width: 60rem){ /* 950px */
        padding: .5rem 2rem;
    }
`

const Informacion = styled.div`
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
    }
`;

const Dato = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 1rem 0;
`;


const TextoPrincipal = styled.p`
    text-transform: uppercase;
    padding: 0 .5rem;
    font-size: 2.5rem;
    @media (max-width: 60rem) { /*80px*/
        font-size: 1.5rem;
    }
`;

const Span = styled.span`
    font-size: 1.2rem;
    color: #929292;
    @media (max-width: 60rem) { /*80px*/
        font-size: 1rem;
    }
`;

const Texto = styled.p`
    font-size: 1.8rem;
    text-align: center;
    overflow-x: auto;
    @media (max-width: 60rem) { /*80px*/
        font-size: 1.3rem;
    }
`;

const TextoI = styled(Texto)`
    font-style: italic;
    font-weight: lighter;
`;

const Estado = styled.div`
    font-size: 1.5rem;
    border-radius: 0.31rem; /* 5px */
    background: #5CBAFF ;
    text-align: center;
    color: #fff;
    padding: 0.62rem 3.12rem; /* 10px 50px */
    display: inline-block;
    margin: 2rem 0; /* 20px */
    width: 25%;
 
    @media (max-width: 50rem) { /* 80px */
        width: 100%;
    }
`;

const ContenedorBotones = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
    }
`;

const BotonAccion = styled.button`
    background: ${(props) => props.primario ? '#2BA189' : props.danger ? '#C0392B' : props.secundario ? '#0097FF' : '#000'};
    width:  50%}; /* 250px */
    margin: 0.3rem; /* 10px */
    border: none;
    border-radius: 0.625rem}; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
 

    @media(max-width: 60rem){ /* 475px */
        font-size: 1rem; /* 19.2px */
        padding: .2rem 1rem; /* 20px 30px */
        height: 3rem; /* 60px */
        width: 100%;
    }
    :hover{
        color: white;
    }

`;

export {Contenedor, ContenedorDatos, ContenedorNoDatos, ContenedorError, Informacion, Dato, TextoPrincipal, Span, Texto, TextoI, Estado, ContenedorBotones, BotonAccion}