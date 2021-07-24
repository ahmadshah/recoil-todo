import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoItems, Item } from '../state';
import {
  Button,
  Form,
  Input
} from 'antd';
import { v4 as uuidV4 } from 'uuid';

const TodoForm = () => {
  const [formInputValue, setFormInputValue] = useState<string>('');
  const setTodoItems = useSetRecoilState(todoItems);

  const addItem = () => {
    setTodoItems((oldItems: Item[]) => [
      ...oldItems,
      {
        id: uuidV4(),
        title: formInputValue,
        isCompleted: false
      }
    ]);

    setFormInputValue('');
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormInputValue(e.currentTarget.value);
  };

  return (
    <Form
      name="todo_item"
      layout="inline"
    >
      <Form.Item>
        <Input
          placeholder="What's on your mind"
          value={ formInputValue }
          onChange={ handleOnChange }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={ addItem }>Add</Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
