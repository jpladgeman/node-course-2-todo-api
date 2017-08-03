// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connnected to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: 'blah blah',
    //     completed: false
    // }, (err, result) => {
    //
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    db.collection('Users').insertOne({
        name: 'Jordanc Thomas Pladgeman',
        age: 23,
        location: '1655 East University Drive, Tempe, AZ, 85281'
    }, (err, result) => {

        if (err){
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });




    db.close();
});