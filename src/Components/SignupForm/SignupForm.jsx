import { message } from 'antd';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import useForm from '@/hooks/useForm';
import Button from '@/UI/Button';
import CustomInput from '@/UI/CustomInput';
import styles from './SignupForm.module.css';
import { registerUser } from '@/services/firebase';
import TermsModal from '@/Components/TermsModal';

export default function SignupForm() {
  const { formData, formError, handleChange, handleBlur, handleCheck } =
    useForm({
      defaultFormData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
      },
      defaultFormError: {},
    });

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      return messageApi.error('You must agree to the Terms & Privacy Policy.');
    }

    if (Object.values(formError).some((e) => e)) {
      return messageApi.error('This form has errors.');
    }

    const response = await registerUser(formData);

    if (!response.success) {
      return messageApi.error(response.message);
    }
  };

  return (
    <>
      {contextHolder}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <CustomInput
            label={
              <>
                First Name <span className={styles.required}>*</span>
              </>
            }
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.firstName}
          />
          <CustomInput
            label={
              <>
                Last Name <span className={styles.required}>*</span>
              </>
            }
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.lastName}
          />
        </div>
        <CustomInput
          label={
            <>
              Email address <span className={styles.required}>*</span>
            </>
          }
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
          label={
            <>
              Password <span className={styles.required}>*</span>
            </>
          }
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formError.password}
        />
        <CustomInput
          label={
            <>
              Confirm Password <span className={styles.required}>*</span>
            </>
          }
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formError.confirmPassword}
        />

        <div className={styles.rememberControl}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheck}
            />
            I agree to the{' '}
            <span
              className={styles.termsLink}
              onClick={() => setIsModalOpen(true)}
            >
              Terms & Privacy Policy
            </span>
          </label>
        </div>

        <TermsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <div className={styles.buttonContainer}>
          <Button className={styles.formSubmit} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
}
