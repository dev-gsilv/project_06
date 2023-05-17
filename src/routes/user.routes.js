import { create, get } from "../controllers/user.controler";

const userRoutes = (app) => {
    app.post("/user", create);
    app.get("/user", get)
}

export default userRoutes;