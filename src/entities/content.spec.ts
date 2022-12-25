import { ContentNotification } from "./content-notification";

test('Teste incial',()=> {
  const content =  new ContentNotification('Teste de conteudo')

  expect(content).toBeTruthy(); // valor que foi criado com sucesso
});

test('Não deve ser possivel criar conteudo acima de 300 caracters',()=> {

  expect(()=> new ContentNotification('Teste de conteudo'.repeat(100))).toThrow(); // teste passar se lançar uma exceção
});