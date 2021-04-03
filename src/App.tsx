import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Challenge from './screens/Challenge';

const Wrapper = styled(Container)`
  margin-top: 5%;
`;

const App = () => {
  return (
    <Wrapper>
      <Challenge />
    </Wrapper>
  );
};

export default App;
