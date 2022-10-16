const collectAnswers = require("../Node modules/lib/collectAnswers")

const questions = ["what is your name", "where do you live", "what are you going to do with nodejs"]

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`))

answerEvents.on("complete", answers => {
    console.log("thank you for your answers")
    console.log(answers)
})

answerEvents.on("complete", () => process.exit())