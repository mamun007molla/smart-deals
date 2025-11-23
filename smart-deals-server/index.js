const express=require('express')
const app=express()
const cors=require('cors')
const port=process.env.PORT || 3000

//middleware

app.use(express.json())
app.use(cors())



// route
app.get('/',(req,res)=>{
    res.send("smart device is running")
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://smart-deals:D8lck5btwPjTbijM@cluster.dm91gwq.mongodb.net/?appName=Cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// app.listen(port,()=>{
//     console.log(`Server is running at http://localhost:${port}`);
// })
// client.connect()
// .then(()=>{
//     app.listen(port,()=>{
//          console.log(`Server is running at http://localhost:${port}`)
//     })
// }).catch(console.dir)



async function run() {
    try{
        await client.connect();
        const db=client.db("smart_db")
        const productsCollection=db.collection("product")

        app.get("/products",async(req,res)=>{
            const cursor=productsCollection.find()
            const result=await cursor.toArray()
            res.send(result)
        })
        app.post("/products",async(req,res)=>{
            const newProduct=req.body;
            const result=await productsCollection.insertOne(newProduct)
            res.send(result)
        })

        app.delete("/products/:id",async(req,res)=>{
            const id=req.params.id
            const query={_id: new ObjectId(id)}
            const result=await productsCollection.deleteOne(query)
            res.send(result)
        })
        app.patch("/products/:id",async(req,res)=>{
            const id=req.params.id
            const query={_id: new ObjectId(id)}
            const updated=req.body
            const update={
                $set:updated
            }
            const option={}
            const result=await productsCollection.updateOne(query,update,option)
            res.send(result)
        })
        await client.db("admin").command({ping:1});
        console.log("pinged you deployment.you succesfully connected to Mongodb");
    }
    finally{

    }
}
run().catch(console.dir)
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
 