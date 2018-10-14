var http = require("http");
var PNGImage = require('pngjs-image');

var image = PNGImage.createImage(100, 300);
 
// Get width and height
console.log(image.getWidth());
console.log(image.getHeight());
 
// Set a pixel at (20, 30) with red, having an alpha value of 100 (half-transparent)
// image.setAt(20, 30, { red:255, green:0, blue:0, alpha:100 });

for (y = 0; y < 300; y++) { 
    // image.setAt(20, y, { red:255, green:0, blue:0, alpha:100 });
    
    redCol = (y/300)*255;    
    console.log('y: '+y+' red:'+redCol);
    for (x = 0; x < 100; x++) { 
        image.setAt(x, y, { red:redCol, green:0, blue:0, alpha:100 });
    }
}
 
// Get index of coordinate in the image buffer
var index = image.getIndex(20, 30);
 
// Print the red color value
console.log(image.getRed(index));
 
// Get low level image object with buffer from the 'pngjs' package
var pngjs = image.getImage();
 
image.writeImage('test/test.png', function (err) {
    if (err) throw err;
    console.log('Written to the file');
});


// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');