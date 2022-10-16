const fs = require("fs")

//create a directory named storage-files
if (fs.existsSync("storage-files")){
    console.log("Already there")
}
else{
    fs.mkdir("storage-files", err => {
        if(err){
            throw err
        }
    
        console.log("directory created")
    })
}