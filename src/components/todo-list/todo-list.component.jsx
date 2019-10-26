import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/todo/todo.action";
import { addItemToDone } from "../../redux/done/done.action";
import Button from "../buttons/buttons.component";
import { ListItem, Item, ItemNumber } from "./todo-list.style";
const todoList = ({ todo_item, index, removeItem, addItemToDone }) => (
  <ListItem>
    <ItemNumber>{index}</ItemNumber>
    <Item>{todo_item.item}</Item>
    <Button name="remove" onClick={() => removeItem(todo_item)} />

    <Button
      name="done"
      onClick={() => {
        addItemToDone(todo_item);
        removeItem(todo_item);
      }}
    />
  </ListItem>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItemToDone: item => dispatch(addItemToDone(item))
});

export default connect(
  null,
  mapDispatchToProps
)(todoList);
