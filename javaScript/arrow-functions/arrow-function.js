
const years = [1960, 1980, 1990, 1997, 2020, 2022]


let ageList = [];

/* for (let i = 0; i < years.length; i++) {
    ageList[i] = 2022 - years[i];
} */
/* 
for (i = 0; i < years.length; i++) {
    ageList.push(2022 - years[i]);
}
 */

let ageListEs6 = years.map(year => 2022 - year);

console.log(ageListEs6);

/* function leapYear(year) {
    return year % 4 === 0;
}



function sum(n1, n2) {
    return n1 + n2;
}
 */

let names = ["mehrdad", "mohsen", "marcus", "dean", "simon"];

const nameStartingWithM = names.filter(name => name.startsWith("m"));
console.log(nameStartingWithM);