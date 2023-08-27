const values = [
    { key: "2", count: 1, value: "a" },
    { key: "2", count: 2, value: "b" },
    { key: "2", count: 3, value: "c" },
    { key: "3", count: 1, value: "d" },
    { key: "3", count: 2, value: "e" },
    { key: "3", count: 3, value: "f" },
    { key: "4", count: 1, value: "g" },
    { key: "4", count: 2, value: "h" },
    { key: "4", count: 3, value: "i" },
    { key: "5", count: 1, value: "j" },
    { key: "5", count: 2, value: "k" },
    { key: "5", count: 3, value: "l" },
    { key: "6", count: 1, value: "m" },
    { key: "6", count: 2, value: "n" },
    { key: "6", count: 3, value: "o" },
    { key: "7", count: 1, value: "p" },
    { key: "7", count: 2, value: "q" },
    { key: "7", count: 3, value: "r" },
    { key: "7", count: 4, value: "s" },
    { key: "8", count: 1, value: "t" },
    { key: "8", count: 2, value: "u" },
    { key: "8", count: 3, value: "v" },
    { key: "9", count: 1, value: "w" },
    { key: "9", count: 2, value: "x" },
    { key: "9", count: 3, value: "y" },
    { key: "9", count: 4, value: "z" },
]

const EnglishToNokia = (str) => {

    const strArr = str.split(" "); // Take the String and split into part for easy processing
    let tempNokiaArr = [];        // Declare an temporary array for String 
    for (let i = 0; i < strArr.length; i++) {    // Start the for loop to process single element of stArr array
        let tempArr = strArr[i];                 // store each varaible in temp array
        let arr;
        let nokiaTempStr = "";
        for (let j = 0; j < tempArr.length; j++) {   // Start the for loop to process single character of tempArr array
            arr = values.find(({ value }) => value == tempArr[j]);  // find the corr value of charachter and count
            for (let k = 0; k < arr?.count; k++) {    // To Add Count times digit for the character
                nokiaTempStr += arr.key;             // add the digits to temp return string
            }
        }
        tempNokiaArr.push(nokiaTempStr)
    }
    return tempNokiaArr.join(" ")
}

const NokiaToEnglish = (str) => {
    const tempArr = str.split(" ");
    // console.log(tempArr);
    // console.log(tempArr.length);
    let tempStr;
    let engStr = ""
    for (let i = 0; i < tempArr.length; i++) {
        let counter = 1;
        let prev = tempArr[i][0];
        for (let j = 0; j <= tempArr[i].length; j++) {
            if (tempArr[i][j] == '.') {
                tempStr = values.find(({ key, count }) => key == prev && count == counter - 1)
                counter = 1;
                engStr += tempStr?.value;
            }
            else if (tempArr[i][j] !== prev) {
                tempStr = values.find(({ key, count }) => key == prev && count == counter - 1)
                counter = 1;
                if (tempStr?.value !== undefined)
                    engStr += tempStr?.value;
            }
            counter++;
            prev = tempArr[i][j];
        }
        engStr += " ";
    };
    console.log(engStr);
    return engStr;
}

// EnglishToNokia()
// NokiaToEnglish()

module.exports = { values, NokiaToEnglish, EnglishToNokia }