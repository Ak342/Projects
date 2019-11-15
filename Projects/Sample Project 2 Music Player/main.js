
/* Declaring New OBJECTS */

let song1 = new Audio();
song1.src = "Sample Music/Kalimba.mp3";

let song2 = new Audio();
song2.src = "Sample Music/Sleep Away.mp3";

let song3 = new Audio();
song3.src = "Sample Music/Maid with the Flaxen Hair.mp3";



/* FOR SONG 1 */
document.getElementById("btnPlay1").addEventListener("click",function(){
	song1.play();
});

document.getElementById("btnPause1").addEventListener("click",function(){
	song1.pause();
});



/* FOR SONG 2 */
document.getElementById("btnPlay2").addEventListener("click",function(){
	song2.play();
});

document.getElementById("btnPause2").addEventListener("click",function(){
	song2.pause();
});



/* FOR SONG 3 */
document.getElementById("btnPlay3").addEventListener("click",function(){
	song3.play();
});

document.getElementById("btnPause3").addEventListener("click",function(){
	song3.pause();
});




/* FOR LET NOT PLAY ALL SONGS AT ONCE */


let playSong = document.querySelectorAll("btnPlay").addEventListener("click",function(){});




