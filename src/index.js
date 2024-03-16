import app from "./app.js";
import { PORT } from "./config.js";
import boardRoutes from './routes/boards.routes.js'

app.listen(PORT, () => {
  console.log(`App run in port ${PORT}⚡`);
});

app.use(boardRoutes);
