import { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    'name':{type:SchemaTypes.String, required:true},
    'email':{type:SchemaTypes.String, required:true, unique:true},
    'phone':{type:SchemaTypes.String},
    'password':{type:SchemaTypes.String, required:true, minLength:5, maxLength:100}
});
export const AdminModel = mongoose.model('admin', adminSchema);