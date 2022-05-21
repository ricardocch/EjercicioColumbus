function getArray(inputArray) {

  let outputArray = [];
  inputArray.forEach(element => {
    if(Array.isArray(element)){
        let newArray = getArray(element)
        outputArray = outputArray.concat(newArray)
    } else {
      outputArray.push(element)
    }

  });
  return outputArray;
}

let exampleArray = [6, [1, [2, 3], 4], 5];
console.log(getArray(exampleArray))


module.exports = {
  getArray
}