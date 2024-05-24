import styled from "styled-components";
import {InputHTMLAttributes} from "react";

type InputWithSpan = InputHTMLAttributes<HTMLInputElement> & {
    title:string;
}


export const InputWithSpan = ({title, onChange, value}:InputWithSpan) => {
    return (
        <StyledCounterSpan>
            {title}
        <StyledInput onChange={onChange} value={value} type="number" />
        </StyledCounterSpan>
    );
};

const StyledCounterSpan = styled.span`
  font-size:25px;
`

const StyledInput = styled.input`
  border:0;
  border-radius:5px;
  padding:5px;
`