return str.split(" ").map(
    function(a) {return a.split("").reverse().join("")}
   ).join(" ");
//1 Эта функция которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

function isIsogram(str){
    return !/(\w).*\1/i.test(str);//2  функция, которая определяет, является ли строка, содержащая только буквы, изограммой. 
  }

  function high(x){
    const words = x.split(' ');
    const alphabetMap = {};
    for (let i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
      alphabetMap[i] = j;
    }
    let highestScoringWord = { word: '', score: 0 };
    words.forEach(w => {
      const chars = w.split('');
      const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0);
      if (sumOfChars > highestScoringWord.score) {
        highestScoringWord = { word: w, score: sumOfChars };
      }
    });
  
    return highestScoringWord.word;
  }
/*3 Учитывая строку слов, вам нужно найти слово с наибольшим количеством баллов.

Каждая буква слова набирает очки в соответствии с ее положением в алфавите: и т.д.a = 1, b = 2, c = 3
Вам нужно вернуть слово с наивысшим результатом в виде строки.

Если два слова имеют одинаковый результат, верните слово, которое появляется раньше всего в исходной строке.

Все буквы будут строчными, и все входные данные будут действительными.*/

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
/*4 Завершите решение так, чтобы функция разбила
 camel case, используя пробел между словами.*/
