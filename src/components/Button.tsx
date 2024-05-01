import React from 'react';
import styled from "styled-components";

type ButtonType = {
    title:string;
    onclick:()=> void
    disabled?:boolean
}

export const Button = ({title, onclick, disabled}:ButtonType) => {

    return (
        <StyledButton onClick={onclick} disabled={disabled}>{title}</StyledButton>
    );
};

const StyledButton = styled.button`
  width: 100px;
  font-size: 20px;
  background-color: #279eea;
  border: 0;
  border-radius: 5px;

  &:active {
    opacity: 0.5
  }

  &:disabled {
    opacity: 0.5
  }

`

