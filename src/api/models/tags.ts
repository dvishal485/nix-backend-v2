import mongoose, { Schema } from "mongoose";

export enum TagType {
  Author,
  Designer,
  Illustrator,
  Photographer,
  Other,
}

// TODO: discuss if it is required or we can remove it (by only extending the enum for this stuff)
export interface ITag {
  tag_name?: string;
  users: mongoose.Schema.Types.ObjectId[];
}

// export const tagSchema = new Schema<ITag>([
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//   },
// ]);
