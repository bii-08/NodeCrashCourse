const fs = require('fs');

// Create a read stream and a write stream to copy the contents of blog3.txt to blog4.txt
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', (chunk) => {  // This is an event listener
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream); // This is the same as the above event listener but it is more efficient