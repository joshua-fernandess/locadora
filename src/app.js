import e from "express";
import "dotenv/config";
import user_router from "./routes/user-route.js";
import movie_router from "./routes/movie-route.js";
import rental_router from "./routes/rent-route.js";

const app = e();

app.use(e.json());

app.use("/users", user_router);
app.use("/movies", movie_router);
app.use("/rentals", rental_router);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));