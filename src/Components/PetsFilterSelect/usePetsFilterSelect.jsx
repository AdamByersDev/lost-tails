import { useEffect, useState } from 'react';

export default function usePetsFilter(data, setter, defaultValue) {
  const [selectValue, setSelectValue] = useState(defaultValue);

  useEffect(() => {
    setSelectValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (value, { target }) => {
    setter((prev) => prev.filter((pet) => pet[target] === value));
    setSelectValue(value);
  };

  const getOptions = (target) => {
    const values = data.reduce(
      (acc, cur) => (acc.includes(cur[target]) ? acc : [...acc, cur[target]]),
      [],
    );

    return values.map((value) => ({
      value,
      label: <span className="pets-filter-label">{value}</span>,
      target,
    }));
  };

  return { handleChange, getOptions, selectValue };
}
