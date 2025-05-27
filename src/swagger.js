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
          url: 'https://calculator123-dmeyggbpgdc5esdp.eastus-01.azurewebsites.net/api/calculatorcontroller', // en minúsculas
          description: 'Servidor en Azure',
        },
        {
          url: 'http://localhost:3000/api/calculatorcontroller',
          description: 'Servidor local para pruebas',
        },
      ],
    },
    apis: ['./Controllers/CalculatorController.js'],
  };
  

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };