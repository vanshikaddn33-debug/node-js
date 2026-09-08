// function addnum(a,b){
//     return a+b
// }
// function subnum(a,b){
//     return a-b
// }


// //this is called single export
// module.exports = {
//     addnum, //exporting this function from math to script
//     subnum,
// }




//this is called multi export
exports.addnum = (a,b) => a+b ;
exports.subnum = (a,b) => a-b ;