

let userNum;
do {

userNum = parseInt(prompt('type a real number'));
} while (userNum <= 0 || isNaN(userNum));

let counter = 1; // each time 1 bottle falls

const sing = (num) => {
    for (let i = 0; i < num; i++) {
        let pronoun = '';
        counter === 1 ? pronoun = 'it' : pronoun = 'them';
        console.log(`${num} bottles of beer on the wall`);
        console.log(`${num} botles of beer`);
        console.log(`Take ${counter} down, pass ${pronoun} around`);
        num = num - counter;
        counter++;
        console.log(`${num} bottles of beer on the wall`);
        console.log('\n');
        if (num - counter < 0 && num > 0) {
            console.log(`${num} bottles of beer on the wall`);
            console.log(`${num} botles of beer`);
            counter = num;
            console.log(`Take ${counter} down, pass ${pronoun} around`);
            if (num - counter <= 0)
                console.log("no bottle of beer on the wall");
        }
    }
}

sing(userNum);