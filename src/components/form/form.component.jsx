import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/todo/todo.action";
import {Form,Input,Button} from "./form.style"
const FormInput = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Form>
      <Input
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <Button
        onClick={() => {
          addItem(inputValue);
          setInputValue("");
        }}
      >
        Add
      </Button>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(FormInput);
