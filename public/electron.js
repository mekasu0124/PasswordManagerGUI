const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');


let loadingWindow;
let mainWindow;


function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    alwaysOnTop: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  loadingWindow.loadFile(path.join(__dirname, "loading/loading.html"));
};

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {},
    icon: path.join(__dirname, "images/app-icon.jpeg"),
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.on('ready-to-show', () => {
    loadingWindow.close();
    mainWindow.show();
  });
};


app.on('ready', () => {
  createLoadingWindow();

  setTimeout(() => {
    createMainWindow();
  }, 1000);
});

ipcMain.on('exit-app', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});
