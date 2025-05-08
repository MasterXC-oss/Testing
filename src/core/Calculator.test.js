import { render, screen } from "@testing-library/react";
import Calcular from "./Calculator";

test("verificar la suma de dos numeros.", () => {
    const calcular = Calcular();
    expect(calcular.Add(2, 2)).toBe(4)
})

test("Verificar la resta de dos numeros.", () => {
    const calcular = Calcular();
    expect(calcular.Subtract(5,1)).toBe(4)
})

test("Verificar la Multiplicacion de dos numeros.", () => {
    const calcular = Calcular();
    expect(calcular.Multiply(2,3)).toBe(6)
})

test("Verifica la divicion de dos numeros.", () => {
    const calcular = Calcular();
    expect(calcular.Divide(12,2)).toBe(6) 
})
test("Verifica la divicion de dos numeros.", () => {
    const calcular = Calcular();
    expect(() => calcular.Divide(0,10)).toThrow("No se puede dividir por cero.") 
})

test("Verifica el residio de dos numeros.", () => {
    const calcular = Calcular();
    expect(calcular.Modulus(10,3)).toBe(1) 
})

test("Varifica el reciprocal de un numero", () => {
    const calcular = Calcular();
    expect(calcular.Reciprocal(4)).toBe(0.25)
})

test("Varifica el reciprocal de un numero", () => {
    const calcular = Calcular();
    expect(() => calcular.Reciprocal(0)).toThrow("No se puede dividir por cero.");
})

test("Verifica la Raiz de un número.", () => {
    const calcular = Calcular();
    expect(calcular.Raiz(4)).toBe(2)
})

test("Verifica la Raiz de un número.", () => {
    const calcular = Calcular();
    expect(() => calcular.Raiz(-1)).toThrow("No se puede sacar raiz de cero.")
})
