import ICalculatorStrategy from '../ICalculatorStrategy.js';

class DefaultStrategy extends ICalculatorStrategy {
    #operation;

    constructor(operation) {
        super();
        this.#operation = operation;
    }

    execute(a = 0, b = 0) {
        return this.#operation.execute(a, b);
    }
}

export default DefaultStrategy;