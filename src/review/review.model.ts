/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";

export interface ReviewModel extends Base { }
export class ReviewModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  raiting: number;

  // @prop()
  // createdAt: Date;

  @prop()
  productId: Types.ObjectId;
}
