var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
const execSync = require('child_process').execSync;
const fs = require('fs') 


var pageToVisit = "https://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     var $ = cheerio.load(body);
     console.log("Page title:  " + $('title').text());

     let l = $("ol > li > a").map(function(i, el) {
         return $(this).attr('href');
     }).toArray();
     l.splice(0, 6);
     l = l.join("\n");
     console.log(l);
     

    fs.writeFile('./a.txt',l, (err) => { if (err) throw err; }) 

    //To run this file, first run node index.js in the brower.
    //Next run the command: 
    //wget ‐‐page-requisites ‐‐span-hosts ‐‐convert-links ‐‐adjust-extension --input a.txt --directory-prefix=pages --adjust-extension
    //in the terminal.
    //This will download all the files in the pages directory

    //Ignore code below
    //execSync('wget ‐‐page-requisites ‐‐span-hosts ‐‐convert-links ‐‐adjust-extension --input a.txt --directory-prefix=pages --adjust-extension', {encoding: 'utf-8'});

   }
});