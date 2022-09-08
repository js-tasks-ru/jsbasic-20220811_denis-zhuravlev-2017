function highlight(table) {
    let rows = table.rows;
    for (row of rows){
      let cells = row.cells
      if (cells[3].dataset.available == `true`){
        row.classList.add(`available`)
      } else if (cells[3].dataset.available == `false`){
        row.classList.add(`unavailable`)
      } else {
        row.setAttribute(`hidden`, `true`)
      }
      
      if (cells[2].textContent == `m`){
        row.classList.add(`male`);
      } else if (cells[2].textContent == `f`){
        row.classList.add(`female`)
      }
  
      if (cells[1].textContent < 18){
        row.setAttribute(`style`,`text-decoration: line-through`)
      }
    }
}
