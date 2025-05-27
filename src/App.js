import express from 'express';
import calculatorController from './Controllers/CalculatorController.js';  // Asegúrate de incluir .js

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡API funcionando desde Azure!');
});

// Registrar las rutas del controlador
app.use('/api/calculatorcontroller', calculatorController);

console.log('PORT from env:', process.env.PORT);

const PORT = process.env.PORT || 3000;

console.log('PORT from env:', process.env.PORT);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
