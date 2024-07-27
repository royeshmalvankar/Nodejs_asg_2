const path = require("path");
const fs=require('fs');
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// Please use following format => operation filename content(append_message or rename_file_name)
// please write append_message in " " (in quotes)
const readFile=(file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
}
const deleteFile =(file)=>{
    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File Deleted Successfully');
        }
    })
}


const createFile=(file)=>{
    fs.writeFile(file,'This is a new file created by Node',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File Created Successfully');
        }
    })
}
const appendFile=(file)=>{
    fs.appendFile(file,`\n ${content}\r\n`,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File Appended Successfully');
        }
    })
}
const renameFile=(file)=>{
    fs.rename(file,content,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File Renamed Successfully to '+content);
        }
    })
}

const listFile=(file)=>{
    fs.readdir(file, (err, data) => {
        if (err) {
            console.log(file);
          console.log(err);
        }else{
           data.forEach(data => {
            console.log(data);
          }); 
        }
    });
}
switch (operation) {
  // complete the fillowing function.
    case 'read':
    if(file){
        readFile(file)
      }
    break

    case 'delete':
    if(file){
        deleteFile(file)
    }
    break

    case 'create':
    if(file){
        createFile(file)
    }
    break

    case 'append':
    if(file){
        appendFile(file)
    }
    break

    case 'rename':
    if(file){
        renameFile(file)
    }
    break

    case 'list':
    if(file){
        listFile(file)
    }
    break

    default:
        console.log(`Invalid operation '${operation}'`);
}