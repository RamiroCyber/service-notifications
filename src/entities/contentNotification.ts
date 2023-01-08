export class ContentNotification {
  private readonly content: string;

  constructor(content: string) {

    if (!this.validContent(content)) {
      throw new Error("Content erro");
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validContent(content: string): boolean {
    return content.length <= 300;
  }
}