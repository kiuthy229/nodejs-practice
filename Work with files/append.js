const fs = require("fs")
const colorData = require("./assets/colors.json")

//create file in "storage-files" directory with contents from json
colorData.colorList.forEach(a => {
    fs.appendFile("./storage-files/colors.md", `${a.color}: ${a.hex}\n`, err => {
        if(err){
            throw err
        }
    })
})