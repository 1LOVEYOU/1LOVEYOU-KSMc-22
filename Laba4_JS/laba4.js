function createNewUser() {
    const firstName = prompt("Enter your name:");
    const lastName = prompt("Enter your last name:");
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin: function() {
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        }
    };
    return newUser;
}
const user = createNewUser();
console.log(user.getLogin());
