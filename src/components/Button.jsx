import React, { Component } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background: white;
  border: 2px solid black;
  color: black;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: white;
    background: black;
    color: white;
  }
`;

export default class Button extends Component {
  render() {
    return <StyledButton>Button</StyledButton>;
  }
}
