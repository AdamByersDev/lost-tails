import { Button, Checkbox } from 'antd';
import PetsFilterSelect from '@/Components/PetsFilterSelect';
import styles from './PetsFilter.module.css';
import usePetsFilter from '@/hooks/usePetsFilterSelect';

export default function PetsFilter({ data, setter }) {
  const {
    handleChangeFilter,
    handleClearFilter,
    getOptions,
    clearFilter,
    filter,
    filtersList,
  } = usePetsFilter({ data, setter });

  return (
    <aside className={styles.aside}>
      {filtersList.map((key) => (
        <PetsFilterSelect
          key={key}
          target={key}
          value={filter[key] || []}
          handleChangeFilter={handleChangeFilter}
          handleClearFilter={handleClearFilter}
          options={getOptions(key)}
        />
      ))}
      <div className={styles.control}>
        <Checkbox>Sort by date</Checkbox>
        <Button color="danger" variant="solid" onClick={clearFilter}>
          Clear Filter
        </Button>
      </div>
    </aside>
  );
}
