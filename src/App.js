import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
import Form from './components/Form';
import Table from './components/Table';
import Footer from './components/Footer';

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 4rem auto;
  color: rgb(77, 81, 86);
`;

const checkEmpty = (data) => {
  for (const i in data) {
    for (const j in data[i]) {
      for (const k in data[i][j]) {
        if (data[i][j][k] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

function App() {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    perfil_A: {
      1: {
        max: 0,
        min: 0,
      },
      2: {
        max: 0,
        min: 0,
      },
      3: {
        max: 0,
        min: 0,
      },
      4: {
        max: 0,
        min: 0,
      },
    },
    perfil_B: {
      1: {
        max: 0,
        min: 0,
      },
      2: {
        max: 0,
        min: 0,
      },
      3: {
        max: 0,
        min: 0,
      },
      4: {
        max: 0,
        min: 0,
      },
    },
    perfil_C: {
      1: {
        max: 0,
        min: 0,
      },
      2: {
        max: 0,
        min: 0,
      },
      3: {
        max: 0,
        min: 0,
      },
      4: {
        max: 0,
        min: 0,
      },
    },
  });

  let render = null;

  if (show) {
    if (loading) {
      render = (
        <div className="center">
          <Spinner animation="grow" />
        </div>
      );
    } else {
      if (isError) {
        render = (
          <p>
            Hubo un problema con el servidor. Intente de nuevo en unos minutos.
          </p>
        );
      } else {
        if (!checkEmpty(data)) {
          render = <Table data={data} />;
        } else {
          render = (
            <>
              <p>
                No se encontraron resultados para esa combinación de valores.
                <br />
                Esto puede suceder en casos de borde por los siguientes motivos:
              </p>
              <ul>
                <li>
                  Cualquier par de ruedas satisface la potencia a transmitir.
                </li>
                <li>
                  Ningun par de ruedas satisface la potencia a transmitir.
                </li>
                <li>La relacion de transmision es muy grande.</li>
              </ul>
              <p>Intente cambiando los valores.</p>
            </>
          );
        }
      }
    }
  }

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Form
          setData={setData}
          setShow={setShow}
          setLoading={setLoading}
          setIsError={setIsError}
          show={show}
          isError={isError}
        />
        {render}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
