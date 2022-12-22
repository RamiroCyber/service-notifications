export interface INotification {
  content: string;
  category: string;
  readAt? : Date
}

export class Notification {
  private notification: INotification;

  constructor(notification: INotification) {
    this.notification = notification;
  }

  public set content(content: string) {
    this.notification.content = content;
  }

  public get content(): string {
    return this.notification.content;
  }
}