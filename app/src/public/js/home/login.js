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
    console.log(JSON.stringify(req))
}
loginBtn.addEventListener("click",login);


fetch("/login",{
    method: "POST",
    hearders: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
})
