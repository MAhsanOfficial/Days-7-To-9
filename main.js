// ...............................🚀 Day 7 Challenge: Start Coding! 🚀........................................
// QUESTION: 19
// Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating
//  the number of people you are inviting to dinner.
let Guests = ["Hamza", "Rehan", "Danish", "Imran", "Azan", "Asad"];
console.log(`I Am Inviting ${Guests.length} this people to dinner`);
// QUESTION: 20
//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries,
//  cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages = ["Urdu", "Arabic", "Spanish", "German", "English"];
console.log("These Languages is My Fav ", languages);
//QUESTION: 21
// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing
//  these items.
let Driving = {
    Car: "Tesla",
    Name: "Model Y",
    established: 2024
};
console.log(`These Car ${Driving.Car} and this is ${Driving.Name}, Publish in ${Driving.established}`);
// ==================================================================================================================
// ....................................🚀 Day 8 Challenge: Start Coding! 🚀..................................
// QUESTION: 22
// Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let userNames = ["Sheraz", "Bilal", "Mohsin"];
console.log(userNames[3]);
userNames[2] = "Mohsin";
// QUESTION: 23
// Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let favCricketer = "Babar Azam";
console.log(favCricketer === "Virat Kohli"); // this value return is "False"..
console.log(favCricketer === "Babar Azam"); // this value return is "True"..
//QUESTION: 24
//More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//* Use The Lower Case Method and Upper case Method...
console.log("Ahsan" == "Ahsan".toLocaleLowerCase()); // False
console.log("AHSAN" == "ahsan".toLocaleUpperCase()); // True
//* Use The Numeric Condition Operotor ...
console.log(8 < 10); //True
console.log(10 > 8); //False
//* Tests using "and" and "or" operators..
console.log(true && false); //True
console.log(true || false); // Mixup Ture and False
//*  Test whether an item is in a array..
let foods = ["Pizza", "Karai", "Niyari"];
console.log(foods.includes("Bar-B-Q")); // true
//* String In Condition Operator..
console.log("ALI" == "ALI"); //True
// console.log("Ali" === "ali");                           //False
// ==================================================================================================================
//.......................................🚀 Day 9 Challenge: Start Coding! 🚀....................................
//QUESTION: 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a 
// variable called alien_color.
let alien_color = "Red";
if (alien_color == "Yellow") {
    // console.log(`My Fav Color is ${alien_color}`);                       // no output
}
if (alien_color == "Red") {
    console.log(`My Fav Color is ${alien_color}`);
}
//QUESTION: 26
// Alien Colors #2: Choose a color for an alien, then write an if-else chain.
let alien_color1 = "yellow";
if (alien_color1 == "yellow") {
    console.log("You are correct Color Chosse");
}
else {
    console.log("Try Again !");
}
if (alien_color1 == "ahsan123") {
    console.log("You are correct Color Chosse");
}
else {
    console.log("Try Again !");
}
//QUESTION: 27
// Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
let alien_color2 = "Green";
if (alien_color2 == "Green") {
    console.log("Your Color Is Green");
}
else if (alien_color2 == "Red") { // TRUE
    console.log("Your color Is red");
}
else {
    console.log("Your color is not avilable");
}
let alien_color3 = "Yellow";
if (alien_color3 == "Green") { // TURE
    console.log("Your Color Is Green");
}
else if (alien_color3 == "Yellow") {
    console.log("Your color Is Yellow");
}
else {
    console.log("Your color is not avilable");
}
let alien_color4 = "Red";
if (alien_color3 == "Green") {
    console.log("Your Color Is Yellow");
}
else if (alien_color4 == "Yellow") {
    console.log("Your color Is red"); // FALSE
}
else {
    console.log("Your color is not avilable");
}
export {};
