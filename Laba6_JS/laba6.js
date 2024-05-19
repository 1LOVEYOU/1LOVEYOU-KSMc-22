function filterBy(arr, type) {
    return arr.filter(item => typeof item !== type);
}
const originalArray = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(originalArray, 'string');

console.log(filteredArray);
