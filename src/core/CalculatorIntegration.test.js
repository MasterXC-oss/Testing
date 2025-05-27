import Calcular from "./Calculator";

test("Verifica la suma de dos números", ()  => {
    const  calcular = Calcular();
    const resultadoSuma = 6;
    const resultadoResta = 1;

    expect(calcular.Subtract(3, 2)).toBe(resultadoResta);
    expect(calcular.Add(5,calcular.Subtract(3, 2))).toBe(resultadoSuma);
})

test("Verifica la Resta de dos números", ()  => {
    const  calcular = Calcular();
    const resultadoMultiplica = 4;
    const resultadoResta = 1;

    expect(calcular.Multiply(2, 2)).toBe(resultadoMultiplica);
    expect(calcular.Subtract(5,calcular.Multiply(2, 2))).toBe(resultadoResta);
})

test("Verifica la Multiplicación de dos números", ()  => {
    const  calcular = Calcular();
    const resultadoMultiplica = 0;
    const resultadoResta = 0;

    expect(calcular.Subtract(2, 2)).toBe(resultadoResta);
    expect(calcular.Multiply(5,calcular.Subtract(2, 2))).toBe(resultadoMultiplica);
})

test("Verifica la División de dos números", ()  => {
    const  calcular = Calcular();
    const resultadoMultiplica = 0;

    expect(calcular.Multiply(2, 0)).toBe(resultadoMultiplica);
    expect(() => calcular.Reciprocal(calcular.Multiply(2, 0),5)).toThrow("No se puede dividir por cero.");
})

test("Verifica la Raiz de dos números", ()  => {
    const  calcular = Calcular();
    const resultadoMultiplica = 64;

    expect(calcular.Subtract(65,1)).toBe(resultadoMultiplica);
    expect(calcular.Raiz(calcular.Subtract(65,1))).toBe(8);
})