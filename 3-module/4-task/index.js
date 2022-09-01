function showSalary(users, age) {
usersValid = [] // создаю пустой массив, чтобы в него потом вложить .map
 users.map(function(item, index){
     if (users[index].age >= age){ // проверка на возраст
         usersValid.push(users[index].name + " " + users[index].balance) // если возраст подходит, пушим в массив
     }
    
})
fullNames = usersValid.join(`, \n` ) // преобразование массива со всеми именами в строку
return fullNames
};

// не проходит тесты, в бразуере все ок