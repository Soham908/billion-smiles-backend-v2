import mongoose, { Document, Schema } from 'mongoose';

export interface IComment {
  userId: mongoose.Types.ObjectId;
  commentUsername: string;
  commentText: string;
  createdAt?: Date;
}

export interface ILike {
  userId: mongoose.Types.ObjectId;
  likedUsername: string;
}

export interface IPost extends Document {
  userId: mongoose.Types.ObjectId;
  imageUrl: string;
  caption: string;
  campaignId?: mongoose.Types.ObjectId;
  tags: string[];
  likes: number;
  likedBy: ILike[];
  comments: IComment[];
  visibility: 'public' | 'private';
  shares: number;
  companyLogoUrl?: string;
}

const commentSchema = new Schema<IComment>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commentUsername: { type: String },
  commentText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new Schema<IPost>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, required: true },
  caption: { type: String, trim: true, maxLength: 500 },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'campaigns' },
  tags: [{ type: String, trim: true }],
  likes: { type: Number, default: 0 },
  likedBy: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, likedUsername: { type: String } }],
  comments: [commentSchema],
  visibility: { type: String, enum: ['public', 'private'], default: 'public' },
  shares: { type: Number, default: 0 },
  companyLogoUrl: String
}, {
  timestamps: true,
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
