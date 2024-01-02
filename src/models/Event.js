import { model, models, Schema } from "mongoose";

const EventSchema = new Schema(
  {
    type: String, // click or view
    page: String, // for example "dev"
    uri: String, // /dev | https://
  },
  { timestamps: true }
);

export const Event = models?.Event || model("Event", EventSchema);
