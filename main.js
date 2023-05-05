const jsonData = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
}

function isEven(num) {
    return num % 2 === 0;
}

function convert(data, actionCb) {
    return actionCb(data);
}

function actionCallback(arg) {
    return JSON.parse(arg);
}
const convertedData = convert(jsonData, actionCallback);

let numbers = convertedData.data;

class DataProcess {
    constructor(data) {
        this._data = data;
    }
    sortData() {
        this._data.sort((a,b) => a-b);
    }
    calculateTotal() {
        this.total = this._data.reduce((a,b) => a+b);
    }
    isEven() {
        if(this.total % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    doDouble() {
        this.doubled = this._data.map((el) => el*2);
    }
    static getOdd(arg) {
        let odds = arg.filter((a) => a%2 !== 0);
        return odds;
    }
    static getEven(arg) {
        let evens = arg.filter((a) => a%2 === 0);
        return evens;
    }
    printAll() {
        let x = {"total":this.total, "doubled":this.doubled, "data":this._data}
        console.log(x);
    }
    smallerCheck() {
        this.smaller = this._data.filter((a) => a<50);
    }
    static toJson(y) {
        return JSON.stringify(y);
    }

}

let dataObj = new DataProcess(numbers);
dataObj.calculateTotal();
dataObj.sortData();
dataObj.smallerCheck();
dataObj.doDouble();
dataObj.printAll();
dataObj.smallerCheck();
console.log(DataProcess.getOdd(numbers))
console.log(DataProcess.getEven(numbers))
console.log(dataObj.smaller)
console.log(DataProcess.toJson(dataObj))