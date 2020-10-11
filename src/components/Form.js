import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './Field';
import Button from 'react-bootstrap/Button';

const modalData = {
  1: {
    title: 'Potencia Motor',
    body:
      'Ingrese la potencia a transmitir, en kw, de la rueda motora acoplada al motor eléctrico.',
  },
  2: {
    title: 'Velocidad Polea Motora',
    body:
      'Ingrese la velocidad, en rpm, de la rueda motora acoplada al motor eléctrico.',
  },
  3: {
    title: 'Relación de Transmisión',
    body: 'Ingrese la relacíon de transmisión adoptada para el par de ruedas.',
  },
  4: {
    title: 'Factor de Servicio',
    body:
      'Factor de mayoración que se aplica sobre la potencia a transmitir con el fin de contemplar el tipo de servicio al cual esté sometida la transmisión',
  },
};

const FormContainer = styled.div`
  border: 1px solid rgb(222, 226, 230);
  padding: 1rem 2rem;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  // text-decoration: underline;
  // text-decoration-thickness: 0.8px;
`;

const MyForm = ({ setData, setShow, setLoading, show }) => {
  return (
    <Formik
      initialValues={{
        potenciaMotor: '',
        velocidadPoleaMotora: '',
        relacTransmision: '',
        fServicio: '',
      }}
      validationSchema={Yup.object({
        potenciaMotor: Yup.number()
          .typeError('Ingrese un número')
          .min(0, 'Ingrese un número mayor a 0.')
          .max(30, 'Ingrese un número menor a 30.')
          .required('Ingrese un número'),
        velocidadPoleaMotora: Yup.number()
          .typeError('Ingrese un número')
          .min(720, 'Ingrese un número mayor a 720.')
          .max(2880, 'Ingrese un número menor a 2880.')
          .required('Ingrese un número'),
        relacTransmision: Yup.number()
          .typeError('Ingrese un número')
          .min(1, 'Ingrese un número mayor a 1.')
          .max(4, 'Ingrese un número menor a 4.')
          .required('Ingrese un número'),
        fServicio: Yup.number()
          .typeError('Ingrese un número')
          .min(1, 'Ingrese un número mayor a 1.')
          .max(3, 'Ingrese un número menor a 3.')
          .required('Ingrese un número'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        if (!show) {
          setShow(true);
        }
        setSubmitting(true);
        setLoading(true);
        const {
          potenciaMotor,
          velocidadPoleaMotora,
          relacTransmision,
          fServicio,
        } = values;
        try {
          const res = await axios.get(
            `https://poleas.herokuapp.com/api?potencia_motor=${potenciaMotor}&velocidad_polea_motora=${velocidadPoleaMotora}&relac_transmision=${relacTransmision}&fact_servicio=${fServicio}`
          );
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
        setSubmitting(false);
        setLoading(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <Title>Cálculo de Poleas Trapeciales</Title>
          <Form>
            <MyTextInput
              label="Potencia Motor"
              name="potenciaMotor"
              type="text"
              placeholder="Ingrese la potencia a transmitir"
              unit="kw"
              modal={modalData[1]}
            />
            <MyTextInput
              label="Velocidad Polea Motora"
              name="velocidadPoleaMotora"
              type="text"
              placeholder="Ingrese la velocidad de la polea motora"
              unit="rpm"
              modal={modalData[2]}
            />
            <MyTextInput
              label="Relación de Transmisión"
              name="relacTransmision"
              type="text"
              placeholder="Ingrese la relación de transmisión"
              modal={modalData[3]}
            />
            <MyTextInput
              label="Factor de Servicio"
              name="fServicio"
              type="text"
              placeholder="Ingrese el factor de servicio"
              modal={modalData[4]}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline-secondary"
            >
              Calcular
            </Button>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default MyForm;
