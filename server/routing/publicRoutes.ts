import express from "express";
import homeController from "../controllers/HomeController";
import accountController from "../controllers/AccountController";
import routes from "./routes";
import noteController from "../controllers/NotesController";
const publicRouter = express.Router();

// home routes

publicRouter.get(routes.HOME_ROUTE, homeController.getRandomData);
publicRouter.get(routes.LOGIN_ROUTE, accountController.getLogin);
publicRouter.get(routes.REGISTER_ROUTE, accountController.getRegister);

publicRouter.get(routes.NOTE.GET, noteController.getNote);
publicRouter.get(routes.NOTE.GETALL, noteController.getNotes);
publicRouter.post(routes.NOTE.CREATENOTE, noteController.createNote);

export default publicRouter;
