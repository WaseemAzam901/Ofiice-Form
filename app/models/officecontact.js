import mongoose, { Schema } from "mongoose";

const officecontactSchema = new Schema ( {
    fullname: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,"Invalid email address"],
    },
    message:{
        type: String,
        required: [true, "Message is Required"],
        
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Officecontact = mongoose.models.Officecontact || mongoose.model("Officecontact", officecontactSchema);

export default Officecontact;
