import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  badgesEarned: string[];
  userType: 'user' | 'ngo';

  // NGO-specific fields
  organizationName: string,
  registrationId: string,
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  badgesEarned: { type: [String] },
  userType: { type: String, enum: ['user', 'ngo'], default: 'user' },

  // NGO-specific fields
  organizationName: String,
  registrationId: String,
});


const User = mongoose.model<IUser>('User', userSchema);

export default User;
