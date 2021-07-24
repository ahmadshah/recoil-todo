import { atom } from 'recoil';

export type Item = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const initialTodoItems: Item[] = [];

export const todoItems = atom({
  key: 'todoItems',
  default: initialTodoItems
});
