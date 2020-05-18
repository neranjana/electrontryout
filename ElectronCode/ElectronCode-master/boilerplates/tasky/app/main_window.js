const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {

    constructor(url) {
        super({
        height: 500,
        width:300,
        frame: false,
        resizable: false,
        show: false,
        webPreferences: { backgroundThrottling: false } // prevent chromium from throtteling when user is not foculsed on a window
        });

        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur() {
        this.hide();
    }

}

module.exports = MainWindow;
