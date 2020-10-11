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

function App() {
  const [show, setShow] = useState(false);
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
      render = <Table data={data} />;
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
          show={show}
        />
        {render}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
