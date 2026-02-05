import mongoose from "mongoose";

const Schema = mongoose.Schema;
const recruitSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  phone: { type: String, required: true },
  contact: { type: String, required: true },
  type: { type: String, required: true },
  timestamp: { type: Date, default: Date.now, expires: 172800 }, // 48 hours
});
const Recruit =
  mongoose.models && "Recruit" in mongoose.models
    ? mongoose.models.Recruit
    : mongoose.model("Recruit", recruitSchema);
export default Recruit;
