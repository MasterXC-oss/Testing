class ICalculatorService {
    get LastResult() {
        throw new Error("El método get LastResult debe ser implementado");
    }

    set LastResult(value) {
        throw new Error("El método set LastResult debe ser implementado");
    }

    Calculate(operation, a, b) {
        throw new Error("El método Calculate debe ser implementado");
    }

    ClearResult() {
        throw new Error("El método ClearResult debe ser implementado");
    }
}

export default ICalculatorService;