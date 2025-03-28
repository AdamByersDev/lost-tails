import useForm from '@/hooks/useForm';
import Container from '@/UI/Container';
import CustomInput from '@/UI/CustomInput';
import { Radio, Select } from 'antd';
import styles from './NewReport.module.css';
import Button from '@/UI/Button';
import LocationSelect from '../LocationSelect';

export default function NewReport() {
  const { formData, formError, handleChange, handleBlur } = useForm({
    defaultFormData: {
      name: '',
      location: [],
      email: '',
      specie: '',
      gender: '',
      breed: '',
      color: '',
      size: '',
      picture: '',
      status: '',
    },
    defaultFormError: { email: '' },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.section}>
      <Container>
        <h1>Report a Pet</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Radio.Group
            name="status"
            options={[
              { label: 'Lost', value: 'lost' },
              { label: 'Found', value: 'found' },
            ]}
          />
          <LocationSelect
            label="Nearest Address Last Seen"
            target="location"
            value={formData.location}
            handleSelect={handleChange}
          />
          <CustomInput
            label="Email address"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.email}
          />
          <CustomInput
            label="Pet Name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter pet name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.name}
          />
          <CustomInput
            label="Pet Breed"
            type="text"
            name="breed"
            id="breed"
            placeholder="Enter pet breed"
            value={formData.breed}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.breed}
          />
          <CustomInput
            label="Pet Colour"
            type="text"
            name="color"
            id="color"
            placeholder="Enter pet colour"
            value={formData.color}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.color}
          />
          <Select
            value={formData.size}
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
              { value: 'extra large', label: 'Extra Large' },
            ]}
            onChange={handleChange}
          />
          <Select
            value={formData.gender}
            options={[
              { value: 'female', label: 'Female' },
              { value: 'male', label: 'Male' },
            ]}
            onChange={handleChange}
          />
          <Select
            value={formData.specie}
            options={[
              { value: 'cat', label: 'Cat' },
              { value: 'dog', label: 'Dog' },
              { value: 'other', label: 'Other' },
            ]}
            onChange={handleChange}
          />
          <Button className={styles.submit} type="submit">
            Create
          </Button>
        </form>
      </Container>
    </section>
  );
}
