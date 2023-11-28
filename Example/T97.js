var userName = prompt("enter your user name : ")

var userList = ["hesam","darush","mehrdad","oli"]

var flag = false //flag for test condition

for(i=0;i < userList.length;i++){
    if(userName === userList[i]){
        flag = true

    }


}

if(flag){
    alert("login successful")
}else{
    alert("login fail")
}
