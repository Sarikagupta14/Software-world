const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");

const Slider = require("./Data");
const Stories = require("./Story");
const Categories = require("./Category");
const Contact = require("./Contact");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hii");
});

//Post data 1- slider
app.post('/slider',async(req,res)=>{
    try {
        const data = new Slider(req.body)

        const saveData = await data.save()
        res.status(201).json('Successfully sent')
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
})
  //Get Data 1- slider
  app.get('/slider', async(req,res)=>{
    try {
        const data = await Slider.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
 })

  //Delete data 1: slider
   
  app.delete('/slider/:id',async(req, res)=>{
    const delData = req.params.id
    try {
        const data = await Slider.findByIdAndRemove(delData)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
  })







//Post 2- stories
app.post('/story',async(req,res)=>{
    try {
        const data = new Stories(req.body)

        const saveData = await data.save()
        res.status(201).json('Successfully sent')
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
})   


 
 //Get Data 2 - stories
 app.get('/story', async(req,res)=>{
    try {
        const data = await Stories.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
 })

 //Delete data 3: story
   
app.delete('/story/:id',async(req, res)=>{
    const delData = req.params.id
    try {
        const data = await Stories.findByIdAndRemove(delData)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
  })





  //Post 3- categories
app.post('/category',async(req,res)=>{
    try {
        const data = new Categories(req.body)

        const saveData = await data.save()
        res.status(201).json('Successfully sent')
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
})

    //Delete data2: categories
   
  app.delete('/category/:id',async(req, res)=>{
    const delData = req.params.id
    try {
        const data = await Categories.findByIdAndRemove(delData)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
  })

 //Get Data 3- categories
 app.get('/category', async(req,res)=>{
    try {
        const data = await Categories.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: 'Error found'})
    }
 })

//Post data 4 - Contact

app.post('/contact', async(req,res)=>{
    try {
     const data = new Contact(req.body)
    const saveData = await data.save()
    res.status(201).json(saveData)
    } catch (error) {
        res.status(500).json({message: 'error'})
    }
})

//Get data 4- Contact
app.get('/contact',async(req,res)=>{
    try {
        const data = await Contact.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message:'error'})
    }
})
//Delete data 4 - contact
app.delete('/contact/:id',async(req,res)=>{
    const id = req.params.id
     try {
        const data = await Contact.findByIdAndRemove(id)
        res.status(201).json(data)
     } catch (error) {
        res.status(500).json({message:'error'})
     }
}) 


app.listen(PORT || 6000, () => {
  dbConnect();
  console.log(`Server started on port ${PORT}`);
});
