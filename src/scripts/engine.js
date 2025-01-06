const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

let mapedKey = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();



    const clickedkey =
    document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active");
    setTimeout(()=>{
        clickedkey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key)=>{
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKey.push(key.dataset.key);
});

document.addEventListener("keydown", (e)=>{

    if(mapedKey.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e)=>{
     audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume)
