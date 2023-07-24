sum = 0;
emp = ""
console.log("Hello");
function add() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum+value;
    emp = emp + ` + ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function sub() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum-value;
    emp = emp + ` - ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function mul() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum*value;
    emp = emp + ` * ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function div() {
    value = parseInt(document.getElementById("num1").value)
    sum = sum/value;
    emp = emp + ` / ${value}`
    document.getElementById("demo").innerHTML = emp.substring(2,emp.length)
}
function equals() {
    document.getElementById("demo").innerHTML = `${emp.substring(2,emp.length)} = ${sum}`
}

