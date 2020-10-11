import React, { useState } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Modal from './Modal';

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Label = styled.label`
  font-weight: 700;
  margin: 0;
`;

const Input = styled.input`
  border: 1px solid #d3d3d3;
  width: 100%;
  padding: 2px 8px;
`;

const Error = styled.div`
  margin-top: 8px;
  color: #ca0b00;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Units = styled.div`
  border: 1px solid #d3d3d3;
  background-color: #fff;
  margin-left: 8px;
  padding: 0 4px;
`;

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} handleClose={handleClose} modal={props.modal} />
      <FieldContainer>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
        >
          <AiOutlineInfoCircle
            className="icon"
            style={{ marginRight: 8 }}
            onClick={handleShow}
          />
          <Label htmlFor={props.id || props.name}>{label}</Label>
        </div>
        <InputContainer>
          <Input className="text-input" {...field} {...props} />
          {props.unit && <Units>{props.unit}</Units>}
        </InputContainer>
        {meta.touched && meta.error ? (
          <Error variant="primary" className="error">
            {meta.error}
          </Error>
        ) : null}
      </FieldContainer>
    </>
  );
};

export default MyTextInput;
