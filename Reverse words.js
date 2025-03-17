export function reverseWords(str) {
    return str
      .split(' ') // Разделяем строку по пробелам на отдельные слова
      .map(word => word.split('').reverse().join('')) // Реверсируем каждое слово
      .join(' '); // Собираем слова обратно в строку с пробелами
  }
  
