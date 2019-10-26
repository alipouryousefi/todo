import React from "react";
import { ButtonDone, ButtonRemove } from "./button.style";
const button = ({ name, onClick }) =>
  name === "remove" ? (
    <ButtonRemove onClick={onClick}>Remove</ButtonRemove>
  ) : (
    <ButtonDone onClick={onClick}>{name}</ButtonDone>
  );

export default button;
