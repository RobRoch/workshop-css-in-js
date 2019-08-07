import React, { Component } from "react";
import styled from "@emotion/styled";
import { mq } from "../mq";

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${({ isActive }) => (isActive ? "transparent" : "white")};
  border: 2px solid black;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: white;
    background: ${({ isMyPreciousButton }) =>
      isMyPreciousButton ? "red" : "black"};
    ${({ isMyPreciousButton }) =>
      mq({
        color: [
          isMyPreciousButton ? "red" : "black",
          "green",
          isMyPreciousButton ? "orange" : "pink"
        ]
      })}
  }
`;

export default class Button extends Component {
  state = {
    isActive: false
  };
  onClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };
  render() {
    const { isActive } = this.state;
    const { isMyPreciousButton } = this.props;
    return (
      <StyledButton
        isMyPreciousButton={isMyPreciousButton}
        isActive={isActive}
        onClick={this.onClick}
      >
        Button
      </StyledButton>
    );
  }
}
