interface res_GRPC {
    answer: string;
    model: string;
    status:number;
}
interface req_GRPC {
    question: string;
    username: string;
}


export {req_GRPC,res_GRPC};