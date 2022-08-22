function sumSalary(salaries){
    let sum = 0;
    for (let key in salaries){
        let num = salaries[key];
        if (isFinite(salaries[key])){
            sum += num
        } 
    } return sum
}
