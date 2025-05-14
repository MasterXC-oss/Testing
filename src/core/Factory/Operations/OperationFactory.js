import { Addition, Subtraction, Multiplication, Division, Square, Reciprocal, Modulus } from './IOperations.js';

class OperationFactory {
    static CreateOperation(operationType) {
        switch (operationType) {
            case '+':
                return new Addition();
            case '-':
                return new Subtraction();
            case '*':
                return new Multiplication();
            case '/':
                return new Division();
            case 'x^2':
                return new Square();
            case '1/x':
                return new Reciprocal();
            case '%':
                return new Modulus();
            default:
                throw new Error('Operación no soportada');
        }
    }
}

export default OperationFactory;