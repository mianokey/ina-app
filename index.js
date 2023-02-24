import express from "express";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
app.use(cors({ credentials:true, origin:'*' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
