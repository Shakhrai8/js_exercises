const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (string, some_function) => {
  return some_function(string);
}

const notifyByEmail = (email) => {
  return `Email sent ro: ${email}`;
}

const notifyByText = (string) => {
  return `Text sent to: ${string}`;
}

const notify = (string, notify_function) => {
  return notify_function(string);
}

module.exports = { notify, notifyByEmail, notifyByText };