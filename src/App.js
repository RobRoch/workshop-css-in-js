import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgb(255, 182, 0);
  border: 5px solid black;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
