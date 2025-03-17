import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '@/UI/Button';
import styles from './Login.module.css';
import GoogleIcon from '@/assets/images/google.svg';
import LoginForm from '@/Components/LoginForm';
import LoginAnimation from '@/assets/lottie/login-animation.json';

export default function Login() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container-responsive`}>
        <DotLottieReact
          data={LoginAnimation}
          loop
          autoplay
          className={styles.loginAnimation}
        />
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2>Every Tail Deserves a Happy Ending</h2>
            <p>
              Sign in to continue your journey in helping pets find their way
              home.
            </p>
          </div>
          <LoginForm />
          <div className={styles.separator}>Or</div>
          <Button variant="outline">
            <GoogleIcon />
            Continue with Google
          </Button>
          <div className={styles.createAccount}>
            Not a member | <span>Create an account</span>
          </div>
        </div>
      </div>
    </section>
  );
}
