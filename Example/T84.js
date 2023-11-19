var questions = [
    {id:1,title:'2*2',answer:'4'},
    {id:2,title:'2**3',answer:'8'},
    {id:3,title:'20/2',answer:'10'},
    {id:4,title:'8-2',answer:'6'},
    {id:5,title:'9-2',answer:'7'},
    {id:6,title:'what number chakra root',answer:'1'},
    {id:7,title:'captial of iran',answer:'tehran'},


]
    var score =0
    var mainAnswer = ""
    questions.forEach(function(item){
         mainAnswer = prompt(item.title + " ?")
        if(mainAnswer === item.answer){
            score ++
        }
    
    

})
alert(score)

    

