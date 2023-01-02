import { SendNotification } from "./sendNotification";

describe("Send Notification", ()=>{

  test('Deveria poder enviar uma notificação',async ()=> {
    const sendNotification =  new SendNotification();
    const notification =  await sendNotification.execute({
      content: 'Teste de conteudo',
      recipientId: 'Exemplo',
      category: "Social"

    })
    expect(notification).toBeTruthy(); // valor que foi criado com sucesso
  });
})