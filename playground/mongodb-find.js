//const {MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c34b23a9c6fe62c78afb6bd')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    //     }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    var nnn = 'CG';
    db.collection('Users').find({name: nnn}).toArray().then((docs) => {
        console.log('Todos = by name');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error received = ', err);
    });

    db.close();
});