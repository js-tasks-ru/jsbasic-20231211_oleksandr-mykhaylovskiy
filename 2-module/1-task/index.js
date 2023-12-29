function sumSalary(salaries) {
  let sum = 0;

  for(let prop in salaries){
    if(typeof(salaries[prop]) === 'number' && !isNaN(salaries[prop]) && isFinite(salaries[prop])){
      sum += salaries[prop];
    }
  }

  return sum;
}
