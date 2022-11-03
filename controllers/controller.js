'use strict';
const CvData = require('../models/cvdata');



const CvLocal = async (req, res) => {
  
    try {
     
          var cv1 = await CvData.find() 
          res.send({cv: cv1});   
        
      console.log(cv1);
    } catch {
      const error = new Error("Error! Something went wrong.");
      return (error);
    }
  };

  module.exports = {
    CvLocal,
}