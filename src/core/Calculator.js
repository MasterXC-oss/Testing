

function Calcular() {

    /** 
    * Suma de dos Numeros.
    * @param {Number} a El primer numero a sumar.
    * @param {Number} b El segundo numero a sumar.
    * 
    * @returns {Number} La suma de a + b.
    * @example 
    * console.log (Add(2, 5)) //5
    */
    const Add = (a, b) => a + b;

    /**
     * Restas de dos numeros.
     * @param {Number} a El primer numero a restar.
     * @param {Number} b El segundo numero a restar.
     * @returns {Number} La resta de a - b.
     *  
     * @example 
     * console.log (Subtract(5, 2)) //3
     *  
     */
    const Subtract = (a, b) => a - b;

    /**
     * Multiplicar dos numeros
     * @param {Number} a El primer numero a mutiplicar
     * @param {Number} b El segundo numero a mutiplicar
     * @returns {Number} La multiplicacion de a * b
     * @example 
     * console.log (Multiply(6, 2)) //12
     * 
     */
    const Multiply = (a, b) => a * b;

    /**
     * Dividir dos numeros 
     * @param {Number} a El primer numero a Dividir
     * @param {Number} b El sugundo numero a Dividir 
     * @returns {Number} El resultado de la Divicion de a / b
     * 
     * @example
     * Console.log(Divide(6,2)) //3
     */
    const Divide = (a, b) => {
        if (a == 0 ) throw new Error("No se puede dividir por cero.");

        return a / b
    }

    /**
     * residuo de la división entre esos dos numeros.
     * @param {Number} a El primer numero para la division
     * @param {Number} b El segundo numero para la division
     * @returns {Number} El residuo de la division de a % b
     * 
     * @example
     * console.log(Modulus(10,3)) //1
     */
    const Modulus = (a, b) => a % b;

    /**
     * Reciprocal de un numero
     * @param {Number} a El número del cual se desea obtener el recíproco.
     * @returns {number} El recíproco de a.
     * @throws {Error} Lanza un error si `a` es igual a 0.
     * 
     * @example
     * console.log(Reciprocal(4)) //0.25
     */
    const Reciprocal = (a) => {
        if (a == 0) throw new Error("No se puede dividir por cero.");        
             
        return 1 / a
    }

    /**
     * Raiz de un numero
     * @param {Number} a El número del cual se desea obtener la raíz cuadrada.
     * @returns {number} La raíz cuadrada de a.
     * @throws {Error} Lanza un error si `a` es menor que 0.
     *  @example
     * console.log(Raiz(4)) //2
     */
    const Raiz = (a) => {
        if (a < 0) throw new Error("No se puede sacar raiz de cero.");        
             
        return Math.sqrt(a)
    }

    return {
        Add,
        Subtract,
        Multiply,
        Divide,
        Modulus,
        Reciprocal,
        Raiz
    }



}
export default Calcular