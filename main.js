/*Завдання 1.

Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів).
 Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

Ось так повинен працювати наш клас:
const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31

За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.

----------------------------------------------------------------------------------*/

class Worker {
  constructor(firstName, secondName, rate, days) {
    this.name = firstName;
    this.surname = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31

// Створення двох робочих
const worker1 = new Worker("Ivan", "Ivanov", 10, 31);
const worker2 = new Worker("Petro", "Petrov", 12, 28);
const totalSalary = worker1.getSalary() + worker2.getSalary();
console.log("Сума зарплат обох робочих: " + totalSalary); // виведе 'Сума зарплат обох робочих: 646'

/*Завдання 2.

Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), 
який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), 
який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.
Наш клас повинен працювати так:

const str = new MyString();

console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

----------------------------------------------------------------------------------*/

class MyString {
  reverse(name) {
    return name.split("").reverse().join("");
  }
  ucFirst(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  ucWords(name) {
    const words = name.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }
}

str = new MyString();

console.log(str.reverse("IVAN")); //виведе 'NAVI'
console.log(str.ucFirst("arsenal")); //виведе 'Arsenal'
console.log(str.ucWords("arsenal arsenal arsenal")); //виведе 'Arsenal Arsenal Arsenal'

/*Завдання 2.
Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). 
Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина,
 які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.

----------------------------------------------------------------------------------*/

class CoffeeMake {
  constructor(coffeeVariety, water) {
    this.coffeeVariety = coffeeVariety;
    this.water = water;
  }
  on() {
    console.log("Кавоварка увімкнена.");
  }
  off() {
    console.log("Кавоварка вимкнена.");
  }
}

// Підклас для капельної кавоварки
class DripCoffeeMaker extends CoffeeMake {
  constructor(coffeeVariety, water, filter) {
    super(coffeeVariety, water); // Викликаємо конструктор базового класу
    this.filter = filter;
  }
  brew() {
    console.log("Приготовлення кави за допомогою капельної кавоварки.");
  }
}

const dripCoffeeMaker = new DripCoffeeMaker("Brasilia", "300ml", "metal");
console.log(dripCoffeeMaker);
console.log(`Вид кави: ${dripCoffeeMaker.coffeeVariety}`);
console.log(`Кількість води: ${dripCoffeeMaker.water}`);
console.log(`Фільтр: ${dripCoffeeMaker.filter}`);
dripCoffeeMaker.on();
dripCoffeeMaker.brew();
dripCoffeeMaker.off();

// Підклас для ріжкової кавоварки
class EspressoMachine extends CoffeeMake {
  constructor(coffeeVariety, water, filter) {
    super(coffeeVariety, water); // Викликаємо конструктор базового класу
    this.filter = filter;
  }
  makeEspresso() {
    console.log("Приготовлення еспресо за допомогою ріжкової кавоварки.");
  }
}

const espressoMachine = new EspressoMachine("Arabika", "300ml", "paper");
console.log(espressoMachine);
console.log(`Вид кави: ${espressoMachine.coffeeVariety}`);
console.log(`Кількість води: ${espressoMachine.water}`);
console.log(`Фільтр: ${espressoMachine.filter}`);
dripCoffeeMaker.on();
dripCoffeeMaker.brew();
dripCoffeeMaker.off();
espressoMachine.on();
espressoMachine.makeEspresso();
espressoMachine.off();

// Підклас для каво-машина
class CoffeeMachine extends CoffeeMake {
  constructor(coffeeVariety, water, filter) {
    super(coffeeVariety, water); // Викликаємо конструктор базового класу
    this.filter = filter;
  }
  makeCoffee() {
    console.log("Приготовлення кави за допомогою каво-машини.");
  }
}
const coffeeMachine = new CoffeeMachine("Robusta", "filtered water", "metal");
console.log(coffeeMachine);
console.log(`Вид кави: ${coffeeMachine.coffeeVariety}`);
console.log(`Кількість води: ${coffeeMachine.water}`);
console.log(`Фільтр: ${coffeeMachine.filter}`);

coffeeMachine.on();
coffeeMachine.makeCoffee();
coffeeMachine.off();
