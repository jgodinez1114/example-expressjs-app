// author: AgileNix

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

logMe('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 333, true);

