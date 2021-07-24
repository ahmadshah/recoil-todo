import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoItems, Item } from '../state';
import { Button, Input } from 'antd';
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
    <>
      <Input
        placeholder="What's on your mind"
        value={ formInputValue }
        onChange={ handleOnChange }
      />
      <Button type="primary" onClick={ addItem }>Add</Button>
    </>
  );
};

export default TodoForm;
