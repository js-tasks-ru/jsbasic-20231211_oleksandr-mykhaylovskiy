function showSalary(users, age) {
  return users
    .filter((user) => user.age<=age)
    .map((filteredUser, index, array) => index+1 === array.length ? `${filteredUser.name}, ${filteredUser.balance}` : `${filteredUser.name}, ${filteredUser.balance}\n`)
    .join("");
}
