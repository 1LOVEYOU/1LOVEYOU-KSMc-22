function createNewUser() {
    const firstName = prompt("Enter your name:");
    const lastName = prompt("Enter your last name:");
    const birthday = prompt("Enter your date of birth (dd.mm.yyyy):");
    const user = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getAge: function() {
            const birthDate = new Date(this.birthday.split('.').reverse().join('-'));
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        getPassword: function() {
            const firstLetter = this.firstName.charAt(0).toUpperCase();
            const lastNameLower = this.lastName.toLowerCase();
            const birthYear = this.birthday.split('.')[2];
            return firstLetter + lastNameLower + birthYear;
        }
    };
    return user;
}
const newUser = createNewUser();
console.log(`User age: ${newUser.getAge()}`);
console.log(`User password: ${newUser.getPassword()}`);
