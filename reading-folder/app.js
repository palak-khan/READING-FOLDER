const fs = require("fs");
fs.mkdir("sampleFolder", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder created");
  }
});
fs.writeFile("./sampleFolder/sampleFile.txt", "HELLO FOLDER", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Create");
  }
});


fs.readdir("sampleFolder",(err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
})
// (files) ke andar folder ke andar ki sari files ke name aate hai array ke form me