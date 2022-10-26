import fs from 'fs';

function updateJsonFile(taskList,cb){
  let taskListJson = JSON.stringify(taskList);

  fs.writeFile('./taskList.json',taskListJson, (err,data) =>{
      if(err){
        return cb(err,null);
      }
      return cb(null,"File written");
  })
}
function downloadJsonFile(cb){
  fs.readFile('./taskList.json',(err,data) => {
    if(err){
      return cb(err,null);
    }
    data = JSON.parse(data)
    return cb(null,data);
  });
}


export {
  updateJsonFile,
  downloadJsonFile
}
