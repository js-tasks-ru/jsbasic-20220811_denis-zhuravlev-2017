let calculator = {
  read() {
    this.a = +prompt(`Введите А`);
    this.b = +prompt(`Введите B`);
  },
  sum() {
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  }
};
calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15




// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
