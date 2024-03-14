
const letters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

let array = [];

for (let i = 0; i < letters.length; i++) {
    let element = letters.charAt(i);
    array.push(element);
}

const generatePassword = (length) => {
    if(length < 8){
        alert ("Invalid Password Length");
        return;
    }

    let randomString = '';
    for(let i = 0; i < length; i++){
        randomChar = Math.floor(Math.random() * letters.length);
        randomString += array[randomChar];
    }
    return randomString; 
}

const randomPassword = generatePassword(15);
console.log(randomPassword);