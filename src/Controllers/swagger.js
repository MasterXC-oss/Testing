import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Calculadora',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://calculator123-dmeyggbpgdc5esdp.eastus-01.azurewebsites.net/api/calculatorcontroller',
      },
    ],
  },
  apis: ['./Controllers/CalculatorController.js'], // Ajusta la ruta si está en otro lado
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerUi = swaggerUi;