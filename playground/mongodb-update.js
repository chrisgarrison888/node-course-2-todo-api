const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c34b05d9da32b3fcb74e9ba')
    }, {
        $set: {
            name: 'EditedJen'
        }
        ,
        // $inc: {
        //     age: 1
        // }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

db.close();
});