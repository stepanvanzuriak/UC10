const validateString = (str, pattern) => {
  const regex = new RegExp(pattern);
  return regex.test(str);
};

export default validateString;
