document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settingsForm');

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newSettings = {
            workTime: parseInt(document.getElementById('workTime').value),
            breakTime: parseInt(document.getElementById('breakTime').value),
            longBreakTime: parseInt(document.getElementById('longBreakTime').value),
        };
        // Save settings to the main process
        window.electron.functions.saveSettings(newSettings);
        // Close the settings window
        window.close();
    });
});

// Get current settings from main process when the settings window is opened
const checkElectronAPI = setInterval(() => {
    if (window.electron) {
        console.log('Electron API is now available:', window.electron);
        clearInterval(checkElectronAPI); // Stop polling once it's available
        // Now you can use the electron API
        load_values();
    }
}, 50); // Check every 100ms

const load_values=()=> {
    window.electron.functions.getSettings().then(settings => {
        document.getElementById('workTime').value = settings.workTime;
        document.getElementById('breakTime').value = settings.breakTime;
        document.getElementById('longBreakTime').value = settings.longBreakTime;
        document.getElementById('pomodoroCount').value = settings.pomodoroCount;
    });
}
