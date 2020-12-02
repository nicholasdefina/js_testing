class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.durationInput = durationInput;
        this.hasStarted = false;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('input', this.ondurationchange);
    }

    start = () => {
        const regexp = /^[0-9]+([.][0-9]+)?$/g;
        if (!regexp.test(this.durationInput.value)) {
            alert('Please enter a properly formatted number, using integers and decimals only.')
            return
        }
        if (this.hasStarted) {
            return;
        }
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.hasStarted = true;
        // this.tick(); // run immediately then setInterval
        this.intervalId = setInterval(this.tick, 10);
    }
    pause = () => {
        clearInterval(this.intervalId);
        this.hasStarted = false;
    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
            this.timeRemaining = this.timeRemaining - 0.01;
        }

    }
    get timeRemaining() { // getters and setters treated as attributes. don't invoke calling them
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}

