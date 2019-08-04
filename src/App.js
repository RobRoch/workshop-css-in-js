import React from 'react';
import styled from '@emotion/styled';
import { globalStyles } from './globalStyles';
import Button from './components/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${globalStyles.color.orange};
  border: ${globalStyles.border.thin} solid ${globalStyles.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

const CrazyBox = styled(Box)`
  border-radius: 20px;
  opacity: 0.7;
`;

function App() {
  return (
    <Container>
      <Button />
      <Box>
        <Button />
      </Box>
      <CrazyBox>
        <Button />
      </CrazyBox>
    </Container>
  );
}

export default App;
