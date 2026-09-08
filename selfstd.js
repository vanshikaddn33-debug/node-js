//Creating web server without Express

// const http = require("http");
// const server = http.createServer((req,res) => {
//     res.end("Hello from Server1");
// })
// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// Operating systems
// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);


//path module  - creates path correctly
const path = require("path");
// 1. joining paths
const filepath = path.join("folder", "subfolder", "file.txt");
console.log(filepath);

//2. Getting file extension
console.log(path.extname("photo.jpg"));

//3. Getting file name
console.log(path.basename("/documents/notes.txt"));

//4. Getting folder name
console.log(path.dirname("/documents/notes.txt"));










// blocking operations are called synchronous task & non-blocking are called as asynchronous