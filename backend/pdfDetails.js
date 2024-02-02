const mongoose = require('mongoose');
 
const pdfSchema = new mongoose.Schema({
    pdf: String,
}, {collection: "PdfDetails"});

mongoose.model('PdfDetails', pdfSchema);