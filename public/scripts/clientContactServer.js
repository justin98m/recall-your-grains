/*
  contactServer(route,data)
  send request to server
    send data to server
  wait for response
    updateContent()

  */
const MESSAGE = document.querySelector('.message');

function sendData(data){
    //Object Info https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const XHR = new XMLHttpRequest();
    MESSAGE.innerHTML = 'loading'
    //message is sent
    XHR.addEventListener("load", event => {
      console.log(`sending data to server`);
      MESSAGE.innerHTML = 'Success';
    });
    XHR.addEventListener('error',event => {
      console.log(`There was an error: ${event}` );
      MESSAGE.innerHTML = 'Error';
    });

    XHR.open('POST',"http://localhost:3000/addData");
    XHR.setRequestHeader('Content-Type','application/json');
    XHR.send(JSON.stringify(data));
  }
async function getData(){
  return await fetch('http://localhost:3000/taskList',{
    method: 'GET'
  }).then(response => response.json());
}

export {sendData,getData}
