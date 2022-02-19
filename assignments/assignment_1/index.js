const { stdin, stdout } = require("process");

function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const data = process.argv;
    const name = data[data.length -1];
    return name

}

function getNameFromEnv() {
    // Write your code here
    process.env.firstname = "Yash";
    return process.env.firstname
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rlInput = readline.createInterface({
        input: stdin,
        output: stdout
    });

    rlInput.question("What is your Name?", (ans) => {
        return ans
    })

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}