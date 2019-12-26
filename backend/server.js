const express=require('express');
const router=express.Router();
const {MongoClient,ObjectID} =require('mongodb');
const bodyParser =require('body-parser');
const assert =require('assert');

const app =express();
app.use(bodyParser.json());

const mongo_url='mongodb://localhost:27017'
const database='mayantailoreddatabase'

MongoClient.connect(mongo_url, { useNewUrlParser: true },(err,client)=>{
    assert.equal(err,null,'database connection failled') 
    const db=client.db(database)
    app.get('/ShowRoom',(req,res)=>{
        db.collection('product').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch products")
                else {res.send(data)}
        });
    })
    app.get('/Events',(req,res)=>{
        db.collection('event').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch events")
                else {res.send(data)}
        });
    })
    app.get('/Administration',(req,res)=>{
        db.collection('user').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch users")
                else {res.send(data)}
        });
    })
    app.get('/Administration/:id',(req,res)=>{
        let id = ObjectID(req.params.id)
        db.collection('user').findOne({_id: id},(err,data)=>{
         if(err)   res.send("error: can not fetch user")
         else {res.send(data) }})
    })
    app.get('/ShowRoom/:id', (req,res) => {
        let id = ObjectID(req.params.id)
        db.collection('product').findOne({_id: id},(err,data)=>{
         if(err)   res.send("error: can not fetch product")
         else {res.send(data) }})
        });
        app.post("/ShowRoom/:id/makeorder", (req, res) => {
            let newOrder = req.body
            db.collection("order").insertOne(newOrder, (err, data) => {
              if (err) res.send("cant add order");
              else res.send(data);
            });
          });
    app.get('/Events/:id', (req,res) => {
        let id = ObjectID(req.params.id);
        db.collection('event').findOne({_id: id},(err,data)=>{
            if(err)   res.send("error: can not fetch event")
            else {res.send(data) }})
        });

    app.get('/Administration/:id/products', (req,res) => {
            db.collection('product').find().toArray(
                (err,data)=>{
                    if (err) res.send("error: can not fetch products")
                    else {res.send(data)}
            });
            });
    app.get('/Administration/:id/events', (req,res) => {
                db.collection('event').find().toArray(
                    (err,data)=>{
                        if (err) res.send("error: can not fetch events")
                        else {res.send(data)}
                });
                });
    app.get('/Administration/:id/orders', (req,res) => {
                    db.collection('order').find().toArray(
                        (err,data)=>{
                            if (err) res.send("error: can not fetch orders")
                            else {res.send(data)}
                    });
                    });
    app.delete('/Administration/:id/products/delete/:id', (req, res) => {
        let id = ObjectID(req.params.id);
        db.collection("product").findOneAndDelete(
            { _id: id }, (err, data) => {
                if (err) res.send("can not delete product");
                else res.send(data);
        });
    });
    app.put('/Administration/:id/products/edit/:id', (req,res) => {
        let id = ObjectID(req.params.id);
        let body=req.body
        db.collection("product").findOneAndUpdate({_id : id},{$set : {...body}},
            (err,data)=>{
                if(err)   res.send("can not modify product")
                else res.send("product edited")
        }); });
        app.post("/Administration/:id/products/add", (req, res) => {
            let newProduct = req.body
            db.collection("product").insertOne(newProduct, (err, data) => {
              if (err) res.send("cant add product");
              else res.send(data);
            });
          });
          /***************/
          app.delete('/Administration/:id/events/delete/:id', (req, res) => {
            let id = ObjectID(req.params.id);
            db.collection("event").findOneAndDelete(
                { _id: id }, (err, data) => {
                    if (err) res.send("can not delete event");
                    else res.send(data);
            });
        });
        app.put('/Administration/:id/events/edit/:id', (req,res) => {
            let id = ObjectID(req.params.id);
            let body=req.body
            db.collection("event").findOneAndUpdate({_id : id},{$set : {...body}},
                (err,data)=>{
                    if(err)   res.send("can not modify event")
                    else res.send("product edited")
            }); });
            app.post("/Administration/:id/events/add", (req, res) => {
                let newEvent = req.body
                db.collection("event").insertOne(newEvent, (err, data) => {
                  if (err) res.send("cant add event");
                  else res.send(data);
                });
              });
                        /***************/
          app.delete('/Administration/:id/orders/delete/:id', (req, res) => {
            let id = ObjectID(req.params.id);
            db.collection("order").findOneAndDelete(
                { _id: id }, (err, data) => {
                    if (err) res.send("can not delete order");
                    else res.send(data);
            });
        });
        app.put('/Administration/:id/orders/edit/:id', (req,res) => {
            let id = ObjectID(req.params.id);
            let body=req.body
            db.collection("order").findOneAndUpdate({_id : id},{$set : {...body}},
                (err,data)=>{
                    if(err)   res.send("can not modify order")
                    else res.send("order edited")
            }); });
            // app.post("/Administration/:id/orders/add", (req, res) => {
            //     let newProduct = req.body
            //     db.collection("order").insertOne(newProduct, (err, data) => {
            //       if (err) res.send("cant add order");
            //       else res.send(data);
            //     });
            //   });
})

app.listen(3007,(err)=>{
    if(err) console.log('On ne peut pas Connecté')
    else console.log('runing in port 3007')
})