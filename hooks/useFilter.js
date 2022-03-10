import { useState, useEffect } from 'react';
import { client } from 'client';

export const useFilter = (query, type) => {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (category) {
      client.fetch(query(category)).then((res) => {
        setData(res);
      });
    } else {
      setData(type);
    }
  }, [category, query, type]);

  return { data, category, setCategory };
};
