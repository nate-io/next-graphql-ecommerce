import styled from 'styled-components';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const fields = {
  name: '',
  price: 0,
  description: '',
  image: '',
};

const fieldTypes = {
  name: 'text',
  price: 'number',
  description: 'textarea',
  image: 'file',
};

const placeholders = {
  name: 'Enter a product name',
  price: 'How much does it cost?',
  description: 'Tell users what it is...',
};

const LabelStyles = styled.label`
  text-transform: capitalize;
`;

/**
 * Dynamically generate form fields based on passed config
 * @param {*} inputs to configure & return
 * @param {*} handler change handler (must accomodate text, number, file)
 * @returns React input fields
 */
const renderInputs = (inputs, handler) => {
  const keys = Object.keys(inputs);

  // determine on fly if value & placeholder need attached
  const addVariableAttributes = (key) => ({
    ...(fieldTypes[key] !== 'file' && {
      placeholder: placeholders[key],
      value: inputs[key],
    }),
  });

  return keys.map((key) => (
    <LabelStyles htmlFor={key} key={key}>
      {key}
      <input
        type={fieldTypes[key]}
        id={key}
        name={key}
        onChange={handler}
        {...addVariableAttributes(key)}
      />
    </LabelStyles>
  ));
};

export default function CreateProduct() {
  const { inputs, handleChange } = useForm(fields);

  return (
    <Form>
      <fieldset>
        {renderInputs(inputs, handleChange)}

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
