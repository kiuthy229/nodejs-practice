const fs = require("fs")

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8")
const readStream = fs.createReadStream("./assets/notes.md", "UTF-8")
// process.stdout.write("hello")
// process.stdout.write("world\n")

// process.stdin.on("data", data => {
//     writeStream.write(data)
// })

readStream.pipe(writeStream)