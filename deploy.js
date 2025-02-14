var express=require("express")
var app=express();
var fs=require("fs")
var port=3006;
app.get("/phones", (req, res) => {
    fs.readFile("index.json", "utf-8", (err, data) => {
      if (err) {
        res.send({
          status: 400,
          msg: err.message,
        });
      } else {
        res.send({
          status: 200,
          msg: "successfully created ",
          data: JSON.parse(data),
        });
      }
    });
  });
  
  app.get("/phones/:id", (req, res) => {
    fs.readFile("index.json", "utf-8", (err, data) => {
      if (err) {
        res.send({
          status: 400,
          msg: err.message,
        });
      } else {
        var data1 = JSON.parse(data);
        console.log(data1);
  
        var filtereddata = data1["phones"].filter((val) => {
          return val.id == req.params.id;
        });
  
        res.send({ msg: "succssfully sent", status: 200, data: filtereddata });
      }
    });
  });
  

  
app.listen(port,()=>{
    console.log("server is running");
})