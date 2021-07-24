import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoItems, Item } from '../state';
import { List } from 'antd';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

const TodoList = () => {
  const items = useRecoilValue(todoItems);

  return (
    <>
      <TodoForm />
      <List
        itemLayout="horizontal"
        dataSource={ items }
        renderItem={ (item: Item) => (
          <TodoItem item={ item } />
        )}
      />
    </>
  );
};

export default TodoList;
