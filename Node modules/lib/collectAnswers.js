const readline = require("readline")
const {EventEmitter} = require("events")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions,done) => {
    //done is the argument to call when all answers were collected
    const answers = []
    const [firstQuestion] = questions
    const emitter= new EventEmitter()

    const questionAnswered = answer => {
        emitter.emit("answer", answer)
        answers.push(answer)
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
            //the second argument of the question() is the callback to call when the question is answered
        }
        else{
            emitter.emit("complete", answers)
            done(answers)
        }
    }

    rl.question(firstQuestion, questionAnswered)

    return emitter
}