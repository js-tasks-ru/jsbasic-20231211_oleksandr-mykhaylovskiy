function highlight(table) {
  for(let row of table.tBodies[0].rows){
    for(let cell of row.cells){
      if(cell.cellIndex === 3 && cell.dataset.available === "true"){
        row.classList.add("available");
      }
      if(cell.cellIndex === 3 && cell.dataset.available === "false"){
        row.classList.add("unavailable");
      }
      if(cell.cellIndex === 3 && !cell.dataset.available){
        row.setAttribute("hidden", true);
      }
      if(cell.cellIndex === 2 && cell.innerText === 'f'){
        row.classList.add("female");
      }
      if(cell.cellIndex === 2 && cell.innerText === 'm'){
        row.classList.add("male");
      }
      if(cell.cellIndex === 1 && +cell.innerText < 18){
        row.style.textDecoration = 'line-through';
      }
    }
  }
}
