import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { BsDashCircleFill, BsArrowReturnRight } from "react-icons/bs";
import Input from '../Input';
import { getRandomNumberFloat } from '../../utils/utils';
import { Npri } from '../../models/Npri';

const StyledRow = styled(Row)`
  margin-bottom: 1%;
`;

type NPRIProps = {
  npri: Npri;
  onClick: (idCol: number) => void;
};

const NPRI: React.FC<NPRIProps> = ({ npri, onClick }) => {
  const { id, name } = npri;

  return (
    <StyledRow key={id}>
      <Col>
        <Row>
          <Col md={{ span: 2, offset: 1 }}><BsArrowReturnRight /></Col>
          <Col><Input type="text" value={name} /></Col>
        </Row>
      </Col>
      <Col></Col>
      <Col>
        <Input type="number" endIcon="%" value={getRandomNumberFloat()} />
      </Col>
      <Col></Col>
      <Col>
        <Button variant="outline-secondary" onClick={() => onClick(id)}><BsDashCircleFill /></Button>
      </Col>
    </StyledRow>
  );
};

export default NPRI;