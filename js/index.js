"use strict";

// Написать функцию, которая принимает строку и проверяет, является ли строка палиндромом, и в зависимости от этого возвращает ИСТИНУ или ЛОЖЬ. (https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC).
// Вход: строка str.
// Выход: true, если строка палиндром;
//              false, если строка не палиндром.
// Пример:
// -  Вход: 'tenet'
//    Выход: true.
// -  Вход: 'guest'
//    Выход: false.
// ** То же самое, но не принимать во внимание пробелы:
// Пример:
// -  Вход: 'а роза упала на лапу Азора'
//    Выход: true.

class Node {
  constructor(data, next) {
    this._data = data;
    this._next = next;
  }
}

class Stack {
  constructor(maxSize = 100) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }
  /**
   *
   * @param {*} value
   */
  push(value) {
    if (this._size === this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  pop() {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }
  }
  get peek() {
    return this._top?._data;
  }
  get isEmpty() {
    return this._size === 0;
  }
}

console.log(checkPalindrome("манил, а глаза лгали нам..."));

function checkPalindrome(str) {
  const spaceFreeStr = str.replace(/[^a-zа-яё]/gi, "");
  console.log(spaceFreeStr);
  const palindromeStack = new Stack();

  for (const s of spaceFreeStr) {
    if (spaceFreeStr.length <= Math.round(spaceFreeStr.length / 2)) {
      palindromeStack.push(s);
      console.log(palindromeStack.peek);
      continue;
    }
    console.log(s);
    console.log(palindromeStack.peek);
    palindromeStack.pop();
    if (s !== palindromeStack.peek) {
      return false;
    }
  }
  return true;
}

// альтернативное решение
// function checkPalindrome (str) {
//     return str === str.split('').reverse().join('');
//   }
