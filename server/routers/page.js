 const router = require("express").Router();
 const Page = require ("../models/page")



/// get 



router.get("/all",async (req,res)=>{
  try {
      const page = await Page.find({})
      
       res.status(200).json(page);
  } catch (err) {
     res.status(500).json(err)
  }
}) 
 //CREATE
 router.post("/", async (req, res) => {
    const newPage = new Page(req.body);
  
    try {
      const savedPage = await newPage.save();
      
      res.status(200).json(savedPage);

    } catch (err) {
      res.status(500).json(err);
    }
  });

  ///edit 
  router.put("/:id",async (req, res) => {
    try {
      const updatedPage = await Page.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        // { new: true }
      );
      res.status(200).json(updatedPage);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;