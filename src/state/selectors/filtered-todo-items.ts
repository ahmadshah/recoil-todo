import { selector } from 'recoil';
import {
  todoFilter,
  TODO_ALL,
  TODO_COMPLETED,
  TODO_NEW
} from '../atoms/todo-filter';
import { todoItems, Item } from '../atoms/todo-items';

export const filteredTodoItems = selector({
  key: 'filteredTodoItems',
  get: ({ get }) => {
    const filterOption = get(todoFilter);
    const items = get(todoItems);

    switch (filterOption) {
      case TODO_COMPLETED:
        return items.filter((item: Item) => item.isCompleted);
      case TODO_NEW:
        return items.filter((item: Item) => !item.isCompleted);
      default:
        return items;
    }
  }
});
