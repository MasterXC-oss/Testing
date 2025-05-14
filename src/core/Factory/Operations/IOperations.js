import IOperation from "../IOperation.js";

class Addition extends IOperation {
  execute(a, b = 0) {
    return a + b;
  }
}

class Subtraction extends IOperation {
  execute(a, b = 0) {
    return a - b;
  }
}

class Multiplication extends IOperation {
  execute(a, b = 0) {
    return a * b;
  }
}

class Division extends IOperation {
  execute(a, b = 1) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }
}

class Square extends IOperation {
  execute(a) {
    return a * a;
  }
}

class Reciprocal extends IOperation {
  execute(a) {
    if (a === 0) throw new Error("No se puede dividir entre cero");
    return 1 / a;
  }
}

class Modulus extends IOperation {
  execute(a, b = 1) {
    return a % b;
  }
}

export {
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Square,
  Reciprocal,
  Modulus,
};