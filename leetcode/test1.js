function longestWord(str) {
  let arr = str.split(' ');
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    res.push(wordLength(arr[i]));
  }
  return Math.max(...res);
}

function wordLength(str) {

  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (!isWord(str[i])) {
      return 0;
    }
  }
  return len
}

function isWord(c) {
  if( c >= 'a' && c <='z' || c >= 'A' && c <= 'Z') {
    return true;
  }
  return false;
}

let str = "ab#c adfd aa0aa af&d";

console.log(longestWord(str));
