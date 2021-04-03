import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';
import { BsDashCircleFill } from "react-icons/bs";
import Input from '../Input';
import { getRandomNumberFloat } from '../../utils/utils';
import { Mineral } from '../../models/MineralInterest';

const StyledRow = styled(Row)`
  margin-top: 1%;
  margin-bottom: 2%;
`;

type MineralInterestProps = {
  mineralInterest: Mineral;
  onClick: (idCol: number) => void;
};

const MineralInterest: React.FC<MineralInterestProps> = ({ mineralInterest, onClick }) => {
  const { id, name, homeworld } = mineralInterest;

  return (
    <StyledRow key={id}>
      <Col>
        <Input type="text" value={name} />
      </Col>
      <Col>
        <Input type="number" endIcon="%" value={getRandomNumberFloat()} />
      </Col>
      <Col></Col>
      <Col>
        <Input type="text" value={homeworld} />
      </Col>
      <Col>
        <Button variant="outline-secondary" onClick={() => onClick(id)}><BsDashCircleFill /></Button>
      </Col>
    </StyledRow>
  );
};

export default MineralInterest;