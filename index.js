function login(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('pass').value;

    if(email=="raju2001@gmail.com"&&password=="7569996377"){
        location.assign("file:///C:/Users/RAJU/3D%20Objects/developer/index.html");
    }
    else{
        alert("login failed");
    }
}
