import { useArray, useMount } from "utils";

interface Person {
  name: string;
  age: number;
}

export const TryUseArrayTest = () => {
  const persons: Person[] = [
    { name: "张三", age: 18 },
    { name: "李四", age: 14 },
  ];
  const { value, clear, add, removeIndex } = useArray(persons);

  useMount(() => {
    // console.log(value.notExist);
    // add({name: '王五'});
    // removeIndex('123');
  });

  return (
    <div>
      <button onClick={() => add({ name: "王五", age: 20 })}>add</button>
      <button onClick={() => removeIndex(0)}>remove</button>
      <button onClick={() => clear()}>clear</button>

      {value.map((person, index) => (
        <div key={index}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
