const path = require('path');
const electron = require('electron');
const TimerTray = require('./app/timer_tray');

const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let tray; // to prevent the tray being garbage collected.

app.on('ready', () => {
    app.dock.hide(); // hide the icon in the dock since this is a tray based application.
    mainWindow = new BrowserWindow({
        height: 500,
        width:300,
        frame: false,
        resizable: false,
        show: false
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
    mainWindow.on('blur', () => {
        mainWindow.hide(); // hide the window when the user clicks somewhere else
    })

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow);
});