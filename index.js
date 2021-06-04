const information = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, I'm ${information.name} from ${information.campus} campus!`,
    e : "oO",
    T : "U "
}));
