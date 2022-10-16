// console.log(process.pid)
// console.log(process.versions.node)

// console.log(process.argv)

// const [,,firstName, lastName] = process.argv

// console.log(`your name is ${firstName} ${lastName}`)

// console.log(process.argv)


// function to calculate the sum of all the number when we node globalProcess 1 2 3 ....
var result = 0;
 
for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
console.log(result);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const greeting = grab('--greeting')
const user = grab('--user')

console.log(`${greeting} ${user}`)
//node globalProcess --user thy --greeting "hello"
