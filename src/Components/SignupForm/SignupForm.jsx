import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router';
import Button from '@/UI/Button';
import styles from './SignupForm.module.css';
import { registerUser } from '@/services/firebase';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [formError, setFormError] = useState({});
  const [hasSubmitError, setHasSubmitError] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    const resolve = () => setFormError((prev) => ({ ...prev, [name]: error }));

    if (!value.trim()) {
      error = `${name.replace(/([A-Z])/g, ' $1')} is required!`;
      return resolve();
    }

    if (name === 'email') {
      const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailValidator.test(value)) {
        error = 'Invalid email format!';
        return resolve();
      }
    }

    if (name === 'password' && value.length < 8) {
      error = 'Password must be at least 8 characters!';
      return resolve();
    }

    if (name === 'confirmPassword' && value !== formData.password) {
      error = 'Passwords do not match!';
      return resolve();
    }

    return resolve();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      return messageApi.error('You must agree to the Terms & Privacy Policy.');
    }

    if (Object.values(formError).some((e) => e)) {
      return messageApi.error('This form has errors.');
    }

    try {
      await registerUser(formData);
      messageApi.success('Registration successful!');
      navigate('/');
    } catch {
      setHasSubmitError(true);
    }
  };

  return (
    <>
      {contextHolder}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formControl}>
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
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
          <label htmlFor="email">Email address</label>
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
          <label htmlFor="password">Password</label>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
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
              onChange={handleChange}
            />
            I agree to the Terms & Privacy Policy
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit">Sign Up</Button>
          {hasSubmitError && (
            <span className={styles.errorSubmit}>
              Error: Registration failed. Please try again.
            </span>
          )}
          <p>Or</p>
          <Button type="button" className={styles.socialButton}>
            Sign up with Apple
          </Button>
          <Button type="button" className={styles.socialButton}>
            Sign up with Google
          </Button>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </form>
    </>
  );
}
