const { contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    // Expose a secure API for the renderer process
    contextBridge.exposeInMainWorld('electron', {
        versions: {
            chrome: process.versions.chrome,
            node: process.versions.node,
            electron: process.versions.electron,
        },
        functions: {
            saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
            getSettings: () => ipcRenderer.invoke('get-settings'),
            getAppVersion: () => ipcRenderer.invoke('get-app-version'),
            openDonateWindow: () => ipcRenderer.invoke('open-donate')
        },
        ipcRenderer: {
            on: (channel, listener) => ipcRenderer.on(channel, listener),
            once: (channel, listener) => ipcRenderer.once(channel, listener),
        }
    });
});

console.log('Preload script executed');
