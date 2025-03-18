import SignupForm from '@/Components/SignupForm';
import styles from './Signup.module.css';

export default function Signup() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <img
          src={catIllustration}
          alt="Cat playing with yarn"
          className={styles.signupAnimation}
        /> */}
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2>Join the Community – Help Pets Find Their Way Home!</h2>
            <span>
              Create an account to report lost pets, search for found pets, and
              adopt loving companions.
            </span>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
