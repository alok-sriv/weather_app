function getResult(error, result) {
    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('Result: ', result);
    }
}

module.exports = getResult