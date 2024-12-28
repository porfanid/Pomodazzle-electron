import { PomodoroTimer } from '../pomodoro/pomodoro.js';

/*
 * Initialize the components once the electron API is available
 */
document.addEventListener('DOMContentLoaded', () => {
    const checkElectronAPI = setInterval(() => {
        if (window.electron) {
            console.log('Electron API is now available:', window.electron);
            clearInterval(checkElectronAPI); // Stop polling once it's available
            // Now you can use the electron API
            init_function().then(r => {});
        }
    }, 50); // Check every 50ms
});

const init_function = async () => {

    /**
     * Field initialization
     * @type {HTMLElement}
     */
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startBtn');
    const resetButton = document.getElementById('resetBtn');
    const workingLabel = document.getElementById('working-status');

    resetButton.addEventListener('click', () => {
        pomodoroTimer.reset();
    });

    // Usage example
    let defaultValues = await window.electron.functions.getSettings();
    timerDisplay.innerText = `${defaultValues.workTime}:00`;

    // Example listener implementation
    class PomodoroListener {
        onTimeUpdate(minutes, seconds) {
            timerDisplay.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        onStateChange(state) {
            console.log(`State changed to: ${state}`);
            startButton.innerText = (state === 'RUNNING' ? 'Pause' : 'Start') + " Timer";

            if (pomodoroTimer.isBreakTime===0) {
                timerDisplay.classList.remove('break-time');
                timerDisplay.classList.add('work-time');
                workingLabel.innerText = 'Working';
            } else if (pomodoroTimer.isBreakTime>0) {
                timerDisplay.classList.remove('work-time');
                timerDisplay.classList.add('break-time');
                workingLabel.innerText = 'Break';
            }
        }
    }

    const listener = new PomodoroListener();
    const pomodoroTimer = new PomodoroTimer(listener, defaultValues);

    // Add event listeners for buttons
    startButton.addEventListener('click', () => {
        pomodoroTimer.changeState();
    });

    // Listen for the 'show-settings' event sent from the main process
    window.electron.ipcRenderer.on('saved-settings', async () => {
        let defaultValues = await window.electron.functions.getSettings();
        pomodoroTimer.loadValues(defaultValues);
    });
}
