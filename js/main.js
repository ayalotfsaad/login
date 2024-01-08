let signUpName=document.getElementById('signUpName')
let signUpEmail=document.getElementById('signUpEmail')
let signUpPassword=document.getElementById('signUpPassword')
let massege=document.getElementById('inCorrect')
let signUpbutton=document.getElementById('signUp')
let success=document.querySelector('.success')



let arrylist=[]


if(localStorage.getItem('usersArry' )){
    arrylist=JSON.parse(localStorage.getItem('usersArry'))
}


function addlist(){
    let list={
        signUpName:signUpName.value,
        signUpEmail:signUpEmail.value,
        signUpPassword:signUpPassword.value
    }
if(list.signUpName=='' || list.signUpEmail=='' || list.signUpPassword==''){
    massege.innerHTML="all inputs are required"
}
else if(check(list.signUpEmail)==true){
    massege.innerHTML="email already exists"

}
else{
    arrylist.push(list);
    localStorage.setItem('usersArry',JSON.stringify(arrylist));
    massege.innerHTML="success"
   success.style.cssText=`color: green !important;`

}
}
if(signUpbutton != null)
 signUpbutton.addEventListener('click',addlist)

function check(email){
    for(let i=0;i<arrylist.length;i++){
        if(arrylist[i].signUpEmail==email)
            return true;
    }
    return false;

}


let loginEmail=document.getElementById('loginemail')
let loginpassword=document.getElementById('loginPassword')
let loginButton=document.getElementById('loginbtn')
let logMassege=document.getElementById('inCorrect')

if(loginButton != null){
    loginButton.addEventListener('click',login)
}


 function login(){
   if(loginEmail.value =='' || loginpassword.value ==''){
    logMassege.innerHTML="all inputs are requird"
   }
   else if(isUserExist(loginEmail.value,loginpassword.value)==true){
    loginButton.href='welcom.html'
   }
   else{
    logMassege.innerHTML="incorrect email or password"
   }
 }
 
 
 let userWellcome=document.getElementById('userWellcome');

 function isUserExist(email,password){
for(let i=0;i<arrylist.length;i++ ){
     if(arrylist[i].signUpEmail==email && arrylist[i].signUpPassword == password){
        localStorage.setItem("welUserName",JSON.stringify(arrylist[i].signUpName))
        return true;


     }
     
}
return false;
 }

 if(userWellcome != null){
    userWellcome.innerHTML +=JSON.parse(localStorage.getItem("welUserName"))
 }