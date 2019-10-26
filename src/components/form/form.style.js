import styled from "styled-components";

export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 3px solid #333;
`;

export const Button = styled.button`
  color: #fff;
  display: block;
  width: 70px;
  height: 50px;
  border-radius: 5px;
  background: #333;
  &:hover {
    background: #6d6d6d;
  }
`;
