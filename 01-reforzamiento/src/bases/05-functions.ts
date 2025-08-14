
function greet( name: string): string {
    return `Hola ${ name }`
}

const greet2 = (name: string): string => `Hola ${ name }`;

const message = greet('Juan');
const message2 = greet2('Miguel');

console.log(message, message2);

interface User {
    uid: number;
    username: string;
    age?: number;
}

function getUser (): User {
    return {
        uid: 123,
        username: 'El_Papi23'
    };
}


const getUser2 = (): User => ({
    uid: 123,
    username: 'El_Papi23'
});

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//     console.log({ value });
// });

// myNumbers.forEach(function (value) {
//     console.log({ value });
// });

myNumbers.forEach((value) => {
    console.log({ value });
});