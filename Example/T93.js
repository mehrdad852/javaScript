
var minute = +prompt("enter minute : ")
var second = +prompt("enter second : ")

var timer = setInterval(() => {
    //code
    console.log(minute + ":" + second)
    second --
    if(second === -1){
        minute--
        second = 59
    }
        if(minute === 0 && second === 0){
            clearInterval(timer)

        }
        

    
    
    
}, 1000);
