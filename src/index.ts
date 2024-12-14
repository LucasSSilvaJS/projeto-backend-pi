import * as dotenv from 'dotenv';
import "reflect-metadata";
import app from './app';
import { AppDataSource } from './database/data-source';

dotenv.config();

const PORT = 3000;

AppDataSource.initialize()
.then(async () => {
    console.log('Database connection success!')
})
.catch(error => {
    console.error(error)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})