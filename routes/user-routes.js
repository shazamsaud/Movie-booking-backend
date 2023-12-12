import express from "express";

import { addUser, deleteUser, getAllUsers, getBookingsofUser, login, updateUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

// userRouter.get("/",(req,res)=>{
//     res.send("workinggggggggggggg")
// });

userRouter.get("/",getAllUsers)
// });

userRouter.post("/signup",addUser)
userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",login)
userRouter.get("/booking/:id",getBookingsofUser)
export default userRouter;