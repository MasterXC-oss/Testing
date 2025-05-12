import ICalculatorStrategy from '../ICalculatorStrategy';

class DefaultStrategy extends ICalculatorStrategy {
  #operation;

  constructor(operation) {
    super();
    this.#operation = operation;
  }

  calculate(a = 0, b = 0) {
    return this.#operation.execute(a, b);
  }
}

export default DefaultStrategy;