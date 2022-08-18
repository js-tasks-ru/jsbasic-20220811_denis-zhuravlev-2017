/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
// function isValid(name) {
//   if (name.length < 4 || (name.indexOf(" ") != -1)){ ---------- старое решение
//     return false
//   } else {
//     return true
//   }
// }
function isValid(name) {
  if (name == null || name == undefined){
        return false
    }else if (name.length < 4){
        return false
    }else if ( name.includes(" ") == true){
        return false
    }else {
        return true
    }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
