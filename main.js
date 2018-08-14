const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const config = require('./config.json');

let configRoot;
switch (process.platform) {
  case 'darwin':
    configRoot = process.env.HOME + config.darwin.dataRoot;
    break;
  case 'linux':
    configRoot = config.linux.dataRoot;
    break;
  case 'win32':
    configRoot = `${process.env.USERPROFILE}${config.win32.dataRoot}win-`;
    break;
  default: break;
}

const rootDataPath = configRoot;
console.info('rootDataPath:', rootDataPath);

require('./js/mainipc.js')(ipcMain);

let mainWindow = null;
const mainWindowOptions = {
  icon: './ui-dist/img/Clippets1.ico',
  title: 'Clippets',
};

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow(mainWindowOptions);

  const windowStatePath = `${rootDataPath}windowstate.json`;
  let windowState = {};
  const openDev = false;
  if (openDev) mainWindow.openDevTools();
  const jsonReadCallBack = (err, data) => {
    if (err) console.log('error opening windowstate');
    else {
      windowState = JSON.parse(data.toString());
      mainWindow.setSize(windowState.size[0], windowState.size[1]);
      mainWindow.setPosition(windowState.position[0], windowState.position[1]);
    }
  };
  fs.readFile(windowStatePath, jsonReadCallBack);

  mainWindow.loadURL(`file://${__dirname}/ui-dist/index.html`);
  mainWindow.on('close', () => {
    windowState.size = mainWindow.getSize();
    windowState.position = mainWindow.getPosition();
    const writeFileCallBack = (err) => {
      if (err) console.log('error saving windowstate.json file ');
      mainWindow = null;
    };
    fs.writeFile(windowStatePath, JSON.stringify(windowState, null, 2), writeFileCallBack);
  });
});
