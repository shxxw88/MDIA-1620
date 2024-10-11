console.log("horses are great!")

let horseName="Charlie";
horseName = "Charles";
let horseAge = 3;
console.log(horseName);
console.log(horseAge);
let isHorseInStable =false;
console.log(isHorseInStable);
isHorseInStable =true;
console.log(isHorseInStable);

const STABLE_MONTHTLY_FEE=100;
console.log(STABLE_MONTHTLY_FEE);


// Lesson 4 Code //

let horseNickname="Cheese";
console.log(horseNickname);

let welcomeMessage="Welcome to my stable!";
console.log(welcomeMessage);

let horseIntroduction=`This horse's name is ${horseName} and his nickname is ${horseNickname}`;
console.log(horseIntroduction);

let rentIntroduction=`It normally costs ${STABLE_MONTHTLY_FEE} per month to board with ${horseNickname}`;
console.log(rentIntroduction);

let rentDiscount=`For a 3 months stay, you can get a 10% discount for ${(STABLE_MONTHTLY_FEE*3)*0.9} dollars!`;
console.log(rentDiscount);


// Lesson-5 Code //
let isHorseInside = true;
let visitingHorseName = "Strawberry";

if(horseNickname === "Cheese" && visitingHorseName === "Lettuce" && isHorseInside) {
    console.log(horseNickname + " has a visitor but he is inside.");
} else if(horseNickname === "Cheese" && visitingHorseName === "Strawberry" && !isHorseInside) {
    console.log(` ${horseNickname} and ${visitingHorseName} are outside`);
} else (horseName === "Cheese" && visitingHorseName === "Strawberry" && isHorseInside)
    console.log(`${horseNickname} is inside but needs to go outside to greet ${visitingHorseName}`);

