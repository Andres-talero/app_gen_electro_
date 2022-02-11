import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import styled from 'styled-components';
 
const Busqueda = ({buscar, handleChange, handleSubmit}) => {


    return ( 
        <Formulario className="d-flex" onSubmit={handleSubmit}>
        <InputBus
            name="buscar"
          type="search"
          placeholder="Documento"
          className="me-2"
          aria-label="Search"
          autoComplete="off"
          value={buscar}
          onChange={handleChange}
        />
        <Button type="submit" value="Submit" variant="outline-success">Buscar</Button>
      </Formulario>
     );
}


const Formulario = styled(Form)`
  padding: 0 2.5rem ;
  margin-bottom: 1.3rem;
  @media(max-width: 60rem){ /* 950px */
      padding: 0 2.5rem ;
    }
`


const InputBus = styled(FormControl)`
    font-size: 1.2rem; /* 40px */
    text-transform: uppercase;
    border: 2px solid lightgrey;
    outline: none;
    border-radius: 1rem;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 35.2px */
    }
    
    @media(max-width: 30rem){ /* 475px */
        font-size: .8rem; /* 19.2px */
    }

    &:focus{
        border: 2px solid #82E0AA ;
    }
    

`;
 
export default Busqueda;