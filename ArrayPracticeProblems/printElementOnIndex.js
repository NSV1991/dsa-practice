class PrintElement {
    processArray(arr, index) {
        return arr[index];
    }
}

// example

const printElement = new PrintElement();
const array = [10, 20, 30, 40, 50];
const index = 3;
const value = printElement.processArray(array, index);
console.log('value:', value);