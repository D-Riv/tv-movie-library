import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  font-size: 30px;
  color: white;
  background-color: #e50914;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #ff0000;
  }
`;

const Button = (props) => {
  return (
    <div>
      <StyledButton>{props.label}</StyledButton>
    </div>
  );
};
export default Button;
