import styled from "styled-components";

export const TodoPageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  color: #333;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 80px;
  opacity: 0.5;
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;
