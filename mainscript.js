let bdUsers = []
let checkUser = (name) => {
  name = name || "Неизвестный";
  alert(`Привет, ${name}`);

};

checkUser(prompt("Твое имя?", "Саша"))
