const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false, // sécurité
            contextIsolation: true,
        },
        icon: path.join(__dirname, 'assets/icon.png'), // si vous avez une icône
        show: false
    });

    win.loadFile('index.html');

    win.once('ready-to-show', () => {
        win.show();
    });

    // Ouvrir les outils de développement (optionnel, à commenter en production)
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});