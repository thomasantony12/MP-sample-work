import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const db = new pg.Pool({
  connectionString: process.env.POSTGRES_URL,
});

db.connect();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM todolist ORDER BY date");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(403).json({ message: "NO data available!" });
    console.log(err);
  }
});

app.post("/newTask", async (req, res) => {
  try {
    const task = req.body.item;
    const status = "Active";
    await db.query("INSERT INTO todolist (task, status) VALUES ($1, $2)", [
      task,
      status,
    ]);
  } catch (err) {
    res.status(403).json({ message: "Cannot insert!" });
    console.log("/newTask", err);
  }
});

app.delete("/deleteTask", async (req, res) => {
  try {
    const id = req.body.dId;
    await db.query("DELETE FROM todolist WHERE id = $1", [id]);
    res.status(200).json({ message: "delete successful!" });
  } catch (err) {
    res.status(403).json({ message: "Cannot delete!" });
    console.log("/deleteTask", err);
  }
});

app.patch("/updateTask", async (req, res) => {
  try {
    const id = req.body.dId;
    const task = req.body.task;
    await db.query("UPDATE todolist SET task=$1 WHERE id = $2", [task, id]);
    res.status(200).json({ message: "Updated!" });
  } catch (err) {
    res.status(403).json({ message: "Cannot update!" });
    console.log("/updateTask", err);
  }
});

app.patch("/updateStatus", async (req, res) => {
  try {
    const id = req.body.dId;
    const status = req.body["status"];
    await db.query("UPDATE todolist SET status=$1 WHERE id = $2", [status, id]);
    res.status(200).json({ message: "Status updated!" });
  } catch (err) {
    res.status(403).json({ message: "Cannot update status!" });
    console.log("/updateStatus", err);
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
