function checkSpam(str) {
  const firstCondition = 'XXX';
  const secondCondition = "1xBet";
  return str.toLowerCase().includes(firstCondition.toLowerCase()) || str.toLowerCase().includes(secondCondition.toLowerCase()) ? true : false;
}
