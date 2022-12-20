import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipienteId: string;

  @IsNotEmpty()
  @Length(5,300)
  content: string;

  @IsNotEmpty()
  category: string;

}