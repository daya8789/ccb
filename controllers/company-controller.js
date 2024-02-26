import { companyModel } from "../db/models/company-schema.js";

export const companyController = {
    async register(request, response){
        const companyInfo = request.body;
        try{
            const doc = await companyModel.create(companyInfo);
            if(doc && doc._id){
                response.json({message:"Company registered"});
            }else{
                response.json({message:"Problem in Company Loading"});
            }
        }
        catch(err){
            console.log("Company Error ", err);
            response.json({message:"Problem in Company Loading"});
        }
    },
    details(request, response){
        response.json({message:"Company Details"});
    }
}