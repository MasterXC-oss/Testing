class IOperation {
    execute(a, b = 0) {
      throw new Error("Método 'execute' no implementado");
    }
  }

export default IOperation;