function registration(name, age, frequency){
  console.log("Регистрация начата", name, age, frequency)
  return {
    name,
    age,
    frequency,
  }
}


name = prompt("Ваше имя?")
age = prompt("Ваш возраст?")
frequency = prompt("Как часто хотите заниматься? Напишите количество раз в неделю. Например, 2")
let newUser = registration(name, age, frequency)