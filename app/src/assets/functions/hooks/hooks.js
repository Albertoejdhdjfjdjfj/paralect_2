import { useState } from 'react';

export function useDisplay(display = false) {
  const [active, setActive] = useState(display);
  const handleActive = () => {
    setActive(!active);
  };
  return [active, handleActive];
}

export function useLocalStoragePagination(limit = 4, numPage = 1, arrayName = 'rated_movies') {
  const data = JSON.parse(localStorage.getItem(arrayName)) || [];
  const start = (numPage - 1) * limit;
  const end = start + limit;

  const [page, setPage] = useState(data.slice(start, end));

  const handlePage = (search, num) => {
    const start = (num - 1) * limit;
    const end = start + limit;
    const sortData = data.filter((movie) => movie.original_title.includes(search));
    setPage(sortData.slice(start, end));
  };

  return [page, handlePage];
}
