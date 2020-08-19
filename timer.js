// event listener for start button


// Can you fix the ''bug'' when you click start and then click start again, the pause no longer works?

// Can you change the functionality to minutes instead of seconds?

// Can you change the svg fill to red when the timer completes?

// Can you setup some present value buttons? eg... 10minutes 25min 1hour to autofill the timer?

// Can you create a listener to start the timer from the enter or space button?


class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput= durationInput;
        this.startButton= startButton;
        this.pauseButton= pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
        
    }

    tick = () => {
        if( this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick){
                this.onTick(this.timeRemaining);
            }
        }       
    }

    pause = () => {
        clearInterval(this.interval);
        console.log('Pause the timer!')
    }

    get timeRemaining () {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

}