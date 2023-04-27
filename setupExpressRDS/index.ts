import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
const { Sequelize } = require('sequelize');
// import { patients } from './mocks/db';
// import { db } from "./firebase/firebase";
//import { FieldValue } from 'firebase-admin/firestore';

dotenv.config();

const app = express();
const port = process.env.PORT;

let sequelize = new Sequelize('patients', 'master', '', {
  dialect: 'mysql',
  host: 'db-test.c9peqptmwxu9.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialectOptions: {
    //requestTimeout: 30000,
    //encrypt: true,
    //ssl: true
  }
});

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  // const peopleRef = db.collection('people').doc('tester');
  // const doc = await peopleRef.get();
  // if (!doc.exists) {
  //   return res.sendStatus(400);
  // }
  // const user = doc.data();
  // if (!username || !user || !(user.username === username && user.password === password)) {
  //   return res.sendStatus(404)
  // }
  const user = { username: '' }

  //jwt
  const token = jwt.sign({ /*user_id: user.Id,*/ email: username },  "jwtprivatekey", { expiresIn: "2h" });
  res.status(200).json({ token, user: {...user, email: user.username} });
})

app.get('/api/patients', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  const decoded = jwt.verify(token, "jwtprivatekey");
  if (typeof decoded === 'string') {
    return res.sendStatus(401);
  }

  res.status(200).send()
})

app.post('/api/patients/add', async (req, res) => {
  const { firstName, middleName, lastName, email, phone } = req.body;

  res.status(200).send()
})

app.patch('/api/patients/update', async (req, res) => {
  const { id, info, record } = req.body;

  res.status(200).send()
})

app.delete('/api/patients/:id', async (req, res) => {
  const { id } = req.query;

  res.status(200).send()
})

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
