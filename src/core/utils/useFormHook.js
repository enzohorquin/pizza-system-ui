import { useState } from 'react';

const useRegisterForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const resetForm = () => setInputs(initialValues);
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    resetForm,
  };
};
export default useRegisterForm;
