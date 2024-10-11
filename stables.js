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


// Lesson-6 Code // 

let horseNames = ["Cheese","Button","Grapes"];
let horseAges = [3,2,5];
let horseIntro = `There are now ${horseNames.length} horses living at the stables! Their names are: ${horseNames[0]}, ${horseNames[1]} and ${horseNames[2]}`;
let horseAgeIntro = `${horseNames[2]} is the oldest. She is ${horseAges[2]}. ${horseNames[0]} is ${horseAges[0]} and ${horseNames[1]} is the youngest at ${horseAges[1]} years old.`;
console.log(horseIntro);


if(horseAges[1] === "Button" && !isHorseInside){
    console.log(`${horseAges[1]} is inside`);
} else (horseAges[1] === "Button" && horseAges[0] === "Cheese" && horseAges[2] === "Grapes" && isHorseInside)
    console.log(`${horseNames[1]} is playing outside while ${horseNames[0]} and ${horseNames[2]} are chilling inside.`);



