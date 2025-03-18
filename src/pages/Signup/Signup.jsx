import SignupForm from '@/Components/SignupForm';
import styles from './Signup.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SignupAnimation from '@/assets/lottie/signup-animation.json';

export default function Signup() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.container} container-responsive`}>
          <DotLottieReact
            data={SignupAnimation}
            loop
            autoplay
            className={styles.signupAnimation}
          />
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Join the Community – Help Pets Find Their Way Home!</h2>
              <p>
                Create an account to report lost pets, search for found pets,
                and adopt loving companions.
              </p>
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
