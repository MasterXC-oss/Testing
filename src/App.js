import express from 'express';
import calculatorController from './Controllers/CalculatorController.js';  // Asegúrate de incluir .js
import { swaggerUi, swaggerSpec } from './swagger.js';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('¡API funcionando desde Azure!');
});

// Registrar las rutas del controlador
app.use('/api/calculatorcontroller', calculatorController);

console.log('PORT from env:', process.env.PORT);

const PORT = process.env.PORT;

if (!PORT) {
    console.error("❌ ERROR: No se encontró la variable de entorno PORT. Azure no puede iniciar la app.");
    process.exit(1); // Termina la app para que Azure sepa que falló
}

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});

export default app;
