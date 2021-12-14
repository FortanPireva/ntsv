import { Request,Response } from "express";

class AccountController {
    /**
     * getLogin
     */
    public getLogin(req:Request,res:Response) {
        return res.send(req.hostname)
    }

    /**
     * postLogin
     */
    public postLogin() {
        
    }

    /**
     * getRegister
     */
    public getRegister(req:Request,res:Response) {
        return res.send(req.hostname + req.path)
    }

    public postRegister(){

    }
}

export default new AccountController();