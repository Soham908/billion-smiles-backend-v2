import mongoose, { Schema } from "mongoose";

interface ICause {
    _id: string;
    causeTitle: string;
    description: string;
    category: string;
    location: string;
    volunteerDate: Date;
    numberOfVolunteers: number;
    amountRaised: number;

    unitCost: number; // e.g., cost to feed 1 doggo
    minUnits: number; // e.g., minimum 750 doggos
    maxUnits: number; // e.g., maximum 1500 doggos
    unitDescription: string; // e.g., "Feeding one stray dog with a meal"

    image?: string;
    ngoRef: string;
    ngoName: string;
    createdAt: Date;
    supporterUsersRef: string[];
    supporterCount: number;
    status: 'Ongoing' | 'Needing Support' | 'Completed';
    needsVolunteers: boolean;
}

const causeSchema = new Schema({
    causeTitle: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    volunteerDate: { type: Date, required: true },
    numberOfVolunteers: { type: Number },
    amountRaised: { type: Number, default: 0 },

    unitCost: { type: Number, required: true },
    minUnits: { type: Number, required: true },
    maxUnits: { type: Number, required: true },
    unitDescription: { type: String, required: true },

    image: { type: String },
    ngoRef: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
    ngoName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    supporterUsersRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    supporterCount: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['Ongoing', 'Needing Support', 'Completed'],
        default: 'Needing Support'
    },
    needsVolunteers: { type: Boolean, default: false }
});

const Cause = mongoose.model<ICause>('Cause', causeSchema)

export default Cause;