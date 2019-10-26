import React from "react";
import { connect } from "react-redux";
import { undoItem } from "../../redux/todo/todo.action";
import { removeItemFromDone } from "../../redux/done/done.action";
import Button from "../buttons/buttons.component";
import { ListItem, ItemNumber, Item } from "../todo-list/todo-list.style";
const todoList = ({ done_item, index, removeItemFromDone, undoItem }) => (
  <ListItem>
    <ItemNumber>{index}</ItemNumber>
    <Item>{done_item.item}</Item>
    <Button name="remove" onClick={() => removeItemFromDone(done_item)} />

    <Button
      name="undo"
      onClick={() => {
        undoItem(done_item);
        removeItemFromDone(done_item);
      }}
    />
  </ListItem>
);

const mapDispatchToProps = dispatch => ({
  removeItemFromDone: item => dispatch(removeItemFromDone(item)),
  undoItem: item => dispatch(undoItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(todoList);
