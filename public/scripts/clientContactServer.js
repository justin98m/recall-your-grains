
const MESSAGE = document.querySelector('.message');

async function sendData(data){
  let task = JSON.stringify(data);
  //wait untli server responds to return promise
  return await fetch('http://localhost:3000/addData',{
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: task
  }).then(response => response);
}

async function getData(){
  return await fetch('http://localhost:3000/taskList',{
    method: 'GET'
  }).then(response => response.json());
}

export {sendData,getData}
