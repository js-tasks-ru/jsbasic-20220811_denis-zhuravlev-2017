function showSalary(users, age) {
    usersValid = [] 
     users.map(function(item, index){
         if (users[index].age <= age){ 
             usersValid.push(users[index].name + ", " + users[index].balance) 
         }

    })
    fullNames = usersValid.join("\n" ) 
    return fullNames
};