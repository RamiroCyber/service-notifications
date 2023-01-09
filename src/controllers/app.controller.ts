import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { randomUUID } from "node:crypto"
import { CreateNotificationsBody } from "../dtos/createNotificationsBody";

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationsBody)  {

    const {content, recipienteId, category} = body

    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        recipienteId,
        content,
        category,
      }
    })
  }
}
