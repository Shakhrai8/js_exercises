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

const each_name = (name, discount) => {
  return `Hi ${name}! ${discount}% off our best candies for you today!`;
}

const generateMessages = (names) => {
  return names.map((name) => each_name(name.name, name.discount));
}

module.exports = { each_name, generateMessages };