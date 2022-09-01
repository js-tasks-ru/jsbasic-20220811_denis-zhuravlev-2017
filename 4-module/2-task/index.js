function makeDiagonalRed(table) {
  for (let i = 0; true; i++){
    table.rows[i].cells[i].style.background = `red`
  }
}
// не проходит тесты, в бразуере все окрашивается
