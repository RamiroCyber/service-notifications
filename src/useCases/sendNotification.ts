import { Notification } from "../entities/notification";
import { ContentNotification } from "../entities/content-notification";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export class SendNotification {
  async execute(request : ISendNotificationRequest): Promise<Notification> {
    const {recipientId, content, category } = request

    const notification = new Notification({
      recipientId,
      content : new ContentNotification(content),
      category,
    })
    return notification;
  }
}