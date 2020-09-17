import React from 'react';
import TodoContainer from '../TodoContainer';

export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const NormalTodoContainer = () => <TodoContainer todos={["learn react", "clear bills", "Do the homework"]}/>
