import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    padding: 2rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
        padding: 1rem; /* 40px */
    }
`;

const HeaderErrores = styled.div`
    width: 100wv;
    padding: 3rem 10rem; /* 40px */
    margin: 3rem 3rem -1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    border-top: 2px dashed;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1rem;
        padding: 0 10rem; /* 40px */
        margin: 3rem 3rem -2rem 3rem;
    }
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 32px */
        margin-top: 1rem;
    }

    @media(max-width: 30rem){ /* 475px */
        font-size: 1.3rem; /* 19.2px */
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1rem;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
`;
 
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {Header, HeaderErrores, Titulo, ContenedorHeader, ContenedorBotones};