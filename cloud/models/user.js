const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            max: 32,
            unique: true,
            index: true,
            lowercase: true,

        },
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32,

        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
            
        },
        hashed_password: {
            type: String,
            //required: true,

        },
        role: {
            type: Number,
            default: 0,

        },
        profile: {
            type: String,
            //required: true,

        },
        photo: {
            data: Buffer,
            contentType: String,

        }
    },
    {
        timestamps: true,

    }
)

module.exports = mongoose.model('User', userSchema);