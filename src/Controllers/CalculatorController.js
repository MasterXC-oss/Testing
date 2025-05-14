import express from 'express';
import CalculatorService from '../Services/CalculatorService.js';  // Añadimos la extensión .js

const router = express.Router();
const calculatorService = new CalculatorService();

// GET api/CalculatorController
router.get('/', (req, res) => {
    return res.json(['value1', 'value2']);
});

// GET api/CalculatorController/5
router.get('/:id', (req, res) => {
    return res.json('value');
});

// POST api/CalculatorController
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