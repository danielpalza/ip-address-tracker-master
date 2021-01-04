

//Recibimos la ip pedida y hacemos un request a IpIfy para encontrar la direccion
async function getAddress(form){
    console.log("form", form.ipAddress.value)
    event.preventDefault();
    let myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

    let myRequest = new Request('https://geo.ipify.org/api/v1?apiKey=at_tAtheKEMiXurFSrugXdwuYJU5ryPi&ipAddress='+form.ipAddress.value, myInit);

   await fetch(myRequest)
        // Handle success
        .then(response => response.json())  // convert to json
        .then(json => getMap(json))    //print data to console
        .catch(err => console.log('Request Failed', err)); // Catch errors
}

