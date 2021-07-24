import { atom } from 'recoil';

type Filter = {
  label: string;
  value: string;
};

export const TODO_ALL = 'all';
export const TODO_COMPLETED = 'completed';
export const TODO_NEW = 'new';

export const filterOptions: Filter[] = [
  { label: 'All', value: TODO_ALL },
  { label: 'Completed', value: TODO_COMPLETED  },
  { label: 'New', value: TODO_NEW }
];

export const todoFilter = atom({
  key: 'todoFilter',
  default: TODO_ALL
});
