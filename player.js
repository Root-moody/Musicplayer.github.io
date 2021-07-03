let previous_btn = document.querySelector('#previous');
let play_btn = document.querySelector('#play');
let next_btn = document.querySelector('#next');
let track_title = document.querySelector('#song_title');
let recent_volume = document.querySelector('.volume');
let volume_show = document.querySelector('#volume_show');
let singer_title = document.querySelector('#artist_title');
let song_slider = document.querySelector('#duration_slider');
let auto_play = document.querySelector('#auto');
let track_image = document.querySelector('#song_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total_songs');
let song_duration = document.querySelector('#duration');

let timer;
let autoplay = 0;
let index_number = 0;
let playing_song = false;

//creating an audio element
let audio_track = document.createElement('audio');


//all songs Element
let all_songs = [{
    name: "Attention",
    path: "musics/NavyAttention.mp3",
    img: "song_img/attention.jpg",
    artist: "Navy Kenzo"
}, {
    name: "Magical",
    path: "musics/NavyMagical.mp3",
    img: "song_img/magical.jpg",
    artist: "Navy Kenzo"
}, {
    name: "Nisogelee",
    path: "musics/NavyNisogelee.mp3",
    img: "song_img/nisogelee.jpg",
    artist: "Navy Kenzo"
}, {
    name: "Only one",
    path: "musics/NavyOnlyOne.mp3",
    img: "song_img/onlyone.jpg",
    artist: "Navy Kenzo"
}, {
    name: "Why Now",
    path: "musics/NavyWhyNow.mp3",
    img: "song_img/whynow.jpg",
    artist: "Navy Kenzo"
}, {
    name: "Body Tight",
    path: "musics/NavyBodytight.mp3",
    img: "song_img/bodytightr.jpg",
    artist: "Navy Kenzo"
}];

//function load track
function loadtrack(index_number) {
    audio_track.src = all_songs[index_number].path;
    song_title.innerHTML = all_songs[index_number].name;
    song_image.src = all_songs[index_number].img;
    artist_title.innerHTML = all_songs[index_number].artist;
    audio_track.load();

    //number of songs
    present.innerHTML = index_number + 1;
    total_songs.innerHTML = all_songs.length;
    timer = setInterval(range_slider, 1000);
}
loadtrack(index_number);

//checking if audio is playing
function justplaysong() {
    if (playing_song == false)
        play_song();
    else
        pause_song();

}

//play song
function play_song() {
    audio_track.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
    playing_song = true;
}

//pause song
function pause_song() {
    audio_track.pause();
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    playing_song = false;
}

//play next song
function next_song() {
    if (index_number < all_songs.length - 1) {
        index_number += 1;
        loadtrack(index_number);
        play_song();
    } else {
        index_number = 0;
        loadtrack(index_number);
        play_song();
    }
}

//previous song
function previous_song() {
    if (index_number < all_songs.length - 1) {
        index_number -= 1;
        loadtrack(index_number);
        play_song();
    } else {
        index_number = 0;
        loadtrack(index_number);
        play_song();
    }
}

//auto play
function autoplay_switch() {
    for (let i = 0; i <= index_number; i++) {
        loadtrack(i);
        play_song();
    }
}

//changing volume
function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    audio_track.volume = recent_volume.value / 100;
}

//mute volume
function volume_mute() {
    audio_track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    volume_icon.innerHTML = '<i class="fa fa-volume-off"></i>';
}

//unmute volume
function volume_unmute() {
    audio_track.volume = 50;
    volume.value = 50;
    volume_show.innerHTML = 50;
}

//change slider position
function change_duration() {
    slider_position = audio_track.duration * (duration_slider.value / 100);
    audio_track.currentTime = slider_position;
}

function range_slider() {
    let position = 0;

    //update slider position
    if (!isNaN(audio_track.duration)) {
        position = audio_track.currentTime * (100 / audio_track.duration);
        duration_slider.value = position;
    }
}