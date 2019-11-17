var lengthOfLastWord = function(s) {
  if (s.length === 0){
      return 0;
  }
  let arr = s.split(" ");
  
  for (let i = arr.length - 1; i >= 0; i--){
      if (arr[i].length !== 0){
          console.log(arr[i].length);
          return arr[i].length;
      }
  }
  return 0;
};

//should output 5
lengthOfLastWord("Hello World");