import express from "express";
import homeController from "../controllers/HomeController";
import accountController from "../controllers/AccountController";
import routes from "./routes";
const publicRouter = express.Router();


// home routes

publicRouter.get(routes.HOME_ROUTE,homeController.getRandomData);
publicRouter.get(routes.LOGIN_ROUTE,accountController.getLogin);
publicRouter.get(routes.REGISTER_ROUTE,accountController.getRegister);


export default publicRouter;