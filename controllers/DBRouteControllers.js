import db from "../models"

app.post("/api/famlies",function(req,res){   
       
    const mod = new model(req.body);  
        mod.save(function(err,data){  
            if(err){  
                res.send(err);                
            }  
            else{        
                 res.send({data:"Record has been Inserted..!!"});  
            }  
        }); 
    }) 