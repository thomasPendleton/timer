

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);



let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration=totalDuration;
        console.log('timer started')
    },
    onTick(timeRemaining) {
        
        circle.setAttribute('stroke-dashoffset' , perimeter * timeRemaining / duration - perimeter
        );
        console.log('timer just ticked down')
        

    },
    onComplete() {
        console.log('timer is completed!')
    }
});


















// timer.start();

// const colors = {
//     printColor(){
//         console.log(this);
//         const printThis = () => {
//             console.log(this);
//         }
//         printThis();
//     }
// }

// const printThis = function() {
//     console.log(this);
// }

// printThis.call({color: "red"})

// const colors = {
//     printColor () {
//         console.log(this);
//     }
// };
// colors.printColor();

// const randomObject = {
//     a: 1
// };
// randomObject.printColor = colors.printColor;
// randomObject.printColor();





