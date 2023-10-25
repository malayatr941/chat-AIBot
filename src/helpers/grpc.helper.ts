import client from '../../grpc/client/question';
import { res_GRPC,req_GRPC } from '@interfaces';

export const AskQues = (payload:req_GRPC):Promise<res_GRPC> => {
  return new Promise((resolve,reject)=>{
    client.Ask({text: payload.question,username:payload.username},(error:Error, response:res_GRPC)=>{
        if(error){
            reject(error);
        }
        resolve(response);
    })
  })
}  
