import React from "react";

import { Button } from "./button.style";

const button = ({ name, onClick }) => (
  <Button onClick={onClick} type={name}>{name}</Button>
);

export default button;
