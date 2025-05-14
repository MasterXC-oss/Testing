class CalculationRequest {
    #operation;
    #a;
    #b;
  
    constructor(operation, a, b) {
        if (!operation) {
            throw new Error("La operación es requerida");
        }
        if (typeof a !== 'number') {
            throw new Error("El primer operando debe ser un número");
        }
        if (typeof b !== 'number') {
            throw new Error("El segundo operando debe ser un número");
        }

        this.#operation = operation;
        this.#a = a;
        this.#b = b;
    }

    get Operation() {
        return this.#operation;
    }

    set Operation(value) {
        if (!value) {
            throw new Error("La operación es requerida");
        }
        this.#operation = value;
    }

    get A() {
        return this.#a;
    }

    set A(value) {
        if (typeof value !== 'number') {
            throw new Error("El valor debe ser un número");
        }
        this.#a = value;
    }

    get B() {
        return this.#b;
    }

    set B(value) {
        if (typeof value !== 'number') {
            throw new Error("El valor debe ser un número");
        }
        this.#b = value;
    }

    isValid() {
        return this.#operation && 
               typeof this.#a === 'number' && 
               typeof this.#b === 'number';
    }

    toJSON() {
        return {
            operation: this.#operation,
            a: this.#a,
            b: this.#b
        };
    }
}
  
export default CalculationRequest;