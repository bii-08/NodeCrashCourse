const fs = require('fs'); // Built-in module, no need to create this module (file system module)

// reading files
// fs.readFile('./docs/blog1.txt', (error, data) => {
//    if (error) {
//       console.log(error);
//    }
//    console.log(data.toString()); // This will return a string instead of a buffer
// });

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, world!', () => {
//    console.log('File was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello, ninjas!', () => {
//     console.log('File was written');
//  });

// directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Folder created');
    });
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Folder deleted');
    });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Deletedme.txt was deleted');
    });
}