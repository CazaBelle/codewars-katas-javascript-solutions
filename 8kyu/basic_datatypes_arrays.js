
// 1. getLength(arr)    should return length of arr
// 2. getFirst(arr)     should return the first element of arr
// 3. getLast(arr)      should return the last element of arr
// 4. pushElement(arr)  should push an element to arr, and then return arr
// 5. popElement(arr)   should pop an element from arr, and then return arr



function getLength(arr){
  var a = arr.length
  return a
}
function getFirst(arr){
  var b = arr[0]
  return b
}
function getLast(arr){
  var c = arr[arr.length - 1]
  return c
}
function pushElement(arr){
  var el=1;
  arr.push(el)
  return arr
}
function popElement(arr){
  arr.pop()
  return arr
}