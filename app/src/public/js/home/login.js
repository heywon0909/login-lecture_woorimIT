"use strict";

 const id = document.querySelector("#id");
 const password = document.querySelector("#password");
 const loginBtn = document.querySelector("button");
 function login(){
    const req ={
        id: id.value,
        passowrd: password.value,
    };
    console.log(req);
}
loginBtn.addEventListener("click",login);

