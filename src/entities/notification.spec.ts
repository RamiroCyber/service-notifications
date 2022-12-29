import { Notification } from "./notification";
import { ContentNotification } from "./content-notification";


describe("Teste notification",()=>{

  test('Deveria poder criar uma notificação',()=> {
    const notification =  new Notification({
      content: new ContentNotification("Solicitação de amizado"),
      category: "social",
      recipientId: "teste",
    });

    expect(notification).toBeTruthy(); // valor que foi criado com sucesso
  });

  test('Deveria não ser possivel criar conteudo acima de 300 caracters',()=> {

    expect(()=> new ContentNotification('Teste de conteudo'.repeat(100))).toThrow(); // teste passar se lançar uma exceção
  });

})

