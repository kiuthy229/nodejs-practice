// process.stdin
// process.stdout

const { write } = require("fs")

// process.stdout.write("hello")
// process.stdout.write("world \n\n\n")

const questions = [
    "what is your name",
    "what would you rather be doing",
    "what is your preferred programming language"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`)
}