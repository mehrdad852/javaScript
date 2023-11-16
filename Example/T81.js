var meno = {
    pitza:["peperoni","calami","ecteyk"],
    berger:["cade","peperoni"],
    salad:["wirazi","cade"]

}

var product = prompt("which product want :")

var newItem = prompt("enter new item : ")   

var newItemAdd = meno[product]


newItemAdd.push(newItem)

console.log(meno)
