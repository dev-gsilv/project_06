import { create } from "../controllers/user.controler";

const userRoutes = app => {
    app.post("/user", create);
}

export default userRoutes;