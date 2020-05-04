export const calculatePrice = (data, key) =>
  data.reduce((acc, item) => acc + item.quantity * parseFloat(item[key]), 0);

export const validate = (inputs) => {
  return inputs.street !== '' && inputs.street.length > 5;
};
