import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  display: block;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background: ${props => props.type === 'remove' ? '#360202' : '#6b5edb'};
  &:hover {
    background: ${props => props.type === 'remove' ? '#a00a0a' : '#b6adff'};
  }
`;
