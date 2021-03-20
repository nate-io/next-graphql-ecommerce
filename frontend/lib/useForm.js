import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { name, type, value } = e.target;

    // handle different field types
    if (type === 'files') {
      value[0] = e.target.files;
    }

    if (type === 'number') {
      value = parseInt(value);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  return {
    inputs,
    handleChange,
    resetForm,
  };
}
