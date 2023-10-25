import { Controller } from "@interfaces";
import { Request,Response,Router } from "express";
import DatasetHelper from "../helpers/dataset.helper";
import originMiddle from "../middlewares/originAccess";

class DatasetController implements Controller {
   public path = '/ask';
   public router = Router({mergeParams: true});

   constructor() {
    this.initializeRoutes();
   }

   private initializeRoutes(){
    this.router.post(`${this.path}/question`,originMiddle.origin,
     this.responseQue
    );

   }

   private responseQue = async (req:Request, res:Response) => {
      await DatasetHelper.response(res,req.body);
   }
}

export default DatasetController;