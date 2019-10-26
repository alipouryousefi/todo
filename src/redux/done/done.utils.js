export const removeItem = (done_array, item) => {
  return done_array.filter(item_array => item_array.id !== item.id);
};
