import { useState } from 'react';

export function useDisplay(display = false) {
  const [active, setActive] = useState(display);
  const handleActive = () => {
    setActive(!active);
  };
  return [active, handleActive];
}
