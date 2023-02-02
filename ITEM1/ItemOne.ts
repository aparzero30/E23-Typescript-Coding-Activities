/*
    Problem: logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

    Fix type errors in logPerson function.
*/


interface User {
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  
  export type Person = User | Admin;
  
  export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
  ];
  
  
  
  
  export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if  ((person as Admin).role) {
        additionalInformation = (person as Admin).role;
    }
    if  ((person as User).occupation){
        additionalInformation = (person as User).occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  }
  
  persons.forEach(logPerson);