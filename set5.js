function addStrings(str1, str2){
  str1 = removeLeadingZeros(str1);
  str2 = removeLeadingZeros(str2);
  if (hasDot(str1) && !hasDot(str2)){
    str2 += '.';
  }
  if (hasDot(str2) && !hasDot(str1)){
    str1 += '.';
  }

  if (hasDot(str1) && hasDot(str2)){
    let newStrings = padStrings(str1, str2);
    str1 = newStrings[0];
    str2 = newStrings[1];
  }

  let str1Index = str1.length - 1;
  let str2Index = str2.length - 1;
  let carry = 0;
  let ret = '';
  while (str1Index >= 0 || str2Index >= 0 || carry > 0){
    if (str1[str1Index] === '.' && str2[str2Index] === '.') {
      ret = '.' + ret;
      str1Index--;
      str2Index--;
      continue;
    }
    let digit1 = str1Index >= 0 ? str1[str1Index] - '0' : 0;
    let digit2 = str2Index >= 0 ? str2[str2Index] - '0' : 0;
    let digitSum = digit1 + digit2 + carry;
    let digit = digitSum % 10;
    digit += '';
    ret = digit + ret;
    carry = Math.floor(digitSum/10);
    str1Index--;
    str2Index--;
  }
  return ret;
}

function padStrings(str1, str2){
  let str1LeftCount = 0, str2LeftCount = 0, str1RightCount = 0, str2RightCount = 0;
  let str1DotIndex = 0, str2DotIndex = 0;
  let i = 0;
  while (str1[i] !== '.'){
    str1LeftCount++;
    i++;
  }
  str1DotIndex = i;
  i = 0;
  while (str2[i] !== '.'){
    str2LeftCount++;
    i++;
  }
  str2DotIndex = i;
  i = 0;

  while (str1DotIndex < str1.length){
    str1RightCount++;
    str1DotIndex++;
  }
  while (str2DotIndex < str2.length){
    str2RightCount++;
    str2DotIndex++;
  }

  while (str1RightCount < str2RightCount){
    str1 += '0';
    str1RightCount++;
  }
  while (str2RightCount < str1RightCount){
    str2 += '0';
    str2RightCount++;
  }

  while (str1LeftCount < str2LeftCount){
    str1 = '0' + str1;
    str1LeftCount++;
  }
  while (str2LeftCount < str1LeftCount){
    str2 = '0' + str2;
    str2LeftCount++;
  }
  return [str1, str2];
}

function hasDot(str){
  for (let i = 0; i < str.length; i++){
    if (str[i] === '.') return true;
  }
  return false;
}

function removeLeadingZeros(str){
  if (str === '0') return str;
  let i = 0;
  while (i < str.length && str[i] === '0'){
    str = str.substring(i+1, str.length);
  }
  return str;
}

console.log(addStrings('10.1','.9'));