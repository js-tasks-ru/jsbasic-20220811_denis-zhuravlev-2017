function makeFriendsList(friends) {
  let ul = document.createElement('UL');
document.body.append(ul);
 friends.map(function(item, index){
  let li = document.createElement('LI');
  li.innerHTML = friends[index].firstName + " " + friends[index].lastName
  ul.append(li)
})
return ul
}
