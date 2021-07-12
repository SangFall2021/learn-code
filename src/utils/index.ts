import { useState, useEffect } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const clearnObj = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export const useArray = <T>(array: T[]) => {
  const [value, setValue] = useState(array);

  const add = (obj: T) => {
    setValue([...value, obj]);
  };

  const removeIndex = (index: number) => {
    const assignValue = [...value];
    assignValue.splice(index, 1);
    setValue(assignValue);
  };

  const clear = () => setValue([]);

  return {
    value,
    setValue,
    clear,
    add,
    removeIndex,
  };
};
