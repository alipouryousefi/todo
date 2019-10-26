import React from "react";
import FormInput from "../../components/form/form.component";
import TodoList from "../../components/todo-list/todo-list.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Title, TodoPageContainer } from "./todopage.style";
const todoPage = ({ todo_items }) => {
  return (
    <TodoPageContainer>
      <Title>todo</Title>
      <FormInput />
      <List>
        {todo_items.map((todo_item, index) => (
          <TodoList
            todo_item={todo_item}
            key={todo_item.id}
            index={index + 1}
          />
        ))}
      </List>
      <Link to="/done">See Done List</Link>
    </TodoPageContainer>
  );
};

const mapStateToProps = ({ todo }) => ({
  todo_items: todo.todo_items
});

export default connect(mapStateToProps)(todoPage);
