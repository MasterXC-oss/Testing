import {Addition,Subtraction, Multiplication, Division, Square, Reciprocal, Modulus} from "./Operations";

function OperationFactory(operationType) {
    switch (operationType) {
      case "+":
        return new Addition();
      case "-":
        return new Subtraction();
      case "*":
        return new Multiplication();
      case "/":
        return new Division();
      case "%":
        return new Modulus();
      case "1/x":
        return new Reciprocal();
      case "x^2":
        return new Square();
      default:
        throw new Error("Operación no soportada");
    }
  }
  
  export default OperationFactory;