import styles from './CustomInput.module.css';

export default function CustomInput({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? styles.errorInput : ''}
      />
      {!!error && <span className={styles.errorMessage}>Error: {error}</span>}
    </div>
  );
}
