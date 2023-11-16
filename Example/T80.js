toDoArray = [
    {id:1,title:"owasp",isDoing:false},
    {id:2,title:"php",isDoing:true},
    {id:3,title:"javaScript",isDoing:false}
]

var userMenu = prompt("enter your number \n 1.Add \n 2.Remove \n 3.Do")



if(userMenu == "1"){
    var nameToDo = prompt("enter name to do")
    var newToDo = {id:toDoArray.length+1,title:nameToDo,isDoing:false}
    toDoArray.push(newToDo)
    console.log(toDoArray)

}else if(userMenu == "2"){
    


    var nameRemoveToDo = prompt("enter name to Remove")
    var isDo = toDoArray.some(function(item){

        return nameRemoveToDo == item.title
    })

    if(isDo){

        var removeIndex =  toDoArray.findIndex(function(item){
            return nameRemoveToDo == item.title
     
         })
         toDoArray.splice(removeIndex,1)
         console.log(toDoArray)
     

    }else{
        alert("this not in to do")
    }
   
        



}else if(userMenu == "3"){

    var nameToDo = prompt("enter name to do")

    
    var changeDoing = toDoArray.forEach(function(item){
        if(nameToDo === item.title){
            item.isDoing = true

        }
        
    })
    console.log(toDoArray)




}else{
    alert("your number is incorrect")
}
