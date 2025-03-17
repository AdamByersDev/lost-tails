import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router';
import Button from '@/UI/Button';
import styles from './LoginForm.module.css';
import { login } from '@/services/firebase';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({ email: '', password: '' });
  const [hasSubmitError, setHasOnSubmitError] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;

    let error = '';

    const resolve = () => setFormError((prev) => ({ ...prev, [name]: error }));

    if (!value && !value.trim()) {
      error = name + ' is required!';
      return resolve();
    }

    const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === 'email' && !emailValidator.test(value)) {
      error = 'email is invalid!';
      return resolve();
    }

    if (name === 'password' && value.length < 8) {
      error = 'password at least 8 characters long!';
      return resolve();
    }

    return resolve();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = Object.values(formError).some((e) => e);

    if (hasError) {
      return messageApi.open({
        type: 'error',
        content: 'This form has errors',
      });
    }

    const { email, password } = formData;

    login(
      email,
      password,
      () => navigate('/'),
      () => setHasOnSubmitError(true),
    );
  };

  return (
    <>
      {contextHolder}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="name"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formError.email ? styles.errorInput : ''}
          />
          {!!formError.email && (
            <span className={styles.errorMessage}>
              Error: {formError.email}
            </span>
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
            <span className={styles.errorMessage}>
              Error: {formError.password}
            </span>
          )}
        </div>
        <div className={styles.rememberControl}>
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="javascript:void(0)">Forgot your password?</a>
        </div>
        <Button type="submit">Log In</Button>
        {hasSubmitError && (
          <span className={styles.errorSubmit}>
            Error: The username or password you entered is incorrect.
          </span>
        )}
      </form>
    </>
  );
}
