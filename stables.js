// FINAL PROJECT STABLES // 

/** 
                               👑
      ,//)                   ,//)
    ,;;' \                  ,;;' \   
  ,;;' ( '\               ,;;' ( '\
      / '\_)                  / '\_|      
            🍷
  [Chuck]                 [Blair] 
   
            [XOXO Stable]

      ,//)                   ,//)
    ,;;' \                  ,;;' \   
  ,;;' ( '\               ,;;' ( '\
      / '\_)                  / '\_|      
   🏈                      🛍️
  [Nate]                  [Serena]

                  ,//)
                ,;;' \       
              ,;;' ( '\   
                  / '\_)       
                        📕
              [Dan]


 */

let visitorMessage;
let latePaymentFee = 50; 
let totalStalls = 6; 

function Horse(name, nickname, faveTreat, age, monthlyRent, isInside, hobby, personality){
    this.name = name;
    this.nickname = nickname;
    this.faveTreat = faveTreat,
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside; // boolean
    this.hobby = hobby; // unique property
    this.personality = personality; // unique property
}

const serena = new Horse("Serena", "Sunshine", "cupcake", 8, 150, true, "shop", "free spirited");
const blair = new Horse("Blair", "Boo", "pie", 8, 150, false, "paint", "crafty");
const chuck = new Horse("Chuck", "Charles", "wine", 9, 200, false, "party", "snobby");
const nate = new Horse("Nate", "Nice Guy", "steak", 9, 200, true, "play football", "chill");


let horses = [serena,blair,chuck,nate];

// intrduce the horses and their rent
function logHorseIntro(horse){
    return `This is ${horse["name"]}, their nickname is ${horse["nickname"]}. They are a ${horse["personality"]} horse.`;
 }
// horses recalls the "horses" array 
logHorseIntro(horses[3]);

let rentCheck = horses["monthlyRent"];

function logRentCheck (rent){
if(rentCheck > 170){
    return`${rent["name"]} gets to have ${rent["faveTreat"]} because they pay ${rent["monthlyRent"]} dollars per month in rent.`
} else {
    return `${rent["name"]} only gets to have ${rent["faveTreat"]} because they only pay ${rent["monthlyRent"]} dollars per month in rent.`
}
}

logRentCheck(horses[1]);

// add new horse to the array 
const dan = new Horse("Dan", "Lonely Boy", "bagels", 6, 100, false, "read", "dorky"); //this isn't actually object literal notation. It's more efficient

horses.push(dan); // added new horse to the end of the array/stables 

// add new variable to the array 
const howHungry = horses["isHungry"];

serena["isHungry"] = true;
blair["isHungry"] = false;
chuck["isHungry"] = false;
nate["isHungry"] = true;
dan["isHungry"] = true;

console.log();

/**  
 
Horse {
  name: 'Serena',
  nickname: 'Sunshine',
  faveTreat: 'cupcake',
  age: 8,
  monthlyRent: 150,
  isInside: true,
  hobby: 'shop',
  personality: 'free spirited',
  isHungry: true
}
Horse {
  name: 'Blair',
  nickname: 'Boo',
  faveTreat: 'pie',
  age: 8,
  monthlyRent: 150,
  isInside: false,
  hobby: 'paint',
  personality: 'crafty',
  isHungry: false
}
Horse {
  name: 'Chuck',
  nickname: 'Charles',
  faveTreat: 'wine',
  age: 9,
  monthlyRent: 200,
  isInside: false,
  hobby: 'party',
  personality: 'snobby',
  isHungry: false
}
Horse {
  name: 'Nate',
  nickname: 'Nice',
  faveTreat: 'steak',
  age: 9,
  monthlyRent: 200,
  isInside: true,
  hobby: 'play football',
  personality: 'chill',
  isHungry: true
}
Horse {
  name: 'Dan',
  nickname: 'Lonely Boy',
  faveTreat: 'bagels',
  age: 6,
  monthlyRent: 100,
  isInside: false,
  hobby: 'read',
  personality: 'dorky',
  isHungry: true
}

  **/


// rental information 

let availableStalls = totalStalls - horses.length;
console.log(availableStalls);


if (availableStalls < 2){
    console.log(`We need to build more stalls!`)
} else (
    console.log(`We have ${availableStalls} available stalls.`)
)


function logLatePayment(fee){
    return `${fee["name"]} owes an additional ${latePaymentFee} if their rent is paid late.`
 }
 logLatePayment(horses[0]);


 // food information 

 for (i = 0; i < horses.length; i++){
    if(horses[i]["faveTreat"] !== "wine"){
        console.log(`${horses[i]["name"]} does not like the taste of wine!`)
    } else {
        console.log(`${horses[i]["name"]} loves wine and is lowkey an alcoholic.`);
        break; // break is another way to "break" out of the loop
    } 
}

// nickname check
function logNickname (aka){
    return `${aka["name"]} is also known as ${aka["nickname"]}.`;
}
logNickname(horses[]);

// hobby check
function logHobby(horses){
    for (i = 0; i < horses.length; i++){
        if(horses[i].hobby === "party"){
            console.log(`${[horses[i]["name"]]} is throwing a rager!`);
        } else {
            console.log(`${[horses[i]["name"]]} is invited to the party this weekend!`);
        } 
    }
    }
logHobby(horses); // parameters are just through the horses[i], don't need to set a new one

//send outside 
function logGoOutside(horses){
    for (let i = 0; i < horses.length; i++){
      horses[i].isInside = false;
        console.log(`${horses[i].name} went outside to spend time in the sun and prepare for the party.`);
    }
}
logGoOutside(horses);
// need to make this function so that the boolean change only exsists within this function and not affect the other code
// it changed, all horses to outside

// location check 
function logLocation (horses){
    if (horses["isInside"] = false){// move outside
        console.log(`${horses.name} went outside for some fresh air.`)
    } else {
        horses["isInside"] = true; // move inside
        console.log(`${horses.name} went inside to rest.`)
    }
}
logLocation(horses[]); 

// the previous function changed all of them to outside 


// food check 
function logDinner (horses){
    for (let i = 0; i < horses.length; i++) {
        if (!horses[i].isInside){
            console.log(`It's time for ${horses[i].name}'s dinner. "Come inside!"`);
            horses[i].isInside = true; // brings the horse inside  
        } else {
            console.log(`${horses[i].name} is inside and ready for dinner.`);
        }
        console.log(`Today ${horses[i].name} will be having ${horses[i].faveTreat} for dinner. Their favourite!`);
    }
    }
    logDinner(horses);

    // bed time 
function logGoOutside(horses, bedtime){
    for (let i = 0; i < horses.length; i++){
    if (horses[i].isInside){
      horses[i].isInside = false; 
       console.log(`${horses[i].name} is still outside at the party.`);
     }
    if (bedtime && !horses[i].isInside){
        horses[i].isInside = true;
        console.log(`${horses[i].name} it's bedtime, come back inside!`);
    }
}
}
logGoOutside(horses,true);
    
