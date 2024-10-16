import express from 'express'
const app = express();
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
dotenv.config();


// all Route import 
import UserSportRoute from './routes/UserSportRoute.js'
import AuthRoute from './routes/AuthRoute.js'
import AdminSportRoute from './routes/AdminSportRoute.js'
const PORT = process.env.PORT || 8000;



app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// all routes

app.use('/api/auth', AuthRoute);
app.use('/api/user', UserSportRoute);
app.use('/api/admin', AdminSportRoute);

// app.get("/", (req, res) => {
// 	res.send("Jai Shree Ram !!");
// })


// console.log(process.env.MONGO_URL);
const MONGO_URL = "mongodb+srv://nandaaman1234:5BHbKoY9dGvAJRFu@cluster0.zi3ou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connect = async () => {
	try {
		await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
		app.listen(PORT, () => {
			console.log(`Connection established at localhost:${PORT}`);
		});
	} catch (err) {
		console.error('Error connecting to MongoDB:', err);
	}
};

connect();


app.use(express.static(path.resolve(path.resolve(), 'frontend', 'build')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.resolve() + '/frontend/build/index.html'))
})

