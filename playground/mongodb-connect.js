const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'Chris', age: 49};
// var {name} = user;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'CG',
    //     age: '49',
    //     location: 'Huntsville'
    // }, (err, result) =>{
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // });

    db.close();
});