//The http module is a built-in Node.js module used to create web servers and handle HTTP requests/responses

//1. Creating a bsic server
const http = require("http");
const fs = require("fs");
const url = require("url");



const server = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.method} ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    //here we used non-blocking task so the users do not have to wait for a long time
    fs.appendFile("log.txt", log, (err,  data) => {
    switch(myUrl.pathname)
    {
        case '/' : res.end("Home page");
        break;
        case '/about' : 
        const username = myUrl.query.myname;
        res.end(`HI ${username}`);
        break;
        default : res.end("404 Error");
    }
    });
})
server.listen(3000, () => {
    console.log("Server running on port 3000");
})