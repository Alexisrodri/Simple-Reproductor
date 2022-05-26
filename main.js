
const previous = document.getElementById("previous")
const play = document.getElementById("play")
const pause = document.getElementById('pause')
const next = document.getElementById("next")
const musicName = document.getElementById('Title')
const musicArtist = document.getElementById('Artist')
const musicImg = document.getElementById('Image')
const Audio = document.getElementById('Audio')


let indexMusic =1;

window.addEventListener('load',()=>{
    loadMusic(indexMusic);
})

function loadMusic(indexNumb){
    musicName.innerText = playList[indexNumb - 1].name
    musicArtist.innerText = playList[indexNumb - 1].artist
    musicImg.src = `multimedia/${playList[indexNumb - 1].img}.png`
    Audio.src = `multimedia/${playList[indexNumb - 1].src}.mp3`
}

play.addEventListener("click",()=>{
    play.classList.toggle("Play");
    if(Audio.paused || Audio.ended) {
        Audio.play()
    }else{
        Audio.pause();
    }
})

next.addEventListener('click',()=>{
     indexMusic++;
     indexMusic > playList.length ? indexMusic = 1 : indexMusic = indexMusic 
     loadMusic(indexMusic);
     play.classList.add("Play");
     Audio.play()
})


previous.addEventListener('click',()=>{
    indexMusic--;
    indexMusic < 1 ? indexMusic = playList.length : indexMusic = indexMusic 
    loadMusic(indexMusic);
    play.classList.add("Play");
    Audio.play()
})
