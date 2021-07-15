"use strict";

const output ={
   home : (req,res)=>{
    res.render("home/index");
},
   login : (req,res)=>{
    res.render("home/login");
},
};
const users ={
    id :["woorimIT","나개발","김팀장"],
    passowrd:["1234","1234","123456"],
};
const process ={
    login:(req,res)=>{
      const id = req.body.id;
      const passowrd = req.body.passowrd;
      console.log(id,passowrd);

      if(users.id.includes(id)){
          const idx = users.id.indexOf(id);
            if(users.passowrd[idx] === passowrd){
                return res.json({
                    success: true,
                });
            }
      }
      return res.json({
          success: false,
          msg:"로그인에 실패하셨습니다.",
      })
    },
};
module.exports = {
    output,
    process,
};