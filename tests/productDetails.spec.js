const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('Teste se productDetails é uma função.', () => {
  it('', () => {
// ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    // Teste se o retorno da função é um array.
   expect(Array.isArray(productDetails('mask', 'alcool'))).toBeTruthy();
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
     // Teste se o array retornado pela função contém dois itens dentro.
     expect(productDetails('mask', 'alcool').length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
     // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('mask', 'alcool')).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
     // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
   expect(productDetails('one', 'two')[0]).not.toMatchObject(productDetails('one', 'two')[1]);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('mask', 'Máscara')).toMatchObject([
      {
        name: 'mask',
        details: {
          productId: 'mask123',
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123',
        }
      }
    ]);
  });
  });
