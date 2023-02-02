const Router = require("express").Router();

const matchController = require("../controllers/matchController");
const {checkAssociation} = require("../controllers/matchController");
Router.get("/agents", matchController.addAgents);
Router.get("/",checkAssociation);


module.exports = Router;
