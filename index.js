import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';

let win;
let settingsWindow;

const __dirname = path.dirname(new URL(import.meta.url).pathname);



// Create the application menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Settings',
                click: () => {
                    // Send an IPC message to show the settings
                    //win.webContents.send('show-settings');
                    openSettingsWindow();
                },
            },
            {
                type: 'separator',
            },
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click: () => {
                    app.quit();
                },
            },
        ],
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click: () => openAboutWindow(),
            }
        ],
    },
];


function openAboutWindow() {
    let aboutWindow = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    aboutWindow.setMenu(null); // Hide the menu bar
    aboutWindow.loadFile('about/about.html'); // Open the about.html page
}


function openDonateWindow() {
    let donateWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    donateWindow.setMenu(null); // Hide the menu bar

    donateWindow.loadURL('https://ko-fi.com/porfanid');  // Open Ko-fi page directly
}


// Open settings window
function openSettingsWindow() {
    if (settingsWindow) {
        // If the settings window is already open, bring it to the front
        settingsWindow.focus();
        return;
    }

    settingsWindow = new BrowserWindow({
        width: 400,
        height: 510,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    settingsWindow.setMenu(null); // Hide the menu bar

    settingsWindow.loadFile('settings/settings.html'); // This is the separate settings window

    // Close the settings window when the user closes it
    settingsWindow.on('closed', () => {
        settingsWindow = null;
    });
}


function createWindow() {
    console.log('Preload Path:', path.join(__dirname, 'preload.js'));
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true, // For security
        },
    });
    const menu = Menu.buildFromTemplate(menuTemplate);
    win.setMenu(menu);
    win.loadFile('main/index.html').then(r => {});

    // Default settings
    const defaultSettings = {
        workTime: 25,
        breakTime: 5,
        longBreakTime: 15,
        pomodoroCount: 4,
    };

    const settingsFilePath = 'settings.json';

// Helper function to read settings from file
    function readSettings() {
        if (fs.existsSync(settingsFilePath)) {
            return JSON.parse(fs.readFileSync(settingsFilePath, 'utf-8'));
        } else {
            return defaultSettings;
        }
    }

    // IPC handlers
    ipcMain.handle('get-settings', () => {
        return readSettings();
    });

    // Handle opening the Donate page via IPC
    ipcMain.handle('open-donate', () => {
        openDonateWindow();
    });


    // Handling settings saving
    ipcMain.handle('save-settings', (event, settings) => {
        console.log('Settings received:', settings);
        // Save settings to a file or database, for example
            fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
        win.webContents.send('saved-settings');
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // IPC handler for fetching the app version
    ipcMain.handle('get-app-version', () => {
        return app.getVersion();  // This returns the app version from package.json
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
