const express = require('express');
const sIndex = require('serve-index');
const path = require('path');
const { app } = require('electron');
const port = document.querySelector('#port');
const start = document.querySelector('#btn-start-serv');
let server = false;


start.addEventListener('click', (e) => {
    if(server == false){
        e.preventDefault();
        server_connect();
        document.querySelector('#status').textContent = "Server connected on port: " + port.value;
        document.querySelector('#status').style.color = 'green';
        port.disabled = true;
        start.className = 'btn btn-success';
        start.innerHTML = "Turn Off the Server" + ' <i class="fas fa-power-off"></i>';
        server = true;
    }
});


function server_connect(){
    const app = express();

    app.use(express.static('public'));

    app.listen(port.value, () => {
        console.log('App listening on port: ' + port.value);
    });
}

function server_kill(){
    app.close();
}
