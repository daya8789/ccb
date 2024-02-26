import { AdminModel } from "../db/models/admin-schema.js";
import { hashing } from "../utils/encryption.js";

export const adminController = {
    async login(request, response){
        const adminInfo = request.body;
        console.log("admin info in controller is ", adminInfo);
        const doc = await AdminModel.findOne({'email':adminInfo.email}).exec()
        if(doc && doc._id){
            const planPassword = adminInfo.password;
            const dbPassword = doc.password;
            if(hashing.matchPassword(planPassword, dbPassword)){
                response.json({message:'Welcome '+ doc.name});
            }
            else{
                response.json({message:'Invalid UserId or Password !'});
            }
        }else{
            response.json({message:'Invalid UserId or Password !'});
        }
    },
    async register(request, response){
        const adminInfo = request.body;
        adminInfo.password = hashing.passwordHash(adminInfo.password);

        try{
            const doc = await AdminModel.create(adminInfo);
            if(doc && doc._id){
                response.json({message:"Registered Successfully"});
            }else{
                response.json({message:"Problem in Registering"});
            }
        }
        catch(err){
            console.log("Register Err", err);
            response.json({message:"Problem in Registering"});
        }
    },
    profile(request, response){
        const adminName = request.params.username;
        console.log('All params', adminName);
        response.json({message:adminName + " Profile"});
    },
    changePassword(request, response){
        response.json({message:"Change Password"});
    }
}