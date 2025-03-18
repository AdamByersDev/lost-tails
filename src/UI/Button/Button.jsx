import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  onClick = () => {},
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant] ?? styles.primary} ${className}`}
    >
      {children}
    </button>
  );
}
