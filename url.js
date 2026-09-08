// URL - UNIFORM RESOURCE LOCATOR
// URL module is used to work with and analyze URLs

// https://  = hypertext transfer protocol secure 
// www.piyushgarg.dev = Domain - user-friendly name of IP address of server
//  /  = this is path or Root path












const url = require("url");
const myUrl = new URL("https://example.com/products?id=25");

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams.get("id"));