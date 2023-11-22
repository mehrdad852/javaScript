
var i=11
var timer = setInterval(function(){
    if(i===0){
        
        
        clearInterval(timer) //clear interval
        alert("Game Over")

    }
    
    console.log(i)
    i--
    

},1000)
//1000ms =1s
