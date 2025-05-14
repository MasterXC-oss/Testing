class Calculator {
    constructor() {
        this.strategy = null;
        this.result = 0;
    }
  
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    execute(a, b) {
        if (!this.strategy) {
            throw new Error("No se ha establecido ninguna operación");
        }
        this.result = this.strategy.execute(a, b);
        return this.result;
    }

    getResult() {
        return this.result;
    }

    clearResult() {
        this.result = 0;
    }
}

export default Calculator;