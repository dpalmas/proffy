import express from 'express';

const app = express();

app.use(express.json()); 

app.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
}); 

app.listen(3333);  