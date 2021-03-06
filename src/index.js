module.exports = function check(str, bracketsConfig) {
  //console.log('string: ' + str, 'config ' + bracketsConfig);
  str = str.split('');
  let arr = [];
    for (let j = 0; j < str.length; j++) {
      top:
      for (let i = 0; i < bracketsConfig.length; i++) {
        let leftBracket = (bracketsConfig[i][0]);
        let rightBracket = (bracketsConfig[i][1]);
        if (str[j] == rightBracket && arr.length == 0 && rightBracket != leftBracket) {
          return false;
        }
        if (arr[arr.length - 1] == leftBracket && str[j] == rightBracket) {
          if (arr.length == 0) return false; 
          else arr.pop();
          break top;
          }
        if (str[j] == leftBracket) {
          arr.push(str[j]);
          break top;
        }; 
      }  
    }
    //console.log('stack length at the end ' + arr.length);
  if (arr.length == 0) {
    return true;
  } else {
    return false;
  };
}