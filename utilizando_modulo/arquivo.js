const fs = require('fs'); // file system

fs.readFile('arquivo.txt', 'utf8', function(err, data){
    if (err) {
        console.error(err);
        return
    } else {
        console.log(data);
    }
});