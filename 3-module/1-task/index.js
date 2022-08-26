function namify(users) {
  let usersNames = [];
  let usersLength = users.length;
    for (let usersSum = 0; usersSum < usersLength; usersSum++){
    usersNames.push(users[usersSum].name);
}
    return usersNames;
}
