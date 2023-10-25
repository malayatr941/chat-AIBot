import Dataset from "../models/Dataset";
import { ESResponse,IDataset,IQuestion, res_GRPC } from "@interfaces";
import { Response } from "express";
import responseHelper from "../responses/response.helper";
import { AskQues } from "./grpc.helper";

class DatasetHelper {
    public data:ESResponse;

    response = async (
        res:Response,
        payload:IQuestion
    ) => {
        try {
            await AskQues({question:payload.question,username:payload.username}).then((reply:res_GRPC)=>{
            if(reply.status == 200){
                const responsedata:IDataset = {
                    question: payload.question,
                    answer: reply.answer,
                    response:reply.model,
                    indexing:1,
                    company:payload.company,
                    username:payload.username,
                }
                const dataset = new Dataset(responsedata);
                dataset.save().then((response:object)=>{
                    this.data = {
                        error:false,
                        data:response,
                        message:"Fetching your response",
                        status:200
                    };
                  }).catch((error:Error)=>{throw error});
            } else {
                
                throw {message:"Not found sorry",status:404}
            }
            responseHelper.success(res,this.data);
            }).catch(error=>{throw error})
        } catch (error) {
            this.data = {
                error:true,
                data:{},
                message:error.message.toString(),
                status:error.status || 500
            }
            responseHelper.error(res,this.data);
        }
    }
}

export default new DatasetHelper();