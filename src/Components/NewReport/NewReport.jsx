import useForm from '@/hooks/useForm';
import Container from '@/UI/Container';
import CustomInput from '@/UI/CustomInput';
import { Radio } from 'antd';
import styles from './NewReport.module.css';
import Button from '@/UI/Button';
import LocationSelect from '../LocationSelect';
import { NEW_REPORT, COMPONENTS } from './data';
import CustomSelect from '@/UI/CustomSelect';

export default function NewReport() {
  const { formData, formError, handleChange, handleBlur, handleSelect } =
    useForm({
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
        status: 'lost',
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
          {NEW_REPORT.map(
            ({ component, name, label, type, placeholder, options }) => {
              switch (component) {
                case COMPONENTS.input:
                  return (
                    <CustomInput
                      key={name}
                      label={label}
                      type={type}
                      name={name}
                      id={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={formError[name]}
                    />
                  );
                case COMPONENTS.select:
                  return (
                    <CustomSelect
                      key={name}
                      name={name}
                      label={label}
                      value={formData[name] || []}
                      handleChange={(val) => handleSelect(val, name)}
                      placeholder={placeholder}
                      options={options}
                      className={styles.select}
                    />
                  );
                case COMPONENTS.locationSelect:
                  return (
                    <LocationSelect
                      key={name}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      value={formData[name]}
                      handleChange={(val) => handleSelect(val, name)}
                    />
                  );
                case COMPONENTS.radioGroup:
                  return (
                    <Radio.Group
                      key={name}
                      name={name}
                      options={options}
                      value={formData[name]}
                      onChange={handleChange}
                    />
                  );
                default:
                  return null;
              }
            },
          )}
          <Button className={styles.submit} type="submit">
            Create
          </Button>
        </form>
      </Container>
    </section>
  );
}
