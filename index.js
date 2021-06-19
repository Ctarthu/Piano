

    
    
    addEventListener('keydown', start)
    
    function start(e){
        var audio=document.getElementById(e.key)
        keyid='#'+e.key+'key'
        clickAnimation(keyid)
        audio.currentTime=0
        audio.play()
    }
    function clickAnimation(keyid){
        
        document.querySelector(keyid).setAttribute('style', 'border: 2px solid grey;')
        setTimeout(function(){document.querySelector(keyid).setAttribute('style', 'border: 1px solid black')}, 1000);


    }
   