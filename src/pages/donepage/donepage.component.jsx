import React from "react";
import DoneList from "../../components/done-list/done-list.component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, DonePageContainer, Title } from "./donepage.style";
const donePage = ({ done_items }) => {
  return (
    <DonePageContainer>
      <Title>Done</Title>
      <List>
        {done_items.map((done_item, index) => (
          <DoneList
            done_item={done_item}
            key={done_item.id}
            index={index + 1}
          />
        ))}
      </List>
      <Link to="/">See todo List</Link>
    </DonePageContainer>
  );
};

const mapStateToProps = ({ done }) => ({
  done_items: done.done_items
});

export default connect(mapStateToProps)(donePage);
