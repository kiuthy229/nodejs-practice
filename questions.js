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
    process.stdout.write(` > `)
}

ask()

const answers = []
process.stdin.on("data", data => {
    // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    // process.exit()

    answers.push(data.toString().trim())

    if (answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})

process.on('exit', () => {
    const [ name, activity, lang] = answers
    console.log(`
    Thank you for your answers.
    Go ${activity} ${name} you can write ${lang} code later`)
})