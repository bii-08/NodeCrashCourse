const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// Create a server
const server = http.createServer((request, response) => {
   // This callback function will run every time a request is made to the server. 
   // For example, if you request the homepage and we go to www.example.com, this callback function will run and send a response (homepage) to the browser.
  // request object: this object contains information about the request that was made to the server such as the URL, the method used to make the request like GET or POST, etc.
   // response object: this object contains methods that allow us to send a response back to the browser 

   // lodash
   const num = _.random(0, 20);
   console.log(num);

   const greet = _.once(() => { // This will only run once
      console.log('Hello');
   })

   greet();
   greet();

   // set header content type
   response.setHeader('Content-Type', 'text/html'); // This will set the content type to plain text

   // Routing
   let path = './views/';
   switch(request.url) {
      case '/': 
        path += 'index.html';
        response.statusCode = 200;
        break;
      case '/about':
         path += 'about.html';
         response.statusCode = 200;
         break;
         case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;
      default:
         path += '404.html';
         response.statusCode = 404;
         break;
   }


   // send an html file
   fs.readFile(path, (err, data) => {
      
      if (err) {
         console.log(err);   
         response.end(); 
      } else {
         // response.write(data); // This will send the data to the browser

         // Another way to send the data to the browser
         response.end(data);
         // response.end(); // This will end the response   
      }

   });

   // end the response
   // response.end(); // This will end the response



}); // const server: This will store an instance of the server, which is optional you dont have to 


// Listen for requests
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})

// Localhost is like a domain name on the web but it is only accessible on your local machine. 
// It is a loopback address that points to your own machine. It is a way to test your website before you deploy it to the web.

// The port number are like 'doors' into your computer through which internet communication can be made to different programs on your computer.
// When you make a request to a server, you need to specify the port number you want to connect to.

// localhost:3000 is the URL you will use to access the server. The server is listening for requests on port 3000.


// Dependencies:
// npm install: it will install all the dependencies that are listed in the package.json file.

// Express: It is a web framework that helps us to easily manage our routing requests and responses in a much more organized way.