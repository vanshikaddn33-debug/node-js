// fs = in node.js fs module is built in ,  Used to create, read, update and delete files

const fs = require("fs");
// fs.writeFileSync("./test.txt", "Hey there");  //Sync means synchronous call,  test.txt is file name to be created,    ./ means currect directory ke andar file create karni h

// fs.writeFile("./test.txt", "Hey there Async", (err) =>{});

const result = fs.readFileSync("./contacts.txt", "utf-8");  //utf-8 encoding
// console.log(result);


//but if we use asynchronous   ,  async does not return anything
fs.readFile("./contacts.txt", "utf-8" , (err, result) => {          //callback function is used
    if(err)
    {
        console.log("Error");
    }
    else{
        // console.log(result);
    }
}); 


// this does not over right
// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt" , `${Date.now()}  Hey there\n`);
// fs.cpSync("./test.txt" , "./copy.txt");   //copies one file to another
// fs.unlinkSync("./copy.txt");   //deletes a file

console.log(fs.statSync("./test.txt"));  //gives stats

