var dataBase = [
    {id:1,userName:"hesam",password:"34@569g",email:"hesam@test.ir"},
    {id:2,userName:"mehrdad",password:"ghsdgg658",email:"mehrdad@test.ir"},
    {id:3,userName:"daryoow",password:"#$$5555",email:"daryoow@test.ir"},
    {id:4,userName:"mitra",password:"mifdfdf56tra",email:"mitra@test.ir"},
    {id:5,userName:"mehr",password:"me455454hr",email:"mehr@test.ir"},
    {id:6,userName:"booda",password:"###65542",email:"booda@test.ir"},
]
var forgetPassword = prompt("enter email")

var emailValid = dataBase.some(function(iteam){
    return iteam.email === forgetPassword

})
if(emailValid){
    var findArray = dataBase.find(function(iteam){
        return iteam.email === forgetPassword
    
    })
    
    console.log("your password is : " + findArray.password)

}else{
    alert("your email not valid")
}
