const mongoose =  require('mongoose');
const Schema = mongoose.Schema; // Schema is going to define the structure of the document in the collection. It is the thing that the model wraps around.

// 1. Create a schema
const blogSchema = new Schema({ // We need to pass in an object to the Schema to define the structure of the document
   title: {
        type: String,
        required: true
   },
   snippet: {
        type: String,
        required: true
   },
   body: {
        type: String, 
        required: true
   }
}, { timestamps: true }); 

// 2. Create a model
// The model is a wrapper around the schema that gives us an interface to interact with a certain collection in the database
const Blog = mongoose.model('Blog', blogSchema); // The first argument is the name of the collection in the database. The second argument is the schema that we want to use for the collection

module.exports = Blog; // We are exporting the model so that we can use it in other files