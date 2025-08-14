

const myArray : number[] = [1, 2, 3, 4, 5,6];
    
const myArray2 = [ ...myArray]
myArray.push(7);

console.log(myArray, myArray2);

// for( const myNumber of myArray ){
//     console.log(myNumber + 10);
// }