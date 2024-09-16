const $ = document


let playIcon = $.querySelectorAll(".PLayIcon")
let Audios = $.querySelectorAll('audio')

playIcon.forEach(function (item) {
    console.log(item);
    
    item.addEventListener('click', function playpauseHolder(event) {
        let musicName = event.target.dataset.name
        Audios.forEach(function (event) {
            if(event.dataset.name === musicName){
                event.play()
            }else{
                event.pause()
                event.currentTime = 0
            }
        })
    })
})
