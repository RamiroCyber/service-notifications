import { ContentNotification } from "./content-notification";

export interface INotification {
  content: ContentNotification;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private notification: INotification;

  constructor(notification: INotification) {
    this.notification = notification;
  }

  public get content(): ContentNotification{
    return this.notification.content;
  }

  public set content(content: ContentNotification) {
    this.notification.content = content;
  }

  public get category(): string {
    return this.notification.category;
  }

  public set category(category: string) {
    this.notification.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.notification.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.notification.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.notification.createdAt;
  }

  public set recipientId(recipientId: string) {
    this.notification.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.notification.recipientId;
  }
}