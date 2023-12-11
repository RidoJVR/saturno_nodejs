import app from './app.js';
import PORT from config.js;
import { config } from 'dotenv';
const port = 3005;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
