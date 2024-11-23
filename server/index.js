import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.APIPORT || 3000;
const corsOptions = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  credential: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const db = new pg.Pool({
  connectionString: process.env.POSTGRES_URL,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    console.log("test 1");
    const result = await db.query("SELECT * FROM todolist ORDER BY date");
    console.log("test 2");
    res.send(result.rows);
    console.log("test 3");
    res.status(200).json(result.rows);
    console.log("test 4");
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
