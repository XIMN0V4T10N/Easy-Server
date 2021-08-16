const open = require('open');

const links = ['https://github.com/XImn0v4t10n/Easy-Server/issues', 'https://github.com/XImn0v4t10n/Easy-Server/blob/main/LICENSE', 'https://github.com/XImn0v4t10n/Easy-Server/tree/plugins', 'https://github.com/XImn0v4t10n/Easy-Server/blob/main/CREDITS.md'];

const bug = document.querySelector('#bugrep');
const lic = document.querySelector('#license');
const plugs = document.querySelector('#plugins');
const cred = document.querySelector('#credits');

bug.onclick = () => {
    open(links[0]);
}

lic.onclick = () => {
    open(links[1]);
}

plugs.onclick = () => {
    open(links[2]);
}

cred.onclick = () => {
    open(links[3]);
}
