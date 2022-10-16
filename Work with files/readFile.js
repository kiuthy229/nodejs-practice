const fs = require("fs")


//read file by readFileSync
const text = fs.readFileSync("./assets/tho.jpg", (err, text) => {

    if (err) {
        console.log(`an error has occured: ${err.message}`)
    }
    console.log("file contents read")
    console.log(text)
})

console.log(text)

//the following snippet is about reading files by readFile function


fs.readFile("./assets/tho.jpg", (err, img) => {

    if (err) {
        console.log(`an error has occured: ${err.message}`)
        process.exit()
    }
    console.log("file contents read")
    console.log(img)
})