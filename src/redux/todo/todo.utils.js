export const addItem = (todo_array, item) => {
  if (item.trim().length !== 0) {
    return [...todo_array, { item: item, id: Date.now() }];
  }
  return todo_array;
};

export const removeItem = (todo_array, item) => {
  return todo_array.filter(array_item => array_item.id !== item.id);
};

