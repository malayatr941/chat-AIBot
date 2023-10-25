import { IDataset } from "@interfaces";
import { Schema,model } from 'mongoose';

const DatasetSchema = new Schema<IDataset>({
     question: {
        type: String,
        required: true
     },
     answer: {
        type: String,
        required: true
     },
     response: {
        type: String,
        required:true
     },
     indexing:{
        type:Number,
        required:true
     },
     company:{
      type: String,
      required:true
     },
     username:{
       type:String,
       required:true
     }, 
     createdAt: {
        type: Date,
        default: new Date()
     }
})

export default model('Dataset',DatasetSchema);