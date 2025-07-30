
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    npm: {
        type: Number,
    },
    nama: {
        type: String,
    },
    
    kelas: {
        type: String,
    },

    kategori: {
        type: String
    }
    
    
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Product",productSchema);