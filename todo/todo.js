const fs= require("fs");
const filepath="./tasks.json";

const command= process.argv[2]

if (command==="add"){
    addTask(argument)
}
     else if (command==="list"){
    addTask(argument)
}
     else if (command==="remove"){
    addTask(argument)
}     else{
    console.log("commant not fount")
}
