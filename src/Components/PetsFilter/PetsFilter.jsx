import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import PetsFilterSelect from '@/Components/PetsFilterSelect';
import styles from './PetsFilter.module.css';

const filtersList = ['status', 'breed', 'color', 'size', 'gender', 'specie'];

export default function PetsFilter({ data, setter, resetData }) {
  const [defaultValue, setDefaultValue] = useState([]);

  const onClear = () => {
    resetData();
    setDefaultValue([]);
  };

  return (
    <aside className={styles.aside}>
      {filtersList.map((target) => (
        <PetsFilterSelect
          key={target}
          data={data}
          setter={setter}
          target={target}
          defaultValue={defaultValue}
        />
      ))}
      <div className={styles.control}>
        <Checkbox>Sort by date</Checkbox>
        <Button color="danger" variant="solid" onClick={onClear}>
          Clear Filter
        </Button>
      </div>
    </aside>
  );
}
