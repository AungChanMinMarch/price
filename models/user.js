const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email:  {
        type: String,
        unique: [true, "email has already exists in database!"],
        lowercase: true,
        trim: true,
        required: [true, "email not provided"],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    password: {
        type: String,
        required: true
    },
    visibility: {
        type: Boolean,
        default: false
    }
})

// userSchema.index({ email: 1 }, { unique: true})

module.exports = mongoose.model("User", userSchema);