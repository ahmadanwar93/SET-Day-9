var songPlaylistLibrary = {
    1 : {
        title: "Cali-1171",
        album: "Album1",
        duration: "3:00",
        year: "Year1",
        sourceFile: "./audio/cali-1171.mp3",
        imageSourceFile: "url(./images/image1.jpg)",
        
    },
    2 : {
        title: "Freedom-inspired-cinematic",
        album: "Album2",
        duration: "2:20",
        year: "Year2",
        sourceFile: "./audio/freedom-inspired-cinematic-background-music-for-video-5606.mp3",
        imageSourceFile: "url(./images/image2.jpg)",
    },
    3 : {
        title: "My-life-main-6670",
        album: "Album3",
        duration: "1:58",
        year: "Year3",
        sourceFile: "./audio/my-life-main-6670.mp3",
        imageSourceFile: "url(./images/image3.jpg)",
    },
    4 : {
        title: "Triumphant-long-6673",
        album: "Album4",
        duration: "2:20",
        year: "Year4",
        sourceFile: "./audio/triumphant-long-6673.mp3",
        imageSourceFile: "url(./images/image4.jpg)",
    },
    5 : {
        title: "Cinematic-chillhop-main",
        album: "Album5",
        duration: "3:03",
        year: "Year5",
        sourceFile: "./audio/cinematic-chillhop-main-6676.mp3",
        imageSourceFile: "url(./images/image15.jpg)",
    },
    6 : {
        title: "In-the-forest-ambient-acoustic-guitar",
        album: "Album6",
        duration: "1:59",
        year: "Year6",
        sourceFile: "./audio/in-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3",
        imageSourceFile: "url(./images/image16.jpg)",
    },
    7 : {
        title: "Battle-of-the-dragons-8037",
        album: "Album7",
        duration: "3:57",
        year: "Year7",
        sourceFile: "./audio/battle-of-the-dragons-8037.mp3",
        imageSourceFile: "url(./images/image7.jpg)",
    },

}

var songOrder = 1;

function nextSong(){
    if (songOrder !== 7){
        songOrder += 1;
        document.getElementById("audioSelected").src= songPlaylistLibrary[songOrder]["sourceFile"];

        console.log(songPlaylistLibrary[songOrder]["album"]);

        document.getElementById("song-play-bar-album").innerHTML = songPlaylistLibrary[songOrder]["album"];

        document.getElementById("song-play-bar-title").innerHTML = songPlaylistLibrary[songOrder]["title"];

        document.getElementById("upper-section-container").style.backgroundImage = songPlaylistLibrary[songOrder]["imageSourceFile"];
        
    }else{
        songOrder = 1;
        document.getElementById("audioSelected").src= songPlaylistLibrary[songOrder]["sourceFile"];

        console.log(songPlaylistLibrary[songOrder]["album"]);

        document.getElementById(song-play-bar-album).innerHTML = songPlaylistLibrary[songOrder]["album"];

        document.getElementById("song-play-bar-title").innerHTML = songPlaylistLibrary[songOrder]["title"];

        document.getElementById("upper-section-container").style.backgroundImage = songPlaylistLibrary[songOrder]["imageSourceFile"];
    }
    
}

function previousSong(){
    if (songOrder !== 1){
        songOrder -= 1;
        document.getElementById("audioSelected").src= songPlaylistLibrary[songOrder]["sourceFile"];

        console.log(songPlaylistLibrary[songOrder]["album"]);
        document.getElementById("song-play-bar-album").innerHTML = songPlaylistLibrary[songOrder]["album"];

        document.getElementById("song-play-bar-title").innerHTML = songPlaylistLibrary[songOrder]["title"];     
        
        document.getElementById("upper-section-container").style.backgroundImage = songPlaylistLibrary[songOrder]["imageSourceFile"];
    }else{
        songOrder = 7;
        document.getElementById("audioSelected").src= songPlaylistLibrary[songOrder]["sourceFile"];

        console.log(songPlaylistLibrary[songOrder]["album"]);

        document.getElementById("song-play-bar-title").innerHTML = songPlaylistLibrary[songOrder]["title"];

        document.getElementById("song-play-bar-album").innerHTML = songPlaylistLibrary[songOrder]["album"]; 

        document.getElementById("upper-section-container").style.backgroundImage = songPlaylistLibrary[songOrder]["imageSourceFile"];
    }
    
}

function repeatSong(){
    document.getElementById("audioSelected").currentTime = 0;
}

function selectSongPlaylist(songIndexPassed){
    songOrder = songIndexPassed;
    document.getElementById("audioSelected").src= songPlaylistLibrary[songOrder]["sourceFile"];

        console.log(songPlaylistLibrary[songOrder]["album"]);

        document.getElementById("song-play-bar-title").innerHTML = songPlaylistLibrary[songOrder]["title"];

        document.getElementById("song-play-bar-album").innerHTML = songPlaylistLibrary[songOrder]["album"]; 

        document.getElementById("upper-section-container").style.backgroundImage = songPlaylistLibrary[songOrder]["imageSourceFile"];
}


// var songName = "song1";
// var songTitle = "title";

// console.log(songPlaylistLibrary[songName][songTitle]);

function playPause(){
    if (document.getElementById("audioSelected").paused){
        document.getElementById("audioSelected").play();
        document.getElementById("play-pause-button-container").innerHTML = '<i class="fas fa-pause"></i>';
    }else{
         document.getElementById("audioSelected").pause();
         document.getElementById("play-pause-button-container").innerHTML = '<i class="fas fa-play"></i>';
    }
    
}









function favoriteSong(){
    // document.getElementById("heart-button").style.color = "red";
    // console.log("it is working");
    if (document.getElementById("heart-button").style.color == "red"){
        document.getElementById("heart-button").style.color = "white";
    }else{
        document.getElementById("heart-button").style.color = "red";
    }

}