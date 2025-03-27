import { Select } from 'antd';
import styles from './PetsFilterSelect.module.css';

export default function PetsFilterSelect({
  value,
  target,
  handleChangeFilter,
  handleClearFilter,
  options,
}) {
  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={target}>
        {target}
      </label>
      <Select
        value={value}
        id={target}
        style={{
          width: 200,
        }}
        onChange={handleChangeFilter}
        options={options}
        placeholder={`Filter by ${target}`}
        allowClear
        onClear={() => handleClearFilter(target)}
      />
    </div>
  );
}
