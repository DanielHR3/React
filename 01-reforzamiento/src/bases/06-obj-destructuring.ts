const person = {
    name: 'Tony',
    age: 45,
    country: 'USA',
    key: 'Ironman'
}

const { name:ironmanName, age, country, key } = person;

console.log(ironmanName, age, country, key);

interface Hero {
    name: string;
    age: number;
    country: string;
    key: string;
    rank?: string;
}


const useContext = ({ key, name, age, country, rank = 'Sin rango' }: Hero) => {
    

    return{ 
        keyName: key,
        user: {
            name: name,
            age: age,
            country: country,
        },
        rank: rank
    };
};

//const context = useContext(person);
// const { rank } = useContext(person);
// console.log({ rank });
// const { keyName } = useContext(person);
// console.log({ keyName });
// const { name } = useContext(person);
// console.log({ name });

//doble desestructuración
const {rank, keyName, user,} = useContext(person);
const {name} = user;

console.log({ rank, keyName, name });