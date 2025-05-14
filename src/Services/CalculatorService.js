import ICalculatorService from './ICalculatorService.js';
import Calculator from '../core/Strategy/Calculator.js';
import DefaultStrategy from '../core/Strategy/Strategies/DefaultStrategy.js';
import OperationFactory from '../core/Factory/Operations/OperationFactory.js';

class CalculatorService extends ICalculatorService {
    #calculator;
    #lastResult;

    constructor() {
        super();
        this.#calculator = new Calculator();
        this.#lastResult = 0;
    }

    get LastResult() {
        return this.#lastResult;
    }

    set LastResult(value) {
        this.#lastResult = value;
    }

    Calculate(operation, a, b) {
        const calculator = new Calculator();
        
        const strategy = new DefaultStrategy(
            OperationFactory.CreateOperation(operation)
        );
        
        calculator.setStrategy(strategy);
        this.#lastResult = calculator.execute(a, b);
        
        return this.#lastResult;
    }

    ClearResult() {
        this.#lastResult = 0;
    }
}

export default CalculatorService;