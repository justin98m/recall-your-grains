/*
  contactServer(route,data)
  send request to server
    send data to server
  wait for response
    updateContent()

  */
function sendData(data,elements){
    //Object Info https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    const XHR = new XMLHttpRequest();
    elements.status.innerHTML = 'Saving in Progress'

    XHR.addEventListener("load", event => {
      console.log(`sending data to server`);
      elements.status.innerHTML = 'Saved!';
      elements.btn.disabled = false;
    });

    XHR.addEventListener('error',event => {
      console.log(`There was an error: ${event}` );
      btn.disabled = false;
      elements.staus.innerHTML = 'Error Saving';
    });

    XHR.open('POST',"http://localhost:3000/addData");
    XHR.setRequestHeader('Content-Type','application/json');
    XHR.send(JSON.stringify(data));
  }
export default sendData;
