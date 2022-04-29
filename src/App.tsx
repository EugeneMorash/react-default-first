import React from 'react';
import './App.css';

function App() {
  // Типизация:
  let test = "text";
  // test = 10;
  let num: number = 10;

  let start: null | number = null;
  start = 10;

  let counter: 0 | 1 | 2 = 0;
  counter = 2;

  let name: 'Peter' | 'noPeter' | null = null;
  name = 'Peter';

  console.log(name);
  console.log(counter);
  console.log(start);
  console.log(test);
  console.log(num);

  // * Типизация объектов
  type AddressType = {
    country: string
    city?: string // Необязательное поле
  }
  type UserType = {
    name: string
    age: number
    address: AddressType
  }

  const user: UserType = {
    name: 'Pavel',
    age: 30,
    address: {
      country: 'Russia',
      city: 'Moscow'
    }
  };

  console.log(user.address.city);

  // * Типизация массивов

  const arr: Array<number | string> = [1, 4, 6, 'str'];

  // const arr2: number[] = [1, 4, 6]; // ! Не будем использовать

  console.log(arr);
  // console.log(arr2);

  // * Типизация функций

  // Написать функцию, которая возвращает произведение трёх чисел

  function multi(a: number, b: number, c: number = 1): number {
    return a * b * c;
  }
  console.log(multi(3, 4));


  // AF

  const arrowMulti: (a: number, b: number, c: number) => void = (a, b, c) => {
    console.log(a * b * c);
  }
  arrowMulti(2, 5, 3);


  // Задачи
  // 1. Создать объект animal со следующими свойствами:
  // Кличка
  // Возраст
  // Есть ошейник нету
  // Адрес: объект с городом (необязательное), страной и улицой (необязательное)
  // Вывести объект в консоль

  type AddrType = {
    city?: string
    country: string
    street?: string
  }

  type AnimalType = {
    nickname: string
    age: number
    hasCollar: boolean
    address: AddrType
  }

  const animal: AnimalType = {
    nickname: "Nickname",
    age: 0,
    hasCollar: false,
    address: {
      city: "City",
      country: "Country",
      street: "Street"
    }
  }

  console.log(animal);


  // 2. Написать функцию, которая складывает 2 числа

  // 3. Написать функцию, на вход которой подаётся массив чисел, функция возвращает сумму всех чисел




  return (
    <div className="App">
      fdsfs
      {num}
    </div>
  );
}
export default App;
