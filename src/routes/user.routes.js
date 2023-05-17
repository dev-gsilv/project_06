import { create, get, getId } from "../controllers/user.controler";

const userRoutes = (app) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getId);
}

export default userRoutes;