interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}
interface Address {
  street: string;
  city: string;
  zip: string;
}

const ironman     : Hero ={
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    street: '123 Main St',
    city: 'New York',
    zip: '10001'
  }
}
console.log(ironman);
// const spiderman = structuredClone(ironman);
// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 25;
// spiderman.address = {
//   street: '456 Elm St',
//   city: 'Los Angeles',
//   zip: '90001'
// };

// console.log(ironman, spiderman);