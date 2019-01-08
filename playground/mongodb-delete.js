const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');


   //deleteMany
   //  db.collection('Users').deleteMany({name: 'CG'}).then((result) => {
   //      console.log(result);
   //  });


    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete

     // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
     //     console.log(result);
     // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c34af4ba9d1643fb47c48ce')
    }).then((result) => {
        console.log(result);
    });
});