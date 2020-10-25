const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let arr = [], arrNew = [], n = 0, str = '', strNew = '';
  
    for (let i = 0; i < expr.length / 10; i++) {
    arr[i] = expr.substr(n, 10);
    n +=10;
        }

arr.forEach(function(item, i) { 
  strNew = item.toString();
  str = strNew.replace(/11/g, '-');
  str1 = str.replace(/10/g, '.');
  str2 = str1.replace(/0/g, '');
  arr[i] = str2;
  if (item == '**********') {
  arr[i] = " ";
  }
});

let arrMorseKeys = Object.keys(MORSE_TABLE);
let arrMorseValues = Object.values(MORSE_TABLE); 

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") {
    arr[i] = " ";
  } else {
  arr[i] = arrMorseValues[arrMorseKeys.indexOf(arr[i])];
}}

let answer = arr.join('').toString();
return answer;
}

module.exports = {
    decode
}
