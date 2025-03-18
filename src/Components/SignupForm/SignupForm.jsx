import { message } from 'antd';
import { useNavigate } from 'react-router';
import useForm from '@/hooks/useForm';
import Button from '@/UI/Button';
import styles from './SignupForm.module.css';
import { registerUser } from '@/services/firebase';

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

    messageApi.success('Registration successful!');
    navigate('/');
  };

  return (
    <>
      {contextHolder}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formControl}>
            <label htmlFor="firstName">
              First Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={formError.firstName ? styles.errorInput : ''}
            />
            {!!formError.firstName && (
              <span className={styles.errorMessage}>{formError.firstName}</span>
            )}
          </div>
          <div className={styles.formControl}>
            <label htmlFor="lastName">
              Last Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={formError.lastName ? styles.errorInput : ''}
            />
            {!!formError.lastName && (
              <span className={styles.errorMessage}>{formError.lastName}</span>
            )}
          </div>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">
            Email address <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formError.email ? styles.errorInput : ''}
          />
          {!!formError.email && (
            <span className={styles.errorMessage}>{formError.email}</span>
          )}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="password">
            Password <span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formError.password ? styles.errorInput : ''}
          />
          {!!formError.password && (
            <span className={styles.errorMessage}>{formError.password}</span>
          )}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="confirmPassword">
            Confirm Password <span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formError.confirmPassword ? styles.errorInput : ''}
          />
          {!!formError.confirmPassword && (
            <span className={styles.errorMessage}>
              {formError.confirmPassword}
            </span>
          )}
        </div>
        <div className={styles.rememberControl}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheck}
            />
            I agree to the Terms & Privacy Policy
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.formSubmit} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
}
