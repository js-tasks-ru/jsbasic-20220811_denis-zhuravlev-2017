function getMinMax(str) {
  let result = {};
  let number = str.match(/(-?\d+(\.\d+)?)/g).map(Number);
  result.min = Math.min(...number);
  result.max = Math.max(...number)
  return result
}
// пришлось гуглить