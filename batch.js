const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  } else {
    return new_array = array.concat(number);
  }
}

module.exports = addToBatch;