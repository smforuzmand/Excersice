const calculator = {
    num1: 10,
    num2: 20,

    addition: function () {
        return this.num1 + this.num2
    },

    subtraction: function () {
        return this.num1 - this.num2
    },

    multiplication: function () {
        return this.num1 * this.num2
    },
    division: function () {
        return this.num1 / this.num2
    }

}

console.log(calculator.subtraction(2, 7));

const volvoCar = {
    brand: "volvo",
    model: "xc60",
    year: 2022,
    color: "Grey",
}

let _newVolvoXC60 = {
    ...volvoCar
    , gearbox: "Automatic"
}



console.log(_newVolvoXC60);
