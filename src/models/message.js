import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: String,
  countryCode: String,
  phoneNumber: String,
  message: String,
}, { timestamps: true });

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);