console.log("js-tips");

//Turnary Magic 三項演算子
const age = 30;
age > 50
    ? age > 70
        ? console.log("You are getting very old...")
        : console.log("You are between 30 and 50")
    : console.log("You are below 30");
// if (age > 50) {
//     if (age > 70) {
//         console.log("You are getting very old");
//     } else {
//         console.log("You are between 30 and 50");
//     }
// } else {
//     console.log("You are below 30");
// }

//ショートカット演算子
age > 50 && console.log("You already lived half century, cool");

//Number to String
const numToStr = 20 + "";
console.log(typeof numToStr);

//Fill array
const users = Array(5).fill("");
console.log(users);

//Unique Array
const services = [
    "kabusuke",
    "aidaNinjaScroll",
    "MasHub",
    "StackNRead",
    "MasHub"
];
const unique = Array.from(new Set(services));
console.log(unique);

//Dynamic Objects
const dynamicKey = "language";
const kabusuke = {
    name: "Kabusuke",
    url: "kabusuke.com",
    [dynamicKey]: "JA"
};
console.log(kabusuke);

//Slicing Array
const sliced = Array.from(new Set(services));
sliced.length = 1;
console.log(sliced);
//Reverse slicing Array
const rSliced = Array.from(new Set(services));
console.log(rSliced.slice(-3));

// Array to Object
const mas = { ...services };
console.log(mas);

//Objcet to Array
const masServices = Object.values(mas);
console.log(masServices);

//performance *does not  work on node.js
let startAt = performance.now();
////some codes here
let endAt = performance.now();
console.log(`tooks ${endAt - startAt} milliseconds`);
