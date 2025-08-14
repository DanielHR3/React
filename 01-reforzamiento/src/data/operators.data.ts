export interface Operator {
  id: number;
  codename: string;
  unit: Unit;
}

//type Unit = 'DEVGRU' | 'SEAL Team 6';
enum Unit {
  DEVGRU = "DEVGRU",
  SEAL_Team_6 = "SEAL Team 6",
}

export const operators: Operator[] = [
  {
    id: 1,
    codename: "Shadow-1",
    unit: Unit.DEVGRU,
  },
  {
    id: 2,
    codename: "Viper",
    unit: Unit.SEAL_Team_6,
  },
  {
    id: 3,
    codename: "Ghost",
    unit: Unit.SEAL_Team_6,
  },
  {
    id: 4,
    codename: "Reaper",
    unit: Unit.DEVGRU,
  },
  {
    id: 5,
    codename: "Havoc",
    unit: Unit.SEAL_Team_6,
  },
] as const;
//export default operators;
