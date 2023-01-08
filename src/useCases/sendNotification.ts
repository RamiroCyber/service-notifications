import { Notification } from "../entities/notification";
import { ContentNotification } from "../entities/contentNotification";
import { NotificationsRepository } from "../repositories/notificationsRepository";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export class SendNotification {
  constructor(private notificationsRepository : NotificationsRepository) {}

  async execute(request : ISendNotificationRequest): Promise<Notification> {
    const {recipientId, content, category } = request

    const notification = new Notification({
      recipientId,
      content : new ContentNotification(content),
      category,
    })

    await this.notificationsRepository.create(notification);
    return notification;
  }
}