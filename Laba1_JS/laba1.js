let name, age;

do {
    name = prompt("Enter your name, please:", name || "Gari");
    age = prompt("Enter your age, please:", age || "42");
} while (!name || isNaN(age));

age = Number(age);

if (age < 18) {
    alert("You’re not allowed to visit this website");
} else if (age >= 18 && age <= 22) {
    let acception = confirm("Are you sure you want to continue?");
    if (acception) {
        alert("Welcome " + name);
    } else {
        alert("You are not allowed to visit this website");
    }
} else {
    alert("Welcome " + name);
}
