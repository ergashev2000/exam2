let sum = 0;

function sumSalaries(salaries) {
    
    let values = Object.values(salaries);

    for (const val of values) {
        sum += val;
    }
    return sum;
}

var salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
}
console.log(sumSalaries(salaries));
document.querySelector('.result').innerHTML = "Jami: " + sum;