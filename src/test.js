const http = require('http');


let empStatus = [];

function receiver(){
http.get('http://localhost:3001/emp', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(JSON.parse(data));
    return empStatus = JSON.parse(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}

export default receiver;