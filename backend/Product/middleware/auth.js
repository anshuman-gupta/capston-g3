const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  try {
    const reqtoken = req.headers['cookie'];
    const token=reqtoken.replace('jwttoken=','')
    const result = jwt.verify(token, "abhisecret");
    req.token = result;
    console.log(req.token.user_type)
    if (req.token.user_type == "admin"){
    next();}
    else{
      res.send("you are authorised as a admin")
    }
  } catch (err) {
    res.send("error in authorization");
  }
}
module.exports = authentication;



// try{
//     let reqtoken=req.headers['authorization']
//     const token=reqtoken.replace('Bearer ','')
//     const result=jwt.verify(token,'jamesbond')
//     req.token=result
//     next()
// }
// catch(err){
//     res.send("error in authorization")
// }
// }