var isStop=true;
var sec=0;
var min=0;
var hrs=0;



function start()
{
    console.log("starting")
    if (isStop==true)
    {
        isStop = false;
        timer();
    }
}

function timer(){
    if(isStop==false){
        sec=parseInt(sec);
        min=parseInt(min);
        hrs=parseInt(hrs);
        console.log("timer");
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
        if (min==60){
            min=0;
            hrs++;
        }
        if(sec<10){
            sec="0"+sec;
        }
        if(min<10){
            min="0"+min;
        }
        if(hrs<10){
            hrs="0"+hrs;
        }

        console.log(sec);
        stopwatch.innerHTML=hrs + " : "+min+ " : "+sec;
        setTimeout("timer()",1000);
    }
}

function stop(){
    isStop=true;
}

function reset(){
    isStop=true;
    sec=0;
    min=0;
    hrs=0;
    stopwatch.innerHTML="00 : 00 : 00";
}