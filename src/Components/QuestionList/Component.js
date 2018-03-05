import React from 'react';
import styled from 'styled-components';
import Button from "../Buttons/Button/index";
import QuestionItem from "../QuestionItem/Component";


const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const QuestionList = ({ questions, onIncreaseLimit }) => (
  <React.Fragment>
    <h2>Users ask: ({questions.length})</h2>

    <List>
      {questions.length > 0 ?
        questions.map(question => (
          <QuestionItem key={question._id} question={question} />
        )) : (
          <li>No items found</li>
        )
      }
    </List>

    <Button onClick={onIncreaseLimit}>More</Button>
  </React.Fragment>
);

export default QuestionList;
