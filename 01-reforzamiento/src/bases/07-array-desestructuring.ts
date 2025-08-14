const charactersNames = [ 'Punisher', 'Ghost', 'Viper' ];
const [ , , viper ] = charactersNames;

console.log({ viper });


const returnsArrayTrident = () => {
  return ['Bravo-6', 117] as const;
};


const [operator, opCode] = returnsArrayTrident();

console.log(operator); // Bravo-6
console.log(opCode);   // 117


const useStateFrogman = (value: string) => {
  return [
    value,
    (newValue: string) => console.log(newValue)
  ] as const;
};


const [callsign, setCallsign] = useStateFrogman('Ghost');

console.log(callsign);    // Ghost
setCallsign('Viper');     // Imprime "Viper"
