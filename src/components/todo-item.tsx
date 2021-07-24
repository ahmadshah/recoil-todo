import React from 'react';
import { useRecoilState } from 'recoil';
import {
  Button,
  List,
  Switch
} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Item, todoItems } from '../state';

type TodoItemProps = {
  item: Item;
};

const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoItems);
  const todoItemIndex = todoList.findIndex((todo: Item) => todo.id === item.id);

  const toggleItemCompletion = () => {
    const newTodoItems = [
      ...todoList.slice(0, todoItemIndex),
      {
        ...item,
        isCompleted: !item.isCompleted
      },
      ...todoList.slice(todoItemIndex+1)
    ];

    setTodoList(newTodoItems);
  };

  const removeItem = () => {
    const newTodoItems = [...todoList.slice(0, todoItemIndex), ...todoList.slice(todoItemIndex+1)];

    setTodoList(newTodoItems);
  };

  return (
    <List.Item
      actions={[
        <>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={ item.isCompleted }
            onChange={ toggleItemCompletion }
          />
          <Button danger onClick={ removeItem }>Remove</Button>
        </>
      ]}
      key={ item.id }
    >
      { item.title }
    </List.Item>
  );
};

export default TodoItem;
