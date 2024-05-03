import { Firma } from "@prisma/client";

export class CreateRealtorDto {
  name: string;
  is_active: boolean;
  deactive_date: Date;
  photo: string;
  login: string;
  password: string;
  // firma_id: number;
}
