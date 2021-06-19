

    
    
    addEventListener('keydown', start)
    
    function start(e){
        var audio=document.getElementById(e.key)
        audio.currentTime=0
        audio.play()
    }
   