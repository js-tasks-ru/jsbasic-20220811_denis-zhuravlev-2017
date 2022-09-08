// подсмотрел решение
function camelize(str) {
  let splitStr = str.split(`-`);
  let mapStr = splitStr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  joinStr = mapStr.join(``)
  return joinStr
}
