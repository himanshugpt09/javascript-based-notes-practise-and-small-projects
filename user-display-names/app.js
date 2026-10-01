function formattedName (user){
    return `${user.first}, ${user.last}`;
}

const users = [
  { first: "Aditi", last: "Sharma" },
  { first: "Ravi", last: "Kumar" },
  { first: "Meera", last: "Iyer" },
];


console.log("---- Display Names ----");

const displayName = users.map(formattedName);
console.log(displayName);


console.log("\n---- Ranked List ----");

const ranked = users.map((user, index) => {
    return `${index + 1}. ${formattedName(user)}`;
});

console.log(ranked);

console.log("----Original array----");
console.log(users);