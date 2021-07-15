"use strict";
const UserStorage = require("../../models/UserStorage");
const output ={
   home : (req,res)=>{
    res.render("home/index");
},
   login : (req,res)=>{
    res.render("home/login");
},
};
const process ={
    login:(req,res)=>{
      const id = req.body.id;
      const passowrd = req.body.passowrd;
     
     const users = UserStorage.getUsers("id","passowrd");
     const response ={};
    //   console.log(id,passowrd);

      if(users.id.includes(id)){
          const idx = users.id.indexOf(id);
            if(users.passowrd[idx] === passowrd){
               response.success = true;
               return res.json(response);
            }
      }
      response.success = false;
      response.msg ="로그인에 실패하셨습니다."
      return res.json(response);
    },
};
module.exports = {
    output,
    process,
};