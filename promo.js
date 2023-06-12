const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

const each_name = (something) => {
  return `Hi ${something}! 50% off our best candies for you today!`;
}

const generateMessages = (names) => {
  return names.map(each_name);
}

module.exports = { each_name, generateMessages };