let name = "Derek McNealy";
let age = "30";
let birthday = "July 3";
const pineapplePizza = true;
if (pineapplePizza) {
    console.log(`My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
    console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);

}



let lifeEvents = [ "I was born in Troy, Michigan.", "I went to Hope College.", "I went to the Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of a Grand Cirucs bootcamp."];
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(i,lifeEvents[i]);
}

let counter =0;
let randomNumber;
 while (randomNumber !==5) {
     randomNumber = Math.floor(Math.random() * 11);
     if (randomNumber !==5) {
         counter++;
         console.log(`${randomNumber} !==5`);
     } else {
         counter++;
         console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
         break;
     }
 }