# pdf-creator
A webcrawler to get the most important algorithms and data structures from the geeksforgeeks website, starting at link: 

https://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/

Finally, it downloads this final pdf to the computer

To run this file, first run:

node index.js 

in the terminal.
Next run the command: 

wget ‐‐page-requisites ‐‐span-hosts ‐‐convert-links ‐‐adjust-extension --input a.txt --directory-prefix=pages --adjust-extension

again in the terminal. This will download all the files in the pages directory.
