/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { prop } from "@typegoose/typegoose";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";

export interface AuthModel extends Base { }
export class AuthModel extends TimeStamps{

  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;

}
