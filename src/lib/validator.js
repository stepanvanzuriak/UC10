const validateString = (str, pattern) => {
  const regex = new RegExp(pattern);
  return regex.test(str);
};

export const validate = (string, maxLength = 10) => {
  const pattern = `^(?=.{1,${maxLength}}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~])\\S*$`;

  return validateString(string, pattern);
};
