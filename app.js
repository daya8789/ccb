import express from "express";
import { adminRoutes } from "./routes/admin-routes.js";
import { companyRoutes } from "./routes/company-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', adminRoutes);
app.use('/', companyRoutes);
// app.use('/', studentRoutes);

//  Last middleware 404
app.use((request, response, next)=>{
    response.json({message:"Invalid URL"});
})
const server = app.listen(8789, (err)=>{
    if(err){
        console.log("Server Crashed !", err);
    }else{
        console.log("Server Up and Running...", server.address().port);
    }
})