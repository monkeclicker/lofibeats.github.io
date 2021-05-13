window.onload = function() {
}


const happyjazz = document.getElementById('myAudio')
var nowP = 0;
var paused = 0;
/*
happyjazz.onplay = function () {
    var np = document.getElementById('np')
    np.innerHTML = 'Now Playing'
    if (localStorage.np == null) {
        nowP++
        localStorage.setItem('Happy Jazz Play', nowP)
    } else 
        nowP++
        localStorage.setItem('Happy Jazz Play', nowP)
}

happyjazz.onplaying = function () {
    window.setInterval(function() {
     console.log(happyjazz.currentTime.toFixed(0))
        }, 1000)
    return
}

happyjazz.onpause = function () {
    var np = document.getElementById('np')
    np.innerHTML = ''
    if (localStorage.paused == null) {
        localStorage.setItem('Happy Jazz Pause', paused)
    } else 
        console.log(paused)
        paused++
        localStorage.setItem('Happy Jazz Pause', paused)
}
*/


const audio2 = document.getElementById('myAudio2')
audio2.volume = 0.25;

const audio3 = document.getElementById('myAudio3')
audio3.volume = 0.25;

const audio4 = document.getElementById('myAudio4')
audio4.volume = 0.25;

window.onbeforeunload = function(){
    return
};