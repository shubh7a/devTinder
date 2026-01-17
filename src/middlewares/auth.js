 const adminAuth = (req,res,next)=>{
   console.log("checking authorization of admin");
   const token = "xyz";
   const isAdminAuthorized=token==="xyz";
   if(!isAdminAuthorized){
      res.status(401).send("unauthorized access");
   }
   else{
      next();
   }
 };

 const userAuth = (req,res,next)=>{
   console.log("checking authorization of admin");
   const token = "xyz";
   const isAdminAuthorized=token==="xyz";
   if(!isAdminAuthorized){
      res.status(401).send("unauthorized access");
   }
   else{
      next();
   }
 };
 module.exports={
    adminAuth ,userAuth  
 }