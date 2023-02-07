import { Schema, model, models } from "mongoose";

interface Item {
  title: String;
  image: String;
  price: String;
  description: String;
  email: String;
}

const ItemSchema = new Schema<Item>({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String,
});

export const ItemModel = models.Item || model<Item>("Item", ItemSchema);
