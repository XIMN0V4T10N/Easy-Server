const electron = require('electron');
const {ipcRenderer} = electron;
const open = require('open');
const btn = document.querySelector('#close-tm');


btn.addEventListener('click', () => {
    ipcRenderer.send('close-thanks');
});

const git = document.querySelector('#git');
const stack = document.querySelector('#stack');
const web = document.querySelector('#web');
git.onclick = () => {
    open('https://github.com/XImn0v4t10n/');
}

stack.onclick = () => {
    open('https://stackoverflow.com/users/16635257/ximn0v4t10n');
}

web.onclick = () => {
    open('Not Avaliable');
}