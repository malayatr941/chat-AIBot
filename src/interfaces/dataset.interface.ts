interface IDataset {
    question: string;
    answer: string;
    response:string;
    indexing:number;
    company:string;
    createdAt?:Date;
    username:string;
    _id?:string;
}

interface IQuestion {
    question: string;
    company: string;
    username: string;
    token: string;
}


export {IDataset,IQuestion};