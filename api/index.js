import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRoutes from './routes/user.route.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});

app.use('/api/user', userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message
  });
});

app.get('/', (req, res) => {
  res.send('Hello world');
});
