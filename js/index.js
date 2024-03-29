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

const palindrome = "Манил, а глаза лгали нам...";
console.log(`${palindrome} - палиндром? - ${checkPalindrome(palindrome)}`);

/**
 *
 * @param {String} str
 * @returns {Boolean}
 */
function checkPalindrome(str) {
  const preparedStr = deleteSignsSpacesUpperCases(str);
  console.log(preparedStr);
  const palindromeStack = new Stack();

  for (let i = 0; i < preparedStr.length / 2; i++) {
    palindromeStack.push(preparedStr[i]);
  }

  if (preparedStr.length % 2 !== 0) {
    palindromeStack.pop();
  }

  for (
    let i = Math.round(preparedStr.length / 2);
    i < preparedStr.length;
    i++
  ) {
    if (preparedStr[i] !== palindromeStack.peek) {
      return false;
    }
    palindromeStack.pop();
  }
  return true;
}

/**
 *
 * @param {String} str
 * @returns {String}
 */
function deleteSignsSpacesUpperCases(str) {
  return str.replace(/[^a-zа-яё0-9]/gi, "").toLowerCase();
}

// альтернативное решение
// function checkPalindrome (str) {
//     return str === str.split('').reverse().join('');
//   }
