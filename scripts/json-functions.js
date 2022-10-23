import fs from 'fs';
//Update and serve the json file


//tasks var is not a object turning to json
function updateJsonFile(taskList,cb){
  let taskListJson = JSON.stringify(taskList);

  fs.writeFile('../taskList.json',taskListJson, (err,data) =>{
      if(err){
        return cb(err,null);
      }
      return(null,"File written");
  })
}
function downloadJsonFile(cb){
//why is fs.readFile not equal to the callbacks return val
//how do I get it to evaluate as any val?
  fs.readFile('../taskList.json',(err,data) => {
    if(err){
      return cb(err,null);
    }
    data = JSON.parse(data)
    return cb(null,data);
  });
}

//Manage a individual task
//updating it
//deleting it
//creating a new task


export {
  updateJsonFile,
  downloadJsonFile
}
