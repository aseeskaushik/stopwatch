// Fetching corresponding time elements using id selector
let hour=document.getElementById('hours');
let minute=document.getElementById('minutes');
let second=document.getElementById('seconds');
let millisecond=document.getElementById('milliseconds');

// fetching all three button elements
let startButton= document.getElementById('Start-button');
let stopButton= document.getElementById('Stop-button');
let resetButton= document.getElementById('Reset-button');

// creating variables to display numbers less than 10
let countcalc,secCalc,minCalc,hrCalc;

// to start or stop second hand sound~
let soundImg=1;
document.getElementById('sound-image').addEventListener('click',function startAudio(){
    if(soundImg){
      document.getElementById('sound-image').src ="./Images/onsound.png";
      soundImg=0;
    }else{
      document.getElementById('sound-image').src ="./Images/nosound.webp";
      soundImg=1;
    }
})

// adding event listeners to start button

startButton.addEventListener('click',startClock,{ once: true });

function startClock(){
    
        var e=setInterval(millisecondsToSec,10);
    
        function millisecondsToSec(){
            if(eval(millisecond.innerHTML)<9){
               countcalc= eval(millisecond.innerHTML)+1;
               // in case number less than 10, them display it in XX format
               millisecond.innerHTML="0"+countcalc;
               console.log(millisecond.innerHTML);
            }else{
               millisecond.innerHTML= eval(millisecond.innerHTML)+1;
               console.log(millisecond.innerHTML);
            } 
            
            // After 100 counts add 1 second
            if(millisecond.innerHTML==100){
                millisecond.innerHTML='00';
                
                if(eval(second.innerHTML)<9){
                    secCalc= eval(second.innerHTML)+1;
                    // in case number less than 10, them display it in XX format
                    second.innerHTML="0"+secCalc;
                    // for sound
                    if(soundImg==0){
                        document.getElementById('audio').play();
                    }
                }else{
                    second.innerHTML= eval(second.innerHTML)+1;
                    // for sound
                    if(soundImg==0){
                        document.getElementById('audio').play();
                    }
                }
                
            }
            
            // After 60 seconds add 1 minute 
            if(second.innerHTML==60){
                second.innerHTML='00';

                if(eval(minute.innerHTML)<9){
                    minCalc= eval(minute.innerHTML)+1;
                    // in case number less than 10, them display it in XX format
                    minute.innerHTML="0"+minCalc;
                }else{
                    minute.innerHTML= eval(minute.innerHTML)+1;
                }
                
            }
            
            // After 60 minutes add 1 hour
            if(minute.innerHTML==60){
                minute.innerHTML='00';

                if(eval(hour.innerHTML)<9){
                    hrCalc= eval(hour.innerHTML)+1;
                    // in case number less than 10, them display it in XX format
                    hour.innerHTML="0"+hrCalc;
                }else{
                    hour.innerHTML= eval(minute.innerHTML)+1;
                }
                
            }
        }
        
    
    
    // adding event listeners to Stop button
    stopButton.addEventListener('click',function stopClock(){
        clearInterval(e);
        // to start clock after stop button is clicked
        startButton.addEventListener('click',startClock,{ once: true });
    });

    // adding event listeners to Reset button
    resetButton.addEventListener('click',function resetClock(){
        clearInterval(e);
        millisecond.innerHTML='00';
        second.innerHTML='00';
        minute.innerHTML='00';
        hour.innerHTML='00';
        // to start clock after Reset button is clicked
        startButton.addEventListener('click',startClock,{ once: true });
    });

}              

// To switch between dark, white and light themes
themeSwitch= document.getElementById('theme-image');
bodyContainerDiv= document.getElementById('body-container');
let imgUrl=1;
themeSwitch.addEventListener('click',function changeImage(){
    if(imgUrl==1){
       document.body.style.backgroundImage= "url('./Images/stopwatch_light2.jpg')";
       document.getElementById('heading').style.color= 'black';
       document.getElementById('timer').style.color='rgb(255 255 255)';
       imgUrl=2;
    }else{
        if(imgUrl==2){
            document.body.style.backgroundImage= "url('./Images/stopwatch_light3.jpg')";
            document.getElementById('heading').style.color= 'black';
            document.getElementById('timer').style.color='green';
            imgUrl=3;
        }else{
            document.body.style.backgroundImage= "url('./Images/watch-background.avif')";
            document.getElementById('heading').style.color= 'white';
            document.getElementById('timer').style.color='aqua';
            imgUrl=1;
        }
       
    }
})



