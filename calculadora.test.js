const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(2, 3)).toBe(5);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(5, 2)).toBe(3);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
});