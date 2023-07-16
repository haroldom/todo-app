let intervalId;
let allSeconds = 0;
let clockState = false;

self.onmessage = (e)=>{
    allSeconds = e.data.allSeconds;
    clockState = e.data.clockState
    if(clockState){
        intervalId = setInterval(()=>{
            allSeconds--
            self.postMessage(allSeconds)
            if(allSeconds === 0){
                clearInterval(intervalId)
            }
        },1000)
    } else{
        clearInterval(intervalId)
    }
}