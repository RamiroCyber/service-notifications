import { Body, Controller, Post } from "@nestjs/common";
import { CreateNotificationsBody } from "../dtos/createNotificationsBody";

@Controller('notifications')
export class NotificationsController {

  @Post()
  async createNotification(@Body() body: CreateNotificationsBody)  {
    const {content, recipienteId, category} = body

  }
}
