import express from 'express';
import calculatorController from './Controllers/CalculatorController.js';

const app = express();
app.use(express.json());

// Ruta raíz para evitar error 403
app.get('/', (req, res) => {
  res.send('API Calculadora - funcionando correctamente');
});

// Registrar las rutas del controlador
app.use('/api/CalculatorController', calculatorController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
