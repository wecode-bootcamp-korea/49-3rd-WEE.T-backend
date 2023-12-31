const express = require("express");

const { userController } = require("../controllers");
const { asyncWrap } = require("../utils/errorHandler");
const { validateToken } = require("../utils/validateToken");

const userRouter = express.Router();

userRouter.put("/", validateToken, asyncWrap(userController.updateUser));
userRouter.post("/nickname", validateToken, asyncWrap(userController.checkDuplicatedNickname));
userRouter.get("/orders", validateToken, asyncWrap(userController.getOrderList));
userRouter.get("/", validateToken, asyncWrap(userController.getUserInfo));
userRouter.get("/grades", validateToken, asyncWrap(userController.getUserGrade));

module.exports = userRouter;