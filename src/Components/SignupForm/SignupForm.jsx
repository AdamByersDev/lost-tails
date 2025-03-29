import { message } from 'antd';
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
      defaultFormError: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    });

  const [messageApi, contextHolder] = message.useMessage();
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
            label="First Name"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.firstName}
            required
          />
          <CustomInput
            label="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={formError.lastName}
            required
          />
        </div>
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
          required
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formError.password}
          required
        />
        <CustomInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formError.confirmPassword}
          required
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
