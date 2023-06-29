const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3030;
 let data=[];
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hi All');
})
app.post("/Authentication", (req, res) => {
  const postData = req.body;
  console.log(postData);

  // Store the posted data in the data array
  data.push(postData);

  res.status(200).json({ message: "Data posted successfully" });
});

app.get("/data", (req, res) => {
  // Return the stored data
  res.status(200).json(data);
});



app.post('/Login',(req,res)=>{
console.log(req.body);
})



       

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});