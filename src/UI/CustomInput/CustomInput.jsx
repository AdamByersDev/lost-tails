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
  const formatErrorMessage = (msg) => {
    return msg
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

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
      {/* {!!error && <span className={styles.errorMessage}>Error: {error}</span>} */}
      {!!error && (
        <span className={styles.errorMessage}>{formatErrorMessage(error)}</span>
      )}
    </div>
  );
}
