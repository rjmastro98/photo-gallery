const router = require("express").Router();
const Image = require('../models/image');


//create image 

router.post("/", async (req, res) => {
    try {
        const image = await Image(req.body).save();
        res.status(201).send({data: image, message: "Image Uploaded Successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

//get all images

router.get("/", async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).send({data: images})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;