import { ContentNotification } from "./contentNotification";


describe("Teste content",()=>{

  test('Deveria poder criar um conteudo',()=> {
    const content =  new ContentNotification('Teste de conteudo')

    expect(content).toBeTruthy(); // valor que foi criado com sucesso
  });

  test('Deveria não ser possivel criar conteudo acima de 300 caracters',()=> {

    expect(()=> new ContentNotification('Teste de conteudo'.repeat(100))).toThrow(); // teste passar se lançar uma exceção
  });

})

