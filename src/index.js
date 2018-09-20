/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for(var i = 0; i < preferences.length-2; i++){
    if(preferences[preferences[i]-1] != preferences[i]){
      if(preferences[preferences[preferences[i]-1]-1] != preferences[preferences[i]-1]){
        if(preferences[preferences[preferences[i]-1]-1] === i+1){
          preferences[i] = 0;
          preferences[preferences[i]-1] = 0;
          preferences[preferences[preferences[i]-1]-1] = 0;
          count++;
        }
      }
    }
  }
  return count;
};
