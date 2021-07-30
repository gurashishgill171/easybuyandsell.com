const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const Products = mongoose.Schema({

    name: {
        type: String,
        es_indexed:true,
        es_analyzer: 'my_english_analyzer',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        es_indexed:true,
        required: true
    },
    description: {
        type: String,
        es_indexed:true,
        es_analyzer: 'my_english_analyzer',
        required: true
    },
    price: {
        type: String,
        required: true
    }
    ,
    imageUrl:[],
    seller:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

Products.plugin(mongoosastic, 
     {hydrate:true, 
      hydrateOptions: {lean: true},
      hosts: [
        'localhost:9200'
      ]});


    // mongoose.model("Products",Products).createMapping({
    //     "settings": {
    //         "analysis": {
    //           "analyzer": {
    //             "my_english_analyzer": {
    //               "type": "standard",
    //               "max_token_length": 10,
    //               "stopwords": "_english_"
    //             }
    //           }
    //         }
    //       }
    //  }, (err, mapping)=> {
    //     if (err) console.log(err);
    //     else console.log(mapping);
    // });

module.exports=mongoose.model("Products",Products);