export const calculatePrice = (data, key) =>
  data.reduce((acc, item) => acc + item.quantity * parseFloat(item[key]), 0);

export const validate = (inputs) => {
  return inputs.street !== '' && inputs.street.length > 5;
};

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const formatDate = (value) => {
  return new Date(value).toISOString().slice(0, 10).replace('T', ' ');
};
