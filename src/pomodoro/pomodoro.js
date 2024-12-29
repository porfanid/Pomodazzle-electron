export class PomodoroTimer {
    constructor(listener, defaultValues) {
        // Default times in seconds
        this.workTime = defaultValues.workTime * 60;
        this.breakTime = defaultValues.breakTime * 60;
        this.longBreakTime = defaultValues.longBreakTime * 60;

        this.currentTime = this.workTime;
        this.pomodorosCompleted = 0;
        this.state = 'STOPPED'; // Could be 'RUNNING', 'PAUSED', or 'STOPPED'
        this.listener = listener;
        this.isBreakTime = 0; // 0: work, 1: break, 2: long break
        this.timer = null;
        this.soundPlayer = new Audio('../resources/single_beep.wav'); // Placeholder for sound file
    }

    // Start the Pomodoro timer
    start() {
        if (this.state === 'RUNNING') return;
        this.state = 'RUNNING';
        this.notifyStateChange();
        this.scheduleTimer();
    }

    loadValues(defaultValues){
        this.workTime = defaultValues.workTime * 60;
        this.breakTime = defaultValues.breakTime * 60;
        this.longBreakTime = defaultValues.longBreakTime * 60;
        if(this.isWorking()){
            this.currentTime = this.workTime;
        }else {
            if (this.isBreakTime === 1) {
                this.currentTime = this.breakTime;
            } else {
                this.currentTime = this.longBreakTime;
            }
        }
        this.notifyTimeUpdate();
    }

    // Pause the Pomodoro timer
    pause() {
        if (this.state === 'RUNNING') {
            this.state = 'PAUSED';
            clearInterval(this.timer);
            this.notifyStateChange();
        }
    }

    // Reset the Pomodoro timer
    reset() {
        if (this.state === 'RUNNING' || this.state === 'PAUSED') {
            clearInterval(this.timer);
        }
        this.currentTime = this.workTime;
        this.pomodorosCompleted = 0;
        this.state = 'STOPPED';
        this.isBreakTime = 0;
        this.notifyStateChange();
        this.notifyTimeUpdate();
    }

    // Update the current time (called every second)
    updateTime() {
        if (this.currentTime > 0) {
            this.currentTime--;
            if (this.currentTime < 4 && !this.soundPlayer.loop) {
                this.soundPlayer.loop=true;
                this.soundPlayer.play(); // Play sound when time is about to run out
            }
            this.notifyTimeUpdate();
        } else {
            this.onTimeUp();
            this.soundPlayer.loop=false;
        }
    }

    // Handle the time-up event and switch phases (work/break)
    onTimeUp() {
        clearInterval(this.timer);

        if (this.isBreakTime === 0) {
            // Switch to break time
            this.pomodorosCompleted++;

            if (this.pomodorosCompleted % 4 === 0) {
                this.currentTime = this.longBreakTime; // Long break after every 4 Pomodoros
                this.isBreakTime = 2;
            } else {
                this.currentTime = this.breakTime; // Regular break
                this.isBreakTime = 1;
            }
        } else {
            // Switch back to work time
            this.currentTime = this.workTime;
            this.isBreakTime = 0;
        }

        this.notifyStateChange();
        this.notifyTimeUpdate();
        this.scheduleTimer();
    }

    // Toggle between start and pause states
    changeState() {
        if (this.state === 'RUNNING') {
            this.pause();
        } else {
            this.start();
        }
    }

    // Schedule the timer to update every second
    scheduleTimer() {
        this.timer = setInterval(() => this.updateTime(), 1000); // Runs every second
    }

    // Notify the listener about time updates
    notifyTimeUpdate() {
        const minutesLeft = Math.floor(this.currentTime / 60);
        const secondsLeft = this.currentTime % 60;
        this.listener.onTimeUpdate(minutesLeft, secondsLeft);
    }

    // Notify the listener about state changes
    notifyStateChange() {
        this.listener.onStateChange(this.state);
    }

    // Get the current remaining time in seconds
    getRemainingTime() {
        return this.currentTime;
    }

    // Check if currently on a break
    isOnBreak() {
        return this.isBreakTime > 0;
    }

    // Check if currently working
    isWorking() {
        return this.isBreakTime === 0;
    }

    // Get the progress (how much time is left in relation to the total time)
    getProgress() {
        let totalTime;
        if (this.isBreakTime === 0) {
            totalTime = this.workTime;
        } else if (this.isBreakTime === 1) {
            totalTime = this.breakTime;
        } else {
            totalTime = this.longBreakTime;
        }
        return this.currentTime / totalTime;
    }

    // Set a custom sound
    setSound(soundPath) {
        this.soundPlayer = new Audio(soundPath);
        this.soundPlayer.volume = 1.0;
    }

    // Delete the sound
    deleteSound() {
        this.soundPlayer = null;
    }
}

// You can pause, reset, etc.
