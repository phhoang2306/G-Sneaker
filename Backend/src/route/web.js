import express from "express";
import homeControllers from "../controllers/homeControllers";
import userControllers from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/api/get-shoes-info', userControllers.handleGetShoesInfo);
    return app.use('/', router);
}

module.exports = initWebRoutes