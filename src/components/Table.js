import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

const formatResult = (n, i) => {
  if (n === 0) {
    return null;
  } else {
    return (
      <>
        Ø<sub>{i}</sub> = {n} mm
      </>
    );
  }
};

const TableContainer = styled.div`
  min-width: 640px;
`;

const MyTable = ({ data }) => {
  return (
    <TableContainer>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Nº Correas</th>
            <th>Perfil A</th>
            <th>Perfil B</th>
            <th>Perfil C</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: '3rem' }}>
            <td className="align-middle">1</td>
            <td>
              <div className="center">
                {formatResult(data.perfil_A[1].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_A[1].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_B[1].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_B[1].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_C[1].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_C[1].max, 2)}
              </div>
            </td>
          </tr>
          <tr>
            <td className="align-middle">2</td>
            <td>
              <div className="center">
                {formatResult(data.perfil_A[2].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_A[2].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_B[2].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_B[2].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_C[2].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_C[2].max, 2)}
              </div>
            </td>
          </tr>
          <tr>
            <td className="align-middle">3</td>
            <td>
              <div className="center">
                {formatResult(data.perfil_A[3].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_A[3].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_B[3].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_B[3].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_C[3].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_C[3].max, 2)}
              </div>
            </td>
          </tr>
          <tr>
            <td className="align-middle">4</td>
            <td>
              <div className="center">
                {formatResult(data.perfil_A[4].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_A[4].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_B[4].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_B[4].max, 2)}
              </div>
            </td>
            <td>
              <div className="center">
                {formatResult(data.perfil_C[4].min, 1)}
              </div>
              <div className="center">
                {formatResult(data.perfil_C[4].max, 2)}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
