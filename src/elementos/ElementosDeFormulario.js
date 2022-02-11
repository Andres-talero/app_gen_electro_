import styled from "styled-components";
import theme from './../theme'

const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Formulario = styled.form`
    padding: 0 3rem; /* 40px */
    margin-bottom: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 1rem;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        /* justify-content: start; */
    }
`;
 
const Input = styled.input`
    font-size: 1.5rem; /* 40px */
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro};
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.3rem; /* 35.2px */
    }
    
    @media(max-width: 30rem){ /* 475px */
        font-size: 1.2rem; /* 19.2px */
    }

    &:focus{
        border-bottom: 2px solid #82E0AA ;
    }

`;
 
const InputGrande = styled(Input)`
    font-size: 3.5rem; /* 60px */
    font-weight: bold;
    @media(max-width: 30rem){ /* 475px */
        font-size: 2.2rem; /* 19.2px */
    }
`;
 
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */
`;

export {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton};