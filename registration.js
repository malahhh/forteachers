const button = document.querySelector("#regButton");

button.addEventListener("click", runScriptRegistration);

function registration(name, age, frequency){
  console.log("Регистрация начата", name, age, frequency)
  return {
    name,
    age,
    frequency,
  }
}

// Запрос данных о пользователе в функции runScriptRegistration потому что иначе не будет слушать кнопку
function runScriptRegistration(){
  let name = prompt("Ваше имя?")
  let age = prompt("Ваш возраст?")
  let frequency = prompt("Как часто хотите заниматься? Напишите количество раз в неделю. Например, 2")

  // Регистрация нового юзера по модели
  let newUser = registration(name, age, frequency)

  alert(`Новый пользователь: ${newUser.name}, возраст: ${newUser.age}`);

}


