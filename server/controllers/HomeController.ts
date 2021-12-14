import {Request,Response} from "express"
class HomeController {

    /**
     * getRandomData
     */
    public getRandomData(req:Request,res:Response) {
        return res.send("Hi");
    }
}


export default new HomeController();