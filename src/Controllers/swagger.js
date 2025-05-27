import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Calculadora',
      version: '1.0.0',
      description: 'Documentación de la API de Calculadora con Swagger',
    },
    servers: [
      {
        url: 'https://calculator123-dmeyggbpgdc5esdp.eastus-01.azurewebsites.net/api/CalculatorController',
        description: 'Servidor en Azure',
      },
    ],
  },
  apis: ['./Controllers/CalculatorController.js'], // aquí va la ruta de tus rutas
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };