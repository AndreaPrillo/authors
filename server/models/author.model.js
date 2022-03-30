const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
            required: [
                true,
                "Name is required"
            ],
            minLength:[3,"Name must be more than 3 letters"],
            unique: true

    },
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);
