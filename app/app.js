const electron = require('electron');
const {BrowserWindow, app, dialog, Menu, ipcMain} = electron;
const url = require('url');
const path = require('path');
const { join } = require('path');
const os = require('os');

let mainWind;
let splashWind;
let thanks;

function splash(){
    app.on('ready', () => {
        splashWind = new BrowserWindow({
            width: 1080,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            },
            frame: false
        });
    
        splashWind.loadURL(url.format({
            pathname: path.join(__dirname, '/src/views/splash.html'),
            protocol: 'file',
            slashes: true
        }));

        splashWind.setMenu(null);
    });
}

function thanksWind(){
    thanks = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        frame: false
    });

    thanks.loadURL(url.format({
        pathname: path.join(__dirname, '/src/views/thanks.html'),
        protocol: 'file',
        slashes: true
    }));

    thanks.setMenu(null);
}

function mainWindow(){
    mainWind = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        resizable: false,
        maximizable: false,
        fullscreenable: false,
        title: 'Easy Server || ' + os.hostname()
    });

    mainWind.loadURL(url.format({
        pathname: path.join(__dirname, '/src/views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWind.on('close', () => {
        thanksWind();
    });

    mainWind.setMenu(null);
}

splash();

setTimeout(() => {
    mainWindow();
    splashWind.close();
}, 8500)

ipcMain.on('close-thanks', () => {
    app.quit();
});