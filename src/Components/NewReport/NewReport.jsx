import useForm from '@/hooks/useForm';
import Container from '@/UI/Container';
import CustomInput from '@/UI/CustomInput';
import { message, Radio } from 'antd';
import styles from './NewReport.module.css';
import Button from '@/UI/Button';
import LocationSelect from '../LocationSelect';
import { NEW_REPORT, COMPONENTS } from './data';
import CustomSelect from '@/UI/CustomSelect';
import UploadImage from '@/UI/UploadImage';
import { uploadImage } from '@/services/imgbb';

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
        picture: null,
        status: 'lost',
      },
      defaultFormError: { email: '', specie: '', location: '' },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasError = Object.values(formError).some((e) => e);

    if (hasError) {
      return message.error('This form has errors');
    }

    const pureBase64 = formData.picture && formData.picture.split(',')[1];

    const picture =
      pureBase64 &&
      (await uploadImage(pureBase64, formData.name || formData.specie));

    console.log({
      ...formData,
      location: formData.location.split(','),
      picture,
    });
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h1>Report a Pet</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          {NEW_REPORT.map(
            ({
              component,
              name,
              label,
              type,
              placeholder,
              options,
              required,
            }) => {
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
                      required={required}
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
                      required={required}
                      onBlur={() =>
                        handleBlur({
                          target: { value: formData[name], name },
                        })
                      }
                      error={formError[name]}
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
                      required={required}
                      onBlur={() =>
                        handleBlur({
                          target: { value: formData[name], name },
                        })
                      }
                      error={formError[name]}
                    />
                  );
                case COMPONENTS.radioGroup:
                  return (
                    <Radio.Group
                      block
                      key={name}
                      name={name}
                      options={options}
                      value={formData[name]}
                      onChange={handleChange}
                    />
                  );
                case COMPONENTS.uploadImage:
                  return (
                    <UploadImage
                      key={name}
                      name={name}
                      label={label}
                      imageUrl={formData[name]}
                      onChange={(val) => handleSelect(val, name)}
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
