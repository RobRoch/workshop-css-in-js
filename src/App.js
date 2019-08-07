import React from "react";
import styled from "@emotion/styled";
import { globalStyles } from "./globalStyles";
import Button from "./components/Button";
import { mq } from "./mq";

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
  ${mq({
    background: ["red", "green", globalStyles.color.orange]
  })}
`;

function App() {
  const isMyPreciousButton = true;
  return (
    <Container>
      <CrazyBox>
        <Button isMyPreciousButton={isMyPreciousButton} />
      </CrazyBox>
    </Container>
  );
}

export default App;
