import express from 'express';
import calculatorController from './Controllers/CalculatorController.js';  // Asegúrate de incluir .js

const app = express();
app.use(express.json());

// Registrar las rutas del controlador
app.use('/api/CalculatorController', calculatorController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
