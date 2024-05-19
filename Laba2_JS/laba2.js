const isInteger = (num) => {
    return Number.isInteger(num);
  };
  const getUserNumber = () => {
    let input;
    do {
      input = prompt("Enter a number, please:", "50");
      if (!input) return null;
      input = Number(input);
    } while (!isInteger(input));
    return input;
  };
  const findMultiplesOf5 = (number) => {
    if (number === null || isNaN(number)) return console.log('Sorry, no numbers');
    
    for (let i = 0; i <= number; i++) {
      if (i % 5 === 0) {
        console.log(i);
      }
    }
  };
  const userInput = getUserNumber();
  findMultiplesOf5(userInput);