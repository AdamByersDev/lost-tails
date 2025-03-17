import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  type = 'button',
  children,
}) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant] ?? styles.primary}`}
    >
      {children}
    </button>
  );
}
