import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage

    setStoredValue(value);// ???in readmen says add after, but in exsample is first?
  };

  return [storedValue, setValue];
};
