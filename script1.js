console.log('welcome to my audio player');
let songindex=0;
let audioElement=new Audio('E:/javascript_projects/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songItem'));
var i;
let songs=[
    {
    songName:"this is song1" ,filePath:"E:/javascript_projects/songs/1.mp3",coverPath:"E:/javascript_projects/covers/1.jpg"},
    { songName:"song2" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/2.jpg"},
    { songName:"song3" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/3.jpg"},
    { songName:"song4" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/4.jpg"},
    { songName:"song5" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/5.jpg"},
    { songName:"song6" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/6.jpg"},
    { songName:"song7" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/7.jpg"},
    { songName:"song8" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/8.jpg"},
    { songName:"song9" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/9.jpg"},
    { songName:"song10" ,filePath:"E:/javascript_projects/songs/2.mp3",coverPath:"E:/javascript_projects/covers/10.jpg"},

]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
//handle play pause click
masterplay.addEventListener('click',()=>
{
    console.log(audioElement.pause());
    if(audioElement.pause() || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',(event)=>
{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
    console.log(myprogressbar);
})
myprogressbar.addEventListener('change',()=>
{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})