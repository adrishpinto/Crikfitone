import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  countryCode: String,
  message: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
