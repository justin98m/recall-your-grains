
const MESSAGE = document.querySelector('.message');

async function sendData(data,method){
  let task = JSON.stringify(data);
  //wait untli server responds to return promise
  return await fetch('http://localhost:3000/tasks',{
    method: method,
    headers: {'Content-Type' : 'application/json'},
    body: task
  }).then(response => response);
}

export {sendData}
