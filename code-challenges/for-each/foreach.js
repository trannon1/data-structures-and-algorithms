const callback = (number, array) => {
        if (number % 2 === 0){
            array.pop();
        }
    }

const runCallback = (array) => {
    array.forEach(value => {
        callback(value, array);
    })
}

const arr = [1,2,3,4,5];
runCallback(arr, callback);