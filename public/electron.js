const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const http = require("http");

const path = require('path');
const isDev = require('electron-is-dev');
// require(path.join(__dirname, '../server/index'));

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 1430, height: 600});
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// http.createServer((req, res) => {
//     res.end("Hello from server started by Electron app!");
// });
// http.listen(3001);
