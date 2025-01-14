import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rofiday23!",
  database: "phincon-bootcamp",
});
app.get("/", async (req, res) => {
  try {
    const [result, fields] = await connection.query("SELECT * FROM students");
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});
//1. endpoint get data id student
app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await connection.query(
      `SELECT * FROM student_scores WHERE id= ${id}`
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
  }
});
//2. endpoint  get all data where subject = "math"
app.get("/subject", async (req, res) => {
  try {
    const { subject } = req.query;
    console.log(subject);
    const [result] = await connection.query(
      `SELECT * FROM student_scores WHERE subject='${subject}'`
    );
    //TAMBAHKAN SESUAI TIPE DATA
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
});
//3. endpoint NILAI RATA-RATA DARI SUBJECT ENGLISH
app.get("/average", async (req, res) => {
  try {
    const [result] = await connection.query(
      `SELECT subject, AVG(score) AS avg_score_english FROM student_scores GROUP BY subject`
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
  }
});

//4. membuat endpoint getAllData yang memiliki nilai diatas rata-rata
app.get("/average-up", async (req, res) => {
  try {
    const [result] = await connection.query(
      `SELECT student_name, AVG(score) FROM student_scores GROUP BY student_name HAVING AVG(score) > 80`
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(port, () => {
  console.log(`server runnning ${port}`);
});
