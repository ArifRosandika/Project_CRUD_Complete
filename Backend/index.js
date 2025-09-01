import express from 'express';
import db from './config/database.js';
import cors from 'cors';
import router from './router/indexRouter.js';

const app = express();


try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error(error.message);
}

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5000, () => console.log('Server running on port 5000'));