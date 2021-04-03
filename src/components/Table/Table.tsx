import React, { Children } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Title = styled(Col)`
  font-weight: bold;
  font-size: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: solid 1px #eaeaea;
  width: 100%;
`;

const BodyTable = styled.div`
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Table = ({ children }: any) => {
  return (
    <Container>
      <Row>
        <Title>Owner</Title>
        <Title>Mineral Interest</Title>
        <Title>NPRI</Title>
        <Title>Lease</Title>
        <Col></Col>
        <Divider />
      </Row>
      <BodyTable>
        {children}
      </BodyTable>
    </Container>
  );
};

export default Table;