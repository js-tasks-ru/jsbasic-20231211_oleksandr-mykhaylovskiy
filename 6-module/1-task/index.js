/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.#createTable();
  }

  #createTable(){
    const table = document.createElement("table");
    table.append(this.#createTableHeading());

    for(let {name, age, salary, city} of this.rows){
      const tableRow = this.#createTableRow({name, age, salary, city});
      table.append(tableRow);
    }

    table.addEventListener("click", (event) => {
      if(event.target.innerHTML === 'X'){
        event.target.closest('tr').remove();
      }
    });
    
    return table;
  }

  #createTableHeading(){
    const tableHeaderRow = document.createElement("tr");
    const thName = document.createElement("th");
    const thAge = document.createElement("th");
    const thSalary = document.createElement("th");
    const thCity = document.createElement("th");

    thName.innerHTML = 'Имя';
    thAge.innerHTML = 'Возраст';
    thSalary.innerHTML = 'Зарплата';
    thCity.innerHTML = 'Город';

    tableHeaderRow.append(thName, thAge, thSalary, thCity);

    return tableHeaderRow
  }

  #createTableRow({name, age, salary, city}){
    const tableRow = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdSalary = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdCross = document.createElement("td");

    tdName.innerHTML = name;
    tdAge.innerHTML = age;
    tdSalary.innerHTML = salary;
    tdCity.innerHTML = city;
    tdCross.innerHTML = '<button>X</button>';

    tableRow.append(tdName, tdAge, tdSalary, tdCity, tdCross);

    return tableRow
  }

  get() {
    return this.elem;
  }
}
