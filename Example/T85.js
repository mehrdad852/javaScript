var num1 = +prompt("enter first number :")
var num2 = +prompt("enter second number :")

var operator = prompt("enter operator\n1.+\n2.-\n3.*\n4./\n5.**")


switch(operator){
    case "+":
        var result=num1 + num2
        alert(result)
        break
    case "-":
        var result=num1 - num2
        alert(result)
        break
        case "*":
            var result=num1 * num2
            alert(result)
            break
            case "/":
        var result=num1 / num2
        alert(result)
        break
        case "**":
        var result=num1 ** num2
        alert(result)
        break
        default:
            alert("your operator not found")
}
