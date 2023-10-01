/* 
   File Name: app.js
   Student’s Name: Arshil Shingala
   StudentID: 301318550
   Date: 09/24/2023
*/

process.env.NODE_ENV = process.env.NODE_ENV ||  'devlpoment';
const express = require ('./config/express');

const app = express();
app.listen(3524);

module.exports = app;

console.log("server is running...");

