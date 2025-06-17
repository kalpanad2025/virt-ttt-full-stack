var people = [
    { name12: "Nila", birthdate: "1990-06-1" },
    { name12: "Kalpana", birthdate: "1985-06-15" },
    { name12: "Sathyaraj", birthdate: "1992-12-01" },
    { name12: "Sai", birthdate: "2025-06-17" },
    { name12: "Shiny", birthdate: "2025-06-17" },
];
// Get today's month and day
var today = new Date();
var todayMonth = today.getMonth(); // 0-based month
var todayDate = today.getDate();
var birthdayMessages = people
    .filter(function (person) {
    var birthDateObj = new Date(person.birthdate);
    return (birthDateObj.getMonth() === todayMonth &&
        birthDateObj.getDate() === todayDate);
})
    .map(function (person) { return "Today is ".concat(person.name12, "'s birthday!"); });
if (birthdayMessages.length === 0) {
    console.log("No birthdays today.");
}
else {
    console.log(birthdayMessages.join("\n"));
}