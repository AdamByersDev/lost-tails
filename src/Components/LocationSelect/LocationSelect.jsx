import { Select, Spin } from 'antd';
import { useState } from 'react';
import debounce from 'debounce';
import { getCoordinatesFromAddress } from '@/services/nominatim';
import styles from './LocationSelect.module.css';

export default function LocationSelect({ label, target }) {
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);

  const [value, setValue] = useState([]);

  const fetchOptions = async (value) => {
    if (value && value.length > 4) {
      setFetching(true);
      const addressList = await getCoordinatesFromAddress(value);
      setOptions(addressList);
      setFetching(false);
    }
  };

  return (
    <div className={styles.control}>
      <label className={styles.label} htmlFor={target}>
        {label}
      </label>
      <Select
        value={value}
        filterOption={false}
        id={target}
        className={styles.select}
        onChange={(newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
        options={options}
        placeholder={`Enter ${target}`}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        onSearch={debounce(fetchOptions, 500)}
        showSearch
        labelInValue
        allowClear
      />
    </div>
  );
}
