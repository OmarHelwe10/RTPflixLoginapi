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

app.delete("/delete/:email", (req, res) => {
  const emailToDelete = req.params.email;

  // Find the index of the item with the specified email
  const indexToDelete = data.findIndex(item => item.email === emailToDelete);

  if (indexToDelete !== -1) {
    // Remove the item at the specified index
    data.splice(indexToDelete, 1);
    res.status(200).json({ message: "Data deleted successfully" });
  } else {
    res.status(404).json({ message: "Email not found" });
  }
});

app.put("/update/:email", (req, res) => {
  const emailToUpdate = req.params.email;
  const newData = req.body;

  // Find the index of the item with the specified email
  const indexToUpdate = data.findIndex(item => item.email === emailToUpdate);

  if (indexToUpdate !== -1) {
    // Update the item's data
    data[indexToUpdate] = { ...data[indexToUpdate], ...newData };
    res.status(200).json({ message: "Data updated successfully" });
  } else {
    res.status(404).json({ message: "Email not found" });
  }
});



       

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});