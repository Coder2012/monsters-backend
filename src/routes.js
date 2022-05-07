const { Router } = require("express");
const KidsController = require("./controllers/KidsController");
const TaskController = require("./controllers/TaskController");

const route = Router();

route.post("/kids", KidsController.AddKid);
route.get("/kids/:id", KidsController.FetchOneKid);
route.get("/kids", KidsController.FetchAllKids);
route.put("/kids/:id", KidsController.UpdateOneKid);
route.delete("/kids/:id", KidsController.DeleteOneKid);

route.post("/tasks", TaskController.AddTask);
route.get("/tasks/:id", TaskController.FetchOneTask);
route.get("/tasks", TaskController.FetchAllTasks);
route.put("/tasks/:id", TaskController.UpdateOneTask);
route.delete("/tasks/:id", TaskController.DeleteOneTask);

module.exports = route;
