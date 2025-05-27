import express from 'express';
import CalculatorService from '../Services/CalculatorService.js';

const router = express.Router();
const calculatorService = new CalculatorService();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener valores predefinidos
 *     responses:
 *       200:
 *         description: Lista de valores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/', (req, res) => {
    return res.json(['value1', 'value2']);
});

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Obtener un valor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Valor obtenido
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get('/:id', (req, res) => {
    return res.json('value');
});

/**
 * @swagger
 * /calculate:
 *   post:
 *     summary: Realizar una operación matemática
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               operation:
 *                 type: string
 *                 example: add
 *               a:
 *                 type: number
 *                 example: 5
 *               b:
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Resultado de la operación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
router.post('/calculate', (req, res) => {
    try {
        const { operation, a, b } = req.body;
        const result = calculatorService.Calculate(operation, Number(a), Number(b));
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default router;