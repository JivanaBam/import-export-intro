const checkNumbers = (num) => {
  let rem = num % 2;

  if (rem === 0) {
    return "even";
  } else {
    return "odd";
  }
};

export { checkNumbers };
