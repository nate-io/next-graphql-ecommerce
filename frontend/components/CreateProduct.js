import styled from 'styled-components';
import useForm from '../lib/useForm';

const fields = {
  name: '',
  price: 0,
  description: '',
};

const fieldTypes = {
  name: 'text',
  price: 'number',
  description: 'text',
};

const LabelStyles = styled.label`
  text-transform: capitalize;
`;

const renderInputs = (inputs, handler) => {
  const keys = Object.keys(inputs);

  return keys.map((key) => (
    <LabelStyles htmlFor={key} key={key}>
      {key}
      <input
        type={fieldTypes[key]}
        id={key}
        name={key}
        placeholder={key}
        value={inputs[key]}
        onChange={handler}
      />
    </LabelStyles>
  ));
};

export default function CreateProduct() {
  const { inputs, handleChange, resetForm } = useForm(fields);

  return (
    <form>
      {renderInputs(inputs, handleChange)}
      <button type="button" onClick={resetForm}>
        Clear
      </button>
    </form>
  );
}
