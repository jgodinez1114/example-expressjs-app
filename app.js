// start Joel Godinez

// function to accept a str
// add a parameter delay
// make it async
const logMe = async (str, delay, randomized) => {
    for (const c of str) {
        // output the string char by char
        process.stdout.write(c);
        // check for randomized delay
        if (randomized) {
            await sleepNow(Math.random * delay);
        } else {
            await sleepNow(delay);
        };
    }
    process.stdout.write('\n');
}

// functon to sleep a necessary amount of time
const sleepNow = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

logMe('The Best Way To Get Started Is To Quit Talking And Begin Doing.', 1000, true)
