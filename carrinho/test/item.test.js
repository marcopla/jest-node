import Item from '../item';

describe('Testes dos itens', () => {
  it('Deve ter 3: nome, valor e quantidade', () => {
    const item = new Item('beterraba', 2.5, 10);
    expect(item.nome).toBe('Beterraba');
    expect(item.value).toBe(2.5);
    expect(item.quantidade);
  });
  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('beterraba', 2.5, 10);
  });
});
