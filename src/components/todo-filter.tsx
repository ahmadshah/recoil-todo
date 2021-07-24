import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  filterOptions,
  todoFilter,
  todoItems
} from '../state';
import {
  Button,
  PageHeader,
  Radio,
  RadioChangeEvent
} from 'antd';

const TodoFilter = () => {
  const [currentFilter, setCurrentFilter] = useRecoilState(todoFilter);
  const resetTodoList = useResetRecoilState(todoItems);

  const handleOnChange = (e: RadioChangeEvent) => {
    setCurrentFilter(e.target.value);
  };

  return (
    <PageHeader
      extra={[
        <>
          <Radio.Group
            options={ filterOptions }
            value={ currentFilter }
            optionType="button"
            onChange={ handleOnChange }
          />
          <Button danger onClick={ resetTodoList }>Delete all</Button>
        </>
      ]}
    />
  );
};

export default TodoFilter;
