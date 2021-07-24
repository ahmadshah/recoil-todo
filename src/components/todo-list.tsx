import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoItems, Item } from '../state';
import {
  Col,
  List,
  Row
} from 'antd';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

const TodoList = () => {
  const items = useRecoilValue(filteredTodoItems);

  return (
    <Row>
      <Col span={24}>
        <TodoForm />
      </Col>
      <Col span={24}>
        <List
         itemLayout="horizontal"
          dataSource={ items }
          renderItem={ (item: Item) => (
            <TodoItem item={ item } />
          )}
        />
      </Col>
    </Row>
  );
};

export default TodoList;
