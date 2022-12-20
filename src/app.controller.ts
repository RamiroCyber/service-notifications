import { Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { randomUUID } from "node:crypto"

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification()  {
    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        content: 'Você foi marcado em uma foto',
        category: 'solicitações',
        recipienteId: randomUUID()
      }
    })
  }
}
