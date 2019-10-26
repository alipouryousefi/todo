import styled from "styled-components";

export const Item = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 22px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemNumber = styled.label`
  width: 30px;
  height: 30px;
  border: 3px solid #333;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
