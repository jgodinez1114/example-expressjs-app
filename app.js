// start Joel Godinez

// function to accept a str
const logMe = (s) => {
    for (const c of s) {
        process.stdout.write(c);
    }
    process.stdout.write('\n');
}

logMe('this is a superb exe')