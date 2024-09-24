import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import XLSX from 'xlsx';
import cors from "cors"

const app = express();
const port = 5000;

  mongoose.connect('mongodb://localhost:27017/excelData').then(() => console.log('MongoDB connected'))
  .catch(err => console.error('file error', err));

app.use(express.json());
app.use(express.static("public"));

app.use(cors({
  origin:'http://localhost:5173'
}));

const storage = multer.memoryStorage();
const upload = multer({ storage });

const DataSchema = new mongoose.Schema({
  fname:{
    type:String,
    require:true
  },
  age:{
    type:Number,
    require:true
  }
});

const DataModel = mongoose.model('Data', DataSchema);


app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No fileUploaded.');
  }
  const excelWork = XLSX.read(req.file.buffer ,{type:"buffer"});
  const excelSheet = excelWork.SheetNames[0];
  const sheet = excelWork.Sheets[excelSheet];
  const data = XLSX.utils.sheet_to_json(sheet);

  const formattedData = data.map(row => ({
    fname: row.fname,
    age: row.age
  }));console.log(formattedData)

  DataModel.insertMany(formattedData)
    .then(() => 
        
 res.send('imported DataSuccessfully!'))
    .catch(err => res.status(500).send({err:'error'}));
});
app.listen(port, () => {
  console.log("mongodb sever start");
});
