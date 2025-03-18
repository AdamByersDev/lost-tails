import { Select } from 'antd';
import usePetsFilterSelect from './usePetsFilterSelect';
import styles from './PetsFilterSelect.module.css';

export default function PetsFilterSelect({
  data,
  setter,
  defaultValue,
  target,
}) {
  const { handleChange, getOptions, selectValue } = usePetsFilterSelect(
    data,
    setter,
    defaultValue,
  );

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={target}>
        {target}
      </label>
      <Select
        value={selectValue}
        id={target}
        style={{
          width: 200,
        }}
        onChange={handleChange}
        options={getOptions(target)}
        placeholder={`Filter by ${target}`}
      />
    </div>
  );
}
