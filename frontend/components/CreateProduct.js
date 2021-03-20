import useForm from '../lib/useForm';
import Form from './styles/Form';

const fields = {
  image: '',
  name: '',
  price: 0,
  description: '',
};

const placeholders = {
  name: 'Enter a product name',
  price: 'How much does it cost?',
  description: 'Tell users what it is...',
};

export default function CreateProduct() {
  const { inputs, handleChange } = useForm(fields);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder={placeholders.name}
            value={inputs.name}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            placeholder={placeholders.price}
            value={inputs.price}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder={placeholders.description}
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
