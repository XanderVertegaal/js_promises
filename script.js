const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is equal to or smaller than 10.`)
        } else {
            reject(`${num} is greater than 10`)
        }
    })
}

testNum(3)
    .then(response => console.log(response))
    .catch(error => console.log(error))

testNum(12)
    .then(response => console.log(response))
    .catch(error => console.log(error));

const makeAllCaps = array => {
    return new Promise((resolve, reject) => {
        if (array.every(x => typeof x === 'string')) {
            resolve(array.map(x => x.toUpperCase()))
        } else {
            reject('These are not all strings!')
        }
    })
}

const sortWords = array => array.sort();

const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(response => sortWords(response))
    .then(final => console.log(final))
    .catch(message => console.log(message))

makeAllCaps(complicatedArray)
    .then(response => sortWords(response))
    .then(final => console.log(final))
    .catch(message => console.log(message))