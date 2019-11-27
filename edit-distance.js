//abcd
//bcde

//delete a
//insert e
//return 2

/*
  * a b c d
* 0 1 2 3 4 
b 1 1 1 2 3
c 2 2 2 1 2
d 3 3 3 2 1
e 4 4 4 3 2 
*/

//abc
//ybdc

/* ? = min (3, 2, 1) = min ()
  * a b c
* 0 1 2 3
y 1 1 2 3
b 2 2 1 2
d 3 3 2 2
c 4 4 3 2
*/

/*
  minEdit(str1, str2){
    arr = [str1.length+1][str2.length+1];
    fill top half * and chars of str1
    fill top left with * and chars of str2
    fill second top half with 0,1,2...
    fill second top left with 0,1,2,...
    compare curr char of str1 with curr char of str2
      if chars same insert into matrix, top left corner
      else 1+min(left, top left corner, top)
    return bot right corner matrix
  }
*/

function minEdit(str1, str2){
  let matrix = [str1.length+1][str2.length+1];
  for (let i = 0; i < str1.length; i++){
    matrix[0][i] = i;
  }
  for (let i = 0; i < str2.length; i++){
    matrix[i][0] = i;
  }
  for (let i = 1; i < str1.length + 1; i++){
    for (let j = 1; j < str2.length + 1; j++){
      if (str1[i-1] === str2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1];
      }
      else {
        let left = matrix[i-1][j];
        let topLeft = matrix[i-1][j-1];
        let top = matrix[i][j-1];
        matrix[i][j] = Math.min(left, topLeft, top);
      }
    }
  }
  return matrix[str1.length][str2.length];
}